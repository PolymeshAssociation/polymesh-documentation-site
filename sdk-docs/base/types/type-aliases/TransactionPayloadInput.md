# Type Alias: TransactionPayloadInput

> > **TransactionPayloadInput** = [`TransactionPayload`](../interfaces/TransactionPayload.mdx) \| [`TransactionPayload`](../interfaces/TransactionPayload.mdx)\[`"payload"`\] \| [`TransactionPayload`](../interfaces/TransactionPayload.mdx)\[`"rawPayload"`\]

# Type Alias: TransactionPayloadInput

> **TransactionPayloadInput** = [`TransactionPayload`](../interfaces/TransactionPayload.mdx) \| [`TransactionPayload`](../interfaces/TransactionPayload.mdx)\[`"payload"`\] \| [`TransactionPayload`](../interfaces/TransactionPayload.mdx)\[`"rawPayload"`\]

Defined in: [src/base/types.ts:229](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/base/types.ts#L229)

The data needed for submitting an offline transaction.

## Note

One of the following can be used to submit an offline transaction -
  1. Full payload
  2. Inner payload field
  3. Inner raw payload field
