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

[types/index.ts:1291](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L1291)

---

### agentPermissions

• **agentPermissions**: [`CheckPermissionsResult`](../CheckPermissionsResult/CheckPermissionsResult.md) \<[`Identity`](../../../enums/Types/SignerType/SignerType.md#identity)\>

whether the Identity complies with all required Agent permissions

#### Defined in

[types/index.ts:1279](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L1279)

---

### noIdentity

• **noIdentity**: `boolean`

true only if the Procedure requires an Identity but the signing Account
doesn't have one associated

#### Defined in

[types/index.ts:1296](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L1296)

---

### roles

• **roles**: [`CheckRolesResult`](../CheckRolesResult/CheckRolesResult.md)

whether the Identity complies with all required Roles

#### Defined in

[types/index.ts:1287](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L1287)

---

### signerPermissions

• **signerPermissions**: [`CheckPermissionsResult`](../CheckPermissionsResult/CheckPermissionsResult.md) \<[`Account`](../../../enums/Types/SignerType/SignerType.md#account)\>

whether the Account complies with all required Signer permissions

#### Defined in

[types/index.ts:1283](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L1283)
