---
id: "MoveFundsParams"
title: "Interface: MoveFundsParams"
sidebar_label: "MoveFundsParams"
---

[api/procedures/types](../../../../../modules/API/Procedures/Types/Types.md).MoveFundsParams

## Properties

### items

• **items**: [`PortfolioMovement`](../../../../Types/PortfolioMovement/PortfolioMovement.md)[]

list of Assets (and the corresponding token amounts) that will be moved

#### Defined in

[api/procedures/types.ts:1059](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/procedures/types.ts#L1059)

___

### to

• `Optional` **to**: `BigNumber` \| [`NumberedPortfolio`](../../../../../classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../../classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

portfolio (or portfolio ID) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner

#### Defined in

[api/procedures/types.ts:1055](https://github.com/PolymeshAssociation/polymesh-sdk/blob/de58d40fd/src/api/procedures/types.ts#L1055)
