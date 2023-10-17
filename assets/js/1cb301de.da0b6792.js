"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[57140],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),c=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return s.createElement(p.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||a;return r?s.createElement(f,o(o({ref:t},u),{},{components:r})):s.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(87462),n=(r(67294),r(3905));const a={id:"SetAssetRequirementsParams",title:"Interface: SetAssetRequirementsParams",sidebar_label:"SetAssetRequirementsParams"},o=void 0,i={unversionedId:"interfaces/API/Procedures/Types/SetAssetRequirementsParams/SetAssetRequirementsParams",id:"interfaces/API/Procedures/Types/SetAssetRequirementsParams/SetAssetRequirementsParams",title:"Interface: SetAssetRequirementsParams",description:"api/procedures/types.SetAssetRequirementsParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/SetAssetRequirementsParams/SetAssetRequirementsParams.md",sourceDirName:"interfaces/API/Procedures/Types/SetAssetRequirementsParams",slug:"/interfaces/API/Procedures/Types/SetAssetRequirementsParams/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Procedures/Types/SetAssetRequirementsParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"SetAssetRequirementsParams",title:"Interface: SetAssetRequirementsParams",sidebar_label:"SetAssetRequirementsParams"},sidebar:"defaultSidebar",previous:{title:"SetAssetDocumentsParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Procedures/Types/SetAssetDocumentsParams/"},next:{title:"SetClaimCountTransferRestrictionsParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Procedures/Types/SetClaimCountTransferRestrictionsParams/"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"requirements",id:"requirements",level:3},{value:"Defined in",id:"defined-in",level:4}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Procedures/Types/"},"api/procedures/types"),".SetAssetRequirementsParams"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"requirements"},"requirements"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"requirements"),": ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#inputcondition"},(0,n.kt)("inlineCode",{parentName:"a"},"InputCondition")),"[][]"),(0,n.kt)("p",null,"array of array of conditions. For a transfer to be successful, it must comply with all the conditions of at least one of the arrays.\nIn other words, higher level arrays are ",(0,n.kt)("em",{parentName:"p"},"OR")," between them, while conditions inside each array are ",(0,n.kt)("em",{parentName:"p"},"AND")," between them"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/procedures/types.ts#L735"},"api/procedures/types.ts:735")))}m.isMDXComponent=!0}}]);