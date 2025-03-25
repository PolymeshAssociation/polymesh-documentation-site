"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[29583],{2763:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"introduction/tech-stack","title":"The Technical Stack","description":"What is Polymesh made of","source":"@site/docs/01-introduction/3-tech-stack.mdx","sourceDirName":"01-introduction","slug":"/introduction/tech-stack","permalink":"/polymesh-documentation-site/docs/introduction/tech-stack","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/01-introduction/3-tech-stack.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"The Technical Stack","description":"What is Polymesh made of"},"sidebar":"defaultSidebar","previous":{"title":"Why Polymesh?","permalink":"/polymesh-documentation-site/docs/introduction/why-polymesh/"},"next":{"title":"POLYX","permalink":"/polymesh-documentation-site/docs/introduction/polyx/"}}');var o=s(74848),i=s(28453);const r={title:"The Technical Stack",description:"What is Polymesh made of"},a=void 0,c={},l=[{value:"Division of concerns",id:"division-of-concerns",level:2},{value:"Substrate",id:"substrate",level:2},{value:"Consensus",id:"consensus",level:2},{value:"Governance",id:"governance",level:2},{value:"Extrinsics and smart extensions",id:"extrinsics-and-smart-extensions",level:2},{value:"Wallet",id:"wallet",level:2},{value:"Polymesh Portal",id:"polymesh-portal",level:2},{value:"SDK",id:"sdk",level:2},{value:"Links",id:"links",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"division-of-concerns",children:"Division of concerns"}),"\n",(0,o.jsx)(n.p,{children:"Polymesh is a unique blockchain technology. As a blockchain, the design differs considerably from a server-based architecture. It shares many properties with other blockchains, but Polymesh accomplishes with ease what can be very challenging to accomplish on general-purpose blockchains."}),"\n",(0,o.jsx)(n.p,{children:"Developers who are new to distributed ledger technology may find the following comparisons helpful:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A blockchain is ",(0,o.jsx)(n.strong,{children:"similar to a transaction replay log"})," that can, in theory, recreate the system state by replaying the transactions in order. The transaction log is an ",(0,o.jsx)(n.strong,{children:"append-only"})," structure that contains everything that has ever happened in the system. A ",(0,o.jsx)(n.strong,{children:"transaction"})," ",(0,o.jsx)(n.em,{children:"is the name of the smallest indivisible unit of state change added to the blockchain"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Blockchains are ",(0,o.jsx)(n.strong,{children:"stateful protocols"}),", meaning anywhere there is connectivity there is the possibility of inspecting or interacting with the on-chain protocol."]}),"\n",(0,o.jsxs)(n.li,{children:["Blockchains are ",(0,o.jsx)(n.strong,{children:"deterministic"}),". Logic that would traditionally exist on servers often exists as smart contracts. These self-enforcing programs create inviolable rules that can be used to create application-layer solutions. Smart contracts are usually published by deployment transactions so that their existence is an inarguable fact on the chain. Since their functions are deterministic, there is always only one correct interpretation of the effect of any input."]}),"\n",(0,o.jsxs)(n.li,{children:["Correct operation of the chain is assured by ",(0,o.jsx)(n.strong,{children:"distributed consensus"}),", as nodes independently ascertain what the result of a transaction ",(0,o.jsx)(n.em,{children:"must be"}),", given the preceding state of the chain. Malfunctioning or Byzantine nodes are simply ignored by the rest of the network. Consensus-mechanism logic is a differentiating factor among competing blockchains, since each presents different performance, finality, and fault-tolerance assurances."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Every input to a blockchain is a signed transaction"})," so other nodes can be certain that any proposed payload was signed by particular participant(s) before evaluating what the transaction does at the protocol level and in the context of any smart contract logic that might be involved."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Developers who are new to Polymesh but experienced with other blockchains such as Bitcoin, Ethereum, or the Hyperledger projects may find the following comparisons helpful:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Polymesh is a ",(0,o.jsx)(n.strong,{children:"public, permissioned network using Nominated Proof-of-Stake"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Polymesh is purpose-built for a ",(0,o.jsx)(n.strong,{children:"particular application"}),", not the execution of general-purpose smart contracts."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Polymesh models an industry rather than a Virtual Machine"}),". Its primitives address application-level concerns that other blockchains are agnostic about. For example, asset definition, identity, trade settlement, and custody are all defined at the Polymesh network-level. Don't worry, there is considerable flexibility built into the system-wide standardised approach."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"substrate",children:"Substrate"}),"\n",(0,o.jsx)(n.p,{children:"In their own words:"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:'"Substrate is a modular framework that enables you to create purpose-built blockchains by composing custom or pre-built components."'}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://www.substrate.io/",children:"Substrate"})," is the result of years of research into blockchain technology and, more particularly, foundational technology that addresses core concerns. Substrate provides a ",(0,o.jsx)(n.strong,{children:"modular solution"}),' for creating a bespoke blockchain using well-solved components for such concerns as consensus, governance, upgrades, and the method of creating protocol rules - or blockchain-speak for "don\'t reinvent the wheel".']}),"\n",(0,o.jsx)(n.p,{children:"Polymesh is built on Substrate. As such, Substrate tools are useable for low-level inspection of the chain state. At this level, the transactions appear relatively raw, compared to the Polymesh SDK and Dashboard where data is parsed and presented in a more-readable form."}),"\n",(0,o.jsx)(n.h2,{id:"consensus",children:"Consensus"}),"\n",(0,o.jsxs)(n.p,{children:["Polymesh uses a ",(0,o.jsx)(n.strong,{children:"Nominated Proof-of-Stake"})," ",(0,o.jsx)(n.a,{href:"/polymesh-docs/network/consensus/",children:"consensus"})," mechanism, in which operators create and validate blocks. It is a ",(0,o.jsx)(n.strong,{children:"high-speed protocol"})," compared to other proof-of-work systems. The operators themselves are appointed by network participants who signal support through the on-chain governance process, which includes staking POLYX and sharing in network rewards for doing so."]}),"\n",(0,o.jsx)(n.h2,{id:"governance",children:"Governance"}),"\n",(0,o.jsxs)(n.p,{children:["Certain system parameters, as well as the operators, and system upgrades are controlled by a ",(0,o.jsx)(n.strong,{children:"sophisticated on-chain governance system"}),". In summary, sensitive functions that control the evolution of the network are managed by ",(0,o.jsx)(n.strong,{children:"on-chain decision-making and deterministic execution"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The governance system itself can be upgraded via a system upgrade. This is only possible by consensus achieved through the prevailing governance system."}),"\n",(0,o.jsx)(n.p,{children:"The protocol prevents forks, provides an unambiguous description of the current rules, and a precise description of the process that must unfold before any change to those rules would be possible."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["We will take a closer look at Polymesh's governance system at a later point of time. In case you want to dive right into it, just go to the section on ",(0,o.jsx)(n.a,{href:"/docs/introduction/governance/",children:"governance"})]})}),"\n",(0,o.jsx)(n.h2,{id:"extrinsics-and-smart-extensions",children:"Extrinsics and smart extensions"}),"\n",(0,o.jsx)(n.p,{children:"Let's drop a bit of new terminology on top of already known concepts."}),"\n",(0,o.jsxs)(n.p,{children:["Borrowing from ",(0,o.jsx)(n.a,{href:"https://substrate.dev/docs/en/knowledgebase/learn-substrate/extrinsics",children:"Substrate"}),", the term ",(0,o.jsx)(n.strong,{children:"extrinsics"})," describes ",(0,o.jsx)(n.em,{children:"any outside information that enters the blockchain"}),', typically user-signed transactions submitted to the blockchain. So you may come across wording like the "create asset extrinsic", which is none other than a properly formatted transaction that expresses the intent to create an asset.']}),"\n",(0,o.jsxs)(n.p,{children:["Polymesh exposes a number of extrinsics, which constitute the ",(0,o.jsx)(n.strong,{children:"base-layer business logic of the blockchain"}),", in, for instance, identity, assets, and governance. As a side-note, extrinsics may also be so-called ",(0,o.jsx)(n.em,{children:"inherents"}),", the term used for non-signed transactions usually written by operators of the chain, such as block timestamps."]}),"\n",(0,o.jsxs)(n.p,{children:["Not to be confused with ",(0,o.jsx)(n.strong,{children:"smart extensions"}),", which are smart contracts that developers can create for narrow use cases, for example, to extend an asset with a custom logic restricting transfers in a way that is not anticipated by the existing network."]}),"\n",(0,o.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,o.jsxs)(n.p,{children:["Blockchain transactions are always signed, and a so-called wallet's purpose is to ",(0,o.jsx)(n.strong,{children:"hold the signing keys and sign on behalf of the user"}),". Given the flexibility of public-private key encryption, there are always multiple ways to sign a transaction - some are more human-friendly and some are more machine-friendly."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Polymesh Wallet"})," is a human-friendly browser extension that holds secret signing keys and asks for confirmation from a human user before signing transactions."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["You want to know more about the Polymesh Wallet? Take a look at our section on the ",(0,o.jsx)(n.a,{href:"/docs/quickstart/wallet/",children:"Wallet"}),"!"]})}),"\n",(0,o.jsx)(n.h2,{id:"polymesh-portal",children:"Polymesh Portal"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Polymesh Portal"})," serves as a user-friendly interface designed for the efficient management of Polymesh Blockchain accounts. It offers a range of features facilitating asset management, staking activities, and transaction handling. The Polymesh Portal is tailored specifically for Polymesh networks, providing users with a seamless experience in navigating and interpreting transactions. Accessible via ",(0,o.jsx)(n.a,{href:"https://portal.polymesh.network",children:"https://portal.polymesh.network"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"sdk",children:"SDK"}),"\n",(0,o.jsxs)(n.p,{children:["The SDK is a JavaScript or Typescript - it's a developer's choice - set of methods that expose the entire Polymesh API. The SDK wraps blockchain concerns in a way that will be familiar to developers of non-blockchain applications. It is expected that most ",(0,o.jsx)(n.strong,{children:"service providers"})," will integrate Polymesh into their legacy systems using the SDK."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["You want to have a look at the Polymesh SDK, check out this ",(0,o.jsx)(n.a,{href:"/sdk-docs/",children:"documentation"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/introduction/governance/",children:"Polymesh Governance"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/quickstart/wallet/",children:"Polymesh Wallet Quickstart"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://portal.polymesh.network/",children:"Polymesh Portal"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/polymesh-docs/network/consensus/",children:"Polymesh Consensus"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.substrate.io/",children:"Substrate"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/sdk-docs/",children:"Polymesh SDK"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const o={},i=t.createContext(o);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);