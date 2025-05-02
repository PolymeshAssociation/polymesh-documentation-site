---
title: Fungible Assets
description: Fungible Asset Management
id: fungible-assets
slug: /assets/fungible
sidebar_label: Fungible Assets
tags:
  - assets
  - fungible
---

## Overview

Fungible assets on Polymesh represent digitized value such as shares, bonds, funds, stablecoins, and more. They are managed using the standardized Polymesh asset framework, ensuring all assets benefit from built-in compliance, settlement, and lifecycle management features. For a high-level introduction to assets and the Polymesh asset standard, see [Assets on Polymesh](/assets).

Fungible assets are interchangeable tokens with divisible or indivisible supply. Ownership is represented by balances held by different on-chain identities. They allow access to all core features such as compliance, settlement, corporate actions, metadata, and agent permissions, all available natively on-chain. For more on these features, see the relevant dedicated pages:

- [Compliance](/compliance)
- [Settlement](/settlement)
- [Asset Metadata](/assets/metadata)
- [Asset Agents & Permissions](/asset-agents)
- [Ownership Transfer](/assets/ownership-transfer)
- [Corporate Actions](/corporate-actions)
- [Security Token Offerings](/sto)

## Asset Creation

To create a fungible asset, users specify the asset type (e.g., Equity, Bond, Fund), divisibility, and optional metadata. Each asset is assigned a unique Asset ID and can have a unique ticker and external identifiers (such as ISINs, CUSIPs, etc.). For a step-by-step guide, see [Asset Creation](/assets#asset-creation).

## Issuance and Distribution

After creation, issuers or their appointed [agents](/asset-agents) can issue tokens to portfolios they control. Tokens can then be distributed to investors through a security token offering or directly using the settlement and compliance engines. See [Settlement](/settlement) and [Security Token Offerings](/sto) for more on fundraising and distribution.

## Key Features Unique to Fungible Assets

### Issuance and Redemption

- **Issuance**: An agent of the fungible asset can mint (issue) tokens to a portfolio under their on-chain identity (control of the portfolio can be assigned to another identity before issuing assets). This increases the total supply and the recipient's balance. Tokens are issued by calling the `asset::issue` method, specifying the `asset_id`, `amount`, and target portfolio.
- **Redemption**: Tokens can be redeemed (burned) from a portfolio owned by an appropriately permissioned agent of the asset, reducing both the total supply and the portfolio's balance. Tokens are redeemed by calling the `asset::redeem` method, specifying the `asset_id`, `value`, and portfolio to redeem the tokens from.

### Divisibility

- Fungible assets can be created as divisible or indivisible. Divisibility is set at creation, but an indivisible asset can later be made divisible using the `asset::make_divisible` method (callable by the asset owner or agent). Once an asset is made divisible, this change is permanent and cannot be reversed.
- Divisibility affects the granularity of balances and transfers. For example, a divisible asset can represent shares with decimals, while an indivisible asset might represent whole-number units.

:::info
**Decimals:** All fungible assets on Polymesh use 6 decimals of precision. On-chain, balances are stored as integers, where 1 unit is represented as 1,000,000. If using the Polymesh SDK, it automatically converts between user-facing decimal values and the on-chain integer representation. Applications and user interfaces not using the SDK should account for this when displaying or entering amounts.
:::

### Corporate Actions & Checkpoints

- **Corporate Actions**: Fungible assets support on-chain corporate actions such as distributions and voting. These actions are tightly integrated with the asset's compliance and settlement features, allowing issuers to manage complex processes like dividend payments, shareholder meetings, and other corporate events directly on-chain. See [Corporate Actions](/corporate-actions) for more information.
- **Checkpoints**: Corporate actions rely on checkpoints, which are a feature of fungible assets only. Checkpoints are snapshots of all holder balances at a specific point in time. Checkpoints are essential for many corporate actions and compliance activities, such as dividend distributions, voting, and regulatory reporting. See [Checkpoint Management](/corporate-actions/checkpoints) for details.

### Transfer Restrictions

- **Transfer Restrictions**: In addition to identity-based on-chain compliance rules, Polymesh provides advanced transfer restriction features for fungible assets via the statistics pallet. These allow issuers to enforce count and percentage ownership restrictions such as a maximum investor count, maximum ownership percentage, and claim-based restrictions (e.g., jurisdiction, accreditation claim count restrictions). See [Transfer Restrictions](/compliance/transfer-restrictions) for details.

## Further Reading

- [Asset Management](/assets)
- [Non-Fungible Assets](/assets/nft)
- [Asset Metadata](/assets/metadata)
- [Asset Agents & Permissions](/asset-agents)
- [Ownership Transfer](/assets/ownership-transfer)
- [Checkpoint Management](/corporate-actions/checkpoints)
- [Corporate Actions](/corporate-actions)
- [Security Token Offerings](/sto)
- [Transfer Restrictions](/compliance/transfer-restrictions)
