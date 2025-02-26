---
title: Trading Venues
description: Trading Venues
id: trading-venues
slug: /settlement/venues
sidebar_label: Trading Venues
tags:
  - settlement
  - venues
---

## Overview

Venues on Polymesh provide a logical grouping of settlement instructions. They provide a way to organize and control trading activities, with specific venues being used for particular types of transactions such as primary issuance, exchange trading, or fundraising events.

## Venue Types and Use Cases

Venues can be categorized into different types based on their intended use:

- **Distribution**: Used for primary issuance and initial distribution of assets to investors
- **Exchange**: Designated for exchange-based trading, allowing organized secondary market trading
- **STO**: Specifically for Security Token Offerings or fundraising events, managing token sales
- **Other**: General purpose venue type for specialized use cases

### Common Applications

- **Primary Issuance**: Manage initial token distribution to investors through a controlled venue
- **Exchange Integration**: Create dedicated venues for specific trading platforms or exchanges
- **Fundraising**: Organize and control token sales through STO venues
- **Compliance Management**: Restrict trading to specific approved venues for regulatory compliance
- **Settlement Tracking**: Group related transactions for better organization and audit trails

:::info
Venues are optional for settlement instructions. When no venue is specified, the instruction will use a default global venue. However, some assets may be restricted to trading only on specific venues as part of their compliance rules. A venue is required for instructions with an off chain leg as receipts for off chain legs must be signed by a signatory authorized by the venue owner.
:::

## Venue Management

Each venue has an owner identity that:

- Is the sole identity that can create settlement instructions within the venue
- Can execute fully affirmed instructions associated with that venue
- Can add or remove receipt signers for off chain legs

Once an instruction has been created inside a venue, it cannot be moved to another venue. Venues can be reused at any time.

## Technical Implementation

### Creating Venues

A venue can be created by calling `settlement::create_venue` with the following parameters:

- `details`: Venue details (such as a descriptive name)
- `signers`: List of authorized receipt signers (for off chain leg receipts)
- `typ`: Venue type (Distribution, Exchange, STO, or Other)

Upon successful creation, the venue is assigned a unique Venue ID that can be used for creating and approving instructions within that venue. The venue owner can later modify venue properties using:

- `settlement::update_venue_details` to update the venue's details
- `settlement::update_venue_type` to change the venue type
- `settlement::set_venue_signers` to update the list of authorized receipt signers

### Venue Filtering

Asset issuers have granular control over where their assets can be traded through venue filtering transfer restrictions:

#### Global Venue

When no specific venue is provided for a settlement instruction, it automatically uses a global default venue. This makes venue specification optional for basic transfers while still maintaining the ability to track and manage settlements.

#### Asset-Level Venue Restrictions

Asset issuers can implement venue-based trading restrictions using the following chain methods:

1. **Enabling Venue Filtering**: Use `settlement::set_venue_filtering` to activate venue restrictions for the asset
2. **Specifying Allowed Venues**: Use `settlement::allow_venues` to create an allowlist of permitted venues
3. **Managing Permissions**: Use `settlement::disallow_venues` to revoke trading permissions for specific venues

These restrictions provide issuers with:

- Control over where their assets can be traded
- Ability to ensure trading only occurs on approved or regulated venues
- Flexibility to adjust trading permissions as needed

When venue filtering is enabled for an asset:

- Settlement instructions involving that asset must use an approved venue
- Attempts to settle through non-approved venues will fail
- The global default venue cannot be used

:::note
Venue filtering is independent of other compliance rules and transfer restrictions. Assets can have both venue restrictions and other compliance rules and transfer restrictions active simultaneously.
:::
