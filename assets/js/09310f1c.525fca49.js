"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[10660],{30096:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"enums/Base/Types/TransactionStatus/TransactionStatus","title":"Enumeration: TransactionStatus","description":"base/types.TransactionStatus","source":"@site/sdk-docs_versioned_docs/version-26.2.x/enums/Base/Types/TransactionStatus/TransactionStatus.md","sourceDirName":"enums/Base/Types/TransactionStatus","slug":"/enums/Base/Types/TransactionStatus/","permalink":"/polymesh-documentation-site/sdk-docs/enums/Base/Types/TransactionStatus/","draft":false,"unlisted":false,"tags":[],"version":"26.2.x","frontMatter":{"id":"TransactionStatus","title":"Enumeration: TransactionStatus","sidebar_label":"TransactionStatus"},"sidebar":"defaultSidebar","previous":{"title":"TransactionArgumentType","permalink":"/polymesh-documentation-site/sdk-docs/enums/Base/Types/TransactionArgumentType/"},"next":{"title":"AssetTx","permalink":"/polymesh-documentation-site/sdk-docs/enums/Generated/Types/AssetTx/"}}');var t=s(74848),d=s(28453);const r={id:"TransactionStatus",title:"Enumeration: TransactionStatus",sidebar_label:"TransactionStatus"},a=void 0,c={},o=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Aborted",id:"aborted",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Failed",id:"failed",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Idle",id:"idle",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Rejected",id:"rejected",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Running",id:"running",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Succeeded",id:"succeeded",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Unapproved",id:"unapproved",level:3},{value:"Defined in",id:"defined-in-6",level:4}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/modules/Base/Types/",children:"base/types"}),".TransactionStatus"]}),"\n",(0,t.jsx)(n.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,t.jsx)(n.h3,{id:"aborted",children:"Aborted"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"Aborted"})," = ",(0,t.jsx)(n.code,{children:'"Aborted"'})]}),"\n",(0,t.jsxs)(n.p,{children:["the transaction couldn't be broadcast. It was either dropped, usurped or invalidated\nsee ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110",children:"https://github.com/paritytech/substrate/blob/master/primitives/transaction-pool/src/pool.rs#L58-L110"})]}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/base/types.ts#L50",children:"base/types.ts:50"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"failed",children:"Failed"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"Failed"})," = ",(0,t.jsx)(n.code,{children:'"Failed"'})]}),"\n",(0,t.jsx)(n.p,{children:"the transaction's execution failed due to a an on-chain validation error, insufficient balance for fees, or other such reasons"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/base/types.ts#L45",children:"base/types.ts:45"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"idle",children:"Idle"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"Idle"})," = ",(0,t.jsx)(n.code,{children:'"Idle"'})]}),"\n",(0,t.jsx)(n.p,{children:"the transaction is prepped to run"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/base/types.ts#L25",children:"base/types.ts:25"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"rejected",children:"Rejected"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"Rejected"})," = ",(0,t.jsx)(n.code,{children:'"Rejected"'})]}),"\n",(0,t.jsx)(n.p,{children:"the transaction was rejected by the signer"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/base/types.ts#L37",children:"base/types.ts:37"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"running",children:"Running"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"Running"})," = ",(0,t.jsx)(n.code,{children:'"Running"'})]}),"\n",(0,t.jsx)(n.p,{children:"the transaction is being executed"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/base/types.ts#L33",children:"base/types.ts:33"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"succeeded",children:"Succeeded"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"Succeeded"})," = ",(0,t.jsx)(n.code,{children:'"Succeeded"'})]}),"\n",(0,t.jsx)(n.p,{children:"the transaction was run successfully"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/base/types.ts#L41",children:"base/types.ts:41"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"unapproved",children:"Unapproved"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"Unapproved"})," = ",(0,t.jsx)(n.code,{children:'"Unapproved"'})]}),"\n",(0,t.jsx)(n.p,{children:"the transaction is waiting for the user's signature"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/base/types.ts#L29",children:"base/types.ts:29"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(96540);const t={},d=i.createContext(t);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);