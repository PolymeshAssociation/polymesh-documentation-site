---
id: 'ProcedureAuthorizationStatus'
title: 'Interface: ProcedureAuthorizationStatus'
sidebar_label: 'ProcedureAuthorizationStatus'
---

[types](../../../modules/Types/Types.md).ProcedureAuthorizationStatus

## Properties

### accountFrozen

• **accountFrozen**: `boolean`

whether the Account is frozen (i.e. can't perform any transactions)

#### Defined in

[types/index.ts:1289](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L1289)

---

### agentPermissions

• **agentPermissions**: [`CheckPermissionsResult`](../CheckPermissionsResult/CheckPermissionsResult.md) \<[`Identity`](../../../enums/Types/SignerType/SignerType.md#identity)\>

whether the Identity complies with all required Agent permissions

#### Defined in

[types/index.ts:1277](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L1277)

---

### noIdentity

• **noIdentity**: `boolean`

true only if the Procedure requires an Identity but the signing Account
doesn't have one associated

#### Defined in

[types/index.ts:1294](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L1294)

---

### roles

• **roles**: [`CheckRolesResult`](../CheckRolesResult/CheckRolesResult.md)

whether the Identity complies with all required Roles

#### Defined in

[types/index.ts:1285](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L1285)

---

### signerPermissions

• **signerPermissions**: [`CheckPermissionsResult`](../CheckPermissionsResult/CheckPermissionsResult.md) \<[`Account`](../../../enums/Types/SignerType/SignerType.md#account)\>

whether the Account complies with all required Signer permissions

#### Defined in

[types/index.ts:1281](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/types/index.ts#L1281)
