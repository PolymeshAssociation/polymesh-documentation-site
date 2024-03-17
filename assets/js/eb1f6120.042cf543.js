"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[2114],{50964:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=n(74848),o=n(28453);const t={id:"Permissions",title:"Interface: Permissions",sidebar_label:"Permissions"},r=void 0,c={id:"interfaces/Types/Permissions/Permissions",title:"Interface: Permissions",description:"types.Permissions",source:"@site/sdk-docs_versioned_docs/version-23.0.x/interfaces/Types/Permissions/Permissions.md",sourceDirName:"interfaces/Types/Permissions",slug:"/interfaces/Types/Permissions/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/Permissions/",draft:!1,unlisted:!1,tags:[],version:"23.0.x",frontMatter:{id:"Permissions",title:"Interface: Permissions",sidebar_label:"Permissions"},sidebar:"defaultSidebar",previous:{title:"PermissionedAccount",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PermissionedAccount/"},next:{title:"PlainTransactionArgument",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/Types/PlainTransactionArgument/"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"assets",id:"assets",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"portfolios",id:"portfolios",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"transactionGroups",id:"transactiongroups",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"transactions",id:"transactions",level:3},{value:"Defined in",id:"defined-in-3",level:4}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/Types/",children:"types"}),".Permissions"]}),"\n",(0,i.jsxs)(s.p,{children:["Permissions a Secondary Key has over the Identity. A null value means the key has\nall permissions of that type (e.g. if ",(0,i.jsx)(s.code,{children:"assets"})," is null, the key has permissions over all\nof the Identity's Assets)"]}),"\n",(0,i.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(s.h3,{id:"assets",children:"assets"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"assets"}),": ",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/SectionPermissions/",children:(0,i.jsx)(s.code,{children:"SectionPermissions"})})," <",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Fungible/FungibleAsset",children:(0,i.jsx)(s.code,{children:"FungibleAsset"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Assets over which this key has permissions"}),"\n",(0,i.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1019",children:"types/index.ts:1019"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"portfolios",children:"portfolios"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"portfolios"}),": ",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/SectionPermissions/",children:(0,i.jsx)(s.code,{children:"SectionPermissions"})})," <",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/NumberedPortfolio/",children:(0,i.jsx)(s.code,{children:"NumberedPortfolio"})})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/DefaultPortfolio/",children:(0,i.jsx)(s.code,{children:"DefaultPortfolio"})}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1033",children:"types/index.ts:1033"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"transactiongroups",children:"transactionGroups"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"transactionGroups"}),": ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/enums/Types/TxGroup/",children:(0,i.jsx)(s.code,{children:"TxGroup"})}),"[]"]}),"\n",(0,i.jsxs)(s.p,{children:["list of Transaction Groups this key can execute. Having permissions over a TxGroup\nmeans having permissions over every TxTag in said group. Partial group permissions are not\ncovered by this value. For a full picture of transaction permissions, see the ",(0,i.jsx)(s.code,{children:"transactions"})," property"]}),"\n",(0,i.jsx)(s.p,{children:"NOTE: If transactions is null, ignore this value"}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1031",children:"types/index.ts:1031"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"transactions",children:"transactions"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"transactions"}),": ",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/TransactionPermissions/",children:(0,i.jsx)(s.code,{children:"TransactionPermissions"})})]}),"\n",(0,i.jsx)(s.p,{children:"Transactions this key can execute"}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1023",children:"types/index.ts:1023"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var i=n(96540);const o={},t=i.createContext(o);function r(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);