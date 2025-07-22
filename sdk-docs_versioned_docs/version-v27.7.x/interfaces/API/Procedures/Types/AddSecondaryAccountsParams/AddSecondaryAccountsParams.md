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

[api/procedures/types.ts:674](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L674)

___

### expiresAt

• **expiresAt**: `Date`

Expiry date until which all the off chain authorizations received from each account is valid

#### Defined in

[api/procedures/types.ts:669](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L669)
