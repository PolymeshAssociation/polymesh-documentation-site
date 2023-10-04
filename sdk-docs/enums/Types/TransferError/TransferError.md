---
id: "TransferError"
title: "Enumeration: TransferError"
sidebar_label: "TransferError"
---

[types](../../../modules/Types/Types.md).TransferError

Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to
  a [TransferStatus](../TransferStatus/TransferStatus.md), but two or more TransferErrors can represent the same TransferStatus, and
  not all Transfer Statuses are represented by a TransferError

## Enumeration Members

### InsufficientBalance

• **InsufficientBalance** = ``"InsufficientBalance"``

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

#### Defined in

[types/index.ts:646](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L646)

___

### InsufficientPortfolioBalance

• **InsufficientPortfolioBalance** = ``"InsufficientPortfolioBalance"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

#### Defined in

[types/index.ts:670](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L670)

___

### InvalidGranularity

• **InvalidGranularity** = ``"InvalidGranularity"``

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

#### Defined in

[types/index.ts:615](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L615)

___

### InvalidReceiverCdd

• **InvalidReceiverCdd** = ``"InvalidReceiverCdd"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[types/index.ts:627](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L627)

___

### InvalidReceiverPortfolio

• **InvalidReceiverPortfolio** = ``"InvalidReceiverPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

#### Defined in

[types/index.ts:664](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L664)

___

### InvalidSenderCdd

• **InvalidSenderCdd** = ``"InvalidSenderCdd"``

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[types/index.ts:633](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L633)

___

### InvalidSenderPortfolio

• **InvalidSenderPortfolio** = ``"InvalidSenderPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

#### Defined in

[types/index.ts:658](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L658)

___

### ScopeClaimMissing

• **ScopeClaimMissing** = ``"ScopeClaimMissing"``

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Asset

#### Defined in

[types/index.ts:640](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L640)

___

### SelfTransfer

• **SelfTransfer** = ``"SelfTransfer"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

#### Defined in

[types/index.ts:621](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L621)

___

### TransfersFrozen

• **TransfersFrozen** = ``"TransfersFrozen"``

translates to TransferStatus.TransfersHalted

occurs if the Asset's transfers are frozen

#### Defined in

[types/index.ts:652](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L652)
