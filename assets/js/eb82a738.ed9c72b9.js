"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[74661],{39486:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"classes/API/Entities/Asset/Fungible/TransferRestrictions/Count/Count","title":"Class: Count","description":"api/entities/Asset/Fungible/TransferRestrictions/Count.Count","source":"@site/sdk-docs_versioned_docs/version-26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/Count/Count.md","sourceDirName":"classes/API/Entities/Asset/Fungible/TransferRestrictions/Count","slug":"/classes/API/Entities/Asset/Fungible/TransferRestrictions/Count/","permalink":"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/Count/","draft":false,"unlisted":false,"tags":[],"version":"26.2.x","frontMatter":{"id":"Count","title":"Class: Count","sidebar_label":"Count"},"sidebar":"defaultSidebar","previous":{"title":"ClaimPercentage","permalink":"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimPercentage/"},"next":{"title":"Percentage","permalink":"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/"}}');var t=i(74848),r=i(28453);const o={id:"Count",title:"Class: Count",sidebar_label:"Count"},d=void 0,c={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"addRestriction",id:"addrestriction",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"disableStat",id:"disablestat",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"enableStat",id:"enablestat",level:3},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"get",id:"get",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getStat",id:"getstat",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"investorCount",id:"investorcount",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-5",level:4},{value:"removeRestrictions",id:"removerestrictions",level:3},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"setRestrictions",id:"setrestrictions",level:3},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-7",level:4}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Entities/Asset/Fungible/TransferRestrictions/Count/",children:"api/entities/Asset/Fungible/TransferRestrictions/Count"}),".Count"]}),"\n",(0,t.jsx)(s.p,{children:"Handles all Count Transfer Restriction related functionality"}),"\n",(0,t.jsx)(s.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:(0,t.jsx)(s.code,{children:"TransferRestrictionBase"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/enums/API/Procedures/Types/TransferRestrictionType/#count",children:(0,t.jsx)(s.code,{children:"Count"})}),">"]}),"\n",(0,t.jsxs)(s.p,{children:["\u21b3 ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Count"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"addrestriction",children:"addRestriction"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"addRestriction"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,t.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"Omit"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Procedures/Types/#addcounttransferrestrictionparams",children:(0,t.jsx)(s.code,{children:"AddCountTransferRestrictionParams"})}),", ",(0,t.jsx)(s.code,{children:'"type"'}),">, ",(0,t.jsx)(s.code,{children:"BigNumber"}),", ",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Add a Count Transfer Restriction to this Asset. This limits to total number of individual\ninvestors that may hold the Asset. In some jurisdictions once a threshold of investors is\npassed, different regulations may apply. Count Transfer Restriction can ensure such limits are not exceeded"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Throws"})})}),"\n",(0,t.jsxs)(s.p,{children:["if a count statistic is not enabled for the Asset. ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/Count/#enablestat",children:"Count.enableStat"})," should be called before this method"]}),"\n",(0,t.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#addrestriction",children:"addRestriction"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L39",children:"api/entities/Asset/Fungible/TransferRestrictions/Count.ts:39"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"disablestat",children:"disableStat"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"disableStat"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:(0,t.jsx)(s.code,{children:"NoArgsProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"void"}),", ",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Disables the investor count statistic for the Asset. Since statistics introduce slight overhead to each transaction\ninvolving the Asset, disabling unused stats will reduce gas fees for investors when they transact with the Asset"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Throws"})})}),"\n",(0,t.jsx)(s.p,{children:"if the stat is being used by a restriction or is not set"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#disablestat",children:"disableStat"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L83",children:"api/entities/Asset/Fungible/TransferRestrictions/Count.ts:83"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"enablestat",children:"enableStat"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"enableStat"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,t.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"Pick"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Procedures/Types/#addcountstatparams",children:(0,t.jsx)(s.code,{children:"AddCountStatParams"})}),", ",(0,t.jsx)(s.code,{children:'"count"'}),">, ",(0,t.jsx)(s.code,{children:"void"}),", ",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Enables an investor count statistic for the Asset, which is required before creating restrictions"}),"\n",(0,t.jsxs)(s.p,{children:["The counter is only updated automatically with each transfer of tokens after the stat has been enabled.\nAs such the initial value for the stat should be passed in, which can be fetched with ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/Count/#investorcount",children:"Count.investorCount"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"Currently there is a potential race condition if passing in counts values when the Asset is being traded.\nIt is recommended to call this method during the initial configuration of the Asset, before people are trading it.\nOtherwise the Asset should be frozen, or the stat checked after being set to ensure the correct value is used. Future\nversions of the chain may expose a new extrinsic to avoid this issue"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-2",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#enablestat",children:"enableStat"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L75",children:"api/entities/Asset/Fungible/TransferRestrictions/Count.ts:75"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"get",children:"get"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"get"}),": () => ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,t.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/CountTransferRestriction/",children:(0,t.jsx)(s.code,{children:"CountTransferRestriction"})}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 (): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,t.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/CountTransferRestriction/",children:(0,t.jsx)(s.code,{children:"CountTransferRestriction"})}),">>"]}),"\n",(0,t.jsx)(s.p,{children:"/**"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Retrieve all active Count Transfer Restrictions"}),"\n",(0,t.jsx)(s.li,{}),"\n",(0,t.jsx)(s.li,{}),"\n"]}),"\n",(0,t.jsx)(s.h5,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,t.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/CountTransferRestriction/",children:(0,t.jsx)(s.code,{children:"CountTransferRestriction"})}),">>"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"there is a maximum number of restrictions allowed across all types."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.code,{children:"availableSlots"})," property of the result represents how many more restrictions can be added"]}),"\n",(0,t.jsx)(s.li,{children:"before reaching that limit"}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"overrides-3",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#get",children:"get"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L94",children:"api/entities/Asset/Fungible/TransferRestrictions/Count.ts:94"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"getstat",children:"getStat"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"getStat"}),": () => ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Entities/Types/#activestats",children:(0,t.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"type-declaration-1",children:"Type declaration"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 (): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Entities/Types/#activestats",children:(0,t.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Retrieve current Count Transfer Restriction investor balance statistic for the Asset"}),"\n",(0,t.jsx)(s.h5,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Entities/Types/#activestats",children:(0,t.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"overrides-4",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#getstat",children:"getStat"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L109",children:"api/entities/Asset/Fungible/TransferRestrictions/Count.ts:109"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"investorcount",children:"investorCount"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"investorCount"}),": () => ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"type-declaration-2",children:"Type declaration"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 (): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Returns the count of individual holders of the Asset"}),"\n",(0,t.jsx)(s.h5,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsxs)(s.p,{children:["This value can be used to initialize ",(0,t.jsx)(s.code,{children:"enableStat"}),". If used for this purpose there is a potential race condition\nif Asset transfers happen between the time of check and time of use. Either pause Asset transfers, or check after stat\ncreation and try again if a race occurred. Future versions of the chain should introduce an extrinsic to avoid this issue"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L103",children:"api/entities/Asset/Fungible/TransferRestrictions/Count.ts:103"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"removerestrictions",children:"removeRestrictions"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"removeRestrictions"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:(0,t.jsx)(s.code,{children:"NoArgsProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),", ",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Removes all Count Transfer Restrictions from this Asset"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-5",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#removerestrictions",children:"removeRestrictions"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L62",children:"api/entities/Asset/Fungible/TransferRestrictions/Count.ts:62"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"setrestrictions",children:"setRestrictions"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"setRestrictions"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,t.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"Omit"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/",children:(0,t.jsx)(s.code,{children:"SetCountTransferRestrictionsParams"})}),", ",(0,t.jsx)(s.code,{children:'"type"'}),">, ",(0,t.jsx)(s.code,{children:"BigNumber"}),", ",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Sets all Count Transfer Restrictions on this Asset"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"this method sets exempted Identities for restrictions as well. If an Identity is currently exempted from a Count Transfer Restriction\nbut not passed into this call then it will be removed"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-6",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#setrestrictions",children:"setRestrictions"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Count.ts#L52",children:"api/entities/Asset/Fungible/TransferRestrictions/Count.ts:52"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>d});var n=i(96540);const t={},r=n.createContext(t);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);