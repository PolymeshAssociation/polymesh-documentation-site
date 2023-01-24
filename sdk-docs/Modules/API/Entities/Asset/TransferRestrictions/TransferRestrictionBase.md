## Classes

- [TransferRestrictionBase](../../../../../Classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase.md)

## Type Aliases

### RemoveAssetStatParamsBase

Ƭ **RemoveAssetStatParamsBase**<`T`\>: `Omit`<`T` extends [`Count`](../../../../../Enums/Types/TransferRestrictionType.md#count) ? [`RemoveCountStatParams`](../../../Procedures/Types.md#removecountstatparams) : `T` extends [`Percentage`](../../../../../Enums/Types/TransferRestrictionType.md#percentage) ? [`RemoveBalanceStatParams`](../../../Procedures/Types.md#removebalancestatparams) : `T` extends [`ClaimCount`](../../../../../Enums/Types/TransferRestrictionType.md#claimcount) ? [`RemoveScopedCountParams`](../../../Procedures/Types.md#removescopedcountparams) : [`RemoveScopedBalanceParams`](../../../Procedures/Types.md#removescopedbalanceparams), ``"type"``\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts#L51)

___

### SetTransferRestrictionsParams

Ƭ **SetTransferRestrictionsParams**: { `ticker`: `string`  } & [`SetCountTransferRestrictionsParams`](../../../../../Interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams.md) \| [`SetPercentageTransferRestrictionsParams`](../../../../../Interfaces/API/Procedures/Types/SetPercentageTransferRestrictionsParams.md) \| [`SetClaimCountTransferRestrictionsParams`](../../../../../Interfaces/API/Procedures/Types/SetClaimCountTransferRestrictionsParams.md) \| [`SetClaimPercentageTransferRestrictionsParams`](../../../../../Interfaces/API/Procedures/Types/SetClaimPercentageTransferRestrictionsParams.md)

#### Defined in

[api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts:44](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/Asset/TransferRestrictions/TransferRestrictionBase.ts#L44)
