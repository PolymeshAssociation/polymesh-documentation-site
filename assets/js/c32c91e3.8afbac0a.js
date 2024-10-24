"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[46274],{51177:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(74848),t=i(28453);const o={id:"SimplePermissions",title:"Interface: SimplePermissions",sidebar_label:"SimplePermissions"},r=void 0,l={id:"interfaces/API/Entities/Types/SimplePermissions/SimplePermissions",title:"Interface: SimplePermissions",description:"api/entities/types.SimplePermissions",source:"@site/sdk-docs/interfaces/API/Entities/Types/SimplePermissions/SimplePermissions.md",sourceDirName:"interfaces/API/Entities/Types/SimplePermissions",slug:"/interfaces/API/Entities/Types/SimplePermissions/",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Entities/Types/SimplePermissions/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"SimplePermissions",title:"Interface: SimplePermissions",sidebar_label:"SimplePermissions"},sidebar:"defaultSidebar",previous:{title:"SignerValue",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Entities/Types/SignerValue/"},next:{title:"SingleClaimCondition",permalink:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/interfaces/API/Entities/Types/SingleClaimCondition/"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"assets",id:"assets",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"portfolios",id:"portfolios",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"transactions",id:"transactions",level:3},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/API/Entities/Types/",children:"api/entities/types"}),".SimplePermissions"]}),"\n",(0,n.jsx)(s.p,{children:'This represents positive permissions (i.e. only "includes"). It is used\nfor specifying procedure requirements and querying if an Account has certain\npermissions. Null values represent full permissions in that category'}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"assets",children:"assets"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.code,{children:"Optional"})," ",(0,n.jsx)(s.strong,{children:"assets"}),": ",(0,n.jsx)(s.code,{children:"null"})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/Asset/Base/BaseAsset/",children:(0,n.jsx)(s.code,{children:"BaseAsset"})}),"[]"]}),"\n",(0,n.jsx)(s.p,{children:"list of required Asset permissions"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/types.ts#L683",children:"api/entities/types.ts:683"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"portfolios",children:"portfolios"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.code,{children:"Optional"})," ",(0,n.jsx)(s.strong,{children:"portfolios"}),": ",(0,n.jsx)(s.code,{children:"null"})," | (",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/NumberedPortfolio/",children:(0,n.jsx)(s.code,{children:"NumberedPortfolio"})})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/classes/API/Entities/DefaultPortfolio/",children:(0,n.jsx)(s.code,{children:"DefaultPortfolio"})}),")[]"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/types.ts#L689",children:"api/entities/types.ts:689"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"transactions",children:"transactions"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.code,{children:"Optional"})," ",(0,n.jsx)(s.strong,{children:"transactions"}),": ",(0,n.jsx)(s.code,{children:"null"})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/26.0.0-beta.2/modules/Generated/Types/#txtag",children:(0,n.jsx)(s.code,{children:"TxTag"})}),"[]"]}),"\n",(0,n.jsx)(s.p,{children:"list of required Transaction permissions"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5b946f904/src/api/entities/types.ts#L687",children:"api/entities/types.ts:687"})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>l});var n=i(96540);const t={},o=n.createContext(t);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);