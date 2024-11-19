"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[33182],{48994:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/ClaimCount","title":"Class: ClaimCount","description":"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ClaimCount","source":"@site/sdk-docs_versioned_docs/version-25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/ClaimCount.md","sourceDirName":"classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount","slug":"/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/","permalink":"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/","draft":false,"unlisted":false,"tags":[],"version":"25.1.x","frontMatter":{"id":"ClaimCount","title":"Class: ClaimCount","sidebar_label":"ClaimCount"},"sidebar":"defaultSidebar","previous":{"title":"TransferRestrictions","permalink":"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/"},"next":{"title":"ClaimPercentage","permalink":"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimPercentage/"}}');var n=i(74848),r=i(28453);const o={id:"ClaimCount",title:"Class: ClaimCount",sidebar_label:"ClaimCount"},d=void 0,c={},a=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"addRestriction",id:"addrestriction",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"disableStat",id:"disablestat",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"enableStat",id:"enablestat",level:3},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"get",id:"get",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getStat",id:"getstat",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"removeRestrictions",id:"removerestrictions",level:3},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"setRestrictions",id:"setrestrictions",level:3},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount"}),".ClaimCount"]}),"\n",(0,n.jsx)(s.p,{children:"Handles all Claim Count Transfer Restriction related functionality"}),"\n",(0,n.jsx)(s.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:(0,n.jsx)(s.code,{children:"TransferRestrictionBase"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/enums/API/Procedures/Types/TransferRestrictionType/#claimcount",children:(0,n.jsx)(s.code,{children:"ClaimCount"})}),">"]}),"\n",(0,n.jsxs)(s.p,{children:["\u21b3 ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"ClaimCount"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"addrestriction",children:"addRestriction"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"addRestriction"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,n.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,n.jsx)(s.code,{children:"Omit"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Procedures/Types/#addclaimcounttransferrestrictionparams",children:(0,n.jsx)(s.code,{children:"AddClaimCountTransferRestrictionParams"})}),", ",(0,n.jsx)(s.code,{children:'"type"'}),">, ",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Add a ClaimCount Transfer Restriction to this Asset. This limits to total number of individual\ninvestors that may hold the Asset scoped by some Claim. This can limit the number of holders that\nare non accredited, or ensure all holders are of a certain nationality"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Throws"})})}),"\n",(0,n.jsxs)(s.p,{children:["if the appropriate count statistic (matching ClaimType and issuer) is not enabled for the Asset. ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/#enablestat",children:"enableStat"})," should be called with appropriate arguments before this method"]}),"\n",(0,n.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#addrestriction",children:"addRestriction"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L32",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:32"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"disablestat",children:"disableStat"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"disableStat"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,n.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,n.jsx)(s.code,{children:"Omit"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Procedures/Types/#removescopedcountparams",children:(0,n.jsx)(s.code,{children:"RemoveScopedCountParams"})}),", ",(0,n.jsx)(s.code,{children:'"type"'}),">, ",(0,n.jsx)(s.code,{children:"void"}),", ",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Disables a claim count statistic for the Asset. Since statistics introduce slight overhead to each transaction\ninvolving the Asset, disabling unused stats will reduce gas fees for investors"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Throws"})})}),"\n",(0,n.jsx)(s.p,{children:"if the stat is being used by a restriction or is not set"}),"\n",(0,n.jsx)(s.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#disablestat",children:"disableStat"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L78",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:78"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"enablestat",children:"enableStat"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"enableStat"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,n.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,n.jsx)(s.code,{children:"Omit"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Procedures/Types/#addclaimcountstatparams",children:(0,n.jsx)(s.code,{children:"AddClaimCountStatParams"})}),", ",(0,n.jsx)(s.code,{children:'"type"'}),">, ",(0,n.jsx)(s.code,{children:"void"}),", ",(0,n.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Enables an investor count statistic for the Asset to be scoped by a claim, which is required before creating restrictions"}),"\n",(0,n.jsxs)(s.p,{children:["The counter is only updated automatically with each transfer of tokens after the stat has been enabled.\nAs such the initial values for the stat should be passed in.\nFor ",(0,n.jsx)(s.code,{children:"Affiliate"})," and ",(0,n.jsx)(s.code,{children:"Accredited"})," scoped stats the both the number of investors who have the Claim and who do not have the claim\nshould be given. For ",(0,n.jsx)(s.code,{children:"Jurisdiction"})," scoped stats the amount of holders for each CountryCode need to be given."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"Currently there is a potential race condition if passing in counts values when the Asset is being traded.\nIt is recommended to call this method during the initial configuration of the Asset, before people are trading it.\nOtherwise the Asset should be frozen, or the stat checked after being set to ensure the correct value is used. Future\nversions of the chain may expose a new extrinsic to avoid this issue"}),"\n",(0,n.jsx)(s.h4,{id:"overrides-2",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#enablestat",children:"enableStat"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L70",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:70"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"get",children:"get"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"get"}),": () => ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,n.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Entities/Types/ClaimCountTransferRestriction/",children:(0,n.jsx)(s.code,{children:"ClaimCountTransferRestriction"})}),">>"]}),"\n",(0,n.jsx)(s.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 (): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,n.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Entities/Types/ClaimCountTransferRestriction/",children:(0,n.jsx)(s.code,{children:"ClaimCountTransferRestriction"})}),">>"]}),"\n",(0,n.jsx)(s.p,{children:"Retrieve all active Claim Count Transfer Restrictions"}),"\n",(0,n.jsx)(s.h5,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Entities/Types/ActiveTransferRestrictions/",children:(0,n.jsx)(s.code,{children:"ActiveTransferRestrictions"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Entities/Types/ClaimCountTransferRestriction/",children:(0,n.jsx)(s.code,{children:"ClaimCountTransferRestriction"})}),">>"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["there is a maximum number of restrictions allowed across all types.\nThe ",(0,n.jsx)(s.code,{children:"availableSlots"})," property of the result represents how many more restrictions can be added\nbefore reaching that limit"]}),"\n",(0,n.jsx)(s.h4,{id:"overrides-3",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#get",children:"get"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L87",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:87"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getstat",children:"getStat"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"getStat"}),": () => ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Entities/Types/#activestats",children:(0,n.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"type-declaration-1",children:"Type declaration"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 (): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Entities/Types/#activestats",children:(0,n.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Retrieve current Claim Count Transfer Restriction investor balance statistic for the Asset"}),"\n",(0,n.jsx)(s.h5,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Entities/Types/#activestats",children:(0,n.jsx)(s.code,{children:"ActiveStats"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"overrides-4",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#getstat",children:"getStat"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L93",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:93"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"removerestrictions",children:"removeRestrictions"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"removeRestrictions"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:(0,n.jsx)(s.code,{children:"NoArgsProcedureMethod"})}),"<",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Removes all Claim Count Transfer Restrictions from this Asset"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,n.jsx)(s.h4,{id:"overrides-5",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#removerestrictions",children:"removeRestrictions"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L55",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:55"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"setrestrictions",children:"setRestrictions"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"setRestrictions"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/ProcedureMethod/",children:(0,n.jsx)(s.code,{children:"ProcedureMethod"})}),"<",(0,n.jsx)(s.code,{children:"Omit"}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/SetClaimCountTransferRestrictionsParams/",children:(0,n.jsx)(s.code,{children:"SetClaimCountTransferRestrictionsParams"})}),", ",(0,n.jsx)(s.code,{children:'"type"'}),">, ",(0,n.jsx)(s.code,{children:"BigNumber"}),", ",(0,n.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,n.jsx)(s.p,{children:"Sets all Claim Count Transfer Restrictions on this Asset"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"this method sets exempted Identities for restrictions as well. If an Identity is currently exempted from a Claim Count Transfer Restriction\nbut not passed into this call then it will be removed"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"the result is the total amount of restrictions after the procedure has run"}),"\n",(0,n.jsx)(s.h4,{id:"overrides-6",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",children:"TransferRestrictionBase"}),".",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#setrestrictions",children:"setRestrictions"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts#L45",children:"api/entities/Asset/Fungible/TransferRestrictions/ClaimCount.ts:45"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>d});var t=i(96540);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);