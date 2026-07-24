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

[api/procedures/types.ts:1632](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1632)

___

### to

• `Optional` **to**: `BigNumber` \| [`DefaultPortfolio`](../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md) \| [`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md)

portfolio (or portfolio ID) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner

#### Defined in

[api/procedures/types.ts:1628](https://github.com/PolymeshAssociation/polymesh-sdk/blob/fbf6882d0/src/api/procedures/types.ts#L1628)
