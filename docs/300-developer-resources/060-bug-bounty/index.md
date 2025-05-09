---
title: Bug Bounty
description: Security Program Details
id: bug-bounty
slug: /development/bug-bounty
sidebar_label: Bug Bounty
tags:
  - resources
  - bug bounty
---

### Overview

Welcome to the Polymesh Bug Bounty Program.
Polymesh is the software that powers the nodes of the Polymesh blockchain. We want Polymesh to be robust and be the best it can be. This is where we need your help, to assist us in finding bugs and vulnerabilities. Confirmed bugs or vulnerabilities will get monetary rewards (bounty). Please see our Rules & Rewards section for more details.

To get started, Read the [Rules](/development/bug-bounty/rules) and the Core Concepts and [Developer Resources](/development) documentation, to learn about how to setup Polymesh and how to approach the bug bounty program.

Having some prior knowledge about capital markets and the Rust language can be beneficial. If you still have any questions, reach out to us on our [Discord server](https://discord.gg/9TdzKbKgSU) or email us at [bugbounty@polymesh.network](mailto:bugbounty@polymesh.network).

### Bounty Scope

The bug bounty is applicable for the following repositories, sources, and sites:

- [https://github.com/PolymeshAssociation/Polymesh/releases/latest](https://github.com/PolymeshAssociation/Polymesh/releases/latest)

Following are **_out of scope_**:

- [https://github.com/PolymeshAssociation/Polymesh/tree/develop/contracts](https://github.com/PolymeshAssociation/Polymesh/tree/develop/contracts)
- “test” code - i.e. javascript integration tests or unit tests are not in scope.

### Rules

- Rewards will be decided on a per case basis. This bug bounty program's terms and conditions are at the sole discretion of the Polymesh Association.
- Rewards will vary depending on the severity of the issue.
- Disclose the bug only through the approved channels: [Immunefi](https://immunefi.com/bounty/polymesh/), email, or Discord. Do not disclose a bug or vulnerability publicly until it has been addressed, especially for critical issues. Public disclosure before resolution may disqualify the submission from a reward.
- The bugs being considered for the reward are based on a first come, first served basis; duplicate bugs will not be considered.
- If you want to add more information to a provided issue, edit the original report or continue the conversation in the same thread; do not create a new submission.
- Other variables considered for rewards include: the quality of the issue description, the instructions for reproducibility, and the quality of the fix (if included).
- Determinations of eligibility, score, and all terms related to an award are at the sole and final discretion of the Polymesh Association.
- Submissions need to be related to the Bounty Scope. Submissions out of the Bounty Scope won't be eligible for a reward.
- Any interference with the protocol, client, or platform services, on purpose or not during the process, will make the submission process invalid.
- It is mandatory to read and follow the responsible disclosure policy available in the references. Submissions not following the disclosure policy will not be eligible for a reward.
- By participating in the Polymesh Bug Bounty program, you agree to abide by the [terms and conditions](/development/bug-bounty/rules) of the program.

We may modify the terms or terminate this program at any time.

### Vulnerability Classification and Rewards

| **Severity**               | **Description / Example**                                                                                                                                                                                                                                              | **Reward**       |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| CRITICAL (CVSS 9.0 - 10.0) | Transaction manipulation /censorship, double-spending, POLYX minting, unauthorized token minting, staled or undermined consensus/network, governance censorship or compromise, manipulation of signing keys or master keys to gain unauthorised access to an identity. | USD 6000 - 10000 |
| HIGH (CVSS 7.0 - 8.9)      | Ability to use an extrinsic panic unexpectedly without proper handling, block the on-chain governance system from it's expected behaviour, block other usersfrom their ability to perform expected tasks (griefing).                                                   | USD 2000 - 6000  |
| MEDIUM (CVSS 4.0 - 6.9)    | Ability to put chain data into an unexpected state which otherwise doesn't cause any disruption, forcing the emission of events which are incorrect.                                                                                                                   | USD 500 - 1500   |
| LOW (CVSS 00 - 3.9)        | DoS'ing of the operator nodes, incorrect data being logged through events.                                                                                                                                                                                             | USD 200 - 600    |

### Exclusions

While researching, please refrain from:

- Denial of service in general and of Public RPC nodes
- Attacks that consume a substantial amount of Testnet POLYX and which would otherwise be cost-prohibitive on Mainnet
- Spamming
- Social engineering (including phishing) of Polymesh Association's staff
- Any physical attempts against Polymesh Association's property or data centres

### Safe Harbor

Any activities conducted in a manner consistent with this policy will be considered authorized conduct and we will not initiate legal action against you. If legal action is initiated by a third party against you in connection with activities conducted under this policy, we will take steps to make it known that your actions were conducted in compliance with this policy.

However, please understand that if your security research involves the networks, systems, information, applications, products, or services of a third party, that third party is not bound by the rules of this program and may determine, at their sole discretion, whether to pursue legal action. The Polymesh Association cannot and does not authorize security research on other entities.

Please see [Safe Harbor Conditions](/development/bug-bounty/rules#23-safe-harbor-provisions) in our [Terms and Conditions](/development/bug-bounty/rules) for full details.

### References

- [Whitepaper](https://info.polymesh.network/hubfs/Files/Polymesh-white-paper.pdf)
- [Getting Started](/getting-started/)

### Submitting a Bug

Once you find a bug, please report it to us via [Immunefi](https://immunefi.com/bounty/polymesh/). For non-critical issues, you may also contact us by email at [bugbounty@polymesh.network](mailto:bugbounty@polymesh.network) or through our [Discord server](https://discord.gg/9TdzKbKgSU). For critical vulnerabilities, we strongly recommend you do not disclose details publicly until the issue has been addressed. Please be detailed, specific, and clear when submitting your report. Once we receive your report, we'll be in touch soon.

### Terms and Conditions

The Polymesh Bug Bounty Program is governed by our Terms and Conditions defined [here](/development/bug-bounty/rules).  
By participating in the program, you agree by these Terms and Conditions.

### Contact us

If you need help, please feel free to contact us over email at [bugbounty@polymesh.network](mailto:bugbounty@polymesh.network)
Or join our developer community in our [Discord server](https://discord.gg/9TdzKbKgSU)
