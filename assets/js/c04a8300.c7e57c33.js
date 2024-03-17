"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[59188],{84346:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=s(74848),i=s(28453);const l={id:"FungibleSettlements",title:"Class: FungibleSettlements",sidebar_label:"FungibleSettlements"},r=void 0,o={id:"classes/API/Entities/Asset/Base/Settlements/FungibleSettlements",title:"Class: FungibleSettlements",description:"api/entities/Asset/Base/Settlements.FungibleSettlements",source:"@site/sdk-docs_versioned_docs/version-23.0.x/classes/API/Entities/Asset/Base/Settlements/FungibleSettlements.md",sourceDirName:"classes/API/Entities/Asset/Base/Settlements",slug:"/classes/API/Entities/Asset/Base/Settlements/FungibleSettlements",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/Settlements/FungibleSettlements",draft:!1,unlisted:!1,tags:[],version:"23.0.x",frontMatter:{id:"FungibleSettlements",title:"Class: FungibleSettlements",sidebar_label:"FungibleSettlements"},sidebar:"defaultSidebar",previous:{title:"Permissions",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/Permissions/"},next:{title:"NonFungibleSettlements",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/Settlements/NonFungibleSettlements"}},d={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"canTransfer",id:"cantransfer",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Asset/Base/Settlements/",children:"api/entities/Asset/Base/Settlements"}),".FungibleSettlements"]}),"\n",(0,n.jsx)(t.p,{children:"Handles all Asset Settlements related functionality"}),"\n",(0,n.jsx)(t.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"BaseSettlements"}),"<",(0,n.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Fungible/FungibleAsset",children:(0,n.jsx)(t.code,{children:"FungibleAsset"})}),">"]}),"\n",(0,n.jsxs)(t.p,{children:["\u21b3 ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"FungibleSettlements"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.h3,{id:"cantransfer",children:"canTransfer"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"canTransfer"}),"(",(0,n.jsx)(t.code,{children:"args"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/TransferBreakdown/",children:(0,n.jsx)(t.code,{children:"TransferBreakdown"})}),">"]}),"\n",(0,n.jsx)(t.p,{children:"Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios. Returns a breakdown of\nthe transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance\nfailures"}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"args"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"Object"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"args.amount"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"BigNumber"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"amount of tokens to transfer"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"args.from?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/modules/Types/#portfoliolike",children:(0,n.jsx)(t.code,{children:"PortfolioLike"})})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"sender Portfolio (optional, defaults to the signing Identity's Default Portfolio)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"args.to"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/modules/Types/#portfoliolike",children:(0,n.jsx)(t.code,{children:"PortfolioLike"})})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"receiver Portfolio"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/TransferBreakdown/",children:(0,n.jsx)(t.code,{children:"TransferBreakdown"})}),">"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Note"})})}),"\n",(0,n.jsx)(t.p,{children:"this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be\ntransferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,\nthey would become locked. From that point, further calls to this function would return failed results because of the funds being locked, even though they haven't been\ntransferred yet"}),"\n",(0,n.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/api/entities/Asset/Base/Settlements/index.ts#L144",children:"api/entities/Asset/Base/Settlements/index.ts:144"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const i={},l=n.createContext(i);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);