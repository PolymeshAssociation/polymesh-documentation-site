"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[19013],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(f,s(s({ref:r},u),{},{components:t})):a.createElement(f,s({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73700:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const i={id:"CreateMultiSigParams",title:"Interface: CreateMultiSigParams",sidebar_label:"CreateMultiSigParams"},s=void 0,o={unversionedId:"interfaces/API/Procedures/Types/CreateMultiSigParams/CreateMultiSigParams",id:"version-19.0.0/interfaces/API/Procedures/Types/CreateMultiSigParams/CreateMultiSigParams",title:"Interface: CreateMultiSigParams",description:"api/procedures/types.CreateMultiSigParams",source:"@site/sdk-docs_versioned_docs/version-19.0.0/interfaces/API/Procedures/Types/CreateMultiSigParams/CreateMultiSigParams.md",sourceDirName:"interfaces/API/Procedures/Types/CreateMultiSigParams",slug:"/interfaces/API/Procedures/Types/CreateMultiSigParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateMultiSigParams/",draft:!1,tags:[],version:"19.0.0",frontMatter:{id:"CreateMultiSigParams",title:"Interface: CreateMultiSigParams",sidebar_label:"CreateMultiSigParams"},sidebar:"defaultSidebar",previous:{title:"CreateGroupParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateGroupParams/"},next:{title:"CreateTransactionBatchParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateTransactionBatchParams/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"requiredSignatures",id:"requiredsignatures",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"signers",id:"signers",level:3},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:p};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".CreateMultiSigParams"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"requiredsignatures"},"requiredSignatures"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"requiredSignatures"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L966"},"api/procedures/types.ts:966")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"signers"},"signers"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"signers"),": ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#signer"},(0,n.kt)("inlineCode",{parentName:"a"},"Signer")),"[]"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/procedures/types.ts#L965"},"api/procedures/types.ts:965")))}c.isMDXComponent=!0}}]);