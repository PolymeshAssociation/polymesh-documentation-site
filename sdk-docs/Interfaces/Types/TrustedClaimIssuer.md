[types](../../Modules/Types/Types.md).TrustedClaimIssuer

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `IsDefault` | extends `boolean` = ``false`` | whether the Identity is a default trusted claim issuer for an asset or just for a specific compliance condition. Defaults to false |

## Properties

### identity

• **identity**: `IsDefault` extends ``true`` ? [`DefaultTrustedClaimIssuer`](../../Classes/API/Entities/DefaultTrustedClaimIssuer/DefaultTrustedClaimIssuer.md) : [`Identity`](../../Classes/API/Entities/Identity/Identity.md)

#### Defined in

[types/index.ts:393](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L393)

___

### trustedFor

• **trustedFor**: ``null`` \| [`ClaimType`](../../Enums/Types/ClaimType.md)[]

a null value means that the issuer is trusted for all claim types

#### Defined in

[types/index.ts:397](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/types/index.ts#L397)
