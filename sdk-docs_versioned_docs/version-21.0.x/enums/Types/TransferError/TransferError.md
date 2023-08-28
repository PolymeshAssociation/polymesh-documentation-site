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

[types/index.ts:674](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L674)

___

### InsufficientPortfolioBalance

• **InsufficientPortfolioBalance** = ``"InsufficientPortfolioBalance"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

#### Defined in

[types/index.ts:698](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L698)

___

### InvalidGranularity

• **InvalidGranularity** = ``"InvalidGranularity"``

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

#### Defined in

[types/index.ts:643](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L643)

___

### InvalidReceiverCdd

• **InvalidReceiverCdd** = ``"InvalidReceiverCdd"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[types/index.ts:655](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L655)

___

### InvalidReceiverPortfolio

• **InvalidReceiverPortfolio** = ``"InvalidReceiverPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

#### Defined in

[types/index.ts:692](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L692)

___

### InvalidSenderCdd

• **InvalidSenderCdd** = ``"InvalidSenderCdd"``

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[types/index.ts:661](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L661)

___

### InvalidSenderPortfolio

• **InvalidSenderPortfolio** = ``"InvalidSenderPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

#### Defined in

[types/index.ts:686](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L686)

___

### ScopeClaimMissing

• **ScopeClaimMissing** = ``"ScopeClaimMissing"``

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Asset

#### Defined in

[types/index.ts:668](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L668)

___

### SelfTransfer

• **SelfTransfer** = ``"SelfTransfer"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

#### Defined in

[types/index.ts:649](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L649)

___

### TransfersFrozen

• **TransfersFrozen** = ``"TransfersFrozen"``

translates to TransferStatus.TransfersHalted

occurs if the Asset's transfers are frozen

#### Defined in

[types/index.ts:680](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/types/index.ts#L680)
