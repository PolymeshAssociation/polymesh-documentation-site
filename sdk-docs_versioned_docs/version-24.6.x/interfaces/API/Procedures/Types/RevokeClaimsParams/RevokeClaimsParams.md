---
id: "RevokeClaimsParams"
title: "Interface: RevokeClaimsParams"
sidebar_label: "RevokeClaimsParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).RevokeClaimsParams

## Properties

### claims

• **claims**: `Omit`\<[`ClaimTarget`](../../../Entities/Types/ClaimTarget/ClaimTarget.md), ``"expiry"``\>[]

array of claims to be revoked

#### Defined in

[api/procedures/types.ts:748](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/procedures/types.ts#L748)

___

### operation

• **operation**: [`Revoke`](../../../../../enums/API/Procedures/Types/ClaimOperation/ClaimOperation.md#revoke)

#### Defined in

[api/procedures/types.ts:749](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/procedures/types.ts#L749)
