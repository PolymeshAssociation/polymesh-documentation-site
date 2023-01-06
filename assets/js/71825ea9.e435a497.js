"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[4308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Architecture",description:"need to add description",subsite:"polymesh-docs"},o=void 0,s={unversionedId:"network/architecture",id:"network/architecture",title:"Architecture",description:"need to add description",source:"@site/polymesh-docs/network/architecture.mdx",sourceDirName:"network",slug:"/network/architecture",permalink:"/polymesh-documentation-site/polymesh-docs/network/architecture",draft:!1,tags:[],version:"current",frontMatter:{title:"Architecture",description:"need to add description",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"Network",permalink:"/polymesh-documentation-site/polymesh-docs/category/network"},next:{title:"POLY to POLYX Bridge",permalink:"/polymesh-documentation-site/polymesh-docs/network/bridge"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Polymesh Pillars",id:"polymesh-pillars",level:2},{value:"Identity",id:"identity",level:3},{value:"Governance",id:"governance",level:3},{value:"Confidentiality",id:"confidentiality",level:3},{value:"Compliance",id:"compliance",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Polymesh blockchain is a optimised for regulated assets and markets. This is reflected in its approach to governance, security and consensus, as well as the base layer primitives provided directly by the network for asset management."),(0,i.kt)("p",null,"Polymesh is a public, permissioned blockchain. This means that anyone can run a node and check that the rules enforced by the network are being followed by all participants, and see all the public state secured by the blockchain, but that only certain entities (called operators) are allowed to run nodes that author new blocks, and vote on the finality of other blocks."),(0,i.kt)("p",null,"Polymesh is built on the ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate framework"),", an open-source project, developed by by ",(0,i.kt)("a",{parentName:"p",href:"https://www.parity.io/"},"Parity"),", that provides a fully customisable, modular and extendable framework for blockchain developers."),(0,i.kt)("p",null,"Polymesh has a native token, used for security and payments, ",(0,i.kt)("a",{parentName:"p",href:"./polyx"},"POLYX"),"."),(0,i.kt)("p",null,"Polymesh provides core business logic and financial abstractions at its base layer, called primitives. These provide a rich set of embedded on-chain actions (called extrinsics) that a user can initiate, such as creating an asset, settling securities instructions or participating in on-chain governance."),(0,i.kt)("p",null,"Polymesh also supports Layer 2 (smart contract) logic, allowing network users to extend and leverage the base layer primitives to build on-chain financial and identity based protocols. Polymesh smart contracts compile to ",(0,i.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly (Wasm)"),". Using Wasm expands the family of languages available to smart contract developers to include Rust, C/C++, C#, Typescript, Haxe amd Kotlin. As well as allows for the use of standard development tools. For Polymesh we recommend the use of ",(0,i.kt)("a",{parentName:"p",href:"https://ink.substrate.io/"},"ink!"),", which is a subset of Rust specifically designed by Parity for Substrate based chains. ink! offers significantly greater performance and safety when compared with other programming languages such as Solidity."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture Diagram",src:n(1061).Z,width:"1547",height:"2563"})),(0,i.kt)("h2",{id:"polymesh-pillars"},"Polymesh Pillars"),(0,i.kt)("p",null,"Polymesh is tailored to the needs of regulated assets and global capital markets. This approach is guided by the four key pillars of Polymesh - Identity, Governance, Confidentiality and Compliance."),(0,i.kt)("h3",{id:"identity"},"Identity"),(0,i.kt)("p",null,"Identity is at the core of Polymesh. Polymesh implements a federated root of trust via permissioned Customer Due Diligence service providers. Every transaction in Polymesh is associated with an identity."),(0,i.kt)("p",null,"Identities provide attestation and key management. All users must act through an on-chain identity when interacting with Polymesh. Identities are referenced through DIDs (decentralised identifiers)."),(0,i.kt)("p",null,"Identity attestations allow asset issuers to enforce compliance on-chain in real-time as assets are issued, traded and settled between different parties."),(0,i.kt)("p",null,"Identity key management allows users and organisations to flexibly manage their on-chain identities via primary and secondary keys and delegate asset management to other identities via external agent functionality."),(0,i.kt)("p",null,"An entity (a real world individual or organisation) can have multiple on-chain identities, allowing them to keep their overall positions confidential."),(0,i.kt)("h3",{id:"governance"},"Governance"),(0,i.kt)("p",null,"Governance allows the chain to grow and develop. Polymesh has a sophisticated governance mechanism that combines signals from the broader community with technical experts (committees) and a governing council for actioning proposals. Polymesh Improvement Proposals (PIPs) can be proposed by any network user, and possible PIPs include network upgrades, setting the parameters of the network related to consensus and security and many other actions."),(0,i.kt)("p",null,"The Polymesh governance system is designed to further decentralise over time."),(0,i.kt)("h3",{id:"confidentiality"},"Confidentiality"),(0,i.kt)("p",null,"Privacy is at the heart of the Polymesh identity model, with confidential identity providing users the ability to keep their total positions obfuscated from observers. In future releases we will be integrating confidential assets into Polymesh, using the ",(0,i.kt)("a",{parentName:"p",href:"https://info.polymesh.network/hubfs/Files/MERCAT-white-paper.pdf"},"MERCAT")," protocol."),(0,i.kt)("h3",{id:"compliance"},"Compliance"),(0,i.kt)("p",null,"Polymesh facilitates claim based compliance directly in its base layer. Asset issuers can set flexible and extendable rules relating to the claims that their investors are required to have attached to their identity in order to either send or receive the asset. These rules can be combined to create complex transfer restrictions that are tailored to the assets specific type, jurisidiction and regulatory regime."))}p.isMDXComponent=!0},1061:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Polymesh_Architecture-55d813dd958975b4f7e6693f729039ce.png"}}]);