"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[93901],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||s;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},961:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const s={id:"TransferPolyxParams",title:"Interface: TransferPolyxParams",sidebar_label:"TransferPolyxParams"},o=void 0,i={unversionedId:"interfaces/API/Procedures/Types/TransferPolyxParams/TransferPolyxParams",id:"version-20.1.x/interfaces/API/Procedures/Types/TransferPolyxParams/TransferPolyxParams",title:"Interface: TransferPolyxParams",description:"api/procedures/types.TransferPolyxParams",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Procedures/Types/TransferPolyxParams/TransferPolyxParams.md",sourceDirName:"interfaces/API/Procedures/Types/TransferPolyxParams",slug:"/interfaces/API/Procedures/Types/TransferPolyxParams/",permalink:"/sdk-docs/interfaces/API/Procedures/Types/TransferPolyxParams/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"TransferPolyxParams",title:"Interface: TransferPolyxParams",sidebar_label:"TransferPolyxParams"},sidebar:"defaultSidebar",previous:{title:"TransferAssetOwnershipParams",permalink:"/sdk-docs/interfaces/API/Procedures/Types/TransferAssetOwnershipParams/"},next:{title:"TransferRestriction",permalink:"/sdk-docs/interfaces/API/Procedures/Types/TransferRestriction/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"amount",id:"amount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"memo",id:"memo",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"to",id:"to",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:p};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".TransferPolyxParams"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"amount"},"amount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"amount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("p",null,"amount of POLYX to be transferred"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L395"},"api/procedures/types.ts:395")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"memo"},"memo"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"memo"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"identifier string to help differentiate transfers"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L399"},"api/procedures/types.ts:399")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"to"},"to"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"to"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Account/"},(0,a.kt)("inlineCode",{parentName:"a"},"Account"))),(0,a.kt)("p",null,"Account that will receive the POLYX"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L391"},"api/procedures/types.ts:391")))}d.isMDXComponent=!0}}]);