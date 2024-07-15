"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[27865],{10863:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=n(74848),t=n(28453);const r={id:"InviteExternalAgentParams",title:"Interface: InviteExternalAgentParams",sidebar_label:"InviteExternalAgentParams"},o=void 0,d={id:"interfaces/API/Procedures/Types/InviteExternalAgentParams/InviteExternalAgentParams",title:"Interface: InviteExternalAgentParams",description:"api/procedures/types.InviteExternalAgentParams",source:"@site/sdk-docs_versioned_docs/version-23.2.x/interfaces/API/Procedures/Types/InviteExternalAgentParams/InviteExternalAgentParams.md",sourceDirName:"interfaces/API/Procedures/Types/InviteExternalAgentParams",slug:"/interfaces/API/Procedures/Types/InviteExternalAgentParams/",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Procedures/Types/InviteExternalAgentParams/",draft:!1,unlisted:!1,tags:[],version:"23.2.x",frontMatter:{id:"InviteExternalAgentParams",title:"Interface: InviteExternalAgentParams",sidebar_label:"InviteExternalAgentParams"},sidebar:"defaultSidebar",previous:{title:"InviteAccountParams",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Procedures/Types/InviteAccountParams/"},next:{title:"IssueTokensParams",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Procedures/Types/IssueTokensParams/"}},a={},c=[{value:"Properties",id:"properties",level:2},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"permissions",id:"permissions",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-2",level:4}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/API/Procedures/Types/",children:"api/procedures/types"}),".InviteExternalAgentParams"]}),"\n",(0,i.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(s.h3,{id:"expiry",children:"expiry"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.code,{children:"Optional"})," ",(0,i.jsx)(s.strong,{children:"expiry"}),": ",(0,i.jsx)(s.code,{children:"Date"})]}),"\n",(0,i.jsx)(s.p,{children:"date at which the authorization request for invitation expires (optional)"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsx)(s.p,{children:"if expiry date is not set, the invitation will never expire"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsxs)(s.p,{children:["due to chain limitations, the expiry will be ignored if the passed ",(0,i.jsx)(s.code,{children:"permissions"})," don't correspond to an existing Permission Group"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L921",children:"api/procedures/types.ts:921"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"permissions",children:"permissions"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"permissions"}),": ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/CustomPermissionGroup/",children:(0,i.jsx)(s.code,{children:"CustomPermissionGroup"})})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/KnownPermissionGroup/",children:(0,i.jsx)(s.code,{children:"KnownPermissionGroup"})})," | { ",(0,i.jsx)(s.code,{children:"transactions"}),": ",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/TransactionPermissions/",children:(0,i.jsx)(s.code,{children:"TransactionPermissions"})}),"  } | { ",(0,i.jsx)(s.code,{children:"transactionGroups"}),": ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/TxGroup/",children:(0,i.jsx)(s.code,{children:"TxGroup"})}),"[]  }"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L906",children:"api/procedures/types.ts:906"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"target",children:"target"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"target"}),": ",(0,i.jsx)(s.code,{children:"string"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Identity/",children:(0,i.jsx)(s.code,{children:"Identity"})})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L905",children:"api/procedures/types.ts:905"})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var i=n(96540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);