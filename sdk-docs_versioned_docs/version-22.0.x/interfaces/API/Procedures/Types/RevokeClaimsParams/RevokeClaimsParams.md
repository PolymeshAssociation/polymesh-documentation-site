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

[api/procedures/types.ts:356](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/procedures/types.ts#L356)

___

### operation

• **operation**: [`Revoke`](../../../../../enums/API/Procedures/Types/ClaimOperation/ClaimOperation.md#revoke)

#### Defined in

[api/procedures/types.ts:357](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/procedures/types.ts#L357)
