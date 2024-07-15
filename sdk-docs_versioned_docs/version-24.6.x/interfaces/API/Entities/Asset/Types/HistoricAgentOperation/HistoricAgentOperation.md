---
id: "HistoricAgentOperation"
title: "Interface: HistoricAgentOperation"
sidebar_label: "HistoricAgentOperation"
---

[api/entities/Asset/types](../../../../../../modules/API/Entities/Asset/Types/Types.md).HistoricAgentOperation

Events triggered by transactions performed by an Agent Identity, related to the Token's configuration
  For example: changing compliance requirements, inviting/removing agent Identities, freezing/unfreezing transfers

Token transfers (settlements or movements between Portfolios) do not count as Operations

## Properties

### history

• **history**: [`EventIdentifier`](../../../../Client/Types/EventIdentifier/EventIdentifier.md)[]

list of Token Operation Events that were triggered by the Agent Identity

#### Defined in

[api/entities/Asset/types.ts:369](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Asset/types.ts#L369)

___

### identity

• **identity**: [`Identity`](../../../../../../classes/API/Entities/Identity/Identity.md)

Agent Identity that performed the operations

#### Defined in

[api/entities/Asset/types.ts:365](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Asset/types.ts#L365)
