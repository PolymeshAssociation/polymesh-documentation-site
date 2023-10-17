---
id: "ProcedureAuthorizationStatus"
title: "Interface: ProcedureAuthorizationStatus"
sidebar_label: "ProcedureAuthorizationStatus"
---

[types](../../../modules/Types/Types.md).ProcedureAuthorizationStatus

## Properties

### accountFrozen

• **accountFrozen**: `boolean`

whether the Account is frozen (i.e. can't perform any transactions)

#### Defined in

[types/index.ts:1316](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L1316)

___

### agentPermissions

• **agentPermissions**: [`CheckPermissionsResult`](../CheckPermissionsResult/CheckPermissionsResult.md)<[`Identity`](../../../enums/Types/SignerType/SignerType.md#identity)\>

whether the Identity complies with all required Agent permissions

#### Defined in

[types/index.ts:1304](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L1304)

___

### noIdentity

• **noIdentity**: `boolean`

true only if the Procedure requires an Identity but the signing Account
  doesn't have one associated

#### Defined in

[types/index.ts:1321](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L1321)

___

### roles

• **roles**: [`CheckRolesResult`](../CheckRolesResult/CheckRolesResult.md)

whether the Identity complies with all required Roles

#### Defined in

[types/index.ts:1312](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L1312)

___

### signerPermissions

• **signerPermissions**: [`CheckPermissionsResult`](../CheckPermissionsResult/CheckPermissionsResult.md)<[`Account`](../../../enums/Types/SignerType/SignerType.md#account)\>

whether the Account complies with all required Signer permissions

#### Defined in

[types/index.ts:1308](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L1308)
