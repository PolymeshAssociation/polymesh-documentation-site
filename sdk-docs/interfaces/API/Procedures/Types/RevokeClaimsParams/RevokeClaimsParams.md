---
id: "RevokeClaimsParams"
title: "Interface: RevokeClaimsParams"
sidebar_label: "RevokeClaimsParams"
---

# Interface: RevokeClaimsParams

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).RevokeClaimsParams

## Properties

### claims

• **claims**: `Omit`<[`ClaimTarget`](../../../../Types/ClaimTarget/ClaimTarget.md), ``"expiry"``\>[]

array of claims to be revoked

#### Defined in

[api/procedures/types.ts:362](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L362)

___

### operation

• **operation**: [`Revoke`](../../../../../enums/API/Procedures/Types/ClaimOperation/ClaimOperation.md#revoke)

#### Defined in

[api/procedures/types.ts:363](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L363)