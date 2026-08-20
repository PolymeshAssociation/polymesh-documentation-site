# Enumeration: TransferError

> Defined in: [src/api/entities/Asset/types.ts:289](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L289)

# Enumeration: TransferError

Defined in: [src/api/entities/Asset/types.ts:289](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L289)

Reasons a transfer would fail, as reported by the chain's transfer validation

## Enumeration Members

### AssetDoesNotExists

> **AssetDoesNotExists**: `"AssetDoesNotExists"`

Defined in: [src/api/entities/Asset/types.ts:332](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L332)

occurs if asset to be check for transfer, no longer exists

***

### BalanceOverflow

> **BalanceOverflow**: `"BalanceOverflow"`

Defined in: [src/api/entities/Asset/types.ts:337](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L337)

occurs if receiver balance will overflow on receiving the transfer amount

***

### ComplianceFailure

> **ComplianceFailure**: `"ComplianceFailure"`

Defined in: [src/api/entities/Asset/types.ts:322](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L322)

occurs if some compliance rule would prevent the transfer

***

### InsufficientBalance

> **InsufficientBalance**: `"InsufficientBalance"`

Defined in: [src/api/entities/Asset/types.ts:305](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L305)

occurs if the sender Identity does not have enough balance to cover the amount

***

### InsufficientPortfolioBalance

> **InsufficientPortfolioBalance**: `"InsufficientPortfolioBalance"`

Defined in: [src/api/entities/Asset/types.ts:317](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L317)

occurs if the sender Portfolio does not have enough balance to cover the amount

***

### InvalidGranularity

> **InvalidGranularity**: `"InvalidGranularity"`

Defined in: [src/api/entities/Asset/types.ts:293](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L293)

occurs if attempting to transfer decimal amounts of a non-divisible token

***

### InvalidReceiverIdentity

> **InvalidReceiverIdentity**: `"InvalidReceiverIdentity"`

Defined in: [src/api/entities/Asset/types.ts:301](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L301)

occurs if the receiving Identity is not active

***

### InvalidSenderPortfolio

> **InvalidSenderPortfolio**: `"InvalidSenderPortfolio"`

Defined in: [src/api/entities/Asset/types.ts:313](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L313)

occurs if the sender Portfolio doesn't exist

***

### SelfTransfer

> **SelfTransfer**: `"SelfTransfer"`

Defined in: [src/api/entities/Asset/types.ts:297](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L297)

occurs if the origin and destination Identities are the same

***

### TransferNotAllowed

> **TransferNotAllowed**: `"TransferNotAllowed"`

Defined in: [src/api/entities/Asset/types.ts:327](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L327)

occurs if some statistics transfer condition would prevent the transfer

***

### TransfersFrozen

> **TransfersFrozen**: `"TransfersFrozen"`

Defined in: [src/api/entities/Asset/types.ts:309](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L309)

occurs if the Asset's transfers are frozen
