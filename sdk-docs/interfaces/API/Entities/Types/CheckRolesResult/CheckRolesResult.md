---
id: "CheckRolesResult"
title: "Interface: CheckRolesResult"
sidebar_label: "CheckRolesResult"
---

[api/entities/types](../../../../../modules/API/Entities/Types/Types.md).CheckRolesResult

Result of a `checkRoles` call

## Properties

### message

• `Optional` **message**: `string`

optional message explaining the reason for failure in special cases

#### Defined in

[api/entities/types.ts:707](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/types.ts#L707)

___

### missingRoles

• `Optional` **missingRoles**: [`Role`](../../../../../modules/API/Procedures/Types/Types.md#role)[]

required roles which the Identity *DOESN'T* have. Only present if `result` is `false`

#### Defined in

[api/entities/types.ts:699](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/types.ts#L699)

___

### result

• **result**: `boolean`

whether the signer possesses all the required roles or not

#### Defined in

[api/entities/types.ts:703](https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/types.ts#L703)
