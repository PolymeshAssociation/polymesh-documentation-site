---
id: "TransferRestrictionExemption"
title: "Interface: TransferRestrictionExemption"
sidebar_label: "TransferRestrictionExemption"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).TransferRestrictionExemption

Identities that are exempt from Transfer Restrictions.

**`Note`**

if these entities are removed from exemptions but are
in violation of any Transfer Restrictions then they will only
be able to trade in a manner that brings them more inline. e.g.
Exceeding a percentage restriction means tokens can only be sent
and not received

## Properties

### exemptKey

• **exemptKey**: [`TransferExemptKey`](../TransferExemptKey/TransferExemptKey.md)

#### Defined in

[api/entities/Asset/types.ts:502](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L502)

___

### identity

• **identity**: [`Identity`](../../../../../../classes/API/Entities/Identity/Identity.md)

#### Defined in

[api/entities/Asset/types.ts:501](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Asset/types.ts#L501)
