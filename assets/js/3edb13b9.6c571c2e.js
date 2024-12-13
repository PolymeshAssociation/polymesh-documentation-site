"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[74878],{16661:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"classes/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/Percentage","title":"Class: Percentage","description":"api/entities/Asset/Fungible/TransferRestrictions/Percentage.Percentage","source":"@site/sdk-docs_versioned_docs/version-26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/Percentage.md","sourceDirName":"classes/API/Entities/Asset/Fungible/TransferRestrictions/Percentage","slug":"/classes/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/","permalink":"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/","draft":false,"unlisted":false,"tags":[],"version":"26.2.x","frontMatter":{"id":"Percentage","title":"Class: Percentage","sidebar_label":"Percentage"},"sidebar":"defaultSidebar","previous":{"title":"Count","permalink":"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/Count/"},"next":{"title":"TransferRestrictionBase","permalink":"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/"}}');var n=i(74848),r=i(28453);const c={id:"Percentage",title:"Class: Percentage",sidebar_label:"Percentage"},d=void 0,o={},a=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"addRestriction",id:"addrestriction",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"disableStat",id:"disablestat",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"enableStat",id:"enablestat",level:3},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"get",id:"get",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getStat",id:"getstat",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"removeRestrictions",id:"removerestrictions",level:3},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"setRestrictions",id:"setrestrictions",level:3},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/",children:"api/entities/Asset/Fungible/TransferRestrictions/Percentage"}),".Percentage"]}),"\n",(0,n.jsx)(s.p,{children:"Handles all Percentage Transfer Restriction related functionality"}),"\n",(0,n.jsx)(s.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:(0,n.jsx)(s.code,{children:"TransferRestrictionBase"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/enums/API/Procedures/Types/TransferRestrictionType/#percentage",children:(0,n.jsx)(s.code,{children:"Percentage"})}),">"]}),"\n",(0,n.jsxs)(s.p,{children:["\u21b3 ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Percentage"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"addrestriction",children:"addRestriction"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"addRestriction"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,n.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,n.jsx)(s.code,{children:"Omit"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Procedures/Types/#addpercentagetransferrestrictionparams",children:(0,n.jsx)(s.code,{children:"AddPercentageTransferRestrictionParams"})}),", ",(0,n.jsx)(s.code,{children:'"type"'}),">, ",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Add a Percentage Transfer Restriction to this Asset. This limits the total percentage of the supply\na single investor can acquire without an exemption"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Throws"})})}),"\n",(0,n.jsxs)(s.p,{children:["if the Balance statistic is not enabled for this Asset. ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/#enablestat",children:"enableStat"})," should be called before this method"]}),"\n",(0,n.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#addrestriction",children:"addRestriction"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L29",children:"api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:29"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"disablestat",children:"disableStat"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"disableStat"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:(0,n.jsx)(s.code,{children:"NoArgsProcedureMethod"})}),"<",(0,n.jsx)(s.code,{children:"void"}),", ",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Disables the investor balance statistic for the Asset. Since statistics introduce slight overhead to each transaction\ninvolving the Asset, disabling unused stats will reduce gas fees for investors when they transact with the Asset"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Throws"})})}),"\n",(0,n.jsx)(s.p,{children:"if the stat is being used by a restriction or is not set"}),"\n",(0,n.jsx)(s.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#disablestat",children:"disableStat"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L66",children:"api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:66"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"enablestat",children:"enableStat"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"enableStat"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:(0,n.jsx)(s.code,{children:"NoArgsProcedureMethod"})}),"<",(0,n.jsx)(s.code,{children:"void"}),", ",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Enables investor balance statistic for the Asset, which is required before creating restrictions\nthat limit the total ownership of the Assets' supply"}),"\n",(0,n.jsx)(s.h4,{id:"overrides-2",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#enablestat",children:"enableStat"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L58",children:"api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:58"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"get",children:"get"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"get"}),": () => ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,n.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/PercentageTransferRestriction/",children:(0,n.jsx)(s.code,{children:"PercentageTransferRestriction"})}),">>"]}),"\n",(0,n.jsx)(s.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 (): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,n.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/PercentageTransferRestriction/",children:(0,n.jsx)(s.code,{children:"PercentageTransferRestriction"})}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Retrieve all active Percentage Transfer Restrictions"}),"\n",(0,n.jsx)(s.h5,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,n.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/PercentageTransferRestriction/",children:(0,n.jsx)(s.code,{children:"PercentageTransferRestriction"})}),">>"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["there is a maximum number of restrictions allowed across all types.\nThe ",(0,n.jsx)(s.code,{children:"availableSlots"})," property of the result represents how many more restrictions can be added\nbefore reaching that limit"]}),"\n",(0,n.jsx)(s.h4,{id:"overrides-3",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#get",children:"get"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L75",children:"api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:75"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getstat",children:"getStat"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"getStat"}),": () => ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Entities/Types/#activestats",children:(0,n.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"type-declaration-1",children:"Type declaration"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 (): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Entities/Types/#activestats",children:(0,n.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Retrieve current Percentage Transfer Restriction investor balance statistic for the Asset"}),"\n",(0,n.jsx)(s.h5,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Entities/Types/#activestats",children:(0,n.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"overrides-4",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#getstat",children:"getStat"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L81",children:"api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:81"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"removerestrictions",children:"removeRestrictions"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"removeRestrictions"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:(0,n.jsx)(s.code,{children:"NoArgsProcedureMethod"})}),"<",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Removes all Percentage Transfer Restrictions from this Asset"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,n.jsx)(s.h4,{id:"overrides-5",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#removerestrictions",children:"removeRestrictions"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L52",children:"api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:52"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"setrestrictions",children:"setRestrictions"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"setRestrictions"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,n.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,n.jsx)(s.code,{children:"Omit"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Procedures/Types/SetPercentageTransferRestrictionsParams/",children:(0,n.jsx)(s.code,{children:"SetPercentageTransferRestrictionsParams"})}),", ",(0,n.jsx)(s.code,{children:'"type"'}),">, ",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Sets all Percentage Transfer Restrictions on this Asset"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"this method sets exempted Identities for restrictions as well. If an Identity is currently exempted from a Percentage Transfer Restriction\nbut not passed into this call then it will be removed"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,n.jsx)(s.h4,{id:"overrides-6",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#setrestrictions",children:"setRestrictions"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts#L42",children:"api/entities/Asset/Fungible/TransferRestrictions/Percentage.ts:42"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>d});var t=i(96540);const n={},r=t.createContext(n);function c(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);