---
id: "AcceptPrimaryKeyRotationParams"
title: "Interface: AcceptPrimaryKeyRotationParams"
sidebar_label: "AcceptPrimaryKeyRotationParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).AcceptPrimaryKeyRotationParams

## Properties

### cddAuth

• `Optional` **cddAuth**: [`AuthorizationRequest`](../../../../../classes/API/Entities/AuthorizationRequest/AuthorizationRequest.md) \| `BigNumber`

(optional) Authorization from a CDD service provider attesting the rotation of primary key

#### Defined in

[api/procedures/types.ts:622](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/procedures/types.ts#L622)

___

### ownerAuth

• **ownerAuth**: [`AuthorizationRequest`](../../../../../classes/API/Entities/AuthorizationRequest/AuthorizationRequest.md) \| `BigNumber`

Authorization from the owner who initiated the change

#### Defined in

[api/procedures/types.ts:618](https://github.com/PolymeshAssociation/polymesh-sdk/blob/995f17653/src/api/procedures/types.ts#L618)
