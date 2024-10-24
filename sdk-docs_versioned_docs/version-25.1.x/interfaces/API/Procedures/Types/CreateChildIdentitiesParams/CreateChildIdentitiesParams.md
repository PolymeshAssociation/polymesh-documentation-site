---
id: "CreateChildIdentitiesParams"
title: "Interface: CreateChildIdentitiesParams"
sidebar_label: "CreateChildIdentitiesParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).CreateChildIdentitiesParams

## Properties

### childKeyAuths

• **childKeyAuths**: [`ChildKeyWithAuth`](../ChildKeyWithAuth/ChildKeyWithAuth.md)[]

List of child keys along with their off chain authorization signatures

#### Defined in

[api/procedures/types.ts:1689](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/procedures/types.ts#L1689)

___

### expiresAt

• **expiresAt**: `Date`

Expiry date until which all the off chain authorizations received from each key will be valid

#### Defined in

[api/procedures/types.ts:1684](https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/procedures/types.ts#L1684)