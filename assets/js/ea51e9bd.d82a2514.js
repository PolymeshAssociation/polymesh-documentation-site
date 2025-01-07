"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[35251],{77856:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase","title":"Class: TransferRestrictionBase<T>","description":"api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.TransferRestrictionBase","source":"@site/sdk-docs_versioned_docs/version-27.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase.md","sourceDirName":"classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase","slug":"/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/","permalink":"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/","draft":false,"unlisted":false,"tags":[],"version":"27.1.x","frontMatter":{"id":"TransferRestrictionBase","title":"Class: TransferRestrictionBase<T>","sidebar_label":"TransferRestrictionBase"},"sidebar":"autogeneratedSidebar","previous":{"title":"Percentage","permalink":"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/"},"next":{"title":"AssetHolders","permalink":"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/NonFungible/AssetHolders/"}}');var n=r(74848),i=r(28453);const d={id:"TransferRestrictionBase",title:"Class: TransferRestrictionBase<T>",sidebar_label:"TransferRestrictionBase"},c=void 0,o={},l=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"addRestriction",id:"addrestriction",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"disableStat",id:"disablestat",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"enableStat",id:"enablestat",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"get",id:"get",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getStat",id:"getstat",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"removeRestrictions",id:"removerestrictions",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"setRestrictions",id:"setrestrictions",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase"}),".TransferRestrictionBase"]}),"\n",(0,n.jsx)(s.p,{children:"Base class for managing Transfer Restrictions"}),"\n",(0,n.jsx)(s.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"T"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["extends ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/enums/API/Procedures/Types/TransferRestrictionType/",children:(0,n.jsx)(s.code,{children:"TransferRestrictionType"})})]})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Namespace"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/Fungible/FungibleAsset",children:(0,n.jsx)(s.code,{children:"FungibleAsset"})}),">"]}),"\n",(0,n.jsxs)(s.p,{children:["\u21b3 ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"TransferRestrictionBase"})})]}),"\n",(0,n.jsxs)(s.p,{children:["\u21b3\u21b3 ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/",children:(0,n.jsx)(s.code,{children:"ClaimCount"})})]}),"\n",(0,n.jsxs)(s.p,{children:["\u21b3\u21b3 ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimPercentage/",children:(0,n.jsx)(s.code,{children:"ClaimPercentage"})})]}),"\n",(0,n.jsxs)(s.p,{children:["\u21b3\u21b3 ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/Fungible/TransferRestrictions/Count/",children:(0,n.jsx)(s.code,{children:"Count"})})]}),"\n",(0,n.jsxs)(s.p,{children:["\u21b3\u21b3 ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/",children:(0,n.jsx)(s.code,{children:"Percentage"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"addrestriction",children:"addRestriction"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"addRestriction"}),"(",(0,n.jsx)(s.code,{children:"args"}),", ",(0,n.jsx)(s.code,{children:"opts?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Add a Transfer Restriction of the corresponding type to this Asset"}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"args"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#addrestrictionparams",children:(0,n.jsx)(s.code,{children:"AddRestrictionParams"})}),"<",(0,n.jsx)(s.code,{children:"T"}),">"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,n.jsx)(s.code,{children:"ProcedureOpts"})})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["this method is of type ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/",children:"ProcedureMethod"}),", which means you can call ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/#checkauthorization",children:"addRestriction.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L180",children:"api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:180"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"disablestat",children:"disableStat"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"disableStat"}),"(",(0,n.jsx)(s.code,{children:"args"}),", ",(0,n.jsx)(s.code,{children:"opts?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"void"}),", ",(0,n.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Removes an Asset statistic"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"args"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#removeassetstatparamsbase",children:(0,n.jsx)(s.code,{children:"RemoveAssetStatParamsBase"})}),"<",(0,n.jsx)(s.code,{children:"T"}),">"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,n.jsx)(s.code,{children:"ProcedureOpts"})})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"void"}),", ",(0,n.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Throws"})})}),"\n",(0,n.jsx)(s.p,{children:"if the statistic is being used or is not set"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["this method is of type ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/",children:"ProcedureMethod"}),", which means you can call ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/#checkauthorization",children:"disableStat.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L226",children:"api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:226"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"enablestat",children:"enableStat"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"enableStat"}),"(",(0,n.jsx)(s.code,{children:"args"}),", ",(0,n.jsx)(s.code,{children:"opts?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"void"}),", ",(0,n.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Enables statistic of the corresponding type for this Asset, which are required for restrictions to be created"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"args"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#setassetstatparams",children:(0,n.jsx)(s.code,{children:"SetAssetStatParams"})}),"<",(0,n.jsx)(s.code,{children:"T"}),">"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,n.jsx)(s.code,{children:"ProcedureOpts"})})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"void"}),", ",(0,n.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["this method is of type ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/",children:"ProcedureMethod"}),", which means you can call ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/#checkauthorization",children:"enableStat.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L214",children:"api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:214"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"get",children:"get"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"get"}),"(): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#gettransferrestrictionreturntype",children:(0,n.jsx)(s.code,{children:"GetTransferRestrictionReturnType"})}),"<",(0,n.jsx)(s.code,{children:"T"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Retrieve all active Transfer Restrictions of the corresponding type"}),"\n",(0,n.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#gettransferrestrictionreturntype",children:(0,n.jsx)(s.code,{children:"GetTransferRestrictionReturnType"})}),"<",(0,n.jsx)(s.code,{children:"T"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["there is a maximum number of restrictions allowed across all types.\nThe ",(0,n.jsx)(s.code,{children:"availableSlots"})," property of the result represents how many more restrictions can be added\nbefore reaching that limit"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L237",children:"api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:237"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getstat",children:"getStat"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"getStat"}),"(): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Entities/Types/#activestats",children:(0,n.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Retrieve all active Transfer Restrictions of the corresponding type"}),"\n",(0,n.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Entities/Types/#activestats",children:(0,n.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["there is a maximum number of restrictions allowed across all types.\nThe ",(0,n.jsx)(s.code,{children:"availableSlots"})," property of the result represents how many more restrictions can be added\nbefore reaching that limit"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L354",children:"api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:354"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"removerestrictions",children:"removeRestrictions"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"removeRestrictions"}),"(",(0,n.jsx)(s.code,{children:"opts?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Removes all Transfer Restrictions of the corresponding type from this Asset"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,n.jsx)(s.code,{children:"ProcedureOpts"})})})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["this method is of type ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:"NoArgsProcedureMethod"}),", which means you can call ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/NoArgsProcedureMethod/#checkauthorization",children:"removeRestrictions.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L204",children:"api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:204"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"setrestrictions",children:"setRestrictions"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"setRestrictions"}),"(",(0,n.jsx)(s.code,{children:"args"}),", ",(0,n.jsx)(s.code,{children:"opts?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Sets all Transfer Restrictions of the corresponding type on this Asset"}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"args"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#setrestrictionsparams",children:(0,n.jsx)(s.code,{children:"SetRestrictionsParams"})}),"<",(0,n.jsx)(s.code,{children:"T"}),">"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"opts?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,n.jsx)(s.code,{children:"ProcedureOpts"})})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">>"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["this method is of type ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/",children:"ProcedureMethod"}),", which means you can call ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/#checkauthorization",children:"setRestrictions.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts#L192",children:"api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.ts:192"})})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>c});var t=r(96540);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);