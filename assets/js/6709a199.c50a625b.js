"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[4210],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=p(t),u=i,y=f["".concat(c,".").concat(u)]||f[u]||d[u]||s;return t?n.createElement(y,a(a({ref:r},l),{},{components:t})):n.createElement(y,a({ref:r},l))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[f]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3781:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=t(87462),i=(t(67294),t(3905));const s={id:"TransferRestriction",title:"Interface: TransferRestriction",sidebar_label:"TransferRestriction"},a=void 0,o={unversionedId:"interfaces/API/Procedures/Types/TransferRestriction/TransferRestriction",id:"version-20.1.x/interfaces/API/Procedures/Types/TransferRestriction/TransferRestriction",title:"Interface: TransferRestriction",description:"api/procedures/types.TransferRestriction",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Procedures/Types/TransferRestriction/TransferRestriction.md",sourceDirName:"interfaces/API/Procedures/Types/TransferRestriction",slug:"/interfaces/API/Procedures/Types/TransferRestriction/",permalink:"/sdk-docs/interfaces/API/Procedures/Types/TransferRestriction/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"TransferRestriction",title:"Interface: TransferRestriction",sidebar_label:"TransferRestriction"},sidebar:"defaultSidebar",previous:{title:"TransferPolyxParams",permalink:"/sdk-docs/interfaces/API/Procedures/Types/TransferPolyxParams/"},next:{title:"TransferTickerOwnershipParams",permalink:"/sdk-docs/interfaces/API/Procedures/Types/TransferTickerOwnershipParams/"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"value",id:"value",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:p};function f(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".TransferRestriction"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/enums/API/Procedures/Types/TransferRestrictionType/"},(0,i.kt)("inlineCode",{parentName:"a"},"TransferRestrictionType"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L153"},"api/procedures/types.ts:153")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"value"},"value"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L154"},"api/procedures/types.ts:154")))}f.isMDXComponent=!0}}]);