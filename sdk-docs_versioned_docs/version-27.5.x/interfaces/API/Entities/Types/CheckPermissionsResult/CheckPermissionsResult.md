---
id: "CheckPermissionsResult"
title: "Interface: CheckPermissionsResult<Type>"
sidebar_label: "CheckPermissionsResult"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).CheckPermissionsResult

Result of a `checkPermissions` call. If `Type` is `Account`, represents whether the Account
  has all the necessary secondary key Permissions. If `Type` is `Identity`, represents whether the
  Identity has all the necessary external agent Permissions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`SignerType`](../../../../../enums/API/Entities/Types/SignerType/SignerType.md) |

## Properties

### message

• `Optional` **message**: `string`

optional message explaining the reason for failure in special cases

#### Defined in

[api/entities/types.ts:730](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/types.ts#L730)

___

### missingPermissions

• `Optional` **missingPermissions**: `Type` extends [`Account`](../../../../../enums/API/Entities/Types/SignerType/SignerType.md#account) ? [`SimplePermissions`](../SimplePermissions/SimplePermissions.md) : ``null`` \| [`TxTag`](../../../../../modules/Generated/Types/Types.md#txtag)[]

required permissions which the signer *DOESN'T* have. Only present if `result` is `false`

#### Defined in

[api/entities/types.ts:722](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/types.ts#L722)

___

### result

• **result**: `boolean`

whether the signer complies with the required permissions or not

#### Defined in

[api/entities/types.ts:726](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/entities/types.ts#L726)
