"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[34399],{40099:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"interfaces/API/Procedures/Types/ChildKeyWithAuth/ChildKeyWithAuth","title":"Interface: ChildKeyWithAuth","description":"api/procedures/types.ChildKeyWithAuth","source":"@site/sdk-docs_versioned_docs/version-27.4.x/interfaces/API/Procedures/Types/ChildKeyWithAuth/ChildKeyWithAuth.md","sourceDirName":"interfaces/API/Procedures/Types/ChildKeyWithAuth","slug":"/interfaces/API/Procedures/Types/ChildKeyWithAuth/","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ChildKeyWithAuth/","draft":false,"unlisted":false,"tags":[],"version":"27.4.x","frontMatter":{"id":"ChildKeyWithAuth","title":"Interface: ChildKeyWithAuth","sidebar_label":"ChildKeyWithAuth"},"sidebar":"defaultSidebar","previous":{"title":"CddProviderRole","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CddProviderRole/"},"next":{"title":"ClaimCountRestrictionValue","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ClaimCountRestrictionValue/"}}');var s=i(74848),r=i(28453);const o={id:"ChildKeyWithAuth",title:"Interface: ChildKeyWithAuth",sidebar_label:"ChildKeyWithAuth"},d=void 0,h={},c=[{value:"Properties",id:"properties",level:2},{value:"authSignature",id:"authsignature",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"key",id:"key",level:3},{value:"Defined in",id:"defined-in-1",level:4}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/",children:"api/procedures/types"}),".ChildKeyWithAuth"]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"authsignature",children:"authSignature"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"authSignature"}),": `0x${string}`"]}),"\n",(0,s.jsxs)(t.p,{children:["Off-chain authorization signature generated by ",(0,s.jsx)(t.code,{children:"key"})," signing of the target Id authorization"]}),"\n",(0,s.jsxs)(t.p,{children:["Target Id authorization consists of the target Identity (which will become the parent of the child Identity),\noff chain authorization nonce of the target Identity and expiry date (same as ",(0,s.jsx)(t.code,{children:"expiresAt"})," value) until which the off chain authorization will be valid.\nSignature has to be generated encoding the target Id authorization value in the specified order."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Note"})})}),"\n",(0,s.jsxs)(t.p,{children:["Nonce value can be fetched using ",(0,s.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/#getoffchainauthorizationnonce",children:"Identity.getOffChainAuthorizationNonce"}),"\nSignature can also be generated using the method ",(0,s.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Client/AccountManagement/#generateoffchainauthsignature",children:"accountManagement.generateOffChainAuthSignature"})]}),"\n",(0,s.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1744",children:"api/procedures/types.ts:1744"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"key",children:"key"}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 ",(0,s.jsx)(t.strong,{children:"key"}),": ",(0,s.jsx)(t.code,{children:"string"})," | ",(0,s.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/",children:(0,s.jsx)(t.code,{children:"Account"})})]}),"\n",(0,s.jsx)(t.p,{children:"The key that will become the primary key of the new child Identity"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Note"})})}),"\n",(0,s.jsx)(t.p,{children:"This key should not be linked to any other Identity"}),"\n",(0,s.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1733",children:"api/procedures/types.ts:1733"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>d});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);