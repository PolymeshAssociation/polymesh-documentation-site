"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[33668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),l=s,f=u["".concat(d,".").concat(l)]||u[l]||m[l]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=l;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},19994:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const i={id:"AddAssetRequirementParams",title:"Interface: AddAssetRequirementParams",sidebar_label:"AddAssetRequirementParams"},a=void 0,o={unversionedId:"interfaces/API/Procedures/Types/AddAssetRequirementParams/AddAssetRequirementParams",id:"interfaces/API/Procedures/Types/AddAssetRequirementParams/AddAssetRequirementParams",title:"Interface: AddAssetRequirementParams",description:"api/procedures/types.AddAssetRequirementParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/AddAssetRequirementParams/AddAssetRequirementParams.md",sourceDirName:"interfaces/API/Procedures/Types/AddAssetRequirementParams",slug:"/interfaces/API/Procedures/Types/AddAssetRequirementParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/AddAssetRequirementParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"AddAssetRequirementParams",title:"Interface: AddAssetRequirementParams",sidebar_label:"AddAssetRequirementParams"},sidebar:"defaultSidebar",previous:{title:"UniqueIdentifiers",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Venue/UniqueIdentifiers/"},next:{title:"AddClaimsParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/AddClaimsParams/"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"conditions",id:"conditions",level:3},{value:"Defined in",id:"defined-in",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".AddAssetRequirementParams"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"conditions"},"conditions"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"conditions"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#inputcondition"},(0,s.kt)("inlineCode",{parentName:"a"},"InputCondition")),"[]"),(0,s.kt)("p",null,"array of conditions that form the requirement that must be added.\nConditions within a requirement are ",(0,s.kt)("em",{parentName:"p"},"AND")," between them. This means that in order\nfor a transfer to comply with this requirement, it must fulfill ",(0,s.kt)("em",{parentName:"p"},"ALL")," conditions"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L560"},"api/procedures/types.ts:560")))}u.isMDXComponent=!0}}]);