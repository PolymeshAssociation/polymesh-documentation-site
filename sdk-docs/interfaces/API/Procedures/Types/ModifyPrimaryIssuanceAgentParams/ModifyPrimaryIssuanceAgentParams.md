---
id: "ModifyPrimaryIssuanceAgentParams"
title: "Interface: ModifyPrimaryIssuanceAgentParams"
sidebar_label: "ModifyPrimaryIssuanceAgentParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).ModifyPrimaryIssuanceAgentParams

## Properties

### requestExpiry

• `Optional` **requestExpiry**: `Date`

date at which the authorization request to modify the primary issuance agent expires (optional, never expires if a date is not provided)

#### Defined in

[api/procedures/types.ts:512](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L512)

___

### target

• **target**: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)

Identity to be set as primary issuance agent

#### Defined in

[api/procedures/types.ts:508](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L508)
