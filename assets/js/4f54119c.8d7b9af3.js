"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[96180],{28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>r});var n=t(96540);const s={},a=n.createContext(s);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:i},e.children)}},88939:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/Polymesh_Architecture-6095d6d4ee4fb5e727000ab01764388e.png"},97581:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"core-concepts/architecture","title":"Architecture","description":"Technical Stack and Consensus Mechanism","source":"@site/docs/200-core-concepts/010-architecture.md","sourceDirName":"200-core-concepts","slug":"/architecture","permalink":"/polymesh-documentation-site/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/200-core-concepts/010-architecture.md","tags":[{"inline":true,"label":"technical stack","permalink":"/polymesh-documentation-site/tags/technical-stack"},{"inline":true,"label":"consensus","permalink":"/polymesh-documentation-site/tags/consensus"}],"version":"current","sidebarPosition":10,"frontMatter":{"title":"Architecture","description":"Technical Stack and Consensus Mechanism","id":"architecture","slug":"/architecture","sidebar_label":"Architecture","tags":["technical stack","consensus"]},"sidebar":"docs","previous":{"title":"Onboarding","permalink":"/polymesh-documentation-site/getting-started/onboarding"},"next":{"title":"POLYX","permalink":"/polymesh-documentation-site/polyx"}}');var s=t(74848),a=t(28453);const o={title:"Architecture",description:"Technical Stack and Consensus Mechanism",id:"architecture",slug:"/architecture",sidebar_label:"Architecture",tags:["technical stack","consensus"]},r=void 0,l={},c=[{value:"Overview",id:"overview",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Polymesh and Polymesh Private",id:"polymesh-and-polymesh-private",level:2},{value:"Polymesh Pillars",id:"polymesh-pillars",level:2},{value:"Identity",id:"identity",level:3},{value:"Governance",id:"governance",level:3},{value:"Confidentiality",id:"confidentiality",level:3},{value:"Compliance",id:"compliance",level:3},{value:"Consensus",id:"consensus",level:2}];function d(e){const i={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(i.p,{children:"The Polymesh blockchain is optimised for regulated assets and markets. This is reflected in its approach to governance, security and consensus, as well as the base layer primitives provided directly by the network for asset origination and lifecycle management."}),"\n",(0,s.jsx)(i.p,{children:"Polymesh is a public, permissioned blockchain. This means that anyone can run a node and check that the rules enforced by the network are being followed by all participants, and see all the public state secured by the blockchain, but that only certain entities (called operators) are allowed to run nodes that author new blocks, and vote on the finality of other blocks."}),"\n",(0,s.jsxs)(i.p,{children:["Polymesh is built on the ",(0,s.jsx)(i.a,{href:"https://substrate.io/",children:"Substrate framework"}),", an open-source project, developed by by ",(0,s.jsx)(i.a,{href:"https://www.parity.io/",children:"Parity"}),", that provides a fully customisable, modular and extendable framework for blockchain developers."]}),"\n",(0,s.jsxs)(i.p,{children:["Polymesh has a native token, used for security and payments, ",(0,s.jsx)(i.a,{href:"/polyx/",children:"POLYX"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"Polymesh provides core business logic and financial abstractions at its base layer, called primitives. These provide a rich set of embedded on-chain actions (called extrinsics) that a user can initiate, such as creating an asset, settling securities instructions or participating in on-chain governance."}),"\n",(0,s.jsxs)(i.p,{children:["Polymesh also supports Layer 2 ",(0,s.jsx)(i.a,{href:"../development/smart-contracts/",children:"Smart Contract"})," logic, allowing network users to extend and leverage the base layer primitives to build on-chain financial and identity based protocols. Polymesh smart contracts compile to ",(0,s.jsx)(i.a,{href:"https://webassembly.org/",children:"WebAssembly (Wasm)"}),". Using Wasm expands the family of languages available to smart contract developers to include Rust, C/C++, C#, Typescript, Haxe amd Kotlin, as well as allowing for the use of standard development tools. For Polymesh we recommend the use of ",(0,s.jsx)(i.a,{href:"https://ink.substrate.io/",children:"Ink!"}),", which is a subset of Rust specifically designed by Parity for Substrate based chains. Ink! offers significantly greater performance and safety when compared with other programming languages such as Solidity."]}),"\n",(0,s.jsx)(i.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Architecture Diagram",src:t(88939).A+"",width:"1547",height:"2563"})}),"\n",(0,s.jsx)(i.h2,{id:"polymesh-and-polymesh-private",children:"Polymesh and Polymesh Private"}),"\n",(0,s.jsxs)(i.p,{children:["While Polymesh is a public-permissioned blockchain, ",(0,s.jsx)(i.a,{href:"/polymesh-private/",children:"Polymesh Private"})," is a variant designed for deployment as a private blockchain among participating chain operators. There is a single Polymesh mainnet, but there can be many independent instances of Polymesh Private chains."]}),"\n",(0,s.jsx)(i.p,{children:"Polymesh Private shares much of Polymesh's functionality, with the following differences:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Polymesh Private chains are intended to run among a limited set of peers on a private network."}),"\n",(0,s.jsxs)(i.li,{children:["Polymesh Private includes a ",(0,s.jsx)(i.a,{href:"/confidential-assets/overview/",children:"Confidential Asset"})," module to allow private asset settlements between counterparties."]}),"\n",(0,s.jsxs)(i.li,{children:["Polymesh Private does not use the ",(0,s.jsx)(i.a,{href:"/polyx/",children:"POLYX"})," token. While transactions may still incur fees, they are paid in a token specific to each Polymesh Private instance, which is not expected to have intrinsic value. Alternatively, Polymesh Private transactions can be configured to have no fees."]}),"\n",(0,s.jsxs)(i.li,{children:["The use of Polymesh Private is governed by a license; see ",(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-private?tab=readme-ov-file#license",children:"the Polymesh Private license details"})," for more information."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"polymesh-pillars",children:"Polymesh Pillars"}),"\n",(0,s.jsx)(i.p,{children:"Polymesh is tailored to the needs of regulated assets and global capital markets. This approach is guided by the four key pillars of Polymesh - Identity, Governance, Confidentiality and Compliance."}),"\n",(0,s.jsx)(i.h3,{id:"identity",children:"Identity"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/identity/",children:"Identity"})," is at the core of Polymesh. Polymesh implements a federated root of trust for onboarding all users, via permissioned Customer Due Diligence service providers. Every transaction in Polymesh is associated with an identity."]}),"\n",(0,s.jsx)(i.p,{children:"Identities provide attestation and key management. All users must act through an on-chain identity when interacting with Polymesh. Identities are referenced through DIDs (decentralised identifiers)."}),"\n",(0,s.jsx)(i.p,{children:"Identity attestations allow asset issuers to enforce compliance on-chain in real-time as assets are issued, traded and settled between different parties."}),"\n",(0,s.jsx)(i.p,{children:"Identity key management allows users and organisations to flexibly manage their on-chain identities via primary and secondary keys and delegate asset management to other identities via external agent functionality."}),"\n",(0,s.jsx)(i.p,{children:"An entity (a real world individual or organisation) can have multiple on-chain identities, allowing them to keep their overall positions segregated and confidential."}),"\n",(0,s.jsx)(i.h3,{id:"governance",children:"Governance"}),"\n",(0,s.jsx)(i.p,{children:"Governance allows the chain to grow and develop. Polymesh has a sophisticated governance mechanism that combines signals from the broader community with technical experts (committees) and a governing council for actioning proposals. Polymesh Improvement Proposals (PIPs) can be proposed by any network user, and possible PIPs include network upgrades, setting the parameters of the network related to consensus and security and many other actions."}),"\n",(0,s.jsx)(i.p,{children:"The Polymesh governance system is designed to further decentralise over time."}),"\n",(0,s.jsx)(i.h3,{id:"confidentiality",children:"Confidentiality"}),"\n",(0,s.jsxs)(i.p,{children:["Confidentiality allows Polymesh users to maintain privacy over certain aspects of their securities transactions. The ",(0,s.jsx)(i.a,{href:"/confidential-assets/overview/",children:"Confidential Asset"})," protocol, implemented in Polymesh Private, is designed to allow confidentiality within asset transfers using homomorphic encryption and zero-knowledge proofs. There is also ongoing research on how to improve and update confidentiality in Polymesh to support the full spectrum of confidentiality and securities use-cases."]}),"\n",(0,s.jsx)(i.h3,{id:"compliance",children:"Compliance"}),"\n",(0,s.jsx)(i.p,{children:"Polymesh facilitates claim based compliance directly in its base layer primitives. Asset issuers can set flexible and extendable rules relating to the claims that their investors are required to have attached to their identity in order to either send or receive the asset. These rules can be combined to create complex transfer restrictions that are tailored to the assets specific type, jurisdiction and regulatory regime."}),"\n",(0,s.jsx)(i.h2,{id:"consensus",children:"Consensus"}),"\n",(0,s.jsx)(i.p,{children:"Polymesh provides financial primitives and business logic, built on top of a distributed storage ledger."}),"\n",(0,s.jsx)(i.p,{children:"Updates to the ledger are processed across a decentralised network of Polymesh operator nodes. The consensus mechanism consists of three main components:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Operator Selection: Nominated Proof-of-Stake (NPoS) determines which permissioned operators will actively participate in block production and finalization. In this system:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Node Operators (validators) indicate their intention to submit blocks and make their candidacy public"}),"\n",(0,s.jsx)(i.li,{children:"Token holders participate as nominators by staking POLYX tokens behind operators they trust"}),"\n",(0,s.jsx)(i.li,{children:"The network through the election algorithm distributes staked tokens to maximize economic security"}),"\n",(0,s.jsx)(i.li,{children:"Operators with the highest backing are elected as active validators"}),"\n",(0,s.jsx)(i.li,{children:"Both operators and nominators (currently disabled) face risk of slashing (loss of staked tokens) for operator misbehavior"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Block Production: Elected operators participate in ",(0,s.jsx)(i.strong,{children:"BABE"})," (Blind Assignment for Blockchain Extension), which determines which operator can produce blocks in each time slot"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Block Finality: These same operators also participate in ",(0,s.jsx)(i.strong,{children:"GRANDPA"})," (GHOST-based Recursive ANcestor Deriving Prefix Agreement), which provides rapid finality by having operators vote on chains rather than individual blocks"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Polymesh is a permissioned network, and in order to run an operator node, the associated identity must first be permissioned through an on-chain ",(0,s.jsx)(i.a,{href:"/governance/",children:"governance process"}),". These operators are typically regulated or licensed entities in their home jurisdiction, adding an additional layer of security through real-world accountability."]}),"\n",(0,s.jsx)(i.p,{children:"For more details on Consensus see:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://docs.substrate.io/learn/consensus/",children:"Substrate Consensus Details"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://wiki.polkadot.network/docs/learn-consensus",children:"Polkadot Consensus Details"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);