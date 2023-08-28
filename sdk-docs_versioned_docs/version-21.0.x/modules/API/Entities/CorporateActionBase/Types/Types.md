---
id: "Types"
title: "Module: CorporateActionBase Types"
sidebar_label: "Types"
---

## Enumerations

- [CorporateActionKind](../../../../../enums/API/Entities/CorporateActionBase/Types/CorporateActionKind/CorporateActionKind.md)
- [TargetTreatment](../../../../../enums/API/Entities/CorporateActionBase/Types/TargetTreatment/TargetTreatment.md)

## Interfaces

- [CorporateActionTargets](../../../../../interfaces/API/Entities/CorporateActionBase/Types/CorporateActionTargets/CorporateActionTargets.md)
- [TaxWithholding](../../../../../interfaces/API/Entities/CorporateActionBase/Types/TaxWithholding/TaxWithholding.md)

## References

### CorporateActionParams

Renames and re-exports [Params](../../../../../interfaces/API/Entities/CorporateActionBase/Params/Params.md)

## Type Aliases

### InputTargets

Ƭ **InputTargets**: [`Modify`](../../../../Types/Utils/Utils.md#modify)<[`CorporateActionTargets`](../../../../../interfaces/API/Entities/CorporateActionBase/Types/CorporateActionTargets/CorporateActionTargets.md), { `identities`: (`string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md))[]  }\>

#### Defined in

[api/entities/CorporateActionBase/types.ts:21](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/CorporateActionBase/types.ts#L21)

___

### InputTaxWithholding

Ƭ **InputTaxWithholding**: [`Modify`](../../../../Types/Utils/Utils.md#modify)<[`TaxWithholding`](../../../../../interfaces/API/Entities/CorporateActionBase/Types/TaxWithholding/TaxWithholding.md), { `identity`: `string` \| [`Identity`](../../../../../classes/API/Entities/Identity/Identity.md)  }\>

#### Defined in

[api/entities/CorporateActionBase/types.ts:28](https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/CorporateActionBase/types.ts#L28)
