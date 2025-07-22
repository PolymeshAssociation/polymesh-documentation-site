---
id: "AddSecondaryAccountsParams"
title: "Interface: AddSecondaryAccountsParams"
sidebar_label: "AddSecondaryAccountsParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).AddSecondaryAccountsParams

## Properties

### accounts

• **accounts**: [`AccountWithSignature`](../AccountWithSignature/AccountWithSignature.md)[]

List of accounts to be added as secondary accounts along with their off chain authorization signatures

#### Defined in

[api/procedures/types.ts:631](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L631)

___

### expiresAt

• **expiresAt**: `Date`

Expiry date until which all the off chain authorizations received from each account is valid

#### Defined in

[api/procedures/types.ts:626](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L626)
