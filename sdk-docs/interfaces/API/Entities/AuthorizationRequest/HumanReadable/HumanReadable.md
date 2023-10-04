---
id: "HumanReadable"
title: "Interface: HumanReadable"
sidebar_label: "HumanReadable"
---

[api/entities/AuthorizationRequest](../../../../../modules/API/Entities/AuthorizationRequest/AuthorizationRequest.md).HumanReadable

## Properties

### data

• **data**: { `type`: [`AttestPrimaryKeyRotation`](../../../../../enums/Types/AuthorizationType/AuthorizationType.md#attestprimarykeyrotation) ; `value`: `string`  } \| { `type`: [`RotatePrimaryKey`](../../../../../enums/Types/AuthorizationType/AuthorizationType.md#rotateprimarykey)  } \| { `type`: [`JoinIdentity`](../../../../../enums/Types/AuthorizationType/AuthorizationType.md#joinidentity) ; `value`: { assets: { values: string[]; type: PermissionType; } \| null; transactions: { exceptions?: TxTag[] \| undefined; values: (TxTag \| ModuleName)[]; type: PermissionType; } \| null; transactionGroups: TxGroup[]; portfolios: { ...; } \| null; }  } \| { `type`: [`PortfolioCustody`](../../../../../enums/Types/AuthorizationType/AuthorizationType.md#portfoliocustody) ; `value`: { did: string; id?: string \| undefined; }  } \| { `type`: [`BecomeAgent`](../../../../../enums/Types/AuthorizationType/AuthorizationType.md#becomeagent) ; `value`: { id: string; ticker: string; } \| { type: PermissionGroupType; ticker: string; }  } \| { `type`: [`AddRelayerPayingKey`](../../../../../enums/Types/AuthorizationType/AuthorizationType.md#addrelayerpayingkey) ; `value`: { beneficiary: string; subsidizer: string; allowance: string; }  } \| { `type`: [`RotatePrimaryKeyToSecondary`](../../../../../enums/Types/AuthorizationType/AuthorizationType.md#rotateprimarykeytosecondary) ; `value`: { assets: { values: string[]; type: PermissionType; } \| null; transactions: { exceptions?: TxTag[] \| undefined; values: (TxTag \| ModuleName)[]; type: PermissionType; } \| null; transactionGroups: TxGroup[]; portfolios: { ...; } \| null; }  } \| { `type`: [`TransferTicker`](../../../../../enums/Types/AuthorizationType/AuthorizationType.md#transferticker) \| [`AddMultiSigSigner`](../../../../../enums/Types/AuthorizationType/AuthorizationType.md#addmultisigsigner) \| [`TransferAssetOwnership`](../../../../../enums/Types/AuthorizationType/AuthorizationType.md#transferassetownership) ; `value`: `string`  }

#### Defined in

[api/entities/AuthorizationRequest.ts:36](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/AuthorizationRequest.ts#L36)

___

### expiry

• **expiry**: ``null`` \| `string`

#### Defined in

[api/entities/AuthorizationRequest.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/AuthorizationRequest.ts#L34)

___

### id

• **id**: `string`

#### Defined in

[api/entities/AuthorizationRequest.ts:37](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/AuthorizationRequest.ts#L37)

___

### issuer

• **issuer**: `string`

#### Defined in

[api/entities/AuthorizationRequest.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/AuthorizationRequest.ts#L33)

___

### target

• **target**: [`SignerValue`](../../../../Types/SignerValue/SignerValue.md)

#### Defined in

[api/entities/AuthorizationRequest.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/entities/AuthorizationRequest.ts#L35)
