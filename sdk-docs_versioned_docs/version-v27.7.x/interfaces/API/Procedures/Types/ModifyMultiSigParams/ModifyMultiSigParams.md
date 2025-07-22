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

[api/procedures/types.ts:1687](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L1687)

___

### requiredSignatures

• `Optional` **requiredSignatures**: `BigNumber`

The required number of signatures for the MultiSig

#### Defined in

[api/procedures/types.ts:1695](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L1695)

___

### signers

• `Optional` **signers**: [`Account`](../../../../../classes/API/Entities/Account/Account.md)[]

The signer accounts to set for the MultiSig

#### Defined in

[api/procedures/types.ts:1691](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L1691)
