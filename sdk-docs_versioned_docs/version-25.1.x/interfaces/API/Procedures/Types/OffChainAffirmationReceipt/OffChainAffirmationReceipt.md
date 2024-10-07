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

[api/procedures/types.ts:1015](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/procedures/types.ts#L1015)

___

### metadata

• `Optional` **metadata**: `string`

(optional) Metadata value that can be used to attach messages to the receipt

#### Defined in

[api/procedures/types.ts:1027](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/procedures/types.ts#L1027)

___

### signature

• **signature**: [`OffChainSignature`](../OffChainSignature/OffChainSignature.md)

Signature confirming the receipt details

#### Defined in

[api/procedures/types.ts:1023](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/procedures/types.ts#L1023)

___

### signer

• **signer**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

Signer of this receipt

#### Defined in

[api/procedures/types.ts:1019](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/procedures/types.ts#L1019)

___

### uid

• **uid**: `BigNumber`

Unique receipt number set by the signer for their receipts

#### Defined in

[api/procedures/types.ts:1011](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/procedures/types.ts#L1011)
