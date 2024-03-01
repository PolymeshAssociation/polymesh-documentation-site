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

### ComplianceFailure

• **ComplianceFailure** = ``"ComplianceFailure"``

translates to TransferStatus.ComplianceFailure

occurs if some compliance rule would prevent the transfer

#### Defined in

[types/index.ts:706](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L706)

___

### InsufficientBalance

• **InsufficientBalance** = ``"InsufficientBalance"``

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

#### Defined in

[types/index.ts:675](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L675)

___

### InsufficientPortfolioBalance

• **InsufficientPortfolioBalance** = ``"InsufficientPortfolioBalance"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

#### Defined in

[types/index.ts:699](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L699)

___

### InvalidGranularity

• **InvalidGranularity** = ``"InvalidGranularity"``

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

#### Defined in

[types/index.ts:644](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L644)

___

### InvalidReceiverCdd

• **InvalidReceiverCdd** = ``"InvalidReceiverCdd"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[types/index.ts:656](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L656)

___

### InvalidReceiverPortfolio

• **InvalidReceiverPortfolio** = ``"InvalidReceiverPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

#### Defined in

[types/index.ts:693](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L693)

___

### InvalidSenderCdd

• **InvalidSenderCdd** = ``"InvalidSenderCdd"``

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[types/index.ts:662](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L662)

___

### InvalidSenderPortfolio

• **InvalidSenderPortfolio** = ``"InvalidSenderPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

#### Defined in

[types/index.ts:687](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L687)

___

### ScopeClaimMissing

• **ScopeClaimMissing** = ``"ScopeClaimMissing"``

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Asset

#### Defined in

[types/index.ts:669](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L669)

___

### SelfTransfer

• **SelfTransfer** = ``"SelfTransfer"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

#### Defined in

[types/index.ts:650](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L650)

___

### TransfersFrozen

• **TransfersFrozen** = ``"TransfersFrozen"``

translates to TransferStatus.TransfersHalted

occurs if the Asset's transfers are frozen

#### Defined in

[types/index.ts:681](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L681)
