"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[79475],{11398:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var t=i(74848),n=i(28453);const r={id:"ClaimCount",title:"Class: ClaimCount",sidebar_label:"ClaimCount"},o=void 0,d={id:"classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/ClaimCount",title:"Class: ClaimCount",description:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ClaimCount",source:"@site/sdk-docs/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/ClaimCount.md",sourceDirName:"classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount",slug:"/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ClaimCount",title:"Class: ClaimCount",sidebar_label:"ClaimCount"},sidebar:"defaultSidebar",previous:{title:"TransferRestrictions",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/"},next:{title:"ClaimPercentage",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimPercentage/"}},c={},a=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"addRestriction",id:"addrestriction",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"disableStat",id:"disablestat",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"enableStat",id:"enablestat",level:3},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"get",id:"get",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getStat",id:"getstat",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"removeRestrictions",id:"removerestrictions",level:3},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"setRestrictions",id:"setrestrictions",level:3},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount"}),".ClaimCount"]}),"\n",(0,t.jsx)(s.p,{children:"Handles all Claim Count Transfer Restriction related functionality"}),"\n",(0,t.jsx)(s.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:(0,t.jsx)(s.code,{children:"TransferRestrictionBase"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/enums/API/Procedures/Types/TransferRestrictionType/#claimcount",children:(0,t.jsx)(s.code,{children:"ClaimCount"})}),">"]}),"\n",(0,t.jsxs)(s.p,{children:["\u21b3 ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"ClaimCount"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"addrestriction",children:"addRestriction"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"addRestriction"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,t.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"Omit"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Procedures/Types/#addclaimcounttransferrestrictionparams",children:(0,t.jsx)(s.code,{children:"AddClaimCountTransferRestrictionParams"})}),", ",(0,t.jsx)(s.code,{children:'"type"'}),">, ",(0,t.jsx)(s.code,{children:"BigNumber"}),", ",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Add a ClaimCount Transfer Restriction to this Asset. This limits to total number of individual\ninvestors that may hold the Asset scoped by some Claim. This can limit the number of holders that\nare non accredited, or ensure all holders are of a certain nationality"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Throws"})})}),"\n",(0,t.jsxs)(s.p,{children:["if the appropriate count statistic (matching ClaimType and issuer) is not enabled for the Asset. ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/#enablestat",children:"enableStat"})," should be called with appropriate arguments before this method"]}),"\n",(0,t.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#addrestriction",children:"addRestriction"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L32",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:32"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"disablestat",children:"disableStat"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"disableStat"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,t.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"Omit"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Procedures/Types/#removescopedcountparams",children:(0,t.jsx)(s.code,{children:"RemoveScopedCountParams"})}),", ",(0,t.jsx)(s.code,{children:'"type"'}),">, ",(0,t.jsx)(s.code,{children:"void"}),", ",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Disables a claim count statistic for the Asset. Since statistics introduce slight overhead to each transaction\ninvolving the Asset, disabling unused stats will reduce gas fees for investors"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Throws"})})}),"\n",(0,t.jsx)(s.p,{children:"if the stat is being used by a restriction or is not set"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#disablestat",children:"disableStat"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L78",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:78"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"enablestat",children:"enableStat"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"enableStat"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,t.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"Omit"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Procedures/Types/#addclaimcountstatparams",children:(0,t.jsx)(s.code,{children:"AddClaimCountStatParams"})}),", ",(0,t.jsx)(s.code,{children:'"type"'}),">, ",(0,t.jsx)(s.code,{children:"void"}),", ",(0,t.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Enables an investor count statistic for the Asset to be scoped by a claim, which is required before creating restrictions"}),"\n",(0,t.jsxs)(s.p,{children:["The counter is only updated automatically with each transfer of tokens after the stat has been enabled.\nAs such the initial values for the stat should be passed in.\nFor ",(0,t.jsx)(s.code,{children:"Affiliate"})," and ",(0,t.jsx)(s.code,{children:"Accredited"})," scoped stats the both the number of investors who have the Claim and who do not have the claim\nshould be given. For ",(0,t.jsx)(s.code,{children:"Jurisdiction"})," scoped stats the amount of holders for each CountryCode need to be given."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"Currently there is a potential race condition if passing in counts values when the Asset is being traded.\nIt is recommended to call this method during the initial configuration of the Asset, before people are trading it.\nOtherwise the Asset should be frozen, or the stat checked after being set to ensure the correct value is used. Future\nversions of the chain may expose a new extrinsic to avoid this issue"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-2",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#enablestat",children:"enableStat"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L70",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:70"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"get",children:"get"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"get"}),": () => ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,t.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Entities/Types/ClaimCountTransferRestriction/",children:(0,t.jsx)(s.code,{children:"ClaimCountTransferRestriction"})}),">>"]}),"\n",(0,t.jsx)(s.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 (): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,t.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Entities/Types/ClaimCountTransferRestriction/",children:(0,t.jsx)(s.code,{children:"ClaimCountTransferRestriction"})}),">>"]}),"\n",(0,t.jsx)(s.p,{children:"Retrieve all active Claim Count Transfer Restrictions"}),"\n",(0,t.jsx)(s.h5,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,t.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Entities/Types/ClaimCountTransferRestriction/",children:(0,t.jsx)(s.code,{children:"ClaimCountTransferRestriction"})}),">>"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsxs)(s.p,{children:["there is a maximum number of restrictions allowed across all types.\nThe ",(0,t.jsx)(s.code,{children:"availableSlots"})," property of the result represents how many more restrictions can be added\nbefore reaching that limit"]}),"\n",(0,t.jsx)(s.h4,{id:"overrides-3",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#get",children:"get"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L87",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:87"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"getstat",children:"getStat"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"getStat"}),": () => ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Entities/Types/#activestats",children:(0,t.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"type-declaration-1",children:"Type declaration"}),"\n",(0,t.jsxs)(s.p,{children:["\u25b8 (): ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Entities/Types/#activestats",children:(0,t.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Retrieve current Claim Count Transfer Restriction investor balance statistic for the Asset"}),"\n",(0,t.jsx)(s.h5,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Entities/Types/#activestats",children:(0,t.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"overrides-4",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#getstat",children:"getStat"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L93",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:93"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"removerestrictions",children:"removeRestrictions"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"removeRestrictions"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:(0,t.jsx)(s.code,{children:"NoArgsProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),", ",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Removes all Claim Count Transfer Restrictions from this Asset"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-5",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#removerestrictions",children:"removeRestrictions"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L55",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:55"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"setrestrictions",children:"setRestrictions"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"setRestrictions"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,t.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,t.jsx)(s.code,{children:"Omit"}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/SetClaimCountTransferRestrictionsParams/",children:(0,t.jsx)(s.code,{children:"SetClaimCountTransferRestrictionsParams"})}),", ",(0,t.jsx)(s.code,{children:'"type"'}),">, ",(0,t.jsx)(s.code,{children:"BigNumber"}),", ",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Sets all Claim Count Transfer Restrictions on this Asset"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"this method sets exempted Identities for restrictions as well. If an Identity is currently exempted from a Claim Count Transfer Restriction\nbut not passed into this call then it will be removed"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,t.jsx)(s.h4,{id:"overrides-6",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#setrestrictions",children:"setRestrictions"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L45",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:45"})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>d});var t=i(96540);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);