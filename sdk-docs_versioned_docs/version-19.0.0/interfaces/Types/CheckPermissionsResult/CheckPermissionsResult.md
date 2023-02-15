---
id: "CheckPermissionsResult"
title: "Interface: CheckPermissionsResult<Type>"
sidebar_label: "CheckPermissionsResult"
---

[types](../../../modules/Types/Types.md).CheckPermissionsResult

Result of a `checkPermissions` call. If `Type` is `Account`, represents whether the Account
  has all the necessary secondary key Permissions. If `Type` is `Identity`, represents whether the
  Identity has all the necessary external agent Permissions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`SignerType`](../../../enums/Types/SignerType/SignerType.md) |

## Properties

### message

• `Optional` **message**: `string`

optional message explaining the reason for failure in special cases

#### Defined in

[types/index.ts:1040](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L1040)

___

### missingPermissions

• `Optional` **missingPermissions**: `Type` extends [`Account`](../../../enums/Types/SignerType/SignerType.md#account) ? [`SimplePermissions`](../SimplePermissions/SimplePermissions.md) : ``null`` \| [`TxTag`](../../../modules/Generated/Types/Types.md#txtag)[]

required permissions which the signer *DOESN'T* have. Only present if `result` is `false`

#### Defined in

[types/index.ts:1032](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L1032)

___

### result

• **result**: `boolean`

whether the signer complies with the required permissions or not

#### Defined in

[types/index.ts:1036](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/types/index.ts#L1036)
