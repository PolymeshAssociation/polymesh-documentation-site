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

[api/entities/Account/types.ts:47](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Account/types.ts#L47)

___

### Primary

• **Primary** = ``"Primary"``

The Account is the Identity's primary key (i.e. it has full permission)

#### Defined in

[api/entities/Account/types.ts:39](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Account/types.ts#L39)

___

### Secondary

• **Secondary** = ``"Secondary"``

The Account is a Secondary account. There are associated permissions that may limit what transactions it may authorize for the Identity

#### Defined in

[api/entities/Account/types.ts:43](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Account/types.ts#L43)

___

### Unassigned

• **Unassigned** = ``"Unassigned"``

The Account is not associated to any Identity

#### Defined in

[api/entities/Account/types.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/api/entities/Account/types.ts#L35)
