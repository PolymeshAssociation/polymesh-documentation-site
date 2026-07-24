---
id: "StakingEraInfo"
title: "Interface: StakingEraInfo"
sidebar_label: "StakingEraInfo"
---

[api/client/types](../../../../../modules/API/Client/Types/Types.md).StakingEraInfo

A conglomeration of staking storage related to the active era

## Properties

### activeEra

• **activeEra**: `BigNumber`

The active era. This is the era whose rewards and slashes are being processed and may lag the current era

#### Defined in

[api/client/types.ts:267](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L267)

___

### activeEraStart

• **activeEraStart**: `BigNumber`

The block in which the active era began

#### Defined in

[api/client/types.ts:271](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L271)

___

### currentEra

• **currentEra**: `BigNumber`

The current era

#### Defined in

[api/client/types.ts:275](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L275)

___

### plannedSession

• **plannedSession**: `BigNumber`

The planned session number. A session is a subdivision of an era

#### Defined in

[api/client/types.ts:279](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L279)

___

### totalStaked

• **totalStaked**: `BigNumber`

The total amount of POLYX staked

#### Defined in

[api/client/types.ts:283](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/client/types.ts#L283)
