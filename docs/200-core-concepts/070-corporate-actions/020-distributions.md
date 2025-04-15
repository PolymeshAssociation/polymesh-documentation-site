---
title: Capital Distribution
description: Distribute payments to asset holders based on their holdings at a specific point in time
id: capital-distribution
slug: /corporate-actions/distributions
sidebar_label: Capital Distribution
tags:
  - corporate actions
  - capital distribution
  - dividends
  - distribution
---

## Overview

Capital distribution on Polymesh allows issuers to distribute payments to holders of a specific asset based on their holdings recorded at a particular [checkpoint](/corporate-actions/checkpoints). While commonly used for dividends, this functionality can support any type of payment or benefit distribution to asset holders. The process is managed on-chain, ensuring transparency and automation. Distributions are typically made using a separate asset, often a stablecoin representing fiat currency, but can be any Polymesh asset.

:::info Regulatory Compliance
Corporate actions like dividend distributions may trigger registration or filing requirements with applicable securities regulators or other governmental authorities. Always consult with legal and financial advisors before initiating a corporate action.
:::

## Core Concepts

- **Target Asset**: The asset whose holders will receive the distribution (identified by its `AssetId`).
- **Distribution Asset**: The asset used for payment (identified by its `AssetId`).
- **Checkpoint**: A snapshot of target asset holder balances at a specific time, used to determine entitlements.
- **Distributor**: The identity (usually the asset issuer or an [authorized agent](/external-agents)) initiating and funding the distribution.
- **Payment Amount**: The total amount of the distribution asset allocated for the distribution.
- **Payment Per Share**: The amount of distribution asset paid for each unit of the target asset held.
- **Payment Date**: The date from which holders can claim their payments.
- **Expiry Date** (Optional): The date after which unclaimed distributions can be reclaimed by the distributor. If not set, the distribution never expires.

## Use Cases

- **Dividend Payments**: Distribute quarterly or annual profits to shareholders.
- **Interest Payments**: Distribute interest to bondholders or other debt security holders.
- **Royalty Distributions**: Share revenue with rights holders based on ownership percentages.
- **Incentive Payments**: Reward long-term holders or participants in governance.
- **Income Distribution**: Payments from funds or income-generating assets.
- **Liquidation Distributions**: Distributing remaining assets during company wind-down.
- **Rebates or Rewards**: Return capital based on usage, loyalty, or other metrics associated with asset holding.

## Distribution Lifecycle

The capital distribution process involves several key steps managed through specific transactions. **Crucially, before a distribution can be created, a corresponding [Corporate Action](/corporate-actions#2-initiate-corporate-action) must first be initiated** using `corporateAction::initiate_corporate_action`. This step defines the record date (via a checkpoint), target holders, tax settings, and generates the `CAId` (composed of the target `AssetId` and a local ID) required for the distribution.

### 1. Create Distribution

Once the underlying Corporate Action exists, the distributor attaches the distribution details using the `capitalDistribution::distribute` transaction.

**Parameters**:

- `ca_id`: Corporate Action Identifier **obtained from initiating the Corporate Action**. It contains:
  - `asset_id`: The `AssetId` of the target asset.
  - `local_id`: A user-defined ID for this specific distribution event.
- `portfolio`: The portfolio from which the distribution asset will be sourced.
- `currency`: The `AssetId` of the asset being distributed (the dividend currency).
- `per_share`: The amount of `currency` paid per unit of the target asset.
- `amount`: The total amount of `currency` to be distributed. This amount becomes locked in the specified `portfolio` for the purposes of the distribution.
- `payment_at`: The timestamp (specified in milliseconds since Unix epoch) when the payment period begins. Holders can claim from this point.
- `expires_at` (Optional): The timestamp when the distribution expires. If `None`, it never expires.

**Effects**:

- Creates the distribution record on-chain, linking it to the initiated Corporate Action.
- Locks the specified `amount` of `currency` in the distributor's `portfolio` for the purposes of the distribution.
- Defines the payment terms and timeline.

:::tip Combined Initiation and Distribution
For convenience, the `corporateAction` pallet provides the `initiateCorporateActionAndDistribute` extrinsic. This allows the Corporate Action Agent to initiate the CA and create the distribution in a single transaction, streamlining the process. This is generally preferred over using separate calls.
:::

:::warning Fund Depletion
Distributions operate on a "first come, first served" basis regarding the locked `amount`. If the total calculated entitlement based on `per_share` and the checkpoint balances exceeds the locked `amount`, funds might be depleted before all holders claim or receive their full share. Ensure the `amount` is sufficient to cover all entitlements.
:::

### 2. Claim Payments

Asset holders who were included in the target identities of the Corporate Action and who held the asset at the record date can claim their entitled payments once the `payment_at` date is reached by calling `capitalDistribution::claim`.

**Parameters**:

- `ca_id`: The Corporate Action Identifier for the distribution.

**Effects**:

- Calculates the holder's entitlement based on their balance at the specified checkpoint and the `per_share` rate.
- Considers any applicable tax withholdings configured for the corporate action.
- Transfers the net payment amount (post-tax) from the distributor's locked portfolio to the claimant's **default portfolio**.
- Updates the distribution record to reflect the claimed amount.
- Marks the holder as paid to prevent double claims (a holder can only claim once per distribution).

**Constraints**:

- Claims can only be made after the `payment_at` date has been reached.
- Claims cannot be made after the `expires_at` date (if specified) has passed.
- Each holder can only claim once per distribution.
- Only identities that were included in the Corporate Action's targeting (either directly or by not being excluded) are eligible to claim.

### 3. Push Benefit

The distributor (or an authorized agent) can proactively send the payment to specific holders, rather than waiting for them to claim, using `capitalDistribution::push_benefit`.

**Parameters**:

- `ca_id`: The Corporate Action Identifier.
- `holder`: The identity of the asset holder to receive the payment.

**Effects**:

- Similar to `claim`, but initiated by the distributor for a specific holder with the distributor paying the associated transaction fees.
- Calculates entitlement, applies taxes, and transfers the net amount to the target's **default portfolio**.
- Marks the specified holder as paid, preventing them from claiming the same distribution later.

**Constraints**:

- Can only be executed by identities with an Agent permission for the asset.
- Can only be pushed after the `payment_at` date has been reached.
- Cannot be pushed after the `expires_at` date (if specified) has passed.
- Cannot be pushed to holders who have already claimed or received a pushed benefit.
- Can only be pushed to identities included in the Corporate Action's target set (holders at the record date who weren't explicitly excluded).

### 4. Reclaim Funds

If an `expires_at` date was set and has passed, the distributor (the agent who created the distribution) can reclaim any remaining, unclaimed funds using `capitalDistribution::reclaim`.

**Parameters**:

- `ca_id`: The Corporate Action Identifier.

**Effects**:

- Checks if the distribution has expired.
- Unlocks any remaining `currency` in the distributor's portfolio that was locked for this distribution.
- Transfers the unlocked amount back to the distributor's available balance.
- Marks the distribution as reclaimed, preventing any further claims or pushes.

**Constraints**:

- Can only be executed after the `expires_at` timestamp has passed.
- Can only be executed once per distribution.
- Can only be executed by the same identity that created the distribution.
- Cannot be executed if no `expires_at` date was set.

:::warning Indefinite Lockup
If no `expires_at` is set, unclaimed funds remain locked indefinitely in the distributor's portfolio unless claimed or pushed. Distributions with no expiry should be used with caution, as they may lead to permanently locked funds.
:::

### 5. Remove Distribution

The distributor can remove a distribution entirely before its payment date, by calling `capitalDistribution::remove_distribution`.

**Parameters**:

- `ca_id`: The Corporate Action Identifier.

**Effects**:

- Removes the distribution record from the chain state.
- Can only be executed if the distribution hasn't started yet (current time < `payment_at`).
- Once the payment period begins (current time >= `payment_at`), a distribution can no longer be removed.

## Checkpoint Integration

Capital distributions rely heavily on [Checkpoints](/corporate-actions/checkpoints) to determine entitlements. The `record_date` specified during the `corporateAction::initiate_corporate_action` call determines which checkpoint is used. This checkpoint captures the balances of the target asset at a specific moment.

- Ensure the correct checkpoint (representing the desired record date) is associated with the Corporate Action ID used for the distribution.
- The checkpoint must exist _before_ the distribution is created.

## Withholding Tax and Fund Management

The `amount` specified when creating a distribution should include **both** the net amount to be transferred to asset holders **and** any withholding tax amounts.

### Tax Handling Process

1. When a distribution is created, the full `amount` (covering both net payments and withholding tax) is locked in the distributor's portfolio.

2. When a holder claims or is pushed a benefit:

   - The full gross entitlement (including tax) is unlocked from the distribution's locked funds
   - Only the net amount (after tax is withheld) is transferred to the holder
   - The withheld tax amount remains in the distributor's portfolio, now unlocked and available for use

3. The distributor can then manage these unlocked tax funds separately (e.g., transferring to tax authorities as required).

:::caution Tax Management
The withholding tax mechanism only handles the calculation and withholding of taxes. The distributor is responsible for properly managing and remitting the withheld taxes to the appropriate tax authorities according to applicable regulations.
:::

:::warning Unclaimed Funds with No Expiry
If no `expires_at` is set and some holders never claim their benefits, both their share and the associated withholding tax would remain locked indefinitely in the distribution. This is why setting an expiry date is generally recommended.
:::

## Handling Asset Types (Divisible vs. Indivisible)

The nature of the **distribution asset** (`currency`) impacts calculations:

- **Divisible Assets**: Can represent fractional amounts (e.g., 1.50 units). Calculations are precise.
- **Indivisible Assets**: Can only exist in whole units (e.g., 1, 2, 3 units).

**Rounding Implications**:

- Initial benefit calculations (balance \* per_share) are done with full precision.
- Only the final **transfer amount** (post-tax gain) is rounded **down** to the nearest whole unit when distributing an **indivisible** asset.
- The full calculated benefit amount (including any fractional part) is unlocked from the distribution's funds.
- For indivisible assets, the difference between the full benefit amount and the rounded transfer amount will remain in the distributor's portfolio, but becomes available for use.

**Example (Indivisible Currency)**:

- Target Asset: STOCK (Divisible)
- Distribution Asset: BOND_CERT (Indivisible)
- Checkpoint Balance: Holder A has 10.5 STOCK.
- Per Share Rate: 0.75 BOND_CERT per STOCK.
- Tax Rate: 10%

1. **Gross Entitlement**: 10.5 STOCK \* 0.75 BOND_CERT/STOCK = 7.875 BOND_CERT.
2. **Tax Calculation**: 7.875 BOND_CERT \* 10% = 0.7875 BOND_CERT.
3. **Net Amount (Gain)**: 7.875 - 0.7875 = 7.0875 BOND_CERT.
4. **Amount Unlocked**: 7.875 BOND_CERT (full gross entitlement).
5. **Amount Transferred**: 7 BOND_CERT (gain rounded down to whole unit for indivisible asset).
6. **Amount Remaining in Distributor's Portfolio**: 0.875 BOND_CERT (unlocked and available).

:::info Reclaiming Indivisible Assets
While fractional amounts of indivisible assets cannot be transferred between portfolios (only whole units can be sent), fractions can remain unlocked in the distributor's portfolio after a claim or push of an indivisible asset. When the `reclaim` function is called after a distribution expires, the **entire** remaining amount is unlocked in the distributor's portfolio, including any fractional amounts of indivisible assets. This allows the distributor to recover all locked funds, even partial units of indivisible assets that couldn't be transferred during the distribution phase.
:::

## Distribution System Limitations

When working with capital distributions on Polymesh, it's important to be aware of the following limitations:

- **Fund Sufficiency**: Ensure the locked `amount` is adequate to cover all potential claims based on the checkpoint balances and `per_share` rate. Insufficient funds lead to a first-come, first-served payout until depletion.

- **Identity-Only Claims**: Only the asset owner (the identity/DID that holds the asset) can claim their benefit.

- **Default Portfolio Only**: Benefits are always delivered to the default portfolio of the claiming identity. Benefits cannot be directed to specific portfolios, even when the same identity has multiple portfolios containing the target asset. The calculation is based on the total asset balance across all of the identity's portfolios.

- **No Custodian Claims**: Custodians cannot claim benefits on behalf of their clients whose assets they custody. The asset owner must claim directly or the agent of the distribution must push them.

:::tip Using Push Benefits
For scenarios where asset owners cannot or should not need to claim themselves, the `push_benefit` function provides a way for the distributor to proactively deliver benefits to holders who might be unable to claim directly.
:::
