"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[88651],{28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var s=i(96540);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}},72990:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"interfaces/API/Client/Polymesh/ConnectParams/ConnectParams","title":"Interface: ConnectParams","description":"api/client/Polymesh.ConnectParams","source":"@site/sdk-docs_versioned_docs/version-27.5.x/interfaces/API/Client/Polymesh/ConnectParams/ConnectParams.md","sourceDirName":"interfaces/API/Client/Polymesh/ConnectParams","slug":"/interfaces/API/Client/Polymesh/ConnectParams/","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Client/Polymesh/ConnectParams/","draft":false,"unlisted":false,"tags":[],"version":"27.5.x","frontMatter":{"id":"ConnectParams","title":"Interface: ConnectParams","sidebar_label":"ConnectParams"},"sidebar":"autogeneratedSidebar","previous":{"title":"PolymeshTransactionBatch","permalink":"/polymesh-documentation-site/sdk-docs/classes/Base/PolymeshTransactionBatch/"},"next":{"title":"EventIdentifier","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Client/Types/EventIdentifier/"}}');var t=i(74848),o=i(28453);const l={id:"ConnectParams",title:"Interface: ConnectParams",sidebar_label:"ConnectParams"},d=void 0,r={},a=[{value:"Properties",id:"properties",level:2},{value:"middlewareV2",id:"middlewarev2",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"nodeUrl",id:"nodeurl",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"polkadot",id:"polkadot",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"signingManager",id:"signingmanager",level:3},{value:"Defined in",id:"defined-in-3",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Client/Polymesh/",children:"api/client/Polymesh"}),".ConnectParams"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"middlewarev2",children:"middlewareV2"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.code,{children:"Optional"})," ",(0,t.jsx)(n.strong,{children:"middlewareV2"}),": ",(0,t.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Client/Types/MiddlewareConfig/",children:(0,t.jsx)(n.code,{children:"MiddlewareConfig"})})]}),"\n",(0,t.jsx)(n.p,{children:"Allows for historical data to be queried. Required for some methods to work"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Polymesh.ts#L53",children:"api/client/Polymesh.ts:53"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"nodeurl",children:"nodeUrl"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"nodeUrl"}),": ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.p,{children:"The websocket or http URL for the Polymesh node to connect to"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Note"})})}),"\n",(0,t.jsx)(n.p,{children:"subscription features are not available if an http URL is provided"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Polymesh.ts#L45",children:"api/client/Polymesh.ts:45"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"polkadot",children:"polkadot"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.code,{children:"Optional"})," ",(0,t.jsx)(n.strong,{children:"polkadot"}),": ",(0,t.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Client/Types/PolkadotConfig/",children:(0,t.jsx)(n.code,{children:"PolkadotConfig"})})]}),"\n",(0,t.jsx)(n.p,{children:"Advanced options that will be used with the underling polkadot.js instance"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Polymesh.ts#L57",children:"api/client/Polymesh.ts:57"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"signingmanager",children:"signingManager"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.code,{children:"Optional"})," ",(0,t.jsx)(n.strong,{children:"signingManager"}),": ",(0,t.jsx)(n.code,{children:"SigningManager"})]}),"\n",(0,t.jsx)(n.p,{children:"Handles signing of transactions. Required to be set before submitting transactions"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/client/Polymesh.ts#L49",children:"api/client/Polymesh.ts:49"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);