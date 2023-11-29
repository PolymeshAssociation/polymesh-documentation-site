"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[95671],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>P});var s=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=s.createContext({}),u=function(e){var r=s.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=u(e.components);return s.createElement(p.Provider,{value:r},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=u(t),d=n,P=c["".concat(p,".").concat(d)]||c[d]||l[d]||o;return t?s.createElement(P,i(i({ref:r},m),{},{components:t})):s.createElement(P,i({ref:r},m))}));function P(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[c]="string"==typeof e?e:n,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74970:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var s=t(87462),n=(t(67294),t(3905));const o={id:"SetPermissionGroupParams",title:"Interface: SetPermissionGroupParams",sidebar_label:"SetPermissionGroupParams"},i=void 0,a={unversionedId:"interfaces/API/Procedures/Types/SetPermissionGroupParams/SetPermissionGroupParams",id:"version-23.0.x/interfaces/API/Procedures/Types/SetPermissionGroupParams/SetPermissionGroupParams",title:"Interface: SetPermissionGroupParams",description:"api/procedures/types.SetPermissionGroupParams",source:"@site/sdk-docs_versioned_docs/version-23.0.x/interfaces/API/Procedures/Types/SetPermissionGroupParams/SetPermissionGroupParams.md",sourceDirName:"interfaces/API/Procedures/Types/SetPermissionGroupParams",slug:"/interfaces/API/Procedures/Types/SetPermissionGroupParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetPermissionGroupParams/",draft:!1,tags:[],version:"23.0.x",frontMatter:{id:"SetPermissionGroupParams",title:"Interface: SetPermissionGroupParams",sidebar_label:"SetPermissionGroupParams"},sidebar:"defaultSidebar",previous:{title:"SetPercentageTransferRestrictionsParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SetPercentageTransferRestrictionsParams/"},next:{title:"SubsidizeAccountParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SubsidizeAccountParams/"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"group",id:"group",level:3},{value:"Defined in",id:"defined-in",level:4}],m={toc:u};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".SetPermissionGroupParams"),(0,n.kt)("p",null,"This procedure can be called with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An Asset's existing Custom Permission Group. The Identity will be assigned as an Agent of that Group for that Asset"),(0,n.kt)("li",{parentName:"ul"},"A Known Permission Group and an Asset. The Identity will be assigned as an Agent of that Group for that Asset"),(0,n.kt)("li",{parentName:"ul"},"A set of Transaction Permissions and an Asset. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created for that Asset with those permissions, and\nthe Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used"),(0,n.kt)("li",{parentName:"ul"},"An array of ",(0,n.kt)("a",{parentName:"li",href:"/polymesh-documentation-site/sdk-docs/enums/Types/TxGroup/"},"Transaction Groups")," that represent a set of permissions. If there is no Custom Permission Group with those permissions, a Custom Permission Group will be created with those permissions, and\nthe Identity will be assigned as an Agent of that Group for that Asset. Otherwise, the existing Group will be used")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"group"},"group"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"group"),": ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/CustomPermissionGroup/"},(0,n.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/KnownPermissionGroup/"},(0,n.kt)("inlineCode",{parentName:"a"},"KnownPermissionGroup"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/TransactionsParams/"},(0,n.kt)("inlineCode",{parentName:"a"},"TransactionsParams"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/TxGroupParams/"},(0,n.kt)("inlineCode",{parentName:"a"},"TxGroupParams"))),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/procedures/types.ts#L1062"},"api/procedures/types.ts:1062")))}c.isMDXComponent=!0}}]);