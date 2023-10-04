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

[types/index.ts:1297](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L1297)

___

### agentPermissions

• **agentPermissions**: [`CheckPermissionsResult`](../CheckPermissionsResult/CheckPermissionsResult.md)<[`Identity`](../../../enums/Types/SignerType/SignerType.md#identity)\>

whether the Identity complies with all required Agent permissions

#### Defined in

[types/index.ts:1285](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L1285)

___

### noIdentity

• **noIdentity**: `boolean`

true only if the Procedure requires an Identity but the signing Account
  doesn't have one associated

#### Defined in

[types/index.ts:1302](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L1302)

___

### roles

• **roles**: [`CheckRolesResult`](../CheckRolesResult/CheckRolesResult.md)

whether the Identity complies with all required Roles

#### Defined in

[types/index.ts:1293](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L1293)

___

### signerPermissions

• **signerPermissions**: [`CheckPermissionsResult`](../CheckPermissionsResult/CheckPermissionsResult.md)<[`Account`](../../../enums/Types/SignerType/SignerType.md#account)\>

whether the Account complies with all required Signer permissions

#### Defined in

[types/index.ts:1289](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/types/index.ts#L1289)
