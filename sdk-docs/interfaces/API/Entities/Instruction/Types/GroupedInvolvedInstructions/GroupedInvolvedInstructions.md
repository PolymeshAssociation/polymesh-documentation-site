---
id: "GroupedInvolvedInstructions"
title: "Interface: GroupedInvolvedInstructions"
sidebar_label: "GroupedInvolvedInstructions"
---

[api/entities/Instruction/types](../../../../../../modules/API/Entities/Instruction/Types/Types.md).GroupedInvolvedInstructions

## Properties

### custodied

• **custodied**: [`GroupedInstructions`](../GroupedInstructions/GroupedInstructions.md)

Instructions where the Identity is the custodian of the leg portfolios

#### Defined in

[api/entities/Instruction/types.ts:143](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Instruction/types.ts#L143)

___

### owned

• **owned**: `Omit`\<[`GroupedInstructions`](../GroupedInstructions/GroupedInstructions.md), ``"affirmed"``\>

Instructions where the Identity is the owner of the leg portfolios

#### Defined in

[api/entities/Instruction/types.ts:147](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/entities/Instruction/types.ts#L147)
