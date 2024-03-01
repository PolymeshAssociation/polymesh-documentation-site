---
id: "Subsidies"
title: "Class: Subsidies"
sidebar_label: "Subsidies"
---

[api/entities/Subsidies](../../../../modules/API/Entities/Subsidies/Subsidies.md).Subsidies

Handles all Account Subsidies related functionality

## Hierarchy

- `Namespace`\<[`Account`](../Account/Account.md)\>

  ↳ **`Subsidies`**

## Methods

### getBeneficiaries

▸ **getBeneficiaries**(): `Promise`\<[`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)[]\>

Get the list of Subsidy relationship along with their subsidized amount for which this Account is the subsidizer

#### Returns

`Promise`\<[`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)[]\>

#### Defined in

[api/entities/Subsidies.ts:12](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Subsidies.ts#L12)

___

### getSubsidizer

▸ **getSubsidizer**(): `Promise`\<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

Get the Subsidy relationship along with the subsidized amount for this Account is the beneficiary.
If this Account isn't being subsidized, return null

#### Returns

`Promise`\<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

**`Note`**

can be subscribed to

#### Defined in

[api/entities/Subsidies.ts:61](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Subsidies.ts#L61)

▸ **getSubsidizer**(`callback`): `Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)\<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\> |

#### Returns

`Promise`\<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Defined in

[api/entities/Subsidies.ts:62](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/api/entities/Subsidies.ts#L62)
