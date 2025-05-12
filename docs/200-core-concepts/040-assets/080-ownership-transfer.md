---
title: Ownership Transfers
description: How to transfer asset and ticker ownership on Polymesh
tags:
  - assets
  - ownership
  - management
sidebar_label: Ownership Transfer
slug: /core/assets/ownership-transfer
---

Transferring ownership of an asset or a ticker on Polymesh is a critical operation that allows the current issuer/owner to hand over full control to another identity. This is distinct from transferring asset balances and involves the rights to manage, configure, and control the asset or ticker. Tickers are unique but can be unlinked from an asset, allowing the ticker to be transferred to a new asset.

## Asset Ownership Transfer

Asset ownership transfer is a two-step process that uses the Polymesh [Authorizations](/authorizations) framework:

1. **Initiation (Authorization):** The current owner (issuer) initiates a transfer by calling `identity::add_authorization` to create an authorization request of type `TransferAssetOwnership` for the target identity.
2. **Acceptance:** The target identity must accept the authorization by calling `asset::accept_asset_ownership_transfer` and providing the associated authorization request ID for the transfer to complete. Until accepted, the transfer can be canceled by the original owner or rejected by the target identity using `identity::remove_authorization`.

Only the current asset owner can initiate a transfer of ownership.

:::info
If there is a **Ticker** linked to an asset, the ownership of that ticker will also transfer to the new asset owner.
:::

:::warning Important Warning
**Transferring asset ownership does NOT automatically add the new owner as an asset agent or remove existing asset agents.**

Asset agents are managed independently of ownership. As part of the asset transfer, the previous owner should make the new owner a full agent of the asset. After a transfer, the new owner should review and update the list of asset agents and their permissions to ensure only trusted parties retain access. Failing to do so may leave previous agents with unintended control over the asset.

See [Asset Agents & Permissions](/asset-agents) for more information.
:::

## Ticker Ownership Transfer (Linking & Unlinking)

Tickers are unique symbols that can be linked to assets for a more human-readable way to identify an asset and for discoverability. Ticker ownership can also be transferred between identities using a similar authorization and acceptance process. A ticker with an active registration, or one that is fully owned and not linked to an asset, can be transferred.

- **Linking a Ticker:** Associates a registered ticker with an asset. Only the ticker owner can perform this action.
- **Unlinking a Ticker:** Removes the association between a ticker and an asset. Only the asset owner or authorized agent can perform this action.
- **Transferring Ticker Ownership:** The target identity must accept the authorization by calling `asset::accept_ticker_transfer` and providing the associated authorization request ID for the transfer to complete. Until accepted, the transfer can be canceled by the original owner or rejected by the target identity using `identity::remove_authorization`.

### Ticker Transfer Process

1. **Unlinking a Ticker:** If the ticker is currently linked to an asset and is not being transferred with the asset, it should first be unlinked by calling `asset::unlink_ticker_from_asset_id`.
2. **Initiation (Authorization):** The current owner initiates a ticker transfer by calling `identity::add_authorization` to create an authorization request of type `TransferTicker` for the target identity.
3. **Accept Transfer:** The new owner accepts the authorization to complete the transfer.
4. **Linking a Ticker:** Once the ownership has transferred, the new owner can link the ticker to a new asset by calling `asset::link_ticker_to_asset_id`.

## Summary

Transferring asset or ticker ownership is a powerful feature for managing the lifecycle of assets on Polymesh. Always ensure that after a transfer, agent permissions and related controls are reviewed and updated as needed to maintain security and compliance.
