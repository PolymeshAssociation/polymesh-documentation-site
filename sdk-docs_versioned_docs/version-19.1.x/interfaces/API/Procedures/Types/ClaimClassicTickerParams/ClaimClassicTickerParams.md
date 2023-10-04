---
id: "ClaimClassicTickerParams"
title: "Interface: ClaimClassicTickerParams"
sidebar_label: "ClaimClassicTickerParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).ClaimClassicTickerParams

## Properties

### ethereumSignature

• **ethereumSignature**: `string`

signature generated by signing a message formed by the DID (hex without the leading 0x),
  prefixed by `classic_claim`. Example: if the DID is `0x1230000000000000000000000000000000000000000000000000000000000000`,
  the message would be `classic_claim1230000000000000000000000000000000000000000000000000000000000000`

#### Defined in

[api/procedures/types.ts:271](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/procedures/types.ts#L271)

___

### ticker

• **ticker**: `string`

ticker symbol to claim

#### Defined in

[api/procedures/types.ts:275](https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/procedures/types.ts#L275)