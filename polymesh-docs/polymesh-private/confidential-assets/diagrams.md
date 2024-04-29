---
sidebar_position: 3
title: Sequence Diagrams
description: ''
subsite: polymesh-private-docs
---

## Purpose of Sequence Diagrams

These sequence diagrams provide a detailed overview of the steps involved in the settlement process for Confidential Assets. They outline each step comprehensively, from account setup to instruction creation, affirmation, rejection, and execution.

It's important to note that these diagrams offer a low-level representation, including all steps of the listed process. This level of detail ensures clarity and precision in understanding the settlement process.

When using tools such as the Polymesh Private REST API or the Polymesh Private Typescript SDK, some of the steps depicted in these diagrams are combined into a single user action. These tools can simplify the process for integrators, streamlining the integration of Confidential Assets.

Follow the steps [here](../tutorials/walkthrough-confidential-assets-rest-api.md) to implement these sequences using the [Polymesh Private Development Environment](../tooling.md#development-environment).

## 1 Confidential Account Setup

```mermaid
sequenceDiagram
participant I as Issuer/Sender
participant R as Receiver
participant M as Mediator(s)
participant A as Auditor(s)
participant P as Polymesh

Note over I,M: Issuers, Receivers and Mediators must<br> have onboarded and received a DID

par
  I ->> I: Generate ElGamal<br/> Key Pair
  I ->> P: Register Confidential Account
and
  R ->> R: Generate ElGamal Key Pair
  R ->> P: Register Confidential Account
and
  M ->> M: Generate ElGamal Key Pair
and
  A ->> A: Generate ElGamal Key Pair
end

```

## 2 Confidential Asset and Settlement Venue Creation

```mermaid
sequenceDiagram
participant I as Issuer
participant V as Venue Owner
participant M as Mediator(s)
participant A as Auditor(s)
participant P as Polymesh

Note over I,M: Issuers, Receivers and Mediators must<br> have onboarded and received a DID.<br> Issuers must have confidential<br>accounts linked to their DID

opt
  A ->> I: Provide Confidential Account
  M ->> I: Provide DID(s)
  M ->> I: Provide Confidential Account
end
  I ->> P: Initialises Confidential Asset Specifying Auditors and Mediators
  P -->> I: Return Confidential Asset ID
  I ->> P: Submits transaction to issue tokens, specifying the<br> unencrypted amount and their Confidential Account to credit
  P ->> P: Updates unencrypted<br> total supply
  P ->> P: Updates Issuer<br> encrypted balance
alt Issuer restricts settlement venues
  I ->> P: Submits Transaction to enable venue filtering (restrict permitted venues)
  V ->> P: Creates Confidential Venue
  P -->> V: Return Confidential Venue ID
  V ->> I: Provide <br>Confidential<br>Venue ID
  I ->> P: Submits transaction to allow trading on the provided venue ID
else Issuer does not restrict settlement venues
  V ->> P: Creates Confidential Venue
  P -->> V: Return Confidential Venue ID
end
```

## Settlement Process

### 3 Instruction Creation

```mermaid
sequenceDiagram

participant I as Issuer/Sender
participant R as Receiver
participant V as Venue Owner
participant M as Mediator(s)
participant A as Auditor(s)
participant P as Polymesh

Note over I,M: Issuers, Senders, Receivers, Venue <br> Owners and Mediators must have<br> onboarded and received a DID.
Note over I,R: Senders and Receiver must have<br> confidential accounts linked to<br> their DID
Note over A: Auditors must have a confidential<br> account but do not need to<br>register it on chain.
Note over M: Mediators should have a <br> confidential account for amount<br> decryption but do not need to<br>register it on chain.

I ->> V: Provide Confidential Asset ID
I ->> V: Provide Confidential Account
R ->> V: Provide<br>Confidential<br>Account
opt
  Note over A,V: Additional Venue specified Auditors <br> and Mediators may be provided to<br>supplement those defined by the <br>issuer of the confidential asset
  A ->> V: Provide Confidential Account(s)
  M ->> V: Provide DID(s)
  M ->> V: Provide<br>Confidential<br>Account(s)
end
V ->> P: Creates Confidential Settlement Instruction including<br> Asset ID, Sender, Receive and optional additional<br> Auditors and Mediators. No amount specified.
opt
  Note over V,P: Multiple assets can be added to an<br>instruction leg. Asset anonymity can be<br> achieved by including dummy assets<br> in the instruction
  Note over V,P: Multiple instruction legs with different<br> assets, sender, receiver, auditors<br> and mediators can be added. Each<br> leg must be affirmed by all<br> required parties before the <br>complete instruction can settle.
end
P ->> P: Event emitted containing the<br>Instruction ID and instruction<br> details, including sender(s),<br>receiver(s) and all required<br>auditors for each asset and<br>mediators for each leg
```

### 4 Sender Proof Generation and Affirmation

```mermaid
sequenceDiagram

participant I as Issuer/Sender
participant V as Venue Owner
participant P as Polymesh

alt Venue provides instruction information
  V ->> I: Instruction ID provided
else Venue does not provide instruction information
  I ->>P: Requests pending instructions. A chain indexer<br>(e.g. Polymesh SubQuery) may be required for<br>efficient queries of pending instructions
  P -->> I: Pending instruction ID(s) returned
  I ->> P: Request instruction details
  P -->> I: Return instruction details
end
loop For all assets being sent, including zero amount/dummy assets
  I ->> P: Requests encrypted balance from the chain
  P -->> I: Return encrypted balance for requested asset
  I ->> P: Requests instruction details to retrieve required<br>auditor (including mediators) confidential accounts
  P -->> I: Return required auditor confidential accounts
  I ->> I: Generate sender proof using current encrypted<br> balance, amount to send and all required<br> auditor and mediator confidential accounts
end

I ->> P: Submit proof(s) to the chain to affirm the instruction as Sender
P ->> P: Reduces Senders encrypted balance by the<br> amounts specified in the provided proof(s)
P ->> P: Emits event containing sender proof(s)
```

### 5 Receiver Zero Knowledge Proof Verification

```mermaid
sequenceDiagram

participant I as Issuer/Sender
participant R as Receiver
participant V as Venue Owner
participant P as Polymesh

alt Venue provides instruction ID
  V ->> R: Instruction ID
else Sender provides instruction ID
  I ->> R: Instruction ID
else Venue/Sender does not provide instruction ID
  R ->>P: Requests pending instructions
  P -->> R: Pending instruction ID(s) returned
end

R ->> P: Query previously emitted instruction affirmation<br>events to retrieve sender proof(s).A chain<br>indexer (e.g. Polymesh SubQuery) may be required<br> for efficient queries of historical events
R ->> R: Verify or decrypt sender proof using their<br> confidential account to view the<br> amount being sent
```

### 6 Mediator Zero Knowledge Proof Verification

:::note
Mediators can only verify or decrypt confidential amounts for assets or legs that they have been specified as an auditor for.
:::

```mermaid
sequenceDiagram

participant I as Issuer/Sender
participant V as Venue Owner
participant M as Mediator(s)
participant P as Polymesh
alt Venue provides instruction ID
  V ->> M: Instruction ID
else Sender provides instruction ID
  I ->> M: Instruction ID
else Venue/Sender does not provide instruction ID
  M ->>P: Requests pending instructions
  P -->> M: Pending instruction ID(s) returned
end
M ->> P: Query previously emitted instruction<br> affirmation events to retrieve sender<br>proof(s). A chain indexer (e.g. Polymesh<br> SubQuery) may be required for efficient<br> queries of historical events
P -->> M: Sender proof
M ->> P: Query instruction leg details to<br>determine the correct index of<br>the mediators confidential account<br>in the array of auditors
P -->> M: Auditor index
M ->> M: Verify or decrypt amount from the sender proof using<br>their confidential account, the confidential asset ID<br>and the auditor index for their confidential account.<br>If known, the expected amount can be<br>provider to reduce the time to verify.
```

### 7 Auditor Zero Knowledge Proof Review

:::note
For an issuer to be able to be able to verify or decrypt confidential amounts they must also be an auditor of the asset.
:::

```mermaid
sequenceDiagram

participant A as Auditor(s)
participant P as Polymesh
  A ->> P: Query previously emitted instruction affirmation events to retrieve<br>sender proof(s). A chain indexer (e.g. Polymesh SubQuery)<br> may be required for efficient queries of historical events
  P -->> A: Sender proof
  A ->> P: Query instruction leg details to determine the correct index of<br>the auditor confidential account in the array of auditors
  P -->> A: Auditor index
  A ->> A: Verify or decrypt amount from the sender proof using<br>their confidential account, the confidential asset ID<br>and the auditor index for their confidential account.<br>If known, the expected amount can be<br>provider to reduce the time to verify.
```

### 8 Instruction Affirmation

```mermaid
sequenceDiagram

participant S as Sender
participant R as Receiver
participant V as Venue Owner
participant M as Mediator(s)
participant P as Polymesh

  R ->> P: Submit affirm instruction transaction<br>providing instruction ID and leg ID(s)
  M ->> P: Submit affirm instruction transaction<br>providing instruction ID and leg ID(s)
  Note over M,P: Once all parties have affirmed all<br> legs, the instruction can be executed<br>by any of the involved parties
  alt
    S ->> P: Execute the settlement instruction
  else
    R ->> P: Execute the settlement instruction
  else
    V ->> P: Execute the settlement instruction
  else
    M ->> P: Execute the settlement instruction
  end
  P ->> P: Receiver incoming balance(s) updated
  Note over V,P: Executing the instruction makes incoming<br> balances available for all receivers, even<br>for multiple assets or legs. Incoming<br>balances can be claimed by using<br>"apply incoming balance."
  R ->> P: Submit transaction to apply incoming balance
  P ->> P: Receiver encrypted balance updated
  Note over R,P: Settlement instruction complete
```

### Instruction Rejection

```mermaid
sequenceDiagram

participant I as Issuer/Sender
participant R as Receiver
participant M as Mediator(s)
participant P as Polymesh

  alt Receiver rejects
    R ->> P: Submit reject instruction transaction
  else Mediator rejects
    M ->> P: Submit reject instruction transaction
  else Sender rejects
    I ->> P: Submit reject instruction transaction
  end
  P ->> P: Sender incoming balances updated.<br>Amounts from previous sender<br>affirmations are made available
  I ->> P: Submit transaction to apply incoming balance
  P ->> P: Sender encrypted balance updated
  Note over I,P: Settlement instruction complete
```
