"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[57864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},l="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,d=l["".concat(s,".").concat(m)]||l[m]||y[m]||o;return n?i.createElement(d,c(c({ref:t},u),{},{components:n})):i.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[l]="string"==typeof e?e:r,c[1]=a;for(var p=2;p<o;p++)c[p]=n[p];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={id:"AccountKeyType",title:"Enumeration: AccountKeyType",sidebar_label:"AccountKeyType"},c=void 0,a={unversionedId:"enums/API/Entities/Account/Types/AccountKeyType/AccountKeyType",id:"version-21.0.x/enums/API/Entities/Account/Types/AccountKeyType/AccountKeyType",title:"Enumeration: AccountKeyType",description:"api/entities/Account/types.AccountKeyType",source:"@site/sdk-docs_versioned_docs/version-21.0.x/enums/API/Entities/Account/Types/AccountKeyType/AccountKeyType.md",sourceDirName:"enums/API/Entities/Account/Types/AccountKeyType",slug:"/enums/API/Entities/Account/Types/AccountKeyType/",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/enums/API/Entities/Account/Types/AccountKeyType/",draft:!1,tags:[],version:"21.0.x",frontMatter:{id:"AccountKeyType",title:"Enumeration: AccountKeyType",sidebar_label:"AccountKeyType"},sidebar:"defaultSidebar",previous:{title:"AccountIdentityRelation",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/enums/API/Entities/Account/Types/AccountIdentityRelation/"},next:{title:"CaCheckpointType",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/enums/API/Entities/Asset/Checkpoints/Types/CaCheckpointType/"}},s={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"MultiSig",id:"multisig",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Normal",id:"normal",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"SmartContract",id:"smartcontract",level:3},{value:"Defined in",id:"defined-in-2",level:4}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/API/Entities/Account/Types/"},"api/entities/Account/types"),".AccountKeyType"),(0,r.kt)("p",null,"Distinguishes MultiSig and Smart Contract accounts"),(0,r.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,r.kt)("h3",{id:"multisig"},"MultiSig"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"MultiSig")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"MultiSig"')),(0,r.kt)("p",null,"Account is a MultiSig. (i.e. multiple signatures are required to authorize transactions)"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/Account/types.ts#L21"},"api/entities/Account/types.ts:21")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"normal"},"Normal"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Normal")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'""')),(0,r.kt)("p",null,"Account is a standard type (e.g. corresponds to the public key of a sr25519 pair)"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/Account/types.ts#L17"},"api/entities/Account/types.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"smartcontract"},"SmartContract"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"SmartContract")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"SmartContract"')),(0,r.kt)("p",null,"Account represents a smart contract"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d2/src/api/entities/Account/types.ts#L25"},"api/entities/Account/types.ts:25")))}l.isMDXComponent=!0}}]);