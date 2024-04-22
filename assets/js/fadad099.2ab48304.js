"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[65919],{19326:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=n(74848),i=n(28453);const r={id:"RegisterIdentityParams",title:"Interface: RegisterIdentityParams",sidebar_label:"RegisterIdentityParams"},d=void 0,c={id:"interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams",title:"Interface: RegisterIdentityParams",description:"api/procedures/types.RegisterIdentityParams",source:"@site/sdk-docs_versioned_docs/version-24.1.x/interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams.md",sourceDirName:"interfaces/API/Procedures/Types/RegisterIdentityParams",slug:"/interfaces/API/Procedures/Types/RegisterIdentityParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/RegisterIdentityParams/",draft:!1,unlisted:!1,tags:[],version:"24.1.x",frontMatter:{id:"RegisterIdentityParams",title:"Interface: RegisterIdentityParams",sidebar_label:"RegisterIdentityParams"},sidebar:"defaultSidebar",previous:{title:"RegisterCustomClaimTypeParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/RegisterCustomClaimTypeParams/"},next:{title:"RemoveAssetRequirementParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/RemoveAssetRequirementParams/"}},o={},a=[{value:"Properties",id:"properties",level:2},{value:"createCdd",id:"createcdd",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"secondaryAccounts",id:"secondaryaccounts",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"targetAccount",id:"targetaccount",level:3},{value:"Defined in",id:"defined-in-3",level:4}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/",children:"api/procedures/types"}),".RegisterIdentityParams"]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"createcdd",children:"createCdd"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"createCdd"}),": ",(0,t.jsx)(s.code,{children:"boolean"})]}),"\n",(0,t.jsx)(s.p,{children:"(optional) also issue a CDD claim for the created DID, completing the onboarding process for the Account"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L453",children:"api/procedures/types.ts:453"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"expiry",children:"expiry"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"expiry"}),": ",(0,t.jsx)(s.code,{children:"Date"})]}),"\n",(0,t.jsxs)(s.p,{children:["(optional) when the generated CDD claim should expire, ",(0,t.jsx)(s.code,{children:"createCdd"})," must be true if specified"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L457",children:"api/procedures/types.ts:457"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"secondaryaccounts",children:"secondaryAccounts"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"secondaryAccounts"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/Types/Utils/#modify",children:(0,t.jsx)(s.code,{children:"Modify"})})," <",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PermissionedAccount/",children:(0,t.jsx)(s.code,{children:"PermissionedAccount"})}),", { ",(0,t.jsx)(s.code,{children:"permissions"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/Types/#permissionslike",children:(0,t.jsx)(s.code,{children:"PermissionsLike"})})," }>[]"]}),"\n",(0,t.jsx)(s.p,{children:"(optional) secondary accounts for the new Identity with their corresponding permissions."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"Each Account will need to accept the generated authorizations before being linked to the Identity"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L449",children:"api/procedures/types.ts:449"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"targetaccount",children:"targetAccount"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"targetAccount"}),": ",(0,t.jsx)(s.code,{children:"string"})," | ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/",children:(0,t.jsx)(s.code,{children:"Account"})})]}),"\n",(0,t.jsx)(s.p,{children:"The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/968f8d70c/src/api/procedures/types.ts#L444",children:"api/procedures/types.ts:444"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>c});var t=n(96540);const i={},r=t.createContext(i);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);