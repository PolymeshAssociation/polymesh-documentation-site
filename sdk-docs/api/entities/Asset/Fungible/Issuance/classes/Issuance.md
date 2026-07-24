# Class: Issuance

> Defined in: [src/api/entities/Asset/Fungible/Issuance/index.ts:8](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/Issuance/index.ts#L8)

# Class: Issuance

Defined in: [src/api/entities/Asset/Fungible/Issuance/index.ts:8](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/Issuance/index.ts#L8)

Handles all Asset Issuance related functionality

## Extends

- `Namespace`\<[`FungibleAsset`](../../classes/FungibleAsset.mdx)\>

## Methods

### issue()

> **issue**(`args`: [`IssueTokensParams`](../../../../../procedures/types/interfaces/IssueTokensParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`FungibleAsset`](../../classes/FungibleAsset.mdx), [`FungibleAsset`](../../classes/FungibleAsset.mdx)\>\>

Defined in: [src/api/entities/Asset/Fungible/Issuance/index.ts:24](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Fungible/Issuance/index.ts#L24)

Issue a certain amount of Asset tokens to the caller's default portfolio

#### Parameters

Parameter
Type

`args`

[`IssueTokensParams`](../../../../../procedures/types/interfaces/IssueTokensParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<[`FungibleAsset`](../../classes/FungibleAsset.mdx), [`FungibleAsset`](../../classes/FungibleAsset.mdx)\>\>

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [issue.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
