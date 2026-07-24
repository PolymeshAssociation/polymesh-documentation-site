# Identity & Onboarding Changelog - v7.4 to v8.0

> Breaking changes to the Identity pallet in Polymesh chain v8 - CDD service providers renamed to DID registrars, self-service DID registration, and removal of child identities.

This page covers changes to the `Identity` pallet and the group pallet instance formerly known as `CddServiceProviders`. It is part of the [v7.4 → v8.0 changelog](./010-overview.mdx). For the conceptual model (why DID-only onboarding, what a DID registrar is), see [Identity Onboarding](/identity/onboarding) and [Roles](/identity/roles) — this page only covers the pallet-level call/event/error/storage changes.

**Audience:** anyone registering identities, verifying onboarding status, or managing DID registrars directly against the chain.

---

## Overview

Chain v8 completes a rename that runs through the whole pallet: **CDD service providers become DID registrars**. This is not a cosmetic rename — v7.4 already allowed accounts to hold POLYX and stake without a DID (see the [Balances & Transfers](./020-balances-and-transfers.mdx) changelog), and v8 extends that by adding a way to obtain a DID itself without going through a CDD-attesting authority: `self_register_did`. The old registration calls (`cdd_register_did`, `cdd_register_did_with_cdd`) still exist and are still callable — they are not removed — but they are deprecated (`since = "8.0.0"`) and no longer attach a `CustomerDueDiligence` claim: both now forward to the same claim-free registration path as `register_did`. They are retained only because, unlike `register_did`, they still accept a `secondary_keys` argument.

Child identities are also removed in v8.

## Breaking changes

### 1. `CddServiceProviders` renamed to `DidRegistrars`

The underlying pallet is unchanged — it's the same `pallet_group` instance, with identical calls (`set_active_members_limit`, `disable_member`, `add_member`, `remove_member`, `swap_member`, `reset_members`, `abdicate_membership`). Only the runtime name changes: calls, events, and errors that were routed through `CddServiceProviders` are now routed through `DidRegistrars`. Anything that references the pallet by name string breaks.

`Identity::Config::CddServiceProviders` is also renamed to `Identity::Config::DidRegistrars`, and `Identity::Config::CddHandler` is renamed to `Identity::Config::TxFeeHandler`.

### 2. `accept_primary_key` and `rotate_primary_key_to_secondary` drop the CDD authorization argument

```
// v7.4
accept_primary_key(rotation_auth_id: u64, optional_cdd_auth_id: Option<u64>)
rotate_primary_key_to_secondary(auth_id: u64, optional_cdd_auth_id: Option<u64>)

// v8.0
accept_primary_key(rotation_auth_id: u64)
rotate_primary_key_to_secondary(auth_id: u64)
```

The `Identity` authorization these calls used to consume, `AuthorizationData::AttestPrimaryKeyRotation` (a DID registrar's attestation of a primary-key rotation, formerly a CDD provider's), is now formally deprecated (`#[deprecated(note = "This authorization variant is no longer used")]`). It is **retained in the enum, not removed** (so the variant index is unchanged and pre-upgrade authorizations of this type still decode), but no v8 call creates one and `accept_primary_key` no longer consumes one. The matching `AuthorizationType::AttestPrimaryKeyRotation` is likewise retained-but-deprecated. This is the authorization-layer counterpart to the removed `change_cdd_requirement_for_mk_rotation` call and `CddAuthForPrimaryKeyRotation` storage below — stop issuing this authorization type; new code should not create it.

### 3. `cdd_register_did` and `cdd_register_did_with_cdd` no longer attach a CDD claim

Both calls are deprecated (`#[deprecated(since = "8.0.0", ...)]`) but still exist and are still registrar-gated. However their behavior changed: in v7.4 they added a `Claim::CustomerDueDiligence` claim as part of registration; in v8 they forward to the same claim-free registration path as `register_did`, so **no claim is added**. `cdd_register_did_with_cdd`'s `_expiry` argument is accepted but ignored. The only remaining reason to call these over `register_did` is that they accept a `secondary_keys` argument. To attach a `CustomerDueDiligence` claim in v8, use `add_claim` (registrar-gated for that claim type) or `gc_add_cdd_claim`.

### 4. Removed calls, with no replacement

- `invalidate_cdd_claims`
- `change_cdd_requirement_for_mk_rotation`
- `create_child_identity`
- `create_child_identities`
- `unlink_child_identity`

Both the `IdentityApi` Runtime API and its JSON-RPC wrappers lose the corresponding methods in step with this shift: `IdentityApi::is_identity_has_valid_cdd`/`identity_isIdentityHasValidCdd` and `IdentityApi::valid_cdd_claims`/`identity_validCDDClaims` are all gone in v8 — see [Runtime APIs & RPC](./120-runtime-apis-and-rpc.mdx#identityapi--two-methods-removed).

### 5. Renamed errors

| v7.4                                  | v8.0                                   |
| ------------------------------------- | -------------------------------------- |
| `UnAuthorizedCddProvider`             | `UnAuthorizedDidRegistrar`             |
| `InvalidAuthorizationFromCddProvider` | `InvalidAuthorizationFromDidRegistrar` |
| `NotCddProviderAttestation`           | `NotDidRegistrarAttestation`           |
| `TargetHasNoCdd`                      | `TargetDidInactive`                    |
| `UnauthorizedCallerDidMissingCdd`     | `UnauthorizedCallerDidInactive`        |

### 6. Removed errors

`IsChildIdentity`, `NoParentIdentity`, `NotParentOrChildIdentity` (child identities), and `AccountBasedPortfoliosCannotHaveCustodians` (superseded by the `AssetHolder` model — see [Native Asset Holdings](./040-native-asset-holdings.mdx)).

### 7. Removed events

- `CddRequirementForPrimaryKeyUpdated` (paired with the removed `change_cdd_requirement_for_mk_rotation` call)
- `CddClaimsInvalidated` (paired with the removed `invalidate_cdd_claims` call)
- `ChildDidCreated`, `ChildDidUnlinked` (child identities)
- `AssetDidRegistered` (legacy ticker-to-DID linkage)

### 8. Removed storage

`CddAuthForPrimaryKeyRotation`, `CurrentPayer`, `ChildDid`, `ParentDid`.

## New features

### `register_did` and `self_register_did`

```
register_did(target_account: AccountId)
self_register_did()
```

`register_did` is callable only by an active DID registrar, and registers a DID for `target_account` with no secondary keys and no CDD claim. `self_register_did` is fully permissionless — any account not already linked to an identity can call it to create its own DID, again with no CDD claim. Per the pallet source: _"This allows users to self onboard without needing to go through a DID registrar (formerly CDD provider). No CDD claim is added — DID existence is sufficient for onboarding."_

## What did _not_ change

- `cdd_register_did` and `cdd_register_did_with_cdd` still exist, are still registrar-gated, and still accept a `secondary_keys` argument (the one capability `register_did` doesn't have) — but see the breaking behavior change below: they no longer attach a `CustomerDueDiligence` claim.
- `gc_add_cdd_claim` / `gc_revoke_cdd_claim` (governance-council-administered CDD claims) are unchanged.
- The `CustomerDueDiligence` claim variant itself still exists in the `Claim` enum — CDD as a concept is not removed, only the requirement that basic onboarding go through it.
- `pallets/group` (the crate backing `DidRegistrars`) has no functional changes.

## Migration checklist

1. Update any code that references the `CddServiceProviders` pallet by name to `DidRegistrars`.
2. Drop the `optional_cdd_auth_id` argument from `accept_primary_key` and `rotate_primary_key_to_secondary` calls.
3. If you rely on `cdd_register_did`/`cdd_register_did_with_cdd` attaching a `CustomerDueDiligence` claim, that no longer happens in v8 — add the claim separately via `add_claim` or `gc_add_cdd_claim` if still required.
4. Stop calling `invalidate_cdd_claims`, `change_cdd_requirement_for_mk_rotation`, `create_child_identity`, `create_child_identities`, or `unlink_child_identity` — none exist on v8.
5. Update error handling for the CDD→DID-registrar error renames (#5 above), and remove handling for the child-identity errors.
6. If you need a lightweight, no-CDD-claim path to onboard new identities, use `self_register_did` (permissionless) or `register_did` (DID-registrar-gated) instead of building a claim-issuing flow.
7. If you rely on `Identity::Config::CddServiceProviders` or `::CddHandler` in custom runtime code, update to `::DidRegistrars` / `::TxFeeHandler`.

For the complete literal list of every added/removed/modified call, event, error, storage item, and constant on `Identity`, see the [Full Pallet API Reference](./110-pallet-api-reference.mdx). For the `IdentityApi` Runtime API and JSON-RPC method removals, see [Runtime APIs & RPC](./120-runtime-apis-and-rpc.mdx).
