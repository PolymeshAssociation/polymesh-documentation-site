"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[96776],{71674:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"README","title":"Polymesh SDK Readme","description":"semantic-release","source":"@site/sdk-docs_versioned_docs/version-27.1.x/README.md","sourceDirName":".","slug":"/","permalink":"/polymesh-documentation-site-restructure/sdk-docs/","draft":false,"unlisted":false,"tags":[],"version":"27.1.x","sidebarPosition":0,"frontMatter":{"id":"README","title":"Polymesh SDK Readme","sidebar_label":"SDK Readme","sidebar_position":0},"sidebar":"autogeneratedSidebar","next":{"title":"SDK Module List","permalink":"/polymesh-documentation-site-restructure/sdk-docs/modules"}}');var t=n(74848),o=n(28453);const a={id:"README",title:"Polymesh SDK Readme",sidebar_label:"SDK Readme",sidebar_position:0},r=void 0,l={},c=[{value:"@polymeshassociation/polymesh-sdk",id:"polymeshassociationpolymesh-sdk",level:2},{value:"Polymesh version",id:"polymesh-version",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Technical Pre-requisites",id:"technical-pre-requisites",level:3},{value:"Documentation",id:"documentation",level:3},{value:"How to use",id:"how-to-use",level:3},{value:"Installation",id:"installation",level:4},{value:"Initializing the client",id:"initializing-the-client",level:4},{value:"Creating Transactions",id:"creating-transactions",level:4},{value:"Creating MultiSig Proposals",id:"creating-multisig-proposals",level:4},{value:"Reading Data",id:"reading-data",level:4},{value:"Terminology",id:"terminology",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/semantic-release/semantic-release",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg",alt:"semantic-release"})}),"\n",(0,t.jsx)(s.a,{href:"https://github.com/standard/semistandard",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square",alt:"js-semistandard-style"})}),"\n",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/@polymeshassociation/polymesh-sdk",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/npm/types/@polymeshassociation/polymesh-sdk",alt:"Types"})}),"\n",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/@polymeshassociation/polymesh-sdk",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/npm/v/@polymeshassociation/polymesh-sdk",alt:"npm"})}),"\n",(0,t.jsx)(s.a,{href:"https://opensource.org/licenses/Apache-2.0",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/badge/License-Apache_2.0-blue.svg",alt:"License"})}),"\n",(0,t.jsx)(s.a,{href:"https://sonarcloud.io/summary/new_code?id=PolymeshAssociation_polymesh-sdk",children:(0,t.jsx)(s.img,{src:"https://sonarcloud.io/api/project_badges/measure?project=PolymeshAssociation_polymesh-sdk&metric=coverage",alt:"Coverage"})}),"\n",(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/actions",children:(0,t.jsx)(s.img,{src:"https://github.com/PolymeshAssociation/polymesh-sdk/actions/workflows/main.yml/badge.svg",alt:"Github Actions Workflow"})}),"\n",(0,t.jsx)(s.a,{href:"https://sonarcloud.io/summary/new_code?id=PolymeshAssociation_polymesh-sdk",children:(0,t.jsx)(s.img,{src:"https://sonarcloud.io/api/project_badges/measure?project=PolymeshAssociation_polymesh-sdk&metric=alert_status",alt:"Sonar Status"})}),"\n",(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/issues",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/github/issues/PolymeshAssociation/polymesh-sdk",alt:"Issues"})})]}),"\n",(0,t.jsx)(s.h2,{id:"polymeshassociationpolymesh-sdk",children:"@polymeshassociation/polymesh-sdk"}),"\n",(0,t.jsx)(s.h2,{id:"polymesh-version",children:"Polymesh version"}),"\n",(0,t.jsx)(s.p,{children:"This release is compatible with Polymesh v7"}),"\n",(0,t.jsx)(s.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(s.h3,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsx)(s.p,{children:"The Polymesh SDK's main goal is to provide external developers with a set of tools that will allow them to build powerful applications that interact with the Polymesh protocol. It focuses on abstracting away all the complexities of the Polymesh blockchain and expose a simple but complete interface. The result is a feature-rich, user-friendly JS library."}),"\n",(0,t.jsx)(s.h3,{id:"technical-pre-requisites",children:"Technical Pre-requisites"}),"\n",(0,t.jsxs)(s.p,{children:["In order to use the Polymesh SDK, you must install ",(0,t.jsx)(s.a,{href:"https://nodejs.org/",children:"node"})," (version 18+ recommended) and ",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/",children:"npm"}),". The library is written in ",(0,t.jsx)(s.a,{href:"https://www.typescriptlang.org/",children:"typescript"}),", but can also be used in plain javascript. This document will assume you are using typescript, but the translation to javascript is very simple."]}),"\n",(0,t.jsx)(s.h3,{id:"documentation",children:"Documentation"}),"\n",(0,t.jsx)(s.p,{children:"Polymesh SDK API Reference:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://developers.polymesh.network/sdk-docs/",children:"https://developers.polymesh.network/sdk-docs/"})}),"\n",(0,t.jsx)(s.h3,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(s.h4,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"npm i @polymeshassociation/polymesh-sdk --save"})}),"\n",(0,t.jsx)(s.p,{children:"Or, if you're using yarn"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"yarn add @polymeshassociation/polymesh-sdk"})}),"\n",(0,t.jsx)(s.p,{children:"Or, if using pnpm"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"pnpm add @polymeshassociation/polymesh-sdk"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"NOTE"})," it is ",(0,t.jsx)(s.em,{children:"highly"})," recommended that you use one of these three package managers. This project uses package resolutions/overrides to pin certain problematic dependencies, and these are only supported by the aforementioned package managers. Using a different package manager may result in unexpected behavior"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"NOTE"}),' if using TypeScript the compiler option "skipLibCheck" should be set to true in your tsconfig.json file']}),"\n",(0,t.jsx)(s.h4,{id:"initializing-the-client",children:"Initializing the client"}),"\n",(0,t.jsx)(s.p,{children:"Before you can start registering Tickers and creating Assets, you have to connect the Polymesh SDK client to a Polymesh node. This is a pretty straightforward process:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"import { Polymesh } from '@polymeshassociation/polymesh-sdk';\nimport { LocalSigningManager } from '@polymeshassociation/local-signing-manager';\n\nasync function run() {\n  const signingManager = await LocalSigningManager.create({\n    accounts: [\n      {\n        mnemonic: '//Alice', //A \"well known\" mnemonic, often with sudo privileges on development chains\n      },\n      {\n        mnemonic: 'forest end mail art wish leave truth else ignore royal knife river', // most mnemonics are 12 words\n      },\n    ],\n  });\n  const polyClient = await Polymesh.connect({\n    nodeUrl: 'wss://some-node-url.com',\n    signingManager,\n  });\n\n  // do stuff with the client\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Here is an overview of the parameters passed to the ",(0,t.jsx)(s.code,{children:"connect"})," function:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"nodeUrl"})," is a URL that points to a running Polymesh node"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"signingManager"})," is an object that complies with the ",(0,t.jsx)(s.code,{children:"SigningManager"})," interface. It holds the Accounts capable of signing transactions, and the signing logic itself. In this example, ",(0,t.jsx)(s.code,{children:"LocalSigningManager"})," is a simple signing manager that holds private keys in memory and signs with them"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"NOTE:"})," if using the SDK on a browser environment (i.e. with the Polymesh wallet browser extension), you would use the ",(0,t.jsx)(s.code,{children:"BrowserExtensionSigningManager"})," provided by ",(0,t.jsx)(s.code,{children:"@polymeshassociation/browser-extension-signing-manager"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"import { Polymesh } from '@polymeshassociation/polymesh-sdk';\nimport { BrowserExtensionSigningManager } from '@polymeshassociation/browser-extension-signing-manager';\n\nasync function run() {\n  const signingManager = await BrowserExtensionSigningManager.create('MY_APP_NAME'); // The Polymesh wallet extension will ask the user to authorize MY_APP_NAME for access\n\n  const polyClient = await Polymesh.connect({\n    nodeUrl: 'wss://some-node-url.com',\n    signingManager,\n  });\n\n  // do stuff with the client\n}\n"})}),"\n",(0,t.jsx)(s.h4,{id:"creating-transactions",children:"Creating Transactions"}),"\n",(0,t.jsxs)(s.p,{children:["Creating transactions is a two-step process. First a procedure is created, which validates the chain is likely to accept the transaction and returns a Procedure object. This procedure is then executed. This includes having the signing manager generate a signature and waiting for block finalization. Some procedures resolve to a relevant entity, such as ",(0,t.jsx)(s.code,{children:"createAsset"})," resolving to the created asset."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"  /**\n   * This step performs validations, and will throw an error if the transaction isn't expected to proceed, e.g., if the `ticker` is already in use\n   */\n  const createAssetProc = await polyClient.assets.createAsset({\n    name: 'My new asset'\n    ticker: 'TICKER',\n    // ... (args omitted for brevity)\n  })\n\n  /**\n   * The promise will resolve when the transaction is in a finalized block which takes on average 15 seconds. It will throw an error if the transaction fails to finalize.\n   * For example, if the `ticker` was claimed after the procedure was created, but before it was executed, or the signing manager didn't generate a correct signature.\n   */\n  const newAsset = await createAssetProc.run()\n"})}),"\n",(0,t.jsx)(s.h4,{id:"creating-multisig-proposals",children:"Creating MultiSig Proposals"}),"\n",(0,t.jsxs)(s.p,{children:["If the signingAccount is a MultiSig signer, then the transaction will need to be ran with ",(0,t.jsx)(s.code,{children:".runAsProposal()"})," instead of the usual ",(0,t.jsx)(s.code,{children:".run()"}),".\nThe underlying transaction will be wrapped with ",(0,t.jsx)(s.code,{children:"multiSig.createProposalAsKey"})," extrinsic and will resolve to the MultiSig proposal created."]}),"\n",(0,t.jsxs)(s.p,{children:["Approving and rejecting existing proposals are an exception and should be submitted with ",(0,t.jsx)(s.code,{children:".run()"}),". If your application supports\nMultiSig signers, then the procedure's ",(0,t.jsx)(s.code,{children:"multiSig"})," param can be checked to ensure the correct method is called."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"const createAssetProc = await polyClient.assets.createAsset(args, {\n  signingAccount: multiSigSigner,\n});\ncreateAssetProc.multiSig; // indicates the acting MultiSig. If set `runAsProposal` must be used\nconst proposal = await createAssetProc.runAsProposal();\n\nconst rejectProc = await proposal.reject({ signingAccount: multiSigSigner });\nrejectProc.multiSig; // returns `null`. Rejecting a proposal does not get wrapped\nawait rejectProc.run();\n"})}),"\n",(0,t.jsx)(s.h4,{id:"reading-data",children:"Reading Data"}),"\n",(0,t.jsx)(s.p,{children:"The SDK exposes getter functions that will return entities, which may have their own functions:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"const assetsPage = await polyClient.assets.get({ size: new BigNumber(20) });\nconst asset = assetsPage.data[0];\n\nconst assetDetails = await asset.details();\nconsole.log('asset details:', assetDetails);\n"})}),"\n",(0,t.jsx)(s.p,{children:'Note: Some getters require "middleware" to be configured, which is a chain indexer that aids in historical queries. All such methods will have a comment indicating this requirement.'}),"\n",(0,t.jsx)(s.h3,{id:"terminology",children:"Terminology"}),"\n",(0,t.jsxs)(s.p,{children:["The SDK uses the class ",(0,t.jsx)(s.code,{children:"Account"})," as an abstraction for a public/private key pair that is used to sign transactions. Although consistent with ",(0,t.jsx)(s.a,{href:"https://substrate.io/vision/substrate-and-polkadot/",children:"Substrate"})," (the chain's framework) naming conventions, it can be a source of confusion considering the domain. What the SDK calls an account is often referred to as a key. Public keys are often represented in ",(0,t.jsx)(s.a,{href:"https://docs.substrate.io/reference/address-formats/",children:"SS58 format"})," which is a special encoding that indicates if the key is intended for mainnet or not. In this form, it is referred to as an address and looks like: ",(0,t.jsx)(s.code,{children:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"})," (non-mainnet keys begin with ",(0,t.jsx)(s.strong,{children:"5"}),", mainnet addresses will instead begin with ",(0,t.jsx)(s.strong,{children:"2"}),")."]}),"\n",(0,t.jsxs)(s.p,{children:["The only thing an ",(0,t.jsx)(s.code,{children:"Account"})," holds is the POLYX utility token. Ownership of any asset on the Polymesh chain requires an ",(0,t.jsx)(s.code,{children:"Identity"}),'. This process involves a trusted provider writing a claim to the chain, stating that this person has completed a "customer due diligence" (CDD) process. For development chains, the mnemonic ',(0,t.jsx)(s.code,{children:"//Alice"})," can create CDD claims by default."]}),"\n",(0,t.jsxs)(s.p,{children:["Polymesh uses an ",(0,t.jsx)(s.code,{children:"Identity"})," to provide flexibility in managing permissions. Portfolios can be created, and secondary keys can be granted permission to provide fine grained authorization."]})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var i=n(96540);const t={},o=i.createContext(t);function a(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);