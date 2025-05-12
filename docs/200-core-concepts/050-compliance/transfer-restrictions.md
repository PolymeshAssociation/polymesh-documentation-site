---
title: Transfer Restrictions
description: Rules for limiting asset transfers and ownership on Polymesh.
id: transfer-restrictions
slug: /compliance/transfer-restrictions
sidebar_label: Transfer Restrictions
tags:
  - compliance
  - transfer
---

## Overview

Transfer restrictions in Polymesh are implemented using the statistics module, and can only be configured for fungible assets (see the [Fungible Assets](/core/assets/fungible) documentation for more details). The statistics module tracks key metrics ("statistics") about asset holders, and transfer restrictions are enforced based on these statistics at the protocol level. This allows asset issuers to enforce compliance rules such as:

- Limiting the number of unique token holders (count-based restrictions)
- Capping the maximum percentage of the total supply that any single holder can own (percentage-based restrictions)
- Restricting the number of holders or aggregated percentage of the asset held by holders with or without specific claims (claim-based restrictions, e.g., accredited status or jurisdiction; see [Compliance](/compliance/#claims) for more on claims)

Claim-based restrictions can target both holders who possess a claim (e.g., accredited investors) and those who do not (e.g., non-accredited investors), enabling rules such as limiting the number of non-accredited investors by counting holders without the accredited claim. For more on how agent permissions interact with compliance and transfer rules, see [Asset Agents & Permissions](/asset-agents). Venue filtering is also supported as a type of transfer restriction; see [Trading Venues](/settlement/venues).

Restrictions can be applied to all holders of the asset (e.g., total holder count or maximum ownership percentage across the entire supply), or scoped to holders with particular claims (e.g., only those who are accredited investors or belong to a certain jurisdiction). Once configured, transfer restrictions are enforced automatically at the protocol level. Exemptions can be granted to specific identities, allowing them to bypass certain restrictions, but **all holders**, including exempted ones, are still **included in the statistics used for restriction checks and compliance reporting**. This ensures that compliance reporting and enforcement remain accurate and transparent.

:::note
Transfer restrictions can only be configured for fungible assets on Polymesh. Non-fungible assets are not supported by the statistics module.
:::

**Use cases include:**

- **Limiting the number of investors:** Preventing the asset from being held by more than a specified number of unique investors (important for regulatory compliance in some jurisdictions, e.g., US Reg D 12(g) holder limits).
- **Capping individual ownership:** Ensuring that no single investor can accumulate more than a set percentage of the total supply (supports fair distribution and helps prevent monopolies).
- **Enforcing claim-based restrictions:** Restricting the number or percentage of tokens that can be held by investors with specific claims (e.g., only allowing a certain number of non-accredited investors, or capping the percentage of tokens held by investors from a particular country or with a particular status).
- **Dynamic compliance management:** Allowing issuers to update restrictions as regulations or business needs change, and to exempt specific identities (such as company insiders or strategic partners) from certain rules without affecting the overall statistics.

## Restriction Types and Enforcement

The statistics module tracks various statistics about asset holders, and transfer restrictions are enforced based on these statistics. Each type of restriction has specific logic for how it impacts senders and receivers:

:::info Statistic Limit and Performance
A maximum of 4 statistics can be tracked for a single asset at any time. Attempting to add more will result in an error.

Each statistic that is tracked adds additional overhead to every transfer involving the asset, regardless of whether a restriction is enforced on it. For best performance, only enable the minimum set of statistics and restrictions required for your compliance needs.
:::

### Holder Count Restrictions

- Triggered when a new token holder is being added (receiver previously had zero balance).
- Checks if adding the new token holder would exceed the maximum allowed token holder count.
- Does not restrict transfers between existing token holders or when a holder exits completely.

### Holder Percent Ownership Restrictions

- Focuses on the receiver's new total ownership percentage after the transfer.
- Restricts transfers that would cause a receiver to exceed the maximum allowed ownership percentage.

### Claim Count Restrictions

- Enforces both minimum and maximum limits on holders with specific claims.
- If the sender has the relevant claim and is transferring all tokens, ensures the total holders with this claim doesn't drop below the minimum.
- If the receiver has the relevant claim and is a new token holder, ensures the total holders with this claim doesn't exceed the maximum.
- No restriction if the sender/receiver claim status doesn't affect the counts.

### Claim Ownership Percentage Restrictions

- Focuses on the aggregate percentage of the total token supply held by all identities with specific claims (not the percentage of holders with the claim).
- Four cases are handled:
  1. Both sender and receiver have the claim: No change in aggregate percentage (allowed).
  2. Neither have the claim: No change in percentage (allowed).
  3. Only receiver has the claim: Ensures the aggregate percentage doesn't exceed maximum.
  4. Only sender has the claim: Ensures the aggregate percentage doesn't drop below minimum.

:::note Behavior When Limits Are Exceeded

There are situations where the configured limits may be temporarily exceeded—for example, when an exempted entity is involved in a transfer, when an investor's claim status changes, or when the asset issuer sets a new limit that is lower than the current number of holders. In these cases, further transfers are only permitted if they do not worsen the violation. Specifically:

- For **count-based restrictions** (e.g., maximum number of holders, claim count): Transfers that would increase the count above the maximum or decrease it below the minimum are blocked. However, transfers that maintain the current count or bring it closer to compliance (such as reducing the number of holders when above the limit) are allowed. For example, if the holder count is already above the maximum, a transfer from one existing holder to another existing holder is allowed, and a transfer where a holder exits completely (transferring all tokens to a new holder) is allowed if the total count does not increase.
- For **percentage-based restrictions** (e.g., maximum ownership percentage, claim ownership percentage):
  - For non-claim-based restrictions, any transfer that would cause an individual holder to exceed the maximum is blocked (unless exempt).
  - For claim-based restrictions, transfers are blocked if they would cause the aggregate balance of all holders with the claim to exceed the maximum allowed percentage of the total supply. Transfers that do not worsen the violation (such as transferring between existing holders with the claim, or reducing the aggregate claim-holder balance) are allowed.
- **Exemptions** allow certain identities to bypass these restrictions as described in the [Exemptions](#exemptions) section.

In summary, transfers that maintain or improve compliance with the configured limits are permitted, while those that would worsen a violation are blocked (unless an exemption applies).

**Example:**
If the maximum holder count is 100 and there are already 101 holders (perhaps due to a rule change or an exemption), a transfer from Alice (an existing holder) to Bob (a new holder) is only allowed if Alice is exiting completely (so the total count does not increase). Transfers between existing holders are always allowed, regardless of the current count.
:::

These mechanisms ensure that all configured restrictions are enforced at the protocol level, and that compliance is maintained for both count- and percentage-based rules, including those scoped to specific claims or the absence of claims.

## Transfer Restrictions Lifecycle

### 1. Set Active Statistic Types

To begin, use `statistics::setActiveAssetStats` to define which statistics (counts or balances) will be tracked for a given asset. This initializes the storage for the selected stat types. Only identities with Agent permission for the asset can perform this action. Setting new stat types will replace any existing types. You cannot set a new stat type if a previous one is still in use by transfer conditions. Maximum of 4 stat types per asset.

**Parameters:**

- `asset_id`: The asset to configure.
- `stat_types`: The new stat types to track (e.g., `Count` for holder count, `Balance` for percentage-based rules).
- `claimIssuer` (optional): Specify a claim issuer for claim-based stats.

---

### 2. Batch Update Asset Statistics

If you enable a new stat type for an asset that already has holders, or when claims are added or removed from identities, use `statistics::batchUpdateAssetStats` to update the tracked counts or balances. This ensures the statistics reflect the current state of holders and claims. This transaction can be used at any time to synchronize the tracked stats with the actual asset state.

**Parameters:**

- `asset_id`: The asset to update.
- `stat_type`: The stat type to update (must be active for the asset).
- `values`: The set of stat updates to apply (e.g., balances, counts, claim changes).

---

### 3. Set Asset Transfer Compliance

Configure the actual transfer restrictions for the asset using `statistics::setAssetTransferCompliance`. The issuer defines which rules (such as maximum holder count, maximum ownership percentage, or claim-based restrictions) will be enforced. Each restriction must correspond to a stat type that is already active for the asset. Setting new transfer conditions will replace any existing ones. Maximum of 4 transfer rules per asset.

**Parameters:**

- `asset_id`: The asset to configure.
- `transfer_conditions`: The set of transfer conditions to enforce (e.g., `MaxInvestorCount`, `MaxInvestorOwnership`, `ClaimCount`, `ClaimOwnership`).
- `claimIssuer` (optional): Specify a claim issuer for claim-based restrictions.

---

### 4. (Optional) Set Entities Exempt

To exempt specific identities from one or more transfer restrictions, use `statistics::setEntitiesExempt`. Exemptions can be set or removed at any time, and are useful for allowing certain parties (such as company insiders or strategic partners) to bypass specific compliance rules without affecting the overall statistics.

**Parameters:**

- `asset_id`: The asset for which to set exemptions.
- `is_exempt`: Enable or disable exemption for the entities.
- `exempt_key`: The stat type and asset ID for which the exemption applies.
- `entities`: The DIDs of the token holders to set or unset as exempt.

## Exemptions

Exemptions allow specific identities to bypass certain transfer restrictions, but do not remove them from the statistical calculations. The exemption mechanism is applied as follows:

- For **count-based restrictions** (such as maximum number of holders), the **sender** must be exempt to bypass the restriction.
- For **ownership percentage restrictions** (such as maximum percentage ownership), the **receiver** must be exempt to bypass the restriction.

Exemptions are only checked if a transfer would otherwise be blocked by a restriction. If the transfer does not violate any restriction, exemptions are not considered.

All identities, including those that are exempt, are still included in the statistics used for compliance checks and reporting. This ensures that the asset's compliance status and reporting remain accurate and complete, regardless of exemptions.
