"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[96824],{5244:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(74848),t=n(28453);const r={id:"ConfigureDividendDistributionParams",title:"Interface: ConfigureDividendDistributionParams",sidebar_label:"ConfigureDividendDistributionParams"},d=void 0,o={id:"interfaces/API/Procedures/Types/ConfigureDividendDistributionParams/ConfigureDividendDistributionParams",title:"Interface: ConfigureDividendDistributionParams",description:"api/procedures/types.ConfigureDividendDistributionParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/ConfigureDividendDistributionParams/ConfigureDividendDistributionParams.md",sourceDirName:"interfaces/API/Procedures/Types/ConfigureDividendDistributionParams",slug:"/interfaces/API/Procedures/Types/ConfigureDividendDistributionParams/",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/ConfigureDividendDistributionParams/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ConfigureDividendDistributionParams",title:"Interface: ConfigureDividendDistributionParams",sidebar_label:"ConfigureDividendDistributionParams"},sidebar:"defaultSidebar",previous:{title:"ClaimPercentageTransferRestrictionInput",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/ClaimPercentageTransferRestrictionInput/"},next:{title:"ControllerTransferParams",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/ControllerTransferParams/"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"checkpoint",id:"checkpoint",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"currency",id:"currency",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"declarationDate",id:"declarationdate",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"defaultTaxWithholding",id:"defaulttaxwithholding",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"description",id:"description",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"expiryDate",id:"expirydate",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"maxAmount",id:"maxamount",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"originPortfolio",id:"originportfolio",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"paymentDate",id:"paymentdate",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"perShare",id:"pershare",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"targets",id:"targets",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"taxWithholdings",id:"taxwithholdings",level:3},{value:"Defined in",id:"defined-in-11",level:4}];function a(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Procedures/Types/",children:"api/procedures/types"}),".ConfigureDividendDistributionParams"]}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(i.h3,{id:"checkpoint",children:"checkpoint"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"checkpoint"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Entities/Asset/Fungible/Checkpoints/Types/#inputcacheckpoint",children:(0,s.jsx)(i.code,{children:"InputCaCheckpoint"})})]}),"\n",(0,s.jsx)(i.p,{children:"checkpoint to be used to calculate Dividends. If a Schedule is passed, the next Checkpoint it creates will be used.\nIf a Date is passed, a Checkpoint will be created at that date and used"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1333",children:"api/procedures/types.ts:1333"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"currency",children:"currency"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"currency"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n",(0,s.jsx)(i.p,{children:"ticker of the currency in which Dividends will be distributed"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1341",children:"api/procedures/types.ts:1341"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"declarationdate",children:"declarationDate"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.code,{children:"Optional"})," ",(0,s.jsx)(i.strong,{children:"declarationDate"}),": ",(0,s.jsx)(i.code,{children:"Date"})]}),"\n",(0,s.jsx)(i.p,{children:"date at which the issuer publicly declared the Dividend Distribution. Optional, defaults to the current date"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1312",children:"api/procedures/types.ts:1312"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"defaulttaxwithholding",children:"defaultTaxWithholding"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.code,{children:"Optional"})," ",(0,s.jsx)(i.strong,{children:"defaultTaxWithholding"}),": ",(0,s.jsx)(i.code,{children:"BigNumber"})]}),"\n",(0,s.jsx)(i.p,{children:"default percentage (0-100) of the Benefits to be held for tax purposes"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1323",children:"api/procedures/types.ts:1323"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"description",children:"description"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"description"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1313",children:"api/procedures/types.ts:1313"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"expirydate",children:"expiryDate"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.code,{children:"Optional"})," ",(0,s.jsx)(i.strong,{children:"expiryDate"}),": ",(0,s.jsx)(i.code,{children:"Date"})]}),"\n",(0,s.jsx)(i.p,{children:"optional, defaults to never expiring"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1357",children:"api/procedures/types.ts:1357"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"maxamount",children:"maxAmount"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"maxAmount"}),": ",(0,s.jsx)(i.code,{children:"BigNumber"})]}),"\n",(0,s.jsxs)(i.p,{children:["maximum amount of ",(0,s.jsx)(i.code,{children:"currency"})," to distribute in total"]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1349",children:"api/procedures/types.ts:1349"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"originportfolio",children:"originPortfolio"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.code,{children:"Optional"})," ",(0,s.jsx)(i.strong,{children:"originPortfolio"}),": ",(0,s.jsx)(i.code,{children:"BigNumber"})," | ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/NumberedPortfolio/",children:(0,s.jsx)(i.code,{children:"NumberedPortfolio"})})]}),"\n",(0,s.jsx)(i.p,{children:"portfolio from which the Dividends will be distributed. Optional, defaults to the Dividend Distributions Agent's Default Portfolio"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1337",children:"api/procedures/types.ts:1337"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"paymentdate",children:"paymentDate"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"paymentDate"}),": ",(0,s.jsx)(i.code,{children:"Date"})]}),"\n",(0,s.jsx)(i.p,{children:"date from which Asset Holders can claim their Dividends"}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1353",children:"api/procedures/types.ts:1353"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"pershare",children:"perShare"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"perShare"}),": ",(0,s.jsx)(i.code,{children:"BigNumber"})]}),"\n",(0,s.jsxs)(i.p,{children:["amount of ",(0,s.jsx)(i.code,{children:"currency"})," to distribute per each share of the Asset that a target holds"]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1345",children:"api/procedures/types.ts:1345"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"targets",children:"targets"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.code,{children:"Optional"})," ",(0,s.jsx)(i.strong,{children:"targets"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Procedures/Types/#inputcorporateactiontargets",children:(0,s.jsx)(i.code,{children:"InputCorporateActionTargets"})})]}),"\n",(0,s.jsxs)(i.p,{children:["Asset Holder Identities to be included (or excluded) from the Dividend Distribution. Inclusion/exclusion is controlled by the ",(0,s.jsx)(i.code,{children:"treatment"}),"\nproperty. When the value is ",(0,s.jsx)(i.code,{children:"Include"}),", all Asset Holders not present in the array are excluded, and vice-versa. If no value is passed,\nthe default value for the Asset is used. If there is no default value, all Asset Holders will be part of the Dividend Distribution"]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1319",children:"api/procedures/types.ts:1319"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"taxwithholdings",children:"taxWithholdings"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.code,{children:"Optional"})," ",(0,s.jsx)(i.strong,{children:"taxWithholdings"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Procedures/Types/#inputcorporateactiontaxwithholdings",children:(0,s.jsx)(i.code,{children:"InputCorporateActionTaxWithholdings"})})]}),"\n",(0,s.jsxs)(i.p,{children:["percentage (0-100) of the Benefits to be held for tax purposes from individual Asset Holder Identities.\nThis overrides the value of ",(0,s.jsx)(i.code,{children:"defaultTaxWithholding"})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L1328",children:"api/procedures/types.ts:1328"})})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>o});var s=n(96540);const t={},r=s.createContext(t);function d(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);