"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[53141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,f=m["".concat(l,".").concat(c)]||m[c]||u[c]||a;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"ClaimCountTransferRestriction",title:"Interface: ClaimCountTransferRestriction",sidebar_label:"ClaimCountTransferRestriction"},s=void 0,o={unversionedId:"interfaces/Types/ClaimCountTransferRestriction/ClaimCountTransferRestriction",id:"version-20.1.x/interfaces/Types/ClaimCountTransferRestriction/ClaimCountTransferRestriction",title:"Interface: ClaimCountTransferRestriction",description:"types.ClaimCountTransferRestriction",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/Types/ClaimCountTransferRestriction/ClaimCountTransferRestriction.md",sourceDirName:"interfaces/Types/ClaimCountTransferRestriction",slug:"/interfaces/Types/ClaimCountTransferRestriction/",permalink:"/sdk-docs/interfaces/Types/ClaimCountTransferRestriction/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"ClaimCountTransferRestriction",title:"Interface: ClaimCountTransferRestriction",sidebar_label:"ClaimCountTransferRestriction"},sidebar:"defaultSidebar",previous:{title:"ClaimCountRestrictionValue",permalink:"/sdk-docs/interfaces/Types/ClaimCountRestrictionValue/"},next:{title:"ClaimData",permalink:"/sdk-docs/interfaces/Types/ClaimData/"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"claim",id:"claim",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"exemptedIds",id:"exemptedids",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"issuer",id:"issuer",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"max",id:"max",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"min",id:"min",level:3},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/"},"types"),".ClaimCountTransferRestriction"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TransferRestrictionBase")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"ClaimCountTransferRestriction"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"claim"},"claim"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"claim"),": ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/#inputstatclaim"},(0,i.kt)("inlineCode",{parentName:"a"},"InputStatClaim"))),(0,i.kt)("p",null,"The type of investors this restriction applies to. e.g. non-accredited"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L1294"},"types/index.ts:1294")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"exemptedids"},"exemptedIds"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"exemptedIds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"array of Scope/Identity IDs that are exempted from the Restriction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," if the Asset requires investor uniqueness, Scope IDs are used. Otherwise, we use Identity IDs. More on Scope IDs and investor uniqueness\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.polymesh.network/introduction/identity#polymesh-unique-identity-system-puis"},"here")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.polymesh.network/polymesh-docs/primitives/confidential-identity"},"here")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"TransferRestrictionBase.exemptedIds"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L1277"},"types/index.ts:1277")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"issuer"},"issuer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"issuer"),": ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L1304"},"types/index.ts:1304")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"max"},"max"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"max"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("p",null,"The maximum amount of investors that must meet the Claim criteria"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L1302"},"types/index.ts:1302")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"min"},"min"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"min"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("p",null,"The minimum amount of investors the must meet the Claim criteria"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L1298"},"types/index.ts:1298")))}m.isMDXComponent=!0}}]);