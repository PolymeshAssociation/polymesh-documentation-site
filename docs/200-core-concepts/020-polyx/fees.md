---
title: Network Fees
description: Transaction and Protocol Fees
id: fees
slug: /polyx/fees
sidebar_label: Network Fees
tags:
  - fees
  - transactions
---

## Overview

Fees on Polymesh are paid in the networks native token, [POLYX](/polyx/).

There are two types of network fee:

- Transaction Fees - always paid whether or not the transaction is successful
- Protocol Fees - only paid for successful transactions

## Transaction Fees

Every on-chain transaction in Polymesh must be paid for using POLYX. The cost of the operation is proportional to the computational and storage complexity of the action being performed and is set directly by the network.

In order to execute an on-chain transaction, a user must have sufficient POLYX associated with the key which is signing and submitting the transaction. If there isn't a sufficient balance, the network will fail the transaction.

Transaction fees go to the operator that produced the block containing the associated transaction. This means that operators are incentivised to help increase adoption of the network (as they receive a percentage of transaction fees from on-chain activity).

All transactions in Polymesh have a transaction fee associated with them. The magnitude of the fee is determined by the compute / memory cost of executing the transaction, and the size (in bytes) of the transaction input. The transaction fee is paid regardless of whether the transaction is successful or not.

As of Polymesh 4.1.1 sample fees for common transaction types are shown below.

| Module              | Transaction                         | Fee    |
| ------------------- | ----------------------------------- | ------ |
| asset               | accept_asset_ownership_transfer     | 0.1205 |
| asset               | accept_ticker_transfer              | 0.1126 |
| asset               | add_documents                       | 0.0889 |
| asset               | create_asset                        | 0.1899 |
| asset               | freeze                              | 0.0705 |
| asset               | issue                               | 0.1294 |
| asset               | register_custom_asset_type          | 0.0809 |
| asset               | register_ticker                     | 0.0941 |
| asset               | rename_asset                        | 0.0696 |
| asset               | set_funding_round                   | 0.0661 |
| asset               | unfreeze                            | 0.0706 |
| balances            | transfer                            | 0.0943 |
| balances            | transfer_with_memo                  | 0.0978 |
| capitaldistribution | claim                               | 0.2562 |
| capitaldistribution | distribute                          | 0.1035 |
| checkpoint          | create_checkpoint                   | 0.0927 |
| checkpoint          | create_schedule                     | 0.1476 |
| compliancemanager   | add_compliance_requirement          | 0.0787 |
| compliancemanager   | add_default_trusted_claim_issuer    | 0.0774 |
| compliancemanager   | pause_asset_compliance              | 0.0686 |
| compliancemanager   | remove_default_trusted_claim_issuer | 0.0712 |
| compliancemanager   | reset_asset_compliance              | 0.0654 |
| compliancemanager   | resume_asset_compliance             | 0.0682 |
| corporateaction     | initiate_corporate_action           | 0.1816 |
| corporateaction     | set_default_targets                 | 0.0719 |
| corporateaction     | set_default_withholding_tax         | 0.0684 |
| corporateaction     | set_did_withholding_tax             | 0.0839 |
| externalagents      | accept_become_agent                 | 0.1107 |
| externalagents      | create_group                        | 0.0781 |
| identity            | accept_primary_key                  | 0.1332 |
| identity            | add_authorization                   | 0.0818 |
| identity            | add_claim                           | 0.0761 |
| identity            | cdd_register_did                    | 0.1003 |
| identity            | join_identity_as_key                | 0.1187 |
| identity            | revoke_claim                        | 0.0669 |
| identity            | set_permission_to_signer            | 0.2575 |
| portfolio           | create_portfolio                    | 0.0812 |
| portfolio           | delete_portfolio                    | 0.0938 |
| portfolio           | move_portfolio_funds                | 0.1110 |
| portfolio           | rename_portfolio                    | 0.0724 |
| settlement          | add_and_affirm_instruction          | 0.6079 |
| settlement          | affirm_instruction                  | 0.1115 |
| settlement          | create_venue                        | 0.0911 |
| settlement          | reject_instruction                  | 0.1559 |
| staking             | bond                                | 0.1017 |
| staking             | bond_extra                          | 0.0765 |
| staking             | nominate                            | 0.0978 |
| staking             | rebond                              | 0.0814 |
| statistics          | add_exempted_entities               | 0.0687 |
| statistics          | add_transfer_manager                | 0.0688 |
| statistics          | remove_exempted_entities            | 0.0699 |
| statistics          | remove_transfer_manager             | 0.0691 |
| sto                 | create_fundraiser                   | 0.1261 |
| sto                 | freeze_fundraiser                   | 0.0703 |
| sto                 | invest                              | 0.7040 |
| sto                 | stop                                | 0.0816 |

## Protocol Fees

In addition to transaction fees, certain on-chain transactions carry additional fixed fees.

The transactions that carry these additional protocol fees are configurable and can be updated via the governance process - modifying both the transactions that carry these fees, as well as the fee amounts for each transaction.

Currently only one types of transaction carries additional fees - this is:

- registering a new ticker: this has a 25 POLYX fee. Ticker registration is optional and only required if you wish to have a unique ticker linked to your asset.

Both transaction and protocol fees are paid to the operator that produces a block that includes the relevant transactions.

Protocol fees are only paid by a user if their action is successful - for example if you try and register a ticker that has already been registered, you won't be charged the 25 POLYX protocol fee.
