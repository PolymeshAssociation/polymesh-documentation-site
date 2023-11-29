"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[14308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={title:"Architecture",description:"need to add description",subsite:"polymesh-docs/"},o=void 0,s={unversionedId:"network/architecture",id:"network/architecture",title:"Architecture",description:"need to add description",source:"@site/polymesh-docs/network/architecture.mdx",sourceDirName:"network",slug:"/network/architecture",permalink:"/polymesh-documentation-site/polymesh-docs/network/architecture",draft:!1,tags:[],version:"current",frontMatter:{title:"Architecture",description:"need to add description",subsite:"polymesh-docs/"},sidebar:"defaultSidebar",previous:{title:"Polymesh Documentation",permalink:"/polymesh-documentation-site/polymesh-docs/"},next:{title:"POLY to POLYX Bridge",permalink:"/polymesh-documentation-site/polymesh-docs/network/bridge"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Polymesh Pillars",id:"polymesh-pillars",level:2},{value:"Identity",id:"identity",level:3},{value:"Governance",id:"governance",level:3},{value:"Confidentiality",id:"confidentiality",level:3},{value:"Compliance",id:"compliance",level:3}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Polymesh blockchain is optimised for regulated assets and markets. This is reflected in its approach to governance, security and consensus, as well as the base layer primitives provided directly by the network for asset origination and lifecycle management."),(0,a.kt)("p",null,"Polymesh is a public, permissioned blockchain. This means that anyone can run a node and check that the rules enforced by the network are being followed by all participants, and see all the public state secured by the blockchain, but that only certain entities (called operators) are allowed to run nodes that author new blocks, and vote on the finality of other blocks."),(0,a.kt)("p",null,"Polymesh is built on the ",(0,a.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate framework"),", an open-source project, developed by by ",(0,a.kt)("a",{parentName:"p",href:"https://www.parity.io/"},"Parity"),", that provides a fully customisable, modular and extendable framework for blockchain developers."),(0,a.kt)("p",null,"Polymesh has a native token, used for security and payments, ",(0,a.kt)("a",{parentName:"p",href:"../polyx/"},"POLYX"),"."),(0,a.kt)("p",null,"Polymesh provides core business logic and financial abstractions at its base layer, called primitives. These provide a rich set of embedded on-chain actions (called extrinsics) that a user can initiate, such as creating an asset, settling securities instructions or participating in on-chain governance."),(0,a.kt)("p",null,"Polymesh also supports Layer 2 (smart contract) logic, allowing network users to extend and leverage the base layer primitives to build on-chain financial and identity based protocols. Polymesh smart contracts compile to ",(0,a.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly (Wasm)"),". Using Wasm expands the family of languages available to smart contract developers to include Rust, C/C++, C#, Typescript, Haxe amd Kotlin. As well as allows for the use of standard development tools. For Polymesh we recommend the use of ",(0,a.kt)("a",{parentName:"p",href:"https://ink.substrate.io/"},"ink!"),", which is a subset of Rust specifically designed by Parity for Substrate based chains. Ink! offers significantly greater performance and safety when compared with other programming languages such as Solidity."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture Diagram",src:n(61061).Z,width:"1547",height:"2563"})),(0,a.kt)("h2",{id:"polymesh-pillars"},"Polymesh Pillars"),(0,a.kt)("p",null,"Polymesh is tailored to the needs of regulated assets and global capital markets. This approach is guided by the four key pillars of Polymesh - Identity, Governance, Confidentiality and Compliance."),(0,a.kt)("h3",{id:"identity"},"Identity"),(0,a.kt)("p",null,"Identity is at the core of Polymesh. Polymesh implements a federated root of trust via permissioned Customer Due Diligence service providers. Every transaction in Polymesh is associated with an identity."),(0,a.kt)("p",null,"Identities provide attestation and key management. All users must act through an on-chain identity when interacting with Polymesh. Identities are referenced through DIDs (decentralised identifiers)."),(0,a.kt)("p",null,"Identity attestations allow asset issuers to enforce compliance on-chain in real-time as assets are issued, traded and settled between different parties."),(0,a.kt)("p",null,"Identity key management allows users and organisations to flexibly manage their on-chain identities via primary and secondary keys and delegate asset management to other identities via external agent functionality."),(0,a.kt)("p",null,"An entity (a real world individual or organisation) can have multiple on-chain identities, allowing them to keep their overall positions confidential."),(0,a.kt)("h3",{id:"governance"},"Governance"),(0,a.kt)("p",null,"Governance allows the chain to grow and develop. Polymesh has a sophisticated governance mechanism that combines signals from the broader community with technical experts (committees) and a governing council for actioning proposals. Polymesh Improvement Proposals (PIPs) can be proposed by any network user, and possible PIPs include network upgrades, setting the parameters of the network related to consensus and security and many other actions."),(0,a.kt)("p",null,"The Polymesh governance system is designed to further decentralise over time."),(0,a.kt)("h3",{id:"confidentiality"},"Confidentiality"),(0,a.kt)("p",null,"Confidentiality allows Polymesh users to maintain privacy over certain aspects of their securities transactions. The MERCAT protocol was designed to allow confidentiality within asset transfers using homomorphic encryption and zero-knowledge proofs. In future releases we will be integrating confidential assets into Polymesh, based on the ",(0,a.kt)("a",{parentName:"p",href:"https://info.polymesh.network/hubfs/Files/MERCAT-white-paper.pdf"},"MERCAT")," protocol. There is also ongoing research on how to improve and update confidentiality in Polymesh to support the full spectrum of confidentiality and securities use-cases."),(0,a.kt)("h3",{id:"compliance"},"Compliance"),(0,a.kt)("p",null,"Polymesh facilitates claim based compliance directly in its base layer. Asset issuers can set flexible and extendable rules relating to the claims that their investors are required to have attached to their identity in order to either send or receive the asset. These rules can be combined to create complex transfer restrictions that are tailored to the assets specific type, jurisdiction and regulatory regime."))}p.isMDXComponent=!0},61061:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Polymesh_Architecture-6095d6d4ee4fb5e727000ab01764388e.png"}}]);