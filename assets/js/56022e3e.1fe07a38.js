"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[71132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||y[u]||r;return n?i.createElement(f,s(s({ref:t},p),{},{components:n})):i.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={id:"IdentityBalance",title:"Interface: IdentityBalance",sidebar_label:"IdentityBalance"},s=void 0,o={unversionedId:"interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance",id:"interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance",title:"Interface: IdentityBalance",description:"api/entities/Asset/types.IdentityBalance",source:"@site/sdk-docs/interfaces/API/Entities/Asset/Types/IdentityBalance/IdentityBalance.md",sourceDirName:"interfaces/API/Entities/Asset/Types/IdentityBalance",slug:"/interfaces/API/Entities/Asset/Types/IdentityBalance/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Entities/Asset/Types/IdentityBalance/",draft:!1,tags:[],version:"current",frontMatter:{id:"IdentityBalance",title:"Interface: IdentityBalance",sidebar_label:"IdentityBalance"},sidebar:"defaultSidebar",previous:{title:"HistoricAssetTransaction",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Entities/Asset/Types/HistoricAssetTransaction/"},next:{title:"NftMetadata",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Entities/Asset/Types/NftMetadata/"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"balance",id:"balance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"identity",id:"identity",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Entities/Asset/Types/"},"api/entities/Asset/types"),".IdentityBalance"),(0,a.kt)("p",null,"Represents the balance of an Asset Holder"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"balance"},"balance"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"balance"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/types.ts#L46"},"api/entities/Asset/types.ts:46")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"identity"},"identity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"identity"),": ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Identity/"},(0,a.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/entities/Asset/types.ts#L45"},"api/entities/Asset/types.ts:45")))}d.isMDXComponent=!0}}]);