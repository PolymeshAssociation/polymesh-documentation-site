# Polymesh v8.0 Release Notes & Migration Guide

**Status**: Work in Progress (WIP)  
**Last Updated**: April 8, 2026  
**Target Release**: May 2026 (≥4 weeks notice before mainnet upgrade)

> This document captures key changes (particularly breaking changes) for Polymesh v8.0 as we review and update documentation. This is a living document that will be refined as we go through the repository.

---

## Table of Contents

1. [POLYX / Balances - Breaking Changes](#polyx--balances---breaking-changes)
2. [Node Operations - Breaking Changes](#node-operations---breaking-changes)
3. [Wallet & Hardware Signing - Breaking Changes](#wallet--hardware-signing---breaking-changes)
4. [Validators - Breaking Changes](#validators---breaking-changes)
5. [Identity & Onboarding - Breaking Changes](#identity--onboarding---breaking-changes)
6. [RPC & API Changes](#rpc--api-changes)
7. [Deprecations](#deprecations)
8. [Notes for Integration Partners](#notes-for-integration-partners)

---

## POLYX / Balances - Breaking Changes

> **Source**: Technical Bulletin: POLYX Integration Readiness for Polymesh Runtime v8

### 1. Transfer Extrinsics - Legacy `transfer` Removed

**Breaking Change**: The legacy `transfer` extrinsic has been removed.

**Migration**: Use standard Substrate balances calls instead:

- `transfer_allow_death` - Transfer funds, allowing the account to die (reach 0 balance)
- `transfer_keep_alive` - Transfer funds while ensuring account remains alive (with ED=0, behavior is equivalent)
- `transfer_all` - Transfer all available funds
- `transfer_with_memo` - Transfer with memo (remains available for memo-bearing transfers)

**Implementation Note**: Supporting at least one of these four methods is sufficient. It is recommended (but not mandatory) to support `transfer_with_memo` for outgoing transfers where counterparties require memos (e.g., exchanges).

### 2. Transfer Events - Structure Changed

**Breaking Change**: The `balances.Transfer` event structure has changed significantly.

**Pre-v8** (v7.4):

```rust
balances.Transfer(
  from_did: Option<IdentityId>,
  from: AccountId,
  to_did: Option<IdentityId>,
  to: AccountId,
  amount: Balance,
  memo: Option<Memo>
)
```

**v8**:

```rust
balances.Transfer(
  from: AccountId,
  to: AccountId,
  amount: Balance
)
```

**Migration**:

- Remove any parsing logic that expects `from_did`, `to_did`, or `memo` fields in `balances.Transfer`
- The `balances.TransferWithMemo` event (introduced in v7.4 for forward compatibility) continues to emit the same structure in both v7.4 and v8
- For address-based deposits: consume `balances.Transfer`
- For memo-based deposits: consume `balances.TransferWithMemo` (available since v7.4, forward-compatible with v8)
- **Important**: Do not parse both `Transfer` and `TransferWithMemo` for the same transfer to avoid double counting

**Event Emission in v8**:

- Standard transfers emit only `Transfer`
- `transfer_with_memo` extrinsic emits both `Transfer` and `TransferWithMemo`

### 3. Account Balance Data Layout - Storage Schema Changed

**Breaking Change**: The `system.account.data` structure has changed.

**Pre-v8**:

```text
system.account.data:
  - free
  - reserved
  - miscFrozen
  - feeFrozen
```

**v8**:

```text
system.account.data:
  - free
  - reserved
  - frozen
  - flags
```

**Migration**: Update balance parsing logic to handle the new `frozen` and `flags` fields instead of `miscFrozen` and `feeFrozen`.

**Migration Timeline**:

- At upgrade: `miscFrozen` and `feeFrozen` are replaced with single `frozen` value. `flags` equals `frozen`. `free` and `reserved` unchanged.
- After account next updates: `reserved` recalculated to reflect upstream semantics, `free` adjusted accordingly, `flags` updated to full upstream format.

The v8 transferable balance formula (see section 4) produces correct results for accounts in either state.

### 4. Transferable Balance Calculation Formula Updated

**Breaking Change**: The formula for calculating transferable balance has changed.

**Pre-v8 (Legacy)**:

```text
transferable = free - max(miscFrozen, feeFrozen)
```

**v8 (Compatible)**:

```text
transferable = free - max(ED, frozen - reserved)
```

Where:

- `free` = account free balance
- `reserved` = protocol-reserved balance (e.g., staked tokens)
- `frozen` = total locked or frozen amount
- `ED` = existential deposit (which is 0 on Polymesh)

**Simplified for Polymesh** (since ED = 0):

```text
transferable = free - max(0, frozen - reserved)
```

**Migration Note**: In v8, an account's total balance remains `free + reserved`. The `reserved` field now reflects protocol-reserved funds such as staked tokens, so reported `free` balances may differ from pre-v8 for accounts with reserved funds.

### 5. DID Requirement Removed for Receiving Addresses

**Important Notice**: Since v7.3, receiving addresses no longer require an associated Decentralised Identity (DID).

**Migration**:

- Remove any DID validation checks on withdrawal destination addresses
- Do not enforce DID existence checks when validating withdrawal destinations, as this can lead to valid transfers being incorrectly rejected
- Addresses can now receive POLYX without having an associated DID

**Practical Impact**: Exchanges can now allocate unique on-chain deposit addresses per user (standard pattern across most SDK-based chains) without requiring each user to hold a DID. Both deposit models remain supported:

- **Memo-based deposits**: Use `balances.TransferWithMemo` to shared address (identifies user via memo)
- **Unique deposit addresses**: Use `balances.Transfer` to unique per-user addresses (no memo required)

---

## Node Operations - Breaking Changes

> **Source**: Updated Docker documentation

### 1. RPC Port Changed and HTTP + WebSocket Unified

**Breaking Change**: The HTTP RPC port has changed and HTTP/WebSocket now share the same endpoint.

**Pre-v8**:

- HTTP RPC: port 9933
- WebSocket RPC: port 9944 (separate)

**v8**:

- Unified RPC endpoint: port 9944 (both HTTP and WebSocket)
- `--rpc-port` flag sets this single unified port

**Migration**:

- Update any HTTP RPC clients from port 9933 to port 9944
- Remove any separate `--ws-port` configuration (both now use same port)
- Update `--rpc-cors` configuration as it now applies to both HTTP and WebSocket connections
- Remove `--{rpc,ws}-external` flags and use only `--rpc-external` instead

**Example RPC Call** (changed from 9933):

```bash
# Pre-v8 (HTTP on 9933)
curl http://localhost:9933/

# v8 (unified on 9944)
curl http://localhost:9944/
```

### 2. Pruning Flags Changed

**Breaking Change**: Pruning configuration now uses separate flags for state and block pruning.

**Pre-v8**:

```bash
--pruning archive          # Full archive
--pruning 256              # Prune to N blocks
```

**v8**:

```bash
--state-pruning 256                    # Keep last 256 finalized blocks of state
--blocks-pruning archive-canonical     # Keep finalized block bodies
```

**Migration**:

- Replace `--pruning archive` with `--state-pruning archive --blocks-pruning archive` (or just omit, as defaults handle consensus participation)
- Replace numeric `--pruning N` with `--state-pruning N`
- Understand pruning behavior:
  - `--state-pruning`: Controls historical state retention (default: 256 blocks)
  - `--blocks-pruning`: Controls historical block body retention (default: archive-canonical for finalized blocks)
- **Important**: Pruning mode is stored in the database. Changing pruning settings requires database purge unless using numeric state pruning
- Database backups can only be shared between nodes using identical pruning settings

### 3. Operator Flag Changed to Validator

**Breaking Change**: The flag to enable validator/operator mode has changed.

**Pre-v8**:

```bash
--operator
```

**v8**:

```bash
--validator
```

**Migration**:

- Replace all instances of `--operator` flag with `--validator` when running operator nodes

---

## Wallet & Hardware Signing - Breaking Changes

> **Source**: Updated validator and wallet documentation

### 1. Ledger App Change - Polkadot Generic App + Chain Metadata Hashes

**Breaking Change**: Ledger application support is changing for v8 onwards.

**v8 Support**:

- ✅ **Ledger Polkadot Generic App** (uses chain metadata hashes when signing)
  - Uses standard Polkadot SLIP44 derivation path (`m/44'/354'/...`)
  - Forward-compatible across SDK-based chains

- ✅ **Ledger Polymesh-Specific App** (new or updated version for v8)
  - Uses Polymesh-specific SLIP44 derivation path
  - For Polymesh key derivation consistency

**Migration**:

- Update Polymesh wallet extension to **v2.5.0 or higher**
- v2.5.0+ supports both:
  - v7 legacy Polymesh-specific app
  - v8 Polkadot generic app and/or Polymesh app
- Users can choose which app/derivation path strategy to use
- Both derive to different addresses, so plan key rotation accordingly

**Supported Hardware**:

- ✅ Ledger Nano S Plus
- ✅ Ledger Nano X
- ✅ Ledger Flex
- ✅ Ledger Stax
- ❌ Ledger Nano S (not supported—discontinued previously due to lack of session key support)

---

## Validators - Breaking Changes

> **Source**: Updated validator documentation

### 1. Session Keys Now Include BEEFY Key

**Breaking Change**: Session key rotation now produces and requires management of five keys instead of four.

**Pre-v8** (4 keys):

- GRANDPA
- BABE
- I'm Online
- Authority Discovery

**v8** (5 keys - BEEFY added):

- GRANDPA
- BABE
- I'm Online
- Authority Discovery
- **BEEFY** (new)

**Key Migration Steps**:

1. **Generate new session keys** using `author_rotateKeys` RPC method:

   ```bash
   curl -H "Content-Type: application/json" \
     -d '{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}' \
     http://localhost:9944 | jq -r .result
   ```

2. **Output now includes 5 concatenated public keys** (in order: GRANDPA, BABE, I'm Online,
   Authority Discovery, BEEFY)

3. **Keystore filenames use 4-byte prefixes**:
   - `gran` = GRANDPA
   - `babe` = BABE
   - `imon` = I'm Online
   - `audi` = Authority Discovery
   - `beef` = **BEEFY** (new)

4. **Set session keys on-chain** via the controller account using the new key string

5. **Verify new keys** are properly stored in `/<base-path>/chains/<chain-name>/keystore/`

**Important**: All five keys (including BEEFY) must be generated, stored, and set on-chain. Validators missing the BEEFY key may not function correctly.

### 2. Node Pruning Settings - Default Updated

**Change**: Default pruning settings for v8 nodes (including validators).

**v8 Defaults**:

```bash
--state-pruning 256
--blocks-pruning archive-canonical
```

**Note**: These defaults are appropriate for consensus participation (validator nodes). If creating database backups, use nodes with these settings—backups created with these settings can be shared across validator nodes.

### 3. Session Key Storage Requirements

**Clarification**: Session keys management practices and storage requirements.

**Key Points**:

- Session keys can be generated offline and injected into the operator node, OR generated within the node via RPC method
- Session keys must be persisted (stored within the client or mounted from secure storage)
- Only session keys need to be accessible to the operator node
- Controller and Stash keys should be stored securely in hardware wallets
- **New in v8**: Five session keys must be managed (add BEEFY to previous four)

**Best Practice**: Keep session keys persisted and secure, but recognize that unlike Stash/Controller keys, session keys do not hold funds directly—they only sign consensus data.

---

## Identity & Onboarding - Breaking Changes

### 1. Onboarding Model Changed: DID Registration Replaces CDD Provider Flow

In v8, onboarding is centered on DID registration rather than selecting a CDD provider.

**What this means for users**:

- To use identity and asset features, your key needs a DID.
- You can register your DID directly with `identity::register_did` and pay the fee yourself.
- A permissioned DID registrar can also register a DID for you and pay the onboarding fee.

**What app teams should update**:

- Move onboarding flows to DID registration UX.
- Remove hard dependencies on public CDD-provider selection and presence of CDD claims.

### 2. New Identity Extrinsic: `register_did`

`identity::register_did(target_account)` is now the main onboarding extrinsic.

**Key behavior**:

- Registers a DID for `target_account`.
- Supports both self-registration and registrar-assisted onboarding.
- Does not onboard secondary keys directly.

If you still rely on older secondary-key onboarding flows during transition, use the legacy calls listed in [Deprecations](#deprecations).

### 3. `CddServiceProviders` Replaced by `DidRegistrars`

The previous CDD-provider role model is replaced by DID registrars.

**What this means**:

- Update user-facing language from "CDD provider" to "DID registrar".
- DID registrars are the sponsored onboarding path for users who do not yet hold POLYX for fees.
- Governance and operations should use registrar terminology in permissions and runbooks.

### 4. CDD Claim Functional Significance Removed for Onboarding

CDD claims are retained for compatibility, but they are no longer the onboarding gate in v8.

**What this means for integrations**:

- Do not block identity/asset access solely because a CDD claim is missing.
- Keep CDD claim handling only where your issuer or compliance rules explicitly require it.

### 5. Child Identities Removed

Child identity onboarding is no longer part of the chains api.

**Recommended approach**:

- Use separate DIDs (one identity per key) when identity-level separation is required.

---

## RPC & API Changes

### 1. Unified RPC Endpoint

**Change**: HTTP and WebSocket RPC connections now use the same port and endpoint.

- Removed separate `--ws-port` flag
- Removed `--ws-external` flag (use `--rpc-external` instead)
- Both HTTP and WebSocket clients connect to port 9944 (default)
- `--rpc-cors` applies to both HTTP and WebSocket

### 2. RPC Port Change

**Change**: HTTP RPC default port changed from 9933 to 9944.

- Applications making HTTP RPC calls must update endpoint from `http://localhost:9933` to `http://localhost:9944`
- Custom ports still configurable via `--rpc-port <PORT>`

---

## Deprecations

### Node Command Flags

- ❌ `--operator` - Use `--validator` instead (v8+)
- ❌ `--pruning <MODE>` - Use `--state-pruning` and `--blocks-pruning` instead (v8+)
- ❌ `--ws-port` - HTTP and WebSocket share same port (v8+)
- ❌ `--ws-external` - Use `--rpc-external` instead (v8+)

### POLYX Transfer API

- ❌ `transfer` - Legacy transfer extrinsic (removed in v8)
- ❌ `miscFrozen` / `feeFrozen` balance fields - Use `frozen` instead (v8+)
- ❌ `from_did` / `to_did` / `memo` in `balances.Transfer` event - Use `balances.TransferWithMemo` for memo-based transfers (v8+)

### Identity and Onboarding

- ⚠️ `cdd_register_did` - Deprecated in v8 transition period (use `register_did`)
- ⚠️ `cdd_register_did_with_cdd` - Deprecated in v8 transition period (use `register_did`)
- ❌ `CddServiceProviders` role model - Replaced by `DidRegistrars`
- ❌ Child identity onboarding model - Removed from v8 authored documentation and migration guidance

---

## Notes for Integration Partners

### For Exchanges, Custody Providers, and Wallet Teams

**Action Items for v8 Preparation**:

1. **Support Transfer Methods**: Implement at least one of the four standard transfer methods
   (`transfer_allow_death`, `transfer_keep_alive`, `transfer_all`, or `transfer_with_memo`)

2. **Update Event Parsing**:
   - For address-based deposits: parse `balances.Transfer` only
   - For memo-based deposits: parse `balances.TransferWithMemo` only (available since v7.4,
     forward-compatible)
   - Do not parse both for the same transfer flow

3. **Remove DID Requirements**:
   - Stop validating that withdrawal addresses have associated DIDs
   - Accept transfers to any valid account address

4. **Update Balance Logic**:
   - Implement new transferable balance formula
   - Handle `frozen`/`flags` fields instead of `miscFrozen`/`feeFrozen`

5. **RPC Endpoint Updates**:
   - Update clients to use unified RPC endpoint for both HTTP and WebSocket

6. **Identity Onboarding Updates**: Update onboarding integrations to DID registration semantics (`register_did`), support either self-registration UX or registrar-assisted sponsored onboarding, and remove hard dependency assumptions on CDD provider selection flows.

---

## Sections to Review & Add

- [ ] Smart Contracts changes
- [ ] Governance changes
- [ ] Identity/DID changes
- [ ] Settlement changes
- [ ] Asset changes
- [ ] Portfolio changes
- [ ] Compliance changes
- [ ] CLI/tooling breaking changes
- [ ] Database migration guidance
- [ ] Performance improvements (non-breaking)
- [ ] Bug fixes (non-breaking)

---

## Document Maintenance

This document is maintained as a living reference during the v8.0 documentation update cycle. As files are updated and reviewed, key changes should be added to the relevant sections above.

**Review Checklist**:

- [ ] All node documentation reviewed
- [ ] All validator documentation reviewed
- [ ] All smart contract documentation reviewed
- [ ] All API documentation reviewed
- [ ] All tooling documentation reviewed
- [ ] Cross-referenced with official release notes
