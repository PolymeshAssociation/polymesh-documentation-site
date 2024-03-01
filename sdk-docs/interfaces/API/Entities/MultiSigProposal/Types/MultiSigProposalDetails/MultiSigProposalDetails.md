---
id: "MultiSigProposalDetails"
title: "Interface: MultiSigProposalDetails"
sidebar_label: "MultiSigProposalDetails"
---

[api/entities/MultiSigProposal/types](../../../../../../modules/API/Entities/MultiSigProposal/Types/Types.md).MultiSigProposalDetails

## Properties

### approvalAmount

• **approvalAmount**: `BigNumber`

The number of approvals this proposal has received

#### Defined in

[api/entities/MultiSigProposal/types.ts:19](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/MultiSigProposal/types.ts#L19)

___

### args

• **args**: [`AnyJson`](../../../../../../modules/Types/Types.md#anyjson)

The arguments to be passed to the transaction for this proposal

#### Defined in

[api/entities/MultiSigProposal/types.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/MultiSigProposal/types.ts#L43)

___

### autoClose

• **autoClose**: `boolean`

Determines if the proposal will automatically be closed once a threshold of reject votes has been reached

#### Defined in

[api/entities/MultiSigProposal/types.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/MultiSigProposal/types.ts#L35)

___

### expiry

• **expiry**: ``null`` \| `Date`

An optional time in which this proposal will expire if a decision isn't reached by then

#### Defined in

[api/entities/MultiSigProposal/types.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/MultiSigProposal/types.ts#L31)

___

### rejectionAmount

• **rejectionAmount**: `BigNumber`

The number of rejections this proposal has received

#### Defined in

[api/entities/MultiSigProposal/types.ts:23](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/MultiSigProposal/types.ts#L23)

___

### status

• **status**: [`ProposalStatus`](../../../../../../enums/API/Entities/MultiSigProposal/Types/ProposalStatus/ProposalStatus.md)

The current status of the proposal

#### Defined in

[api/entities/MultiSigProposal/types.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/MultiSigProposal/types.ts#L27)

___

### txTag

• **txTag**: [`TxTag`](../../../../../../modules/Generated/Types/Types.md#txtag)

The tag for the transaction being proposed for the MultiSig to execute

#### Defined in

[api/entities/MultiSigProposal/types.ts:39](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/MultiSigProposal/types.ts#L39)

___

### voted

• **voted**: [`Account`](../../../../../../classes/API/Entities/Account/Account.md)[]

Accounts of signing keys that have already voted on this proposal

#### Defined in

[api/entities/MultiSigProposal/types.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/MultiSigProposal/types.ts#L47)
