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

[api/procedures/types.ts:1724](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1724)

___

### expiresAt

• **expiresAt**: `Date`

Expiry date until which all the off chain authorizations received from each key will be valid

#### Defined in

[api/procedures/types.ts:1719](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1719)