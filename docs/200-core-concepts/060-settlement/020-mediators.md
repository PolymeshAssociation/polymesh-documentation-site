---
title: Settlement Mediators
description: Third-party validation and approval in the settlement process
id: settlement-mediators
slug: /settlement/mediators
sidebar_label: Settlement Mediators
tags:
  - settlement
  - mediators
---

## Overview

Settlement mediators in Polymesh are entities that must affirm settlement instructions before they can be executed. They provide an optional additional layer of control and validation in the settlement process, enabling scenarios where third-party verification or approval is required before transfers can execute on chain. Mediators can represent transfer agents, smart contracts, or other entities that need to validate transactions before they occur.

Mediator affirmations can have an optional expiry after which it will no longer be valid requiring the mediator to reaffirm the instruction before it can execute. Mediators can also withdraw their affirmation or reject/cancel an instruction entirely.

Mediation can be enforced at two levels:

- **Asset Level**: Required for all settlements involving specific assets
- **Instruction Level**: Required for specific settlement instructions

## Asset-Level Mediators

Asset issuers, or their appointed agent can designate mediators that must approve all transfers of their assets. This provides a way to ensure that all settlements meet specific criteria or undergo necessary validation before execution independent of who creates the instruction.

### Managing Asset Mediators

Asset mediators are managed through the `asset::add_mandatory_mediator` and `asset::remove_mandatory_mediator` transactions.

When asset mediators are set:

- All settlement instructions involving the asset require approval from the designated mediators
- Multiple mediators can be assigned to a single asset
- All mediators and instruction parties must approve before the settlement instruction can execute

## Instruction-Level Mediators

Settlement instructions can specify additional mediators beyond any asset-level requirements. This allows for flexible validation requirements based on specific transaction needs.

### Adding Instruction Mediators

When creating a settlement instruction, mediators can be specified as part of the instruction parameters. These mediators:

- Are specific to that individual instruction
- Must approve in addition to any asset-level mediators
- Can represent different validation requirements for different parts of the transaction

## Mediator Functions and Use Cases

Mediators serve several key functions in the settlement process:

- **Transfer Agent Oversight**: Ensuring transfers are properly validated and approved by authorized agents before execution
- **Regulatory Compliance**: Validating that transactions meet specific regulatory requirements or receiving necessary third-party compliance verification
- **Smart Contract Validation**: Enabling programmatic verification of settlement conditions through automated validation logic
- **Multi-Party Authorization**: Creating workflows that require approval from multiple entities, enhancing security and control

## Mediator Actions

For a settlement to execute when mediators are involved:

1. All specified mediators must affirm the instruction using `settlement::affirm_instruction_as_mediator`

   - Mediators can optionally specify an expiry time for their affirmation
   - After expiry, the affirmation becomes invalid and the mediator must reaffirm

2. Mediators have additional control options:
   - `settlement::withdraw_affirmation_as_mediator`: Remove a previously given affirmation
   - `settlement::reject_instruction_as_mediator`: Reject and cancel the instruction entirely

The instruction cannot settle until all required affirmations are in place and valid (not expired).

:::note
If a mediator is also a party to the instruction (sender or receiver of an asset), they must provide separate affirmations:

- One affirmation as a mediator using `affirm_instruction_as_mediator`
- Another affirmation as an instruction party for their leg(s) using the standard instruction affirmation

Both affirmations are required before the instruction can settle.
:::

:::note
Both asset-level and instruction-level mediators must provide their affirmation before settlement can proceed. If any mediator withdraws their affirmation or their affirmation expires, the settlement will be blocked until they reaffirm.
:::

:::info
Mediators provide a flexible mechanism for implementing various forms of transfer control and validation. They can be combined with other Polymesh features like venues and compliance rules to create comprehensive settlement governance frameworks.
:::
