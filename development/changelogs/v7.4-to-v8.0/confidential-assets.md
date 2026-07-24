# Confidential Assets Changelog - v7.4 to v8.0

> Polymesh chain v8 adds the new Confidential Assets (PCA) pallet - available on Testnet and Develop, not yet on Mainnet.

This page covers the new `ConfidentialAssets` pallet (Polymesh Confidential Assets, "PCA"). It is part of the [v7.4 → v8.0 changelog](./010-overview.mdx). For the concepts, cryptography, and workflows, see the [Confidential Assets](/confidential-assets) documentation — this page only covers chain-level facts (availability, call surface, pallet identity), and links to the conceptual docs rather than re-explaining them.

**Audience:** anyone evaluating or building against Polymesh Confidential Assets.

---

## Status: not on Mainnet, pre-release

`pallet_confidential_assets` is genuinely new in v8 — there is no v7.4 equivalent to diff against. It is a pre-release feature that has not yet completed a comprehensive code audit, and it is **not included in the Mainnet runtime at all**: `ConfidentialAssets` does not appear in `pallets/runtime/mainnet/src/runtime.rs`'s pallet list. It is included in the Testnet and Develop runtimes (pallet index 70 on Testnet). Previously it was only available on an internal Devnet; v8 is what makes it reachable on Testnet.

Do not build production integrations against Confidential Assets yet, and expect the pallet's interface to continue changing before it reaches Mainnet.

## What it is

Confidential Assets provides sender/receiver/asset/value-confidential transfers using zero-knowledge proofs, while still supporting regulated-market workflows (receiver affirmation, multi-leg settlement, asset-specific auditor/mediator compliance access). The underlying protocol is documented in the [P-DART paper](https://assets.polymesh.network/P-DART-v1.pdf), building on [DART](https://eprint.iacr.org/2025/239); the ZK-proof implementation itself lives in a separate library, [`polymesh-dart`](https://github.com/PolymeshAssociation/polymesh-dart), which this pallet calls into.

For the full model — commitments, curve-tree accumulators, nullifiers, auditors vs. mediators, the settlement/affirmation lifecycle, and anonymous fee payment — see the [Confidential Assets](/confidential-assets) docs. The rest of this page is a chain-level reference.

## Call surface

21 calls, grouped by the conceptual doc that covers them:

**Onboarding & accounts** — see [Onboarding & Accounts](/confidential-assets/onboarding-accounts)

- `register_accounts`, `register_encryption_keys`

**Asset creation & issuance** — see [Asset Operations](/confidential-assets/asset-operations)

- `create_asset`, `register_account_assets`, `mint_asset`

**Settlement** — see [Settlement Workflow](/confidential-assets/settlement-workflow)

- `create_settlement`, `sender_affirmation`, `receiver_affirmation`, `mediator_affirmation`, `sender_update_counter`, `sender_revert_affirmation`, `receiver_revert_affirmation`, `receiver_claim`, `batched_settlement`, `execute_instant_settlement`, `instant_sender_affirmation`, `instant_receiver_affirmation`

**Anonymous fees** — see [Anonymous Fees](/confidential-assets/anonymous-fees)

- `register_fee_accounts`, `topup_fee_accounts`, `submit_batched_proofs`, `relayer_submit_batched_proofs`

The pallet also defines 26 events and 46 errors — too many to usefully enumerate here; see `pallets/confidential-assets/src/lib.rs` in the Polymesh repository for the authoritative list.

## Chain-level facts

- **Fee account:** the pooled system account referenced in [Anonymous Fees](/confidential-assets/anonymous-fees) is a real, POLYX-backed account (`Currency = Balances` in the pallet's `Config`), derived deterministically from the pallet ID `pm/dartf`.
- **Curve-tree root update cadence is network-tuned.** On Testnet, asset/account curve-tree roots update at most every 10 minutes, with a maximum root age of 24 hours (assets) or 2 days (accounts/fee accounts). Develop uses much shorter intervals (18 seconds / 1–2 minutes) for fast local iteration. These are consensus-critical `Config` constants, not client-side settings.
- **Sizing limits** (`MaxSettlementLegs`, `MaxAssetAuditors`, `MaxAssetMediators`, `MaxAssetEncryptionKeys`, etc.) also differ slightly between Testnet and Develop — check the network you're targeting rather than assuming one set of limits.

## Availability checklist

1. Target **Testnet** — that's where Confidential Assets is publicly available going forward. The `Develop` runtime also includes the pallet for local node development, but the public Devnet deployment is being retired, so don't build against it as an ongoing target. The pallet will fail or be entirely absent on Mainnet.
2. Treat the interface as unstable pending the pending security audit; do not build production integrations against it yet.
3. Read the [Confidential Assets](/confidential-assets) docs before writing any code against this pallet — the account/settlement model is materially different from Polymesh's plaintext asset pallets and isn't self-explanatory from call signatures alone.
4. If you're upgrading a Devnet-based proof of concept to v8 Testnet, re-check network-specific constants (curve-tree root update intervals, sizing limits) rather than assuming Devnet values carry over.
