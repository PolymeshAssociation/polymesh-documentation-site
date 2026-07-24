# Type Alias: TransactionPayloadInput

> > **TransactionPayloadInput** = [`TransactionPayload`](../interfaces/TransactionPayload.mdx) \| [`TransactionPayload`](../interfaces/TransactionPayload.mdx)\[`"payload"`\] \| [`TransactionPayload`](../interfaces/TransactionPayload.mdx)\[`"rawPayload"`\]

# Type Alias: TransactionPayloadInput

> **TransactionPayloadInput** = [`TransactionPayload`](../interfaces/TransactionPayload.mdx) \| [`TransactionPayload`](../interfaces/TransactionPayload.mdx)\[`"payload"`\] \| [`TransactionPayload`](../interfaces/TransactionPayload.mdx)\[`"rawPayload"`\]

Defined in: [src/base/types.ts:229](https://github.com/PolymeshAssociation/polymesh-sdk/blob/a7c926afa47310145607dc47eeba1d09b58421b6/src/base/types.ts#L229)

The data needed for submitting an offline transaction.

## Note

One of the following can be used to submit an offline transaction -
  1. Full payload
  2. Inner payload field
  3. Inner raw payload field
