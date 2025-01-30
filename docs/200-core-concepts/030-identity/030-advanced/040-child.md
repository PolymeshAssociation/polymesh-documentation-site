---
title: Child Identities
description: Subsidiary Identity Management
id: child-identities
slug: /identity/advanced/child
sidebar_label: Child Identities
tags:
  - identity
  - management
---

# Overview

Child identities make it easy to create multiple identities on Polymesh by letting existing users create new identities from a parent identity that inherits the parent identity’s CDD claims. An unlimited number of child identities can be created and tied to a parent's identity. Child identities can be detached from parent identities if needed on the condition that the child identity has its own CDD claim.

Possible use cases for child identities include:

- **Smart Contract Isolation**: Creating a separate identity for a smart contract to protect user funds managed by the contract, ensuring it operates independently of the deployer's identity.
- **Enhanced Security Structure**: Using child identities as "hot wallets" while keeping the parent identity as a "cold wallet" to secure assets. Since assets are held at the identity level, this structure allows for separate identities for hot/cold wallet functions.
- **Organizational Hierarchy**: Structuring an organization with child identities, such as assigning separate identities to different departments or subsidiaries.

# Creating Child Identities

Polymesh allows any "parent" identity (created through a CDD provider) to create additional child identities. These child identities inherit the CDD claim of the parent, instead of receiving an explicit CDD claim from a CDD provider on the child DID. It is through the parents CDD claim that the child identity is permitted to transact.

:::info
 Only the primary key can create child identities. The new primary key for each child identity will need to sign an authorization.
:::

## Step 1 - Setting Up Accounts

In this tutorial, we will create a secondary key and set it as the child identity of our primary Polymesh identity.

To begin, we create two new keys, called 'TEST_PARENT' and 'TEST_CHILD'. In practice, these keys can be created and secured by two different parties.

![image](images/01-test-child-keys.png)

These keys can be created in the [Polymesh Wallet](https://chromewebstore.google.com/detail/polymesh-wallet/jojhfeoedkpkglbfimdfabpdfjaoolaf?pli=1) or using the [Polymesh App](https://mainnet-app.polymesh.network) in the Accounts tab. We've used the latter for this tutorial.

Since the parent key must be a primary key, we must [onboard](./getting-started/onboarding/) this key to Polymesh.

:::info
The child identity or identities must be the secondary key(s) of the primary key that initiates the call to create child identities.
:::

Before we begin creating the child identity, we must attach TEST_CHILD to TEST_PARENT as a [secondary key](./identity/advanced/keys/).

## Step 2 - Creating Child Identities

We now create a child identity by calling the 'identity::createChildIdentity' extrinsic. This can only be called by a Primary Key of an existing Identity.

In this tutorial, 'TEST_PARENT' is the Primary Key of our identity (0x1), so we use this key to submit the 'identity::createChildIdentity' transaction.

![image](images/02-create-child-keys.png)

:::info
Call the 'createChildIdentities' to create multiple child identity.
:::

Once created, a child identity is assigned its unique DID and can hold claims and assets like any other identity. However, child identities cannot create further child identities (no recursion). They only inherit the CDD status from the parent, while any other compliance claims must be attached directly to the child identity.

# Unlinking Child Identities

If desired, a child identity can also be unlinked from its parent. In that case, it will no longer inherit CDD status from the parent's claim and must obtain its own CDD claim from a CDD provider.

:::tip
Only the primary key of the parent or child identities can unlink the identities.
:::

In this tutorial, 'TEST_PARENT' is the Primary Key of our identity (0x1), so we use this key to submit the 'identity::unlinkChildIdentity' transaction. The child identity's DID should be pasted to the 'childDid' field.

![image](images/03-unlink-child-did.png)

Learn more about child identities in our [SDK documentation] (https://developers.polymesh.network/sdk-docs/classes/API/Entities/Identity/ChildIdentity/)
