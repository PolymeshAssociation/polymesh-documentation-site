---
title: Identity Onboarding
description: DID onboarding and registrar model on Polymesh
id: identity-onboarding
slug: /identity/onboarding
sidebar_label: Identity Onboarding
tags:
  - identity
  - did
---

## Overview

From Polymesh v8, onboarding on Polymesh is only based on DID registration. To access identity and asset related functionality, a key must be linked to an on-chain identity (DID).

Accounts used only for POLYX transfers and staking (excluding validator activities) do not require a DID.

## DID registration paths

Polymesh supports two onboarding paths:

1. **Self-registration**
   - A user registers a DID for their own key by submitting `identity::self_register_did` and paying the transaction fee.
2. **Registrar-assisted registration**
   - A permissioned DID registrar registers a DID for a target user key using `identity::register_did` and pays the transaction fee.

This two-path model lets users onboard directly while also supporting platforms that prefer managed onboarding for user experience reasons.

## DID registrars

DID registrars are permissioned identities that can register new DIDs for other keys.

Registrars are managed through on-chain governance (via PIP/governance process) and are intended for entities that want to offer simplified onboarding to users who may not yet hold POLYX for fees.

## register_did and self_register_did

`identity::self_register_did()` is fully permissionless: any account not already linked to an identity can call it to register a DID for its own key.

`identity::register_did(target_account)` is registrar-gated: only an active DID registrar can call it, to register a DID for a target key.

Important behavior in v8:

- DID existence is the onboarding requirement for identity and native asset related usage.
- Neither extrinsic supports secondary key onboarding.
- Legacy `cdd_register_did` and `cdd_register_did_with_cdd` remain available as deprecated, registrar-gated transition paths, but no longer attach a `CustomerDueDiligence` claim.

## CDD claim legacy context

The `CustomerDueDiligence` claim type remains available for compatibility, but it no longer serves as the functional onboarding gate in v8.

Asset issuers can continue to enforce issuer-specific KYC/compliance requirements using claims and compliance rules.
