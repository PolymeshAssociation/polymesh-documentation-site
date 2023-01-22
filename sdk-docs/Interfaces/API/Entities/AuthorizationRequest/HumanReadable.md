[api/entities/AuthorizationRequest](../../../../Modules/API/Entities/AuthorizationRequest.md).HumanReadable

## Properties

### data

• **data**: { `type`: [`RotatePrimaryKey`](../../../../Enums/Types/AuthorizationType.md#rotateprimarykey)  } \| { `type`: [`JoinIdentity`](../../../../Enums/Types/AuthorizationType.md#joinidentity) ; `value`: { assets: { values: string[]; type: PermissionType; } \| null; transactions: { exceptions?: TxTag[] \| undefined; values: (TxTag \| ModuleName)[]; type: PermissionType; } \| null; transactionGroups: TxGroup[]; portfolios: { ...; } \| null; }  } \| { `type`: [`PortfolioCustody`](../../../../Enums/Types/AuthorizationType.md#portfoliocustody) ; `value`: { did: string; id?: string \| undefined; }  } \| { `type`: [`BecomeAgent`](../../../../Enums/Types/AuthorizationType.md#becomeagent) ; `value`: { id: string; ticker: string; } \| { type: PermissionGroupType; ticker: string; }  } \| { `type`: [`AddRelayerPayingKey`](../../../../Enums/Types/AuthorizationType.md#addrelayerpayingkey) ; `value`: { beneficiary: string; subsidizer: string; allowance: string; }  } \| { `type`: [`RotatePrimaryKeyToSecondary`](../../../../Enums/Types/AuthorizationType.md#rotateprimarykeytosecondary) ; `value`: { assets: { values: string[]; type: PermissionType; } \| null; transactions: { exceptions?: TxTag[] \| undefined; values: (TxTag \| ModuleName)[]; type: PermissionType; } \| null; transactionGroups: TxGroup[]; portfolios: { ...; } \| null; }  } \| { `type`: [`AttestPrimaryKeyRotation`](../../../../Enums/Types/AuthorizationType.md#attestprimarykeyrotation) \| [`TransferTicker`](../../../../Enums/Types/AuthorizationType.md#transferticker) \| [`AddMultiSigSigner`](../../../../Enums/Types/AuthorizationType.md#addmultisigsigner) \| [`TransferAssetOwnership`](../../../../Enums/Types/AuthorizationType.md#transferassetownership) ; `value`: `string`  }

#### Defined in

[api/entities/AuthorizationRequest.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/AuthorizationRequest.ts#L34)

___

### expiry

• **expiry**: ``null`` \| `string`

#### Defined in

[api/entities/AuthorizationRequest.ts:32](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/AuthorizationRequest.ts#L32)

___

### id

• **id**: `string`

#### Defined in

[api/entities/AuthorizationRequest.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/AuthorizationRequest.ts#L35)

___

### issuer

• **issuer**: `string`

#### Defined in

[api/entities/AuthorizationRequest.ts:31](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/AuthorizationRequest.ts#L31)

___

### target

• **target**: [`SignerValue`](../../../Types/SignerValue.md)

#### Defined in

[api/entities/AuthorizationRequest.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/AuthorizationRequest.ts#L33)
