---
title: Network Fees
description: Transaction and Protocol Fees
id: fees
slug: /polyx/fees
sidebar_label: Network Fees
tags:
  - fees
  - transactions
---

## Overview

Fees on Polymesh are paid in the networks native token, [POLYX](/polyx/).

There are two types of network fee:

- Transaction Fees - always paid whether or not the transaction is successful
- Protocol Fees - only paid for successful transactions

## Transaction Fees

Every on-chain transaction in Polymesh must be paid for using POLYX. The cost of the operation is proportional to the computational and storage complexity of the action being performed and is set directly by the network.

In order to execute an on-chain transaction, a user must have sufficient POLYX associated with the key which is signing and submitting the transaction. If there isn't a sufficient balance, the network will fail the transaction.

Transaction fees go to the operator that produced the block containing the associated transaction. This means that operators are incentivised to help increase adoption of the network (as they receive a percentage of transaction fees from on-chain activity).

All transactions in Polymesh have a transaction fee associated with them. The magnitude of the fee is determined by:

- The computational cost of executing the transaction
- The memory/storage cost
- The size (in bytes) of the transaction input

The transaction fee is paid regardless of whether the transaction is successful or not.

To get an indication of current transaction fees, you can use block explorer tools like [Polymesh Subscan](https://polymesh.subscan.io/) to view recent transaction costs

## Protocol Fees

In addition to transaction fees, certain on-chain transactions carry additional fixed fees.

The transactions that carry these additional protocol fees are configurable and can be updated via the governance process - modifying both the transactions that carry these fees, as well as the fee amounts for each transaction.

Currently only one types of transaction carries additional fees - this is:

- registering a new ticker: this has a 25 POLYX fee. Ticker registration is optional and only required if you wish to have a unique ticker linked to your asset.

Both transaction and protocol fees are paid to the operator that produces a block that includes the relevant transactions.

Protocol fees are only paid by a user if their action is successful - for example if you try and register a ticker that has already been registered, you won't be charged the 25 POLYX protocol fee.

## Fee Subsidization

To reduce friction for users, Polymesh supports transaction fee subsidization where one account (the subsidizer) can pay fees on behalf of another account. This is particularly useful for businesses wanting to cover transaction costs for their users. For more details on this feature, see the [Subsidized Accounts](/accounts/subsidized) documentation.
