[types](../../Modules/Types/Types.md).ProcedureAuthorizationStatus

## Properties

### accountFrozen

• **accountFrozen**: `boolean`

whether the Account is frozen (i.e. can't perform any transactions)

#### Defined in

[types/index.ts:1258](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1258)

___

### agentPermissions

• **agentPermissions**: [`CheckPermissionsResult`](CheckPermissionsResult.md)<[`Identity`](../../Enums/Types/SignerType.md#identity)\>

whether the Identity complies with all required Agent permissions

#### Defined in

[types/index.ts:1246](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1246)

___

### noIdentity

• **noIdentity**: `boolean`

true only if the Procedure requires an Identity but the signing Account
  doesn't have one associated

#### Defined in

[types/index.ts:1263](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1263)

___

### roles

• **roles**: [`CheckRolesResult`](CheckRolesResult.md)

whether the Identity complies with all required Roles

#### Defined in

[types/index.ts:1254](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1254)

___

### signerPermissions

• **signerPermissions**: [`CheckPermissionsResult`](CheckPermissionsResult.md)<[`Account`](../../Enums/Types/SignerType.md#account)\>

whether the Account complies with all required Signer permissions

#### Defined in

[types/index.ts:1250](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L1250)
