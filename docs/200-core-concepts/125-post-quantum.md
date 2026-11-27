---
title: Post-Quantum Readiness
description: How Polymesh is preparing its cryptography for quantum computing
id: post-quantum
slug: /post-quantum
sidebar_label: Post-Quantum Readiness
tags:
  - security
  - cryptography
  - post-quantum
---

:::info Last updated
26 November 2026. We update this page whenever a stage or target changes.
:::

## Summary

- **No quantum computer today can break the cryptography Polymesh uses.** Estimates of when one might exist vary, and recent research has brought them earlier. We are preparing now so that Polymesh can move well before it matters.
- **We are adopting post-quantum cryptography in stages.** Each stage has an indicative target date and clear criteria for moving forward. Several steps build on NIST's post-quantum standards and on the Polkadot SDK's post-quantum upgrades, which we adopt as they are released, so each stage completes when its criteria are met and the dates may move.
- **Post-quantum signing keys come first, as an option.** Users who want post-quantum account keys can opt in early. Node operator keys, finality and networking follow the Polkadot SDK, on which Polymesh is built.
- **Confidential Assets need their own work, and it is under way.** We have built a proof of concept that replaces each elliptic-curve component of Confidential Assets with a post-quantum one. The post-quantum protocol removes the "harvest now, decrypt later" risk.
- **Integrators don't need to do anything today.** Existing keys and signatures will keep working throughout the transition.

## Our approach

We follow four principles:

- **Standards first.** We use algorithms standardised by NIST, which institutions, hardware wallets and HSMs are adopting:
  - **Signatures:** ML-DSA ([FIPS 204](https://csrc.nist.gov/pubs/fips/204/final)) by default. Where needed, FN-DSA (Falcon, FIPS 206) once it is final, for signatures about a quarter of the size, and SLH-DSA ([FIPS 205](https://csrc.nist.gov/pubs/fips/205/final)), which is hash-based and so does not depend on the lattice assumptions behind ML-DSA and FN-DSA.
  - **Encryption and key exchange:** ML-KEM ([FIPS 203](https://csrc.nist.gov/pubs/fips/203/final)). NIST has selected HQC, a code-based scheme, as a backup in case ML-KEM is ever broken.
  - **Zero-knowledge proofs:** there is no post-quantum standard yet. We use hash-based or lattice-based proofs, which do not rely on elliptic curves.
- **Opt-in before mandatory.** Post-quantum keys will be available as an option well before classical keys are retired.
- **Crypto agility.** We design for algorithms to be replaced, not for one algorithm to last forever.
- **No premature slowdown.** Post-quantum signatures and proofs are much larger than today's, and slower to produce. We will not reduce network performance before the risk justifies it.

We plan against published standards timelines rather than predictions of quantum hardware. NIST's final transition plan deprecates quantum-vulnerable public-key algorithms, including the elliptic-curve signatures most blockchains use, after 2030, and disallows them after 2035 ([NIST IR 8547](https://csrc.nist.gov/pubs/ir/8547/final)). Our targets below are set against those dates.

## What is already quantum-resistant

Quantum computers mainly threaten **public-key** cryptography: signatures, key exchange and public-key encryption. Hash functions are much less affected. The hashing behind Polymesh's block and state integrity (BLAKE2b-256) is considered quantum-resistant at its current size, and does not need to change.

## What needs to change

| Area                                        | Today                                                            | Post-quantum direction                                                                                             |
| ------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Account and identity keys                   | Ed25519, SR25519, ECDSA signatures                               | ML-DSA keys added alongside existing ones, then FN-DSA once final; existing keys can rotate to them                |
| Node operator keys and finality             | Elliptic-curve session keys                                      | ML-DSA, following the Polkadot SDK                                                                                 |
| Block production randomness                 | Elliptic-curve VRF (BABE)                                        | Hash-based randomness, following the Polkadot SDK                                                                  |
| Network transport                           | Elliptic-curve key exchange                                      | Hybrid key exchange, combining elliptic-curve key exchange with ML-KEM, following the Polkadot SDK                 |
| [Confidential Assets](/confidential-assets) | Elliptic-curve encryption, commitments and zero-knowledge proofs | ML-KEM encryption, ML-DSA authorization and post-quantum zero-knowledge proofs (see [below](#confidential-assets)) |

## Base layer

**User signing keys come first.** Post-quantum account keys will be offered as an opt-in, so users who want them can start using them early, alongside their existing keys.

**Node operator keys, finality and networking follow Polkadot.** Polymesh is built on the Polkadot SDK. Web3 Foundation has published a [post-quantum roadmap for Polkadot](https://forum.polkadot.network/t/post-quantum-cryptography-roadmap-for-polkadot-and-jam/13232) covering validator keys, block production randomness and networking. We will adopt those upgrades as they become available.

Polymesh's identity model makes key migration simpler. A Polymesh identity is not tied to a single key: [primary keys](/identity/advanced/primary-keys) can be rotated through an [authorization](/authorizations), and [secondary keys](/identity/advanced/secondary-keys) can be added and removed. We expect holders to move to post-quantum keys without changing their identity or losing their claims:

- **Assets in an identity's portfolios** belong to the identity, not to a key, so they do not move.
- **Assets held directly by an account** must be moved before the old key is removed, because a key can't be unlinked from its identity while it holds assets.
- **POLYX** stays with the key that holds it. The old key can still transfer it, so holders should move it to the new key rather than leave it on a key that could one day be forged.

A key rotation is authorized by the current, classical key, so it is only safe while that key cannot be forged. This is why post-quantum keys will be available well before a quantum computer is expected to exist.

## Confidential Assets

Confidential Assets raise a different kind of quantum risk.

For **signatures**, the risk is future forgery. A quantum computer could one day forge a signature, but it cannot go back and change transactions already finalised. Moving to post-quantum keys before such a computer exists removes the risk.

For **encryption**, the risk is "harvest now, decrypt later". Confidential Assets encrypt settlement details so that only the parties, auditors and mediators can read them. Someone could store encrypted data today and decrypt it once a large quantum computer exists. For confidential data that must stay private for years, this is the risk that matters most.

We are addressing this with a fully post-quantum Confidential Assets protocol. It replaces each elliptic-curve component, and removes the "harvest now, decrypt later" risk:

- **Proofs:** hash-based or lattice-based zero-knowledge proofs, which need no elliptic curves and no trusted setup.
- **Encryption:** settlement details are encrypted with ML-KEM for every party, including auditors, with the proof itself guaranteeing that each auditor can decrypt exactly the settlement it attests to.
- **Authorization:** ML-DSA signatures, so HSMs and institutional custody can authorize confidential transactions with standard post-quantum keys.
- **Migration:** existing confidential balances move to the new version through a one-way migration, with supply tracked per asset.

We have built a proof of concept that replaces each elliptic-curve component with a post-quantum one. We are now comparing it with an alternative implementation before choosing one to take to Testnet.

## Stages

The three areas move independently. Confidential Assets and user signing keys are led by Polymesh; node and network keys follow the Polkadot SDK.

```mermaid
flowchart LR
  subgraph NK["Node and network keys"]
    direction LR
    N1["Follow the<br/>Polkadot SDK<br/><b>Monitoring</b><br/>Ongoing"]
  end
  subgraph CA["Confidential Assets"]
    direction LR
    C1["Choose<br/>implementation<br/><b>In progress</b><br/>Q2 2027"] --> C2["Post-quantum<br/>Confidential Assets<br/>on Testnet<br/>End 2027"] --> C3["Mainnet, with<br/>one-way migration<br/>Mid 2028"]
  end
  subgraph SK["User signing keys"]
    direction LR
    S1["Opt-in post-quantum<br/>keys on Testnet<br/>Mid 2027"] --> S2["Opt-in post-quantum<br/>keys on Mainnet<br/>End 2027"] --> S3["Retire<br/>classical keys<br/>Before 2035"]
  end
```

| Area                  | Stage                                       | Status      | Target\*    | Moves forward when                                                                                                                          |
| --------------------- | ------------------------------------------- | ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| User signing keys     | Opt-in post-quantum keys on Testnet         | Planned     | Mid 2027    | Integrated with Polymesh identities and audited                                                                                             |
| User signing keys     | Opt-in post-quantum keys on Mainnet         | Planned     | End 2027    | Testnet validation is complete                                                                                                              |
| User signing keys     | Retire classical keys                       | Planned     | Before 2035 | Wallets, custodians and integrators are ready, after a long opt-in period and advance notice, and once approved through Polymesh governance |
| Confidential Assets   | Choose implementation                       | In progress | Q2 2027     | One of the two implementations is chosen for Testnet                                                                                        |
| Confidential Assets   | Post-quantum Confidential Assets on Testnet | Planned     | End 2027    | The full protocol is implemented and independently audited                                                                                  |
| Confidential Assets   | Mainnet, with one-way migration             | Planned     | Mid 2028    | Testnet validation is complete and integrators are ready                                                                                    |
| Node and network keys | Follow the Polkadot SDK                     | Monitoring  | Ongoing     | Post-quantum support is available in the Polkadot SDK                                                                                       |

\* Target dates are indicative and subject to change without notice. They reflect our current planning and are not a commitment. Node and network key timing depends on the Polkadot SDK and on standards bodies, and moves with them. We will update this page whenever a stage or target changes.

## Trade-offs

Post-quantum security costs space and computation. Signatures are about 10 to 50 times larger than today's:

| Signature scheme          | Signature size  |
| ------------------------- | --------------- |
| Ed25519 / SR25519 (today) | 64 bytes        |
| FN-DSA-512 (Falcon)       | about 666 bytes |
| ML-DSA-44                 | 2,420 bytes     |
| ML-DSA-65                 | 3,309 bytes     |

Post-quantum zero-knowledge proofs are also larger and slower to generate than today's. Expect post-quantum transactions to be bigger, and to cost more, than classical ones at first. This is the main reason we introduce post-quantum cryptography in stages and as an option first.

## What integrators should do now

No action is required today. To make the transition easy when it comes:

- **Don't hard-code key or signature sizes.** Post-quantum keys and signatures are much larger than today's 32- or 33-byte public keys and 64- or 65-byte signatures.
- **Keep signing behind an abstraction** so you can add a new key type without reworking your integration.
- **Make sure you can rotate keys.** Confirm that your custody setup can rotate primary keys and add secondary keys on your identities.
- **Watch this page** and the [changelogs](/development/changelogs) for new key types as they reach Testnet.

## Further reading

- [NIST post-quantum cryptography project](https://csrc.nist.gov/projects/post-quantum-cryptography)
- [NIST IR 8547: Transition to Post-Quantum Cryptography Standards](https://csrc.nist.gov/pubs/ir/8547/final)
- [Post-Quantum Cryptography Roadmap for Polkadot and JAM](https://forum.polkadot.network/t/post-quantum-cryptography-roadmap-for-polkadot-and-jam/13232)
- [Confidential Assets](/confidential-assets)
