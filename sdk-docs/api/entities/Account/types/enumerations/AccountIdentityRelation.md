# Enumeration: AccountIdentityRelation

> Defined in: [src/api/entities/Account/types.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L80)

# Enumeration: AccountIdentityRelation

Defined in: [src/api/entities/Account/types.ts:80](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L80)

Represents the how an Account is associated to an Identity

## Enumeration Members

### MultiSigSigner

> **MultiSigSigner**: `"MultiSigSigner"`

Defined in: [src/api/entities/Account/types.ts:96](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L96)

The Account is one of many signers for a MultiSig

***

### Primary

> **Primary**: `"Primary"`

Defined in: [src/api/entities/Account/types.ts:88](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L88)

The Account is the Identity's primary key (i.e. it has full permission)

***

### Secondary

> **Secondary**: `"Secondary"`

Defined in: [src/api/entities/Account/types.ts:92](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L92)

The Account is a Secondary account. There are associated permissions that may limit what transactions it may authorize for the Identity

***

### Unassigned

> **Unassigned**: `"Unassigned"`

Defined in: [src/api/entities/Account/types.ts:84](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/api/entities/Account/types.ts#L84)

The Account is not associated to any Identity
