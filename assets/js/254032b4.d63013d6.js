"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[72777],{31337:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"interfaces/API/Entities/Types/CheckPermissionsResult/CheckPermissionsResult","title":"Interface: CheckPermissionsResult<Type>","description":"api/entities/types.CheckPermissionsResult","source":"@site/sdk-docs_versioned_docs/version-26.2.x/interfaces/API/Entities/Types/CheckPermissionsResult/CheckPermissionsResult.md","sourceDirName":"interfaces/API/Entities/Types/CheckPermissionsResult","slug":"/interfaces/API/Entities/Types/CheckPermissionsResult/","permalink":"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/CheckPermissionsResult/","draft":false,"unlisted":false,"tags":[],"version":"26.2.x","frontMatter":{"id":"CheckPermissionsResult","title":"Interface: CheckPermissionsResult<Type>","sidebar_label":"CheckPermissionsResult"},"sidebar":"defaultSidebar","previous":{"title":"CddClaim","permalink":"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/CddClaim/"},"next":{"title":"CheckRolesResult","permalink":"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/CheckRolesResult/"}}');var t=i(74848),r=i(28453);const d={id:"CheckPermissionsResult",title:"Interface: CheckPermissionsResult<Type>",sidebar_label:"CheckPermissionsResult"},l=void 0,c={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"message",id:"message",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"missingPermissions",id:"missingpermissions",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"result",id:"result",level:3},{value:"Defined in",id:"defined-in-2",level:4}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/API/Entities/Types/",children:"api/entities/types"}),".CheckPermissionsResult"]}),"\n",(0,t.jsxs)(s.p,{children:["Result of a ",(0,t.jsx)(s.code,{children:"checkPermissions"})," call. If ",(0,t.jsx)(s.code,{children:"Type"})," is ",(0,t.jsx)(s.code,{children:"Account"}),", represents whether the Account\nhas all the necessary secondary key Permissions. If ",(0,t.jsx)(s.code,{children:"Type"})," is ",(0,t.jsx)(s.code,{children:"Identity"}),", represents whether the\nIdentity has all the necessary external agent Permissions"]}),"\n",(0,t.jsx)(s.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"Type"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["extends ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/enums/API/Entities/Types/SignerType/",children:(0,t.jsx)(s.code,{children:"SignerType"})})]})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"message",children:"message"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"message"}),": ",(0,t.jsx)(s.code,{children:"string"})]}),"\n",(0,t.jsx)(s.p,{children:"optional message explaining the reason for failure in special cases"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/types.ts#L729",children:"api/entities/types.ts:729"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"missingpermissions",children:"missingPermissions"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"missingPermissions"}),": ",(0,t.jsx)(s.code,{children:"Type"})," extends ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/enums/API/Entities/Types/SignerType/#account",children:(0,t.jsx)(s.code,{children:"Account"})})," ? ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/interfaces/API/Entities/Types/SimplePermissions/",children:(0,t.jsx)(s.code,{children:"SimplePermissions"})})," : ",(0,t.jsx)(s.code,{children:"null"})," | ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.2.x/modules/Generated/Types/#txtag",children:(0,t.jsx)(s.code,{children:"TxTag"})}),"[]"]}),"\n",(0,t.jsxs)(s.p,{children:["required permissions which the signer ",(0,t.jsx)(s.em,{children:"DOESN'T"})," have. Only present if ",(0,t.jsx)(s.code,{children:"result"})," is ",(0,t.jsx)(s.code,{children:"false"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/types.ts#L721",children:"api/entities/types.ts:721"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"result",children:"result"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"result"}),": ",(0,t.jsx)(s.code,{children:"boolean"})]}),"\n",(0,t.jsx)(s.p,{children:"whether the signer complies with the required permissions or not"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/c8da9dfce/src/api/entities/types.ts#L725",children:"api/entities/types.ts:725"})})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>d,x:()=>l});var n=i(96540);const t={},r=n.createContext(t);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);