---
title: Checkpoint Management
description: Create and manage snapshots of asset holder balances at specific points in time
id: checkpoint-management
slug: /corporate-actions/checkpoints
sidebar_label: Checkpoint Management
tags:
  - corporate actions
  - checkpoints
---

## Overview

An asset checkpoint is a snapshot of all holder balances for a specific asset at a particular point in time. Checkpoints are essential for many corporate actions and compliance activities, providing a verifiable record of asset ownership that can be referenced for:

- **Corporate Actions**: Support key events like dividend distributions and voting
- **Regulatory Reporting**: Generate point-in-time records for compliance requirements
- **Ownership Analysis**: Track historical ownership patterns and changes
- **Income Distribution**: Process payments based on ownership at specific dates
- **Governance**: Enable voting weight calculations and participation tracking

## Core Concepts

### Balance Recording

Checkpoints track two types of information:

- **Total Supply**: The total amount of the asset in circulation
- **Individual Balances**: The amount held by each identity

### Lazy Updates

Checkpoints behave slightly differently depending on the checkpoint type:

- **Manual Checkpoints**:

  - Total supply is recorded immediately when the checkpoint is created
  - Individual balances are recorded lazily when they first change after the checkpoint

- **Scheduled Checkpoints**:
  - The checkpoint only materializes when a balance-modifying transaction occurs at or after the scheduled time
  - If no balance-modifying transaction occurs, the checkpoint never materializes on chain but remains as "pending" under the `checkpoint::ScheduledCheckpoints` chain storage entry
  - When a checkpoint materializes:
    - The total supply at that moment is recorded. If the transaction that triggered the checkpoint creation was issuing or redeeming an asset, the total supply is recorded before the change, to reflect the supply at the time of the checkpoint.
    - Individual balances begin being recorded lazily as they change
  - For unmaterialized checkpoints, current balances are considered correct for that checkpoint

This approach ensures accurate recording while optimizing storage costs.

## Creating Checkpoints

There are two methods for creating checkpoints:

### 1. Manual Checkpoints

Individual checkpoints can be created immediately using `asset::create_checkpoint`. These are useful for:

- One-off corporate actions
- Ad-hoc reporting requirements
- Unscheduled distributions
- Emergency or compliance-driven balance snapshots

### 2. Scheduled Checkpoints

Scheduled checkpoints are created by providing an array of future timestamps using `asset::create_schedule`. The schedule consists of:

- A sorted array of timestamps defining when checkpoints should be created
- Each timestamp specified in milliseconds since Unix epoch
- All timestamps must be in the future at creation time

A scheduled checkpoint materializes when the following criteria are met:

1. The scheduled timestamp has been reached
2. Any action that modifies a user's balance occurs (transfer, mint, burn)
3. No checkpoint has been created yet for that scheduled time

:::note
If multiple scheduled checkpoints have passed their timestamp when a balance-modifying action occurs, all of them will be materialized in order. This catch-up mechanism ensures no scheduled checkpoints are missed.
:::

:::note
Once created, schedule timestamps cannot be modified, the schedule can only be removed. A new schedule must be created if changes are needed.

`asset::remove_schedule` removes an existing checkpoint schedule.
:::

## Accessing Checkpoint Data

To determine balances at a checkpoint, you need to query the available storage maps.

### Query Total Supply

The total supply at a checkpoint reflects the supply when the checkpoint was created. The chain storage `checkpoint::TotalSupply` when provided with the assetId and checkpoint ID returns the total supply at that checkpoint.

### Query Identity Balance

An identity's balance at a specific checkpoint is determined as follows:

- If the identity has had any balance changes after the checkpoint, the `checkpoint::BalanceUpdates` will include a checkpoint entry greater than or equal to the checkpoint of interest. Query `checkpoint::Balance` for the nearest checkpoint greater than or equal to the required checkpoint.
- If no balance changes occurred after the checkpoint there will be no checkpoint entry in the `checkpoint::BalanceUpdates` storage greater than or equal to the checkpoint of interest and you should use their current balance from `asset::BalanceOf`

:::note Important
Checkpoints are numbered sequentially starting from 1. This sequential numbering is important when querying checkpoint data, as you'll need to use these checkpoint IDs to access the relevant data.

The lazy update mechanism means balance history is only recorded when changes occur. When querying historical balances, you must account for whether balance updates exist for that checkpoint.
:::

### Query Checkpoint Creation Time

The `checkpoint::Timestamp` storage map provides the timestamp associated with a checkpoint, which can be used for:

- Verification of checkpoint timing
- Determining if a scheduled checkpoint was materialized
- Auditing and reporting purposes

## Best Practices

When implementing checkpoints:

1. **Schedule Planning**:

   - Plan checkpoint timestamps carefully as they cannot be modified once scheduled
   - Consider timezone implications when setting timestamps
   - Account for any relevant business calendar requirements

2. **Performance Optimization**:

   - Understand that storage costs are optimized through lazy updates
   - Consider the frequency of checkpoints needed
   - Remember that each scheduled checkpoint consumes chain resources

3. **Data Management**:

   - Monitor checkpoint creation success
   - Maintain schedule IDs for management
   - Remove schedules if they are no longer required

:::note
Checkpoints are immutable once created. Ensure timing and asset selection are correct before creation.
:::

:::tip
When querying historical balances, remember that the lazy update mechanism means some checkpoint balances may be the current holdings rather than historical positions if no transactions occurred after the checkpoint.
:::
