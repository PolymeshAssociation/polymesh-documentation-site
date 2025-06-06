---
title: Governance
description: Platform Governance
id: governance
slug: /governance
sidebar_label: Governance
tags:
  - governance
  - platform
---

## Overview

Polymesh includes on-chain governance to manage network upgrades, changing parameters of the network (e.g. slashing percentages), permissioning network roles and distributing treasury funds.

The governance system is designed to allow both community members and technical experts to collaborate on improving Polymesh and managing network changes.

There are three main groups of actors in Polymesh governance:

- POLYX token holders

- Committees (e.g. Technical Committee, Upgrade Committee)

- Governing Council

The governance process begins either via a community submitted proposal, which is then curated by other POLYX token holders, or a committee submitted proposal. In both cases the governing council is responsible for accessing the change and determining whether it should be ratified, rejected or temporarily skipped.

The governance system consists of POLYX token holders populating and curating a list of PIPs ordered by their importance to the community. The governing council will then consider this list of PIPs, in their curated order, on a periodic basis (e.g. once per month), ratifying, rejecting or skipping each PIP in order as appropriate.

In addition to the Governing Council there are other committees (e.g. Technical Committee) that can submit PIPs directly to the Governing Council for review, bypassing the community curation process. However generally we expect most PIPs to go through the usual flow of the community curation process, and for direct committee submitted proposals to be rare.

## Governance Flow Diagram

![Governance Flow Diagram](./images/governance/Polymesh_Governance.png)

## Polymesh Improvement Proposals

Polymesh Improvement Proposals (PIPs) represent an on-chain action that the community or a committee is recommending to the Governing Council.

Polymesh Improvement Proposals (PIPs) represent any of change to the network, and can be created both by dedicated committees as well as any POLYX token holder and are actioned by the Governing Council.

A PIP is an on-chain dispatchable function w/ parameters alongside some metadata giving some additional context as to why the function should be called. For example, it may be a call to `system::set_code(new_binary)` which is linked to a Github PR describing the change.

These PIP dispatchables can only be executed by the Governing Council and not an individual user.

PIPs are also used to permission certain on-chain identities to have special privileged roles. This includes adding and removing permissioned operators and CDD service providers.

Some common examples include:

- network upgrades

- treasury disbursement

- tokenomics parameter change

- adding new permissioned operators

- adding new permissioned CDD service providers

## Signalling

It is important that PIPs are curated by community members (POLYX token holders) to provide feedback to the Governing Council on the relative importance to the community of different PIPs.

Any POLYX token holder, in addition to being able to submit a PIP for consideration, can signal their view on other community submitted PIPS, both positively or negatively, by bonding POLYX to the relevant PIP. The POLYX token holders signal is proportional to the amount of POLYX bonded by that community member.

When the Governing Council triggers a PIP snapshot, we take these signals and use them to order the community submitted PIPs for consideration by the Governing Council.

Token holders can unbond their POLYX and remove their support (or lack of support) from a PIP at any time. Bonding POLYX to signal on different PIPs does not prevent token holders from staking their POLYX.

## Committees

Polymesh governance includes committees. Each committee is a group of identities which a specific remit to manage certain types of network changes.

Each committee has a membership, with the current members being responsible for voting new members in or existing members out.

Associated with each committee is a voting threshold - for example, if the committee has 5 members, and a threshold of 50%, then at least 3 members of the committee must agree on an action before it is executed by the committee.

Committees can submit PIPs which are included and then put in front of the Governance Council for consideration. The Governing Council can choose to ratify, reject or ignore a committee submitted PIP.

Unlike community submitted PIPs, a committee submitted PIP is not subject to signalling from the community of POLYX token holders, and is always eligible for actioning by the Governing Council.

## Governing Council

The Polymesh Governing Council is ultimately responsible for actioning PIPs which were submitted either via the community curation process, or directly by one of the committees.

Any member of the governing council can trigger a PIP snapshot. The snapshot summarises the current list of PIPs (both from the community and committees) and orders community based PIPs based on their signal.

The Governing Council then meet to discuss the PIPs included in the snapshot. For community curated PIPs, the Governing Council must work through them based on their curated order, choosing whether to ratify, reject or skip each PIP in turn.

For PIPs which are skipped, we track how many times they have been skipped, and limit the Governing Council to skipping a particular PIP too many times. This is designed to give the Governing Council the flexibility they need to reasonable govern the evolution of the Polymesh network, as well as ensuring that community signalling of the relative importance of PIPs is closely considered by the Governing Council.

For PIPs submitted by committees rather than through the community curation process, the Governing Council is free to ratify or reject these PIPs in any order.

The Governance Council can be thought of as a multisig controlled by its members, and has an associated voting threshold that must be reached in order to execute an action through the Governing Council. This applies both for PIP management as well as some additional non-PIP related actions that the Governing Council may need to execute.

These non-PIP actions include managing the membership of the Governing Council itself, with existing members needing to agree and vote on the addition or removal of members, as well as changes to the voting structure, for example the voting threshold.

The Governing Council is also able to issue a [Customer Due Diligence](/identity/verification/) claim should the need arise.

## Release Coordinator

One member of the Governing Council is elected as the Release Coordinator. The role of the Release Coordinator is to schedule PIPs that have been ratified by the Governing Council.

Every ratified PIP has a default execution time, set as a specific amount of blocks from the time it was ratified. The Release Coordinator can re-schedule any PIP to a different execution block or choose to enact it immediately. This provides flexibility to coordinate the release of critical fixes, and ensure that any stakeholders in a particular PIP are coordinated and well prepared before the PIP is executed.

Release coordinators are elected by the governing council members, and must be a current member of the governing council.
