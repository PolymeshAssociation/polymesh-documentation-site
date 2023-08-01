"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[7754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={id:"SingleClaimCondition",title:"Interface: SingleClaimCondition",sidebar_label:"SingleClaimCondition"},a=void 0,l={unversionedId:"interfaces/Types/SingleClaimCondition/SingleClaimCondition",id:"version-20.0.x/interfaces/Types/SingleClaimCondition/SingleClaimCondition",title:"Interface: SingleClaimCondition",description:"types.SingleClaimCondition",source:"@site/sdk-docs_versioned_docs/version-20.0.x/interfaces/Types/SingleClaimCondition/SingleClaimCondition.md",sourceDirName:"interfaces/Types/SingleClaimCondition",slug:"/interfaces/Types/SingleClaimCondition/",permalink:"/sdk-docs/20.0.x/interfaces/Types/SingleClaimCondition/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"SingleClaimCondition",title:"Interface: SingleClaimCondition",sidebar_label:"SingleClaimCondition"},sidebar:"defaultSidebar",previous:{title:"SimplePermissions",permalink:"/sdk-docs/20.0.x/interfaces/Types/SimplePermissions/"},next:{title:"StatAccreditedClaimInput",permalink:"/sdk-docs/20.0.x/interfaces/Types/StatAccreditedClaimInput/"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"claim",id:"claim",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/"},"types"),".SingleClaimCondition"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"claim"},"claim"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"claim"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/modules/Types/#claim"},(0,r.kt)("inlineCode",{parentName:"a"},"Claim"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L436"},"types/index.ts:436")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/enums/Types/ConditionType/#ispresent"},(0,r.kt)("inlineCode",{parentName:"a"},"IsPresent"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/20.0.x/enums/Types/ConditionType/#isabsent"},(0,r.kt)("inlineCode",{parentName:"a"},"IsAbsent"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L435"},"types/index.ts:435")))}c.isMDXComponent=!0}}]);