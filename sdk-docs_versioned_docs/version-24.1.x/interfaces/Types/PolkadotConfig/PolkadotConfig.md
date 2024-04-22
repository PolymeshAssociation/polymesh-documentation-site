---
id: "PolkadotConfig"
title: "Interface: PolkadotConfig"
sidebar_label: "PolkadotConfig"
---

[types](../../../modules/Types/Types.md).PolkadotConfig

## Properties

### metadata

• `Optional` **metadata**: `Record`\<`string`, \`0x$\{string}\`\>

provide a locally saved metadata file for a modestly fast startup time (e.g. 1 second when provided, 1.5 seconds without).

**`Note`**

if not provided the SDK will read the needed data from chain during startup

**`Note`**

format is key as genesis hash and spec version and the value hex encoded chain metadata

**`Example`**

creating valid metadata
```ts
const meta = _polkadotApi.runtimeMetadata.toHex();
const genesisHash = _polkadotApi.genesisHash;
const specVersion = _polkadotApi.runtimeVersion.specVersion;

const metadata = {
 [`${genesisHash}-${specVersion}`]: meta,
};
```

#### Defined in

[types/index.ts:743](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L743)

___

### noInitWarn

• `Optional` **noInitWarn**: `boolean`

set to `true` to disable polkadot start up warnings

#### Defined in

[types/index.ts:748](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L748)

___

### typesBundle

• `Optional` **typesBundle**: `OverrideBundleType`

allows for types to be provided for multiple chain specs at once

**`Note`**

shouldn't be needed for most use cases

#### Defined in

[types/index.ts:755](https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/types/index.ts#L755)
