"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[65751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,u=d["".concat(l,".").concat(f)]||d[f]||y[f]||a;return n?i.createElement(u,s(s({ref:t},p),{},{components:n})):i.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={id:"IdentityBalance",title:"Interface: IdentityBalance",sidebar_label:"IdentityBalance"},s=void 0,o={unversionedId:"interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance",id:"version-22.0.x/interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance",title:"Interface: IdentityBalance",description:"api/entities/Asset/types.IdentityBalance",source:"@site/sdk-docs_versioned_docs/version-22.0.x/interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance.md",sourceDirName:"interfaces/API/Entities/Asset/Types/IdentityBalance",slug:"/interfaces/API/Entities/Asset/Types/IdentityBalance/",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/API/Entities/Asset/Types/IdentityBalance/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"IdentityBalance",title:"Interface: IdentityBalance",sidebar_label:"IdentityBalance"},sidebar:"defaultSidebar",previous:{title:"HistoricAssetTransaction",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/API/Entities/Asset/Types/HistoricAssetTransaction/"},next:{title:"TransferBreakdown",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/API/Entities/Asset/Types/TransferBreakdown/"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"balance",id:"balance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"identity",id:"identity",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/modules/API/Entities/Asset/Types/"},"api/entities/Asset/types"),".IdentityBalance"),(0,r.kt)("p",null,"Represents the balance of an Asset Holder"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"balance"},"balance"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"balance"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/types.ts#L28"},"api/entities/Asset/types.ts:28")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"identity"},"identity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"identity"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/classes/API/Entities/Identity/"},(0,r.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/Asset/types.ts#L27"},"api/entities/Asset/types.ts:27")))}d.isMDXComponent=!0}}]);