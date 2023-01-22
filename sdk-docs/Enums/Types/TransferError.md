[types](../../Modules/Types/Types.md).TransferError

Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to
  a [TransferStatus](TransferStatus.md), but two or more TransferErrors can represent the same TransferStatus, and
  not all Transfer Statuses are represented by a TransferError

## Enumeration Members

### InsufficientBalance

• **InsufficientBalance** = ``"InsufficientBalance"``

translates to TransferStatus.InsufficientBalance

occurs if the sender Identity does not have enough balance to cover the amount

#### Defined in

[types/index.ts:651](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L651)

___

### InsufficientPortfolioBalance

• **InsufficientPortfolioBalance** = ``"InsufficientPortfolioBalance"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio does not have enough balance to cover the amount

#### Defined in

[types/index.ts:675](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L675)

___

### InvalidGranularity

• **InvalidGranularity** = ``"InvalidGranularity"``

translates to TransferStatus.InvalidGranularity

occurs if attempting to transfer decimal amounts of a non-divisible token

#### Defined in

[types/index.ts:620](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L620)

___

### InvalidReceiverCdd

• **InvalidReceiverCdd** = ``"InvalidReceiverCdd"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[types/index.ts:632](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L632)

___

### InvalidReceiverPortfolio

• **InvalidReceiverPortfolio** = ``"InvalidReceiverPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the receiver Portfolio doesn't exist

#### Defined in

[types/index.ts:669](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L669)

___

### InvalidSenderCdd

• **InvalidSenderCdd** = ``"InvalidSenderCdd"``

translates to TransferStatus.InvalidSenderIdentity

occurs if the receiver Identity doesn't have a valid CDD claim

#### Defined in

[types/index.ts:638](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L638)

___

### InvalidSenderPortfolio

• **InvalidSenderPortfolio** = ``"InvalidSenderPortfolio"``

translates to TransferStatus.PortfolioFailure

occurs if the sender Portfolio doesn't exist

#### Defined in

[types/index.ts:663](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L663)

___

### ScopeClaimMissing

• **ScopeClaimMissing** = ``"ScopeClaimMissing"``

translates to TransferStatus.ScopeClaimMissing

occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for
  the Asset

#### Defined in

[types/index.ts:645](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L645)

___

### SelfTransfer

• **SelfTransfer** = ``"SelfTransfer"``

translates to TransferStatus.InvalidReceiverIdentity

occurs if the origin and destination Identities are the same

#### Defined in

[types/index.ts:626](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L626)

___

### TransfersFrozen

• **TransfersFrozen** = ``"TransfersFrozen"``

translates to TransferStatus.TransfersHalted

occurs if the Asset's transfers are frozen

#### Defined in

[types/index.ts:657](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L657)
