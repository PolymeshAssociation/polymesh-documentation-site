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

[api/procedures/types.ts:1655](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1655)

___

### requiredSignatures

• `Optional` **requiredSignatures**: `BigNumber`

The required number of signatures for the MultiSig

#### Defined in

[api/procedures/types.ts:1663](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1663)

___

### signers

• `Optional` **signers**: [`Account`](../../../../../classes/API/Entities/Account/Account.md)[]

The signer accounts to set for the MultiSig

#### Defined in

[api/procedures/types.ts:1659](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1659)
