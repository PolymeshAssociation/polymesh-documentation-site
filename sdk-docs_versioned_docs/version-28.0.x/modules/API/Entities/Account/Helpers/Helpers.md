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
| `requiredPermissions` | `undefined` \| ``null`` \| ([`DefaultPortfolio`](../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md) \| [`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md))[] |
| `currentPermissions` | ``null`` \| [`SectionPermissions`](../../../../../interfaces/API/Entities/Types/SectionPermissions/SectionPermissions.md)\<[`DefaultPortfolio`](../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md) \| [`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md)\> |

#### Returns

[`SimplePermissions`](../../../../../interfaces/API/Entities/Types/SimplePermissions/SimplePermissions.md)[``"portfolios"``]

#### Defined in

[api/entities/Account/helpers.ts:30](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/entities/Account/helpers.ts#L30)
