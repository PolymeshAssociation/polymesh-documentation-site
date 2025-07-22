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

[api/procedures/types.ts:852](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L852)

___

### operation

• **operation**: [`Revoke`](../../../../../enums/API/Procedures/Types/ClaimOperation/ClaimOperation.md#revoke)

#### Defined in

[api/procedures/types.ts:853](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9e72221/src/api/procedures/types.ts#L853)
