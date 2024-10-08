"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[84089],{46953:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var n=s(74848),t=s(28453);const d={id:"Entity",title:"Class: Entity<UniqueIdentifiers, HumanReadable>",sidebar_label:"Entity"},l=void 0,r={id:"classes/API/Entities/Entity/Entity",title:"Class: Entity<UniqueIdentifiers, HumanReadable>",description:"api/entities/Entity.Entity",source:"@site/sdk-docs_versioned_docs/version-25.1.x/classes/API/Entities/Entity/Entity.md",sourceDirName:"classes/API/Entities/Entity",slug:"/classes/API/Entities/Entity/",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/",draft:!1,unlisted:!1,tags:[],version:"25.1.x",frontMatter:{id:"Entity",title:"Class: Entity<UniqueIdentifiers, HumanReadable>",sidebar_label:"Entity"},sidebar:"defaultSidebar",previous:{title:"DividendDistribution",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/DividendDistribution/"},next:{title:"Identity",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"}},c={},h=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"uuid",id:"uuid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"exists",id:"exists",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"isEqual",id:"isequal",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"toHuman",id:"tohuman",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"generateUuid",id:"generateuuid",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"isUniqueIdentifiers",id:"isuniqueidentifiers",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"unserialize",id:"unserialize",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function o(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Entity/",children:"api/entities/Entity"}),".Entity"]}),"\n",(0,n.jsx)(i.p,{children:"Represents an object or resource in the Polymesh Ecosystem with its own set of properties and functionality"}),"\n",(0,n.jsx)(i.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsx)(i.tr,{children:(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"})})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsx)(i.tr,{children:(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"UniqueIdentifiers"})})}),(0,n.jsx)(i.tr,{children:(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"HumanReadable"})})})]})]}),"\n",(0,n.jsx)(i.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:"Entity"})})}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/",children:(0,n.jsx)(i.code,{children:"Account"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/BaseAsset/",children:(0,n.jsx)(i.code,{children:"BaseAsset"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/NonFungible/Nft/",children:(0,n.jsx)(i.code,{children:"Nft"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/",children:(0,n.jsx)(i.code,{children:"AuthorizationRequest"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Checkpoint/",children:(0,n.jsx)(i.code,{children:"Checkpoint"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CheckpointSchedule/",children:(0,n.jsx)(i.code,{children:"CheckpointSchedule"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CorporateActionBase/",children:(0,n.jsx)(i.code,{children:"CorporateActionBase"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/",children:(0,n.jsx)(i.code,{children:"Identity"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Instruction/",children:(0,n.jsx)(i.code,{children:"Instruction"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/MetadataEntry/",children:(0,n.jsx)(i.code,{children:"MetadataEntry"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/MultiSigProposal/",children:(0,n.jsx)(i.code,{children:"MultiSigProposal"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Offering/",children:(0,n.jsx)(i.code,{children:"Offering"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/PermissionGroup/",children:(0,n.jsx)(i.code,{children:"PermissionGroup"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Portfolio/",children:(0,n.jsx)(i.code,{children:"Portfolio"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Subsidy/",children:(0,n.jsx)(i.code,{children:"Subsidy"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/TickerReservation/",children:(0,n.jsx)(i.code,{children:"TickerReservation"})})]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Venue/",children:(0,n.jsx)(i.code,{children:"Venue"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(i.h3,{id:"uuid",children:"uuid"}),"\n",(0,n.jsxs)(i.p,{children:["\u2022 ",(0,n.jsx)(i.strong,{children:"uuid"}),": ",(0,n.jsx)(i.code,{children:"string"})]}),"\n",(0,n.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Entity.ts#L46",children:"api/entities/Entity.ts:46"})}),"\n",(0,n.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(i.h3,{id:"exists",children:"exists"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.code,{children:"Abstract"})," ",(0,n.jsx)(i.strong,{children:"exists"}),"(): ",(0,n.jsx)(i.code,{children:"Promise"}),"<",(0,n.jsx)(i.code,{children:"boolean"}),">"]}),"\n",(0,n.jsx)(i.p,{children:"Determine whether this Entity exists on chain"}),"\n",(0,n.jsx)(i.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Promise"}),"<",(0,n.jsx)(i.code,{children:"boolean"}),">"]}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Entity.ts#L68",children:"api/entities/Entity.ts:68"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"isequal",children:"isEqual"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.strong,{children:"isEqual"}),"(",(0,n.jsx)(i.code,{children:"entity"}),"): ",(0,n.jsx)(i.code,{children:"boolean"})]}),"\n",(0,n.jsx)(i.p,{children:"Determine whether this Entity is the same as another one"}),"\n",(0,n.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"entity"})}),(0,n.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/",children:(0,n.jsx)(i.code,{children:"Entity"})}),"<",(0,n.jsx)(i.code,{children:"unknown"}),", ",(0,n.jsx)(i.code,{children:"unknown"}),">"]})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"boolean"})}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Entity.ts#L61",children:"api/entities/Entity.ts:61"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"tohuman",children:"toHuman"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.code,{children:"Abstract"})," ",(0,n.jsx)(i.strong,{children:"toHuman"}),"(): ",(0,n.jsx)(i.code,{children:"HumanReadable"})]}),"\n",(0,n.jsx)(i.p,{children:"Returns Entity data in a human readable (JSON) format"}),"\n",(0,n.jsx)(i.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"HumanReadable"})}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Entity.ts#L73",children:"api/entities/Entity.ts:73"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"generateuuid",children:"generateUuid"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.code,{children:"Static"})," ",(0,n.jsx)(i.strong,{children:"generateUuid"}),"<",(0,n.jsx)(i.code,{children:"Identifiers"}),">(",(0,n.jsx)(i.code,{children:"identifiers"}),"): ",(0,n.jsx)(i.code,{children:"string"})]}),"\n",(0,n.jsx)(i.p,{children:"Generate the Entity's UUID from its identifying properties"}),"\n",(0,n.jsx)(i.h4,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsx)(i.tr,{children:(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"})})}),(0,n.jsx)(i.tbody,{children:(0,n.jsx)(i.tr,{children:(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"Identifiers"})})})})]}),"\n",(0,n.jsx)(i.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"identifiers"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"Identifiers"})})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"string"})}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Entity.ts#L14",children:"api/entities/Entity.ts:14"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"isuniqueidentifiers",children:"isUniqueIdentifiers"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.code,{children:"Static"})," ",(0,n.jsx)(i.strong,{children:"isUniqueIdentifiers"}),"(",(0,n.jsx)(i.code,{children:"identifiers"}),"): ",(0,n.jsx)(i.code,{children:"boolean"})]}),"\n",(0,n.jsx)(i.p,{children:"Typeguard that checks whether the object passed corresponds to the unique identifiers of the class. Must be overridden"}),"\n",(0,n.jsx)(i.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"identifiers"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"unknown"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"object to type check"})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"boolean"})}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Entity.ts#L42",children:"api/entities/Entity.ts:42"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"unserialize",children:"unserialize"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.code,{children:"Static"})," ",(0,n.jsx)(i.strong,{children:"unserialize"}),"<",(0,n.jsx)(i.code,{children:"Identifiers"}),">(",(0,n.jsx)(i.code,{children:"serialized"}),"): ",(0,n.jsx)(i.code,{children:"Identifiers"})]}),"\n",(0,n.jsx)(i.p,{children:"Unserialize a UUID into its Unique Identifiers"}),"\n",(0,n.jsx)(i.h4,{id:"type-parameters-2",children:"Type parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsx)(i.tr,{children:(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"})})}),(0,n.jsx)(i.tbody,{children:(0,n.jsx)(i.tr,{children:(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"Identifiers"})})})})]}),"\n",(0,n.jsx)(i.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"serialized"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"string"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"UUID to unserialize"})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Identifiers"})}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Entity.ts#L23",children:"api/entities/Entity.ts:23"})})]})}function a(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>r});var n=s(96540);const t={},d=n.createContext(t);function l(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);