---
title: Asset Agents & Permissions
description: Managing permissions for asset agents on Polymesh
id: asset-agents
slug: /asset-agents
sidebar_label: Asset Agents & Permissions
tags:
  - asset agents
  - permissions
  - management
---

## Overview

Issuers of regulated securities often delegate specific responsibilities, like managing documentation or compliance, to specialized service providers or internal teams. Polymesh facilitates this through **agents** and **agent groups**, providing granular control over permissions related to a specific asset.

The `externalAgents` pallet, in conjunction with the `identity` pallet, provides the necessary functionality to manage the entire lifecycle of agent permissions for an asset.

## Key Concepts

### Agents

An agent is any Polymesh [Identity](/identity/) that has been granted specific permissions to act on behalf of an asset. This includes the asset issuer, who is automatically designated as an agent with `Full` permissions upon asset creation, as well as any additional identities (such as service providers or internal staff) that are granted agent status.

### Agent Groups

Permissions are not assigned directly to agents but rather to **Agent Groups**. Each agent assigned to an asset belongs to exactly one group for that asset. An asset can have multiple agent groups, each defining a different set of permissions.

### Permissions

Polymesh employs a hierarchical permission system allowing fine-grained control. Permissions determine which actions (extrinsics within specific pallets) an agent belonging to a group can perform for the asset.

Permissions can be defined at the group level using three main types:

- **Full**: Grants access to all extrinsics across all pallets related to the asset.
- **These**: Grants access _only_ to specified extrinsics within specified pallets.
- **Except**: Grants access to all extrinsics _except_ for specified ones within specified pallets.

This allows for precise delegation, such as granting an agent permission only to manage asset documentation (`asset::add_documents`, `asset::remove_documents`) but nothing else.

## Permission Groups

### Predefined Groups

Polymesh offers several built-in agent groups for common use cases:

| Group Name      | Description                                                                                                                                                        |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Full`          | Grants all permissions for the asset.                                                                                                                              |
| `ExceptMeta`    | Grants all permissions _except_ those related to managing agent identities and permissions (`externalAgents` pallet).                                              |
| `PolymeshV1PIA` | Grants permission to all extrinsics in the CorporateAction, CorporateBallot and CapitalDistribution pallets                                                        |
| `PolymeshV1CAA` | Grants permission to the `issue`, `redeem` and `controller_transfer` extrinsics from the `Asset` pallet and all extrinsics in the STO pallet, except `sto::invest` |

### Custom Groups

Custom agent groups allow issuers to define highly specific permissions for agents on a per-asset basis.

#### Creating a Custom Agent Group

Custom agent groups are initially created using the `externalAgents::create_group` method.

**Parameters:**

- `asset_id`: The AssetId (UUID) of the asset.
- `perms`: The permissions for the group, defined as an `ExtrinsicPermissions` structure (see below).

**Effects:**

- Creates a new custom agent group for the asset, assigning it a unique group ID (`AGId`). The group ID is used when inviting or assigning agents.

**Errors:**

- Creating a permission group can fail if the caller is not authorized or if the permissions structure is too large.

#### Defining Permissions: `ExtrinsicPermissions` Structure

The `perms` parameter uses the `ExtrinsicPermissions` structure, which allows for fine-grained control over what actions an agent group can perform. Permissions are defined in two layers:

1. **Pallet Level**: Specify which pallets the group can interact with.
2. **Extrinsic Level**: For each pallet, specify which extrinsics (methods) are allowed or denied.

At both levels, you can use:

- `Whole`: All pallets or all extrinsics in a pallet.
- `These`: Only the specified pallets or extrinsics.
- `Except`: All except the specified pallets or extrinsics.

**Example:**

- To allow only documentation management, set `perms` to allow only the `Asset` pallet and the pallet's `add_documents` and `remove_documents` extrinsics:
  - At the pallet level: `These([Asset])`
  - At the extrinsic level for `Asset`: `These([add_documents, remove_documents])`

:::info
When defining custom agent permissions, pallet names use `UpperCamelCase` (e.g., `Asset`), and extrinsic names use `snake_case` (e.g., `add_documents`). The chain metadata can be used to identify supported pallets and functions. [Subscan](https://polymesh.subscan.io/runtime) offers a convenient tool for exploring the chain metadata to identify correct pallet and extrinsic names.
:::

:::warning
When using `Except` at either the pallet or extrinsic level, be aware that future chain upgrades may add new pallets or extrinsics. Agents in a group with `Except` permissions could automatically gain access to new functionality, which may not be intended. For maximum security, prefer using `These` to explicitly enumerate allowed actions.
:::

:::warning
Carefully consider whether to grant access to the `ExternalAgents` pallet when defining custom group permissions. Granting permission to this pallet allows agents to modify agent groups and permissions including their own. To prevent agents from escalating their privileges or altering group membership, it is recommended to **not include** the `ExternalAgents` pallet unless such administrative control is intended.
:::

#### Modifying Custom Groups

- Use `externalAgents::set_group_permissions(asset_id, id, perms)` to update the permissions for an existing custom group. This method is identical to the `create_group` method described above but takes an additional `id` parameter for the agent group too be modified.

## Agent Lifecycle

Managing agents involves a multi-step process at the chain level:

### 1. Invitation

An existing agent with permission to manage agents invites a new agent by creating an authorization request using the `identity::addAuthorization` extrinsic (from the `identity` pallet), with `AuthorizationData::BecomeAgent` specifying the asset and agent group.

### 2. Acceptance

The invited agent must accept the authorization using the `externalAgents::accept_become_agent` extrinsic, providing the authorization ID. This links the agent to the specified group for the asset.

- If the group's permissions are later changed, the agent's permissions update automatically.
- The agent can reject the authorization using `identity::removeAuthorization`.

### 3. Changing Group

An agent's group can be changed by an authorized agent using the `externalAgents::change_group` extrinsic.

### 4. Abdication (Self-Removal)

An agent can remove themselves from an asset using the `externalAgents::abdicate` extrinsic. The last `Full` agent cannot abdicate until another `Full` agent is added.

### 5. Removal

An authorized agent can remove another agent using the `externalAgents::remove_agent` extrinsic. The last `Full` agent cannot be removed.

## Default Permissions

When an Identity creates an asset, that Identity is automatically assigned to the `Full` permission group for that asset as an agent.

## Ownership Transfer Considerations

:::warning Critical Note
Agent permissions are tied to the asset, not the asset owner's Identity. When asset ownership (control) is transferred to a new Identity, the previous owner retains their agent permissions unless explicitly removed. Managing agent permissions is a key step during ownership changes. The new owner must first be added as an agent (typically to the `Full` group) before the previous owner can be removed or have their permissions reduced.
:::

## SDK Integration

The Polymesh SDK provides convenient methods to interact with the chain extrinsics and storage described above. For example, the SDK's `Permissions` class wraps calls to `externalAgents::create_group`, `externalAgents::remove_agent`, and related extrinsics, and provides helpers for querying agent groups and permissions. See the [SDK documentation](/sdk-docs/) for details.

### Permissions (Asset Side)

The [`Permissions`](/sdk-docs/classes/API/Entities/Asset/Base/Permissions) class (accessed via `asset.permissions`) provides methods for managing and querying an asset agent roles and permissions across a asset:

- [`inviteAgent`](/sdk-docs/classes/API/Entities/Asset/Base/Permissions#inviteagent): Invites an Identity to become an agent for the asset within a specific group. Handles the `identity::addAuthorization` call.
- [`removeAgent`](/sdk-docs/classes/API/Entities/Asset/Base/Permissions#removeagent): Removes an agent associated with the asset. Handles the `externalAgents::removeAgent` call.
- [`createGroup`](/sdk-docs/classes/API/Entities/Asset/Base/Permissions#creategroup): Creates a new custom permission group. Handles the `externalAgents::createGroup` call.
- [`getAgents`](/sdk-docs/classes/API/Entities/Asset/Base/Permissions#getagents): Retrieves a list of agents and their associated groups for the asset.
- [`getGroup`](/sdk-docs/classes/API/Entities/Asset/Base/Permissions#getgroup): Retrieves details for a specific permission group.
- [`getGroups`](/sdk-docs/classes/API/Entities/Asset/Base/Permissions#getgroups): Retrieves all permission groups associated with the asset.

### AssetPermissions (Identity Side)

The [`AssetPermissions`](/sdk-docs/classes/API/Entities/Identity/AssetPermissions) class provides methods for managing and querying an Identity's agent roles and permissions across assets:

- [`get`](/sdk-docs/classes/API/Entities/Identity/AssetPermissions#get): Retrieve all assets over which this Identity has agent permissions, with the corresponding permission group.
- [`getGroup`](/sdk-docs/classes/API/Entities/Identity/AssetPermissions#getgroup): Retrieve this Identity's permission group for a specific asset.
- [`checkPermissions`](/sdk-docs/classes/API/Entities/Identity/AssetPermissions#checkpermissions): Check whether this Identity has specific transaction permissions over an asset.
- [`setGroup`](/sdk-docs/classes/API/Entities/Identity/AssetPermissions#setgroup): Assign this Identity to a different permission group for a given asset.
- [`waive`](/sdk-docs/classes/API/Entities/Identity/AssetPermissions#waive): Abdicate from the current permission group for a given asset (removes all permissions for that asset).

Acceptance of an authorization request to become an agent is done with the [Authorizations](/sdk-docs/classes/API/Entities/Identity/#authorizations) (accessed via `identity.authorizations`).

## Summary

Polymesh's agent system provides a robust and granular framework for delegating asset management responsibilities. By leveraging predefined and custom agent groups, issuers can securely grant specific permissions to third parties or internal teams, ensuring compliance and operational efficiency while adhering to the principle of least privilege. The two-stage invitation/acceptance process adds a layer of security, requiring explicit consent from the designated agent.
