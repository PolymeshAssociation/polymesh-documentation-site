---
id: "Subsidies"
title: "Class: Subsidies"
sidebar_label: "Subsidies"
---

[api/entities/Subsidies](../../../../modules/API/Entities/Subsidies/Subsidies.md).Subsidies

Handles all Account Subsidies related functionality

## Hierarchy

- `Namespace`<[`Account`](../Account/Account.md)\>

  ↳ **`Subsidies`**

## Methods

### getBeneficiaries

▸ **getBeneficiaries**(): `Promise`<[`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)[]\>

Get the list of Subsidy relationship along with their subsidized amount for which this Account is the subsidizer

#### Returns

`Promise`<[`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)[]\>

___

### getSubsidizer

▸ **getSubsidizer**(): `Promise`<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

Get the Subsidy relationship along with the subsidized amount for this Account is the beneficiary.
If this Account isn't being subsidized, return null

**`Note`**

can be subscribed to

#### Returns

`Promise`<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\>

▸ **getSubsidizer**(`callback`): `Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../modules/Types/Types.md#subcallback)<``null`` \| [`SubsidyWithAllowance`](../../../../interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/SubsidyWithAllowance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../modules/Types/Types.md#unsubcallback)\>
