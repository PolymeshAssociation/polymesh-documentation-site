"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[48180],{60360:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var t=i(74848),n=i(28453);const d={id:"Portfolio",title:"Class: Portfolio",sidebar_label:"Portfolio"},l=void 0,r={id:"classes/API/Entities/Portfolio/Portfolio",title:"Class: Portfolio",description:"api/entities/Portfolio.Portfolio",source:"@site/sdk-docs_versioned_docs/version-23.2.x/classes/API/Entities/Portfolio/Portfolio.md",sourceDirName:"classes/API/Entities/Portfolio",slug:"/classes/API/Entities/Portfolio/",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Portfolio/",draft:!1,unlisted:!1,tags:[],version:"23.2.x",frontMatter:{id:"Portfolio",title:"Class: Portfolio",sidebar_label:"Portfolio"},sidebar:"defaultSidebar",previous:{title:"PermissionGroup",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/PermissionGroup/"},next:{title:"Subsidies",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Subsidies/"}},o={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"owner",id:"owner",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"uuid",id:"uuid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"exists",id:"exists",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getAssetBalances",id:"getassetbalances",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getCollections",id:"getcollections",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getCustodian",id:"getcustodian",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getTransactionHistory",id:"gettransactionhistory",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"isCustodiedBy",id:"iscustodiedby",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"isEqual",id:"isequal",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"isOwnedBy",id:"isownedby",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"moveFunds",id:"movefunds",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"quitCustody",id:"quitcustody",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"setCustodian",id:"setcustodian",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"toHuman",id:"tohuman",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"generateUuid",id:"generateuuid",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"unserialize",id:"unserialize",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-15",level:4}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/API/Entities/Portfolio/",children:"api/entities/Portfolio"}),".Portfolio"]}),"\n",(0,t.jsx)(s.p,{children:"Represents a base Portfolio for a specific Identity in the Polymesh blockchain"}),"\n",(0,t.jsx)(s.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/",children:(0,t.jsx)(s.code,{children:"Entity"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/Portfolio/UniqueIdentifiers/",children:(0,t.jsx)(s.code,{children:"UniqueIdentifiers"})}),", ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/Portfolio/HumanReadable/",children:(0,t.jsx)(s.code,{children:"HumanReadable"})}),">"]}),"\n",(0,t.jsxs)(s.p,{children:["\u21b3 ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Portfolio"})})]}),"\n",(0,t.jsxs)(s.p,{children:["\u21b3\u21b3 ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/DefaultPortfolio/",children:(0,t.jsx)(s.code,{children:"DefaultPortfolio"})})]}),"\n",(0,t.jsxs)(s.p,{children:["\u21b3\u21b3 ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/NumberedPortfolio/",children:(0,t.jsx)(s.code,{children:"NumberedPortfolio"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"owner",children:"owner"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"owner"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Identity/",children:(0,t.jsx)(s.code,{children:"Identity"})})]}),"\n",(0,t.jsx)(s.p,{children:"Identity of the Portfolio's owner"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Portfolio/index.ts#L79",children:"api/entities/Portfolio/index.ts:79"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"uuid",children:"uuid"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"uuid"}),": ",(0,t.jsx)(s.code,{children:"string"})]}),"\n",(0,t.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/#uuid",children:"uuid"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Entity.ts#L46",children:"api/entities/Entity.ts:46"})}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"exists",children:"exists"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.code,{children:"Abstract"})," ",(0,t.jsx)(s.strong,{children:"exists"}),"(): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"boolean"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Determine whether this Entity exists on chain"}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"boolean"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/#exists",children:"exists"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Entity.ts#L68",children:"api/entities/Entity.ts:68"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"getassetbalances",children:"getAssetBalances"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"getAssetBalances"}),"(",(0,t.jsx)(s.code,{children:"args?"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/Portfolio/Types/PortfolioBalance/",children:(0,t.jsx)(s.code,{children:"PortfolioBalance"})}),"[]>"]}),"\n",(0,t.jsx)(s.p,{children:"Retrieve the balances of all fungible assets in this Portfolio"}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"args?"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Object"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"args.assets"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,t.jsx)(s.code,{children:"string"})," | ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Asset/Fungible/FungibleAsset",children:(0,t.jsx)(s.code,{children:"FungibleAsset"})}),")[]"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"array of FungibleAssets (or tickers) for which to fetch balances (optional, all balances are retrieved if not passed)"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/Portfolio/Types/PortfolioBalance/",children:(0,t.jsx)(s.code,{children:"PortfolioBalance"})}),"[]>"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Portfolio/index.ts#L145",children:"api/entities/Portfolio/index.ts:145"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"getcollections",children:"getCollections"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"getCollections"}),"(",(0,t.jsx)(s.code,{children:"args?"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/Portfolio/Types/PortfolioCollection/",children:(0,t.jsx)(s.code,{children:"PortfolioCollection"})}),"[]>"]}),"\n",(0,t.jsx)(s.p,{children:"Retrieve the NFTs held in this portfolio"}),"\n",(0,t.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"args?"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Object"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"args.collections"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,t.jsx)(s.code,{children:"string"})," | ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Asset/NonFungible/NftCollection/",children:(0,t.jsx)(s.code,{children:"NftCollection"})}),")[]"]})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/Portfolio/Types/PortfolioCollection/",children:(0,t.jsx)(s.code,{children:"PortfolioCollection"})}),"[]>"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Portfolio/index.ts#L224",children:"api/entities/Portfolio/index.ts:224"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"getcustodian",children:"getCustodian"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"getCustodian"}),"(): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Identity/",children:(0,t.jsx)(s.code,{children:"Identity"})}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Retrieve the custodian Identity of this Portfolio"}),"\n",(0,t.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Identity/",children:(0,t.jsx)(s.code,{children:"Identity"})}),">"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"if no custodian is set, the owner Identity is returned"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Portfolio/index.ts#L365",children:"api/entities/Portfolio/index.ts:365"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"gettransactionhistory",children:"getTransactionHistory"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"getTransactionHistory"}),"(",(0,t.jsx)(s.code,{children:"filters?"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/Portfolio/Types/HistoricSettlement/",children:(0,t.jsx)(s.code,{children:"HistoricSettlement"})}),"[]>"]}),"\n",(0,t.jsx)(s.p,{children:"Retrieve a list of transactions where this portfolio was involved. Can be filtered using parameters"}),"\n",(0,t.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"filters"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Object"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"filters.account?"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"Account involved in the settlement"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"filters.ticker?"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"ticker involved in the transaction"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/Portfolio/Types/HistoricSettlement/",children:(0,t.jsx)(s.code,{children:"HistoricSettlement"})}),"[]>"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"uses the middlewareV2"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Portfolio/index.ts#L407",children:"api/entities/Portfolio/index.ts:407"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"iscustodiedby",children:"isCustodiedBy"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"isCustodiedBy"}),"(",(0,t.jsx)(s.code,{children:"args?"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"boolean"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Return whether an Identity is the Portfolio custodian"}),"\n",(0,t.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"args?"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Object"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"args.identity"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"string"})," | ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Identity/",children:(0,t.jsx)(s.code,{children:"Identity"})})]}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"optional, defaults to the signing Identity"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"boolean"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Portfolio/index.ts#L129",children:"api/entities/Portfolio/index.ts:129"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"isequal",children:"isEqual"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"isEqual"}),"(",(0,t.jsx)(s.code,{children:"entity"}),"): ",(0,t.jsx)(s.code,{children:"boolean"})]}),"\n",(0,t.jsx)(s.p,{children:"Determine whether this Entity is the same as another one"}),"\n",(0,t.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"entity"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/",children:(0,t.jsx)(s.code,{children:"Entity"})}),"<",(0,t.jsx)(s.code,{children:"unknown"}),", ",(0,t.jsx)(s.code,{children:"unknown"}),">"]})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"boolean"})}),"\n",(0,t.jsx)(s.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/#isequal",children:"isEqual"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Entity.ts#L61",children:"api/entities/Entity.ts:61"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"isownedby",children:"isOwnedBy"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"isOwnedBy"}),"(",(0,t.jsx)(s.code,{children:"args?"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"boolean"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Return whether an Identity is the Portfolio owner"}),"\n",(0,t.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"args?"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Object"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"args.identity"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"string"})," | ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Identity/",children:(0,t.jsx)(s.code,{children:"Identity"})})]}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"defaults to the signing Identity"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"boolean"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Portfolio/index.ts#L116",children:"api/entities/Portfolio/index.ts:116"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"movefunds",children:"moveFunds"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"moveFunds"}),"(",(0,t.jsx)(s.code,{children:"args"}),", ",(0,t.jsx)(s.code,{children:"opts?"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Types/#genericpolymeshtransaction",children:(0,t.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,t.jsx)(s.code,{children:"void"}),", ",(0,t.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,t.jsx)(s.p,{children:"Moves funds from this Portfolio to another one owned by the same Identity"}),"\n",(0,t.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"args"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Procedures/Types/MoveFundsParams/",children:(0,t.jsx)(s.code,{children:"MoveFundsParams"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"opts?"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProcedureOpts/",children:(0,t.jsx)(s.code,{children:"ProcedureOpts"})})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-8",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Types/#genericpolymeshtransaction",children:(0,t.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,t.jsx)(s.code,{children:"void"}),", ",(0,t.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"required role:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Portfolio Custodian"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsxs)(s.p,{children:["this method is of type ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProcedureMethod/",children:"ProcedureMethod"}),", which means you can call ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProcedureMethod/#checkauthorization",children:"moveFunds.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Portfolio/index.ts#L343",children:"api/entities/Portfolio/index.ts:343"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"quitcustody",children:"quitCustody"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"quitCustody"}),"(",(0,t.jsx)(s.code,{children:"opts?"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Types/#genericpolymeshtransaction",children:(0,t.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,t.jsx)(s.code,{children:"void"}),", ",(0,t.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,t.jsx)(s.p,{children:"Returns the custody of the portfolio to the portfolio owner unilaterally"}),"\n",(0,t.jsx)(s.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"opts?"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProcedureOpts/",children:(0,t.jsx)(s.code,{children:"ProcedureOpts"})})})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-9",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Types/#genericpolymeshtransaction",children:(0,t.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,t.jsx)(s.code,{children:"void"}),", ",(0,t.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"required role:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Portfolio Custodian"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsxs)(s.p,{children:["this method is of type ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/NoArgsProcedureMethod/",children:"NoArgsProcedureMethod"}),", which means you can call ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/NoArgsProcedureMethod/#checkauthorization",children:"quitCustody.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Portfolio/index.ts#L356",children:"api/entities/Portfolio/index.ts:356"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"setcustodian",children:"setCustodian"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"setCustodian"}),"(",(0,t.jsx)(s.code,{children:"args"}),", ",(0,t.jsx)(s.code,{children:"opts?"}),"): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Types/#genericpolymeshtransaction",children:(0,t.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/AuthorizationRequest/",children:(0,t.jsx)(s.code,{children:"AuthorizationRequest"})}),", ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/AuthorizationRequest/",children:(0,t.jsx)(s.code,{children:"AuthorizationRequest"})}),">>"]}),"\n",(0,t.jsx)(s.p,{children:"Send an invitation to an Identity to assign it as custodian for this Portfolio"}),"\n",(0,t.jsx)(s.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"args"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Procedures/Types/SetCustodianParams/",children:(0,t.jsx)(s.code,{children:"SetCustodianParams"})})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"opts?"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProcedureOpts/",children:(0,t.jsx)(s.code,{children:"ProcedureOpts"})})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-10",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Types/#genericpolymeshtransaction",children:(0,t.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/AuthorizationRequest/",children:(0,t.jsx)(s.code,{children:"AuthorizationRequest"})}),", ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/AuthorizationRequest/",children:(0,t.jsx)(s.code,{children:"AuthorizationRequest"})}),">>"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsxs)(s.p,{children:["this will create an ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/AuthorizationRequest/",children:"Authorization Request"})," which has to be accepted by the ",(0,t.jsx)(s.code,{children:"targetIdentity"}),".\nAn ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Account/",children:"Account"})," or ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Identity/",children:"Identity"})," can fetch its pending Authorization Requests by calling ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Common/Namespaces/Authorizations/#getreceived",children:"authorizations.getReceived"}),".\nAlso, an Account or Identity can directly fetch the details of an Authorization Request by calling ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Common/Namespaces/Authorizations/#getone",children:"authorizations.getOne"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"required role:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Portfolio Custodian"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsxs)(s.p,{children:["this method is of type ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProcedureMethod/",children:"ProcedureMethod"}),", which means you can call ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProcedureMethod/#checkauthorization",children:"setCustodian.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Portfolio/index.ts#L330",children:"api/entities/Portfolio/index.ts:330"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"tohuman",children:"toHuman"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.strong,{children:"toHuman"}),"(): ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/Portfolio/HumanReadable/",children:(0,t.jsx)(s.code,{children:"HumanReadable"})})]}),"\n",(0,t.jsx)(s.p,{children:"Return the Portfolio ID and owner DID"}),"\n",(0,t.jsx)(s.h4,{id:"returns-11",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/Portfolio/HumanReadable/",children:(0,t.jsx)(s.code,{children:"HumanReadable"})})}),"\n",(0,t.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/#tohuman",children:"toHuman"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Portfolio/index.ts#L524",children:"api/entities/Portfolio/index.ts:524"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"generateuuid",children:"generateUuid"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.code,{children:"Static"})," ",(0,t.jsx)(s.strong,{children:"generateUuid"}),"<",(0,t.jsx)(s.code,{children:"Identifiers"}),">(",(0,t.jsx)(s.code,{children:"identifiers"}),"): ",(0,t.jsx)(s.code,{children:"string"})]}),"\n",(0,t.jsx)(s.p,{children:"Generate the Entity's UUID from its identifying properties"}),"\n",(0,t.jsx)(s.h4,{id:"type-parameters",children:"Type parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"})})}),(0,t.jsx)(s.tbody,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Identifiers"})})})})]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"identifiers"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Identifiers"})})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-12",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"string"})}),"\n",(0,t.jsx)(s.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/#generateuuid",children:"generateUuid"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-14",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Entity.ts#L14",children:"api/entities/Entity.ts:14"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"unserialize",children:"unserialize"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 ",(0,t.jsx)(s.code,{children:"Static"})," ",(0,t.jsx)(s.strong,{children:"unserialize"}),"<",(0,t.jsx)(s.code,{children:"Identifiers"}),">(",(0,t.jsx)(s.code,{children:"serialized"}),"): ",(0,t.jsx)(s.code,{children:"Identifiers"})]}),"\n",(0,t.jsx)(s.p,{children:"Unserialize a UUID into its Unique Identifiers"}),"\n",(0,t.jsx)(s.h4,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"})})}),(0,t.jsx)(s.tbody,{children:(0,t.jsx)(s.tr,{children:(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Identifiers"})})})})]}),"\n",(0,t.jsx)(s.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"serialized"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"string"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"UUID to unserialize"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-13",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Identifiers"})}),"\n",(0,t.jsx)(s.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Entity/#unserialize",children:"unserialize"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-15",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/Entity.ts#L23",children:"api/entities/Entity.ts:23"})})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>r});var t=i(96540);const n={},d=t.createContext(n);function l(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);