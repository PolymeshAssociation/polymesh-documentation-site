---
id: "RevokeClaimsParams"
title: "Interface: RevokeClaimsParams"
sidebar_label: "RevokeClaimsParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).RevokeClaimsParams

## Properties

### claims

• **claims**: `Omit`\<[`ClaimTarget`](../../../../Types/ClaimTarget/ClaimTarget.md), ``"expiry"``\>[]

array of claims to be revoked

#### Defined in

[api/procedures/types.ts:412](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/procedures/types.ts#L412)

___

### operation

• **operation**: [`Revoke`](../../../../../enums/API/Procedures/Types/ClaimOperation/ClaimOperation.md#revoke)

#### Defined in

[api/procedures/types.ts:413](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/procedures/types.ts#L413)
