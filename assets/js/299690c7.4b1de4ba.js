"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[99775],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2447:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={id:"ControllerTransferParams",title:"Interface: ControllerTransferParams",sidebar_label:"ControllerTransferParams"},s=void 0,i={unversionedId:"interfaces/API/Procedures/Types/ControllerTransferParams/ControllerTransferParams",id:"version-20.1.x/interfaces/API/Procedures/Types/ControllerTransferParams/ControllerTransferParams",title:"Interface: ControllerTransferParams",description:"api/procedures/types.ControllerTransferParams",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Procedures/Types/ControllerTransferParams/ControllerTransferParams.md",sourceDirName:"interfaces/API/Procedures/Types/ControllerTransferParams",slug:"/interfaces/API/Procedures/Types/ControllerTransferParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ControllerTransferParams/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"ControllerTransferParams",title:"Interface: ControllerTransferParams",sidebar_label:"ControllerTransferParams"},sidebar:"defaultSidebar",previous:{title:"ConfigureDividendDistributionParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ConfigureDividendDistributionParams/"},next:{title:"CountTransferRestrictionInput",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CountTransferRestrictionInput/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"amount",id:"amount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"originPortfolio",id:"originportfolio",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".ControllerTransferParams"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"amount"},"amount"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"amount"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,o.kt)("p",null,"amount of Asset tokens to transfer"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L482"},"api/procedures/types.ts:482")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"originportfolio"},"originPortfolio"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"originPortfolio"),": ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#portfoliolike"},(0,o.kt)("inlineCode",{parentName:"a"},"PortfolioLike"))),(0,o.kt)("p",null,"portfolio (or portfolio ID) from which Assets will be transferred"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L478"},"api/procedures/types.ts:478")))}u.isMDXComponent=!0}}]);