---
id: "TransferError"
title: "Enumeration: TransferError"
sidebar_label: "TransferError"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).TransferError

Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to
  a [TransferStatus](../TransferStatus/TransferStatus.md), but two or more TransferErrors can represent the same TransferStatus, and
  not all Transfer Statuses are represented by a TransferError

## Enumeration Members

### ComplianceFailure

• **ComplianceFailure** = ``"ComplianceFailure"``

translates to TransferStatus.ComplianceFailure

occurs if some compliance rule would prevent the transfer

#### Defined in

[api/entities/Asset/types.ts:351](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L351)

___

### InsufficientBalance

• **InsufficientBalance** = ``"InsufficientBalance"``

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

#### Defined in

[api/entities/Asset/types.ts:320](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L320)

___

### InsufficientPortfolioBalance

• **InsufficientPortfolioBalance** = ``"InsufficientPortfolioBalance"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

#### Defined in

[api/entities/Asset/types.ts:344](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L344)

___

### InvalidGranularity

• **InvalidGranularity** = ``"InvalidGranularity"``

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

#### Defined in

[api/entities/Asset/types.ts:289](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L289)

___

### InvalidReceiverCdd

• **InvalidReceiverCdd** = ``"InvalidReceiverCdd"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[api/entities/Asset/types.ts:301](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L301)

___

### InvalidReceiverPortfolio

• **InvalidReceiverPortfolio** = ``"InvalidReceiverPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

#### Defined in

[api/entities/Asset/types.ts:338](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L338)

___

### InvalidSenderCdd

• **InvalidSenderCdd** = ``"InvalidSenderCdd"``

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[api/entities/Asset/types.ts:307](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L307)

___

### InvalidSenderPortfolio

• **InvalidSenderPortfolio** = ``"InvalidSenderPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

#### Defined in

[api/entities/Asset/types.ts:332](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L332)

___

### ScopeClaimMissing

• **ScopeClaimMissing** = ``"ScopeClaimMissing"``

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Asset

#### Defined in

[api/entities/Asset/types.ts:314](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L314)

___

### SelfTransfer

• **SelfTransfer** = ``"SelfTransfer"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

#### Defined in

[api/entities/Asset/types.ts:295](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L295)

___

### TransferNotAllowed

• **TransferNotAllowed** = ``"TransferNotAllowed"``

occurs if some statistics transfer condition would prevent the transfer

#### Defined in

[api/entities/Asset/types.ts:356](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L356)

___

### TransfersFrozen

• **TransfersFrozen** = ``"TransfersFrozen"``

translates to TransferStatus.TransfersHalted

occurs if the Asset's transfers are frozen

#### Defined in

[api/entities/Asset/types.ts:326](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Asset/types.ts#L326)
