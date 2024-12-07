---
id: "OffChainAffirmationReceipt"
title: "Interface: OffChainAffirmationReceipt"
sidebar_label: "OffChainAffirmationReceipt"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).OffChainAffirmationReceipt

## Properties

### legId

• **legId**: `BigNumber`

Index of the off chain leg within the instruction to be affirmed

#### Defined in

[api/procedures/types.ts:1033](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1033)

___

### metadata

• `Optional` **metadata**: `string`

(optional) Metadata value that can be used to attach messages to the receipt

#### Defined in

[api/procedures/types.ts:1045](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1045)

___

### signature

• **signature**: [`OffChainSignature`](../OffChainSignature/OffChainSignature.md)

Signature confirming the receipt details

#### Defined in

[api/procedures/types.ts:1041](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1041)

___

### signer

• **signer**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

Signer of this receipt

#### Defined in

[api/procedures/types.ts:1037](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1037)

___

### uid

• **uid**: `BigNumber`

Unique receipt number set by the signer for their receipts

#### Defined in

[api/procedures/types.ts:1029](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1029)
