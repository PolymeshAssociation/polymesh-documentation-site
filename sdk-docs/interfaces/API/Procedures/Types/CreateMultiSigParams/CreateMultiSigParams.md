---
id: "CreateMultiSigParams"
title: "Interface: CreateMultiSigParams"
sidebar_label: "CreateMultiSigParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).CreateMultiSigParams

## Properties

### permissions

• `Optional` **permissions**: [`PermissionsLike`](../../../../../modules/API/Entities/Types/Types.md#permissionslike)

Grants permissions to the MultiSig upon creation. The caller must be the primary key of the Identity for these to work

#### Defined in

[api/procedures/types.ts:1629](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1629)

___

### requiredSignatures

• **requiredSignatures**: `BigNumber`

#### Defined in

[api/procedures/types.ts:1625](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1625)

___

### signers

• **signers**: [`Signer`](../../../../../modules/API/Entities/Types/Types.md#signer)[]

**`Note`**

Signer must be an Account as of v7

#### Defined in

[api/procedures/types.ts:1624](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1624)
