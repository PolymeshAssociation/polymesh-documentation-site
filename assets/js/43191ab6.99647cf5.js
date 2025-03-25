"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[84932],{81768:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"interfaces/API/Procedures/Types/SetPermissionGroupParams/SetPermissionGroupParams","title":"Interface: SetPermissionGroupParams","description":"api/procedures/types.SetPermissionGroupParams","source":"@site/sdk-docs_versioned_docs/version-27.4.x/interfaces/API/Procedures/Types/SetPermissionGroupParams/SetPermissionGroupParams.md","sourceDirName":"interfaces/API/Procedures/Types/SetPermissionGroupParams","slug":"/interfaces/API/Procedures/Types/SetPermissionGroupParams/","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetPermissionGroupParams/","draft":false,"unlisted":false,"tags":[],"version":"27.4.x","frontMatter":{"id":"SetPermissionGroupParams","title":"Interface: SetPermissionGroupParams","sidebar_label":"SetPermissionGroupParams"},"sidebar":"defaultSidebar","previous":{"title":"SetPercentageTransferRestrictionsParams","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetPercentageTransferRestrictionsParams/"},"next":{"title":"SetStakingControllerParams","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetStakingControllerParams/"}}');var o=r(74848),n=r(28453);const i={id:"SetPermissionGroupParams",title:"Interface: SetPermissionGroupParams",sidebar_label:"SetPermissionGroupParams"},a=void 0,d={},c=[{value:"Properties",id:"properties",level:2},{value:"group",id:"group",level:3},{value:"Defined in",id:"defined-in",level:4}];function p(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/",children:"api/procedures/types"}),".SetPermissionGroupParams"]}),"\n",(0,o.jsx)(s.p,{children:"This procedure can be called with:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"An Asset's existing Custom Permission Group. The Identity will be assigned as an Agent of that Group for that Asset"}),"\n",(0,o.jsx)(s.li,{children:"A Known Permission Group and an Asset. The Identity will be assigned as an Agent of that Group for that Asset"}),"\n",(0,o.jsx)(s.li,{children:"A set of Transaction Permissions and an Asset. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created for that Asset with those permissions, and\nthe Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used"}),"\n",(0,o.jsxs)(s.li,{children:["An array of ",(0,o.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/enums/API/Procedures/Types/TxGroup/",children:"Transaction Groups"})," that represent a set of permissions. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created with those permissions, and\nthe Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(s.h3,{id:"group",children:"group"}),"\n",(0,o.jsxs)(s.p,{children:["\u2022 ",(0,o.jsx)(s.strong,{children:"group"}),": ",(0,o.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/",children:(0,o.jsx)(s.code,{children:"CustomPermissionGroup"})})," | ",(0,o.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/",children:(0,o.jsx)(s.code,{children:"KnownPermissionGroup"})})," | ",(0,o.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/TransactionsParams/",children:(0,o.jsx)(s.code,{children:"TransactionsParams"})})," | ",(0,o.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/TxGroupParams/",children:(0,o.jsx)(s.code,{children:"TxGroupParams"})})]}),"\n",(0,o.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L1637",children:"api/procedures/types.ts:1637"})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>a});var t=r(96540);const o={},n=t.createContext(o);function i(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);