"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[17991],{49916:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var i=n(74848),t=n(28453);const o={id:"README",title:"Polymesh SDK Readme",sidebar_label:"SDK Readme",sidebar_position:0},a=void 0,r={id:"README",title:"Polymesh SDK Readme",description:"semantic-release",source:"@site/sdk-docs_versioned_docs/version-22.1.x/README.md",sourceDirName:".",slug:"/",permalink:"/polymesh-documentation-site/sdk-docs/22.1.x/",draft:!1,unlisted:!1,tags:[],version:"22.1.x",sidebarPosition:0,frontMatter:{id:"README",title:"Polymesh SDK Readme",sidebar_label:"SDK Readme",sidebar_position:0},sidebar:"defaultSidebar",next:{title:"SDK Module List",permalink:"/polymesh-documentation-site/sdk-docs/22.1.x/modules"}},l={},h=[{value:"@polymeshassociation/polymesh-sdk",id:"polymeshassociationpolymesh-sdk",level:2},{value:"Polymesh version",id:"polymesh-version",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Purpose",id:"purpose",level:3},{value:"Technical Pre-requisites",id:"technical-pre-requisites",level:3},{value:"Documentation",id:"documentation",level:3},{value:"How to use",id:"how-to-use",level:3},{value:"Installation",id:"installation",level:4},{value:"Initializing the client",id:"initializing-the-client",level:4}];function c(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://github.com/semantic-release/semantic-release",children:(0,i.jsx)(s.img,{src:"https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg",alt:"semantic-release"})}),"\n",(0,i.jsx)(s.a,{href:"https://github.com/standard/semistandard",children:(0,i.jsx)(s.img,{src:"https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square",alt:"js-semistandard-style"})}),"\n",(0,i.jsx)(s.a,{href:"https://",children:(0,i.jsx)(s.img,{src:"https://img.shields.io/npm/types/@polymeshassociation/polymesh-sdk",alt:"Types"})}),"\n",(0,i.jsx)(s.a,{href:"https://www.npmjs.com/package/@polymeshassociation/polymesh-sdk",children:(0,i.jsx)(s.img,{src:"https://img.shields.io/npm/v/@polymeshassociation/polymesh-sdk",alt:"npm"})}),"\n",(0,i.jsx)(s.a,{href:"https://opensource.org/licenses/Apache-2.0",children:(0,i.jsx)(s.img,{src:"https://img.shields.io/badge/License-Apache_2.0-blue.svg",alt:"License"})}),"\n",(0,i.jsx)(s.a,{href:"https://sonarcloud.io/summary/new_code?id=PolymeshAssociation_polymesh-sdk",children:(0,i.jsx)(s.img,{src:"https://sonarcloud.io/api/project_badges/measure?project=PolymeshAssociation_polymesh-sdk&metric=coverage",alt:"Coverage"})}),"\n",(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/actions",children:(0,i.jsx)(s.img,{src:"https://github.com/PolymeshAssociation/polymesh-sdk/actions/workflows/main.yml/badge.svg",alt:"Github Actions Workflow"})}),"\n",(0,i.jsx)(s.a,{href:"https://sonarcloud.io/summary/new_code?id=PolymeshAssociation_polymesh-sdk",children:(0,i.jsx)(s.img,{src:"https://sonarcloud.io/api/project_badges/measure?project=PolymeshAssociation_polymesh-sdk&metric=alert_status",alt:"Sonar Status"})}),"\n",(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/issues",children:(0,i.jsx)(s.img,{src:"https://img.shields.io/github/issues/PolymeshAssociation/polymesh-sdk",alt:"Issues"})})]}),"\n",(0,i.jsx)(s.h2,{id:"polymeshassociationpolymesh-sdk",children:"@polymeshassociation/polymesh-sdk"}),"\n",(0,i.jsx)(s.h2,{id:"polymesh-version",children:"Polymesh version"}),"\n",(0,i.jsx)(s.p,{children:"This release is compatible with Polymesh v6.x.x"}),"\n",(0,i.jsx)(s.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(s.h3,{id:"purpose",children:"Purpose"}),"\n",(0,i.jsx)(s.p,{children:"The Polymesh SDK's main goal is to provide external developers with a set of tools that will allow them to build powerful applications that interact with the Polymesh protocol. It focuses on abstracting away all the complexities of the Polymesh blockchain and expose a simple but complete interface. The result is a feature-rich, user-friendly node.js library."}),"\n",(0,i.jsx)(s.h3,{id:"technical-pre-requisites",children:"Technical Pre-requisites"}),"\n",(0,i.jsxs)(s.p,{children:["In order to use the Polymesh SDK, you must install ",(0,i.jsx)(s.a,{href:"https://nodejs.org/",children:"node"})," (version 16) and ",(0,i.jsx)(s.a,{href:"https://www.npmjs.com/",children:"npm"}),". The library is written in ",(0,i.jsx)(s.a,{href:"https://www.typescriptlang.org/",children:"typescript"}),", but can also be used in plain javascript. This document will assume you are using typescript, but the translation to javascript is very simple."]}),"\n",(0,i.jsx)(s.h3,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsx)(s.p,{children:"Token Studio SDK Walkthrough:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://developers.polymath.network/token-studio-api-walkthrough/",children:"https://developers.polymath.network/token-studio-api-walkthrough/"})}),"\n",(0,i.jsx)(s.p,{children:"Polymesh SDK API Reference:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/wiki",children:"https://github.com/PolymeshAssociation/polymesh-sdk/wiki"})}),"\n",(0,i.jsx)(s.h3,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsx)(s.h4,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"npm i @polymeshassociation/polymesh-sdk --save"})}),"\n",(0,i.jsx)(s.p,{children:"Or, if you're using yarn"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"yarn add @polymeshassociation/polymesh-sdk"})}),"\n",(0,i.jsx)(s.p,{children:"Or, if using pnpm"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"pnpm add @polymeshassociation/polymesh-sdk"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"NOTE"})," it is ",(0,i.jsx)(s.em,{children:"highly"})," recommended that you use one of these three package managers. This project uses package resolutions/overrides to pin certain problematic dependencies, and these are only supported by the aforementioned package managers. Using a different package manager may result in unexpected behavior"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"NOTE"}),' if using TypeScript the compiler option "skipLibCheck" should be set to true in your tsconfig.json file']}),"\n",(0,i.jsx)(s.h4,{id:"initializing-the-client",children:"Initializing the client"}),"\n",(0,i.jsx)(s.p,{children:"Before you can start registering Tickers and creating Assets, you have to connect the Polymesh SDK client to a Polymesh node. This is a pretty straightforward process:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typescript",children:"import { Polymesh } from '@polymeshassociation/polymesh-sdk';\nimport { LocalSigningManager } from '@polymeshassociation/local-signing-manager';\n\nasync function run() {\n  const signingManager = await LocalSigningManager.create({\n    accounts: [\n      {\n        seed: 'YOU_WISH',\n      },\n    ],\n  });\n  const polyClient = await Polymesh.connect({\n    nodeUrl: 'wss://some-node-url.com',\n    signingManager,\n  });\n\n  // do stuff with the client\n}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Here is an overview of the parameters passed to the ",(0,i.jsx)(s.code,{children:"connect"})," function:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"nodeUrl"})," is a URL that points to a running Polymesh node"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"signingManager"})," is an object that complies with the ",(0,i.jsx)(s.code,{children:"SigningManager"})," interface. It holds the Accounts capable of signing transactions, and the signing logic itself. In this example, ",(0,i.jsx)(s.code,{children:"LocalSigningManager"})," is a simple signing manager that holds private keys in memory and signs with them"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"NOTE:"})," if using the SDK on a browser environment (i.e. with the Polymesh wallet browser extension), you would use the ",(0,i.jsx)(s.code,{children:"BrowserExtensionSigningManager"})," provided by ",(0,i.jsx)(s.code,{children:"@polymeshassociation/browser-extension-signing-manager"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typescript",children:"import { Polymesh } from '@polymeshassociation/polymesh-sdk';\nimport { BrowserExtensionSigningManager } from '@polymeshassociation/browser-extension-signing-manager';\n\nasync function run() {\n  const signingManager = await BrowserExtensionSigningManager.create(\n    'MY_APP_NAME'\n  ); // The Polymesh wallet extension will ask the user to authorize MY_APP_NAME for access\n\n  const polyClient = await Polymesh.connect({\n    nodeUrl: 'wss://some-node-url.com',\n    signingManager,\n  });\n\n  // do stuff with the client\n}\n"})})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var i=n(96540);const t={},o=i.createContext(t);function a(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);