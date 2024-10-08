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

[api/entities/MultiSigProposal/types.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MultiSigProposal/types.ts#L33)

___

### args

• **args**: [`AnyJson`](../../../../../../modules/API/Entities/MultiSigProposal/Types/Types.md#anyjson)

The arguments to be passed to the transaction for this proposal

#### Defined in

[api/entities/MultiSigProposal/types.ts:57](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MultiSigProposal/types.ts#L57)

___

### autoClose

• **autoClose**: `boolean`

Determines if the proposal will automatically be closed once a threshold of reject votes has been reached

#### Defined in

[api/entities/MultiSigProposal/types.ts:49](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MultiSigProposal/types.ts#L49)

___

### expiry

• **expiry**: ``null`` \| `Date`

An optional time in which this proposal will expire if a decision isn't reached by then

#### Defined in

[api/entities/MultiSigProposal/types.ts:45](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MultiSigProposal/types.ts#L45)

___

### rejectionAmount

• **rejectionAmount**: `BigNumber`

The number of rejections this proposal has received

#### Defined in

[api/entities/MultiSigProposal/types.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MultiSigProposal/types.ts#L37)

___

### status

• **status**: [`ProposalStatus`](../../../../../../enums/API/Entities/MultiSigProposal/Types/ProposalStatus/ProposalStatus.md)

The current status of the proposal

#### Defined in

[api/entities/MultiSigProposal/types.ts:41](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MultiSigProposal/types.ts#L41)

___

### txTag

• **txTag**: [`TxTag`](../../../../../../modules/Generated/Types/Types.md#txtag)

The tag for the transaction being proposed for the MultiSig to execute

#### Defined in

[api/entities/MultiSigProposal/types.ts:53](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MultiSigProposal/types.ts#L53)

___

### voted

• **voted**: [`Account`](../../../../../../classes/API/Entities/Account/Account.md)[]

Accounts of signing keys that have already voted on this proposal

#### Defined in

[api/entities/MultiSigProposal/types.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/MultiSigProposal/types.ts#L61)
