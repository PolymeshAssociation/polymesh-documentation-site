"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[83950],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),f=s,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const o={id:"SetCountTransferRestrictionsParams",title:"Interface: SetCountTransferRestrictionsParams",sidebar_label:"SetCountTransferRestrictionsParams"},a=void 0,i={unversionedId:"interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams",id:"version-20.1.x/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams",title:"Interface: SetCountTransferRestrictionsParams",description:"api/procedures/types.SetCountTransferRestrictionsParams",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/SetCountTransferRestrictionsParams.md",sourceDirName:"interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams",slug:"/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Procedures/Types/SetCountTransferRestrictionsParams/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"SetCountTransferRestrictionsParams",title:"Interface: SetCountTransferRestrictionsParams",sidebar_label:"SetCountTransferRestrictionsParams"},sidebar:"defaultSidebar",previous:{title:"SetClaimPercentageTransferRestrictionsParams",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Procedures/Types/SetClaimPercentageTransferRestrictionsParams/"},next:{title:"SetCustodianParams",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Procedures/Types/SetCustodianParams/"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"restrictions",id:"restrictions",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/API/Procedures/Types/"},"api/procedures/types"),".SetCountTransferRestrictionsParams"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"restrictions"},"restrictions"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"restrictions"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Procedures/Types/CountTransferRestrictionInput/"},(0,s.kt)("inlineCode",{parentName:"a"},"CountTransferRestrictionInput")),"[]"),(0,s.kt)("p",null,"array of Count Transfer Restrictions with their corresponding exemptions (if applicable)"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/procedures/types.ts#L212"},"api/procedures/types.ts:212")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"type"},"type"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"type"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/enums/API/Procedures/Types/TransferRestrictionType/#count"},(0,s.kt)("inlineCode",{parentName:"a"},"Count"))),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/procedures/types.ts#L213"},"api/procedures/types.ts:213")))}l.isMDXComponent=!0}}]);