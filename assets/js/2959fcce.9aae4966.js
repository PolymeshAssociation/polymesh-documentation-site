"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[31531],{480:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"classes/API/Entities/Identity/AssetPermissions/AssetPermissions","title":"Class: AssetPermissions","description":"api/entities/Identity/AssetPermissions.AssetPermissions","source":"@site/sdk-docs_versioned_docs/version-27.5.x/classes/API/Entities/Identity/AssetPermissions/AssetPermissions.md","sourceDirName":"classes/API/Entities/Identity/AssetPermissions","slug":"/classes/API/Entities/Identity/AssetPermissions/","permalink":"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/AssetPermissions/","draft":false,"unlisted":false,"tags":[],"version":"27.5.x","frontMatter":{"id":"AssetPermissions","title":"Class: AssetPermissions","sidebar_label":"AssetPermissions"},"sidebar":"autogeneratedSidebar","previous":{"title":"Identity","permalink":"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},"next":{"title":"ChildIdentity","permalink":"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/ChildIdentity/"}}');var n=i(74848),d=i(28453);const r={id:"AssetPermissions",title:"Class: AssetPermissions",sidebar_label:"AssetPermissions"},l=void 0,c={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"checkPermissions",id:"checkpermissions",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"enabledAt",id:"enabledat",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"get",id:"get",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getGroup",id:"getgroup",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getOperationHistory",id:"getoperationhistory",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"setGroup",id:"setgroup",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"waive",id:"waive",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Identity/AssetPermissions/",children:"api/entities/Identity/AssetPermissions"}),".AssetPermissions"]}),"\n",(0,n.jsx)(s.p,{children:"Handles all Asset Permissions (External Agents) related functionality on the Identity side"}),"\n",(0,n.jsx)(s.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Namespace"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/",children:(0,n.jsx)(s.code,{children:"Identity"})}),">"]}),"\n",(0,n.jsxs)(s.p,{children:["\u21b3 ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"AssetPermissions"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"checkpermissions",children:"checkPermissions"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"checkPermissions"}),"(",(0,n.jsx)(s.code,{children:"args"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/CheckPermissionsResult/",children:(0,n.jsx)(s.code,{children:"CheckPermissionsResult"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/enums/API/Entities/Types/SignerType/#identity",children:(0,n.jsx)(s.code,{children:"Identity"})}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Check whether this Identity has specific transaction Permissions over an Asset"}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"args"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"Object"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"args.asset"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/BaseAsset/",children:(0,n.jsx)(s.code,{children:"BaseAsset"})})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"args.transactions"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"null"})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/Generated/Types/#txtag",children:(0,n.jsx)(s.code,{children:"TxTag"})}),"[]"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/CheckPermissionsResult/",children:(0,n.jsx)(s.code,{children:"CheckPermissionsResult"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/enums/API/Entities/Types/SignerType/#identity",children:(0,n.jsx)(s.code,{children:"Identity"})}),">>"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Identity/AssetPermissions.ts#L133",children:"api/entities/Identity/AssetPermissions.ts:133"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"enabledat",children:"enabledAt"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"enabledAt"}),"(",(0,n.jsx)(s.code,{children:"\xabdestructured\xbb"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"null"})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Client/Types/EventIdentifier/",children:(0,n.jsx)(s.code,{children:"EventIdentifier"})}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Retrieve the identifier data (block number, date and event index) of the event that was emitted when this Identity was enabled/added as\nan Agent with permissions over a specific Asset"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"\xabdestructured\xbb"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"Object"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["\u203a\xa0",(0,n.jsx)(s.code,{children:"asset"})]}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Asset/Types/#asset",children:(0,n.jsx)(s.code,{children:"Asset"})})]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"null"})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Client/Types/EventIdentifier/",children:(0,n.jsx)(s.code,{children:"EventIdentifier"})}),">"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"uses the middlewareV2"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["there is a possibility that the data is not ready by the time it is requested. In that case, ",(0,n.jsx)(s.code,{children:"null"})," is returned"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Identity/AssetPermissions.ts#L324",children:"api/entities/Identity/AssetPermissions.ts:324"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"get",children:"get"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"get"}),"(): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/AssetWithGroup/",children:(0,n.jsx)(s.code,{children:"AssetWithGroup"})}),"[]>"]}),"\n",(0,n.jsx)(s.p,{children:"Retrieve all the Assets over which this Identity has permissions, with the corresponding Permission Group"}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/AssetWithGroup/",children:(0,n.jsx)(s.code,{children:"AssetWithGroup"})}),"[]>"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Identity/AssetPermissions.ts#L104",children:"api/entities/Identity/AssetPermissions.ts:104"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getgroup",children:"getGroup"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"getGroup"}),"(",(0,n.jsx)(s.code,{children:"\xabdestructured\xbb"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/",children:(0,n.jsx)(s.code,{children:"CustomPermissionGroup"})})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/",children:(0,n.jsx)(s.code,{children:"KnownPermissionGroup"})}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Retrieve this Identity's Permission Group for a specific Asset"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"\xabdestructured\xbb"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"Object"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["\u203a\xa0",(0,n.jsx)(s.code,{children:"asset"})]}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/BaseAsset/",children:(0,n.jsx)(s.code,{children:"BaseAsset"})})]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/",children:(0,n.jsx)(s.code,{children:"CustomPermissionGroup"})})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/",children:(0,n.jsx)(s.code,{children:"KnownPermissionGroup"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Identity/AssetPermissions.ts#L283",children:"api/entities/Identity/AssetPermissions.ts:283"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getoperationhistory",children:"getOperationHistory"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"getOperationHistory"}),"(",(0,n.jsx)(s.code,{children:"opts"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/ResultSet/",children:(0,n.jsx)(s.code,{children:"ResultSet"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Client/Types/EventIdentifier/",children:(0,n.jsx)(s.code,{children:"EventIdentifier"})}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Retrieve all Events triggered by Operations this Identity has performed on a specific Asset"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"Object"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts.asset"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Fungible/FungibleAsset",children:(0,n.jsx)(s.code,{children:"FungibleAsset"})})]}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts.eventId?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/enums/Types/EventIdEnum/",children:(0,n.jsx)(s.code,{children:"EventIdEnum"})})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"filters results by event"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts.moduleId?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/enums/Types/ModuleIdEnum/",children:(0,n.jsx)(s.code,{children:"ModuleIdEnum"})})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"filters results by module"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts.size?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"BigNumber"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"page size"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts.start?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"BigNumber"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"page offset"})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/ResultSet/",children:(0,n.jsx)(s.code,{children:"ResultSet"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Client/Types/EventIdentifier/",children:(0,n.jsx)(s.code,{children:"EventIdentifier"})}),">>"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"uses the middlewareV2"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"supports pagination"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Identity/AssetPermissions.ts#L375",children:"api/entities/Identity/AssetPermissions.ts:375"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"setgroup",children:"setGroup"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"setGroup"}),"(",(0,n.jsx)(s.code,{children:"args"}),", ",(0,n.jsx)(s.code,{children:"opts?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/",children:(0,n.jsx)(s.code,{children:"CustomPermissionGroup"})})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/",children:(0,n.jsx)(s.code,{children:"KnownPermissionGroup"})}),", ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/",children:(0,n.jsx)(s.code,{children:"CustomPermissionGroup"})})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/",children:(0,n.jsx)(s.code,{children:"KnownPermissionGroup"})}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Assign this Identity to a different Permission Group for a given Asset"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"args"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetPermissionGroupParams/",children:(0,n.jsx)(s.code,{children:"SetPermissionGroupParams"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,n.jsx)(s.code,{children:"ProcedureOpts"})})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/",children:(0,n.jsx)(s.code,{children:"CustomPermissionGroup"})})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/",children:(0,n.jsx)(s.code,{children:"KnownPermissionGroup"})}),", ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/",children:(0,n.jsx)(s.code,{children:"CustomPermissionGroup"})})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/",children:(0,n.jsx)(s.code,{children:"KnownPermissionGroup"})}),">>"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["this method is of type ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/",children:"ProcedureMethod"}),", which means you can call ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/#checkauthorization",children:"setGroup.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Identity/AssetPermissions.ts#L360",children:"api/entities/Identity/AssetPermissions.ts:360"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"waive",children:"waive"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"waive"}),"(",(0,n.jsx)(s.code,{children:"args"}),", ",(0,n.jsx)(s.code,{children:"opts?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"void"}),", ",(0,n.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Abdicate from the current Permissions Group for a given Asset. This means that this Identity will no longer have any permissions over said Asset"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"args"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/WaivePermissionsParams/",children:(0,n.jsx)(s.code,{children:"WaivePermissionsParams"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,n.jsx)(s.code,{children:"ProcedureOpts"})})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"void"}),", ",(0,n.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["this method is of type ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/",children:"ProcedureMethod"}),", which means you can call ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/#checkauthorization",children:"waive.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/49a0066c3/src/api/entities/Identity/AssetPermissions.ts#L350",children:"api/entities/Identity/AssetPermissions.ts:350"})})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>l});var t=i(96540);const n={},d=t.createContext(n);function r(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);