"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[93395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={id:"MultiClaimCondition",title:"Interface: MultiClaimCondition",sidebar_label:"MultiClaimCondition"},a=void 0,l={unversionedId:"interfaces/Types/MultiClaimCondition/MultiClaimCondition",id:"version-22.0.x/interfaces/Types/MultiClaimCondition/MultiClaimCondition",title:"Interface: MultiClaimCondition",description:"types.MultiClaimCondition",source:"@site/sdk-docs_versioned_docs/version-22.0.x/interfaces/Types/MultiClaimCondition/MultiClaimCondition.md",sourceDirName:"interfaces/Types/MultiClaimCondition",slug:"/interfaces/Types/MultiClaimCondition/",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/Types/MultiClaimCondition/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"MultiClaimCondition",title:"Interface: MultiClaimCondition",sidebar_label:"MultiClaimCondition"},sidebar:"defaultSidebar",previous:{title:"MortalProcedureOptValue",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/Types/MortalProcedureOptValue/"},next:{title:"NetworkProperties",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/Types/NetworkProperties/"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"claims",id:"claims",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/modules/Types/"},"types"),".MultiClaimCondition"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"claims"},"claims"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"claims"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/modules/Types/#claim"},(0,r.kt)("inlineCode",{parentName:"a"},"Claim")),"[]"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L428"},"types/index.ts:428")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/enums/Types/ConditionType/#isanyof"},(0,r.kt)("inlineCode",{parentName:"a"},"IsAnyOf"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/enums/Types/ConditionType/#isnoneof"},(0,r.kt)("inlineCode",{parentName:"a"},"IsNoneOf"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L427"},"types/index.ts:427")))}c.isMDXComponent=!0}}]);