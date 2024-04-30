"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[56990],{69635:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=s(74848),n=s(28453);const l={id:"Authorizations",title:"Class: Authorizations<Parent>",sidebar_label:"Authorizations"},r=void 0,d={id:"classes/API/Entities/Common/Namespaces/Authorizations/Authorizations",title:"Class: Authorizations<Parent>",description:"api/entities/common/namespaces/Authorizations.Authorizations",source:"@site/sdk-docs_versioned_docs/version-24.2.x/classes/API/Entities/Common/Namespaces/Authorizations/Authorizations.md",sourceDirName:"classes/API/Entities/Common/Namespaces/Authorizations",slug:"/classes/API/Entities/Common/Namespaces/Authorizations/",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Common/Namespaces/Authorizations/",draft:!1,unlisted:!1,tags:[],version:"24.2.x",frontMatter:{id:"Authorizations",title:"Class: Authorizations<Parent>",sidebar_label:"Authorizations"},sidebar:"defaultSidebar",previous:{title:"CheckpointSchedule",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CheckpointSchedule/"},next:{title:"CorporateAction",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CorporateAction/"}},o={},c=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"getHistoricalAuthorizations",id:"gethistoricalauthorizations",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getOne",id:"getone",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getReceived",id:"getreceived",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Common/Namespaces/Authorizations/",children:"api/entities/common/namespaces/Authorizations"}),".Authorizations"]}),"\n",(0,i.jsx)(t.p,{children:"Handles all Authorization related functionality"}),"\n",(0,i.jsx)(t.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Parent"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["extends ",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Types/#signer",children:(0,i.jsx)(t.code,{children:"Signer"})})]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Namespace"}),"<",(0,i.jsx)(t.code,{children:"Parent"}),">"]}),"\n",(0,i.jsxs)(t.p,{children:["\u21b3 ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Authorizations"})})]}),"\n",(0,i.jsxs)(t.p,{children:["\u21b3\u21b3 ",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/IdentityAuthorizations/",children:(0,i.jsx)(t.code,{children:"IdentityAuthorizations"})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.h3,{id:"gethistoricalauthorizations",children:"getHistoricalAuthorizations"}),"\n",(0,i.jsxs)(t.p,{children:["\u25b8 ",(0,i.jsx)(t.strong,{children:"getHistoricalAuthorizations"}),"(",(0,i.jsx)(t.code,{children:"opts?"}),"): ",(0,i.jsx)(t.code,{children:"Promise"}),"<",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/ResultSet/",children:(0,i.jsx)(t.code,{children:"ResultSet"})})," <",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/",children:(0,i.jsx)(t.code,{children:"AuthorizationRequest"})}),">>"]}),"\n",(0,i.jsx)(t.p,{children:"Fetch all historical Authorization Requests for which this Signer is the target"}),"\n",(0,i.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"opts"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Object"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"opts.size?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"BigNumber"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"page size"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"opts.start?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"BigNumber"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"page offset"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"opts.status?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/enums/Types/AuthorizationStatusEnum/",children:(0,i.jsx)(t.code,{children:"AuthorizationStatusEnum"})})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"fetch only authorizations with this status. Fetches all statuses if not passed"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"opts.type?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/enums/Types/AuthTypeEnum/",children:(0,i.jsx)(t.code,{children:"AuthTypeEnum"})})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"fetch only authorizations of this type. Fetches all types if not passed"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Promise"}),"<",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/ResultSet/",children:(0,i.jsx)(t.code,{children:"ResultSet"})})," <",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/",children:(0,i.jsx)(t.code,{children:"AuthorizationRequest"})}),">>"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Note"})})}),"\n",(0,i.jsx)(t.p,{children:"supports pagination"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Note"})})}),"\n",(0,i.jsx)(t.p,{children:"uses the middlewareV2"}),"\n",(0,i.jsx)(t.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/common/namespaces/Authorizations.ts#L147",children:"api/entities/common/namespaces/Authorizations.ts:147"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"getone",children:"getOne"}),"\n",(0,i.jsxs)(t.p,{children:["\u25b8 ",(0,i.jsx)(t.strong,{children:"getOne"}),"(",(0,i.jsx)(t.code,{children:"args"}),"): ",(0,i.jsx)(t.code,{children:"Promise"}),"<",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/",children:(0,i.jsx)(t.code,{children:"AuthorizationRequest"})}),">"]}),"\n",(0,i.jsx)(t.p,{children:"Retrieve a single Authorization Request targeting this Signer by its ID"}),"\n",(0,i.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"args"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Object"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"args.id"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"BigNumber"})})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Promise"}),"<",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/",children:(0,i.jsx)(t.code,{children:"AuthorizationRequest"})}),">"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Throws"})})}),"\n",(0,i.jsx)(t.p,{children:"if there is no Authorization Request with the passed ID targeting this Signer"}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/common/namespaces/Authorizations.ts#L77",children:"api/entities/common/namespaces/Authorizations.ts:77"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"getreceived",children:"getReceived"}),"\n",(0,i.jsxs)(t.p,{children:["\u25b8 ",(0,i.jsx)(t.strong,{children:"getReceived"}),"(",(0,i.jsx)(t.code,{children:"opts?"}),"): ",(0,i.jsx)(t.code,{children:"Promise"}),"<",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/",children:(0,i.jsx)(t.code,{children:"AuthorizationRequest"})}),"[]>"]}),"\n",(0,i.jsx)(t.p,{children:"Fetch all pending Authorization Requests for which this Signer is the target"}),"\n",(0,i.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"opts?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Object"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"opts.includeExpired?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"whether to include expired authorizations. Defaults to true"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"opts.type?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/enums/API/Entities/Types/AuthorizationType/",children:(0,i.jsx)(t.code,{children:"AuthorizationType"})})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"fetch only authorizations of this type. Fetches all types if not passed"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Promise"}),"<",(0,i.jsx)(t.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/",children:(0,i.jsx)(t.code,{children:"AuthorizationRequest"})}),"[]>"]}),"\n",(0,i.jsx)(t.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fedc4714f/src/api/entities/common/namespaces/Authorizations.ts#L41",children:"api/entities/common/namespaces/Authorizations.ts:41"})})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var i=s(96540);const n={},l=i.createContext(n);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);