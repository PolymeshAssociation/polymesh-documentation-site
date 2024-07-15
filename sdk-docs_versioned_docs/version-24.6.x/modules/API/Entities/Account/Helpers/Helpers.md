---
id: "Helpers"
title: "Module: helpers"
sidebar_label: "Helpers"
---

## Functions

### getMissingPortfolioPermissions

▸ **getMissingPortfolioPermissions**(`requiredPermissions`, `currentPermissions`): [`SimplePermissions`](../../../../../interfaces/API/Entities/Types/SimplePermissions/SimplePermissions.md)[``"portfolios"``]

Calculate the difference between the required Transaction permissions and the current ones

#### Parameters

| Name | Type |
| :------ | :------ |
| `requiredPermissions` | `undefined` \| ``null`` \| ([`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md))[] |
| `currentPermissions` | ``null`` \| [`SectionPermissions`](../../../../../interfaces/API/Entities/Types/SectionPermissions/SectionPermissions.md)\<[`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)\> |

#### Returns

[`SimplePermissions`](../../../../../interfaces/API/Entities/Types/SimplePermissions/SimplePermissions.md)[``"portfolios"``]

#### Defined in

[api/entities/Account/helpers.ts:30](https://github.com/PolymeshAssociation/polymesh-sdk/blob/654b99c8d/src/api/entities/Account/helpers.ts#L30)
