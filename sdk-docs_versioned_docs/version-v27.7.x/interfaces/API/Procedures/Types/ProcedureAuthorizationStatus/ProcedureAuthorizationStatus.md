---
id: "ProcedureAuthorizationStatus"
title: "Interface: ProcedureAuthorizationStatus"
sidebar_label: "ProcedureAuthorizationStatus"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).ProcedureAuthorizationStatus

## Properties

### accountFrozen

• **accountFrozen**: `boolean`

whether the Account is frozen (i.e. can't perform any transactions)

#### Defined in

[api/procedures/types.ts:85](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L85)

___

### agentPermissions

• **agentPermissions**: [`CheckPermissionsResult`](../../../Entities/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Identity`](../../../../../enums/API/Entities/Types/SignerType/SignerType.md#identity)\>

whether the Identity complies with all required Agent permissions

#### Defined in

[api/procedures/types.ts:73](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L73)

___

### noIdentity

• **noIdentity**: `boolean`

true only if the Procedure requires an Identity but the signing Account
  doesn't have one associated

#### Defined in

[api/procedures/types.ts:90](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L90)

___

### roles

• **roles**: [`CheckRolesResult`](../../../Entities/Types/CheckRolesResult/CheckRolesResult.md)

whether the Identity complies with all required Roles

#### Defined in

[api/procedures/types.ts:81](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L81)

___

### signerPermissions

• **signerPermissions**: [`CheckPermissionsResult`](../../../Entities/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Account`](../../../../../enums/API/Entities/Types/SignerType/SignerType.md#account)\>

whether the Account complies with all required Signer permissions

#### Defined in

[api/procedures/types.ts:77](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L77)
