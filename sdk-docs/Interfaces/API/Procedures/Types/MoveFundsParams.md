[api/procedures/types](../../../../Modules/API/Procedures/Types.md).MoveFundsParams

## Properties

### items

• **items**: [`PortfolioMovement`](../../../Types/PortfolioMovement.md)[]

list of Assets (and the corresponding token amounts) that will be moved

#### Defined in

[api/procedures/types.ts:929](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L929)

___

### to

• `Optional` **to**: `BigNumber` \| [`NumberedPortfolio`](../../../../Classes/API/Entities/NumberedPortfolio/NumberedPortfolio.md) \| [`DefaultPortfolio`](../../../../Classes/API/Entities/DefaultPortfolio/DefaultPortfolio.md)

portfolio (or portfolio ID) that will receive the funds. Optional, if no value is passed, the funds will be moved to the default Portfolio of this Portfolio's owner

#### Defined in

[api/procedures/types.ts:925](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L925)
