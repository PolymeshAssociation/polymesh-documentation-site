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

[api/procedures/types.ts:1648](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1648)

___

### requiredSignatures

• `Optional` **requiredSignatures**: `BigNumber`

The required number of signatures for the MultiSig

#### Defined in

[api/procedures/types.ts:1656](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1656)

___

### signers

• `Optional` **signers**: [`Account`](../../../../../classes/API/Entities/Account/Account.md)[]

The signer accounts to set for the MultiSig

#### Defined in

[api/procedures/types.ts:1652](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1652)
