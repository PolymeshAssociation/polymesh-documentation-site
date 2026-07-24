# Enumeration: TransferError

> Defined in: [src/api/entities/Asset/types.ts:307](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L307)

# Enumeration: TransferError

Defined in: [src/api/entities/Asset/types.ts:307](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L307)

Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to
  a [TransferStatus](TransferStatus.mdx), but two or more TransferErrors can represent the same TransferStatus, and
  not all Transfer Statuses are represented by a TransferError

## Enumeration Members

### AssetDoesNotExists

> **AssetDoesNotExists**: `"AssetDoesNotExists"`

Defined in: [src/api/entities/Asset/types.ts:385](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L385)

occurs if asset to be check for transfer, no longer exists

***

### BalanceOverflow

> **BalanceOverflow**: `"BalanceOverflow"`

Defined in: [src/api/entities/Asset/types.ts:390](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L390)

occurs if receiver balance will overflow on receiving the transfer amount

***

### ComplianceFailure

> **ComplianceFailure**: `"ComplianceFailure"`

Defined in: [src/api/entities/Asset/types.ts:375](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L375)

translates to TransferStatus.ComplianceFailure

occurs if some compliance rule would prevent the transfer

***

### InsufficientBalance

> **InsufficientBalance**: `"InsufficientBalance"`

Defined in: [src/api/entities/Asset/types.ts:344](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L344)

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

***

### InsufficientPortfolioBalance

> **InsufficientPortfolioBalance**: `"InsufficientPortfolioBalance"`

Defined in: [src/api/entities/Asset/types.ts:368](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L368)

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

***

### InvalidGranularity

> **InvalidGranularity**: `"InvalidGranularity"`

Defined in: [src/api/entities/Asset/types.ts:313](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L313)

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

***

### InvalidReceiverCdd

> **InvalidReceiverCdd**: `"InvalidReceiverCdd"`

Defined in: [src/api/entities/Asset/types.ts:325](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L325)

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

***

### InvalidReceiverPortfolio

> **InvalidReceiverPortfolio**: `"InvalidReceiverPortfolio"`

Defined in: [src/api/entities/Asset/types.ts:362](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L362)

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

***

### InvalidSenderCdd

> **InvalidSenderCdd**: `"InvalidSenderCdd"`

Defined in: [src/api/entities/Asset/types.ts:331](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L331)

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

***

### InvalidSenderPortfolio

> **InvalidSenderPortfolio**: `"InvalidSenderPortfolio"`

Defined in: [src/api/entities/Asset/types.ts:356](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L356)

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

***

### ScopeClaimMissing

> **ScopeClaimMissing**: `"ScopeClaimMissing"`

Defined in: [src/api/entities/Asset/types.ts:338](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L338)

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Asset

***

### SelfTransfer

> **SelfTransfer**: `"SelfTransfer"`

Defined in: [src/api/entities/Asset/types.ts:319](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L319)

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

***

### TransferNotAllowed

> **TransferNotAllowed**: `"TransferNotAllowed"`

Defined in: [src/api/entities/Asset/types.ts:380](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L380)

occurs if some statistics transfer condition would prevent the transfer

***

### TransfersFrozen

> **TransfersFrozen**: `"TransfersFrozen"`

Defined in: [src/api/entities/Asset/types.ts:350](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/types.ts#L350)

translates to TransferStatus.TransfersHalted

occurs if the Asset's transfers are frozen
