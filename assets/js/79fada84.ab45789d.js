"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[92592],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>P});var s=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=s.createContext({}),c=function(e){var r=s.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},m=function(e){var r=c(e.components);return s.createElement(p.Provider,{value:r},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=n,P=u["".concat(p,".").concat(d)]||u[d]||l[d]||o;return t?s.createElement(P,a(a({ref:r},m),{},{components:t})):s.createElement(P,a({ref:r},m))}));function P(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58670:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(87462),n=(t(67294),t(3905));const o={id:"SetGroupPermissionsParams",title:"Interface: SetGroupPermissionsParams",sidebar_label:"SetGroupPermissionsParams"},a=void 0,i={unversionedId:"interfaces/API/Procedures/Types/SetGroupPermissionsParams/SetGroupPermissionsParams",id:"interfaces/API/Procedures/Types/SetGroupPermissionsParams/SetGroupPermissionsParams",title:"Interface: SetGroupPermissionsParams",description:"api/procedures/types.SetGroupPermissionsParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/SetGroupPermissionsParams/SetGroupPermissionsParams.md",sourceDirName:"interfaces/API/Procedures/Types/SetGroupPermissionsParams",slug:"/interfaces/API/Procedures/Types/SetGroupPermissionsParams/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/API/Procedures/Types/SetGroupPermissionsParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"SetGroupPermissionsParams",title:"Interface: SetGroupPermissionsParams",sidebar_label:"SetGroupPermissionsParams"},sidebar:"defaultSidebar",previous:{title:"SetCustodianParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/API/Procedures/Types/SetCustodianParams/"},next:{title:"SetPercentageTransferRestrictionsParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/API/Procedures/Types/SetPercentageTransferRestrictionsParams/"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"permissions",id:"permissions",level:3},{value:"Defined in",id:"defined-in",level:4}],m={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/API/Procedures/Types/"},"api/procedures/types"),".SetGroupPermissionsParams"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"permissions"},"permissions"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"permissions"),": { ",(0,n.kt)("inlineCode",{parentName:"p"},"transactions"),": ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/TransactionPermissions/"},(0,n.kt)("inlineCode",{parentName:"a"},"TransactionPermissions")),"  } ","|"," { ",(0,n.kt)("inlineCode",{parentName:"p"},"transactionGroups"),": ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/enums/Types/TxGroup/"},(0,n.kt)("inlineCode",{parentName:"a"},"TxGroup")),"[]  }"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L906"},"api/procedures/types.ts:906")))}u.isMDXComponent=!0}}]);