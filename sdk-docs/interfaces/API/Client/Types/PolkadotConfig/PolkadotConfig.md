---
id: "PolkadotConfig"
title: "Interface: PolkadotConfig"
sidebar_label: "PolkadotConfig"
---

[api/client/types](../../../../../modules/API/Client/Types/Types.md).PolkadotConfig

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

[api/client/types.ts:158](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/client/types.ts#L158)

___

### noInitWarn

• `Optional` **noInitWarn**: `boolean`

set to `true` to disable polkadot start up warnings

#### Defined in

[api/client/types.ts:163](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/client/types.ts#L163)

___

### typesBundle

• `Optional` **typesBundle**: `OverrideBundleType`

allows for types to be provided for multiple chain specs at once

**`Note`**

shouldn't be needed for most use cases

#### Defined in

[api/client/types.ts:170](https://github.com/PolymeshAssociation/polymesh-sdk/blob/c53723bab/src/api/client/types.ts#L170)