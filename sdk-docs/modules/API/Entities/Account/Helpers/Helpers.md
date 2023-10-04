---
id: "Helpers"
title: "Module: helpers"
sidebar_label: "Helpers"
---

## Functions

### getMissingPortfolioPermissions

▸ **getMissingPortfolioPermissions**(`requiredPermissions`, `currentPermissions`): [`SimplePermissions`](../../../../../interfaces/Types/SimplePermissions/SimplePermissions.md)[``"portfolios"``]

Calculate the difference between the required Transaction permissions and the current ones

#### Parameters

| Name | Type |
| :------ | :------ |
| `requiredPermissions` | `undefined` \| ``null`` \| ([`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md))[] |
| `currentPermissions` | ``null`` \| [`SectionPermissions`](../../../../../interfaces/Types/SectionPermissions/SectionPermissions.md)<[`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)\> |

#### Returns

[`SimplePermissions`](../../../../../interfaces/Types/SimplePermissions/SimplePermissions.md)[``"portfolios"``]
