"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[19619],{17085:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>o});var t=i(74848),r=i(28453);const n={id:"ClaimPercentage",title:"Class: ClaimPercentage",sidebar_label:"ClaimPercentage"},c=void 0,a={id:"classes/API/Entities/Asset/TransferRestrictions/ClaimPercentage/ClaimPercentage",title:"Class: ClaimPercentage",description:"api/entities/Asset/TransferRestrictions/ClaimPercentage.ClaimPercentage",source:"@site/sdk-docs_versioned_docs/version-22.1.x/classes/API/Entities/Asset/TransferRestrictions/ClaimPercentage/ClaimPercentage.md",sourceDirName:"classes/API/Entities/Asset/TransferRestrictions/ClaimPercentage",slug:"/classes/API/Entities/Asset/TransferRestrictions/ClaimPercentage/",permalink:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/ClaimPercentage/",draft:!1,unlisted:!1,tags:[],version:"22.1.x",frontMatter:{id:"ClaimPercentage",title:"Class: ClaimPercentage",sidebar_label:"ClaimPercentage"},sidebar:"defaultSidebar",previous:{title:"ClaimCount",permalink:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/ClaimCount/"},next:{title:"Count",permalink:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/Count/"}},d={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"addRestriction",id:"addrestriction",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"disableStat",id:"disablestat",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"enableStat",id:"enablestat",level:3},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"get",id:"get",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"removeRestrictions",id:"removerestrictions",level:3},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"setRestrictions",id:"setrestrictions",level:3},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-5",level:4}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/modules/API/Entities/Asset/TransferRestrictions/ClaimPercentage/",children:"api/entities/Asset/TransferRestrictions/ClaimPercentage"}),".ClaimPercentage"]}),"\n",(0,t.jsx)(s.p,{children:"Handles all Claim Percentage Transfer Restriction related functionality"}),"\n",(0,t.jsx)(s.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/",children:(0,t.jsx)(s.code,{children:"TransferRestrictionBase"})})," <",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/enums/Types/TransferRestrictionType/#claimpercentage",children:(0,t.jsx)(s.code,{children:"ClaimPercentage"})}),">"]}),"\n",(0,t.jsxs)(s.p,{children:["\u21b3 ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"ClaimPercentage"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"addrestriction",children:"addRestriction"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"addRestriction"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/Types/ProcedureMethod/",children:(0,t.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"Omit"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/modules/API/Procedures/Types/#addclaimpercentagetransferrestrictionparams",children:(0,t.jsx)(s.code,{children:"AddClaimPercentageTransferRestrictionParams"})}),", ",(0,t.jsx)(s.code,{children:'"type"'}),">, ",(0,t.jsx)(s.code,{children:"BigNumber"}),", ",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Add a Percentage Transfer Restriction to this Asset. This can be used to limit the total amount of supply\ninvestors who share a ClaimType may hold. For example a restriction can be made so Canadian investors must hold\nat least 50% of the supply."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Throws"})})}),"\n",(0,t.jsxs)(s.p,{children:["if the appropriately scoped Balance statistic (by ClaimType and issuer) is not enabled for this Asset. ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/ClaimPercentage/#enablestat",children:"enableStat"})," with appropriate arguments should be called before this method"]}),"\n",(0,t.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/#addrestriction",children:"addRestriction"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/TransferRestrictions/ClaimPercentage.ts#L31",children:"api/entities/Asset/TransferRestrictions/ClaimPercentage.ts:31"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"disablestat",children:"disableStat"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"disableStat"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/Types/ProcedureMethod/",children:(0,t.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"Omit"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/modules/API/Procedures/Types/#removescopedbalanceparams",children:(0,t.jsx)(s.code,{children:"RemoveScopedBalanceParams"})}),", ",(0,t.jsx)(s.code,{children:'"type"'}),">, ",(0,t.jsx)(s.code,{children:"void"}),", ",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Disables an investor balance statistic for the Asset. Since statistics introduce slight overhead to each transaction\ninvolving the Asset, disabling unused stats will reduce gas fees for investors"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Throws"})})}),"\n",(0,t.jsx)(s.p,{children:"if the stat is being used by a restriction or is not set"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/#disablestat",children:"disableStat"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/TransferRestrictions/ClaimPercentage.ts#L68",children:"api/entities/Asset/TransferRestrictions/ClaimPercentage.ts:68"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"enablestat",children:"enableStat"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"enableStat"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/Types/ProcedureMethod/",children:(0,t.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"Omit"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/modules/API/Procedures/Types/#addclaimpercentagestatparams",children:(0,t.jsx)(s.code,{children:"AddClaimPercentageStatParams"})}),", ",(0,t.jsx)(s.code,{children:'"type"'}),">, ",(0,t.jsx)(s.code,{children:"void"}),", ",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Enables investor balance statistic for the Asset, which is required before creating restrictions\nthat limit the total ownership the Asset's supply"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-2",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/#enablestat",children:"enableStat"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/TransferRestrictions/ClaimPercentage.ts#L60",children:"api/entities/Asset/TransferRestrictions/ClaimPercentage.ts:60"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"get",children:"get"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"get"}),": () => ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/Types/ActiveTransferRestrictions/",children:(0,t.jsx)(s.code,{children:"ActiveTransferRestrictions"})})," <",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/Types/ClaimPercentageTransferRestriction/",children:(0,t.jsx)(s.code,{children:"ClaimPercentageTransferRestriction"})}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 (): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/Types/ActiveTransferRestrictions/",children:(0,t.jsx)(s.code,{children:"ActiveTransferRestrictions"})})," <",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/Types/ClaimPercentageTransferRestriction/",children:(0,t.jsx)(s.code,{children:"ClaimPercentageTransferRestriction"})}),">>"]}),"\n",(0,t.jsx)(s.p,{children:"Retrieve all active Claim Percentage Transfer Restrictions"}),"\n",(0,t.jsx)(s.h5,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/Types/ActiveTransferRestrictions/",children:(0,t.jsx)(s.code,{children:"ActiveTransferRestrictions"})})," <",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/Types/ClaimPercentageTransferRestriction/",children:(0,t.jsx)(s.code,{children:"ClaimPercentageTransferRestriction"})}),">>"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsxs)(s.p,{children:["there is a maximum number of restrictions allowed across all types.\nThe ",(0,t.jsx)(s.code,{children:"availableSlots"})," property of the result represents how many more restrictions can be added\nbefore reaching that limit"]}),"\n",(0,t.jsx)(s.h4,{id:"overrides-3",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/#get",children:"get"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/TransferRestrictions/ClaimPercentage.ts#L77",children:"api/entities/Asset/TransferRestrictions/ClaimPercentage.ts:77"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"removerestrictions",children:"removeRestrictions"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"removeRestrictions"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/Types/NoArgsProcedureMethod/",children:(0,t.jsx)(s.code,{children:"NoArgsProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),", ",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Removes all Claim Percentage Transfer Restrictions from this Asset"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-4",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/#removerestrictions",children:"removeRestrictions"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/TransferRestrictions/ClaimPercentage.ts#L54",children:"api/entities/Asset/TransferRestrictions/ClaimPercentage.ts:54"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"setrestrictions",children:"setRestrictions"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"setRestrictions"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/Types/ProcedureMethod/",children:(0,t.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"Omit"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/interfaces/API/Procedures/Types/SetClaimPercentageTransferRestrictionsParams/",children:(0,t.jsx)(s.code,{children:"SetClaimPercentageTransferRestrictionsParams"})}),", ",(0,t.jsx)(s.code,{children:'"type"'}),">, ",(0,t.jsx)(s.code,{children:"BigNumber"}),", ",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Sets all Claim Percentage Transfer Restrictions on this Asset"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"this method sets exempted Identities for restrictions as well. If an Identity is currently exempted from a Claim Percentage Transfer Restriction\nbut not passed into this call then it will be removed"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-5",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/22.1.x/classes/API/Entities/Asset/TransferRestrictions/TransferRestrictionBase/#setrestrictions",children:"setRestrictions"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2d3ac2aea/src/api/entities/Asset/TransferRestrictions/ClaimPercentage.ts#L44",children:"api/entities/Asset/TransferRestrictions/ClaimPercentage.ts:44"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>a});var t=i(96540);const r={},n=t.createContext(r);function c(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);