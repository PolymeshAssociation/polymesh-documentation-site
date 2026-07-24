# Onboarding

> Identity onboarding and DID registration

## Overview

Polymesh users who participate in **asset** and **identity** related transactions must have an on-chain identity (DID). Accounts used solely for POLYX transfers and staking (excluding validator activities) are not subject to this requirement.

From Polymesh v8, onboarding is to receive a DID and supports two paths:

- **Self-registration**: The user calls `identity::self_register_did` for their own key and pays the transaction fee.
- **Registrar-assisted registration**: A permissioned DID registrar registers a DID for a user key using `identity::register_did`, and pays the transaction fee.

If you are new to Polymesh, a practical flow is:

1. Set up your wallet
2. Acquire POLYX
3. Complete DID onboarding when you want to use identity and asset related features

This helps reduce onboarding friction for users who only need basic POLYX transfers or staking. If you self-register a DID, you will need POLYX to pay the registration fee.

:::note

Onboarding to obtain a DID is not a substitute for issuer-specific KYC requirements on regulated assets. Asset issuers can enforce additional compliance requirements through claims and compliance rules.

:::

## Connect Wallet and Select Key

When you first create an account, it appears as an unassigned key, meaning no on-chain identity (DID) is linked yet.

![new account](images/onboarding/new_account.png)

Open the [Polymesh Portal Mainnet](https://portal.polymesh.network/) or [Polymesh Portal Testnet](https://portal.polymesh.live/), then connect your wallet and select the key you want to onboard.

![connect wallet](images/onboarding/connect_wallet.png)

:::note
You can also use "Manually enter a wallet key" for view-only access. To complete onboarding and sign transactions, use a key from a connected supported wallet.
:::

Once connected, the Overview page shows the selected key and its current identity status.

![connect address](images/onboarding/connect_account.png)

## Complete Onboarding (Self-Assign DID)

For keys that are not yet linked to an identity, Portal should show "This key is not linked to an identity" and a `Get On-Chain Identity (DID)` button.

Self-assigning a DID submits an on-chain transaction, where the user pays the transaction fee. Therefore the user must have some POLYX in the signing key before proceeding.

When the user clicks this action:

1. Portal prepares an `identity::self_register_did` transaction for the selected key.
2. The wallet signing interface opens and prompts the user to sign.
3. After the user signs, the transaction is submitted.
4. After successful execution, the key is linked to a new DID.

### Registrar-assisted onboarding (optional)

DID registrars are a permissioned network role approved through on-chain governance.

Platforms may use registrar-assisted onboarding when a third party should assign the DID, for example:

- to sponsor onboarding fees for users
- to support users who do not yet hold POLYX
- to keep onboarding managed by platform operations rather than end users
- to support platform models where available signing methods are intentionally restricted

In this flow, the registrar submits DID registration for the user key and pays the fee on the user's behalf.

### DID persistence across platforms

Once assigned, a DID is linked to the key on-chain, not to the platform that submitted the registration transaction.

- If that same key is later used in another wallet or platform, the DID remains valid.
- The registrar that originally assigned the DID cannot revoke that DID assignment through the registrar role.

This differs from historical CDD claims (pre v8), which were separate claim records and could be updated or revoked.

### Testnet onboarding

On the [Testnet instance of the Polymesh Portal](https://portal.polymesh.live/), onboarding is done by a DID registrar and seeds accounts with test POLYX for experimentation.

## Extrinsic reference

- `identity::self_register_did()`
  - Permissionless: registers a DID for the caller's own key.
- `identity::register_did(target_account)`
  - Registrar-gated: registers a DID for the target account. Callable only by an active DID registrar.
- `identity::cdd_register_did` and `identity::cdd_register_did_with_cdd`
  - Deprecated in v8. No longer attach a `CustomerDueDiligence` claim; registrar-gated legacy paths retained temporarily for transition.

## Links

- [Polymesh Portal Mainnet](https://portal.polymesh.network)
- [Polymesh Portal Testnet](https://portal.polymesh.live)
