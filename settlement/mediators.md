# Settlement Mediators

> Third-party validation and approval in the settlement process

## Overview

Settlement mediators in Polymesh are entities that must affirm settlement instructions before they can be executed. They provide an optional additional layer of control and validation in the settlement process, enabling scenarios where third-party verification or approval is required before transfers can execute on chain. Mediators can represent transfer agents, smart contracts, or other entities that need to validate transactions before they occur.

Mediator affirmations can have an optional expiry after which it will no longer be valid requiring the mediator to reaffirm the instruction before it can execute. Mediators can also withdraw their affirmation or reject/cancel an instruction entirely.

## Mediator Types and Scope

Mediation can be enforced at two levels:

- **Asset Level**: Required for all settlements involving specific assets (set by asset issuers)
- **Instruction Level**: Required for specific settlement instructions (chosen during instruction creation)

### Asset-Level Mediators

Asset issuers can designate mediators that must approve all transfers of their assets, ensuring consistent validation criteria regardless of who creates settlement instructions.

**Management**: Asset mediators are controlled through `asset::add_mandatory_mediator` and `asset::remove_mandatory_mediator` transactions.

**Behavior**:

- All settlement instructions involving the asset require mediator approval
- Multiple mediators can be assigned to a single asset
- Applies automatically to any instruction involving the asset

### Instruction-Level Mediators

Settlement instructions can specify additional mediators beyond any asset-level requirements, allowing flexible validation for specific transaction needs.

**Scope**: These mediators are instruction-specific and must approve in addition to any asset-level mediators.

## Mediator Functions and Use Cases

Mediators enable various validation scenarios:

- **Transfer Agent Oversight**: Ensuring proper validation by authorized agents
- **Regulatory Compliance**: Third-party compliance verification before execution
- **Smart Contract Validation**: Programmatic verification of settlement conditions
- **Multi-Party Authorization**: Complex workflows requiring multiple approvals
- **Cross-Chain Coordination**: Validating external blockchain conditions before settlement

## Mediator Actions and Workflow

Mediators have several control mechanisms during the settlement process:

**Required Actions:**

- `settlement::affirm_instruction_as_mediator` - Provide affirmation (with optional expiry)
- Must affirm before instruction can execute (like all other parties)

**Optional Control Actions:**

- `settlement::reject_instruction_as_mediator` - cancels the instruction entirely if called before executing
- `settlement::lock_instruction` - Lock instruction for execution (SettleAfterLock only)
- `settlement::unlock_instruction` - Explicitly unlock a locked instruction, starting the relock cooldown (SettleAfterLock only)

**Affirmation Rules:**

- Mediators can set expiry times for their affirmations
- Expired affirmations become invalid and require renewal
- All mediators (asset-level and instruction-level) must affirm before execution
- If a mediator is also a counterparty, they need separate affirmations for both roles

## Settlement Locking (SettleAfterLock Instructions)

Settlement locking is a specialized workflow designed for scenarios where additional validation or cross-chain/off-chain coordination is required before final settlement. This feature prevents parties from withdrawing affirmations or rejecting instructions once the locking process begins.

### Use Cases

Settlement locking is particularly valuable for:

- **Cross-Chain Settlements**: Ensuring Polymesh instructions cannot be cancelled after corresponding actions have been initiated on other blockchains
- **Off-Chain Coordination**: Preventing instruction cancellation after external systems have begun processing related transactions
- **Multi-Stage Workflows**: Securing instructions that depend on sequential external validations or approvals
- **Regulatory Escrow**: Creating time-locked periods where instructions cannot be modified during compliance verification

### How Settlement Locking Works

1. **Instruction Creation**: An instruction must be created with `SettlementType::SettleAfterLock`

2. **Standard Affirmation Process**: All parties and mediators affirm the instruction normally

3. **Locking Phase**: A mediator calls `settlement::lock_instruction` to lock the instruction for execution
   - **Required Parameters**: The call requires both the `instruction_id` to specify which instruction to lock and a `weightLimit` parameter
   - **Weight Mechanism**: Weight in Substrate chains acts similar to gas in Ethereum - it measures computational cost and prevents infinite loops. If the weight limit is too low, the transaction will fail before execution begins
   - **Runtime API Available**: Use the `settlement::lock_instruction_weight` runtime API to get the correct weight for a specific instruction and ensure proper fee calculation
   - **Comprehensive validation occurs**: All settlement conditions are validated including compliance rules, mediator affirmation expiries, asset availability, and venue permissions
   - **Execution guarantee**: Once successfully locked, execution by any mediator cannot fail - all potential failure conditions have been pre-validated
   - Assets are locked and the instruction status changes to `LockedForExecution`
   - A timestamp is recorded for the locking period

4. **Protected Period**: During the lock period:
   - Parties cannot withdraw affirmations or reject the instruction
   - The instruction is protected from cancellation
   - Assets remain locked until settlement or lock expiry

5. **Final Settlement**: The instruction can be settled using standard settlement methods during the lock period

### Lock Period, Unlocking, and Relocking

- **Maximum Lock Period**:
  - **Mainnet and Testnet**: 24 hours (86,400,000 milliseconds)
  - **Development chains**: 24 minutes (1,440,000 milliseconds)
- **Explicit Unlock**: A mediator can call `settlement::unlock_instruction` to unlock a `LockedForExecution` instruction before its lock period expires. This starts a **relock cooldown** during which the instruction cannot be relocked:
  - **Mainnet and Testnet**: 4 hours (14,400,000 milliseconds)
  - **Development chains**: 10 minutes (600,000 milliseconds)
- **Lock Expiry Behavior**: When the maximum lock period elapses without an explicit unlock:
  - The instruction status remains `LockedForExecution`
  - **Execution is blocked** unless a mediator successfully relocks the instruction (see below)
  - **Assets remain locked** and are NOT automatically released
  - **Withdrawal of affirmations remains blocked** (status is still `LockedForExecution`)
  - Rejection by any valid party is allowed after expiry
  - Assets are only released by execution, rejection, or successful relocking followed by execution
- **Relocking**: A mediator can call `lock_instruction` again on an already-locked or previously-unlocked instruction, subject to two independent conditions, either of which permits the relock:
  - If the instruction is still `LockedForExecution` and its maximum lock period **plus** the relock cooldown has elapsed since it was originally locked, or
  - If the instruction was explicitly unlocked via `unlock_instruction` and the relock cooldown has elapsed since that unlock
  - Calling `lock_instruction` on a still-locked instruction before this window opens fails with `InstructionAlreadyLocked`; calling it during an active cooldown after an explicit unlock fails with `RelockCooldownNotExpired`
  - Each successful relock increments a per-instruction relock counter. Relocking is capped at **3 relocks** per instruction (`MaxRelockCount`); a further attempt fails with `MaxRelockCountExceeded`
- **Timestamp Tracking**: The system tracks both when an instruction was locked and, separately, when it was last explicitly unlocked, to enforce the windows above.

### Requirements and Restrictions

**Who Can Lock, Unlock, or Relock Instructions:**

Only designated mediators can call `settlement::lock_instruction` or `settlement::unlock_instruction`. Mediators can be designated:

- At the instruction level (specified during creation)
- At the asset level (mandatory mediators for involved assets)

**Technical Requirements:**

- Instruction must use `SettlementType::SettleAfterLock`
- All standard settlement conditions must be met (affirmations, compliance, etc.) when locking or relocking
- Caller must be an authorized mediator
- Relocking is subject to the cooldown and relock-count limits described above
- **Required Parameters** (`lock_instruction`):
  - `instruction_id`: The ID of the instruction to lock
  - `weightLimit`: Weight allocation with `refTime` (computational time) and `proofSize` (storage proof size) values. Use the `settlement::lock_instruction_weight` runtime api call to determine the correct weight
- **Required Parameters** (`unlock_instruction`):
  - `instruction_id`: The ID of the instruction to unlock

**Compliance and Validation:**

:::info Critical Design Feature
When locking an instruction, **all compliance rules, mediator affirmation expiries, asset availability, and settlement conditions are validated**. Once successfully locked, execution by any mediator is guaranteed to succeed - no compliance or validation failures can occur during execution.

This design ensures that cross-chain coordinators can rely on Polymesh settlement completion once locking succeeds, enabling atomic cross-chain operations.
:::

**During Lock Period:**

- **Execution**: Only mediators can execute the instruction during the lock period
- **Rejection**: Only mediators can reject the instruction during the lock period (unless lock period has expired)
- **Withdrawal of affirmations**: Prevented for all parties during lock period
- **Affirmation**: Standard affirmation rules apply
- **Unlocking**: Any mediator can unlock the instruction early via `unlock_instruction`, which starts the relock cooldown
- **Multiple mediators**: All mediators have equal powers to execute, reject, unlock, or relock

**After Lock Expiry:**

- **Execution**: Blocked unless a mediator successfully relocks the instruction (subject to the cooldown and relock-count limits described above)
- **Rejection**: Any valid party can reject the instruction
- **Withdrawal of affirmations**: Still blocked (instruction status remains `LockedForExecution`)
- **Re-locking**: Mediators can relock the instruction once the maximum lock period plus the relock cooldown has elapsed, up to `MaxRelockCount` (3) times total

### Cross-Chain Settlement Use Cases

SettleAfterLock instructions are primarily designed for **cross-chain settlement coordination**. Common scenarios include:

**Cross-Chain Service Providers:**

1. User creates SettleAfterLock instruction on Polymesh with a cross-chain service as a mediator
2. Cross-chain service validates both chains are ready
3. Service affirms the instruction and calls lock_instruction when cross-chain conditions are met
4. Settlement can be executed by any mediator during the lock period
5. If cross-chain coordination fails, the service can reject during lock period

**Multi-Chain Atomic Swaps:**

- Coordinate simultaneous settlement across multiple blockchain networks
- Ensure atomic execution or failure across all participating chains
- Prevent partial settlement when cross-chain conditions aren't met

**External System Integration:**

- Allow external systems to validate off-chain conditions before settlement
- Coordinate with traditional financial systems or other blockchain networks
- Implement complex business logic that requires external validation

**Instructions Without Explicit Mediators:**

SettleAfterLock instructions require mediators to be lockable. Without mediators at either instruction or asset level, the instruction behaves like standard `SettleManual` settlement. This ensures:

- Cross-chain coordination requires explicit mediator designation
- Asset-level policies can enforce locking requirements
- Instructions default to standard settlement when no coordination is needed

:::note Dual Role Requirements
If a mediator is also a counterparty, they must provide separate affirmations:

- Mediator affirmation: `affirm_instruction_as_mediator`
- Counterparty affirmation: Standard instruction affirmation for their leg(s)

Both are required before the instruction can settle.
:::

:::info
Mediators provide flexible transfer control and validation mechanisms. They integrate with other Polymesh features like venues and compliance rules to create comprehensive settlement governance frameworks.
:::
