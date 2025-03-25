"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[39477],{77281:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"classes/API/Entities/Asset/Base/Metadata/Metadata","title":"Class: Metadata","description":"api/entities/Asset/Base/Metadata.Metadata","source":"@site/sdk-docs_versioned_docs/version-27.1.x/classes/API/Entities/Asset/Base/Metadata/Metadata.md","sourceDirName":"classes/API/Entities/Asset/Base/Metadata","slug":"/classes/API/Entities/Asset/Base/Metadata/","permalink":"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/Metadata/","draft":false,"unlisted":false,"tags":[],"version":"27.1.x","frontMatter":{"id":"Metadata","title":"Class: Metadata","sidebar_label":"Metadata"},"sidebar":"autogeneratedSidebar","previous":{"title":"Documents","permalink":"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/Documents/"},"next":{"title":"Permissions","permalink":"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/Permissions/"}}');var i=t(74848),d=t(28453);const a={id:"Metadata",title:"Class: Metadata",sidebar_label:"Metadata"},r=void 0,l={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getDetails",id:"getdetails",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getOne",id:"getone",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"register",id:"register",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Asset/Base/Metadata/",children:"api/entities/Asset/Base/Metadata"}),".Metadata"]}),"\n",(0,i.jsx)(s.p,{children:"Handles all Asset Metadata related functionality"}),"\n",(0,i.jsx)(s.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Namespace"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/BaseAsset/",children:(0,i.jsx)(s.code,{children:"BaseAsset"})}),">"]}),"\n",(0,i.jsxs)(s.p,{children:["\u21b3 ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Metadata"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"get",children:"get"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"get"}),"(): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/MetadataEntry/",children:(0,i.jsx)(s.code,{children:"MetadataEntry"})}),"[]>"]}),"\n",(0,i.jsx)(s.p,{children:"Retrieve all (global + local) the MetadataEntry for this Asset"}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/MetadataEntry/",children:(0,i.jsx)(s.code,{children:"MetadataEntry"})}),"[]>"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsx)(s.p,{children:"this returns all available metadata entries for this Asset, with or without any value being associated with the metadata"}),"\n",(0,i.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Base/Metadata/index.ts#L69",children:"api/entities/Asset/Base/Metadata/index.ts:69"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getdetails",children:"getDetails"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getDetails"}),"(): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/MetadataEntry/Types/#metadatawithvalue",children:(0,i.jsx)(s.code,{children:"MetadataWithValue"})}),"[]>"]}),"\n",(0,i.jsx)(s.p,{children:"Retrieve all (local + global) the MetadataEntry details whose value is set for this Asset"}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/MetadataEntry/Types/#metadatawithvalue",children:(0,i.jsx)(s.code,{children:"MetadataWithValue"})}),"[]>"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Base/Metadata/index.ts#L183",children:"api/entities/Asset/Base/Metadata/index.ts:183"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getone",children:"getOne"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getOne"}),"(",(0,i.jsx)(s.code,{children:"args"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/MetadataEntry/",children:(0,i.jsx)(s.code,{children:"MetadataEntry"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Retrieve a single MetadataEntry by its ID and type"}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"args"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"Object"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"args.id"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"BigNumber"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"args.type"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/enums/API/Entities/MetadataEntry/Types/MetadataType/",children:(0,i.jsx)(s.code,{children:"MetadataType"})})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/MetadataEntry/",children:(0,i.jsx)(s.code,{children:"MetadataEntry"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Throws"})})}),"\n",(0,i.jsx)(s.p,{children:"if there is no MetadataEntry with the passed ID and specified type"}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Base/Metadata/index.ts#L115",children:"api/entities/Asset/Base/Metadata/index.ts:115"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"register",children:"register"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"register"}),"(",(0,i.jsx)(s.code,{children:"args"}),", ",(0,i.jsx)(s.code,{children:"opts?"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,i.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/MetadataEntry/",children:(0,i.jsx)(s.code,{children:"MetadataEntry"})}),", ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/MetadataEntry/",children:(0,i.jsx)(s.code,{children:"MetadataEntry"})}),">>"]}),"\n",(0,i.jsxs)(s.p,{children:["Register a metadata for this Asset and optionally set its value.\nThe metadata value can be set by passing ",(0,i.jsx)(s.code,{children:"value"})," parameter and specifying other optional ",(0,i.jsx)(s.code,{children:"details"})," about the value"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"args"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#registermetadataparams",children:(0,i.jsx)(s.code,{children:"RegisterMetadataParams"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,i.jsx)(s.code,{children:"ProcedureOpts"})})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,i.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/MetadataEntry/",children:(0,i.jsx)(s.code,{children:"MetadataEntry"})}),", ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/MetadataEntry/",children:(0,i.jsx)(s.code,{children:"MetadataEntry"})}),">>"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsxs)(s.p,{children:["This registers a metadata of type ",(0,i.jsx)(s.code,{children:"Local"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsxs)(s.p,{children:["this method is of type ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/",children:"ProcedureMethod"}),", which means you can call ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/#checkauthorization",children:"register.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Base/Metadata/index.ts#L60",children:"api/entities/Asset/Base/Metadata/index.ts:60"})})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var n=t(96540);const i={},d=n.createContext(i);function a(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);