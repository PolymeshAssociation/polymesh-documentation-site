"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[68934],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),i=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?t.createElement(f,s(s({ref:r},p),{},{components:n})):t.createElement(f,s({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[d]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26364:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=n(87462),a=(n(67294),n(3905));const o={id:"IncreaseAllowanceParams",title:"Interface: IncreaseAllowanceParams",sidebar_label:"IncreaseAllowanceParams"},s=void 0,c={unversionedId:"interfaces/API/Procedures/Types/IncreaseAllowanceParams/IncreaseAllowanceParams",id:"version-22.0.x/interfaces/API/Procedures/Types/IncreaseAllowanceParams/IncreaseAllowanceParams",title:"Interface: IncreaseAllowanceParams",description:"api/procedures/types.IncreaseAllowanceParams",source:"@site/sdk-docs_versioned_docs/version-22.0.x/interfaces/API/Procedures/Types/IncreaseAllowanceParams/IncreaseAllowanceParams.md",sourceDirName:"interfaces/API/Procedures/Types/IncreaseAllowanceParams",slug:"/interfaces/API/Procedures/Types/IncreaseAllowanceParams/",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/API/Procedures/Types/IncreaseAllowanceParams/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"IncreaseAllowanceParams",title:"Interface: IncreaseAllowanceParams",sidebar_label:"IncreaseAllowanceParams"},sidebar:"defaultSidebar",previous:{title:"EditClaimsParams",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/API/Procedures/Types/EditClaimsParams/"},next:{title:"InstructionIdParams",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/API/Procedures/Types/InstructionIdParams/"}},l={},i=[{value:"Properties",id:"properties",level:2},{value:"allowance",id:"allowance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"operation",id:"operation",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:i};function d(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/modules/API/Procedures/Types/"},"api/procedures/types"),".IncreaseAllowanceParams"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"allowance"},"allowance"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"allowance"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("p",null,"amount of POLYX to increase the allowance by"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L894"},"api/procedures/types.ts:894")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"operation"},"operation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"operation"),": ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/enums/API/Procedures/Types/AllowanceOperation/#increase"},(0,a.kt)("inlineCode",{parentName:"a"},"Increase"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/procedures/types.ts#L895"},"api/procedures/types.ts:895")))}d.isMDXComponent=!0}}]);