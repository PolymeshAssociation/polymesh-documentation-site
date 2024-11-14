---
id: "HumanReadable"
title: "Interface: HumanReadable"
sidebar_label: "HumanReadable"
---

[api/entities/DividendDistribution](../../../../../modules/API/Entities/DividendDistribution/DividendDistribution.md).HumanReadable

## Hierarchy

- [`HumanReadable`](../../CorporateAction/HumanReadable/HumanReadable.md)

  ↳ **`HumanReadable`**

## Properties

### assetId

• **assetId**: `string`

#### Inherited from

[HumanReadable](../../CorporateAction/HumanReadable/HumanReadable.md).[assetId](../../CorporateAction/HumanReadable/HumanReadable.md#assetid)

#### Defined in

[api/entities/CorporateAction.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L26)

___

### currency

• **currency**: `string`

#### Defined in

[api/entities/DividendDistribution/index.ts:65](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/DividendDistribution/index.ts#L65)

___

### declarationDate

• **declarationDate**: `string`

#### Inherited from

[HumanReadable](../../CorporateAction/HumanReadable/HumanReadable.md).[declarationDate](../../CorporateAction/HumanReadable/HumanReadable.md#declarationdate)

#### Defined in

[api/entities/CorporateAction.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L27)

___

### defaultTaxWithholding

• **defaultTaxWithholding**: `string`

#### Inherited from

[HumanReadable](../../CorporateAction/HumanReadable/HumanReadable.md).[defaultTaxWithholding](../../CorporateAction/HumanReadable/HumanReadable.md#defaulttaxwithholding)

#### Defined in

[api/entities/CorporateAction.ts:30](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L30)

___

### description

• **description**: `string`

#### Inherited from

[HumanReadable](../../CorporateAction/HumanReadable/HumanReadable.md).[description](../../CorporateAction/HumanReadable/HumanReadable.md#description)

#### Defined in

[api/entities/CorporateAction.ts:28](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L28)

___

### expiryDate

• **expiryDate**: ``null`` \| `string`

#### Defined in

[api/entities/DividendDistribution/index.ts:68](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/DividendDistribution/index.ts#L68)

___

### id

• **id**: `string`

#### Inherited from

[HumanReadable](../../CorporateAction/HumanReadable/HumanReadable.md).[id](../../CorporateAction/HumanReadable/HumanReadable.md#id)

#### Defined in

[api/entities/CorporateAction.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L21)

___

### maxAmount

• **maxAmount**: `string`

#### Defined in

[api/entities/DividendDistribution/index.ts:67](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/DividendDistribution/index.ts#L67)

___

### origin

• **origin**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `id?` | `string` |

#### Defined in

[api/entities/DividendDistribution/index.ts:64](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/DividendDistribution/index.ts#L64)

___

### paymentDate

• **paymentDate**: `string`

#### Defined in

[api/entities/DividendDistribution/index.ts:69](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/DividendDistribution/index.ts#L69)

___

### perShare

• **perShare**: `string`

#### Defined in

[api/entities/DividendDistribution/index.ts:66](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/DividendDistribution/index.ts#L66)

___

### targets

• **targets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `identities` | `string`[] |
| `treatment` | [`TargetTreatment`](../../../../../enums/API/Entities/CorporateActionBase/Types/TargetTreatment/TargetTreatment.md) |

#### Inherited from

[HumanReadable](../../CorporateAction/HumanReadable/HumanReadable.md).[targets](../../CorporateAction/HumanReadable/HumanReadable.md#targets)

#### Defined in

[api/entities/CorporateAction.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L29)

___

### taxWithholdings

• **taxWithholdings**: \{ `identity`: `string` ; `percentage`: `string`  }[]

#### Inherited from

[HumanReadable](../../CorporateAction/HumanReadable/HumanReadable.md).[taxWithholdings](../../CorporateAction/HumanReadable/HumanReadable.md#taxwithholdings)

#### Defined in

[api/entities/CorporateAction.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L31)

___

### ticker

• **ticker**: `string`

**`Deprecated`**

in favour of `assetId`

#### Inherited from

[HumanReadable](../../CorporateAction/HumanReadable/HumanReadable.md).[ticker](../../CorporateAction/HumanReadable/HumanReadable.md#ticker)

#### Defined in

[api/entities/CorporateAction.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L25)
