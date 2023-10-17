---
id: "CountTransferRestriction"
title: "Interface: CountTransferRestriction"
sidebar_label: "CountTransferRestriction"
---

[types](../../../modules/Types/Types.md).CountTransferRestriction

## Hierarchy

- `TransferRestrictionBase`

  ↳ **`CountTransferRestriction`**

## Properties

### count

• **count**: `BigNumber`

#### Defined in

[types/index.ts:1336](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L1336)

___

### exemptedIds

• `Optional` **exemptedIds**: `string`[]

array of Scope/Identity IDs that are exempted from the Restriction

**`Note`**

 if the Asset requires investor uniqueness, Scope IDs are used. Otherwise, we use Identity IDs. More on Scope IDs and investor uniqueness
  [here](https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis) and
  [here](https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity)

#### Inherited from

TransferRestrictionBase.exemptedIds

#### Defined in

[types/index.ts:1332](https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/types/index.ts#L1332)
