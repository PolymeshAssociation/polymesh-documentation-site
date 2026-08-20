# Type Alias: Asset

> > **Asset** = [`FungibleAsset`](../../Fungible/classes/FungibleAsset.mdx) \| [`NftCollection`](../../NonFungible/NftCollection/classes/NftCollection.mdx)

# Type Alias: Asset

> **Asset** = [`FungibleAsset`](../../Fungible/classes/FungibleAsset.mdx) \| [`NftCollection`](../../NonFungible/NftCollection/classes/NftCollection.mdx)

Defined in: [src/api/entities/Asset/types.ts:33](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/types.ts#L33)

Represents a generic asset on chain. Common functionality (e.g. documents) can be interacted with directly. For type specific functionality (e.g. issue) the type can
be narrowed via `instanceof` operator, or by using a more specific getter
