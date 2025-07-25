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

[api/procedures/types.ts:1040](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1040)

___

### metadata

• `Optional` **metadata**: `string`

(optional) Metadata value that can be used to attach messages to the receipt

#### Defined in

[api/procedures/types.ts:1052](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1052)

___

### signature

• **signature**: [`OffChainSignature`](../OffChainSignature/OffChainSignature.md)

Signature confirming the receipt details

#### Defined in

[api/procedures/types.ts:1048](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1048)

___

### signer

• **signer**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

Signer of this receipt

#### Defined in

[api/procedures/types.ts:1044](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1044)

___

### uid

• **uid**: `BigNumber`

Unique receipt number set by the signer for their receipts

#### Defined in

[api/procedures/types.ts:1036](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1036)
