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

[api/procedures/types.ts:1072](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L1072)

___

### metadata

• `Optional` **metadata**: `string`

(optional) Metadata value that can be used to attach messages to the receipt

#### Defined in

[api/procedures/types.ts:1084](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L1084)

___

### signature

• **signature**: [`OffChainSignature`](../OffChainSignature/OffChainSignature.md)

Signature confirming the receipt details

#### Defined in

[api/procedures/types.ts:1080](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L1080)

___

### signer

• **signer**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

Signer of this receipt

#### Defined in

[api/procedures/types.ts:1076](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L1076)

___

### uid

• **uid**: `BigNumber`

Unique receipt number set by the signer for their receipts

#### Defined in

[api/procedures/types.ts:1068](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L1068)
