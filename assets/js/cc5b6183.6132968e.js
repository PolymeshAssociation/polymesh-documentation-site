"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[6976],{46167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"interfaces/API/Procedures/Types/AccountWithSignature/AccountWithSignature","title":"Interface: AccountWithSignature","description":"api/procedures/types.AccountWithSignature","source":"@site/sdk-docs_versioned_docs/version-27.1.x/interfaces/API/Procedures/Types/AccountWithSignature/AccountWithSignature.md","sourceDirName":"interfaces/API/Procedures/Types/AccountWithSignature","slug":"/interfaces/API/Procedures/Types/AccountWithSignature/","permalink":"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/AccountWithSignature/","draft":false,"unlisted":false,"tags":[],"version":"27.1.x","frontMatter":{"id":"AccountWithSignature","title":"Interface: AccountWithSignature","sidebar_label":"AccountWithSignature"},"sidebar":"autogeneratedSidebar","previous":{"title":"AcceptPrimaryKeyRotationParams","permalink":"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/AcceptPrimaryKeyRotationParams/"},"next":{"title":"AddAssetRequirementParams","permalink":"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Procedures/Types/AddAssetRequirementParams/"}}');var i=n(74848),r=n(28453);const c={id:"AccountWithSignature",title:"Interface: AccountWithSignature",sidebar_label:"AccountWithSignature"},o=void 0,d={},a=[{value:"Properties",id:"properties",level:2},{value:"authSignature",id:"authsignature",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"secondaryAccount",id:"secondaryaccount",level:3},{value:"Defined in",id:"defined-in-1",level:4}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Procedures/Types/",children:"api/procedures/types"}),".AccountWithSignature"]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"authsignature",children:"authSignature"}),"\n",(0,i.jsxs)(t.p,{children:["\u2022 ",(0,i.jsx)(t.strong,{children:"authSignature"}),": ",(0,i.jsx)(t.code,{children:"string"})]}),"\n",(0,i.jsxs)(t.p,{children:["Off-chain authorization signature generated by ",(0,i.jsx)(t.code,{children:"secondaryAccount"})," signing of the target Id authorization"]}),"\n",(0,i.jsxs)(t.p,{children:["Target Id authorization consists of the target Identity (to which the secondary account will be added),\noff chain authorization nonce of the target Identity and expiry date (same as ",(0,i.jsx)(t.code,{children:"expiresAt"})," value) until which the off chain authorization will be valid.\nSignature has to be generated encoding the target Id authorization value in the specified order."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Note"})})}),"\n",(0,i.jsxs)(t.p,{children:["Nonce value can be fetched using ",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Identity/#getoffchainauthorizationnonce",children:"Identity.getOffChainAuthorizationNonce"}),"\nSignature can also be generated using the method ",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Client/AccountManagement/#generateoffchainauthsignature",children:"accountManagement.generateOffChainAuthSignature"})]}),"\n",(0,i.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L623",children:"api/procedures/types.ts:623"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"secondaryaccount",children:"secondaryAccount"}),"\n",(0,i.jsxs)(t.p,{children:["\u2022 ",(0,i.jsx)(t.strong,{children:"secondaryAccount"}),": ",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/Types/Utils/#modify",children:(0,i.jsx)(t.code,{children:"Modify"})}),"<",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Entities/Types/PermissionedAccount/",children:(0,i.jsx)(t.code,{children:"PermissionedAccount"})}),", { ",(0,i.jsx)(t.code,{children:"account"}),": ",(0,i.jsx)(t.code,{children:"string"})," | ",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/classes/API/Entities/Account/",children:(0,i.jsx)(t.code,{children:"Account"})})," ; ",(0,i.jsx)(t.code,{children:"permissions"}),": ",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Entities/Types/#permissionslike",children:(0,i.jsx)(t.code,{children:"PermissionsLike"})}),"  }>"]}),"\n",(0,i.jsx)(t.p,{children:"The secondary Account along with its permissions to be added"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Note"})})}),"\n",(0,i.jsx)(t.p,{children:"This account should not be linked to any other Identity"}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L609",children:"api/procedures/types.ts:609"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);