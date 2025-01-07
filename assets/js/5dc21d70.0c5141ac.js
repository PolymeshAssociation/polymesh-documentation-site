"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[71341],{20171:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"classes/API/Entities/Asset/Base/Settlements/NonFungibleSettlements","title":"Class: NonFungibleSettlements","description":"api/entities/Asset/Base/Settlements.NonFungibleSettlements","source":"@site/sdk-docs_versioned_docs/version-27.1.x/classes/API/Entities/Asset/Base/Settlements/NonFungibleSettlements.md","sourceDirName":"classes/API/Entities/Asset/Base/Settlements","slug":"/classes/API/Entities/Asset/Base/Settlements/NonFungibleSettlements","permalink":"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/Base/Settlements/NonFungibleSettlements","draft":false,"unlisted":false,"tags":[],"version":"27.1.x","frontMatter":{"id":"NonFungibleSettlements","title":"Class: NonFungibleSettlements","sidebar_label":"NonFungibleSettlements"},"sidebar":"autogeneratedSidebar","previous":{"title":"FungibleSettlements","permalink":"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/Base/Settlements/FungibleSettlements"},"next":{"title":"AssetHolders","permalink":"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/Fungible/AssetHolders/"}}');var r=t(74848),i=t(28453);const l={id:"NonFungibleSettlements",title:"Class: NonFungibleSettlements",sidebar_label:"NonFungibleSettlements"},d=void 0,o={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"canTransfer",id:"cantransfer",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"preApprove",id:"preapprove",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"removePreApproval",id:"removepreapproval",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Entities/Asset/Base/Settlements/",children:"api/entities/Asset/Base/Settlements"}),".NonFungibleSettlements"]}),"\n",(0,r.jsx)(s.p,{children:"Handles all Asset Settlements related functionality"}),"\n",(0,r.jsx)(s.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"BaseSettlements"}),"<",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Entities/Types/#nftcollection",children:(0,r.jsx)(s.code,{children:"NftCollection"})}),">"]}),"\n",(0,r.jsxs)(s.p,{children:["\u21b3 ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"NonFungibleSettlements"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"cantransfer",children:"canTransfer"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"canTransfer"}),"(",(0,r.jsx)(s.code,{children:"args"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Entities/Asset/Types/TransferBreakdown/",children:(0,r.jsx)(s.code,{children:"TransferBreakdown"})}),">"]}),"\n",(0,r.jsx)(s.p,{children:"Check whether it is possible to create a settlement instruction to transfer an NFT between two Portfolios. Returns a breakdown of\nthe transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance\nfailures"}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"args"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Object"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"args.from?"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Entities/Types/#portfoliolike",children:(0,r.jsx)(s.code,{children:"PortfolioLike"})})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"sender Portfolio (optional, defaults to the signing Identity's Default Portfolio)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"args.nfts"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,r.jsx)(s.code,{children:"BigNumber"})," | ",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/NonFungible/Nft/",children:(0,r.jsx)(s.code,{children:"Nft"})}),")[]"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"the NFTs to transfer"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"args.to"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Entities/Types/#portfoliolike",children:(0,r.jsx)(s.code,{children:"PortfolioLike"})})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"receiver Portfolio"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Entities/Asset/Types/TransferBreakdown/",children:(0,r.jsx)(s.code,{children:"TransferBreakdown"})}),">"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"Note"})})}),"\n",(0,r.jsx)(s.p,{children:"this takes locked tokens into account. For example, if portfolio A has NFTs 1, 2 and 3 of a collection and this function is called to check if 1 of them can be\ntransferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer that token,\nthey would become locked. From that point, further calls to this function would return failed results because of the funds being locked, even though it hasn't been\ntransferred yet"}),"\n",(0,r.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Base/Settlements/index.ts#L249",children:"api/entities/Asset/Base/Settlements/index.ts:249"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"preapprove",children:"preApprove"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"preApprove"}),"(",(0,r.jsx)(s.code,{children:"opts?"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,r.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,r.jsx)(s.code,{children:"void"}),", ",(0,r.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,r.jsx)(s.p,{children:"Pre-approves receiving this asset for the signing identity. Receiving this asset in a settlement will not require manual affirmation"}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"opts?"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,r.jsx)(s.code,{children:"ProcedureOpts"})})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,r.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,r.jsx)(s.code,{children:"void"}),", ",(0,r.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"Note"})})}),"\n",(0,r.jsxs)(s.p,{children:["this method is of type ",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:"NoArgsProcedureMethod"}),", which means you can call ",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/NoArgsProcedureMethod/#checkauthorization",children:"preApprove.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsx)(s.p,{children:"BaseSettlements.preApprove"}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Base/Settlements/index.ts#L40",children:"api/entities/Asset/Base/Settlements/index.ts:40"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"removepreapproval",children:"removePreApproval"}),"\n",(0,r.jsxs)(s.p,{children:["\u25b8 ",(0,r.jsx)(s.strong,{children:"removePreApproval"}),"(",(0,r.jsx)(s.code,{children:"opts?"}),"): ",(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,r.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,r.jsx)(s.code,{children:"void"}),", ",(0,r.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,r.jsx)(s.p,{children:"Removes pre-approval for this asset"}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"opts?"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,r.jsx)(s.code,{children:"ProcedureOpts"})})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Promise"}),"<",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,r.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,r.jsx)(s.code,{children:"void"}),", ",(0,r.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"Note"})})}),"\n",(0,r.jsxs)(s.p,{children:["this method is of type ",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:"NoArgsProcedureMethod"}),", which means you can call ",(0,r.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/NoArgsProcedureMethod/#checkauthorization",children:"removePreApproval.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsx)(s.p,{children:"BaseSettlements.removePreApproval"}),"\n",(0,r.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Base/Settlements/index.ts#L50",children:"api/entities/Asset/Base/Settlements/index.ts:50"})})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>d});var n=t(96540);const r={},i=n.createContext(r);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);