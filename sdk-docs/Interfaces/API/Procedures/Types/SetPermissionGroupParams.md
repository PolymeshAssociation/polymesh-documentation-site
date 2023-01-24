[api/procedures/types](../../../../Modules/API/Procedures/Types.md).SetPermissionGroupParams

This procedure can be called with:
  - An Asset's existing Custom Permission Group. The Identity will be assigned as an Agent of that Group for that Asset
  - A Known Permission Group and an Asset. The Identity will be assigned as an Agent of that Group for that Asset
  - A set of Transaction Permissions and an Asset. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created for that Asset with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used
  - An array of [Transaction Groups](../../../../Enums/Types/TxGroup.md) that represent a set of permissions. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created with those permissions, and
    the Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used

## Properties

### group

• **group**: [`CustomPermissionGroup`](../../../../Classes/API/Entities/CustomPermissionGroup/CustomPermissionGroup.md) \| [`KnownPermissionGroup`](../../../../Classes/API/Entities/KnownPermissionGroup/KnownPermissionGroup.md) \| [`TransactionsParams`](TransactionsParams.md) \| [`TxGroupParams`](TxGroupParams.md)

#### Defined in

[api/procedures/types.ts:909](https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L909)
