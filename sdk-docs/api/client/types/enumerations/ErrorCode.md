# Enumeration: ErrorCode

> Defined in: [src/api/client/types.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L62)

# Enumeration: ErrorCode

Defined in: [src/api/client/types.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L62)

Specifies possible types of errors in the SDK

## Enumeration Members

### DataUnavailable

> **DataUnavailable**: `"DataUnavailable"`

Defined in: [src/api/client/types.ts:98](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L98)

the data that is being fetched does not exist on-chain, or relies on non-existent data. There are
  some cases where the data did exist at some point, but has been deleted to save storage space

***

### EntityInUse

> **EntityInUse**: `"EntityInUse"`

Defined in: [src/api/client/types.ts:120](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L120)

this type of error is thrown when attempting to delete/modify an entity which has other entities depending on it. For example, deleting
  a Portfolio that still holds assets, or removing a Checkpoint Schedule that is being referenced by a Corporate Action

***

### FatalError

> **FatalError**: `"FatalError"`

Defined in: [src/api/client/types.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L80)

error that should cause termination of the calling application

***

### General

> **General**: `"General"`

Defined in: [src/api/client/types.ts:133](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L133)

general purpose errors that don't fit well into the other categories

***

### InsufficientBalance

> **InsufficientBalance**: `"InsufficientBalance"`

Defined in: [src/api/client/types.ts:124](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L124)

one or more parties involved in the transaction do not have enough balance to perform it

***

### LimitExceeded

> **LimitExceeded**: `"LimitExceeded"`

Defined in: [src/api/client/types.ts:108](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L108)

the data that is being written to the chain would result in some limit being exceeded. For example, adding a transfer
  restriction when the maximum possible amount has already been added

***

### MiddlewareError

> **MiddlewareError**: `"MiddlewareError"`

Defined in: [src/api/client/types.ts:93](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L93)

errors encountered when interacting with the historic data middleware (GQL server)

***

### NoDataChange

> **NoDataChange**: `"NoDataChange"`

Defined in: [src/api/client/types.ts:103](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L103)

the data that is being written to the chain is the same data that is already in place. This would result
  in a redundant/useless transaction being executed

***

### NotAuthorized

> **NotAuthorized**: `"NotAuthorized"`

Defined in: [src/api/client/types.ts:89](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L89)

user does not have the required roles/permissions to perform an operation

***

### NotSupported

> **NotSupported**: `"NotSupported"`

Defined in: [src/api/client/types.ts:137](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L137)

method not supported

***

### TransactionAborted

> **TransactionAborted**: `"TransactionAborted"`

Defined in: [src/api/client/types.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L66)

transaction removed from the tx pool

***

### TransactionRejectedByUser

> **TransactionRejectedByUser**: `"TransactionRejectedByUser"`

Defined in: [src/api/client/types.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L70)

user rejected the transaction in their wallet

***

### TransactionReverted

> **TransactionReverted**: `"TransactionReverted"`

Defined in: [src/api/client/types.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L76)

transaction failed due to an on-chain error. This is a business logic error,
  and it should be caught by the SDK before being sent to the chain.
  Please report it to the Polymesh team

***

### UnexpectedError

> **UnexpectedError**: `"UnexpectedError"`

Defined in: [src/api/client/types.ts:129](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L129)

errors that are the result of something unforeseen.
  These should generally be reported to the Polymesh team

***

### UnmetPrerequisite

> **UnmetPrerequisite**: `"UnmetPrerequisite"`

Defined in: [src/api/client/types.ts:115](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L115)

one or more base prerequisites for a transaction to be successful haven't been met. For example, reserving a ticker requires
  said ticker to not be already reserved. Attempting to reserve a ticker without that prerequisite being met would result in this
  type of error. Attempting to create an entity that already exists would also fall into this category,
  if the entity in question is supposed to be unique

***

### ValidationError

> **ValidationError**: `"ValidationError"`

Defined in: [src/api/client/types.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L85)

user input error. This means that one or more inputs passed by the user
  do not conform to expected value ranges or types
