# Class: FungibleSettlements

> Defined in: [src/api/entities/Asset/Base/Settlements/index.ts:225](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/Settlements/index.ts#L225)

# Class: FungibleSettlements

Defined in: [src/api/entities/Asset/Base/Settlements/index.ts:225](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/Settlements/index.ts#L225)

Handles all Asset Settlements related functionality

## Extends

- `BaseSettlements`\<[`FungibleAsset`](../../../Fungible/classes/FungibleAsset.mdx)\>

## Methods

### canTransfer()

> **canTransfer**(`args`: `object`): `Promise`\<[`TransferBreakdown`](../../../types/interfaces/TransferBreakdown.mdx)\>

Defined in: [src/api/entities/Asset/Base/Settlements/index.ts:241](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/Settlements/index.ts#L241)

Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Asset Holders. Returns a breakdown of
  the transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance
  failures

#### Parameters

Parameter
Type
Description

`args`

\{ `amount`: `BigNumber`; `from?`: [`AssetHolderLike`](../../../../types/type-aliases/AssetHolderLike.mdx); `to`: [`AssetHolderLike`](../../../../types/type-aliases/AssetHolderLike.mdx); \}

&hyphen;

`args.amount`

`BigNumber`

amount of tokens to transfer

`args.from?`

[`AssetHolderLike`](../../../../types/type-aliases/AssetHolderLike.mdx)

sender (Portfolio or Account) (optional, defaults to the signing Identity's Default Portfolio)

`args.to`

[`AssetHolderLike`](../../../../types/type-aliases/AssetHolderLike.mdx)

receiver (Portfolio or Account)

#### Returns

`Promise`\<[`TransferBreakdown`](../../../types/interfaces/TransferBreakdown.mdx)\>

#### Note

this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be
  transferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,
  they would become locked. From that point, further calls to this function would return failed results because of the funds being locked, even though they haven't been
  transferred yet

***

### preApprove()

> **preApprove**(`opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Base/Settlements/index.ts:46](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/Settlements/index.ts#L46)

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

Defined in: [src/api/entities/Asset/Base/Settlements/index.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/Asset/Base/Settlements/index.ts#L51)

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
