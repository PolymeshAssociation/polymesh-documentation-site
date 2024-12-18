---
id: "MoveFundsParams"
title: "Interface: MoveFundsParams"
sidebar_label: "MoveFundsParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).MoveFundsParams

## Properties

### items

• **items**: [`PortfolioMovement`](../../../../../modules/API/Entities/Types/Types.md#portfoliomovement)[]

list of Assets (and the corresponding token amounts) that will be moved

#### Defined in

[api/procedures/types.ts:1625](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1625)

___

### to

• `Optional` **to**: `BigNumber` \| [`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

portfolio (or portfolio ID) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner

#### Defined in

[api/procedures/types.ts:1621](https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/api/procedures/types.ts#L1621)