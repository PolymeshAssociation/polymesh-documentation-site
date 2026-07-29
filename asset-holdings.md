# Asset Holdings

> How identities hold assets on Polymesh, via portfolios or directly on an account.

## Overview

In Polymesh, all [assets](/core/assets) (excluding the network native token [POLYX](/polyx)) are held at the [identity](/identity) level. This allows Polymesh to enforce [compliance](/compliance) in real time based on claims also held at the identity level.

There are two ways an identity's assets can be held:

- **[Portfolios](/portfolios)**: a logical grouping of assets, identified by a DID and portfolio number. This is the default and most feature-rich holding model, supporting multiple portfolios per identity, custody delegation, and portfolio-level key permissions.
- **Account IDs**: assets held directly against a signing key's account, without an intervening portfolio.

Both holding types are represented on-chain by the `AssetHolder` type (`Account` or `Portfolio(PortfolioId)`), used consistently across the `Asset`, `Nft`, and `Settlement` pallets. Calls that specify where to issue, redeem, or move assets take an `AssetHolderKind` (`Account`, `DefaultPortfolio`, or `UserPortfolio`) to select which of the two — and which portfolio, if applicable — to target.

## Account ID Balances (`AssetHolder::Account`)

Account ID balances let a signing key hold assets directly, identified as an `AssetHolder::Account` rather than an `AssetHolder::Portfolio`. This is useful for simplified transfers to an Account ID without pre-fetching a DID and for workflows that do not require advanced portfolio features.

Key points:

- The balance is associated with a signing key, but compliance still applies based on the key's DID: the chain resolves the account to a DID internally via its key record, and errors if the account isn't linked to any identity. This is not a DID-free holding model, just first-class account-level holding.
- The settlement engine is still used for transfers, and legs can move assets directly to or from an account or a portfolio, in any combination — see [Settlement](/settlement).
- Assets can also move directly between two `AssetHolder`s (accounts or portfolios) via `settlement::transfer_funds`, which usually executes immediately without creating a settlement instruction — see [Direct Transfers](/settlement#direct-transfers-transfer_funds).
- Account ID balances do not support custody — see [Custody Management](/portfolios/custody).
- Account ID balances are not supported by portfolio-level secondary-key permissions.
- Fungible asset holders can grant another account an allowance to spend on their behalf, similar to the ERC-20 `approve`/`transferFrom` pattern — see [Allowances](/core/assets/fungible#allowances). NFTs have no allowance concept.

## Portfolio Balances (`AssetHolder::Portfolio`)

Portfolios allow users to organize their assets underneath their identity, and to flexibly assign key permissions and custody. A particular asset can have different balances across multiple portfolios within the same identity. Portfolios remain the default and most full-featured way to hold assets — see [Portfolios](/portfolios) for portfolio management (creating, renaming, and deleting portfolios, moving funds between them, pre-approving asset receipt) and [Custody Management](/portfolios/custody) for delegating control of a portfolio to another identity.

## AssetHolderKind and AssetHolder

`Asset::issue`/`Asset::redeem` and their NFT equivalents (`issue_nft`/`redeem_nft`) take an `AssetHolderKind` parameter to select whether newly issued or redeemed tokens target the signing key's account or a portfolio under their DID — see [Fungible Assets](/core/assets/fungible) and [Non-Fungible Assets](/core/assets/nft). Settlement legs, and calls like `settlement::transfer_funds`, take an `AssetHolder` for the same purpose — see [Settlement](/settlement).
