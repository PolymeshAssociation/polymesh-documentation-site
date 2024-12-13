"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[44139],{65276:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"enums/Base/Types/PayingAccountType/PayingAccountType","title":"Enumeration: PayingAccountType","description":"base/types.PayingAccountType","source":"@site/sdk-docs_versioned_docs/version-27.0.x/enums/Base/Types/PayingAccountType/PayingAccountType.md","sourceDirName":"enums/Base/Types/PayingAccountType","slug":"/enums/Base/Types/PayingAccountType/","permalink":"/polymesh-documentation-site/sdk-docs/enums/Base/Types/PayingAccountType/","draft":false,"unlisted":false,"tags":[],"version":"27.0.x","frontMatter":{"id":"PayingAccountType","title":"Enumeration: PayingAccountType","sidebar_label":"PayingAccountType"},"sidebar":"defaultSidebar","previous":{"title":"TxGroup","permalink":"/polymesh-documentation-site/sdk-docs/enums/API/Procedures/Types/TxGroup/"},"next":{"title":"TransactionArgumentType","permalink":"/polymesh-documentation-site/sdk-docs/enums/Base/Types/TransactionArgumentType/"}}');var t=s(74848),o=s(28453);const r={id:"PayingAccountType",title:"Enumeration: PayingAccountType",sidebar_label:"PayingAccountType"},c=void 0,a={},d=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Caller",id:"caller",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"MultiSigCreator",id:"multisigcreator",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Other",id:"other",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Subsidy",id:"subsidy",level:3},{value:"Defined in",id:"defined-in-3",level:4}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/modules/Base/Types/",children:"base/types"}),".PayingAccountType"]}),"\n",(0,t.jsx)(n.p,{children:"Type of relationship between a paying account and a beneficiary"}),"\n",(0,t.jsx)(n.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,t.jsx)(n.h3,{id:"caller",children:"Caller"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"Caller"})," = ",(0,t.jsx)(n.code,{children:'"Caller"'})]}),"\n",(0,t.jsx)(n.p,{children:"the caller Account is responsible of paying the fees"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/base/types.ts#L127",children:"base/types.ts:127"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"multisigcreator",children:"MultiSigCreator"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"MultiSigCreator"})," = ",(0,t.jsx)(n.code,{children:'"MultiSigCreator"'})]}),"\n",(0,t.jsx)(n.p,{children:"The creator of the MultiSig is responsible for paying the fees"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/base/types.ts#L131",children:"base/types.ts:131"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"other",children:"Other"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"Other"})," = ",(0,t.jsx)(n.code,{children:'"Other"'})]}),"\n",(0,t.jsx)(n.p,{children:"the paying Account is paying for a specific transaction because of\nchain-specific constraints (e.g. the caller is accepting an invitation to an Identity\nand cannot have any funds to pay for it by definition)"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/base/types.ts#L123",children:"base/types.ts:123"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"subsidy",children:"Subsidy"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"Subsidy"})," = ",(0,t.jsx)(n.code,{children:'"Subsidy"'})]}),"\n",(0,t.jsx)(n.p,{children:"the paying Account is currently subsidizing the caller"}),"\n",(0,t.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/8a9158669/src/base/types.ts#L117",children:"base/types.ts:117"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);