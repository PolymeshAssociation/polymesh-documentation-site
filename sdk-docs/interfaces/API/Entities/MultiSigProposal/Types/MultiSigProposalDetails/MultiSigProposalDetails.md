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

[api/entities/MultiSigProposal/types.ts:18](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/MultiSigProposal/types.ts#L18)

___

### args

• **args**: `string`[]

The arguments to be passed to the transaction for this proposal

#### Defined in

[api/entities/MultiSigProposal/types.ts:42](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/MultiSigProposal/types.ts#L42)

___

### autoClose

• **autoClose**: `boolean`

Determines if the proposal will automatically be closed once a threshold of reject votes has been reached

#### Defined in

[api/entities/MultiSigProposal/types.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/MultiSigProposal/types.ts#L34)

___

### expiry

• **expiry**: ``null`` \| `Date`

An optional time in which this proposal will expire if a decision isn't reached by then

#### Defined in

[api/entities/MultiSigProposal/types.ts:30](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/MultiSigProposal/types.ts#L30)

___

### rejectionAmount

• **rejectionAmount**: `BigNumber`

The number of rejections this proposal has received

#### Defined in

[api/entities/MultiSigProposal/types.ts:22](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/MultiSigProposal/types.ts#L22)

___

### status

• **status**: [`ProposalStatus`](../../../../../../enums/API/Entities/MultiSigProposal/Types/ProposalStatus/ProposalStatus.md)

The current status of the proposal

#### Defined in

[api/entities/MultiSigProposal/types.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/MultiSigProposal/types.ts#L26)

___

### txTag

• **txTag**: [`TxTag`](../../../../../../modules/Generated/Types/Types.md#txtag)

The tag for the transaction being proposed for the MultiSig to execute

#### Defined in

[api/entities/MultiSigProposal/types.ts:38](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/MultiSigProposal/types.ts#L38)
