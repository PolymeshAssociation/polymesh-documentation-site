---
id: "HistoricAgentOperation"
title: "Interface: HistoricAgentOperation"
sidebar_label: "HistoricAgentOperation"
---

[types](../../../modules/Types/Types.md).HistoricAgentOperation

Events triggered by transactions performed by an Agent Identity, related to the Token's configuration
  For example: changing compliance requirements, inviting/removing agent Identities, freezing/unfreezing transfers

Token transfers (settlements or movements between Portfolios) do not count as Operations

## Properties

### history

• **history**: [`EventIdentifier`](../EventIdentifier/EventIdentifier.md)[]

list of Token Operation Events that were triggered by the Agent Identity

#### Defined in

[types/index.ts:1548](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L1548)

___

### identity

• **identity**: [`Identity`](../../../classes/API/Entities/Identity/Identity.md)

Agent Identity that performed the operations

#### Defined in

[types/index.ts:1544](https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L1544)
