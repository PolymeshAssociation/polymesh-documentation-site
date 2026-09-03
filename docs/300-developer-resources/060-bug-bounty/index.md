---
title: Bug Bounty
description: 'Polymesh Bug Bounty Program: scope, rules, report requirements, and rewards'
id: bug-bounty
slug: /development/bug-bounty
sidebar_label: Bug Bounty
tags:
  - resources
  - bug bounty
---

import SeverityRewardTable from './\_severity-reward-table.mdx';
import SeverityAssessmentPrinciples from './\_severity-assessment-principles.mdx';

## Overview

Polymesh is the node software that powers the Polymesh blockchain, a public, permissioned blockchain purpose-built for regulated assets. We want Polymesh to be as robust and secure as it can be, and we reward security researchers who responsibly disclose confirmed vulnerabilities in our in-scope code.

Before you start, please read this page in full together with the program [Terms and Conditions](/development/bug-bounty/rules). By participating in the program you agree to be bound by those Terms.

:::info Program summary

- **In scope:** the [Polymesh node](https://github.com/PolymeshAssociation/Polymesh) source code and released binaries, as deployed on Mainnet, including the audited Confidential Assets functionality (`pallet_confidential_assets` and the [polymesh-dart](https://github.com/PolymeshAssociation/polymesh-dart) cryptography library), currently live on Testnet ahead of its Mainnet deployment. See [Confidential Assets scope](#confidential-assets).
- **Responsible disclosure (no reward schedule):** client libraries and off-chain tooling, including the SDK, REST API, wallet extension, and Portal. See [Responsible disclosure](#responsible-disclosure-client-libraries-and-tooling).
- **Rewards:** up to USD 40,000 depending on severity and impact.
- **Submissions:** by email to [bugbounty@polymesh.network](mailto:bugbounty@polymesh.network).
- All severity ratings, reward eligibility, and reward amounts are determined at Polymesh's sole and final discretion.

:::

Prior knowledge of Rust, Substrate, and capital markets is beneficial. To learn how Polymesh works and how to set up a development environment, see [Core Concepts](/core-concepts) and the [Developer Resources](/development) documentation. For general questions about the program (not vulnerability details), you can reach us on our [Discord server](https://discord.gg/9TdzKbKgSU) or by email at [bugbounty@polymesh.network](mailto:bugbounty@polymesh.network).

## Scope

### In scope

The program covers vulnerabilities in the following code:

| Asset                                                                                                                                                | Status                                      | Notes                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Polymesh node](https://github.com/PolymeshAssociation/Polymesh) ([latest release](https://github.com/PolymeshAssociation/Polymesh/releases/latest)) | **Full scope**                              | The Rust source code and released binaries for the Polymesh chain node, as deployed in the **Mainnet runtime**.                                                   |
| `pallet_confidential_assets` (in the [Polymesh repository](https://github.com/PolymeshAssociation/Polymesh))                                         | **Full scope**                              | Audited; currently deployed on Testnet only, ahead of its Mainnet deployment. See [Confidential Assets scope](#confidential-assets) below.                        |
| [polymesh-dart](https://github.com/PolymeshAssociation/polymesh-dart) (P-DART zero-knowledge proof library)                                          | **Full scope**                              | Audited; currently deployed on Testnet only, ahead of its Mainnet deployment. See [Confidential Assets scope](#confidential-assets) below.                        |
| Client libraries and off-chain tooling: SDK, REST API, SubQuery indexer, signing managers, Portal, wallet extension                                  | **Responsible disclosure**                  | No reward schedule; discretionary payouts possible. See [Responsible disclosure](#responsible-disclosure-client-libraries-and-tooling) below.                     |

A vulnerability must be reproducible in the **latest published release** (or, for Confidential Assets, the latest code deployed to Testnet). Issues that exist only on unreleased development branches may be accepted at Polymesh's discretion, but are typically rated lower because they do not affect a live network.

### Confidential Assets

Polymesh Confidential Assets (the new P-DART-based confidential asset functionality introduced in Polymesh v8) is **in scope under the standard reward schedule**, subject to the notes below. This covers:

- `pallet_confidential_assets` in the [Polymesh repository](https://github.com/PolymeshAssociation/Polymesh); and
- the [polymesh-dart](https://github.com/PolymeshAssociation/polymesh-dart) library, which implements the underlying zero-knowledge proof system.

:::info Pre-Mainnet status

1. Confidential Assets is deployed on **Testnet only**; it is not yet deployed to Mainnet. The polymesh-dart cryptography has completed its first external security audit. All testing must be performed on Testnet or on local/private networks under the Participant's control.
2. Reports that restate limitations already documented in the [Confidential Assets documentation](/confidential-assets), or that duplicate findings already identified by Polymesh's commissioned external audit, are not eligible for a Bounty Payout.

:::

Note that this program covers the **new** Confidential Assets functionality only. The legacy confidential assets (v1 / MERCAT) functionality previously available on Polymesh Private is **out of scope**.

### Responsible disclosure: client libraries and tooling

We welcome vulnerability reports for our client libraries and off-chain tooling under a **responsible disclosure** basis:

- [Polymesh SDK](https://github.com/PolymeshAssociation/polymesh-sdk)
- [Polymesh REST API](https://github.com/PolymeshAssociation/polymesh-rest-api)
- [SubQuery indexer](https://github.com/PolymeshAssociation/polymesh-subquery)
- [Signing managers](https://github.com/PolymeshAssociation/signing-managers)
- [Polymesh Portal](https://github.com/PolymeshAssociation/polymesh-portal)
- [Polymesh Wallet browser extension](https://github.com/PolymeshAssociation/polymesh-wallet)

1. Responsible-Disclosure Items are not covered by the standard reward schedule, and Reports concerning them create no entitlement to a Bounty Payout.
2. Polymesh may, in its sole discretion, award a discretionary payout for a high-impact, well-evidenced finding concerning a Responsible-Disclosure Item.
3. All other requirements apply to Reports concerning Responsible-Disclosure Items, including the submission channel, the responsible investigation and reporting requirements, the report integrity requirements, and non-disclosure obligations.

For example, Polymesh may award a discretionary payout for a vulnerability in the wallet extension or a signing manager that could expose user keys, or an SDK/REST API flaw that could cause users to sign unintended transactions.

### Out of scope

The following are **out of scope** for this program. Reports against out-of-scope assets are not eligible for a reward:

- User-deployed smart contracts: contract bytecode that users write and deploy themselves via the Revive pallet (Polymesh's Solidity/EVM-compatible contracts engine). This does not cover the Revive pallet integration or precompiles (e.g., the ERC-20 precompile for native assets), which are part of the Polymesh node and in scope (see [In scope](#in-scope) above). The `eth-rpc` layer is run unmodified from upstream and falls under the upstream-dependency exclusion below.
- Test code: unit tests, JavaScript/TypeScript integration tests, benchmarks, and CI/CD configuration.
- Legacy confidential assets (v1 / MERCAT) functionality and the [Polymesh Private](https://github.com/PolymeshAssociation/polymesh-private) repositories.
- Websites, documentation sites, DNS, email infrastructure, social media accounts, and other web properties.
- Third-party services and infrastructure, and vulnerabilities in upstream dependencies (e.g., Substrate / Polkadot SDK) unless a concrete, Polymesh-specific exploit path is demonstrated.

If you are unsure whether something is in scope, ask us at [bugbounty@polymesh.network](mailto:bugbounty@polymesh.network) **before** you begin testing.

## Report requirements

High-quality reports get triaged faster and are rewarded at the upper end of the applicable range. Every report **must** include:

1. **One vulnerability per report.** Submit separate reports for separate issues. Multiple vulnerabilities sharing one underlying root cause are treated as a single vulnerability.
2. **A clear description of the vulnerability and its impact**: what an attacker can achieve, and why it matters.
3. **Precise code references**: the affected repository, release tag or commit hash, and file/line references to the vulnerable code.
4. **Step-by-step reproduction instructions** against a stated environment (e.g., local node built from release vX.Y.Z, Testnet), including any accounts, extrinsics, or preconditions required.
5. **A working proof of concept** for Critical and High severity claims. A PoC is strongly encouraged for all reports; reports without one are rated conservatively.
6. **Your severity assessment** against the [impact classes](#severity-and-rewards) in the severity table, with a short justification of the worst impact your finding demonstrates. Polymesh's own severity assessment is final.

Supporting evidence such as logs, transaction hashes, and screenshots helps us validate faster.

### Use of AI and automated tools

AI assistants, fuzzers, static analyzers, and similar tools are welcome as part of genuine security research, but you're responsible for what you submit:

- **You are personally responsible for every claim in your report.** Before submitting, you must have personally validated that the vulnerability exists in the current in-scope code and that your reproduction steps work.
- Reports referencing functions, files, or behavior that don't exist in the codebase, giving generic descriptions not tied to actual Polymesh code, or including a fabricated PoC will be **closed as invalid without detailed rebuttal** and treated as spam. This applies whether the report came from an AI tool, a template, or a person typing by hand.
- Raw, untriaged output from scanners or AI tools does not qualify as a report.
- You must be able to answer follow-up questions about your own submission. Inability to meaningfully discuss your finding may disqualify it.
- Submitting repeated invalid, unvalidated, or automated reports will result in a **ban from the program** and, where applicable, from our submission channels.

## Program rules

- All determinations of eligibility, scope, severity, and reward amount are made at Polymesh's **sole and final discretion**. This program is discretionary; nothing on this page constitutes a guarantee of payment.
- Rewards are granted on a **first come, first served** basis. Where multiple reports describe the same or a similar vulnerability, only the first valid report received is eligible. Duplicates, including issues we already know about internally, issues that are publicly known, and issues identified in published or in-progress audit reports, are not eligible.
- To add information to an existing submission, reply in the same email thread. Do not open a new submission for the same issue.
- Report vulnerabilities **only to us**, through the approved channel. Do not disclose a vulnerability publicly, or to any third party, until Polymesh has confirmed it has been addressed. Premature public disclosure disqualifies the submission from a reward.
- Reward amounts within a severity band reflect the quality of the report: clarity of the description, reproducibility, realism of impact, and the quality of any suggested fix.
- Any deliberate interference with the protocol, live networks, or other users during your research invalidates your submission (see [Testing rules](#testing-rules-and-exclusions) below).
- Submissions must comply with the [Terms and Conditions](/development/bug-bounty/rules), including the responsible investigation and reporting requirements. Non-compliant submissions are not eligible for a reward.
- We may modify the scope, rules, and rewards of this program, or terminate the program, at any time.

## Severity and rewards

Severity is classified by **impact** (what the vulnerability realistically allows an attacker to do) rather than by a scoring formula. Each report is assigned to the band containing the worst impact class it credibly demonstrates, assessed against the **Mainnet** network (for Confidential Assets, which is not yet deployed to Mainnet, severity is assessed against its intended Mainnet behavior; see [Confidential Assets scope](#confidential-assets)). The impact classes below are representative, not exhaustive: impacts not listed are classified by analogy to the closest listed class. All classifications and reward amounts are at Polymesh's sole discretion.

<SeverityRewardTable />

### How severity is assessed

<SeverityAssessmentPrinciples />

### Non-qualifying issues

The following do not qualify for a reward:

- Theoretical issues without a demonstrated, realistic exploit path or security impact.
- Best-practice, code-quality, or informational findings (e.g., outdated dependency versions without a demonstrated exploit, missing hardening headers, compiler or lint warnings).
- Attacks that require control of on-chain governance, a supermajority of validators/operators, or other already-privileged positions.
- Issues in documentation, comments, or example code with no runtime impact.
- Duplicates, known issues, and findings already identified in published or commissioned audit reports.

## Testing rules and exclusions

While researching, you **must not**:

- Perform denial-of-service attacks against Mainnet, Testnet, public RPC nodes, or any infrastructure you do not own. If you find a DoS or resource-exhaustion vulnerability, demonstrate it against a **local node or private network you control** and report it: the report is eligible; live DoS testing is not.
- Execute attacks that consume a substantial amount of Testnet POLYX or that would degrade Testnet for other users.
- Access, modify, or destroy data belonging to other users, or violate any user's privacy.
- Use social engineering (including phishing) against Polymesh staff, contractors, or community members.
- Attempt physical attacks against Polymesh property, personnel, or data centers.
- Spam our submission channels or the network.
- Exploit a vulnerability beyond the minimum necessary to demonstrate it.

Violating these rules invalidates your submission, voids safe-harbor protection, and may result in a ban from the program.

## Safe harbor

Activities conducted in a manner consistent with this policy and the [Terms and Conditions](/development/bug-bounty/rules) are considered authorized conduct, and we will not initiate legal action against you for them. If a third party initiates legal action against you in connection with activities conducted in compliance with this policy, we will take steps to make it known that your actions were conducted in compliance with this policy.

However, if your research involves the networks, systems, information, applications, products, or services of a third party, that third party is not bound by this program and may pursue legal action at its sole discretion. Polymesh cannot and does not authorize security research on other entities.

See the [Safe Harbor Provisions](/development/bug-bounty/rules#24-safe-harbor-provisions) in the Terms and Conditions for full details.

## Submitting a report

Send your report by email to **[bugbounty@polymesh.network](mailto:bugbounty@polymesh.network)**, following the [report requirements](#report-requirements) above.

- Do **not** post vulnerability details on Discord, GitHub issues, social media, or any other public channel. Discord is for general program questions only.
- For **critical vulnerabilities**, include "CRITICAL" in the email subject line.
- Keep a copy of your report and evidence for your own records.
- We will acknowledge receipt and follow up by email. Please monitor the email address you submit from; failure to respond to follow-ups may affect eligibility.

## Terms and Conditions

The Polymesh Bug Bounty Program is governed by the [Bug Bounty Rules, Terms and Conditions](/development/bug-bounty/rules). By participating in the program, you agree to those Terms and Conditions.

## Contact

- Email: [bugbounty@polymesh.network](mailto:bugbounty@polymesh.network)
- Developer community (general questions only, never vulnerability details): [Discord server](https://discord.gg/9TdzKbKgSU)
