"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[92231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(r),m=i,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={id:"SubsidizeAccountParams",title:"Interface: SubsidizeAccountParams",sidebar_label:"SubsidizeAccountParams"},s=void 0,o={unversionedId:"interfaces/API/Procedures/Types/SubsidizeAccountParams/SubsidizeAccountParams",id:"version-23.0.x/interfaces/API/Procedures/Types/SubsidizeAccountParams/SubsidizeAccountParams",title:"Interface: SubsidizeAccountParams",description:"api/procedures/types.SubsidizeAccountParams",source:"@site/sdk-docs_versioned_docs/version-23.0.x/interfaces/API/Procedures/Types/SubsidizeAccountParams/SubsidizeAccountParams.md",sourceDirName:"interfaces/API/Procedures/Types/SubsidizeAccountParams",slug:"/interfaces/API/Procedures/Types/SubsidizeAccountParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SubsidizeAccountParams/",draft:!1,tags:[],version:"23.0.x",frontMatter:{id:"SubsidizeAccountParams",title:"Interface: SubsidizeAccountParams",sidebar_label:"SubsidizeAccountParams"},sidebar:"defaultSidebar",previous:{title:"SetPermissionGroupParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetPermissionGroupParams/"},next:{title:"TransactionsParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/TransactionsParams/"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"allowance",id:"allowance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"beneficiary",id:"beneficiary",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".SubsidizeAccountParams"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"allowance"},"allowance"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"allowance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("p",null,"amount of POLYX to be subsidized. This can be increased/decreased later on"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/procedures/types.ts#L279"},"api/procedures/types.ts:279")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"beneficiary"},"beneficiary"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"beneficiary"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/"},(0,i.kt)("inlineCode",{parentName:"a"},"Account"))),(0,i.kt)("p",null,"Account to subsidize"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/procedures/types.ts#L275"},"api/procedures/types.ts:275")))}l.isMDXComponent=!0}}]);