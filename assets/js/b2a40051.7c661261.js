"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[10086],{59753:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=i(74848),r=i(28453);const d={id:"TransferError",title:"Enumeration: TransferError",sidebar_label:"TransferError"},t=void 0,l={id:"enums/Types/TransferError/TransferError",title:"Enumeration: TransferError",description:"types.TransferError",source:"@site/sdk-docs/enums/Types/TransferError/TransferError.md",sourceDirName:"enums/Types/TransferError",slug:"/enums/Types/TransferError/",permalink:"/polymesh-documentation-site/sdk-docs/24.0.0-beta.1/enums/Types/TransferError/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"TransferError",title:"Enumeration: TransferError",sidebar_label:"TransferError"},sidebar:"defaultSidebar",previous:{title:"TransactionStatus",permalink:"/polymesh-documentation-site/sdk-docs/24.0.0-beta.1/enums/Types/TransactionStatus/"},next:{title:"TransferRestrictionType",permalink:"/polymesh-documentation-site/sdk-docs/24.0.0-beta.1/enums/Types/TransferRestrictionType/"}},a={},o=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"ComplianceFailure",id:"compliancefailure",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"InsufficientBalance",id:"insufficientbalance",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"InsufficientPortfolioBalance",id:"insufficientportfoliobalance",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"InvalidGranularity",id:"invalidgranularity",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"InvalidReceiverCdd",id:"invalidreceivercdd",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"InvalidReceiverPortfolio",id:"invalidreceiverportfolio",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"InvalidSenderCdd",id:"invalidsendercdd",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"InvalidSenderPortfolio",id:"invalidsenderportfolio",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"ScopeClaimMissing",id:"scopeclaimmissing",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"SelfTransfer",id:"selftransfer",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"TransfersFrozen",id:"transfersfrozen",level:3},{value:"Defined in",id:"defined-in-10",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/24.0.0-beta.1/modules/Types/",children:"types"}),".TransferError"]}),"\n",(0,s.jsxs)(n.p,{children:["Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to\na ",(0,s.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/24.0.0-beta.1/enums/Types/TransferStatus/",children:"TransferStatus"}),", but two or more TransferErrors can represent the same TransferStatus, and\nnot all Transfer Statuses are represented by a TransferError"]}),"\n",(0,s.jsx)(n.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,s.jsx)(n.h3,{id:"compliancefailure",children:"ComplianceFailure"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"ComplianceFailure"})," = ",(0,s.jsx)(n.code,{children:'"ComplianceFailure"'})]}),"\n",(0,s.jsx)(n.p,{children:"translates to TransferStatus.ComplianceFailure"}),"\n",(0,s.jsx)(n.p,{children:"occurs if some compliance rule would prevent the transfer"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L706",children:"types/index.ts:706"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"insufficientbalance",children:"InsufficientBalance"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"InsufficientBalance"})," = ",(0,s.jsx)(n.code,{children:'"InsufficientBalance"'})]}),"\n",(0,s.jsx)(n.p,{children:"translates to TransferStatus.InsufficientBalance"}),"\n",(0,s.jsx)(n.p,{children:"occurs if the sender Identity does not have enough balance to cover the amount"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L675",children:"types/index.ts:675"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"insufficientportfoliobalance",children:"InsufficientPortfolioBalance"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"InsufficientPortfolioBalance"})," = ",(0,s.jsx)(n.code,{children:'"InsufficientPortfolioBalance"'})]}),"\n",(0,s.jsx)(n.p,{children:"translates to TransferStatus.PortfolioFailure"}),"\n",(0,s.jsx)(n.p,{children:"occurs if the sender Portfolio does not have enough balance to cover the amount"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L699",children:"types/index.ts:699"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"invalidgranularity",children:"InvalidGranularity"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"InvalidGranularity"})," = ",(0,s.jsx)(n.code,{children:'"InvalidGranularity"'})]}),"\n",(0,s.jsx)(n.p,{children:"translates to TransferStatus.InvalidGranularity"}),"\n",(0,s.jsx)(n.p,{children:"occurs if attempting to transfer decimal amounts of a non-divisible token"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L644",children:"types/index.ts:644"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"invalidreceivercdd",children:"InvalidReceiverCdd"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"InvalidReceiverCdd"})," = ",(0,s.jsx)(n.code,{children:'"InvalidReceiverCdd"'})]}),"\n",(0,s.jsx)(n.p,{children:"translates to TransferStatus.InvalidReceiverIdentity"}),"\n",(0,s.jsx)(n.p,{children:"occurs if the receiver Identity doesn't have a valid CDD claim"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L656",children:"types/index.ts:656"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"invalidreceiverportfolio",children:"InvalidReceiverPortfolio"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"InvalidReceiverPortfolio"})," = ",(0,s.jsx)(n.code,{children:'"InvalidReceiverPortfolio"'})]}),"\n",(0,s.jsx)(n.p,{children:"translates to TransferStatus.PortfolioFailure"}),"\n",(0,s.jsx)(n.p,{children:"occurs if the receiver Portfolio doesn't exist"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L693",children:"types/index.ts:693"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"invalidsendercdd",children:"InvalidSenderCdd"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"InvalidSenderCdd"})," = ",(0,s.jsx)(n.code,{children:'"InvalidSenderCdd"'})]}),"\n",(0,s.jsx)(n.p,{children:"translates to TransferStatus.InvalidSenderIdentity"}),"\n",(0,s.jsx)(n.p,{children:"occurs if the receiver Identity doesn't have a valid CDD claim"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L662",children:"types/index.ts:662"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"invalidsenderportfolio",children:"InvalidSenderPortfolio"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"InvalidSenderPortfolio"})," = ",(0,s.jsx)(n.code,{children:'"InvalidSenderPortfolio"'})]}),"\n",(0,s.jsx)(n.p,{children:"translates to TransferStatus.PortfolioFailure"}),"\n",(0,s.jsx)(n.p,{children:"occurs if the sender Portfolio doesn't exist"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L687",children:"types/index.ts:687"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"scopeclaimmissing",children:"ScopeClaimMissing"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"ScopeClaimMissing"})," = ",(0,s.jsx)(n.code,{children:'"ScopeClaimMissing"'})]}),"\n",(0,s.jsx)(n.p,{children:"translates to TransferStatus.ScopeClaimMissing"}),"\n",(0,s.jsx)(n.p,{children:"occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for\nthe Asset"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L669",children:"types/index.ts:669"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"selftransfer",children:"SelfTransfer"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"SelfTransfer"})," = ",(0,s.jsx)(n.code,{children:'"SelfTransfer"'})]}),"\n",(0,s.jsx)(n.p,{children:"translates to TransferStatus.InvalidReceiverIdentity"}),"\n",(0,s.jsx)(n.p,{children:"occurs if the origin and destination Identities are the same"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L650",children:"types/index.ts:650"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"transfersfrozen",children:"TransfersFrozen"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"TransfersFrozen"})," = ",(0,s.jsx)(n.code,{children:'"TransfersFrozen"'})]}),"\n",(0,s.jsx)(n.p,{children:"translates to TransferStatus.TransfersHalted"}),"\n",(0,s.jsx)(n.p,{children:"occurs if the Asset's transfers are frozen"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/adcc38781/src/types/index.ts#L681",children:"types/index.ts:681"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(96540);const r={},d=s.createContext(r);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);