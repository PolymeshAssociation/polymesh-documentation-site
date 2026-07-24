# Type Alias: AnyJson

> > **AnyJson** = `string` \| `number` \| `boolean` \| `null` \| `undefined` \| `AnyJson`[] \| \{\[`index`: `string`\]: `AnyJson`; \}

# Type Alias: AnyJson

> **AnyJson** = `string` \| `number` \| `boolean` \| `null` \| `undefined` \| `AnyJson`[] \| \{\[`index`: `string`\]: `AnyJson`; \}

Defined in: [src/api/entities/MultiSigProposal/types.ts:18](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/api/entities/MultiSigProposal/types.ts#L18)

Represents JSON serializable data. Used for cases when the value can take on many types, like args for a MultiSig proposal.
