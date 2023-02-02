"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[37659],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=s,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,o(o({ref:r},l),{},{components:t})):n.createElement(f,o({ref:r},l))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65210:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),s=(t(67294),t(3905));const a={id:"TxGroupParams",title:"Interface: TxGroupParams",sidebar_label:"TxGroupParams"},o=void 0,i={unversionedId:"interfaces/API/Procedures/Types/TxGroupParams/TxGroupParams",id:"interfaces/API/Procedures/Types/TxGroupParams/TxGroupParams",title:"Interface: TxGroupParams",description:"api/procedures/types.TxGroupParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/TxGroupParams/TxGroupParams.md",sourceDirName:"interfaces/API/Procedures/Types/TxGroupParams",slug:"/interfaces/API/Procedures/Types/TxGroupParams/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/TxGroupParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"TxGroupParams",title:"Interface: TxGroupParams",sidebar_label:"TxGroupParams"},sidebar:"defaultSidebar",previous:{title:"TransferTickerOwnershipParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/TransferTickerOwnershipParams/"},next:{title:"WaivePermissionsParams",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/WaivePermissionsParams/"}},p={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"asset",id:"asset",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"transactionGroups",id:"transactiongroups",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c};function u(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".TxGroupParams"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/AssetBase/"},(0,s.kt)("inlineCode",{parentName:"a"},"AssetBase"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"TxGroupParams"))))),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"asset"},"asset"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"asset"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/"},(0,s.kt)("inlineCode",{parentName:"a"},"Asset"))),(0,s.kt)("p",null,"Asset over which the Identity will be granted permissions"),(0,s.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/AssetBase/"},"AssetBase"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/AssetBase/#asset"},"asset")),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L885"},"api/procedures/types.ts:885")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"transactiongroups"},"transactionGroups"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"transactionGroups"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/enums/Types/TxGroup/"},(0,s.kt)("inlineCode",{parentName:"a"},"TxGroup")),"[]"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/15be87e8/src/api/procedures/types.ts#L896"},"api/procedures/types.ts:896")))}u.isMDXComponent=!0}}]);