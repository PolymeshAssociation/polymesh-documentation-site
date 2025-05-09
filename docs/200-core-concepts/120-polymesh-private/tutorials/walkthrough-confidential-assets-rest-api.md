---
sidebar_position: 3
title: Confidential Assets Walkthrough
sidebar_label: Confidential Assets - REST API
description: 'Walkthrough using Polymesh Private REST API for Confidential Assets'
subsite: polymesh-private-docs
id: 'confidential-assets-walkthrough'
slug: '/tutorials/confidential-assets-walkthrough'
tags: ['confidential-assets', 'rest-api', 'walkthrough']
---

## Introduction

This page provides code snippets and example responses for each [Confidential Asset sequence diagram](../confidential-assets/diagrams.md), demonstrating how the various Confidential Asset related transactions can be executed utilizing the Polymesh Private REST API.

As some code relies on the output of previous steps the code snippets must be executed in the same order as they appear on this page. Environment variables are used to store intermediary values needed for later steps.

The actors involved in these examples are:

- Sender: this is the entity that creates and issues the Confidential Asset, and then transfers some tokens to the Receiver.
- Receiver: this is the entity that receives tokens of the Confidential Asset from the Sender.
- Auditor: this is the entity that receives an encrypted copy of the settlement instruction details between the Sender and Receiver.
- Mediator: this is the entity that, as well as receiving an encrypted copy of the settlement instruction details, also is required to affirm the settlement instruction.
- Venue Owner: this is the entity that, creates the settlement instructions.

## Prerequisites

Ensure you have `curl` and `jq` installed.

If you are using the [Polymesh Private Development Environment](/polymesh-private/developer-tooling#development-environment), you can run the examples without additional steps.

The examples use the Polymesh Private Rest API, as detailed [here](/polymesh-private/developer-tooling#usage-via-polymesh-rest-api).

The [Development Environment](/polymesh-private/developer-tooling#development-environment) includes initial setup of the external signing manager and keys which are used in these examples.

:::note

The development environment can take a few minutes to complete initialization. Once the docker images have been pulled you can check the status of the environment by visiting [http://localhost:3030/status/pp](http://localhost:3030/status/pp). Alternatively, you can check if the Polymesh Private Development Environment has finished initialization as follows:

```bash
docker compose logs polymesh-private-rest-api-init
```

Example response:

```bash
(...)
polymesh-private-rest-api-init-1  | Venue_Owner DiD: 0x74ad11e9f627b7dbc0fa7177b1d8fa5c7897d002a20e7d38665b54b64c48cb07
polymesh-private-rest-api-init-1  | Setup has been completed
```

The last line should indicate either _Setup has been completed_ or _Setup has already been completed_.
:::

:::tip
The developer environment hosts Swagger documentation for the REST API, providing insights into the transactions used in the following walkthroughs. The REST API is typically at [http://localhost:3001](http://localhost:3001) by default when running.
:::

:::tip
To view on-chain events emitted, visit [https://testnet-app.polymesh.live](https://testnet-app.polymesh.live/?rpc=ws%3A%2F%2Flocalhost%3A9944#/explorer). This link connects to the default Polymesh Private Developer Environment node via websocket at `ws://localhost:9944`. Note that the UI displays events emitted after it's opened, so ensure it's active before submitting transactions.
:::

## 1 Confidential Account Setup

Refer to the Confidential Account Setup sequence diagram [here](../confidential-assets/diagrams.md#1-confidential-account-setup).

Make sure you are in the folder with the [compose](https://github.com/PolymeshAssociation/polymesh-private-dev-env/blob/main/compose.yaml) file.

The [Development Environment](/polymesh-private/developer-tooling#development-environment) creates a signing key and DID for the Mediator used in the below examples, so we extract that to an environment variable first.

```bash
export MEDIATOR_DID=$(docker compose logs polymesh-private-rest-api-init | grep "Mediator_did" | sed -n -e 's/^.*Mediator_did: //p')
```

You also need to know the addresses of Polymesh Private Rest API and the indexer GraphQL endpoint., below we use defaults from the [Development Environment](/polymesh-private/developer-tooling#development-environment).

```bash
export PP_REST_API=http://localhost:3001
export PP_GRAPHQL=http://localhost:3000
```

In the next steps we generate ElGamal key pairs for the asset sender, receiver, mediator and auditor. For the sender and receiver their ElGamal public key is registered to their on-chain DID.

### 1.1 Generate ElGamal Key Pair for the Sender

```bash
export RESPONSE_1_1=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-accounts/create' \
  -H 'accept: application/json')

export SENDER_CONFIDENTIAL_ACCOUNT=$(echo $RESPONSE_1_1 | jq -r .publicKey)

echo $RESPONSE_1_1 | jq
```

Example response:

```json
{
  "publicKey": "0x946e47f48687340014839988255eb4a925ea90308b847ade04e0ab1f1ab92152"
}
```

### 1.2 Register Confidential Account for the Sender

```bash
export RESPONSE_1_2=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-accounts/'"$SENDER_CONFIDENTIAL_ACCOUNT"'/link' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "sender-1",
    "processMode": "submit"
  }
}')

echo $RESPONSE_1_2 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0x1bba0d5da5b4128a0097f63a4b7cc14b10b90a368b74644c76b45481fc80752b",
      "transactionHash": "0x7a690d7456ce677bb6e8891a0e8164196be5ec2ff5a912852711c856b4108596",
      "blockNumber": "179",
      "type": "single",
      "transactionTag": "confidentialAsset.createAccount"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.083286",
      "total": "0.083286"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "100000",
      "type": "Caller",
      "address": "5CHsus2r3ADdRsCaX6jMtpeyvHPpM6SrDwb5caG56d6RxwtP"
    }
  }
}
```

### 1.3 Generate ElGamal Key Pair for the Receiver

```bash
export RESPONSE_1_3=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-accounts/create' \
  -H 'accept: application/json')

export RECEIVER_CONFIDENTIAL_ACCOUNT=$(echo $RESPONSE_1_3 | jq -r .publicKey)

echo $RESPONSE_1_3 | jq
```

Example response:

```json
{
  "publicKey": "0x2eaf27421aecd0c7ba91382728b62e6083c1185c9ed50ea79307e3409eae025a"
}
```

### 1.4 Register Confidential Account for the Receiver

```bash
export RESPONSE_1_4=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-accounts/'"$RECEIVER_CONFIDENTIAL_ACCOUNT"'/link' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "receiver-1",
    "processMode": "submit"
  }
}')

echo $RESPONSE_1_4 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0x7320b7c92ffbda01ede526eb67d90ea4ea86f316957b037a973a7cef24f58b88",
      "transactionHash": "0x0462aabe8588c239fa1a3cf3a455dddc69c718355201718f91c7b39a632fb49f",
      "blockNumber": "317",
      "type": "single",
      "transactionTag": "confidentialAsset.createAccount"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.083286",
      "total": "0.083286"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "100000",
      "type": "Caller",
      "address": "5Cty5Njqs7faujv6T6PnbNexHyPqC1nqNW7DJ4BcJZumkRFW"
    }
  }
}
```

### 1.5 Generate ElGamal Key Pair for the Mediator

```bash
export RESPONSE_1_5=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-accounts/create' \
  -H 'accept: application/json')

export MEDIATOR_CONFIDENTIAL_ACCOUNT=$(echo $RESPONSE_1_5 | jq -r .publicKey)

echo $RESPONSE_1_5 | jq
```

Example response:

```json
{
  "publicKey": "0x0e673548186e8d7cc078ba247c2ef3a38476c4870dfaab28a2304615c7a9a16d"
}
```

### 1.6 Generate ElGamal Key Pair for the Auditor

```bash
export RESPONSE_1_6=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-accounts/create' \
  -H 'accept: application/json')

export AUDITOR_CONFIDENTIAL_ACCOUNT=$(echo $RESPONSE_1_6 | jq -r .publicKey)

echo $RESPONSE_1_6 | jq
```

Example response:

```json
{
  "publicKey": "0x4ec9aae087d1cf0b4ecb7d30367988ddd32d4e14e801db01605b0a0240d70201"
}
```

## 2 Confidential Asset and Settlement Venue Creation

The sequence diagram associated with the following steps can be found [here](../confidential-assets/diagrams.md#2-confidential-asset-and-settlement-venue-creation).

### 2.3 Initialises Confidential Asset Specifying Auditors and Mediators

```bash
export RESPONSE_2_3=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-assets/create' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "sender-1",
    "processMode": "submit"
  },
  "data": "Some Random Data",
  "auditors": [
    "'"$AUDITOR_CONFIDENTIAL_ACCOUNT"'",
    "'"$MEDIATOR_CONFIDENTIAL_ACCOUNT"'"
  ],
  "mediators": [
    "'"$MEDIATOR_DID"'"
  ]
}')

export CONFIDENTIAL_ASSET_ID=$(echo $RESPONSE_2_3 | jq -r .confidentialAsset)

echo $RESPONSE_2_3 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0x95e446de14beb72d46005ffb736d5b6f26381841d37d6b771b9bc3e5aa38bc88",
      "transactionHash": "0x519df8836af474fa802589cc3642c83d08f0d9c66ff07e76b9848a49d668bb78",
      "blockNumber": "434",
      "type": "single",
      "transactionTag": "confidentialAsset.createAsset"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.088817",
      "total": "0.088817"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "99999.916714",
      "type": "Caller",
      "address": "5CHsus2r3ADdRsCaX6jMtpeyvHPpM6SrDwb5caG56d6RxwtP"
    }
  },
  "confidentialAsset": "35f2d907-72b6-5a56-5351-124987913aea"
}
```

### 2.5 Submits transaction to issue tokens, specifying the unencrypted amount and the Sender's Confidential Account to credit

```bash
export RESPONSE_2_5=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-assets/'"$CONFIDENTIAL_ASSET_ID"'/issue' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "sender-1",
    "processMode": "submit"
  },
  "amount": "10000",
  "confidentialAccount": "'"$SENDER_CONFIDENTIAL_ACCOUNT"'"
}')

echo $RESPONSE_2_5 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0xd6a5463382e4fc613018c24d643a292b0ed3df2ade96b279be467fd023e2a9da",
      "transactionHash": "0x05193e6f4b158ebb85e65ac81d6bd062d5b7df60761c46d1b8414c04f40c3f40",
      "blockNumber": "978",
      "type": "single",
      "transactionTag": "confidentialAsset.mint"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.111805",
      "total": "0.111805"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "99999.827897",
      "type": "Caller",
      "address": "5CHsus2r3ADdRsCaX6jMtpeyvHPpM6SrDwb5caG56d6RxwtP"
    }
  }
}
```

### 2.8 Submits transaction to enable venue filtering (restrict permitted venues)

```bash
export RESPONSE_2_8=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-assets/'"$CONFIDENTIAL_ASSET_ID"'/venue-filtering' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "sender-1",
    "processMode": "submit"
  },
  "enabled": true
}')

echo $RESPONSE_2_8 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0xf37f03ee5b55fb51bc39f98cffa3dfc467696e3f6b0575b7aea088c8a10147b8",
      "transactionHash": "0x0f3eff847da0e8a53308d534e8a82ebf1a44d2fb04d3d57fd316c0a3ab5e71c3",
      "blockNumber": "1017",
      "type": "single",
      "transactionTag": "confidentialAsset.setVenueFiltering"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.056528",
      "total": "0.056528"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "99999.716092",
      "type": "Caller",
      "address": "5CHsus2r3ADdRsCaX6jMtpeyvHPpM6SrDwb5caG56d6RxwtP"
    }
  }
}
```

### 2.9 Creates Confidential Venue

```bash
export RESPONSE_2_9=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-venues/create' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "venue-owner-1",
    "processMode": "submit"
  }
}')

export VENUE_ID=$(echo $RESPONSE_2_9 | jq -r .confidentialVenue)

echo $RESPONSE_2_9 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0xba9586bbafbd584e8185efb1094ed0b1884ce87be56929ebe228fbf4271bd7b1",
      "transactionHash": "0x86acb6dcc26ca0f1bdf57c9e643d24e0572acec907c8c921adbe3f6ff0c9ee7b",
      "blockNumber": "1039",
      "type": "single",
      "transactionTag": "confidentialAsset.createVenue"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.077635",
      "total": "0.077635"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "100000",
      "type": "Caller",
      "address": "5EwoR8pwEmP5LTo7P58khFQMPs79oxx84WG5uucVg21cgtkZ"
    }
  },
  "confidentialVenue": "1"
}
```

### 2.12 Submits transaction to allow trading on the provided venue ID

```bash
export RESPONSE_2_12=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-assets/'"$CONFIDENTIAL_ASSET_ID"'/venue-filtering/add-allowed-venues' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "sender-1",
    "processMode": "submit"
  },
  "confidentialVenues": [
    "'"$VENUE_ID"'"
  ]
}')

echo $RESPONSE_2_12 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0x614d18868d492084b93e0d3b26826415848ccdaf7a0476ef4e9c56254ac6cf4a",
      "transactionHash": "0x62416496e394bd627cf465a93a482c7be806260e5dce4dcaeed3b7e2ea5c00aa",
      "blockNumber": "1086",
      "type": "single",
      "transactionTag": "confidentialAsset.allowVenues"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.060476",
      "total": "0.060476"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "99999.659564",
      "type": "Caller",
      "address": "5CHsus2r3ADdRsCaX6jMtpeyvHPpM6SrDwb5caG56d6RxwtP"
    }
  }
}
```

## Settlement Process

### 3 Instruction Creation

The sequence diagram associated with the following steps can be found [here](../confidential-assets/diagrams.md#3-instruction-creation).

#### 3.7 Creates Confidential Asset settlement instruction including Asset ID, Sender, Receive and optional additional Auditors and Mediators - no amount is specified

```bash
export RESPONSE_3_7=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-venues/'"$VENUE_ID"'/transactions/create' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "venue-owner-1",
    "processMode": "submit"
  },
  "legs": [
    {
      "assets": [
        "'"$CONFIDENTIAL_ASSET_ID"'"
      ],
      "sender": "'"$SENDER_CONFIDENTIAL_ACCOUNT"'",
      "receiver": "'"$RECEIVER_CONFIDENTIAL_ACCOUNT"'",
      "auditors": [
      ],
      "mediators": [
      ]
    }
  ],
  "memo": "Transfer of ACME Asset"
}')

echo $RESPONSE_3_7 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0x803ffa27d57ae15479aae6e41860fbbe87627834f70765772bde023cab6ef9d3",
      "transactionHash": "0x28c4c1515002d301c0bf40864314dab961769704f0ed11a7b2e9b64a2a966944",
      "blockNumber": "1163",
      "type": "single",
      "transactionTag": "confidentialAsset.addTransaction"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.563099",
      "total": "0.563099"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "99999.922365",
      "type": "Caller",
      "address": "5EwoR8pwEmP5LTo7P58khFQMPs79oxx84WG5uucVg21cgtkZ"
    }
  },
  "confidentialTransaction": "1"
}
```

### 4 Sender proof generation and affirmation

The sequence diagram associated with the following steps can be found [here](../confidential-assets/diagrams.md#4-sender-proof-generation-and-affirmation).

#### 4.2 Requests pending instructions

For this example we will just take the first instruction

```bash
export RESPONSE_4_2=$(curl --silent --request 'GET' \
  ''"$PP_REST_API"'/confidential-accounts/'"$SENDER_CONFIDENTIAL_ACCOUNT"'/associated-transactions?direction=Outgoing' \
  -H 'accept: application/json')

export CONFIDENTIAL_TRANSACTION_ID=$(echo $RESPONSE_4_2 | jq -r '.results[0]')

echo $RESPONSE_4_2 | jq
```

Example response:

```json
{
  "results": ["1"],
  "total": "1"
}
```

#### 4.4 Requests instruction details

For this example we just use the first leg for simplicity

```bash
export RESPONSE_4_4=$(curl --silent --request 'GET' \
  ''"$PP_REST_API"'/confidential-transactions/'"$CONFIDENTIAL_TRANSACTION_ID"'' \
  -H 'accept: application/json')

export LEG_ID=$(echo $RESPONSE_4_4 | jq -r '.legs[0].id')

echo $RESPONSE_4_4 | jq
```

Example response:

```json
{
  "id": "1",
  "venueId": "1",
  "memo": "Transfer of ACME Asset",
  "status": "Pending",
  "createdAt": "1970-01-01T00:00:01.163Z",
  "legs": [
    {
      "id": "0",
      "sender": {
        "publicKey": "0x946e47f48687340014839988255eb4a925ea90308b847ade04e0ab1f1ab92152"
      },
      "receiver": {
        "publicKey": "0x2eaf27421aecd0c7ba91382728b62e6083c1185c9ed50ea79307e3409eae025a"
      },
      "mediators": [
        {
          "did": "0x25c8feea244481af359313276fe44540d93d22e1cff4facd18a618cd86ecbd2a"
        }
      ],
      "assetAuditors": [
        {
          "asset": {
            "id": "35f2d907-72b6-5a56-5351-124987913aea"
          },
          "auditors": [
            {
              "publicKey": "0x0e673548186e8d7cc078ba247c2ef3a38476c4870dfaab28a2304615c7a9a16d"
            },
            {
              "publicKey": "0x4ec9aae087d1cf0b4ecb7d30367988ddd32d4e14e801db01605b0a0240d70201"
            }
          ]
        }
      ]
    }
  ]
}
```

#### 4.6-13 Generate sender proof using current encrypted balance, amount to send and all required auditor and mediator confidential accounts. Submit proof to the chain

```bash
export RESPONSE_4_12=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-transactions/'"$CONFIDENTIAL_TRANSACTION_ID"'/affirm-leg/sender' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "sender-1",
    "processMode": "submit"
  },
  "legId": "'"$LEG_ID"'",
  "legAmounts": [
    {
      "confidentialAsset": "'"$CONFIDENTIAL_ASSET_ID"'",
      "amount": "1000"
    }
  ]
}')

echo $RESPONSE_4_12 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0x8eb237e52ff5962f59b160a8b0ab2e5296e3e91bddb54724f8b8e1d61318cb76",
      "transactionHash": "0x61a04ded6e8164d261b91cca2f1a640e3214551bd31b35ddee0a62d5f21d843d",
      "blockNumber": "1364",
      "type": "single",
      "transactionTag": "confidentialAsset.affirmTransactions"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.540327",
      "total": "0.540327"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "99999.599088",
      "type": "Caller",
      "address": "5CHsus2r3ADdRsCaX6jMtpeyvHPpM6SrDwb5caG56d6RxwtP"
    }
  }
}
```

### 5 Receiver zero knowledge proof verification

The sequence diagram associated with the following steps can be found [here](../confidential-assets/diagrams.md#5-receiver-zero-knowledge-proof-verification).

#### 5.5 Query previously emitted instruction affirmation events to retrieve sender proof(s)

:::warning

The next step is querying the **GraphQL** endpoint to retrieve information

:::

```bash
export RESPONSE_5_5=$(curl --silent ''"$PP_GRAPHQL"'' \
    --header 'Accept-Encoding: gzip, deflate, br' \
    --header 'Content-Type: application/json' \
    --header 'Accept: application/json' \
    --header 'Connection: keep-alive' \
    --data-binary '{"query":"query cta {confidentialTransactionAffirmations(filter:{transactionId:{equalTo:\"'"$CONFIDENTIAL_TRANSACTION_ID"'\"},legId:{equalTo:'"$LEG_ID"'},party:{equalTo:Sender}}){nodes{transactionId,id,proofs,accountId,identityId,party,legId}}}"}' \
    --compressed)

export SENDER_PROOF_5_5=$(echo $RESPONSE_5_5 | jq -r '.data.confidentialTransactionAffirmations.nodes[0].proofs[0].proof')

echo $RESPONSE_5_5 | jq
```

Example response:

```json
{
  "data": {
    "confidentialTransactionAffirmations": {
      "nodes": [
        {
          "transactionId": "1",
          "id": "1/Sender/0xbf84839e6bc8ad6fe969f560895663fdd2c175b40c9ab3ca63df9fd7010b64f8",
          "proofs": [
            {
              "proof": "0x1004f1e8f24f21c51c9ea8ade48e370d9817eb6651ace219d3dc28dd9d07359b56f05a8c0ab21bc5596d77ea1e5cf88d25dc85986693ac7d1a9fe3f1e6c1671f6f7603df4f786d7f97accc16a4fb4b89d823a935dce7d38066f98c01e10ecb5806da780642af9abe518833dc0d22df8cb63d1d1b65c75c200017c83e07628f884fbc20316152b908be989155f7d74e6ba568b87c566a2851345d97dddf279449058d11109adb6007a43ccdd3d951653072a753b50934e91f86891edfe4c8fc516b2caa3be202dd562a5a1167a57b26de3f0f81277805b3865df82c846fab025da47f2712304def158f95ebeaf443229660ba97fb2f554637307d9f9aa5a335c0a5860a7558ecdb0b1e6f866c67c3585facb776e94870c211c03ada6741b844c6a258790242888271dc10ddcf375fcd952b4d57c42239421d4f6c2e5098087be33b5f0a47ac9bceed4df69ac63d7bc1882304d5a0cd9fc232c3bb5c0b0fd857394a334900ec9f43ffd88002ae51cf7279c005a3a21bd051e76d44ecfe079d65657da87f01544914ba4b72345652526d6a4cb8f85a6a70e644baf857d199d39b0bd6fca15eca59f01960bac31ef77d523b102b048a22322da5ebb4edb518285c5a0d9a181482b411b6bb56ce97741156e3ae64654e98d0ecdd4a9d9595dd2bc64eab793238c079d020c8859f551a93e7d1b0c382dac80bc99c2ed9265e628615e44187cf52055af6d8d7c43a1dc121340a82357dfe1af4a4652d645630749199efdcd06707810bda8bc3f2f42f1f30ac01639de25739b48672f3cc6772515036a6c1a00c7f45550ab930e39cea9932bfd2fad7c33e0cca27c0ef147d1ce8ef0b324b5df125a86db41c0272daa7b25a841e68daedd0ed99269c10d2c4a828c865f9409d5171e570d04205ed8e41702c2158284a4faaedc00c484374f62fb9e9ac802d386cca6b1830b6cc140cef84b1c614455b73ede66d7b054255b7d7e4e9b5b1025cc0f5a5086c3edfd9d552475b1a0c0e459214b8d00647c7bd6b09c1d856cfdf66133dbf0bce30429a139cb98885a31cafd782525b415871d2912ff8df0fe29e0ea2d4e7011c205f5fe16e09a4eb35e3ef4d75c11e3af5d38e752c31dabbbd9700bbd71058d6fe09ad7f28490189eb8ead7fb2780d3fe27cc526c51f8cdca896fd0bb75c770863c0e73d1e61c45073cf8f7af086071af8eabc0588681cbfc23d8a861383771cd1a8d03471059ae4e964ba9655fc6c07b6e9d72b8b6c22389b07171f36690e9aba8c1c8147cb4bb74b5bbe8aed7f1ca2e8670f6e3c6427111eabdbd9d59477fc93dfd5a284f2b5d90bbdfd8c6727790e94c83a60103d1a59f373c52b970815806598e516a8dd841c207884f15939dbc96b719179460409879c2813dc3c116e840fce3abb725e2d90f1f18c4e75a34e31d8c8b128178c1cf14212d4f0462b435c1538f9ac45b2f7f6acc663d319476a6bf810d46b0fa3fdeb93a6df83145c31c0d51c9bf43f028c2f5e0c2387bb26ff7e2655621797540034bacfa81e33177ffa2cd21c6a9c6414087f6a36c9f42b7ee2375499dba71c715c9a05edb684ba4afae5ecff26d547cae075fc0ce8a09043d9443111019b4cac3ca5b5b5c96dec7068abc08fe9c31e8ae49cd61181d810530d6d43c630e71c192cb2c869e7aba5799050072f4feccaf028d7329eaffa89aefbc06cd4ae1337882286827c33ce952f4d913f571b998d1ad662bccae070768f47130110a31a768177f0d2795b821d0552a4293f75efcb760b3fb69160003d718ced0d0001f029f22a065634276c1d00",
              "assetId": "0x35f2d90772b65a565351124987913aea"
            }
          ],
          "accountId": null,
          "identityId": "0xbf84839e6bc8ad6fe969f560895663fdd2c175b40c9ab3ca63df9fd7010b64f8",
          "party": "Sender",
          "legId": 0
        }
      ]
    }
  }
}
```

#### 5.6 Verify or decrypt sender proof using their confidential account to view the amount being sent

```bash
export RESPONSE_5_6=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-accounts/'"$RECEIVER_CONFIDENTIAL_ACCOUNT"'/receiver-verify' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "senderProof": "'"$SENDER_PROOF_5_5"'"
}')

echo $RESPONSE_5_6 | jq
```

Example response:

```json
{
  "isValid": true,
  "amount": "1000",
  "errMsg": null
}
```

### 6 Mediator zero knowledge proof verification

The following method completes all steps on the [Mediator Zero Knowledge Proof Verification](../confidential-assets/diagrams.md#6-mediator-zero-knowledge-proof-verification) sequence diagram in a single API call.

```bash
export RESPONSE_6_1_9=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-transactions/'"$CONFIDENTIAL_TRANSACTION_ID"'/verify-amounts' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "publicKey": "'"$MEDIATOR_CONFIDENTIAL_ACCOUNT"'"
}')

echo $RESPONSE_6_1_9 | jq
```

Example response:

```json
{
  "verifications": [
    {
      "isProved": true,
      "isAuditor": true,
      "isReceiver": false,
      "amountDecrypted": true,
      "amount": "1000",
      "assetId": "35f2d907-72b6-5a56-5351-124987913aea",
      "legId": "0",
      "errMsg": null,
      "isValid": true
    }
  ]
}
```

### 7 Auditor zero knowledge proof verification

The following method completes all steps on the [Auditor Zero Knowledge Proof Review](../confidential-assets/diagrams.md#7-auditor-zero-knowledge-proof-review) sequence diagram in a single API call.

```bash
export RESPONSE_7_1_5=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-transactions/'"$CONFIDENTIAL_TRANSACTION_ID"'/verify-amounts' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "publicKey": "'"$AUDITOR_CONFIDENTIAL_ACCOUNT"'"
}')

echo $RESPONSE_7_1_5 | jq
```

Example response:

```json
{
  "verifications": [
    {
      "isProved": true,
      "isAuditor": true,
      "isReceiver": false,
      "amountDecrypted": true,
      "amount": "1000",
      "assetId": "35f2d907-72b6-5a56-5351-124987913aea",
      "legId": "0",
      "errMsg": null,
      "isValid": true
    }
  ]
}
```

### 8 Instruction Affirmation

The sequence diagram associated with the following steps can be found [here](../confidential-assets/diagrams.md#8-instruction-affirmation).

#### 8.1 Submit affirm transaction for Receiver providing instruction ID and leg ID(s)

```bash
export RESPONSE_8_1=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-transactions/'"$CONFIDENTIAL_TRANSACTION_ID"'/affirm-leg/observer' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "receiver-1",
    "processMode": "submit"
  },
  "legId": "'"$LEG_ID"'",
  "party": "Receiver"
}')

echo $RESPONSE_8_1 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0x3984a247bf89de7d19a6e6692a87007cee27036991f94a1f32bea21cda6f6d2b",
      "transactionHash": "0x19578f6f3ca484a186278f070cdf65fa279223e8ce257d5704e56e05a7300d76",
      "blockNumber": "10063",
      "type": "single",
      "transactionTag": "confidentialAsset.affirmTransactions"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.077544",
      "total": "0.077544"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "99999.916714",
      "type": "Caller",
      "address": "5Cty5Njqs7faujv6T6PnbNexHyPqC1nqNW7DJ4BcJZumkRFW"
    }
  }
}
```

#### 8.2 Submit affirm transaction for Mediator providing instruction ID and leg ID(s)

```bash
export RESPONSE_8_2=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-transactions/'"$CONFIDENTIAL_TRANSACTION_ID"'/affirm-leg/observer' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "mediator-1",
    "processMode": "submit"
  },
  "legId": "'"$LEG_ID"'",
  "party": "Mediator"
}')

echo $RESPONSE_8_2 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0x3984a247bf89de7d19a6e6692a87007cee27036991f94a1f32bea21cda6f6d2b",
      "transactionHash": "0x19578f6f3ca484a186278f070cdf65fa279223e8ce257d5704e56e05a7300d76",
      "blockNumber": "10067",
      "type": "single",
      "transactionTag": "confidentialAsset.affirmTransactions"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.077544",
      "total": "0.077544"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "99999.916714",
      "type": "Caller",
      "address": "5EPBnKAMr7Pk726MuPgR5D5FvYTvdd23oeTpSofyvJEajLQo"
    }
  }
}
```

#### 8.3 Execute the settlement instruction providing instruction ID

```bash
export RESPONSE_8_3=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-transactions/'"$CONFIDENTIAL_TRANSACTION_ID"'/execute' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "sender-1",
    "processMode": "submit"
  }
  }')

echo $RESPONSE_8_3 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0x3984a247bf89de7d19a6e6692a87007cee27036991f94a1f32bea21cda6f6d2b",
      "transactionHash": "0x19578f6f3ca484a186278f070cdf65fa279223e8ce257d5704e56e05a7300d76",
      "blockNumber": "10067",
      "type": "single",
      "transactionTag": "confidentialAsset.affirmTransactions"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.077544",
      "total": "0.077544"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "99999.916714",
      "type": "Caller",
      "address": "5EPBnKAMr7Pk726MuPgR5D5FvYTvdd23oeTpSofyvJEajLQo"
    }
  }
}
```

#### 8.7 Check receiver has incoming balance

```bash
export RESPONSE_8_7=$(curl --silent --request 'GET' \
  ''"$PP_REST_API"'/confidential-accounts/'"$RECEIVER_CONFIDENTIAL_ACCOUNT"'/incoming-balances/'"$CONFIDENTIAL_ASSET_ID" \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json')

export RESPONSE_8_7_BALANCE=$(echo $RESPONSE_8_7 | jq -r '.balance')

echo $RESPONSE_8_7
```

Example response:

```bash
0x446e63c2e9302a98a548c38339524b3ed82ee9a280db564c2d8c4285d608f9450097e69147a457e4ab55f4ae5104b0a88d1e173212ff69248febe259b9dfd42b
```

Now that we have the encrypted balance we can decrypt it.

```bash
export RESPONSE_8_7_1=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-accounts/'"$RECEIVER_CONFIDENTIAL_ACCOUNT"'/decrypt-balance' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
    "encryptedValue": "'"$RESPONSE_8_7_BALANCE"'"
  }')

echo $RESPONSE_8_7_1 | jq
```

Example response:

```json
{
  "value": "1000"
}
```

#### 8.8 Apply receiver incoming balance to their current balance

```bash
export RESPONSE_8_8=$(curl --silent --request 'POST' \
  ''"$PP_REST_API"'/confidential-accounts/'"$RECEIVER_CONFIDENTIAL_ACCOUNT"'/incoming-balances/apply' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "options": {
    "signer": "receiver-1",
    "processMode": "submit"
  }
  }')

echo $RESPONSE_8_8 | jq
```

Example response:

```json
{
  "transactions": [
    {
      "blockHash": "0x48d35a0b9eb500e87b9bcef00ad64bc97843d1adb252968bf93b8e793009d6f7",
      "transactionHash": "0xf6645f5b7b59c32675bfdf5290318f409ccabc163c672f4ebcb6baa229de73e1",
      "blockNumber": "10167",
      "type": "single",
      "transactionTag": "confidentialAsset.applyIncomingBalances"
    }
  ],
  "details": {
    "status": "Succeeded",
    "fees": {
      "protocol": "0",
      "gas": "0.149623",
      "total": "0.149623"
    },
    "supportsSubsidy": false,
    "payingAccount": {
      "balance": "99999.83917",
      "type": "Caller",
      "address": "5Cty5Njqs7faujv6T6PnbNexHyPqC1nqNW7DJ4BcJZumkRFW"
    }
  }
}
```
