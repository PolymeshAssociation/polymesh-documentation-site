# Running a Node with Docker

> A guide for setting up and running a Polymesh node with Docker

# Running a Polymesh Node with Docker

## Introduction

Docker is an open source containerization platform which allows developers to package, ship, and run any application as a lightweight, portable, self-sufficient container.

For convenience Polymesh offers precompiled Docker container images of Polymesh. These images allow a user to quickly deploy the Polymesh software and its dependencies. A prebuilt container image can be fetched from the [Polymesh Docker Hub repository](https://hub.docker.com/r/polymeshassociation/polymesh/tags). Polymesh also published a sample [Docker-Compose file](https://github.com/PolymeshAssociation/polymesh-tools/tree/main/docker-compose) which can be used to quickly deploy a Polymesh node as part of a multi container environment. The use of Docker Compose is not covered in this guide.

---

**_Following examples are run on the Polymesh testnet chain without SSL. They can be used to quick start and learn how Polymesh can be configured. Please find out how to secure your node, if you want to operate it on the internet. Do not expose RPC endpoints unless they are correctly configured._**

---

This guide was written based on Ubuntu 22.04, but the instructions should be similar for other platforms and assumes Docker is already installed. If Docker is not yet installed follow the official [docker installation instructions](https://docs.docker.com/engine/install/ubuntu/) to install. This guide assumes you are logged in as a non-root user with sudo privileges. For security it is recommended root user login is disabled.

For additional information related to docker commands refer to [Docker Docs](https://docs.docker.com/engine/reference/run/).

## Getting the Polymesh Image

Images are available for mainnet, testnet, staging, and develop chains. There are two flavours available for each: debian and distroless. The distroless version has no shell and thus provides a reduced attack surface, whereas the debian versions shell can help with debugging during the initial setup.

For mainnet, testnet, and staging the images are tagged `<version>-<chain>-<flavour>` or `latest-<chain>-<flavour>`. At the time of writing, the current published release families include:

- `8.0.1-mainnet-{debian|distroless}` and `latest-mainnet-{debian|distroless}`
- `8.0.1-testnet-{debian|distroless}` and `latest-testnet-{debian|distroless}`
- `8.0.1-staging-{debian|distroless}` and `latest-staging-{debian|distroless}`

Develop chain images are also published from the [`develop` branch](https://github.com/PolymeshAssociation/Polymesh/tree/develop) of the Polymesh repository and are tagged `<commit-hash>-develop-<flavour>` or `latest-develop-<flavour>`. These are intended for development and testing purposes only and are **not recommended for general use or production deployments**.

The version, chain, and flavour are required for all chains. Use an explicit version tag such as `8.0.1-<chain>-<flavour>` for deterministic deployments, or use rolling tags in the form `latest-<chain>-<flavour>`.

It is recommended to use a specific `version` number for deterministic versioning. If using rolling `latest-<chain>-<flavour>` tags, you may wish to set your image pull policy to `--pull=always` to ensure the latest image is always pulled from the repository when starting the container.

Refer to the [Polymesh Docker Hub repository](https://hub.docker.com/r/polymeshassociation/polymesh/tags) for the available release tags. Your desired release tag can be pulled with the command:

```bash
sudo docker pull polymeshassociation/polymesh:8.0.1-testnet-distroless
```

The tag `:8.0.1-testnet-distroless` should be replaced with the desired release tag.

If you prefer the rolling channel tags, pull for example:

```bash
sudo docker pull polymeshassociation/polymesh:latest-testnet-distroless
```

Polymesh does not publish a plain `:latest` tag. If a release tag is omitted the docker pull command will error.

By default, if the Polymesh container image has not previously been pulled from the repository, it will be pulled when first attempting to run it. You can verify the version installed by running the following command:

```bash
sudo docker run --rm polymeshassociation/polymesh:8.0.1-testnet-distroless --version
```

**All available Polymesh [FLAGS], [OPTIONS] and \ commands can be viewed by calling:**

```bash
sudo docker run --rm polymeshassociation/polymesh:8.0.1-testnet-distroless --help
```

## Running a node

With the image downloaded you can now run your first testnet node:

```bash
sudo docker run -u root --rm -it polymeshassociation/polymesh:8.0.1-testnet-distroless --chain testnet
```

Note: the above command is required to be run as the root user with the flag `-u` or `--user root` in order for the user to have suitable permissions to successfully run the node.

`--rm` is used to automatically remove the container when it exits.

`-it` is used to allocate an interactive, tty virtual terminal session for the container process. This allows node logs to be displayed. When you are satisfied with the configuration of your docker run command and node you can replace `-it` with `-d` or `--detach` to start a container in detached mode so it runs in the background.

`--chain testnet` is used to run a node on the `testnet` blockchain. Replacing `testnet` with `mainnet` would result in a node being created for the Polymesh mainnet blockchain. It can also be one of the predefined ones (`dev`, `local`, or `staging`)

To stop the running container first open a new terminal window. Use `sudo docker ps` to identify the Docker container ID or name for the running Polymesh container. The container is then stopped with the command:

```bash
sudo docker stop <CONTAINER ID or NAME>
```

Alternatively, Ctrl+C will stop the running container.

## Creating a Volume for Persistent Storage

When the container was stopped all records of it are automatically removed. This is not what you want for a live blockchain node. If you want chain information to persist you need to define a local volume on the operating system that the container will write to. In this example we will use `/var/lib/polymesh/`:

```bash
sudo mkdir /var/lib/polymesh/
```

```bash
sudo docker run \
-u root \
--rm -it \
--volume=/var/lib/polymesh/:/var/lib/polymesh/ \
polymeshassociation/polymesh:8.0.1-testnet-distroless \
--chain testnet \
--base-path /var/lib/polymesh/
```

`--base-path` Specifies a directory where the Polymesh container should store all the data related to this chain. (If it is omitted the default base path is `/.local/share/polymesh/` and the container volume address should be updated to bind to this location)

`-v` or `--volume=<HOST VOLUME:CONTAINER VOLUME>` is used to bind mount the volume.

Now when stopping the container and starting a new one the blockchain information persists and the node will recommence syncing the chain where it previously stopped.

## Managing the Node Network Key

In v8+, node network keys are not automatically generated when missing. This is intentional so operators can explicitly manage and back up the key material used for node identity.

Recommended approach:

- Keep your node key in persistent storage and include it in your backup procedures.
- Default node key type is `ed25519` (`--node-key-type ed25519`).
- In the default configuration, the key is stored under:
  - `/<base-path>/chains/<chain-name>/network/secret_ed25519`
- If your key is in this default location, you do not need `--node-key-file`.
- Use `--node-key-file` only when intentionally storing the key in a custom location.

Preferred one-time key generation:

```bash
sudo docker run \
--user root \
--rm -it \
--volume=/var/lib/polymesh/:/var/lib/polymesh/ \
polymeshassociation/polymesh:8.0.1-testnet-distroless \
key generate-node-key --base-path /var/lib/polymesh/ --chain testnet
```

Optional: inspect the generated key and print its peer ID:

```bash
sudo docker run \
--user root \
--rm -it \
--volume=/var/lib/polymesh/:/var/lib/polymesh/ \
polymeshassociation/polymesh:8.0.1-testnet-distroless \
key inspect-node-key --file /var/lib/polymesh/chains/testnet/network/secret_ed25519
```

If you use the default location shown above, no explicit node-key argument is required at startup. Use an explicit option only for custom layouts:

```bash
--node-key-file /secure/node-keys/validator-1-secret_ed25519
```

For testing you can avoid separate key generation by using `--unsafe-force-node-key-generation`. This forces key generation if the node-key-file does not exist on container start, which is useful for testing but not recommended for production.

`--unsafe-force-node-key-generation` is considered unsafe for active authorities because identity changes can break connectivity with peers that expect a stable peer ID.

```bash
sudo docker run \
--user root \
--rm -it \
--volume=/var/lib/polymesh/:/var/lib/polymesh/ \
polymeshassociation/polymesh:8.0.1-testnet-distroless \
--chain testnet \
--base-path /var/lib/polymesh/ \
--unsafe-force-node-key-generation
```

If you use this flag, remove it for all subsequent restarts.

## Running a Node as a Non Root User

So far your nodes have been run as the root user. For security it is advised to run the container as a non-root user. This section will cover the steps required to run a container as a non-root user. In this section you will create a system user, with no home directory and no login capabilities called `polymesh` and run the Polymesh container as that user.

```bash
sudo useradd -r -M -s /usr/sbin/nologin polymesh
```

Before you run your node you need to ensure this new user has ownership of the storage directory and all files within. This step is essential or the node will fail to run due to permission errors.

```bash
sudo chown polymesh:polymesh /var/lib/polymesh/ -R
```

Now that your system user has ownership of your storage volume you can run the node. To do this you will use the `-u` or `--user` Docker flag. As the “polymesh” user does not exist in the container we must instead specify the UID (user ID) and GID (group ID) for this user explicitly. In the below example `$(id -u polymesh)` and `$(id -g polymesh)` return the UID and GID for the polymesh user. Alternatively, they could be specified explicitly e.g. `--user 999:999` if those are the UID and GID assigned to the polymesh user:

```bash
sudo docker run \
--user $(id -u polymesh):$(id -g polymesh) \
--rm -it \
--volume=/var/lib/polymesh/:/var/lib/polymesh/ \
polymeshassociation/polymesh:8.0.1-testnet-distroless \
--chain testnet \
--base-path /var/lib/polymesh/
```

## Naming your Node and Container

By default, Polymesh assigns a random node name. This can be seen in the node log upon startup. e.g. `Node name: elastic-scarecrow-5175`. Similarly, Docker assigns a random name to the container running the node. For ease of identification users can optionally assign a custom name of their choice for both, using the `--name <name>` flag as shown in this example:

```bash
sudo docker run \
--name my-container-name \
--user $(id -u polymesh):$(id -g polymesh) \
--rm -it \
--volume=/var/lib/polymesh/:/var/lib/polymesh/ \
polymeshassociation/polymesh:8.0.1-testnet-distroless \
--chain testnet \
--name my-node-name \
--base-path /var/lib/polymesh/
```

The above command runs a Docker container called `my-container-name` and a Polymesh node called `my-node-name`. The name can be arbitrary, but there is a character limit.

Note - the name assigned for the node will be publicly visible in the telemetry sent to Polymesh's servers. (Telemetry is enabled by default). Once your node is running it should appear in the chain telemetry which can be found at the [Polymesh Telemetry Page](https://stats.polymesh.network/).

The Docker container can now be addressed by name. For example, to stop the node you can run the command:

```bash
sudo docker stop my-container-name
```

## Automatically Restarting your Node

Your node should automatically restart in the case of an intermittent failure. This may be a server restart or crash of the Docker container. To achieve this, you will use the `--restart` flag. The recommended restart policy is `always`:

```bash
sudo docker run \
--name my-container-name \
--user $(id -u polymesh):$(id -g polymesh) \
--restart always \
-it \
--volume=/var/lib/polymesh/:/var/lib/polymesh/ \
polymeshassociation/polymesh:8.0.1-testnet-distroless \
--chain testnet \
--name my-node-name \
--base-path /var/lib/polymesh/
```

In the above example we have replaced the `--rm` flag with `--restart always`. To confirm the restart policy is correctly configured you can reboot your server:

```bash
sudo reboot
```

While the server is rebooting your node will no longer be displayed on the Polymesh telemetry page, after it has restarted it will reappear. Following restart, you can also run:

```bash
sudo docker ps
```

to confirm your container is listed as running.

On Debian and Ubuntu, the Docker service is configured to start on boot by default. If the container does not restart automatically you may need to review your configuration for both `docker.service` and `containerd.service`

If you wish to stop your node you can use the command:

```bash
sudo docker stop my-container-name
```

Note: as the restart flag is configured as `always` should the server be rebooted the node will restart. If you no longer want your node to restart, you need to either remove the container or update the container restart policy.

To remove the container:

```bash
sudo docker rm my-container-name
```

To update the container restart policy:

```bash
sudo docker update --restart=no my-container-name
```

## Exposing Container Ports (Libp2p, RPC [HTTP + WebSocket] & Prometheus)

There are 3 main ports you may wish to expose for your node, depending on your application. You should only expose ports you require.

:::note
JSON-RPC HTTP and WebSocket connections are served from the same RPC endpoint. If you are running a pre-v8 release that still has separate HTTP and WS options, continue to use that release's CLI help output.
:::

1. Libp2p – The port that your node will listen for p2p traffic on. Default port: 30333. The default libp2p port can be overridden using the `--port <PORT>` flag on your Polymesh instance. This should always be exposed for both your container and your firewall to ensure your node is able to sync with the chain.
2. Remote Procedure Calls (HTTP + WebSocket) – The port that your node will listen for incoming RPC traffic on. Default port: 9944. A custom RPC server TCP port can be specified using the `--rpc-port <PORT>` flag on your Polymesh instance.
3. Prometheus – By default Polymesh exposes an endpoint which serves metrics in the [Prometheus exposition format](https://prometheus.io/docs/concepts/data_model/). Default port: 9615. You can change the port with `--prometheus-port <PORT>`. Prometheus metrics can be disabled with the flag `--no-prometheus`

### Bridged Network

By default, a Docker container creates a separate network stack which is bridged to the host network (`--network=bridge`). An IP address will be allocated for containers on the bridge's network and traffic will be routed through this bridge to the container. To communicate with the container network the required ports must be exposed. Ports are exposed using the `-p` or `--publish` flag in the format `<hostPort>:<containerPort>`. It is best practice to only expose required ports. E.g. add `-p 30333:30333` to the Docker run command to expose the libp2p port.

The default configuration for RPC and Prometheus is to allow traffic from localhost only. As, by default, Docker creates a separate network from the host network, connections from localhost will be refused even if the required ports are published. To allow the host system to communicate with the containerized Polymesh instance, the `--rpc-external` or `--prometheus-external` flags must be added as applicable. Additionally, for RPC connections the `--rpc-cors <ORIGINS>` flag should be added, where `<ORIGINS>` is a comma separated list of origins (protocol://domain e.g. https://mainnet-app.polymesh.network/) allowed to access the RPC server (including WebSocket connections on the same endpoint). A value of `all` will disable origin validation. When running in --dev mode the default is to allow all origins.

Note: adding these flags allows access from outside your host network. Ensure your firewall is configured to allow or block traffic on these ports as required. If running an [operator node](#running-an-operator-node) it is not recommended to expose RPC externally.

Example of node configuration with exposed container ports to allow access from host localhost or WAN:

```bash
sudo docker run \
--name my-container-name \
--user $(id -u polymesh):$(id -g polymesh) \
--rm \
-it \
--volume=/var/lib/polymesh/:/var/lib/polymesh/ \
-p 30333:30333 \
-p 9944:9944 \
-p 9615:9615 \
polymeshassociation/polymesh:8.0.1-testnet-distroless \
--chain testnet \
--name my-node-name \
--base-path /var/lib/polymesh/ \
--rpc-external \
--rpc-cors all \
--prometheus-external
```

### Host Network

An alternate option is to use the host's network stack inside the container. With the `--network` flag set to `host` a container will share the host's network stack and all interfaces from the host will be available to the container. Compared to the default bridge mode, the host mode gives significantly better networking performance since it uses the host's native networking stack whereas the bridge has to go through one level of virtualization through the Docker daemon.

Warning: `--network=host` gives the container full access to local system services and is therefore considered insecure. This option should be used with caution.

Example of Docker node configuration with --network=host:

```bash
sudo docker run \
--name my-container-name \
--user $(id -u polymesh):$(id -g polymesh) \
--rm \
-it \
--volume=/var/lib/polymesh/:/var/lib/polymesh/ \
--network=host \
polymeshassociation/polymesh:8.0.1-testnet-distroless \
--chain testnet \
--name my-node-name \
--base-path /var/lib/polymesh/
```

A benefit of this option is the node can be addressed directly from localhost on the host environment without exposing RPC externally. For example, calling:

```bash
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "system_localPeerId"}' http://localhost:9944/
```

will now return the Peer ID of the node.

---

Note: Not all RPC methods are safe to be exposed publicly. The default RPC methods exposed depends on the node configuration. In both of the previous two examples we did not explicitly specify the RPC methods to expose, therefore it defaulted to `--rpc-methods Auto`. `Auto`: Acts as `Safe` if RPC is served externally, e.g. when `--rpc-external` is passed, otherwise acts as `Unsafe`. `Unsafe`: Exposes every RPC method. `Safe`: Exposes only a safe subset of RPC methods, denying unsafe RPC methods. Disabled RPC methods include `author_hasKey`, `author_hasSessionKeys`, `author_insertKey`, `author_removeExtrinsic`, `author_rotateKeys`, `author_rotateKeysWithOwner`, `babe_epochAuthorship`, `childstate_getStorageSize`, `offchain_localStorageGet`, `offchain_localStorageSet`, `state_getPairs`, `state_queryStorage`, `state_queryStorageAt`, `sync_state_genSyncSpec`, `system_addLogFilter`, `system_dryRun`, `system_dryRunAt` and `system_resetLogFilter`.

The two previous node configuration examples result in different RPC methods being exposed. In the second example with `--network=host` it is possible to call unsafe RPC methods such as `author_rotateKeysWithOwner`, which is not possible for first example with `--rpc-external` configured. External unsafe methods can also be forced by setting `--rpc-methods Unsafe` and `--unsafe-rpc-external` as required.

## Configuring Pruning

In v8+, pruning is configured separately using `--state-pruning` and `--blocks-pruning`.

- `--state-pruning` controls how much historical state data is retained. The default is `256`, which keeps the last 256 finalized blocks.
- `--blocks-pruning` controls how much historical block body data is retained. The default is `archive-canonical`, which keeps finalized blocks. Retaining finalized block bodies allows the finalized chain to be replayed later, but historical state is not directly queryable unless it is also retained with state pruning or reconstructed separately.

Both flags accept `archive`, `archive-canonical`, or a block count (for example `--state-pruning 30000`).

:::tip
Pruning mode is stored in the database when it is first created. On subsequent runs, you can omit the pruning flags and let the node load the stored settings. If you do pass pruning flags again, they must match the stored mode or the node will error. The exception is `--state-pruning NUMBER`: the numeric limit can be changed between runs without purging, but increasing it only affects future pruning and does not restore state that was already pruned. If you intentionally change to a different pruning mode later, the database must be [purged](#purging-chain-database) before restarting with the new settings.
:::

## Purging Chain Database

On occasions you may wish to purge your blockchain database. For example, you may wish to remove partial files created as a result of stopping and starting your node, or if you are changing your node to an operator node and need to change state/block pruning modes. In that instance you will need to either resync from scratch or restore a database backup from a node with the same pruning settings. However, before resyncing the chain you will first need to stop your running node, remove the stopped docker container and purge existing database. (refer to stop and remove commands in the [Automatically Restarting your Node](#automatically-restarting-your-node) section)

Once your container is stopped and removed (if you are not restarting with the same configuration) the database can be purged with the following command:

```bash
sudo docker run \
-u $(id -u polymesh):$(id -g polymesh) \
--rm -it \
-v /var/lib/polymesh/:/var/lib/polymesh/ \
polymeshassociation/polymesh:8.0.1-testnet-distroless \
purge-chain \
--chain testnet  \
--base-path /var/lib/polymesh/
```

You will be presented with a prompt to confirm you wish to remove the database which you need to confirm.

```bash
Are you sure to remove "/var/lib/polymesh/chains/testnet/db"? [y/N]: y
"/var/lib/polymesh/chains/testnet/db" removed.
```

Ensure your command specifies the correct `--base-path`, volumes and `--chain` for the database you wish to remove.

## Running an Operator Node

The Operator role on Polymesh is permissioned. Operators must be regulated capital market participants that meet specific criteria and be approved by Polymesh Governance. For more information on becoming an operator visit the [Polymesh Website](https://polymesh.network/node-operators)

Validator nodes use the same pruning defaults described in the [Configuring Pruning](#configuring-pruning) section unless you explicitly override them.

For most validator nodes the defaults are appropriate: `archive-canonical` block pruning retains all finalised block bodies, while 256-block state pruning is sufficient for consensus participation without the significant additional disk space that full state archive requires.

To run a node as an operator, add the `--validator` flag to the node configuration. Below is an example of a node configured as an operator:

```bash
sudo docker run \
--name my-container-name \
--user $(id -u polymesh):$(id -g polymesh) \
--restart always \
-it \
--volume=/var/lib/polymesh/:/var/lib/polymesh/ \
-p 30333:30333 \
-p 9615:9615 \
--ulimit nofile=1024:10240 \
polymeshassociation/polymesh:8.0.1-testnet-distroless \
--chain testnet \
--validator \
--name my-node-name \
--base-path /var/lib/polymesh/ \
--wasm-execution compiled \
--db-cache 4096 \
--db-max-total-wal-size 1024 \
--prometheus-external
```

If you need different retention for validator infrastructure, add the appropriate pruning flags to the command when the database is first created.

## Generating Node Session Keys

Session keys are the keys that an operator node uses to sign data needed for consensus. Session keys are typically generated in the client, although they don't have to be, and are stored on the operator node itself. Session keys are not meant to control funds and should only be used for their intended purpose. They can be used to perform actions that will result in a penalty, like double signing. Hence, it is important to keep these keys secure. They can be changed regularly.

Polymesh uses five session keys:

- GRANDPA: ed25519
- BABE: sr25519
- I'm Online: sr25519
- Authority Discovery: sr25519
- BEEFY: ecdsa (Polymesh V8+ only)

These keys can either be generated offline and injected in the operator node or can be generated within the operator node by calling the appropriate RPC method. Once generated the session keys should be persisted.

The official Polymesh docker images contain a small binary to generate the session keys and insert them in the keystore. This is the simplest method to generate session keys as it does not require exposing unsafe RPC methods externally or installing `curl` in the container or in a sidecar.

This binary is located in `/usr/local/bin/rotate`. In v8, session key rotation requires an ownership proof, so the rotate workflow uses `author_rotateKeysWithOwner` and requires your **stash AccountId** in hex as input (`0x` + 32-byte raw public key bytes). An account transformation tool such as https://polymesh.subscan.io/tools/format_transform can be used to convert your stash account address to the required hex public key format.

```bash
sudo docker exec -u $(id -u polymesh):$(id -g polymesh) my-container-name /usr/local/bin/rotate <stash_account_id_hex>
```

Example output:

```json
{
  "keys": "0x4e6106...b0546b",
  "proof": "0x59e7e5...85901"
}
```

If needed, you can call the RPC endpoint directly:

```bash
curl -X POST http://127.0.0.1:9944 -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","method":"author_rotateKeysWithOwner","params":["<stash_account_id_hex>"],"id":1}'
```

You must retain both values from the response:

- `keys`: The concatenated public session keys.
- `proof`: The ownership proof required when setting session keys on-chain.

Important behavior changes:

- Each call to `author_rotateKeysWithOwner` rotates to a fresh set of session keys.
- Save `keys` and `proof` immediately; if lost, you must rotate again and re-submit the new values on-chain.
- There is currently no RPC to generate ownership proofs for existing session keys already in the keystore.
- Manual external key generation/insertion workflows that do not produce a proof are not sufficient for setting keys on-chain.

The private keys are stored in a keystore on your operator server, for example in `/<base path>/chains/testnet/keystore/`.

After you have generated your session keys refer to the [Polymesh Operator Guide](https://github.com/PolymeshAssociation/polymesh-tools/tree/main/docs/operator#bonding-polyx) for steps required to bond POLYX, set session keys and activate your operator node. **Ensure you wait before activating your operator node until all your nodes are fully synced with the chain.**
