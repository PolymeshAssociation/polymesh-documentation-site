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

[types/index.ts:1323](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L1323)

___

### agentPermissions

• **agentPermissions**: [`CheckPermissionsResult`](../CheckPermissionsResult/CheckPermissionsResult.md)<[`Identity`](../../../enums/Types/SignerType/SignerType.md#identity)\>

whether the Identity complies with all required Agent permissions

#### Defined in

[types/index.ts:1311](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L1311)

___

### noIdentity

• **noIdentity**: `boolean`

true only if the Procedure requires an Identity but the signing Account
  doesn't have one associated

#### Defined in

[types/index.ts:1328](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L1328)

___

### roles

• **roles**: [`CheckRolesResult`](../CheckRolesResult/CheckRolesResult.md)

whether the Identity complies with all required Roles

#### Defined in

[types/index.ts:1319](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L1319)

___

### signerPermissions

• **signerPermissions**: [`CheckPermissionsResult`](../CheckPermissionsResult/CheckPermissionsResult.md)<[`Account`](../../../enums/Types/SignerType/SignerType.md#account)\>

whether the Account complies with all required Signer permissions

#### Defined in

[types/index.ts:1315](https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L1315)
