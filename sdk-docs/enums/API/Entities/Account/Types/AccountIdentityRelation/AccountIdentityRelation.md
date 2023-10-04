---
id: "AccountIdentityRelation"
title: "Enumeration: AccountIdentityRelation"
sidebar_label: "AccountIdentityRelation"
---

[api/entities/Account/types](../../../../../../modules/API/Entities/Account/Types/Types.md).AccountIdentityRelation

Represents the how an Account is associated to an Identity

## Enumeration Members

### MultiSigSigner

• **MultiSigSigner** = ``"MultiSigSigner"``

The Account is one of many signers for a MultiSig

#### Defined in

[api/entities/Account/types.ts:48](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Account/types.ts#L48)

___

### Primary

• **Primary** = ``"Primary"``

The Account is the Identity's primary key (i.e. it has full permission)

#### Defined in

[api/entities/Account/types.ts:40](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Account/types.ts#L40)

___

### Secondary

• **Secondary** = ``"Secondary"``

The Account is a Secondary account. There are associated permissions that may limit what transactions it may authorize for the Identity

#### Defined in

[api/entities/Account/types.ts:44](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Account/types.ts#L44)

___

### Unassigned

• **Unassigned** = ``"Unassigned"``

The Account is not associated to any Identity

#### Defined in

[api/entities/Account/types.ts:36](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/Account/types.ts#L36)
