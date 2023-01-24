[types](../../Modules/Types/Types.md).ActiveTransferRestrictions

## Type parameters

| Name | Type |
| :------ | :------ |
| `Restriction` | extends [`CountTransferRestriction`](CountTransferRestriction.md) \| [`PercentageTransferRestriction`](PercentageTransferRestriction.md) \| [`ClaimCountTransferRestriction`](ClaimCountTransferRestriction.md) \| [`ClaimPercentageTransferRestriction`](ClaimPercentageTransferRestriction.md) |

## Properties

### availableSlots

• **availableSlots**: `BigNumber`

amount of restrictions that can be added before reaching the shared limit

#### Defined in

[types/index.ts:1331](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1331)

___

### restrictions

• **restrictions**: `Restriction`[]

#### Defined in

[types/index.ts:1327](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1327)
