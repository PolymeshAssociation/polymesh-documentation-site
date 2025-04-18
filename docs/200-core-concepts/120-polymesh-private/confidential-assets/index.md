---
sidebar_position: 1
title: Confidential Assets
description: 'Overview of Confidential Assets'
subsite: polymesh-private-docs
id: 'confidential-assets-overview'
slug: '/confidential-assets/overview'
tags: ['confidential-assets', 'overview']
---

## Overview

:::note Polymesh Private Feature
Confidential Assets are exclusively available on [Polymesh Private](/polymesh-private) deployments and are not currently supported on the public Polymesh network.
:::

Confidential Assets in Polymesh enable users to transact in assets using a shared global ledger while preserving the privacy of asset balances and transaction amounts.

Confidential Assets offer a range of features tailored for use across regulated markets, including:

- **Issuance and Redemption (minting/burning):** This feature allows for the creation and destruction of assets.
- **[Settlement Instructions](./settlement.md):** These instructions enable atomic settlement of asset transfers, ensuring all counterparties affirm a transaction.
- **Mediators:** These are optional entities that must approve asset or venue settlement instructions.
- **Auditors:** Optional entities capable of decrypting zero-knowledge proofs of asset or venue settlement instructions.
- **Freezing transfers:** Issuers have the option to freeze all transfers or only specific confidential accounts.

## Confidential Accounts

A Confidential Account is required to store a confidential asset balances on chain. These accounts utilize Twisted Elgamal cryptography and are represented on-chain by a Twisted Elgamal public key. The private key of the pair is used for zero-knowledge proof generation and decrypting proof ciphertext. Once a user generates their key pair, the public Elgamal key must be registered on-chain to associated it with the user's DID (Decentralized Identifier) to be used to store asset balances. Users can register multiple confidential accounts against a single DID.

## Confidential Amounts

Balances are stored on-chain using Twisted Elgamal Encryption, a homomorphic encryption scheme that allows encrypted balances to be combined mathematically (e.g., addition/subtraction) without decrypting the values.

When an asset is issued, the issuer's Confidential Account balance is initialized for the confidential asset. The total supply of an asset is stored as an unencrypted amount; however, individual confidential account balances are always encrypted on-chain.

## Confidential Asset On-chain Information

Confidential Assets are identified by a unique Asset ID, randomly assigned upon creation. Unlike non-confidential assets that use tickers, the use of an Asset ID makes it less obvious what actual underlying asset it represents.

When creating a Confidential Asset, the asset issuer can optionally populate a data field with information related to the token they wish to store on-chain. This data field allows an asset issuer to include plaintext or encrypted data, restricting access to specific parties.

A minimal amount of additional information is available on-chain, including:

- Asset creators DID
- Asset Total Supply (unencrypted)
- Asset Mediators DIDs (optional)
- Asset Auditors' public encryption key (optional)
- Whether settlement venue restrictions are enabled
- A list of allowed settlement venues (if restricted)
- Whether transfers are frozen for the asset

## Asset Anonymity

On-chain Asset IDs represent specific assets (e.g., TSLA). Users who wish to hide which Asset ID they are transacting can employ an anonymity set. An anonymity set is a group of decoy Asset IDs added to a [settlement instruction](./settlement.md) to prevent public observers from distinguishing which assets are being transferred.

For example, if Alice is sending 10 TSLA to Bob, she may also include additional assets (e.g., ACME, MS, GS) in her transaction, each with a transacted amount of 0. A public observer cannot distinguish between a transaction amount of 0 tokens vs. a non-zero amount, thus preventing the direct determination of which asset is being transferred. Following execution of the settlement instruction, an external observer will see that the encrypted balance for all included assets has changed, but they will not know if the encrypted balance is zero, has increased, decreased, or remained unchanged.
