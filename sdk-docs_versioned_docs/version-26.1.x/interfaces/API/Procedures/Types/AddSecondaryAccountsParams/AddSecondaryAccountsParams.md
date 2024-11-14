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

[api/procedures/types.ts:635](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/procedures/types.ts#L635)

___

### expiresAt

• **expiresAt**: `Date`

Expiry date until which all the off chain authorizations received from each account is valid

#### Defined in

[api/procedures/types.ts:630](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b55e63737/src/api/procedures/types.ts#L630)
