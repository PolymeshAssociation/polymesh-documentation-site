"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[21289],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=c(r),f=i,m=l["".concat(p,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[l]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86168:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={id:"CountTransferRestrictionInput",title:"Interface: CountTransferRestrictionInput",sidebar_label:"CountTransferRestrictionInput"},s=void 0,a={unversionedId:"interfaces/API/Procedures/Types/CountTransferRestrictionInput/CountTransferRestrictionInput",id:"version-20.1.x/interfaces/API/Procedures/Types/CountTransferRestrictionInput/CountTransferRestrictionInput",title:"Interface: CountTransferRestrictionInput",description:"api/procedures/types.CountTransferRestrictionInput",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Procedures/Types/CountTransferRestrictionInput/CountTransferRestrictionInput.md",sourceDirName:"interfaces/API/Procedures/Types/CountTransferRestrictionInput",slug:"/interfaces/API/Procedures/Types/CountTransferRestrictionInput/",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Procedures/Types/CountTransferRestrictionInput/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"CountTransferRestrictionInput",title:"Interface: CountTransferRestrictionInput",sidebar_label:"CountTransferRestrictionInput"},sidebar:"defaultSidebar",previous:{title:"ControllerTransferParams",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Procedures/Types/ControllerTransferParams/"},next:{title:"CreateAssetParams",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Procedures/Types/CreateAssetParams/"}},p={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"count",id:"count",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"exemptedIdentities",id:"exemptedidentities",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:c};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/API/Procedures/Types/"},"api/procedures/types"),".CountTransferRestrictionInput"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TransferRestrictionInputBase")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"CountTransferRestrictionInput"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"count"},"count"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"count"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("p",null,"limit on the amount of different (unique) investors that can hold the Asset at once"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/procedures/types.ts#L168"},"api/procedures/types.ts:168")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"exemptedidentities"},"exemptedIdentities"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"exemptedIdentities"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity")),")[]"),(0,i.kt)("p",null,"array of Identities (or DIDs) that are exempted from the Restriction"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"TransferRestrictionInputBase.exemptedIdentities"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/procedures/types.ts#L161"},"api/procedures/types.ts:161")))}l.isMDXComponent=!0}}]);