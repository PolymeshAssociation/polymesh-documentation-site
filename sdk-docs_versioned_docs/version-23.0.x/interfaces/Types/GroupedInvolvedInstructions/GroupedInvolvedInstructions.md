---
id: "GroupedInvolvedInstructions"
title: "Interface: GroupedInvolvedInstructions"
sidebar_label: "GroupedInvolvedInstructions"
---

[types](../../../modules/Types/Types.md).GroupedInvolvedInstructions

## Properties

### custodied

• **custodied**: [`GroupedInstructions`](../GroupedInstructions/GroupedInstructions.md)

Instructions where the Identity is the custodian of the leg portfolios

#### Defined in

[types/index.ts:1615](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1615)

___

### owned

• **owned**: `Omit`\<[`GroupedInstructions`](../GroupedInstructions/GroupedInstructions.md), ``"affirmed"``\>

Instructions where the Identity is the owner of the leg portfolios

#### Defined in

[types/index.ts:1619](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1619)
