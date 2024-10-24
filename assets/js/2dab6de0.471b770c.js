"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[98185],{1148:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=t(74848),i=t(28453);const r={id:"RegisterIdentityParams",title:"Interface: RegisterIdentityParams",sidebar_label:"RegisterIdentityParams"},d=void 0,c={id:"interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams",title:"Interface: RegisterIdentityParams",description:"api/procedures/types.RegisterIdentityParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams.md",sourceDirName:"interfaces/API/Procedures/Types/RegisterIdentityParams",slug:"/interfaces/API/Procedures/Types/RegisterIdentityParams/",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/RegisterIdentityParams/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"RegisterIdentityParams",title:"Interface: RegisterIdentityParams",sidebar_label:"RegisterIdentityParams"},sidebar:"defaultSidebar",previous:{title:"RegisterCustomClaimTypeParams",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/RegisterCustomClaimTypeParams/"},next:{title:"RemoveAssetRequirementParams",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Procedures/Types/RemoveAssetRequirementParams/"}},o={},a=[{value:"Properties",id:"properties",level:2},{value:"createCdd",id:"createcdd",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"secondaryAccounts",id:"secondaryaccounts",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"targetAccount",id:"targetaccount",level:3},{value:"Defined in",id:"defined-in-3",level:4}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Procedures/Types/",children:"api/procedures/types"}),".RegisterIdentityParams"]}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"createcdd",children:"createCdd"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.code,{children:"Optional"})," ",(0,n.jsx)(s.strong,{children:"createCdd"}),": ",(0,n.jsx)(s.code,{children:"boolean"})]}),"\n",(0,n.jsx)(s.p,{children:"(optional) also issue a CDD claim for the created DID, completing the onboarding process for the Account"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L848",children:"api/procedures/types.ts:848"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"expiry",children:"expiry"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.code,{children:"Optional"})," ",(0,n.jsx)(s.strong,{children:"expiry"}),": ",(0,n.jsx)(s.code,{children:"Date"})]}),"\n",(0,n.jsxs)(s.p,{children:["(optional) when the generated CDD claim should expire, ",(0,n.jsx)(s.code,{children:"createCdd"})," must be true if specified"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L852",children:"api/procedures/types.ts:852"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"secondaryaccounts",children:"secondaryAccounts"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.code,{children:"Optional"})," ",(0,n.jsx)(s.strong,{children:"secondaryAccounts"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/Types/Utils/#modify",children:(0,n.jsx)(s.code,{children:"Modify"})}),"<",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Entities/Types/PermissionedAccount/",children:(0,n.jsx)(s.code,{children:"PermissionedAccount"})}),", { ",(0,n.jsx)(s.code,{children:"permissions"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Entities/Types/#permissionslike",children:(0,n.jsx)(s.code,{children:"PermissionsLike"})}),"  }>[]"]}),"\n",(0,n.jsx)(s.p,{children:"(optional) secondary accounts for the new Identity with their corresponding permissions."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsx)(s.p,{children:"Each Account will need to accept the generated authorizations before being linked to the Identity"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L844",children:"api/procedures/types.ts:844"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"targetaccount",children:"targetAccount"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"targetAccount"}),": ",(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Account/",children:(0,n.jsx)(s.code,{children:"Account"})})]}),"\n",(0,n.jsx)(s.p,{children:"The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/procedures/types.ts#L839",children:"api/procedures/types.ts:839"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>c});var n=t(96540);const i={},r=n.createContext(i);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);