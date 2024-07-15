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

[api/procedures/types.ts:420](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L420)

___

### operation

• **operation**: [`Revoke`](../../../../../enums/API/Procedures/Types/ClaimOperation/ClaimOperation.md#revoke)

#### Defined in

[api/procedures/types.ts:421](https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L421)
