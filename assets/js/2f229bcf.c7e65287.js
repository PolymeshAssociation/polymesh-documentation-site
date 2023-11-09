"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[60532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:s,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const i={id:"README",title:"Polymesh SDK Readme",sidebar_label:"SDK Readme",sidebar_position:0},o=void 0,r={unversionedId:"README",id:"README",title:"Polymesh SDK Readme",description:"semantic-release",source:"@site/sdk-docs/README.md",sourceDirName:".",slug:"/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"README",title:"Polymesh SDK Readme",sidebar_label:"SDK Readme",sidebar_position:0},sidebar:"defaultSidebar",next:{title:"SDK Module List",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/modules"}},l={},p=[{value:"@polymeshassociation/polymesh-sdk",id:"polymeshassociationpolymesh-sdk",level:2},{value:"Polymesh version",id:"polymesh-version",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Before moving on",id:"before-moving-on",level:3},{value:"Technical Pre-requisites",id:"technical-pre-requisites",level:3},{value:"Documentation",id:"documentation",level:3},{value:"How to use",id:"how-to-use",level:3},{value:"Installation",id:"installation",level:4},{value:"Initializing the client",id:"initializing-the-client",level:4},{value:"Creating Transactions",id:"creating-transactions",level:4},{value:"Reading Data",id:"reading-data",level:4},{value:"Terminology",id:"terminology",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/semantic-release/semantic-release"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg",alt:"semantic-release"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/standard/semistandard"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square",alt:"js-semistandard-style"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/types/@polymeshassociation/polymesh-sdk",alt:"Types"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polymeshassociation/polymesh-sdk"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@polymeshassociation/polymesh-sdk",alt:"npm"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/Apache-2.0"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-Apache_2.0-blue.svg",alt:"License"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://sonarcloud.io/summary/new_code?id=PolymeshAssociation_polymesh-sdk"},(0,s.kt)("img",{parentName:"a",src:"https://sonarcloud.io/api/project_badges/measure?project=PolymeshAssociation_polymesh-sdk&metric=coverage",alt:"Coverage"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/actions"},(0,s.kt)("img",{parentName:"a",src:"https://github.com/PolymeshAssociation/polymesh-sdk/actions/workflows/main.yml/badge.svg",alt:"Github Actions Workflow"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://sonarcloud.io/summary/new_code?id=PolymeshAssociation_polymesh-sdk"},(0,s.kt)("img",{parentName:"a",src:"https://sonarcloud.io/api/project_badges/measure?project=PolymeshAssociation_polymesh-sdk&metric=alert_status",alt:"Sonar Status"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/issues"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/github/issues/PolymeshAssociation/polymesh-sdk",alt:"Issues"}))),(0,s.kt)("h2",{id:"polymeshassociationpolymesh-sdk"},"@polymeshassociation/polymesh-sdk"),(0,s.kt)("h2",{id:"polymesh-version"},"Polymesh version"),(0,s.kt)("p",null,"This release is compatible with Polymesh v6.x.x"),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("h3",{id:"purpose"},"Purpose"),(0,s.kt)("p",null,"The Polymesh SDK's main goal is to provide external developers with a set of tools that will allow them to build powerful applications that interact with the Polymesh protocol. It focuses on abstracting away all the complexities of the Polymesh blockchain and expose a simple but complete interface. The result is a feature-rich, user-friendly node.js library."),(0,s.kt)("h3",{id:"before-moving-on"},"Before moving on"),(0,s.kt)("p",null,"This document assumes you are already familiar with ",(0,s.kt)("a",{parentName:"p",href:"https://thesecuritytokenstandard.org/"},"Security Tokens")," in general and ",(0,s.kt)("a",{parentName:"p",href:"https://www.polymath.network/"},"Polymath")," as well as ",(0,s.kt)("a",{parentName:"p",href:"https://polymath.network/polymesh"},"Polymesh")," in particular."),(0,s.kt)("h3",{id:"technical-pre-requisites"},"Technical Pre-requisites"),(0,s.kt)("p",null,"In order to use the Polymath SDK, you must install ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"node")," ","(","version 16",")"," and ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),". The library is written in ",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"typescript"),", but can also be used in plain javascript. This document will assume you are using typescript, but the translation to javascript is very simple."),(0,s.kt)("h3",{id:"documentation"},"Documentation"),(0,s.kt)("p",null,"Polymesh SDK API Reference:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developers.polymesh.network/sdk-docs/"},"https://developers.polymesh.network/sdk-docs/")),(0,s.kt)("h3",{id:"how-to-use"},"How to use"),(0,s.kt)("h4",{id:"installation"},"Installation"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"npm i @polymeshassociation/polymesh-sdk --save")),(0,s.kt)("p",null,"Or, if you're using yarn"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"yarn add @polymeshassociation/polymesh-sdk")),(0,s.kt)("p",null,"Or, if using pnpm"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"pnpm add @polymeshassociation/polymesh-sdk")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE")," it is ",(0,s.kt)("em",{parentName:"p"},"highly")," recommended that you use one of these three package managers. This project uses package resolutions/overrides to pin certain problematic dependencies, and these are only supported by the aforementioned package managers. Using a different package manager may result in unexpected behavior"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE"),' if using TypeScript the compiler option "skipLibCheck" should be set to true in your tsconfig.json file'),(0,s.kt)("h4",{id:"initializing-the-client"},"Initializing the client"),(0,s.kt)("p",null,"Before you can start registering Tickers and creating Assets, you have to connect the Polymesh SDK client to a Polymesh node. This is a pretty straightforward process:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Polymesh } from '@polymeshassociation/polymesh-sdk';\nimport { LocalSigningManager } from '@polymeshassociation/local-signing-manager';\n\nasync function run() {\n  const signingManager = await LocalSigningManager.create({\n    accounts: [\n      {\n        mnemonic: '//Alice', //A \"well known\" mnemonic, often with sudo privileges on development chains\n      },\n      {\n        mnemonic: 'forest end mail art wish leave truth else ignore royal knife river' // most mnemonics are 12 words\n      }\n    ],\n  });\n  const polyClient = await Polymesh.connect({\n    nodeUrl: 'wss://some-node-url.com',\n    signingManager,\n  });\n\n  // do stuff with the client\n}\n")),(0,s.kt)("p",null,"Here is an overview of the parameters passed to the ",(0,s.kt)("inlineCode",{parentName:"p"},"connect")," function:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nodeUrl")," is a URL that points to a running Polymesh node"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"signingManager")," is an object that complies with the ",(0,s.kt)("inlineCode",{parentName:"li"},"SigningManager")," interface. It holds the Accounts capable of signing transactions, and the signing logic itself. In this example, ",(0,s.kt)("inlineCode",{parentName:"li"},"LocalSigningManager")," is a simple signing manager that holds private keys in memory and signs with them")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE:")," if using the SDK on a browser environment ","(","i.e. with the Polymesh wallet browser extension",")",", you would use the ",(0,s.kt)("inlineCode",{parentName:"p"},"BrowserExtensionSigningManager")," provided by ",(0,s.kt)("inlineCode",{parentName:"p"},"@polymeshassociation/browser-extension-signing-manager")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Polymesh } from '@polymeshassociation/polymesh-sdk';\nimport { BrowserExtensionSigningManager } from '@polymeshassociation/browser-extension-signing-manager';\n\nasync function run() {\n  const signingManager = await BrowserExtensionSigningManager.create('MY_APP_NAME'); // The Polymesh wallet extension will ask the user to authorize MY_APP_NAME for access\n\n  const polyClient = await Polymesh.connect({\n    nodeUrl: 'wss://some-node-url.com',\n    signingManager,\n  });\n\n  // do stuff with the client\n}\n")),(0,s.kt)("h4",{id:"creating-transactions"},"Creating Transactions"),(0,s.kt)("p",null,"Creating transactions is a two-step process. First a procedure is created, which validates the chain is likely to accept the transaction and returns a Procedure object. This procedure is then executed. This includes having the signing manager generate a signature and waiting for block finalization. Some procedures resolve to a relevant entity, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"createAsset")," resolving to the created asset."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"  /**\n   * This step performs validations, and will throw an error if the transaction isn't expected to proceed, e.g., if the `ticker` is already in use\n   */\n  const createAssetProc = await polyClient.assets.createAsset({\n    name: 'My new asset'\n    ticker: 'TICKER',\n    // ... (args omitted for brevity)\n  })\n\n  /**\n   * The promise will resolve when the transaction is in a finalized block which takes on average 15 seconds. It will throw an error if the transaction fails to finalize.\n   * For example, if the `ticker` was claimed after the procedure was created, but before it was executed, or the signing manager didn't generate a correct signature.\n   */\n  const newAsset = await createAssetProc.run()\n")),(0,s.kt)("h4",{id:"reading-data"},"Reading Data"),(0,s.kt)("p",null,"The SDK exposes getter functions that will return entities, which may have their own functions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"  const assetsPage = await polyClient.assets.get({ size: new BigNumber(20) })\n  const asset = assetsPage.data[0]\n\n  const assetDetails = await asset.details()\n  console.log('asset details:', assetDetails)\n")),(0,s.kt)("p",null,'Note: Some getters require "middleware" to be configured, which is a chain indexer that aids in historical queries. All such methods will have a comment indicating this requirement.'),(0,s.kt)("h3",{id:"terminology"},"Terminology"),(0,s.kt)("p",null,"The SDK uses the class ",(0,s.kt)("inlineCode",{parentName:"p"},"Account")," as an abstraction for a public/private key pair that is used to sign transactions. Although consistent with ",(0,s.kt)("a",{parentName:"p",href:"https://substrate.io/vision/substrate-and-polkadot/"},"Substrate")," (the chain's framework) naming conventions, it can be a source of confusion considering the domain. What the SDK calls an account is often referred to as a key. Public keys are often represented in ",(0,s.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/address-formats/"},"SS58 format")," which is a special encoding that indicates if the key is intended for mainnet or not. In this form, it is referred to as an address and looks like: ",(0,s.kt)("inlineCode",{parentName:"p"},"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY")," (non-mainnet keys begin with ",(0,s.kt)("strong",{parentName:"p"},"5"),", mainnet addresses will instead begin with ",(0,s.kt)("strong",{parentName:"p"},"2"),")."),(0,s.kt)("p",null,"The only thing an ",(0,s.kt)("inlineCode",{parentName:"p"},"Account")," holds is the POLYX utility token. Ownership of any asset on the Polymesh chain requires an ",(0,s.kt)("inlineCode",{parentName:"p"},"Identity"),'. This process involves a trusted provider writing a claim to the chain, stating that this person has completed a "customer due diligence" (CDD) process. For development chains, the mnemonic ',(0,s.kt)("inlineCode",{parentName:"p"},"//Alice")," can create CDD claims by default."),(0,s.kt)("p",null,"Polymesh uses an ",(0,s.kt)("inlineCode",{parentName:"p"},"Identity")," to provide flexibility in managing permissions. Portfolios can be created, and secondary keys can be granted permission to provide fine grained authorization."))}m.isMDXComponent=!0}}]);