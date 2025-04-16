---
title: Transfer Restrictions
description: Asset Transfer Rules
id: transfer-restrictions
slug: /compliance/transfer-rules
sidebar_label: Transfer Restrictions
tags:
  - compliance
  - transfer
---
# Overview

Transfer Restrictions in Polymesh enable users to configure advanced compliance rules to enforce token holder ownership requirements such as, limiting the number of token holders of your token or limiting ownership percentage of each token holder, with optional claim-based scoping. These restrictions work alongside compliance rules to enforce regulatory compliance for your asset.

This permits issuers to answer simple questions like:
- “How many individual investors do I have?” and 
- “What percentage of my outstanding tokens are held by investors?”.
To more advanced questions like
- “What jurisdictions are my tokens held in?" or
- What percentage are held outside my home jurisdiction?”.

Use cases:
- For limiting the number of non-accredited investors or the number of investors in a jurisdiction.
- For percentage based ownership, for example if the asset issuer wants to keep 51% ownership in their home country or in a specific jurisdiction.

::: info
Limits are based on unique token holders which is tracked by token holder’s DID and can be amended at any time by the asset issuer.
:::

# Transfer Restrictions Lifecycle

## 1. Set Active Statistic Types

The 'statistics' pallet provide asset issuers and other permissioned parties (e.g. External Agents) the ability to collect statistical information about investors that hold the asset.

Statistic types can be set up by calling the 'statistics::setActiveAssetStats'.

Parameters: 
- `asset_id` - The asset (identified by its AssetId) to set or change the active stats on.
- 'statTypes' - The new stat types to replace any existing types. It can be either count based or balance based.
  - 'Count': Used for Investor count stats (for maximum investor rule).
  - 'Balance': Used for holder balance count stats (for Percentage based rules).
- 'claimIssuer': Optionally, a claim issuer's type and DID can be added.

Constraints:
- Can only be executed by identities with an Agent permission for the asset.
- New stat types will replace any existing types.
- New asset type cannot be set if a previous stat type that is in use by transfer conditions.
- A maximum of 4 transfer rule per asset allowed. If the limit is reached then 'StatTypeLimitReached' error returned by the chain.

## 2. Set up transfer restrictions

Once the underlying Statistic Type exists, the asset issuer sets the transfer rules using the 'statistics::setAssetTransferCompliance' transaction.

The following claim types can be tracked by transfer conditions: 
- 'Accredited': A claim that the token holder is an accredited or experienced investor.
- 'Affiliate': A claim that a token holder is related to the asset issuer's company/organization in any way; such as, a Director or Officer, employee, subsidiary, etc.
- 'Jurisdiction': A claim about the country that a token holder resides in. Specific country codes can be selected by enabling the 'Jurisdiction' option.

Parameters: 
- `asset_id` - The asset (identified by its AssetId) to change the active stats on.
- `transfer_conditions` - the new transfer condition to replace any existing conditions.
  - 'MaxInvestorCount': To limit the number of token holders.
  - 'MaxInvestorOwnership': To limit the percentage of each token holder.
  - 'ClaimCount': Restrict the percentage of ownership based on different claim types.
  - 'ClaimOwnership':To restrict investor count based on different claim types.
- 'claimIssuer': Optionally, a claim issuer's type and DID can be added. 

Constraints:
- These limits includes the tokenholder / distribution agent in the count.
- Can only be executed by identities with an Agent permission for the asset.
- A transfer condition requires a stat type that is enabled for the `asset_id`.
- Setting up a new transfer condition will replace any existing conditions.
- A maximum of 4 transfer rule per asset allowed. If the limit is reached then 'TransferConditionLimitReached' error returned by the chain.

## 3. (Optional) Exempt identity from transfer restrictions
Asset issuers can set/unset entities exempt from an asset's transfer compliance rules by calling the 'statistics::setEntitiesExempt' function.

Parameters:
- `is_exempt` - enable/disable exemption for a token holder.
- `exempt_key` - the asset ID and stat type to exempt the token holders from.
- `entities` - the token holder's DID to set/unset the exemption for.