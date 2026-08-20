# Interface: AccountBalance

> Defined in: [src/api/entities/Account/types.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L25)

# Interface: AccountBalance

Defined in: [src/api/entities/Account/types.ts:25](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L25)

POLYX balance of an Account

## Properties

### free

> **free**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:34](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L34)

balance that is guaranteed to be spendable on transfers and transaction fees. Calculated according
  to the chain's rules as `chain free - max(frozen - reserved, existential deposit)`

#### Note

this differs from the chain's raw `free` value, which still includes frozen funds. The
  existential deposit (0.000001 POLYX) is always treated as unspendable, so this value is a
  lower bound on what the Account can spend without risk of the transaction failing

***

### frozen

> **frozen**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:56](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L56)

minimum balance (out of `total`) that must remain in the Account due to freezes/locks.
  Frozen funds may overlap with `reserved` funds. Corresponds to the chain's raw `frozen` value

***

### locked

> **locked**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:40](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L40)

balance that is unavailable for spending. Made up of funds on hold (`reserved`, e.g. bonded for
  staking), frozen funds not covered by holds (`frozen`) and the existential
  deposit. Always equal to `total - free`

***

### reserved

> **reserved**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:51](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L51)

balance placed on hold by the protocol, e.g. POLYX bonded for staking. Held funds are not part
  of the chain's `free` balance and cannot be spent until released (e.g. unbonded and withdrawn).
  Corresponds to the chain's raw `reserved` value

***

### total

> **total**: `BigNumber`

Defined in: [src/api/entities/Account/types.ts:45](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L45)

total balance owned by the Account, including unavailable funds. Equal to the chain's
  `free + reserved`, and to `free + locked` as returned here
