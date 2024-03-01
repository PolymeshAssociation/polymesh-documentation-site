---
id: "Utils"
title: "Module: utils"
sidebar_label: "Utils"
---

## Type Aliases

### ArgsType

Ƭ **ArgsType**\<`T`\>: `T` extends (...`args`: infer A) => `unknown` ? `A` : `never`

Less strict version of `Parameters<T>`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/utils/index.ts:29](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/utils/index.ts#L29)

___

### Ensured

Ƭ **Ensured**\<`T`, `K`\>: `Required`\<`Pick`\<`T`, `K`\>\> & \{ [SubKey in K]: NonNullable\<T[SubKey]\> }

Pick a single property from T and ensure it is defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[types/utils/index.ts:87](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/utils/index.ts#L87)

___

### HumanReadableType

Ƭ **HumanReadableType**\<`T`\>: `T` extends [`Entity`](../../../classes/API/Entities/Entity/Entity.md)\<`unknown`, infer H\> ? [`HumanReadableType`](Utils.md#humanreadabletype)\<`H`\> : `T` extends `BigNumber` ? `string` : `T` extends `Date` ? `string` : `T` extends `object` ? \{ [K in keyof T]: T[K] extends Entity\<unknown, infer E\> ? HumanReadableType\<E\> : HumanReadableType\<T[K]\> } : `T`

Recursively traverse a type and transform its Entity properties into their
  human readable version (as if `.toHuman` had been called on all of them)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/utils/index.ts:35](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/utils/index.ts#L35)

___

### Modify

Ƭ **Modify**\<`T`, `R`\>: `Omit`\<`T`, keyof `R`\> & `R`

Override T with the properties of R

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Defined in

[types/utils/index.ts:76](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/utils/index.ts#L76)

___

### PaginatedQueryArgs

Ƭ **PaginatedQueryArgs**\<`T`\>: `T` & \{ `size?`: `number` ; `start?`: `number`  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/utils/index.ts:91](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/utils/index.ts#L91)

___

### QueryArgs

Ƭ **QueryArgs**\<`T`, `K`\>: \{ [P in K]?: T[P] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[types/utils/index.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/utils/index.ts#L96)

___

### WithRequired

Ƭ **WithRequired**\<`T`, `K`\>: `T` & \{ [P in K]-?: T[P] }

Ensure a specific property of T is defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[types/utils/index.ts:82](https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/utils/index.ts#L82)
