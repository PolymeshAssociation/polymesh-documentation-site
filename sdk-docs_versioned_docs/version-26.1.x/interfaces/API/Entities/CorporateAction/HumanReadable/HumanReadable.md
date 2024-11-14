---
id: "HumanReadable"
title: "Interface: HumanReadable"
sidebar_label: "HumanReadable"
---

[api/entities/CorporateAction](../../../../../modules/API/Entities/CorporateAction/CorporateAction.md).HumanReadable

## Hierarchy

- **`HumanReadable`**

  ↳ [`HumanReadable`](../../DividendDistribution/HumanReadable/HumanReadable.md)

## Properties

### assetId

• **assetId**: `string`

#### Defined in

[api/entities/CorporateAction.ts:26](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L26)

___

### declarationDate

• **declarationDate**: `string`

#### Defined in

[api/entities/CorporateAction.ts:27](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L27)

___

### defaultTaxWithholding

• **defaultTaxWithholding**: `string`

#### Defined in

[api/entities/CorporateAction.ts:30](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L30)

___

### description

• **description**: `string`

#### Defined in

[api/entities/CorporateAction.ts:28](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L28)

___

### id

• **id**: `string`

#### Defined in

[api/entities/CorporateAction.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L21)

___

### targets

• **targets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `identities` | `string`[] |
| `treatment` | [`TargetTreatment`](../../../../../enums/API/Entities/CorporateActionBase/Types/TargetTreatment/TargetTreatment.md) |

#### Defined in

[api/entities/CorporateAction.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L29)

___

### taxWithholdings

• **taxWithholdings**: \{ `identity`: `string` ; `percentage`: `string`  }[]

#### Defined in

[api/entities/CorporateAction.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L31)

___

### ticker

• **ticker**: `string`

**`Deprecated`**

in favour of `assetId`

#### Defined in

[api/entities/CorporateAction.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/entities/CorporateAction.ts#L25)
