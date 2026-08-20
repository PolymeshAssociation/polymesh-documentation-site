# Class: NonFungibleSettlements

> Defined in: [src/api/entities/Asset/Base/Settlements/index.ts:253](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Settlements/index.ts#L253)

# Class: NonFungibleSettlements

Defined in: [src/api/entities/Asset/Base/Settlements/index.ts:253](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Settlements/index.ts#L253)

Handles all Asset Settlements related functionality

## Extends

- `BaseSettlements`\<[`NftCollection`](../../../../types/type-aliases/NftCollection.mdx)\>

## Methods

### canTransfer()

> **canTransfer**(`args`: `object`): `Promise`\<[`TransferBreakdown`](../../../types/interfaces/TransferBreakdown.mdx)\>

Defined in: [src/api/entities/Asset/Base/Settlements/index.ts:269](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Settlements/index.ts#L269)

Check whether it is possible to create a settlement instruction to transfer an NFT between two Asset Holders. Returns a breakdown of
  the transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance
  failures

#### Parameters

Parameter
Type
Description

`args`

\{ `from?`: [`AssetHolderLike`](../../../../types/type-aliases/AssetHolderLike.mdx); `nfts`: (`BigNumber` \| [`Nft`](../../../NonFungible/Nft/classes/Nft.mdx))[]; `to`: [`AssetHolderLike`](../../../../types/type-aliases/AssetHolderLike.mdx); \}

&hyphen;

`args.from?`

[`AssetHolderLike`](../../../../types/type-aliases/AssetHolderLike.mdx)

sender (Portfolio or Account) (optional, defaults to the signing Identity's Default Portfolio)

`args.nfts`

(`BigNumber` \| [`Nft`](../../../NonFungible/Nft/classes/Nft.mdx))[]

the NFTs to transfer

`args.to`

[`AssetHolderLike`](../../../../types/type-aliases/AssetHolderLike.mdx)

receiver (Portfolio or Account)

#### Returns

`Promise`\<[`TransferBreakdown`](../../../types/interfaces/TransferBreakdown.mdx)\>

#### Note

this takes locked tokens into account. For example, if portfolio A has NFTs 1, 2 and 3 of a collection and this function is called to check if 1 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer that token,
  they would become locked. From that point, further calls to this function would return failed results because of the funds being locked, even though it hasn't been
  transferred yet

***

### preApprove()

> **preApprove**(`opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/Settlements/index.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Settlements/index.ts#L46)

Pre-approves receiving this asset for the signing identity. Receiving this asset in a settlement will not require manual affirmation

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [NoArgsProcedureMethod](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [preApprove.checkAuthorization](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

`BaseSettlements.preApprove`

***

### removePreApproval()

> **removePreApproval**(`opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/Settlements/index.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Base/Settlements/index.ts#L51)

Removes pre-approval for this asset

#### Parameters

Parameter
Type

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [NoArgsProcedureMethod](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx), which means you can call [removePreApproval.checkAuthorization](../../../../../procedures/types/interfaces/NoArgsProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

#### Inherited from

`BaseSettlements.removePreApproval`
