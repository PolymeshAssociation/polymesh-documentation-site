## Enumerations

- [CorporateActionKind](../../../../Enums/API/Entities/CorporateActionBase/Types/CorporateActionKind.md)
- [TargetTreatment](../../../../Enums/API/Entities/CorporateActionBase/Types/TargetTreatment.md)

## Interfaces

- [CorporateActionTargets](../../../../Interfaces/API/Entities/CorporateActionBase/Types/CorporateActionTargets.md)
- [TaxWithholding](../../../../Interfaces/API/Entities/CorporateActionBase/Types/TaxWithholding.md)

## References

### CorporateActionParams

Renames and re-exports [Params](../../../../Interfaces/API/Entities/CorporateActionBase/Params.md)

## Type Aliases

### InputTargets

Ƭ **InputTargets**: [`Modify`](../../../Types/Utils.md#modify)<[`CorporateActionTargets`](../../../../Interfaces/API/Entities/CorporateActionBase/Types/CorporateActionTargets.md), { `identities`: (`string` \| [`Identity`](../../../../Classes/API/Entities/Identity/Identity.md))[]  }\>

#### Defined in

[api/entities/CorporateActionBase/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/CorporateActionBase/types.ts#L21)

___

### InputTaxWithholding

Ƭ **InputTaxWithholding**: [`Modify`](../../../Types/Utils.md#modify)<[`TaxWithholding`](../../../../Interfaces/API/Entities/CorporateActionBase/Types/TaxWithholding.md), { `identity`: `string` \| [`Identity`](../../../../Classes/API/Entities/Identity/Identity.md)  }\>

#### Defined in

[api/entities/CorporateActionBase/types.ts:28](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/entities/CorporateActionBase/types.ts#L28)
