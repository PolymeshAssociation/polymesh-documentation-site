[api/entities/Subsidies](../../../../Modules/API/Entities/Subsidies.md).Subsidies

Handles all Account Subsidies related functionality

## Hierarchy

- `Namespace`<[`Account`](../Account/Account.md)\>

  ↳ **`Subsidies`**

## Methods

### getBeneficiaries

▸ **getBeneficiaries**(): `Promise`<[`SubsidyWithAllowance`](../../../../Interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance.md)[]\>

Get the list of Subsidy relationship along with their subsidized amount for which this Account is the subsidizer

#### Returns

`Promise`<[`SubsidyWithAllowance`](../../../../Interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance.md)[]\>

___

### getSubsidizer

▸ **getSubsidizer**(): `Promise`<``null`` \| [`SubsidyWithAllowance`](../../../../Interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance.md)\>

Get the Subsidy relationship along with the subsidized amount for this Account is the beneficiary.
If this Account isn't being subsidized, return null

**`Note`**

can be subscribed to

#### Returns

`Promise`<``null`` \| [`SubsidyWithAllowance`](../../../../Interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance.md)\>

▸ **getSubsidizer**(`callback`): `Promise`<[`UnsubCallback`](../../../../Modules/Types/Types.md#unsubcallback)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SubCallback`](../../../../Modules/Types/Types.md#subcallback)<``null`` \| [`SubsidyWithAllowance`](../../../../Interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance.md)\> |

#### Returns

`Promise`<[`UnsubCallback`](../../../../Modules/Types/Types.md#unsubcallback)\>
