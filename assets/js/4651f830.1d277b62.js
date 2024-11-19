"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[41256],{43857:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"enums/API/Entities/Account/Types/AccountIdentityRelation/AccountIdentityRelation","title":"Enumeration: AccountIdentityRelation","description":"api/entities/Account/types.AccountIdentityRelation","source":"@site/sdk-docs_versioned_docs/version-26.2.x/enums/API/Entities/Account/Types/AccountIdentityRelation/AccountIdentityRelation.md","sourceDirName":"enums/API/Entities/Account/Types/AccountIdentityRelation","slug":"/enums/API/Entities/Account/Types/AccountIdentityRelation/","permalink":"/polymesh-documentation-site/sdk-docs/enums/API/Entities/Account/Types/AccountIdentityRelation/","draft":false,"unlisted":false,"tags":[],"version":"26.2.x","frontMatter":{"id":"AccountIdentityRelation","title":"Enumeration: AccountIdentityRelation","sidebar_label":"AccountIdentityRelation"},"sidebar":"defaultSidebar","previous":{"title":"InstructionStatusEnum","permalink":"/polymesh-documentation-site/sdk-docs/enums/API/Client/Types/InstructionStatusEnum/"},"next":{"title":"AccountKeyType","permalink":"/polymesh-documentation-site/sdk-docs/enums/API/Entities/Account/Types/AccountKeyType/"}}');var s=t(74848),c=t(28453);const o={id:"AccountIdentityRelation",title:"Enumeration: AccountIdentityRelation",sidebar_label:"AccountIdentityRelation"},d=void 0,r={},a=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"MultiSigSigner",id:"multisigsigner",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Primary",id:"primary",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Secondary",id:"secondary",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Unassigned",id:"unassigned",level:3},{value:"Defined in",id:"defined-in-3",level:4}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Account/Types/",children:"api/entities/Account/types"}),".AccountIdentityRelation"]}),"\n",(0,s.jsx)(n.p,{children:"Represents the how an Account is associated to an Identity"}),"\n",(0,s.jsx)(n.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,s.jsx)(n.h3,{id:"multisigsigner",children:"MultiSigSigner"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"MultiSigSigner"})," = ",(0,s.jsx)(n.code,{children:'"MultiSigSigner"'})]}),"\n",(0,s.jsx)(n.p,{children:"The Account is one of many signers for a MultiSig"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Account/types.ts#L61",children:"api/entities/Account/types.ts:61"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"primary",children:"Primary"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Primary"})," = ",(0,s.jsx)(n.code,{children:'"Primary"'})]}),"\n",(0,s.jsx)(n.p,{children:"The Account is the Identity's primary key (i.e. it has full permission)"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Account/types.ts#L53",children:"api/entities/Account/types.ts:53"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"secondary",children:"Secondary"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Secondary"})," = ",(0,s.jsx)(n.code,{children:'"Secondary"'})]}),"\n",(0,s.jsx)(n.p,{children:"The Account is a Secondary account. There are associated permissions that may limit what transactions it may authorize for the Identity"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Account/types.ts#L57",children:"api/entities/Account/types.ts:57"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"unassigned",children:"Unassigned"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"Unassigned"})," = ",(0,s.jsx)(n.code,{children:'"Unassigned"'})]}),"\n",(0,s.jsx)(n.p,{children:"The Account is not associated to any Identity"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/Account/types.ts#L49",children:"api/entities/Account/types.ts:49"})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(96540);const s={},c=i.createContext(s);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);