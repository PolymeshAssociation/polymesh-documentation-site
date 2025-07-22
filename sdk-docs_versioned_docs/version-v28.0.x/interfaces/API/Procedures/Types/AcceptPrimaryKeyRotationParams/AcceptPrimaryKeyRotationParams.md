---
id: "AcceptPrimaryKeyRotationParams"
title: "Interface: AcceptPrimaryKeyRotationParams"
sidebar_label: "AcceptPrimaryKeyRotationParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).AcceptPrimaryKeyRotationParams

## Properties

### cddAuth

• `Optional` **cddAuth**: `BigNumber` \| [`AuthorizationRequest`](../../../../../classes/API/Entities/AuthorizationRequest/AuthorizationRequest.md)

(optional) Authorization from a CDD service provider attesting the rotation of primary key

#### Defined in

[api/procedures/types.ts:582](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L582)

___

### ownerAuth

• **ownerAuth**: `BigNumber` \| [`AuthorizationRequest`](../../../../../classes/API/Entities/AuthorizationRequest/AuthorizationRequest.md)

Authorization from the owner who initiated the change

#### Defined in

[api/procedures/types.ts:578](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L578)
