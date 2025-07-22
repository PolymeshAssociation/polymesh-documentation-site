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

[api/entities/Asset/types.ts:363](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L363)

___

### BalanceOverflow

• **BalanceOverflow** = ``"BalanceOverflow"``

occurs if receiver balance will overflow on receiving the transfer amount

#### Defined in

[api/entities/Asset/types.ts:368](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L368)

___

### ComplianceFailure

• **ComplianceFailure** = ``"ComplianceFailure"``

translates to TransferStatus.ComplianceFailure

occurs if some compliance rule would prevent the transfer

#### Defined in

[api/entities/Asset/types.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L353)

___

### InsufficientBalance

• **InsufficientBalance** = ``"InsufficientBalance"``

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

#### Defined in

[api/entities/Asset/types.ts:322](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L322)

___

### InsufficientPortfolioBalance

• **InsufficientPortfolioBalance** = ``"InsufficientPortfolioBalance"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

#### Defined in

[api/entities/Asset/types.ts:346](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L346)

___

### InvalidGranularity

• **InvalidGranularity** = ``"InvalidGranularity"``

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

#### Defined in

[api/entities/Asset/types.ts:291](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L291)

___

### InvalidReceiverCdd

• **InvalidReceiverCdd** = ``"InvalidReceiverCdd"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[api/entities/Asset/types.ts:303](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L303)

___

### InvalidReceiverPortfolio

• **InvalidReceiverPortfolio** = ``"InvalidReceiverPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

#### Defined in

[api/entities/Asset/types.ts:340](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L340)

___

### InvalidSenderCdd

• **InvalidSenderCdd** = ``"InvalidSenderCdd"``

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[api/entities/Asset/types.ts:309](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L309)

___

### InvalidSenderPortfolio

• **InvalidSenderPortfolio** = ``"InvalidSenderPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

#### Defined in

[api/entities/Asset/types.ts:334](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L334)

___

### ScopeClaimMissing

• **ScopeClaimMissing** = ``"ScopeClaimMissing"``

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Asset

#### Defined in

[api/entities/Asset/types.ts:316](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L316)

___

### SelfTransfer

• **SelfTransfer** = ``"SelfTransfer"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

#### Defined in

[api/entities/Asset/types.ts:297](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L297)

___

### TransferNotAllowed

• **TransferNotAllowed** = ``"TransferNotAllowed"``

occurs if some statistics transfer condition would prevent the transfer

#### Defined in

[api/entities/Asset/types.ts:358](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L358)

___

### TransfersFrozen

• **TransfersFrozen** = ``"TransfersFrozen"``

translates to TransferStatus.TransfersHalted

occurs if the Asset's transfers are frozen

#### Defined in

[api/entities/Asset/types.ts:328](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L328)
