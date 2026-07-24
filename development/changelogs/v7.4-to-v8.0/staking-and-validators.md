# Staking & Validators Changelog - v7.4 to v8.0

> Breaking changes to the Staking pallet in Polymesh chain v8 - the new Validators pallet, bond/controller signature changes, paged payouts, and ledger migration.

This page covers changes to the `Staking` pallet and the new `Validators` pallet. It is part of the [v7.4 → v8.0 changelog](./010-overview.mdx).

**Audience:** anyone calling staking extrinsics directly, running tooling against staking events/storage, or operating a validator node.

For CLI and node-operation changes (session keys, node keys, pruning), see [Node operators](#node-operators) below, which points to the already-updated operational guides.

**Reading staking state (indexers, dashboards, exchanges)? Start here.** Most of this page is organised by chain internals (extrinsics → events → storage → runtime API), but several v8 changes alter what read-only queries **return** without ever throwing an error — deprecated-but-still-present storage, relocated events, and `Option`-ified maps. Because these don't fail loudly, they surface as missing or stale data in your app rather than a failed call. Review these before upgrading:

- **Exposure reads:** `ErasStakers` / `ErasStakersClipped` are no longer written for post-upgrade eras. Reading them for a current era succeeds but returns empty exposure — migrate to `ErasStakersOverview` + `ErasStakersPaged` (paged). See [section 12](#12-exposure-storage-is-now-paged--old-exposure-maps-are-no-longer-populated).
- **Event subscriptions:** the permissioning events (including `InvalidatedNominators`) are now emitted by the `Validators` pallet, not `Staking` — a subscription filtered by `section === 'staking'` will miss them. See [section 1](#1-permissioning-calls-events-and-errors-moved-to-validators).
- **`Payee` reads:** now `OptionQuery` — handle the `None` case (a bond with no payee configured). See [section 12](#12-exposure-storage-is-now-paged--old-exposure-maps-are-no-longer-populated).
- **Nomination limits:** the `MaxNominations` runtime _constant_ is gone — query the limit via the `StakingApi::nominations_quota(balance)` Runtime API instead (effectively 16). Separately, `MaxNominatorRewardedPerValidator` is replaced by `MaxExposurePageSize` (64) with paging. See [section 11](#11-maxnominations-constant-removed--query-the-limit-via-a-runtime-api) and [section 12](#12-exposure-storage-is-now-paged--old-exposure-maps-are-no-longer-populated).
- **RPC:** `staking_getCurve` JSON-RPC is removed; the new `StakingApi` methods (`nominations_quota`, `eras_stakers_page_count`, `pending_rewards`) are `state_call`-only, with no JSON-RPC wrapper. See [Runtime APIs & RPC](./120-runtime-apis-and-rpc.mdx#stakingapi--method-set-fully-replaced).

---

## Overview

In chain v7, `Staking` was a single Polymesh-specific pallet combining standard staking mechanics (bonding, nominating, payouts) with Polymesh's permissioned-validator governance (which identities may run a validator, commission caps, slashing switches). In chain v8, that pallet is split in two:

- **`Staking`** (runtime index 17) — the standard upstream `pallet-staking`.
- **`Validators`** (runtime index 16) — a new Polymesh pallet holding everything permissioning-related.

The two are wired together: `pallet_staking::Config::Permissioned = Validators`, so `Staking` calls into `Validators` to check whether an identity is allowed to validate. `Validators` also owns the reward-curve/inflation configuration (`EraPayout = pallet_validators::PolymeshConvertCurve<...>`).

If your integration calls the permissioning extrinsics below, or depends on the old combined pallet, update it — the calls didn't disappear, but they now live at a different pallet index.

## Breaking changes

### 1. Permissioning calls, events, and errors moved to `Validators`

These calls move from `Staking` to `Validators` (index 16) unchanged in signature:

- `add_permissioned_validator`
- `remove_permissioned_validator`
- `change_slashing_allowed_for`
- `update_permissioned_validator_intended_count`
- `chill_from_governance`
- `set_commission_cap`

The v7.4 `payout_stakers_by_system` call is **not** among them — it is removed entirely in v8, along with the scheduler-driven automatic reward payout it backed. See [section 14](#14-automatic-reward-payout-mechanism).

Along with the events `PermissionedIdentityAdded`, `PermissionedIdentityRemoved`, `InvalidatedNominators`, `SlashingAllowedForChanged`, `RewardPaymentSchedulingInterrupted`, `CommissionCapUpdated`, and errors `StashIdentityDoesNotExist`, `StashIdentityNotPermissioned`, `IdentityIsAlreadyPermissioned`, `IntendedCountIsExceedingConsensusLimit`, `IdentityNotFound`, `ValidatorNotFound`, `CommissionTooHigh`, `CommissionUnchanged`.

These events are now emitted by the `Validators` pallet (index 16), not `Staking`. **Any event subscription filtered by pallet/section name — e.g. `section === 'staking'` — will silently stop seeing them.** Re-point those filters at `Validators`. Note the asymmetry: the extrinsics that a nominator or validator actually signs (`nominate`, `bond`, `validate`, and so on) stay on `Staking`, while these permissioning/administration events moved to `Validators` — so the pallet that emits an event is no longer necessarily the pallet the triggering call lives on.

`Validators` also declares a `Nominated` event, but nothing in v8 actually emits it. The upstream `pallet-staking` doesn't have a nomination event at all, and this Polymesh-specific one (which used to include the nominator's identity) wasn't reintroduced when the pallet split happened. Don't build tooling that waits for it.

One error is renamed as part of this move, reflecting the DID-only terminology shift: `StashIdentityNotCDDed` / `IdentityIsMissingCDD` → `IdentityIsInactive`.

### 2. `bond` no longer takes a controller

```
// v7.4
bond(controller: AccountIdLookup, value: Compact<Balance>, payee: RewardDestination)

// v8.0
bond(value: Compact<Balance>, payee: RewardDestination)
```

### 3. `set_controller` no longer takes an argument

```
// v7.4
set_controller(controller: AccountIdLookup)

// v8.0
set_controller()
```

Calling `set_controller` now always resets the controller **to the stash address** — you can no longer point the controller at a different account. It errors with `AlreadyPaired` if the stash is already its own controller. Existing bonds that already have a separate controller keep working after the upgrade; nothing forces them onto the controller-less model. Migration is opt-in and stash-initiated: the stash owner calls `set_controller` (or the admin-only `deprecate_controller_batch`, below) whenever they choose to. `nominate` and other controller-gated calls are still signed by whichever account is currently the controller — for a stash that hasn't migrated, that's still the separate controller account, not the stash.

### 4. `chill_other` takes a stash, not a controller

```
// v7.4
chill_other(controller: AccountId)

// v8.0
chill_other(stash: AccountId)
```

### 5. New calls

| Call                                                                    | Purpose                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payout_stakers_by_page(validator_stash, era, page)`                    | Pays out a single page of a validator's era rewards. Replaces the unpaged `payout_stakers` for validators with large nominator sets                                                                                                                                                           |
| `update_payee(controller)`                                              | Re-reads and re-stores the reward destination for a controller whose payee configuration needs refreshing                                                                                                                                                                                     |
| `deprecate_controller_batch(controllers)`                               | Governance-only call (not self-service) that migrates a batch of stashes still using a separate controller to the controller-less model. There is no plan to force-migrate legacy controllers this way — migration is expected to happen via individual stash owners calling `set_controller` |
| `restore_ledger(stash, maybe_controller, maybe_total, maybe_unlocking)` | Admin call to repair a corrupted staking ledger                                                                                                                                                                                                                                               |
| `migrate_currency(stash)`                                               | Migrates a stash's bonded balance from the old `Currency` locks to `Fungible` holds                                                                                                                                                                                                           |
| `manual_slash(validator_stash, era, slash_fraction)`                    | Admin call to apply a slash directly, outside the normal offence-reporting path                                                                                                                                                                                                               |

### 6. `Rewarded` event drops `identity`, adds `dest`

```
// v7.4
Rewarded { identity: IdentityId, stash: AccountId, amount: Balance }

// v8.0
Rewarded { stash: AccountId, dest: RewardDestination<AccountId>, amount: Balance }
```

`dest` is one of `RewardDestination::Staked` (paid to the stash and re-bonded), `::Stash` (paid to the stash, not re-bonded), `::Account(AccountId)` (paid to an arbitrary account), or the deprecated `::Controller` (paid to the controller — still decodable, but no longer settable going forward). `Rewarded` tells you the destination _policy_, not necessarily a single credited account in an easily-parseable way for `Staked`/`Stash` — for a definitive record of which account was actually credited and by how much, use the accompanying `balances.Deposit { who, amount }` event instead (see [Balances & Transfers](./020-balances-and-transfers.mdx)). Every reward payout mints funds via the standard `pallet-balances` deposit path, which always emits `Deposit`, regardless of which `RewardDestination` variant is in effect.

### 7. `PayoutStarted` event gains paging fields, and payouts can span multiple pages

```
// v7.4
PayoutStarted { era_index: EraIndex, validator_stash: AccountId }

// v8.0
PayoutStarted { era_index: EraIndex, validator_stash: AccountId, page: Page, next: Option<Page> }
```

In v7.4, a validator's era reward was always a single unpaged payout: one `PayoutStarted` followed by one `Rewarded` per nominator. In v8, large nominator sets are split across multiple pages (via `payout_stakers_by_page`), so a single validator's era reward can now produce **multiple** `PayoutStarted` + `Rewarded` groups — one per page, each with its own `page` index and a `next` field pointing at the next page (or `None` on the last one). Don't assume "one `PayoutStarted` per validator per era" when indexing payouts; group by `(validator_stash, era_index, page)` instead.

Use the new `StakingApi::eras_stakers_page_count(era, validator_stash)` Runtime API to find out how many pages a validator's era reward has, and `StakingApi::pending_rewards(era, account)` to check whether a specific account still has an unpaid page — see [Runtime APIs & RPC](./120-runtime-apis-and-rpc.mdx#stakingapi--method-set-fully-replaced). Unlike the old `staking_getCurve`, none of these new methods have a JSON-RPC wrapper — they're `state_call`-only.

### 8. `set_staking_configs` gains `max_staked_rewards`

```
// v7.4
set_staking_configs(min_nominator_bond, min_validator_bond, max_nominator_count, max_validator_count, chill_threshold, min_commission)

// v8.0
set_staking_configs(min_nominator_bond, min_validator_bond, max_nominator_count, max_validator_count, chill_threshold, min_commission, max_staked_rewards: ConfigOp<Percent>)
```

Governance-only call; the new parameter caps what share of total issuance can be paid out as staking rewards, tracked in the new `MaxStakedRewards` storage.

### 9. New errors on `Staking`

`InvalidPage`, `ControllerDeprecated`, `CannotRestoreLedger`, `RewardDestinationRestricted`, `NotEnoughFunds`, `VirtualStakerNotAllowed`, `CannotReapStash`, `AlreadyMigrated`, `Restricted`. Match by name — index positions are not stable across this upgrade.

### 10. Removed calls (no replacement)

`update_permissioned_validator_intended_count` and `chill_from_governance` exist on `Staking` in v7.4; in v8.0 the same-named calls exist only on `Validators` (see #1) — calling them on `Staking` no longer works.

### 11. `MaxNominations` constant removed — query the limit via a Runtime API

v7.4 exposed `Staking::MaxNominations` as a queryable runtime constant (`= 16`). v8 replaces it with `type NominationsQuota = pallet_staking::FixedNominationsQuota<16>` — the effective limit is still 16 nominations per nominator, but it's no longer exposed as a simple `Get<u32>` constant. The limit is still queryable, just through a different mechanism: call the new `StakingApi::nominations_quota(balance)` Runtime API, which is the correct way to read it now (see [Runtime APIs & RPC](./120-runtime-apis-and-rpc.mdx#stakingapi--method-set-fully-replaced)). If your tooling reads `api.consts.staking.maxNominations`, switch to that Runtime API call; the returned value is currently `16` for any balance.

### 12. Exposure storage is now paged — old exposure maps are no longer populated

**This is the change most likely to silently break a read-only integration.** v8 adopts the upstream _paged-exposure_ model. The old exposure maps are still present in metadata — so any client that reads them keeps compiling and running — but they are **no longer written for eras after the upgrade**:

**Deprecated (no longer populated):** `ErasStakers`, `ErasStakersClipped`

These maps remain in metadata for backwards compatibility and still contain data for historical (pre-upgrade) eras, but nothing writes them for eras after the v8 upgrade — the election result now populates only `ErasStakersOverview` + `ErasStakersPaged`. A query against them for a current/active era **succeeds and returns empty exposure** (`others: []`); it does not error. Any logic that reads them to determine nominator↔validator relationships, active-stake amounts, or "am I staking this era" status will silently see nothing for every post-upgrade era.

Migrate all exposure reads to the paged model:

- `ErasStakersOverview(era, validator) -> Option<PagedExposureMetadata>` → `{ total, own, nominator_count, page_count }`
- `ErasStakersPaged((era, validator, page)) -> Option<ExposurePage>` → `{ page_total, others }`

A validator's nominator set (`others`) is now split across `page_count` pages of at most `MaxExposurePageSize` (64) entries each. To reconstruct a validator's full exposure you must read the overview for `total`/`own` and concatenate `others` from every page (`0 .. page_count`), e.g. via `api.query.staking.erasStakersPaged.entries(era, validator)`.

**Determining whether an account is actively staking in an era:** iterate the elected validators (`ErasStakersOverview.entries(era)`), read each validator's pages from `ErasStakersPaged`, and check whether the stash appears in any page's `others`. Do **not** rely on `ErasStakersClipped.others`, which previously held this and is now empty for current eras. For unpaid-reward detection specifically, prefer the new `StakingApi::pending_rewards(era, account)` Runtime API. (This mirrors what the runtime itself now does: its own exposure check reads `ErasStakersPaged` for current eras and only falls back to `ErasStakers` for pre-upgrade eras.)

#### Other storage

Remaining new storage backing the paged model: `ClaimedRewards` (which pages of a validator's era reward have been claimed), `VirtualStakers` and `CounterForVirtualStakers` (accounts that stake without a real bonded balance, e.g. via a pooled-staking design — see the `VirtualStakerNotAllowed` error above), and `MaxStakedRewards` (backing `set_staking_configs` above). `Payee` changes from a `ValueQuery` map (missing entries decode to a default) to an `OptionQuery` map (missing entries decode to `None`) — reads must now handle the `None` case (a bond with no payee configured), e.g. `.unwrapOrDefault()` or an explicit `isNone` check, rather than assuming a value is always returned. Entries that used to decode to a default now return `None`.

Removed storage: `OffendingValidators`, `PermissionedIdentity`, `PolymeshStorageVersion`, `SlashingAllowedFor`, `ValidatorCommissionCap` — all governance/permissioning state that moved to `Validators` (see #1).

#### Constants

Removed constants: `FixedYearlyReward`, `MaxNominatorRewardedPerValidator`, `MaxValidatorPerIdentity`, `MaxVariableInflationTotalIssuance` — reward-curve and permissioning parameters that are now owned by `Validators`' config instead. New constants: `MaxExposurePageSize` (64) caps how many nominators fit on one exposure page; `MaxValidatorSet` (1000) caps the validator set size.

`MaxExposurePageSize` is the **replacement concept for the removed `MaxNominatorRewardedPerValidator`**. Rather than clipping a validator's rewarded nominators to a single cap, v8 paginates them: a validator with more than 64 nominators now has its exposure — and therefore its reward payout — split across multiple pages of up to 64 each (see [section 7](#7-payoutstarted-event-gains-paging-fields-and-payouts-can-span-multiple-pages)), instead of the excess being clipped off.

### 13. `Session` pallet: new events, `DisabledValidators` gains severity

Alongside the `SessionKeys` change (BEEFY key, see [Node operators](#node-operators) below), `Session` gains three new events: `NewQueued` (new session keys queued for the next session), `ValidatorDisabled { validator }`, and `ValidatorReenabled { validator }`. The `DisabledValidators` storage changes from a plain list of validator indices to `Vec<(u32, OffenceSeverity)>`, tracking how severely a validator was disabled — which is what makes `ValidatorReenabled` (partial reinstatement after a lesser offence) possible. New constant `KeyDeposit`.

### 14. Automatic reward payout mechanism

Polymesh pays validator/nominator era rewards automatically — operators do not have to call `payout_stakers` themselves. In v7.4 this was driven by a scheduler-based mechanism inside the pallet, exposed through the `payout_stakers_by_system` call. In v8 that scheduler is gone: automatic payouts run in each block's `on_initialized` hook instead, and `payout_stakers_by_system` no longer exists.

The externally observable consequences:

- **`payout_stakers_by_system` is removed** with no direct replacement (the automatic mechanism is now internal). The manual `payout_stakers` / `payout_stakers_by_page` calls are unaffected and still available.
- **Two new `Validators` events** report the outcome of the automatic payout (see table below).
- `RewardPaymentSchedulingInterrupted { account_id, era, error }` remains declared on `Validators`, but no longer reflects an active scheduler.

| New `Validators` event                                  | Meaning                                                                                  |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ValidatorPayoutFailed { validator, era, page, error }` | A validator's automatic payout for a given era page failed (carries the `DispatchError`) |
| `AutomaticPayoutFinished { era }`                       | The automatic payout for an era has finished                                             |

If you index reward payouts, keep grouping the underlying `PayoutStarted` / `Rewarded` / `balances.Deposit` events as described in [section 6](#6-rewarded-event-drops-identity-adds-dest) and [section 7](#7-payoutstarted-event-gains-paging-fields-and-payouts-can-span-multiple-pages) — those are unchanged. What changed is *when* and *how* the automatic payout is triggered, plus the new success/failure events above.

## Node operators

Node-level setup, session keys, and CLI flags are covered in the [Validator Node Guide](/developer-resources/validator-node-guide/) and [Running a Node with Docker](/node/docker), both already updated for v8. Highlights relevant if you're upgrading:

- A fifth session key (**BEEFY**, `ecdsa`) is now required alongside GRANDPA, BABE, I'm Online, and Authority Discovery — generate session keys with `author_rotateKeysWithOwner` (or the container `rotate` utility), which now also requires your stash account ID and returns an ownership `proof`.
- Node network keys are no longer auto-generated — provision and back up a persistent node key explicitly.
- State/block pruning is configured with `--state-pruning` and `--blocks-pruning`; defaults are `256` and `archive-canonical`.
- The `--operator` CLI flag is removed. It was an alias for `--validator` in v7.4; only `--validator` works on v8. Update any startup scripts that used `--operator`.
- `--ws-port` is removed. HTTP and WebSocket JSON-RPC are served from the same endpoint, configured with `--rpc-port`.

See those guides for full steps — this page only covers pallet-level (call/event/error) changes.

## Migration checklist

1. Update `bond` calls to drop the `controller` argument.
2. Update `set_controller` calls to drop the `controller` argument — it now only ever resets the controller to the stash. Legacy stashes with a separate controller keep working unmigrated; there's no self-service call to force it, and no planned forced migration.
3. Update `chill_other` calls to pass a stash instead of a controller.
4. Move any calls to `add_permissioned_validator`, `remove_permissioned_validator`, `change_slashing_allowed_for`, `update_permissioned_validator_intended_count`, `chill_from_governance`, or `set_commission_cap` from `Staking` to `Validators`. Don't wait on the `Nominated` event — it's declared but never emitted. Also stop calling `payout_stakers_by_system` — it's removed with no replacement (see [section 14](#14-automatic-reward-payout-mechanism)).
5. Re-point any event subscription filtered by `section === 'staking'`: the permissioning events (`PermissionedIdentityAdded`, `InvalidatedNominators`, `CommissionCapUpdated`, and the rest listed in [section 1](#1-permissioning-calls-events-and-errors-moved-to-validators)) are now emitted by the `Validators` pallet.
6. Replace `ErasStakers` / `ErasStakersClipped` exposure reads with `ErasStakersOverview` + `ErasStakersPaged` — they still exist in metadata but return empty exposure for every post-upgrade era (see [section 12](#12-exposure-storage-is-now-paged--old-exposure-maps-are-no-longer-populated)). Reconstruct a validator's nominator set by concatenating `others` across all `page_count` pages, and use `StakingApi::pending_rewards`/`eras_stakers_page_count` for reward status.
7. If you page through or index validator payouts, switch to `payout_stakers_by_page` and group by `(validator_stash, era_index, page)` rather than assuming one payout per validator per era — handle the new `page`/`next` fields on `PayoutStarted`.
8. Update `Rewarded` event decoding for the `dest` field replacing `identity`; for a reliable record of which account was actually credited and how much, consume `balances.Deposit` alongside it.
9. If you read the nomination limit from the `Staking::MaxNominations` constant, that constant is gone — the value (16) is unchanged, but query it via the `StakingApi::nominations_quota(balance)` Runtime API instead of a runtime constant.
10. If you query `Staking::Payee` storage directly, handle `None` — it's no longer a `ValueQuery` map.
11. If you operate a validator node, generate a BEEFY session key and review the [Validator Node Guide](/developer-resources/validator-node-guide/) before upgrading.

For the complete literal list of every added/removed/modified call, event, error, storage item, and constant on `Staking`, `Validators`, and `Session`, see the [Full Pallet API Reference](./110-pallet-api-reference.mdx). For the `StakingApi` Runtime API changes (`get_curve` removed, `nominations_quota`/`eras_stakers_page_count`/`pending_rewards` added) and the removal of the `staking_getCurve` JSON-RPC method, see [Runtime APIs & RPC](./120-runtime-apis-and-rpc.mdx).
