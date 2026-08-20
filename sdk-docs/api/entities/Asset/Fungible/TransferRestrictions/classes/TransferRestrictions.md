# Class: TransferRestrictions

> Defined in: [src/api/entities/Asset/Fungible/TransferRestrictions/index.ts:64](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L64)

# Class: TransferRestrictions

Defined in: [src/api/entities/Asset/Fungible/TransferRestrictions/index.ts:64](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L64)

Handles all Transfer Restriction related functionality.

## Extends

- `Namespace`\<[`FungibleAsset`](../../classes/FungibleAsset.mdx)\>

## Methods

### addExemptions()

> **addExemptions**(`args`: [`TransferRestrictionExemptionParams`](../../../../../procedures/types/type-aliases/TransferRestrictionExemptionParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Fungible/TransferRestrictions/index.ts:704](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L704)

Exempt identities from Transfer Restrictions. These identities will not be subject to Transfer Restriction rules.

#### Parameters

Parameter
Type

`args`

[`TransferRestrictionExemptionParams`](../../../../../procedures/types/type-aliases/TransferRestrictionExemptionParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [addExemptions.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### getExemptions()

> **getExemptions**(): `Promise`\<[`TransferRestrictionExemption`](../../../types/interfaces/TransferRestrictionExemption.mdx)[]\>

Defined in: [src/api/entities/Asset/Fungible/TransferRestrictions/index.ts:641](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L641)

Return identities with exemptions.

#### Returns

`Promise`\<[`TransferRestrictionExemption`](../../../types/interfaces/TransferRestrictionExemption.mdx)[]\>

***

### getRestrictions()

> **getRestrictions**(): `Promise`\<[`ActiveTransferRestrictions`](../../../types/interfaces/ActiveTransferRestrictions.mdx)\>

Defined in: [src/api/entities/Asset/Fungible/TransferRestrictions/index.ts:141](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L141)

Get all current restrictions for this asset.

#### Returns

`Promise`\<[`ActiveTransferRestrictions`](../../../types/interfaces/ActiveTransferRestrictions.mdx)\>

***

### getStats()

> **getStats**(): `Promise`\<[`AssetStat`](../../../types/interfaces/AssetStat.mdx)[]\>

Defined in: [src/api/entities/Asset/Fungible/TransferRestrictions/index.ts:161](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L161)

Return active asset stats.

#### Returns

`Promise`\<[`AssetStat`](../../../types/interfaces/AssetStat.mdx)[]\>

***

### getValues()

> **getValues**(): `Promise`\<[`TransferRestrictionStatValues`](../../../types/interfaces/TransferRestrictionStatValues.mdx)[]\>

Defined in: [src/api/entities/Asset/Fungible/TransferRestrictions/index.ts:501](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L501)

Get the values of all active transfer restrictions for this Asset

#### Returns

`Promise`\<[`TransferRestrictionStatValues`](../../../types/interfaces/TransferRestrictionStatValues.mdx)[]\>

an array of objects containing the values of all active transfer restrictions for this Asset

***

### removeExemptions()

> **removeExemptions**(`args`: [`TransferRestrictionExemptionParams`](../../../../../procedures/types/type-aliases/TransferRestrictionExemptionParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Fungible/TransferRestrictions/index.ts:711](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L711)

Remove identities from Transfer Restriction exemptions.

The given identities will no longer be exempt from Transfer Restrictions.

#### Parameters

Parameter
Type

`args`

[`TransferRestrictionExemptionParams`](../../../../../procedures/types/type-aliases/TransferRestrictionExemptionParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [removeExemptions.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### setRestrictions()

> **setRestrictions**(`args`: [`TransferRestrictionParams`](../../../../../procedures/types/type-aliases/TransferRestrictionParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Fungible/TransferRestrictions/index.ts:684](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L684)

Set all Transfer Restrictions on this Asset.

Transfer Restrictions control ownership requirements based on investor statistics.
For example, TransferRestrictionType.Count can limit the number of investors.
TransferRestrictionType.Percentage can limit the maximum percentage an individual investor may hold.

#### Parameters

Parameter
Type

`args`

[`TransferRestrictionParams`](../../../../../procedures/types/type-aliases/TransferRestrictionParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

The relevant stat must be enabled by including it in setStats before the restriction can be created.

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [setRestrictions.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it

***

### setStats()

> **setStats**(`args`: [`SetTransferRestrictionStatParams`](../../../../../procedures/types/type-aliases/SetTransferRestrictionStatParams.mdx), `opts?`: [`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)): `Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

Defined in: [src/api/entities/Asset/Fungible/TransferRestrictions/index.ts:699](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Asset/Fungible/TransferRestrictions/index.ts#L699)

Set the enabled statistics for an Asset.

Transfer Restrictions require the relevant stat to be enabled before they can be set.
Calling this method will override the currently enabled stats with the provided set,
which means it can also be used to remove previously enabled stats.

#### Parameters

Parameter
Type

`args`

[`SetTransferRestrictionStatParams`](../../../../../procedures/types/type-aliases/SetTransferRestrictionStatParams.mdx)

`opts?`

[`ProcedureOpts`](../../../../../procedures/types/interfaces/ProcedureOpts.mdx)

#### Returns

`Promise`\<[`GenericPolymeshTransaction`](../../../../../procedures/types/type-aliases/GenericPolymeshTransaction.mdx)\<`void`, `void`\>\>

#### Note

If you attempt to remove a stat that is currently required by an active transfer restriction,
the chain will throw an error.

#### Note

Count-based stats must be given an initial value. The counter is only updated automatically with each transfer of tokens after the stat has been enabled.
As such, the initial value for the stat should be passed in, which can be fetched with [FungibleAsset.investorCount](../../classes/FungibleAsset.mdx#investorcount).

#### Note

this method is of type [ProcedureMethod](../../../../../procedures/types/interfaces/ProcedureMethod.mdx), which means you can call [setStats.checkAuthorization](../../../../../procedures/types/interfaces/ProcedureMethod.mdx#checkauthorization) on it to see whether the signing Account and Identity have the required roles and permissions to run it
