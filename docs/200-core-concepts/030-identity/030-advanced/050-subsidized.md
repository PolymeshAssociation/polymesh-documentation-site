---
title: Subsidized Accounts - Fee Relayer
description: Fee Subsidization
id: subsidized-accounts
slug: /accounts/subsidized
sidebar_label: Subsidized Accounts
tags:
  - accounts
  - subsidized
---

## Overview

Subsidized accounts in Polymesh allow one account key (the subsidizer) to pay both network transaction fees and protocol fees on behalf of another account key (the subsidized). This feature enables businesses to cover transaction costs for their users, removing friction from the user experience while maintaining proper identity attribution for regulatory compliance.

## Use Cases

Common scenarios for using subsidized accounts include:

- **DApp Providers**: Covering transaction fees for their users to improve user experience
- **Asset Issuers**: Subsidizing operations for their investors or service providers
- **Service Providers**: Offering fee coverage as part of their service package
- **Corporate Entities**: Managing internal operations where a central account pays for multiple department activities
- **Institutional Users**: Organizations that prefer not to hold POLYX directly on their balance sheets can engage third-party service providers to manage token holdings and handle transaction fee payments

:::note
The subsidized accounts feature is particularly valuable for institutions with regulatory or accounting considerations regarding utility token holdings. By using a third-party subsidizer to handle transaction fees, organizations can participate in the network while outsourcing the management of POLYX tokens.
:::

## How It Works

The subsidization process involves two main roles:

1. **Subsidizer**: The account key that pays for transaction fees
2. **Subsidized Account**: The account key whose transactions are being paid for

The process follows these steps:

1. A subsidizer account sets up an allowance for a target account
2. When the subsidized account submits a supported transaction, the chains relayer functionality automatically:
   - Validates the transaction type is eligible for subsidization
   - Checks the available allowance
   - Deducts fees from the subsidizer's account instead of the sender

:::note
Subsidies are established at the account level. All transactions from the subsidized account can benefit from the subsidy for eligible transactions.
:::

## Limitations and Considerations

Before implementing subsidized accounts, be aware of these important limitations:

1. **Account Restrictions**:

   - When an account has an active subsidy, it cannot submit non-subsidized transactions
   - Only specific transactions, defined in the chain runtime are eligible for subsidization. All transaction related to Asset and Identity management are supported.
   - This restriction helps prevent fee circumvention and ensures proper subsidy tracking

2. **Batch Transaction Restrictions**:

   - When using subsidies, batch transactions are limited to a maximum of 7 transactions
   - Nested batch calls are not supported when using subsidies

3. **Allowance Management**:

   - Subsidies have a maximum allowance that cannot be exceeded
   - Once an allowance is exhausted, it must be renewed by the subsidizer before the key can transact again

4. **Transaction Requirements**:
   - The subsidizer must have sufficient balance to cover the fees
   - Failed transactions still consume the allowance for the transaction fees consumed

## Technical Implementation

### Setting Up Subsidies

Subsidizers can establish subsidies using `relayer::set_paying_key` providing the account key to be subsidized and the maximum POLYX allowance for the subsidy. This transaction creates an [authorization](/authorizations) request targeting the key to be subsidized for approval. Once the subsidized key accepts the authorization request, the subsidy relationship will be fully established between the keys.

:::note
Alternatively, the subsidizer can create the authorization request through the `identity::add_authorization` transaction selecting an authorization type of `AddRelayerPayingKey`. This alternate option allows an optional expiry to be associated with the authorization request.
:::

### Managing Subsidies

Subsidizers have several management options:

- `relayer::decrease_allowance`: Reduce the subsidy allowance
- `relayer::increase_allowance`: Increase the subsidy allowance
- `relayer::remove_paying_key`: Remove the subsidy entirely

### Monitoring Subsidies

Participants can monitor subsidy status using chain state queries `relayer::subsidies` to view the subsidy relationship and remaining allowance.

### Transaction Fee Behavior

When a transaction is subsidized:

1. The chain verifies the transaction type is eligible for subsidization
2. The relayer pallet automatically handles fee payment from the subsidizer's account
3. Both network fees and protocol fees are covered by the subsidy
4. The transaction maintains its original identity attribution for compliance purposes

## Best Practices

When implementing subsidized accounts:

- Set reasonable allowance limits
- Monitor usage patterns
- Monitor allowance levels to prevent disruption
- Regularly review subsidy relationships
- Plan for allowance renewals

:::info
Subsidized accounts provide a powerful way to manage transaction fees while maintaining proper identity attribution. The automatic handling by the Relayer pallet makes it seamless for end users while ensuring proper controls and tracking are maintained.
:::
