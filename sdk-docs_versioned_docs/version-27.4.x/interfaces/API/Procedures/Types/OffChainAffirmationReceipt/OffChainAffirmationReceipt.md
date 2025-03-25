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

[api/procedures/types.ts:1065](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1065)

___

### metadata

• `Optional` **metadata**: `string`

(optional) Metadata value that can be used to attach messages to the receipt

#### Defined in

[api/procedures/types.ts:1077](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1077)

___

### signature

• **signature**: [`OffChainSignature`](../OffChainSignature/OffChainSignature.md)

Signature confirming the receipt details

#### Defined in

[api/procedures/types.ts:1073](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1073)

___

### signer

• **signer**: `string` \| [`Account`](../../../../../classes/API/Entities/Account/Account.md)

Signer of this receipt

#### Defined in

[api/procedures/types.ts:1069](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1069)

___

### uid

• **uid**: `BigNumber`

Unique receipt number set by the signer for their receipts

#### Defined in

[api/procedures/types.ts:1061](https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1061)
