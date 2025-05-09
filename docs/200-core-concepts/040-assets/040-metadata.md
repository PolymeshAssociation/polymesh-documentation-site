---
title: Asset Metadata
description: Asset Metadata Management
id: asset-metadata
slug: /assets/metadata
sidebar_label: Asset Metadata
tags:
  - assets
  - metadata
  - management
---

## Overview

Asset metadata provides a flexible and powerful way to associate additional information with assets on Polymesh. It enables storing both informational data and parameters that can drive automated business logic through smart contracts.

## Common Use Cases

- **Regulatory Information**: Store compliance and regulatory details
- **Asset Classifications**: Define asset types and categories
- **Investment Terms**: Document key investment parameters
- **External References**: Link to off-chain documentation
- **Business Logic**: Enable smart contract automation
- **NFT Properties**: Define required properties for NFT collections
- **Extended Asset Information**: Descriptions, issuer information etc.

## Metadata Types

Polymesh supports two distinct categories of metadata:

### Local Metadata

- Asset-specific metadata defined by issuers
- Managed by the asset issuer or their authorized agents
- Customizable per asset requirements

### Global Metadata

- Standardized metadata definitions usable across all assets
- Defined through on-chain governance
- Provide a consistent structure with asset-specific values

For example, a global metadata key might define a standardized way to specify "Risk Rating", but each asset would still set its own individual risk rating value using this standardized format.

## Structure

Each metadata entry has the following properties:

- **Key**: A unique identifier within its scope (local or global)
- **Name**: A human-readable identifier for the metadata field
- **Value**: The actual data stored in the metadata field
- **[Specifications](#metadata-specifications)** (Optional): Information such as an external url, description and type definition
- **Details** (Optional): Additional properties including expiry and lock status

## Metadata Management

### Registration and Usage

There are several ways to register and use metadata keys:

1. **Standard Two-Step Process**

   - First register the metadata key using `register_asset_metadata_local_type` (or `register_asset_metadata_global_type` through the onchain governance process)
   - Then set the value using `set_asset_metadata`

2. **Combined Registration and Setting**

   - Use `register_and_set_local_asset_metadata` to register a local metadata key and set its value in a single transaction
   - This is more efficient for initial setup of asset/collection level metadata

3. **Batched Operations**
   - Use the utility batch function to combine multiple metadata operations in one transaction
   - Particularly useful when setting up multiple metadata keys for an NFT collection
   - Example: Register multiple collection keys and set their values in a single atomic transaction

### Value Management

Metadata values (not including NFT properties) can be:

- Set when registering the metadata
- Modified later (unless locked)
- Cleared when no longer needed
- Given an optional expiry date (informational only)
- Protected through various locking options

### NFT Collection Keys

When creating an NFT collection, metadata keys serve as collection keys that define required properties for each NFT in the collection. Refer to the [Non-Fungible Assets](/assets/nft/#collection-metadata-keys) page for more details.

## Metadata Specifications

The specification of each metadata entry is defined by the following optional properties that provide structure and context for the metadata values:

### Specification Components

1. **URL Reference**

   - External reference URL relating to the metadata
   - Can link to additional documentation or resources
   - Useful for providing more context about the metadata

2. **Description**

   - Human-readable description of the metadata's purpose
   - Explains what the metadata represents
   - Helps other parties understand the intended use

3. **Type Definition**
   - Defines the format and structure of valid values
   - Can specify SCALE encoding formats for complex data
   - Can be used for offchain validation of metadata values
   - Can be used to define a schema for smart contract use

### Value Types

Metadata values can be:

1. **Simple Values**

   - Basic text strings for straightforward data
   - Human-readable information
   - Simple key-value pairs

2. **Complex Values**
   - SCALE encoded data following the type definition
   - Structured data that can be validated
   - Machine-readable formats for automated processing
   - Custom schemas for specific use cases

## Security and Access Control

### Locking Mechanisms

Metadata entries support three lock states:

1. **Unlocked**: Value can be freely modified
2. **Locked**: Value cannot be modified
3. **LockedUntil**: Value locked until a specified date

### Access Control

- Only asset issuers or [authorized agents](/asset-agents) can modify local metadata
- Global metadata modifications require governance approval
- Lock status can prevent modifications even by authorized parties
