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

[api/procedures/types.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/procedures/types.ts#L82)

___

### agentPermissions

• **agentPermissions**: [`CheckPermissionsResult`](../../../Entities/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Identity`](../../../../../enums/API/Entities/Types/SignerType/SignerType.md#identity)\>

whether the Identity complies with all required Agent permissions

#### Defined in

[api/procedures/types.ts:70](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/procedures/types.ts#L70)

___

### noIdentity

• **noIdentity**: `boolean`

true only if the Procedure requires an Identity but the signing Account
  doesn't have one associated

#### Defined in

[api/procedures/types.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/procedures/types.ts#L87)

___

### roles

• **roles**: [`CheckRolesResult`](../../../Entities/Types/CheckRolesResult/CheckRolesResult.md)

whether the Identity complies with all required Roles

#### Defined in

[api/procedures/types.ts:78](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/procedures/types.ts#L78)

___

### signerPermissions

• **signerPermissions**: [`CheckPermissionsResult`](../../../Entities/Types/CheckPermissionsResult/CheckPermissionsResult.md)\<[`Account`](../../../../../enums/API/Entities/Types/SignerType/SignerType.md#account)\>

whether the Account complies with all required Signer permissions

#### Defined in

[api/procedures/types.ts:74](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/procedures/types.ts#L74)
