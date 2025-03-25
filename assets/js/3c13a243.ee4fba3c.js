"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[36239],{72380:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"enums/API/Entities/Asset/Types/TransferError/TransferError","title":"Enumeration: TransferError","description":"api/entities/Asset/types.TransferError","source":"@site/sdk-docs_versioned_docs/version-25.1.x/enums/API/Entities/Asset/Types/TransferError/TransferError.md","sourceDirName":"enums/API/Entities/Asset/Types/TransferError","slug":"/enums/API/Entities/Asset/Types/TransferError/","permalink":"/polymesh-documentation-site/sdk-docs/25.1.x/enums/API/Entities/Asset/Types/TransferError/","draft":false,"unlisted":false,"tags":[],"version":"25.1.x","frontMatter":{"id":"TransferError","title":"Enumeration: TransferError","sidebar_label":"TransferError"},"sidebar":"defaultSidebar","previous":{"title":"SecurityIdentifierType","permalink":"/polymesh-documentation-site/sdk-docs/25.1.x/enums/API/Entities/Asset/Types/SecurityIdentifierType/"},"next":{"title":"TransferStatus","permalink":"/polymesh-documentation-site/sdk-docs/25.1.x/enums/API/Entities/Asset/Types/TransferStatus/"}}');var r=s(74848),t=s(28453);const d={id:"TransferError",title:"Enumeration: TransferError",sidebar_label:"TransferError"},l=void 0,a={},o=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"ComplianceFailure",id:"compliancefailure",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"InsufficientBalance",id:"insufficientbalance",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"InsufficientPortfolioBalance",id:"insufficientportfoliobalance",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"InvalidGranularity",id:"invalidgranularity",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"InvalidReceiverCdd",id:"invalidreceivercdd",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"InvalidReceiverPortfolio",id:"invalidreceiverportfolio",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"InvalidSenderCdd",id:"invalidsendercdd",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"InvalidSenderPortfolio",id:"invalidsenderportfolio",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"ScopeClaimMissing",id:"scopeclaimmissing",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"SelfTransfer",id:"selftransfer",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"TransfersFrozen",id:"transfersfrozen",level:3},{value:"Defined in",id:"defined-in-10",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Entities/Asset/Types/",children:"api/entities/Asset/types"}),".TransferError"]}),"\n",(0,r.jsxs)(n.p,{children:["Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to\na ",(0,r.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/enums/API/Entities/Asset/Types/TransferStatus/",children:"TransferStatus"}),", but two or more TransferErrors can represent the same TransferStatus, and\nnot all Transfer Statuses are represented by a TransferError"]}),"\n",(0,r.jsx)(n.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,r.jsx)(n.h3,{id:"compliancefailure",children:"ComplianceFailure"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"ComplianceFailure"})," = ",(0,r.jsx)(n.code,{children:'"ComplianceFailure"'})]}),"\n",(0,r.jsx)(n.p,{children:"translates to TransferStatus.ComplianceFailure"}),"\n",(0,r.jsx)(n.p,{children:"occurs if some compliance rule would prevent the transfer"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L347",children:"api/entities/Asset/types.ts:347"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"insufficientbalance",children:"InsufficientBalance"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"InsufficientBalance"})," = ",(0,r.jsx)(n.code,{children:'"InsufficientBalance"'})]}),"\n",(0,r.jsx)(n.p,{children:"translates to TransferStatus.InsufficientBalance"}),"\n",(0,r.jsx)(n.p,{children:"occurs if the sender Identity does not have enough balance to cover the amount"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L316",children:"api/entities/Asset/types.ts:316"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"insufficientportfoliobalance",children:"InsufficientPortfolioBalance"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"InsufficientPortfolioBalance"})," = ",(0,r.jsx)(n.code,{children:'"InsufficientPortfolioBalance"'})]}),"\n",(0,r.jsx)(n.p,{children:"translates to TransferStatus.PortfolioFailure"}),"\n",(0,r.jsx)(n.p,{children:"occurs if the sender Portfolio does not have enough balance to cover the amount"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L340",children:"api/entities/Asset/types.ts:340"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"invalidgranularity",children:"InvalidGranularity"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"InvalidGranularity"})," = ",(0,r.jsx)(n.code,{children:'"InvalidGranularity"'})]}),"\n",(0,r.jsx)(n.p,{children:"translates to TransferStatus.InvalidGranularity"}),"\n",(0,r.jsx)(n.p,{children:"occurs if attempting to transfer decimal amounts of a non-divisible token"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L285",children:"api/entities/Asset/types.ts:285"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"invalidreceivercdd",children:"InvalidReceiverCdd"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"InvalidReceiverCdd"})," = ",(0,r.jsx)(n.code,{children:'"InvalidReceiverCdd"'})]}),"\n",(0,r.jsx)(n.p,{children:"translates to TransferStatus.InvalidReceiverIdentity"}),"\n",(0,r.jsx)(n.p,{children:"occurs if the receiver Identity doesn't have a valid CDD claim"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L297",children:"api/entities/Asset/types.ts:297"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"invalidreceiverportfolio",children:"InvalidReceiverPortfolio"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"InvalidReceiverPortfolio"})," = ",(0,r.jsx)(n.code,{children:'"InvalidReceiverPortfolio"'})]}),"\n",(0,r.jsx)(n.p,{children:"translates to TransferStatus.PortfolioFailure"}),"\n",(0,r.jsx)(n.p,{children:"occurs if the receiver Portfolio doesn't exist"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L334",children:"api/entities/Asset/types.ts:334"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"invalidsendercdd",children:"InvalidSenderCdd"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"InvalidSenderCdd"})," = ",(0,r.jsx)(n.code,{children:'"InvalidSenderCdd"'})]}),"\n",(0,r.jsx)(n.p,{children:"translates to TransferStatus.InvalidSenderIdentity"}),"\n",(0,r.jsx)(n.p,{children:"occurs if the receiver Identity doesn't have a valid CDD claim"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L303",children:"api/entities/Asset/types.ts:303"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"invalidsenderportfolio",children:"InvalidSenderPortfolio"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"InvalidSenderPortfolio"})," = ",(0,r.jsx)(n.code,{children:'"InvalidSenderPortfolio"'})]}),"\n",(0,r.jsx)(n.p,{children:"translates to TransferStatus.PortfolioFailure"}),"\n",(0,r.jsx)(n.p,{children:"occurs if the sender Portfolio doesn't exist"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L328",children:"api/entities/Asset/types.ts:328"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"scopeclaimmissing",children:"ScopeClaimMissing"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"ScopeClaimMissing"})," = ",(0,r.jsx)(n.code,{children:'"ScopeClaimMissing"'})]}),"\n",(0,r.jsx)(n.p,{children:"translates to TransferStatus.ScopeClaimMissing"}),"\n",(0,r.jsx)(n.p,{children:"occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for\nthe Asset"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L310",children:"api/entities/Asset/types.ts:310"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"selftransfer",children:"SelfTransfer"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"SelfTransfer"})," = ",(0,r.jsx)(n.code,{children:'"SelfTransfer"'})]}),"\n",(0,r.jsx)(n.p,{children:"translates to TransferStatus.InvalidReceiverIdentity"}),"\n",(0,r.jsx)(n.p,{children:"occurs if the origin and destination Identities are the same"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L291",children:"api/entities/Asset/types.ts:291"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"transfersfrozen",children:"TransfersFrozen"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"TransfersFrozen"})," = ",(0,r.jsx)(n.code,{children:'"TransfersFrozen"'})]}),"\n",(0,r.jsx)(n.p,{children:"translates to TransferStatus.TransfersHalted"}),"\n",(0,r.jsx)(n.p,{children:"occurs if the Asset's transfers are frozen"}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/types.ts#L322",children:"api/entities/Asset/types.ts:322"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var i=s(96540);const r={},t=i.createContext(r);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);