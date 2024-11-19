"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[52076],{28728:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"interfaces/API/Entities/Types/TrustedClaimIssuer/TrustedClaimIssuer","title":"Interface: TrustedClaimIssuer<IsDefault>","description":"api/entities/types.TrustedClaimIssuer","source":"@site/sdk-docs_versioned_docs/version-26.2.x/interfaces/API/Entities/Types/TrustedClaimIssuer/TrustedClaimIssuer.md","sourceDirName":"interfaces/API/Entities/Types/TrustedClaimIssuer","slug":"/interfaces/API/Entities/Types/TrustedClaimIssuer/","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/TrustedClaimIssuer/","draft":false,"unlisted":false,"tags":[],"version":"26.2.x","frontMatter":{"id":"TrustedClaimIssuer","title":"Interface: TrustedClaimIssuer<IsDefault>","sidebar_label":"TrustedClaimIssuer"},"sidebar":"defaultSidebar","previous":{"title":"TransactionPermissions","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Types/TransactionPermissions/"},"next":{"title":"VenueDetails","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Venue/Types/VenueDetails/"}}');var n=t(74848),r=t(28453);const d={id:"TrustedClaimIssuer",title:"Interface: TrustedClaimIssuer<IsDefault>",sidebar_label:"TrustedClaimIssuer"},l=void 0,a={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"identity",id:"identity",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"trustedFor",id:"trustedfor",level:3},{value:"Defined in",id:"defined-in-1",level:4}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Types/",children:"api/entities/types"}),".TrustedClaimIssuer"]}),"\n",(0,n.jsx)(s.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"IsDefault"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["extends ",(0,n.jsx)(s.code,{children:"boolean"})," = ",(0,n.jsx)(s.code,{children:"false"})]}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"whether the Identity is a default trusted claim issuer for an asset or just for a specific compliance condition. Defaults to false"})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"identity",children:"identity"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"identity"}),": ",(0,n.jsx)(s.code,{children:"IsDefault"})," extends ",(0,n.jsx)(s.code,{children:"true"})," ? ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/DefaultTrustedClaimIssuer/",children:(0,n.jsx)(s.code,{children:"DefaultTrustedClaimIssuer"})})," : ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/",children:(0,n.jsx)(s.code,{children:"Identity"})})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L313",children:"api/entities/types.ts:313"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"trustedfor",children:"trustedFor"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"trustedFor"}),": ",(0,n.jsx)(s.code,{children:"null"})," | ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/enums/API/Entities/Types/ClaimType/",children:(0,n.jsx)(s.code,{children:"ClaimType"})}),"[]"]}),"\n",(0,n.jsx)(s.p,{children:"a null value means that the issuer is trusted for all claim types"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/3cc570ade/src/api/entities/types.ts#L317",children:"api/entities/types.ts:317"})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>l});var i=t(96540);const n={},r=i.createContext(n);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);