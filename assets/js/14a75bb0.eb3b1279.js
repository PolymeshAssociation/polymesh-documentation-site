"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[48283],{45525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"developer-resources/smart-contracts","title":"Smart Contracts","description":"Smart Contract Development","source":"@site/docs/300-developer-resources/050-smart-contracts.md","sourceDirName":"300-developer-resources","slug":"/development/smart-contracts","permalink":"/polymesh-documentation-site/development/smart-contracts","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/300-developer-resources/050-smart-contracts.md","tags":[{"inline":true,"label":"development","permalink":"/polymesh-documentation-site/tags/development"},{"inline":true,"label":"smart contracts","permalink":"/polymesh-documentation-site/tags/smart-contracts"}],"version":"current","sidebarPosition":50,"frontMatter":{"title":"Smart Contracts","description":"Smart Contract Development","id":"smart-contracts","slug":"/development/smart-contracts","sidebar_label":"Smart Contracts","tags":["development","smart contracts"]},"sidebar":"docs","previous":{"title":"SubQuery Indexer","permalink":"/polymesh-documentation-site/development/integration/subquery"},"next":{"title":"Integration Guides","permalink":"/polymesh-documentation-site/development/integration"}}');var s=n(74848),i=n(28453);const o={title:"Smart Contracts",description:"Smart Contract Development",id:"smart-contracts",slug:"/development/smart-contracts",sidebar_label:"Smart Contracts",tags:["development","smart contracts"]},r=void 0,c={},l=[{value:"Overview",id:"overview",level:2},{value:"Ink! and Tooling",id:"ink-and-tooling",level:2},{value:"Contract Ownership",id:"contract-ownership",level:2},{value:"Using Native Polymesh Functionality",id:"using-native-polymesh-functionality",level:2},{value:"Whitelist",id:"whitelist",level:3},{value:"Chain Extensions",id:"chain-extensions",level:3},{value:"Polymesh API",id:"polymesh-api",level:3},{value:"Upgradable Polymesh Ink Contract",id:"upgradable-polymesh-ink-contract",level:3},{value:"Updating the Upgradable Polymesh Ink Contract",id:"updating-the-upgradable-polymesh-ink-contract",level:4},{value:"Polymesh Contracts vs. Contracts Modules",id:"polymesh-contracts-vs-contracts-modules",level:2},{value:"Deterministic Compilation",id:"deterministic-compilation",level:2},{value:"Example Case Study",id:"example-case-study",level:2},{value:"Analysis",id:"analysis",level:3},{value:"Compilation",id:"compilation",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Usage",id:"usage",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Polymesh aims to incorporate all of the general functionality needed to issue and manage tokenised securities at its native layer."}),"\n",(0,s.jsx)(t.p,{children:"The native layer of Polymesh consists of a number of modules, each associated with a number of possible transactions (API) to facilitate this. This includes modules to manage identity and associated attestations / claims, as well as issue, distribute and settle tokenised securities."}),"\n",(0,s.jsx)(t.p,{children:"However, in addition to this general business logic encoded in the native layer of Polymesh, that does not require smart contracts to work with, Polymesh has support for smart contracts that are deployed on top of this native logic where needed."}),"\n",(0,s.jsx)(t.p,{children:"For example, a business may wish to deploy some form of DEX on top of Polymesh, that uses the native custody and settlement functionality, but defines additional business logic on top of this to manage deposits, swaps and withdrawals."}),"\n",(0,s.jsx)(t.p,{children:"Alternatively it may be that a custodian wishes to enforce additional logic on top of the native custody logic provided (for example to allow a user to unilaterally exit the custodial relationship) - this can also be managed via a smart contract that acts as a primary or secondary key attached to the identity that has custody."}),"\n",(0,s.jsx)(t.h2,{id:"ink-and-tooling",children:"Ink! and Tooling"}),"\n",(0,s.jsxs)(t.p,{children:["Polymesh smart contracts use the Substrate Ink! language - more details on this can be found at:\n",(0,s.jsx)(t.a,{href:"https://use.ink/",children:"https://use.ink/"}),"\nwhich covers the basic approaches to managing code and storage in smart contracts."]}),"\n",(0,s.jsxs)(t.p,{children:["The Polymesh App, has a dedicated Contracts tab found at:\n",(0,s.jsx)(t.a,{href:"https://mainnet-app.polymesh.network/#/contracts",children:"https://mainnet-app.polymesh.network/#/contracts"}),"\n",(0,s.jsx)(t.a,{href:"https://testnet-app.polymesh.live/#/contracts",children:"https://testnet-app.polymesh.live/#/contracts"}),"\n",(0,s.jsx)(t.a,{href:"https://staging-app.polymesh.dev/#/contracts",children:"https://staging-app.polymesh.dev/#/contracts"}),"\nwhich provides a simple UI to upload, deploy and call smart contracts."]}),"\n",(0,s.jsx)(t.h2,{id:"contract-ownership",children:"Contract Ownership"}),"\n",(0,s.jsx)(t.p,{children:"Contracts can be deployed either directly from code, or by referencing code that has been previously uploaded to the chain, via its hash."}),"\n",(0,s.jsx)(t.p,{children:"Contracts are attached to identities as keys in Polymesh. When a contract interaction triggers a call to the native Polymesh layer (for example to interact with issued assets or act as a custodian to a users portfolio) it will do so through the DID of the identity to which it is attached, regardless of what key initiated the contract interaction."}),"\n",(0,s.jsx)(t.p,{children:"When instantiating a contract, you can choose to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"attach the new contract as a secondary key to your identity (by default with empty permissions)"}),"\n",(0,s.jsx)(t.li,{children:"generate a new Child Identity and attach the new contract as the primary key of this identity"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This establishes a provenance for every smart contract (via a link to an Identity) whilst still allowing fine-grained control over the role and permissions of the smart contract."}),"\n",(0,s.jsxs)(t.p,{children:["Only keys which are attached to identities with a valid CDD claim are allowed to interact with smart contracts via the ",(0,s.jsx)(t.code,{children:"Contracts::call"})," extrinsic, and pay for these transactions like any other. The smart contract itself must also be attached to an identity with a valid CDD call, otherwise the transaction will fail."]}),"\n",(0,s.jsx)(t.p,{children:"For example, a contract that represents a non-custodial DEX may be best deployed as a primary key on its own (child) identity, so that no other key (e.g. primary key on the same identity) has the ability to detach the smart contract from its identity thus rendering it uncallable."}),"\n",(0,s.jsx)(t.p,{children:"Alternatively if you wanted to allow someone to update asset documentation with some bespoke logic (e.g. time delay) you could deploy a smart contract representing this bespoke logic, callable by your documentor, with the contract acting as a secondary key on your identity, with limited permissions to the asset documentation extrinsics."}),"\n",(0,s.jsxs)(t.p,{children:["If the smart contract includes logic that calls into the native Polymesh layer, it is important to rememeber that these calls will be interpreted by Polymesh as originating with the identity to which the smart contract is attached, not the identity of the key which initiated the transaction via ",(0,s.jsx)(t.code,{children:"Contracts::call"}),". This allows smart contracts to express powerful functionality, taking direct ownership over assets and other roles, whilst having the flexibility to allow managed access to outside callers (through delegating that management to logic implemented inside the smart contract)."]}),"\n",(0,s.jsx)(t.p,{children:"For example, a custodian may attach a smart contract as a secondary key, with the smart contract exposing an API that allows the owner of a custodied portfolio to request the smart contract (via its attached custodian identity) that the portfolio be uncustodied."}),"\n",(0,s.jsx)(t.p,{children:"Note that it is possible to have a smart contract be the primary key of a parent identity (rather than a child identity when it is deployed as such) - this can be achieved by including logic in the smart contract to accept a primary key rotation authorisation. In a similar fashion a smart contract that is a primary key, could allow additional secondary keys to be added to its identity by encoding appropriate logic that issues these authorisations in the smart contract."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Smart Contract Diagram",src:n(1921).A+"",width:"2976",height:"1905"})}),"\n",(0,s.jsx)(t.h2,{id:"using-native-polymesh-functionality",children:"Using Native Polymesh Functionality"}),"\n",(0,s.jsx)(t.p,{children:"It's important that smart contracts can interact with native Polymesh logic, specifically by reading storage (e.g. to determine the holders of an asset issued on the native layer) and calling extrinsics (e.g. to accept authorisations, or execute settlements)."}),"\n",(0,s.jsx)(t.p,{children:"Through these interactions with native logic, and because smart contracts are attached as keys to identities in Polymesh, a smart contract can control, or mediate the control of, any assets, roles (e.g. external agents / custody), attestation issuance or so on."}),"\n",(0,s.jsx)(t.p,{children:"Polymesh smart contracts can interact with native Polymesh logic in powerful and different ways."}),"\n",(0,s.jsx)(t.h3,{id:"whitelist",children:"Whitelist"}),"\n",(0,s.jsx)(t.p,{children:"Polymesh is designed to allow smart contracts interact with its native layer. However in order to introduce this powerful functionality responsibly and cautiously there is a whitelist of allowed extrinsics that can be called from smart contracts, maintained by the chains governance layer."}),"\n",(0,s.jsxs)(t.p,{children:["This whitelist (index of module and extrinsic) can be found in chain storage at ",(0,s.jsx)(t.code,{children:"polymeshContracts::callRuntimeWhitelist"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Please raise via our developer channels on Discord any requests to whitelist additional extrinsics and they'll be reviewed."}),"\n",(0,s.jsx)(t.h3,{id:"chain-extensions",children:"Chain Extensions"}),"\n",(0,s.jsxs)(t.p,{children:["Substrate defines a generic approach called Chain Extensions which allows the runtime to define certain custom features that can be used by smart contracts. The Polymesh Chain Extension logic can be found at:\n",(0,s.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/Polymesh/blob/develop/pallets/contracts/src/chain_extension.rs",children:"https://github.com/PolymeshAssociation/Polymesh/blob/develop/pallets/contracts/src/chain_extension.rs"})]}),"\n",(0,s.jsx)(t.p,{children:"Any chain extension can be called directly by a smart contract, and this is useful for example to efficiently return the DID associated with a key."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Self::env().extension().get_key_did(acc)?\n  .map(|did| did.into())\n  .ok_or(Error::MissingIdentity)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"polymesh-api",children:"Polymesh API"}),"\n",(0,s.jsxs)(t.p,{children:["The Polymesh chain extensions also include the ability to read native chain storage and call any extrinsic (if permitted by the whitelist). To ease working with these generic extensions (",(0,s.jsx)(t.code,{children:"read_storage"}),", ",(0,s.jsx)(t.code,{children:"call_runtime_with_error"}),") the Polymesh API Ink Client can be used."]}),"\n",(0,s.jsx)(t.p,{children:"The Polymesh API library provides a simple and readable API, alongside Polymesh types, to facilitate easy interactions with Polymesh, and can be built for several clients, including Ink! based smart contracts."}),"\n",(0,s.jsx)(t.p,{children:"For example, executing a manual settlement instruction in a smart contract may involve getting the next instruction identifier:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"// Get the next instruction id.\nlet instruction_id = api\n  .query()\n  .settlement()\n  .instruction_counter()\n  .map(|v| v.into())?;\n"})}),"\n",(0,s.jsx)(t.p,{children:"and then executing a corresponding manual settlement instruction:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"  api.call()\n  .settlement()\n  .execute_manual_instruction(\n      instruction_id,\n      1,\n      None\n  )\n  .submit()?;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"api.query()"})," and ",(0,s.jsx)(t.code,{children:"api.call()"})," hooks provide easy ways to query and call into the native Polymesh layer, with the API also providing the necessary types to manage parameters and returned data, alongside any errors."]}),"\n",(0,s.jsx)(t.h3,{id:"upgradable-polymesh-ink-contract",children:"Upgradable Polymesh Ink Contract"}),"\n",(0,s.jsx)(t.p,{children:"One concern with (possibly immutable) smart contracts calling into the Polymesh native layer is that Polymesh allows this native functionality (logic and storage) to be upgraded via chain upgrades. Typically these upgrades are backwards compatable, but in the case of major releases may not be."}),"\n",(0,s.jsx)(t.p,{children:"To help mitigate this Polymesh provides a proxy contract (Upgradable Polymesh Ink Contract) through which interactions with the native layer can be mediated. This provides a stable interface for smart contracts to interact with, across any breaking Polymesh upgrades."}),"\n",(0,s.jsxs)(t.p,{children:["The Upgradable Polymesh Ink Contract can be found at:\n",(0,s.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/Polymesh/tree/develop/contracts/upgradeable-polymesh-ink",children:"https://github.com/PolymeshAssociation/Polymesh/tree/develop/contracts/upgradeable-polymesh-ink"}),"\nand is a normal Polymesh smart contract, that has an API designed to be called by other smart contracts (rather than directly through the ",(0,s.jsx)(t.code,{children:"Contracts::call"})," extrinsic)."]}),"\n",(0,s.jsx)(t.p,{children:"This contract is maintained by the Polymesh Association, with the intention that if there are breaking changes during an upgrade that mean any of its functionality no longer works, a new fixed version will be deployed and made available ahead of these breaking changes."}),"\n",(0,s.jsx)(t.p,{children:"It presents a clean API such as:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"let api = PolymeshInk::new()?;\n// Accept portfolio custody and ensure we have custody.\nlet portfolio_id = api.accept_portfolio_custody(auth_id, portfolio)?;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Under the covers, the call to ",(0,s.jsx)(t.code,{children:"api.accept_portfolio_custody"})," uses a delegate call (",(0,s.jsx)(t.code,{children:"ink::env::call::build_call::<ink::env::DefaultEnvironment>().delegate"}),") into the Upgradable Polymesh Ink Contract, to submit (in this case) an extrinsic to accept portfolio custody."]}),"\n",(0,s.jsx)(t.p,{children:"The Upgradable Polymesh Ink Contract uses the Polymesh API extensively to interact with the native Polymesh layer via storage queries and executing extrinsics."}),"\n",(0,s.jsx)(t.h4,{id:"updating-the-upgradable-polymesh-ink-contract",children:"Updating the Upgradable Polymesh Ink Contract"}),"\n",(0,s.jsx)(t.p,{children:"Polymesh provides dedicated Chain Extensions to allow smart contracts to discover the latest version of the Upgradable Polymesh Ink Contract. These Chain Extensions are used by the API associated with the Upgradable Polymesh Ink Contract to help ensure it is always using the correct underlying logic via the latest contract hash / code."}),"\n",(0,s.jsxs)(t.p,{children:["In particular, from the ",(0,s.jsx)(t.code,{children:"polymesh-ink"})," crate, using ",(0,s.jsx)(t.code,{children:"let api = PolymeshInk::new()?;"})," will look up the latest Upgradable Polymesh Ink Contract hash from chain storage (",(0,s.jsx)(t.code,{children:"polymeshContracts::currentApiHash"}),") and use this address when dispatching calls to the Upgradable Polymesh Ink Contract via its API."]}),"\n",(0,s.jsxs)(t.p,{children:["Since this latest Upgradable Polymesh Ink contract hash may change (for example if a Polymesh upgrade necessitates releasing a new version with updated logic, maintaining the same external API) it is important to either re-instantiate the Polymesh Ink API everytime it is used (when constructed the API checks it is referencing the latest Upgradable Polymesh Ink Contract hash). This is preferred over using the API function ",(0,s.jsx)(t.code,{children:"check_for_upgrade"})," which will do the same on an already instantiated API object, which is more expensive. In general the ",(0,s.jsx)(t.code,{children:"PolymeshInk"})," API object should be reused within a single contract call as much as possible, and recreated on each contract call."]}),"\n",(0,s.jsxs)(t.p,{children:["The latest hash is maintained via governance, using the chain storage at ",(0,s.jsx)(t.code,{children:"polymeshContracts::apiNextUpgrade"})," to allow new Upgradable Polymesh Ink Contracts to be deployed ahead of the Polymesh upgrade to which they correspond. Following the upgrade, the next contract which uses an API constructed from this contract will trigger the chain storage (polymeshContracts::currentApiHash`) to be updated as appropriate."]}),"\n",(0,s.jsx)(t.p,{children:"The API of the Upgradable Polymesh Ink Contract includes cover functions to do useful and common actions, and wraps up multiple native Polymesh transactions and chain storage queries as needed."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Upgradable Polymesh Ink Contract API",src:n(62599).A+"",width:"561",height:"1353"})}),"\n",(0,s.jsx)(t.h2,{id:"polymesh-contracts-vs-contracts-modules",children:"Polymesh Contracts vs. Contracts Modules"}),"\n",(0,s.jsxs)(t.p,{children:["Substrate provides a library module called ",(0,s.jsx)(t.code,{children:"Contracts"})," that presents most functionality needed to interact with smart contracts (e.g. uploading code, instantiating new contracts, calling contracts) - this module has been modified slightly to enforce Polymesh specific rules that a contract must be attached to an identity with a valid CDD claim."]}),"\n",(0,s.jsxs)(t.p,{children:["In addition there is a module ",(0,s.jsx)(t.code,{children:"polymeshContracts"})," which provides an additional layer of Polymesh specific contract functionality. In particular it allows contracts to be deployed with customised permissions as a secondary key, or allow it to be deployed as a primary key (by creating a new child identity under the callers identity, and associating the contract as a primary key of this child identity)."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"polymeshContracts"})," module also manages the latest and any upcoming Upgradable Polymesh Ink Contract hashes, as well as the whitelist of extrinsics that can be called by smart contracts."]}),"\n",(0,s.jsx)(t.h2,{id:"deterministic-compilation",children:"Deterministic Compilation"}),"\n",(0,s.jsx)(t.p,{children:"Smart contracts are compiled to WASM and run via an on-chain WASM VM. WASM compilation is not deterministic out-of-the-box, meaning that two individuals compiling the same smart contract, may end up generating two different WASM blobs, with different code hashes."}),"\n",(0,s.jsx)(t.p,{children:"This can make verifying the logic of a smart contract hard, as this relies on a user being able to match the hash of the on-chain smart contract when compiling locally (to ensure that the logic on-chain matches expectations)."}),"\n",(0,s.jsx)(t.p,{children:"It is possible to compile smart contracts deterministically, which allows the above verification, either manually or via the contracts tool in SubScan."}),"\n",(0,s.jsx)(t.p,{children:"To compile deterministicically you can use:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"docker pull quay.io/subscan-explorer/wasm-compile-build:amd64-stable-1.70.0-v3.2.0\ndocker run --rm -it -v .:/builds/contract -v ./target:/target/ quay.io/subscan-explorer/wasm-compile-build:amd64-stable-1.70.0-v3.2.0 cargo contract build --release\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For more details see an example at:\n",(0,s.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/Polymesh/blob/develop/contracts/upgradeable-polymesh-ink/README.md#verifiable-build",children:"https://github.com/PolymeshAssociation/Polymesh/blob/develop/contracts/upgradeable-polymesh-ink/README.md#verifiable-build"})]}),"\n",(0,s.jsx)(t.h2,{id:"example-case-study",children:"Example Case Study"}),"\n",(0,s.jsx)(t.p,{children:"In this case study we're going to analyse, compile and deploy a smart contract that wraps POLYX (the transaction payment token of Polymesh) as a Polymesh asset, potentially allowing it to be used in settlement instructions alongside any other Polymesh asset."}),"\n",(0,s.jsxs)(t.p,{children:["The smart contract code can be found at:\n",(0,s.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/Polymesh/tree/develop/contracts/wrapped-polyx",children:"https://github.com/PolymeshAssociation/Polymesh/tree/develop/contracts/wrapped-polyx"})]}),"\n",(0,s.jsx)(t.p,{children:"Its README file includes a description of the approach and logic used in this contract. Below we focus on the Polymesh specific interactions using various mechanisms discussed above."}),"\n",(0,s.jsx)(t.h3,{id:"analysis",children:"Analysis"}),"\n",(0,s.jsx)(t.p,{children:"The Wrapped POLYX contract uses the Upgradable Polymesh Ink Contract for its interactions with the Polymesh native layers. It would be possible to do this directly via Chain Extensions, or by using the lower-level Polymesh API, but both of these approaches would be brittle if the underlying Polymesh native layer logic or API were to change during a Polymesh upgrade."}),"\n",(0,s.jsx)(t.p,{children:"By using the Upgradable Polymesh Ink Contract, this can be avoided, but instead relying on this contract to be updated via governance, in advance of any breaking upgrades, to reflect the new logic, and retain a consistent API."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Direct Polymesh API"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"polymesh-api"})," and ",(0,s.jsx)(t.code,{children:"polymesh-api-ink"})," crates are authored in ",(0,s.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/polymesh-api",children:"https://github.com/PolymeshAssociation/polymesh-api"})," and should be imported via:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'polymesh-api = { version = "3.7", default-features = false, features = ["ink"] }\npolymesh-api-ink = { version = "1.3.0", default-features = false, features = ["use_call_runtime_with_error"] }\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Note the feature flag of ",(0,s.jsx)(t.code,{children:'"ink"'})," which means we're using the version of Polymesh API compiled for Ink! contracts."]}),"\n",(0,s.jsx)(t.p,{children:"Whilst the Wrapped POLYX contract does not directly use the Polymesh API (it uses it indirectly via the Upgradable Polymesh Ink Contract that uses it under the covers) it would be possible to use this instead of the Upgradable Polymesh Ink Contract via:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'use polymesh_api::{\n  Api,\n  ink::{\n    extension::{PolymeshEnvironment, PolymeshRuntimeErr},\n    basic_types::IdentityId,\n    Error as PolymeshError,\n  },\n  polymesh::types::{\n    polymesh_primitives::{\n      ticker::Ticker,\n      asset::{\n        AssetName,\n        AssetType,\n      }\n    },\n  },\n};\n\n...\n\nfn create_wrapped_polyx(&mut self) -> Result<()> {\n    let api = Api::new();\n    // Create asset.\n    api.call().asset().create_asset(\n      AssetName(b"Wrapped POLYX".to_vec()),\n      self.ticker,\n      true, // Divisible token.\n      //TODO: Create Other asset type for wrapped tokens\n      AssetType::EquityCommon,\n      vec![],\n      None,\n      true // Disable Investor uniqueness requirements.\n    ).submit()?;\n    // Pause compliance rules to allow transfers.\n    api.call().compliance_manager().pause_asset_compliance(self.ticker).submit()?;\n    Ok(())\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This contrasts to the Upgradable Polymesh Ink Contract approach, which uses the API ",(0,s.jsx)(t.code,{children:"api.asset_create_and_issue"})," that wraps up the asset creation and pausing the compliance rules:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'fn create_wrapped_polyx(&self, api: &PolymeshInk) -> Result<()> {\n  api.asset_create_and_issue(\n    AssetName(b"Wrapped POLYX".to_vec()),\n    self.ticker,\n    AssetType::EquityCommon,\n    true, // Divisible token.\n    None,\n  )?;\n  Ok(())\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Upgradable Contract Approach"})}),"\n",(0,s.jsx)(t.p,{children:"The Wrapped POLYX contract uses the Upgradable Polymesh Ink Contract via its API."}),"\n",(0,s.jsx)(t.p,{children:"This is included via the dependency:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'polymesh-ink = { version = "3.2.0", default-features = false, features = ["as-library"] }\n'})}),"\n",(0,s.jsxs)(t.p,{children:["noting the ",(0,s.jsx)(t.code,{children:'"as-library"'})," feature."]}),"\n",(0,s.jsxs)(t.p,{children:["Within the contract file itself (",(0,s.jsx)(t.code,{children:"lib.rs"}),") the package is imported via:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"use polymesh_ink::*;\n"})}),"\n",(0,s.jsx)(t.p,{children:"and can then be accessed via either direct calls to its immutable API:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"PolymeshInk::get_our_did()?\n"})}),"\n",(0,s.jsx)(t.p,{children:"or via its mutable API:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'api.asset_create_and_issue(\n    AssetName(b"Wrapped POLYX".to_vec()),\n    self.ticker,\n    AssetType::EquityCommon,\n    true, // Divisible token.\n    None,\n)?;\n'})}),"\n",(0,s.jsx)(t.p,{children:"Note that everytime the API is used within an Ink! message we re-initialise it, for example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"#[ink(message)]\n/// Accept custody of a portfolio and give the caller some tokens.\npub fn add_portfolio(&mut self, auth_id: u64, portfolio: PortfolioKind) -> Result<()> {\n    self.ensure_initialized()?;\n    let api = PolymeshInk::new()?;\n    // Accept portfolio custody and ensure we have custody.\n    let portfolio_id = api.accept_portfolio_custody(auth_id, portfolio)?;\n    ...\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"This ensures that we're always using the most up to date version of the Upgradable Polymesh Ink Contract code, as re-initialising checks whether the hash has been updated (via governance) and always references the latest associated with the current chain version."}),"\n",(0,s.jsx)(t.h3,{id:"compilation",children:"Compilation"}),"\n",(0,s.jsxs)(t.p,{children:["To compile the contract you can either compile directly (non-deterministic) via:\n",(0,s.jsx)(t.code,{children:"cargo contract build --release"}),"\nor by compiling within docker deterministically via:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"docker pull quay.io/subscan-explorer/wasm-compile-build:amd64-stable-1.70.0-v3.2.0\ndocker run --rm -it -v .:/builds/contract -v ./target:/target/ quay.io/subscan-explorer/wasm-compile-build:amd64-stable-1.70.0-v3.2.0 cargo contract build --release\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Once compiled, you'll see various compilation artefacts in the ",(0,s.jsx)(t.code,{children:"target/ink"})," folder, in particular:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"wrapped_polyx.wasm\nwrapped_polyx.json\nwrapped_polyx.contract\n"})}),"\n",(0,s.jsx)(t.p,{children:"The json file describes the ABI (interface) of the smart contract, the wasm file contains its logic as WASM, and the contract file includes both these pieces of data in a single file."}),"\n",(0,s.jsx)(t.h3,{id:"deployment",children:"Deployment"}),"\n",(0,s.jsxs)(t.p,{children:["The easiest approach to deploying a smart contract is using the Polymesh App's Contract UI, passing in the contract file. For example on the testnet, this would be via the link:\n",(0,s.jsx)(t.a,{href:"https://testnet-app.polymesh.live/#/contracts",children:"https://testnet-app.polymesh.live/#/contracts"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Contract Upload",src:n(25261).A+"",width:"624",height:"254"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Contract Deploy",src:n(59342).A+"",width:"621",height:"285"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Contract Submit",src:n(57376).A+"",width:"750",height:"587"})}),"\n",(0,s.jsxs)(t.p,{children:["You can note both the constructor parameters (in this case a single parameter which takes the ticker of the wrapped POLYX asset) and the ",(0,s.jsx)(t.code,{children:"max reftime allowed"})," and ",(0,s.jsx)(t.code,{children:"max proofsize allowed"})," parameters whose values are automatically calculated by the UI."]}),"\n",(0,s.jsx)(t.p,{children:"This approach is the default, and will deploy the contract as a secondary key, with no permissions, of the identity which is associated with the signing key that submits the transaction."}),"\n",(0,s.jsxs)(t.p,{children:["If you'd like to either specify a set of secondary permissions, or deploy the contract as a primary key of a child identity, you can use the extrinsics in the ",(0,s.jsx)(t.code,{children:"polymeshContracts"})," pallet instead."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"polymeshContracts Extrinsics",src:n(96678).A+"",width:"1351",height:"293"})}),"\n",(0,s.jsx)(t.p,{children:"These allow you to deploy a contract (via code or the hash of a previously uploaded contract) and specify either secondary key permissions or that it be deployed as a primary key."}),"\n",(0,s.jsxs)(t.p,{children:["The values such as ",(0,s.jsx)(t.code,{children:"reftime"})," can be copied over from the calculated values provided by the Contracts tab when deploying using the default approach."]}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.p,{children:"Once the contract has been deployed, it can be called by any key which is attached to an identity with a valid CDD."}),"\n",(0,s.jsx)(t.p,{children:"The easiest approach to calling a contract is to use the same Polymesh App's Contract UI, which allows you to easily call any function in the smart contract, passing parameters as needed."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Wrapped POLYX Contract",src:n(22386).A+"",width:"1188",height:"336"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},59342:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/contract_deploy-d7b835e097c98142e2f2b10d4f609f17.png"},96678:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extrinsics-cd8f75d6c9205ef63d922c34ecc4639c.png"},57376:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sign_submit-5f5e8be092b7db0128356e68fff31492.png"},1921:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/smart_contract_keys-28a076d85943c35658402b05734bb5b9.png"},62599:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/upgradable_polymesh_ink_contract-d98f4c8b07c6d9d968cccf2b3123f356.png"},25261:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/upload_deploy-f599ccad1e304fa95a72db1c9d2f2725.png"},22386:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/wrapped_polyx-3fe60490068f3032434c6d501ee5f40d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);