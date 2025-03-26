---
title: Dividend Distribution
description: Dividend Distribution
id: dividend-distribution
slug: /corporate-actions/dividends
sidebar_label: Dividend Distribution
tags:
  - corporate actions
  - dividends
---

# Overview

Capital distributions are a common procedure in the financial world. Most capital distributions are payments related to assets from an account, fund, or individual security to investors or other beneficiaries, or those related to payments of stock or other payouts to shareholders.

::: info
Corporate actions may trigger a registration or filing requirement with applicable securities regulators or other governmental authority. Please consult with a legal and financial advisor before distributing your corporate action.
:::

The source for a distribution can be a number of financial products. Still, a distribution usually consists of a direct payment to a beneficiary.
As distributions are essential for financial products, especially securities, they have also found their way into the Polymesh design.

::: NOTE
Dividend distributions can be initiated by the token owner itself, or by an appointed corporate action agent (CAA). Only the token owner can appoint the CAA. Doing so allows ACME to outsource the implementation of their corporate actions if they want to.
:::

# Dividend distribution

An on-chain distribution requires an on-chain asset. We can envision an on-chain stable token that is strongly pegged to a fiat currency such as the US Dollar. Such a token is described as a stable token with value pegged to the fiat currency it represents.

::: info
A stable token does not presently exist on the Polymesh Mainnet or Testnet. such a token should be created for the purpose of dividend distribution.
:::

Dividend distributions can be created using 'capitalDistribution::distribute' with the following parameters:

- 'assetId': Identifies the asset affected by the dividend distribution.
- 'localId': Corporate Action ID.
- 'currency': Asset ID of the currency in which dividends are being distributed.
- 'pershare': The amount of 'currency' to pay for each share held by the asset holders.
- 'amount': The amount of 'currency' to be distributed. 
- 'paymentAt': A date starting from which dividends can be paid or claimed.
- 'expiresAt': An optional date after which dividends can no longer be paid/reclaimed. A null value means the distribution never expires.

::: info
Distributions are "first come, first served", so funds can be depleted before every asset holder receives their corresponding amount
:::

The funds will be locked in `portfolio` from when `distribute` is called.
When there's no expiry, some funds may be locked indefinitely in `portfolio`,
due to claimants not withdrawing or no benefits being pushed to them.
For indivisible currencies, unlocked amounts, of less than one whole unit,
will not be transferable from `portfolio`.

However, if we imagine that users `Alice` and `Bob` both are entitled to 1.5 units,
and only receive `1` units each, then `0.5 + 0.5 = 1` units are left in `portfolio`,
which is now transferrable.

# Claiming Distributions

Distributions can be claimed by calling 'capitalDistribution::distribute' with the following parameters:

- 'assetId': Identifies the asset affected by the dividend distribution.
- 'localId': Corporate Action ID.

Taxes are withheld as specified by the CA.
Post-tax earnings are then transferred to the default portfolio of the CAA's DID.

All benefits are rounded by truncation, down to first integer below.
Moreover, before post-tax earnings, in indivisible currencies are transferred,
they are rounded down to a whole unit.

# Reclaiming Distributions

Assuming a distribution has expired, the remaining amount in the distributor portfolio can be unlocked by calling 'capitalDistribution::reclaim' with the following parameters:

- 'assetId': Identifies the asset affeceted by the dividend distribution.
- 'localId': Corporate Action ID.