---
title: Fungible Assets
description: Fungible Token Management
id: fungible-assets
slug: /assets/fungible
sidebar_label: Fungible Assets
tags:
  - assets
  - fungible
---

## Overview

Fungible assets on Polymesh can represent any type of digitized asset and are originated and managed through asset primitives implemented within Polymesh's base-layer logic.

This ensures that all assets are created in a standardized manner, enabling related functionalities—such as corporate actions, settlement, and compliance—to operate seamlessly across all assets.

Once an asset is created, its ownership is represented by balances of that asset's tokens held by different investors.

Ownership of an asset on Polymesh is defined by:

- **Total supply**: the total number of tokens representing ownership in the asset.
- **Investor balances**: the individual balance held by each investing identity.

For more details, see the [asset pallet documentation](https://docs.polymesh.live/pallet_asset/index.html).

Polymesh allows you to manage the entire lifecycle of an asset directly on the blockchain, including issuance, initial distribution or fundraising, and subsequent corporate actions such as dividend payments, capital distributions, or corporate ballots.

Asset tokens can be either divisible or indivisible.

## Asset Creation

Users can create assets and specify the asset type (e.g., Equity, Bond, Fund). Upon creation, Polymesh assigns a unique system-generated Asset ID to the new asset.

Initially, the asset is created with a zero total supply.

In addition to its unique Asset ID, an asset can have a unique ticker and external identifiers (such as ISINs, CUSIPs, CINs, LEIs, and DTIs), which Polymesh validates to ensure consistency (i.e., checksum validation).

### Issuance Process

Once an issuer has created and configured an asset, they or their appointed [External Agent](/assets#external-agents) can issue tokens representing ownership in the asset to a portfolio they control.

Tokens can then be distributed to investors through a security token offering or directly using the settlement and compliance engines.

This approach allows for a clear separation between the issuance process, which bypasses the settlement engine, and the distribution process, which leverages both compliance and settlement engine.

## Checkpoints

An _asset checkpoint_ is a record of the balances of an asset at a specific time. These records capture both the total asset balance and the balances held by each identity.

Checkpoints are particularly useful for capital distributions and corporate ballots, where a consistent set of balances at a given time (or block) is needed.

### Creating a Checkpoint

There are two ways to create a checkpoint:

1. **Manual Checkpoint Creation**: Call the `create_checkpoint(assetId)` function in the `checkpoint` pallet. This creates an immediate checkpoint for the asset specified by `AssetId`. The total balance is recorded instantly, while individual balances are recorded lazily (i.e., just before the next transaction involving each identity). If no transactions occur, no records are made for those identities.

2. **Scheduled Checkpoints**: Set up a checkpoint schedule with `create_schedule(assetId, schedule)`, specifying a series of `Moment` timestamp values. Scheduled checkpoints are created automatically at the specified times but are otherwise identical to manual checkpoints. Scheduling of the next checkpoint also happens lazily only when an asset transaction or minting occurs. If no transactions happen when a checkpoint is due, it is not rescheduled, and the scheduler accounts for any missed checkpoints.

### Accessing an Existing Checkpoint

The checkpoints for an asset form a sequence, indexed starting from 1. The total balance and individual balances for identities are stored at these indices.

- To retrieve the total supply of `assetId` at checkpoint index `i`, call `total_supply_at(assetId, i)` in the `asset` pallet. This directly retrieves the value from runtime storage.
- To retrieve the checkpoint balance of an `identity`, call `get_balance_at(assetId, identity, i)`. This function finds the balance at index `i` by searching for the closest checkpoint greater than or equal to `i`. If no record exists due to inactivity, returns the current balance of the `identity`.

The time of each checkpoint is stored in a map indexed by checkpoint sequence numbers and can be accessed by referencing the appropriate sequence number.
