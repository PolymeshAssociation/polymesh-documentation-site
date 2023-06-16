"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[41568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"StatType",title:"Enumeration: StatType",sidebar_label:"StatType"},o=void 0,p={unversionedId:"enums/Types/StatType/StatType",id:"version-20.1.x/enums/Types/StatType/StatType",title:"Enumeration: StatType",description:"types.StatType",source:"@site/sdk-docs_versioned_docs/version-20.1.x/enums/Types/StatType/StatType.md",sourceDirName:"enums/Types/StatType",slug:"/enums/Types/StatType/",permalink:"/polymesh-documentation-site/sdk-docs/enums/Types/StatType/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"StatType",title:"Enumeration: StatType",sidebar_label:"StatType"},sidebar:"defaultSidebar",previous:{title:"StatOpTypeEnum",permalink:"/polymesh-documentation-site/sdk-docs/enums/Types/StatOpTypeEnum/"},next:{title:"StoStatus",permalink:"/polymesh-documentation-site/sdk-docs/enums/Types/StoStatus/"}},l={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Balance",id:"balance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Count",id:"count",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ScopedBalance",id:"scopedbalance",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"ScopedCount",id:"scopedcount",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/"},"types"),".StatType"),(0,a.kt)("p",null,"Represents the StatType from the ",(0,a.kt)("inlineCode",{parentName:"p"},"statistics")," module."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null,' the chain doesn\'t use "Scoped" types, but they are needed here to discriminate the input instead of having an optional input'),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"balance"},"Balance"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Balance")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"Balance"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L340"},"types/index.ts:340")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"count"},"Count"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Count")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"Count"')),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L339"},"types/index.ts:339")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scopedbalance"},"ScopedBalance"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ScopedBalance")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"ScopedBalance"')),(0,a.kt)("p",null,"ScopedPercentage is an SDK only type, on chain it is ",(0,a.kt)("inlineCode",{parentName:"p"},"Balance")," with a claimType option present"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L348"},"types/index.ts:348")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scopedcount"},"ScopedCount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ScopedCount")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"ScopedCount"')),(0,a.kt)("p",null,"ScopedCount is an SDK only type, on chain it is ",(0,a.kt)("inlineCode",{parentName:"p"},"Count")," with a claimType option present"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L344"},"types/index.ts:344")))}c.isMDXComponent=!0}}]);