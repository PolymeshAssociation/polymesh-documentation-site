---
title: Checkpoint Management
description: Checkpoint Management
id: checkpoint-management
slug: /corporate-actions/checkpoints
sidebar_label: Checkpoint Management
tags:
  - corporate actions
  - checkpoints
---
# Overview

An _asset checkpoint_ is a record of the balances of an asset at a specific time. These records capture both the total asset balance and the balances held by each identity.

Checkpoints are particularly useful for capital distributions and corporate ballots, where a consistent set of balances at a given time (or block) is needed, and can be used to determine how corporate actions are distributed, including how applicable taxes are withheld.


# Checkpoint periods

There are two kinds of periods: ones of fixed length if measured in seconds -- multiples of seconds, minutes, hours, days or weeks -- and ones of variable length -- multiples of months or years.

When computing the time when the next checkpoint is due, if the period is fixed the runtime adds the length of that period in seconds to the time when the last checkpoint was due.

If the period is variable, the next timestamp computation takes into account the day of the month at the start of the schedule. Every checkpoint gets a day of the month that is at most that of the start of the schedule.

For example, assume we have the checkpoint schedule that
- starts on 00:01:00 the 31st of January, 2021 UTC and
- has a period of one month.

The checkpoint timestamps are going to be
- 2021-01-31 00:01:00
- 2021-02-28 00:01:00
- 2021-03-31 00:01:00
- 2020-04-30 00:01:00

and so on.

# Creating a Checkpoint

There are two ways to create a checkpoint:

1. **Manual Checkpoint Creation**: Call the `create_checkpoint(assetId)` function in the `checkpoint` pallet. This creates an immediate checkpoint for the asset specified by `AssetId`. The total balance is recorded instantly, while individual balances are recorded lazily (i.e., just before the next transaction involving each identity). If no transactions occur, no records are made for those identities.

2. **Scheduled Checkpoints**: Set up a checkpoint schedule with `create_schedule(assetId, schedule)`, specifying a series of `Moment` timestamp values. Scheduled checkpoints are created automatically at the specified times but are otherwise identical to manual checkpoints. Scheduling of the next checkpoint also happens lazily only when an asset transaction or minting occurs. If no transactions happen when a checkpoint is due, it is not rescheduled, and the scheduler accounts for any missed checkpoints.
Scheduled checkpoints can be removed by calling the `removeschedule(assetId, id)` function, specifying the `AssetId` and the `Id` of the checkpoint when it was created by `create_schedule(assetId, schedule)`.

# Accessing an existing Checkpoint

The checkpoints of an asset form a sequence that is indexed starting from 1. The total balance and balances of identities are stored at these indices.

To read the total supply of an `AssetId` at checkpoint index `i` one calls the getter `total_supply_at(AssetId, i)` in the asset pallet. The getter returns the value directly from runtime storage.

To read the checkpoint balance of identity one calls the function `get_balance_at(AssetId, identity, i)` in the same pallet. This function returns the checkpoint balance at i by searching for the least checkpoint index greater or equal to i or, if no such record exists due to the absence of transactions, the current asset balance of identity.

The time at which a checkpoint was made is stored in a map indexed by checkpoint sequence numbers and can be read knowing the required sequence number.