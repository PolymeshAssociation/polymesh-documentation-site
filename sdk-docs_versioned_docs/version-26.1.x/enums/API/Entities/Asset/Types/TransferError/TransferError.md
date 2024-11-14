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

### AssetDoesNotExists

• **AssetDoesNotExists** = ``"AssetDoesNotExists"``

occurs if asset to be check for transfer, no longer exists

#### Defined in

[api/entities/Asset/types.ts:366](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L366)

___

### BalanceOverflow

• **BalanceOverflow** = ``"BalanceOverflow"``

occurs if receiver balance will overflow on receiving the transfer amount

#### Defined in

[api/entities/Asset/types.ts:371](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L371)

___

### ComplianceFailure

• **ComplianceFailure** = ``"ComplianceFailure"``

translates to TransferStatus.ComplianceFailure

occurs if some compliance rule would prevent the transfer

#### Defined in

[api/entities/Asset/types.ts:356](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L356)

___

### InsufficientBalance

• **InsufficientBalance** = ``"InsufficientBalance"``

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

#### Defined in

[api/entities/Asset/types.ts:325](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L325)

___

### InsufficientPortfolioBalance

• **InsufficientPortfolioBalance** = ``"InsufficientPortfolioBalance"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

#### Defined in

[api/entities/Asset/types.ts:349](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L349)

___

### InvalidGranularity

• **InvalidGranularity** = ``"InvalidGranularity"``

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

#### Defined in

[api/entities/Asset/types.ts:294](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L294)

___

### InvalidReceiverCdd

• **InvalidReceiverCdd** = ``"InvalidReceiverCdd"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[api/entities/Asset/types.ts:306](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L306)

___

### InvalidReceiverPortfolio

• **InvalidReceiverPortfolio** = ``"InvalidReceiverPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

#### Defined in

[api/entities/Asset/types.ts:343](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L343)

___

### InvalidSenderCdd

• **InvalidSenderCdd** = ``"InvalidSenderCdd"``

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[api/entities/Asset/types.ts:312](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L312)

___

### InvalidSenderPortfolio

• **InvalidSenderPortfolio** = ``"InvalidSenderPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

#### Defined in

[api/entities/Asset/types.ts:337](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L337)

___

### ScopeClaimMissing

• **ScopeClaimMissing** = ``"ScopeClaimMissing"``

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Asset

#### Defined in

[api/entities/Asset/types.ts:319](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L319)

___

### SelfTransfer

• **SelfTransfer** = ``"SelfTransfer"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

#### Defined in

[api/entities/Asset/types.ts:300](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L300)

___

### TransferNotAllowed

• **TransferNotAllowed** = ``"TransferNotAllowed"``

occurs if some statistics transfer condition would prevent the transfer

#### Defined in

[api/entities/Asset/types.ts:361](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L361)

___

### TransfersFrozen

• **TransfersFrozen** = ``"TransfersFrozen"``

translates to TransferStatus.TransfersHalted

occurs if the Asset's transfers are frozen

#### Defined in

[api/entities/Asset/types.ts:331](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/Asset/types.ts#L331)
