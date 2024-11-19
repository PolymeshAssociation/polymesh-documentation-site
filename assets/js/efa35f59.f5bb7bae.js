"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[70209],{30772:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"interfaces/API/Entities/Types/Permissions/Permissions","title":"Interface: Permissions","description":"api/entities/types.Permissions","source":"@site/sdk-docs_versioned_docs/version-26.2.x/interfaces/API/Entities/Types/Permissions/Permissions.md","sourceDirName":"interfaces/API/Entities/Types/Permissions","slug":"/interfaces/API/Entities/Types/Permissions/","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/Permissions/","draft":false,"unlisted":false,"tags":[],"version":"26.2.x","frontMatter":{"id":"Permissions","title":"Interface: Permissions","sidebar_label":"Permissions"},"sidebar":"defaultSidebar","previous":{"title":"PermissionedAccount","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/PermissionedAccount/"},"next":{"title":"Requirement","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/Requirement/"}}');var t=i(74848),o=i(28453);const r={id:"Permissions",title:"Interface: Permissions",sidebar_label:"Permissions"},c=void 0,d={},l=[{value:"Properties",id:"properties",level:2},{value:"assets",id:"assets",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"portfolios",id:"portfolios",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"transactionGroups",id:"transactiongroups",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"transactions",id:"transactions",level:3},{value:"Defined in",id:"defined-in-3",level:4}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Types/",children:"api/entities/types"}),".Permissions"]}),"\n",(0,t.jsxs)(s.p,{children:["Permissions a Secondary Key has over the Identity. A null value means the key has\nall permissions of that type (e.g. if ",(0,t.jsx)(s.code,{children:"assets"})," is null, the key has permissions over all\nof the Identity's Assets)"]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"assets",children:"assets"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"assets"}),": ",(0,t.jsx)(s.code,{children:"null"})," | ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/SectionPermissions/",children:(0,t.jsx)(s.code,{children:"SectionPermissions"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Fungible/FungibleAsset",children:(0,t.jsx)(s.code,{children:"FungibleAsset"})}),">"]}),"\n",(0,t.jsx)(s.p,{children:"Assets over which this key has permissions"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L646",children:"api/entities/types.ts:646"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"portfolios",children:"portfolios"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"portfolios"}),": ",(0,t.jsx)(s.code,{children:"null"})," | ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/SectionPermissions/",children:(0,t.jsx)(s.code,{children:"SectionPermissions"})}),"<",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/NumberedPortfolio/",children:(0,t.jsx)(s.code,{children:"NumberedPortfolio"})})," | ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/DefaultPortfolio/",children:(0,t.jsx)(s.code,{children:"DefaultPortfolio"})}),">"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L660",children:"api/entities/types.ts:660"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"transactiongroups",children:"transactionGroups"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"transactionGroups"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/enums/API/Procedures/Types/TxGroup/",children:(0,t.jsx)(s.code,{children:"TxGroup"})}),"[]"]}),"\n",(0,t.jsxs)(s.p,{children:["list of Transaction Groups this key can execute. Having permissions over a TxGroup\nmeans having permissions over every TxTag in said group. Partial group permissions are not\ncovered by this value. For a full picture of transaction permissions, see the ",(0,t.jsx)(s.code,{children:"transactions"})," property"]}),"\n",(0,t.jsx)(s.p,{children:"NOTE: If transactions is null, ignore this value"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L658",children:"api/entities/types.ts:658"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"transactions",children:"transactions"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"transactions"}),": ",(0,t.jsx)(s.code,{children:"null"})," | ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/TransactionPermissions/",children:(0,t.jsx)(s.code,{children:"TransactionPermissions"})})]}),"\n",(0,t.jsx)(s.p,{children:"Transactions this key can execute"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L650",children:"api/entities/types.ts:650"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>c});var n=i(96540);const t={},o=n.createContext(t);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);