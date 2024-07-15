---
id: "TransferRestrictionBase"
title: "Module: TransferRestrictionBase"
sidebar_label: "TransferRestrictionBase"
---

## Classes

- [TransferRestrictionBase](../../../../../../../classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase.md)

## Type Aliases

### RemoveAssetStatParamsBase

Ƭ **RemoveAssetStatParamsBase**\<`T`\>: `Omit`\<`T` extends [`Count`](../../../../../../../enums/API/Procedures/Types/TransferRestrictionType/TransferRestrictionType.md#count) ? [`RemoveCountStatParams`](../../../../../Procedures/Types/Types.md#removecountstatparams) : `T` extends [`Percentage`](../../../../../../../enums/API/Procedures/Types/TransferRestrictionType/TransferRestrictionType.md#percentage) ? [`RemoveBalanceStatParams`](../../../../../Procedures/Types/Types.md#removebalancestatparams) : `T` extends [`ClaimCount`](../../../../../../../enums/API/Procedures/Types/TransferRestrictionType/TransferRestrictionType.md#claimcount) ? [`RemoveScopedCountParams`](../../../../../Procedures/Types/Types.md#removescopedcountparams) : [`RemoveScopedBalanceParams`](../../../../../Procedures/Types/Types.md#removescopedbalanceparams), ``"type"``\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L51)

___

### SetTransferRestrictionsParams

Ƭ **SetTransferRestrictionsParams**: \{ `ticker`: `string`  } & [`SetCountTransferRestrictionsParams`](../../../../../../../interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams.md) \| [`SetPercentageTransferRestrictionsParams`](../../../../../../../interfaces/API/Procedures/Types/SetPercentageTransferRestrictionsParams/SetPercentageTransferRestrictionsParams.md) \| [`SetClaimCountTransferRestrictionsParams`](../../../../../../../interfaces/API/Procedures/Types/SetClaimCountTransferRestrictionsParams/SetClaimCountTransferRestrictionsParams.md) \| [`SetClaimPercentageTransferRestrictionsParams`](../../../../../../../interfaces/API/Procedures/Types/SetClaimPercentageTransferRestrictionsParams/SetClaimPercentageTransferRestrictionsParams.md)

#### Defined in

[api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:44](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L44)
