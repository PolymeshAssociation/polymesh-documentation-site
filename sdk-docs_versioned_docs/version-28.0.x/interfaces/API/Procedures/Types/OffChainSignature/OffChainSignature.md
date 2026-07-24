---
id: "OffChainSignature"
title: "Interface: OffChainSignature"
sidebar_label: "OffChainSignature"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).OffChainSignature

## Properties

### type

• **type**: [`SignerKeyRingType`](../../../../../enums/API/Procedures/Types/SignerKeyRingType/SignerKeyRingType.md)

#### Defined in

[api/procedures/types.ts:1024](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1024)

___

### value

• **value**: \`0x$\{string}\`

The off chain signature value.
NOTE: The off chain payload should be wrapped with bytes before signing. For e.g. `<Bytes>Off chain payload</Bytes>` should be signed to get the signature value

#### Defined in

[api/procedures/types.ts:1029](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1029)
