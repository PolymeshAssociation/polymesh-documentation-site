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

[types/index.ts:1621](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L1621)

___

### owned

• **owned**: `Omit`\<[`GroupedInstructions`](../GroupedInstructions/GroupedInstructions.md), ``"affirmed"``\>

Instructions where the Identity is the owner of the leg portfolios

#### Defined in

[types/index.ts:1625](https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L1625)
