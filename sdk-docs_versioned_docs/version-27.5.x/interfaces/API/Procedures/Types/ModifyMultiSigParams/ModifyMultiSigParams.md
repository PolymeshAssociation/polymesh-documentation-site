---
id: "ModifyMultiSigParams"
title: "Interface: ModifyMultiSigParams"
sidebar_label: "ModifyMultiSigParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).ModifyMultiSigParams

## Properties

### multiSig

• **multiSig**: [`MultiSig`](../../../../../classes/API/Entities/Account/MultiSig/MultiSig.md)

The MultiSig to be modified

#### Defined in

[api/procedures/types.ts:1684](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/procedures/types.ts#L1684)

___

### requiredSignatures

• `Optional` **requiredSignatures**: `BigNumber`

The required number of signatures for the MultiSig

#### Defined in

[api/procedures/types.ts:1692](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/procedures/types.ts#L1692)

___

### signers

• `Optional` **signers**: [`Account`](../../../../../classes/API/Entities/Account/Account.md)[]

The signer accounts to set for the MultiSig

#### Defined in

[api/procedures/types.ts:1688](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/procedures/types.ts#L1688)
