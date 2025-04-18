---
title: On-Chain Voting
description: Manage on-chain voting processes for asset holders
id: on-chain-voting
slug: /corporate-actions/on-chain-voting
sidebar_label: On-Chain Voting
tags:
  - corporate actions
  - voting
  - ballot
---

## Overview

On-chain voting is a key feature of Polymesh's [Corporate Actions](/corporate-actions) framework, enabling issuers to conduct secure and transparent governance processes directly on the blockchain. This functionality supports activities such as electing board members, approving resolutions, or other corporate decisions.

The process leverages Polymesh's blockchain to:

- Define proposals and voting rules (the Ballot).
- Determine voter eligibility and voting power based on asset holdings at a specific time ([Checkpoint](/corporate-actions/checkpoints)).
- Record votes securely on-chain.
- Automatically tally first-preference votes.
- Provide a permanent, auditable record of the voting process and its outcome.

The chain logic automatically handles eligibility checks based on the CA's Checkpoint, enforces the voting period timing, and records the first-preference tally once voting is complete.

This on-chain mechanism ensures transparency, security, and efficiency for corporate governance processes involving asset holders.

## Core Concepts

### Corporate Action (CA)

The foundational on-chain event that initiates the voting process. A CA, typically of kind `IssuerNotice`, must be created first. It defines the context, links to the asset, specifies the [Record Date (Checkpoint)](/corporate-actions/checkpoints) for eligibility, and generates the `CAId` needed to attach and reference a ballot.

### Ballot

The specific details of the vote attached to a Corporate Action. It includes:

- **Motions:** The distinct questions or proposals being voted upon. Each motion has a description and potentially links to further information. A single ballot can contain multiple independent motions.
- **Choices:** The options available for each motion (e.g., 'Aye', 'Nay', 'Abstain').
- **Voting Period:** The start and end date/time during which votes can be cast.
- **Ranked-Choice Voting (RCV):** An optional setting allowing voters to rank their preferences.

:::info Ranked-Choice Voting (RCV)
Ranked-Choice Voting is a voting method that allows voters to rank candidates by preference rather than selecting just one option. In Polymesh's implementation, voters can specify fallback choices that would receive their vote if their first choice is eliminated. This approach can help achieve broader consensus, especially in elections with multiple candidates, by ensuring votes aren't "wasted" on candidates with little support. While Polymesh records all first preferences and fallbacks on-chain, the final RCV calculation (including elimination rounds and preference transfers) must be performed off-chain according to the organization's governance rules.
:::

### Checkpoint

A snapshot of asset holder balances at a specific block, determined by the `record_date` in the associated Corporate Action. [Checkpoints](/corporate-actions/checkpoints) are crucial for determining who is eligible to vote and their respective voting power.

### Voting Power

The default approach to voting power is proportional to the amount of the target asset held by an identity at the time of the Checkpoint. One unit of the asset typically equals one vote. Every voter's vote is recorded on chain, so if an alternate weighting of votes is required this can be processed off-chain.

### Vote Casting

The act of an eligible identity submitting their choices for each motion to the blockchain via a transaction (extrinsic).

### Tallying

The automated process of counting the _first-preference_ votes cast for each choice within each motion after the voting period closes. As all votes are recorded immutably on chain, if alternate voting power or more complex result processing such as Ranked-Choice Voting is required this can be tallied off-chain. The tallied results are then interpreted to determine the outcome (e.g., Passed, Failed) based on rules defined for the ballot.

## Ballot Lifecycle

The on-chain voting process involves several key steps managed through specific transactions. **Crucially, before a ballot can be created, a corresponding [Corporate Action](/corporate-actions#2-initiate-corporate-action) must first be initiated** using `corporateAction::initiate_corporate_action`. This step defines the record date (via a checkpoint), target holders, and generates the `CAId` (composed of the target `AssetId` and a local ID) required for referencing the ballot.

### 1. Create Ballot

Once the underlying Corporate Action exists, an agent of the asset attaches the ballot details using the `corporateBallot::attach_ballot` transaction. Alternatively the combined `corporateAction::initiate_corporate_action_and_ballot` transaction can be used to create a corporate action and attach a ballot in a single transaction.

**Parameters**:

- `ca_id`: Corporate Action Identifier **obtained from initiating the Corporate Action**. It contains:
  - `asset_id`: The `AssetId` of the target asset.
  - `local_id`: A local identifier for this specific corporate action.
- `range`: The `BallotTimeRange` defining:
  - `start`: The timestamp when voting begins.
  - `end`: The timestamp when voting ends.
- `meta`: The `BallotMeta` containing:
  - `title`: The ballot's title.
  - `motions`: An array of `Motion` objects, each with:
    - `title`: The question or proposal being voted on.
    - `info_link`: A link to more information about the motion.
    - `choices`: An array of `ChoiceTitle` options voters can select.
- `rcv`: Boolean flag indicating whether Ranked-Choice Voting is enabled.

**Effects**:

- Creates the ballot record on-chain, linking it to the initiated Corporate Action which defines voter eligibility.
- Sets up the ballot structure including all motions and their choices.
- Establishes the voting period and RCV settings.

### 2. Modify Ballot Configuration (Optional)

Before the voting period begins (before `range.start` is reached), the ballot can be modified through several transactions:

**Transactions Available**:

- `corporateBallot::change_end`: Adjust the voting end date.
  - Only modifies the `end` timestamp; `start` remains unchanged.
- `corporateBallot::change_meta`: Modify the ballot's structure.
  - Updates the ballot title, motions, and/or choices.
- `corporateBallot::change_rcv`: Toggle Ranked-Choice Voting support.
  - Enables or disables the RCV feature.
- `corporateBallot::remove_ballot`: Cancel and completely remove the ballot.
  - Removes all ballot-related data from the chain.

**Constraints**:

- All configuration changes must be made before the `start` timestamp is reached.
- Any authorized agent for the asset can make these changes.
- Once voting begins, the ballot structure is locked and cannot be modified.

### 3. Cast Votes

During the active voting period (from `range.start` to `range.end`), eligible asset holders can cast their votes using the `corporateBallot::vote` transaction.

**Parameters**:

- `ca_id`: Corporate Action Identifier for the ballot.
- `votes`: An array of `BallotVote` objects representing votes for each choice across all motions, where each `BallotVote` contains:
  - `power`: The amount of voting power assigned to this choice.
  - `fallback`: Optional index pointing to another choice in the same motion as a fallback (only used when RCV is enabled).

**Voting Mechanics**:

- **Basic Structure**: A vote is submitted as a flat array of `BallotVote` objects, where each object represents a vote for one choice in one motion. The order must match the sequence of choices across all motions.

- **Multiple Motions**: The `votes` array is a flat structure containing votes for all choices across all motions in sequence. For example, if the ballot has 2 motions, with motion 1 having 3 choices and motion 2 having 2 choices, the `votes` array would contain 5 entries (3 for motion 1 + 2 for motion 2).

- **Vote Distribution Options**:

  1. **Split Voting**: Divide your voting power among multiple choices in a single motion.
  2. **Full Voting**: Assign all your voting power to a single choice.
  3. **Partial Voting**: Use only a portion of your available voting power; the remainder counts as an abstention.
  4. **Independent Motions**: Your full voting power can be reused for each separate motion in the ballot.

- **Example Distribution**: With 100 tokens of voting power:

  - Motion 1: Choice A: 60 power, Choice B: 40 power, Choice C: 0 power
  - Motion 2: Choice A: 100 power, Choice B: 0 power

- **Ranked-Choice Voting**: If RCV is enabled, each `BallotVote` can include a `fallback` field pointing to another choice index within the same motion:

  - **Local to the Current Motion**:
    - The fallback index is local to the motion it belongs to, meaning it only references choices within the same motion.
    - It does not reference the overall votes array or choices in other motions.
    - For example:
      - Motion A: ["Yes", "No"]
      - Motion B: ["Candidate 1", "Candidate 2", "Candidate 3"]
      - A fallback index of 0 in a vote for Motion A refers to "Yes".
      - A fallback index of 0 in a vote for Motion B refers to "Candidate 1".
  - A vote cannot fallback to itself.

:::note Vote Modification
Voters can change their votes at any time during the active voting period by submitting a new `vote` transaction with different choices. Each new vote completely replaces any previous vote by the same identity. This flexibility allows voters to adjust their decisions right up until the voting end date (`range.end`).
:::

**Effects**:

- Records the voter's choices and assigned voting power.
- Updates the running tally of first preference votes for each choice.

**Constraints**:

- Can only be executed during the voting period (after `start` and before `end`).
- Voter must be included in the Corporate Action's target set.
- The total voting power used for each motion cannot exceed the voter's balance at the checkpoint.
- The number of vote entries must match the total number of choices across all motions.
- If RCV is disabled, all `fallback` fields must be `None`.

### 4. Tally Results

After the voting period ends (after `range.end`), the blockchain automatically finalizes the tally of first-preference votes for each choice in each motion.

**First-Preference Tallying**:

- The blockchain automatically maintains a running tally of votes for each choice as votes are cast.
- After the voting period ends, these tallies represent the final first-preference vote counts.
- The raw results are available on-chain via the `Results` storage map.
- All individual `votes`, including fallbacks if applicable, are also stored immutably on-chain should other tallying methods be required to determine the motion result.

**RCV Calculations**:

- If RCV was enabled, the on-chain system only stores raw votes and first-preference tallies.
- The complete RCV calculation (elimination rounds and vote transfers) must be performed off-chain by applications.
- All data needed for these calculations (including fallback preferences) is stored on-chain.

### 5. Interpret Results

After votes have been tallied, the interpretation of results is entirely at the discretion of the asset issuer according to their governance framework.

**Issuer Determination**:

- Polymesh records all votes immutably but does not enforce any specific interpretation rules.
- The asset issuer (or their authorized agents) determines what constitutes a successful outcome based on their own governance requirements.
- These requirements may be defined in the organization's bylaws, regulatory frameworks, or other governance documents that exist outside the blockchain.

**Common Interpretation Approaches** (implemented off-chain):

- **Simple Majority**: A choice wins if it receives more votes than any other choice.
- **Qualified Majority**: A choice passes only if it meets a predefined threshold (e.g., more than 66% of all votes cast or of eligible voting power).
- **Minimum Participation**: Some governance frameworks require a minimum level of participation (quorum) for a vote to be valid.
- **Ranked-Choice Processing**: For ballots with RCV enabled, the votes and their fallbacks can be processed according to various elimination and transfer algorithms.

**Result Implementation**:

- The blockchain provides a transparent, auditable record of all votes cast, but does not itself determine or enforce outcomes.
- Based on the interpreted results, the asset issuer may take further on-chain actions (e.g., executing a distribution based on a passed proposal) or off-chain actions (e.g., appointing a board member).
