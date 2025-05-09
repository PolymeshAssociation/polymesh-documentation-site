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

[api/entities/Asset/types.ts:358](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L358)

___

### BalanceOverflow

• **BalanceOverflow** = ``"BalanceOverflow"``

occurs if receiver balance will overflow on receiving the transfer amount

#### Defined in

[api/entities/Asset/types.ts:363](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L363)

___

### ComplianceFailure

• **ComplianceFailure** = ``"ComplianceFailure"``

translates to TransferStatus.ComplianceFailure

occurs if some compliance rule would prevent the transfer

#### Defined in

[api/entities/Asset/types.ts:348](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L348)

___

### InsufficientBalance

• **InsufficientBalance** = ``"InsufficientBalance"``

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

#### Defined in

[api/entities/Asset/types.ts:317](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L317)

___

### InsufficientPortfolioBalance

• **InsufficientPortfolioBalance** = ``"InsufficientPortfolioBalance"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

#### Defined in

[api/entities/Asset/types.ts:341](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L341)

___

### InvalidGranularity

• **InvalidGranularity** = ``"InvalidGranularity"``

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

#### Defined in

[api/entities/Asset/types.ts:286](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L286)

___

### InvalidReceiverCdd

• **InvalidReceiverCdd** = ``"InvalidReceiverCdd"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[api/entities/Asset/types.ts:298](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L298)

___

### InvalidReceiverPortfolio

• **InvalidReceiverPortfolio** = ``"InvalidReceiverPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

#### Defined in

[api/entities/Asset/types.ts:335](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L335)

___

### InvalidSenderCdd

• **InvalidSenderCdd** = ``"InvalidSenderCdd"``

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[api/entities/Asset/types.ts:304](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L304)

___

### InvalidSenderPortfolio

• **InvalidSenderPortfolio** = ``"InvalidSenderPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

#### Defined in

[api/entities/Asset/types.ts:329](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L329)

___

### ScopeClaimMissing

• **ScopeClaimMissing** = ``"ScopeClaimMissing"``

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Asset

#### Defined in

[api/entities/Asset/types.ts:311](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L311)

___

### SelfTransfer

• **SelfTransfer** = ``"SelfTransfer"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

#### Defined in

[api/entities/Asset/types.ts:292](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L292)

___

### TransferNotAllowed

• **TransferNotAllowed** = ``"TransferNotAllowed"``

occurs if some statistics transfer condition would prevent the transfer

#### Defined in

[api/entities/Asset/types.ts:353](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L353)

___

### TransfersFrozen

• **TransfersFrozen** = ``"TransfersFrozen"``

translates to TransferStatus.TransfersHalted

occurs if the Asset's transfers are frozen

#### Defined in

[api/entities/Asset/types.ts:323](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/Asset/types.ts#L323)
