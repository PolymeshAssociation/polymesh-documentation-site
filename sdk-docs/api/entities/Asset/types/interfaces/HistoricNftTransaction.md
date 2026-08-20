# Interface: HistoricNftTransaction

> Defined in: [src/api/entities/Asset/types.ts:220](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L220)

# Interface: HistoricNftTransaction

Defined in: [src/api/entities/Asset/types.ts:220](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L220)

## Extends

- [`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx)

## Properties

### asset

> **asset**: [`NftCollection`](../../NonFungible/NftCollection/classes/NftCollection.mdx)

Defined in: [src/api/entities/Asset/types.ts:221](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L221)

***

### blockDate

> **blockDate**: `Date`

Defined in: [src/api/client/types.ts:182](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L182)

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`blockDate`](BaseHistoricAssetTransaction.mdx#blockdate)

***

### blockHash

> **blockHash**: `string`

Defined in: [src/api/client/types.ts:181](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L181)

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`blockHash`](BaseHistoricAssetTransaction.mdx#blockhash)

***

### blockNumber

> **blockNumber**: `BigNumber`

Defined in: [src/api/client/types.ts:180](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L180)

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`blockNumber`](BaseHistoricAssetTransaction.mdx#blocknumber)

***

### event

> **event**: [`EventIdEnum`](../../../../../types/enumerations/EventIdEnum.mdx)

Defined in: [src/api/entities/Asset/types.ts:190](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L190)

Event identifying the type of transaction

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`event`](BaseHistoricAssetTransaction.mdx#event)

***

### eventIndex

> **eventIndex**: `BigNumber`

Defined in: [src/api/client/types.ts:183](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/client/types.ts#L183)

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`eventIndex`](BaseHistoricAssetTransaction.mdx#eventindex)

***

### extrinsicIndex

> **extrinsicIndex**: `BigNumber`

Defined in: [src/api/entities/Asset/types.ts:195](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L195)

Index value of the extrinsic which led to the Asset transaction within the `blockNumber` block

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`extrinsicIndex`](BaseHistoricAssetTransaction.mdx#extrinsicindex)

***

### from

> **from**: [`DefaultPortfolio`](../../../DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../../NumberedPortfolio/classes/NumberedPortfolio.mdx) \| `null`

Defined in: [src/api/entities/Asset/types.ts:170](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L170)

Origin portfolio involved in the transaction. This value will be null when the `event` value is `Issued`

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`from`](BaseHistoricAssetTransaction.mdx#from)

***

### fromAccount

> **fromAccount**: [`Account`](../../../Account/classes/Account.mdx) \| `null`

Defined in: [src/api/entities/Asset/types.ts:175](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L175)

Origin account involved in the transaction. This value will be null when the `event` value is `Issued` or when the origin asset holder is a Portfolio

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`fromAccount`](BaseHistoricAssetTransaction.mdx#fromaccount)

***

### fundingRound

> **fundingRound**: `string` \| `undefined`

Defined in: [src/api/entities/Asset/types.ts:200](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L200)

Name of the funding round (if provided while issuing the Asset). This value is present only when the value of `event` is `Issued`

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`fundingRound`](BaseHistoricAssetTransaction.mdx#fundinground)

***

### instructionId?

> `optional` **instructionId?**: `BigNumber`

Defined in: [src/api/entities/Asset/types.ts:204](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L204)

ID of the instruction being executed. This value is present only when the value of `event` is `Transfer`

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`instructionId`](BaseHistoricAssetTransaction.mdx#instructionid)

***

### instructionMemo?

> `optional` **instructionMemo?**: `string`

Defined in: [src/api/entities/Asset/types.ts:208](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L208)

Memo provided against the executed instruction. This value is present only when the value of `event` is `Transfer`

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`instructionMemo`](BaseHistoricAssetTransaction.mdx#instructionmemo)

***

### nfts

> **nfts**: [`Nft`](../../NonFungible/Nft/classes/Nft.mdx)[]

Defined in: [src/api/entities/Asset/types.ts:226](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L226)

The specific NFTs involved in the transaction

***

### to

> **to**: [`DefaultPortfolio`](../../../DefaultPortfolio/classes/DefaultPortfolio.mdx) \| [`NumberedPortfolio`](../../../NumberedPortfolio/classes/NumberedPortfolio.mdx) \| `null`

Defined in: [src/api/entities/Asset/types.ts:180](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L180)

Destination portfolio involved in the transaction . This value will be null when the `event` value is `Redeemed`

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`to`](BaseHistoricAssetTransaction.mdx#to)

***

### toAccount

> **toAccount**: [`Account`](../../../Account/classes/Account.mdx) \| `null`

Defined in: [src/api/entities/Asset/types.ts:185](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L185)

Destination account involved in this transcation. This value will be null when the `event` value is `Redeemed` or when the destination asset holder is a Portfolio

#### Inherited from

[`BaseHistoricAssetTransaction`](BaseHistoricAssetTransaction.mdx).[`toAccount`](BaseHistoricAssetTransaction.mdx#toaccount)
