"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[47315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"CreateNftCollectionParams",title:"Interface: CreateNftCollectionParams",sidebar_label:"CreateNftCollectionParams"},o=void 0,s={unversionedId:"interfaces/API/Procedures/Types/CreateNftCollectionParams/CreateNftCollectionParams",id:"interfaces/API/Procedures/Types/CreateNftCollectionParams/CreateNftCollectionParams",title:"Interface: CreateNftCollectionParams",description:"api/procedures/types.CreateNftCollectionParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/CreateNftCollectionParams/CreateNftCollectionParams.md",sourceDirName:"interfaces/API/Procedures/Types/CreateNftCollectionParams",slug:"/interfaces/API/Procedures/Types/CreateNftCollectionParams/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Procedures/Types/CreateNftCollectionParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"CreateNftCollectionParams",title:"Interface: CreateNftCollectionParams",sidebar_label:"CreateNftCollectionParams"},sidebar:"defaultSidebar",previous:{title:"CreateMultiSigParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Procedures/Types/CreateMultiSigParams/"},next:{title:"CreateTransactionBatchParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Procedures/Types/CreateTransactionBatchParams/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"collectionKeys",id:"collectionkeys",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"documents",id:"documents",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"nftType",id:"nfttype",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"securityIdentifiers",id:"securityidentifiers",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"ticker",id:"ticker",level:3},{value:"Defined in",id:"defined-in-5",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Procedures/Types/"},"api/procedures/types"),".CreateNftCollectionParams"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"collectionkeys"},"collectionKeys"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"collectionKeys"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Procedures/Types/#collectionkeyinput"},(0,i.kt)("inlineCode",{parentName:"a"},"CollectionKeyInput")),"[]"),(0,i.kt)("p",null,"The required metadata values each NFT in the collection will have"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/procedures/types.ts#L368"},"api/procedures/types.ts:368")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"documents"},"documents"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"documents"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/AssetDocument/"},(0,i.kt)("inlineCode",{parentName:"a"},"AssetDocument")),"[]"),(0,i.kt)("p",null,"Links to off chain documents related to the NftCollection"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/procedures/types.ts#L372"},"api/procedures/types.ts:372")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The collection name. defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"ticker")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/procedures/types.ts#L355"},"api/procedures/types.ts:355")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nfttype"},"nftType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nftType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null," if provided string that does not have a custom type"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null," if provided a BigNumber that does not correspond to a custom type"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/procedures/types.ts#L360"},"api/procedures/types.ts:360")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"securityidentifiers"},"securityIdentifiers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"securityIdentifiers"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/SecurityIdentifier/"},(0,i.kt)("inlineCode",{parentName:"a"},"SecurityIdentifier")),"[]"),(0,i.kt)("p",null,"array of domestic or international alphanumeric security identifiers for the Asset (e.g. ISIN, CUSIP, FIGI)"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/procedures/types.ts#L364"},"api/procedures/types.ts:364")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ticker"},"ticker"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ticker"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The primary identifier for the collection. The ticker must either be free, or the signer has appropriate permissions if reserved"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/b6f9fb883/src/api/procedures/types.ts#L351"},"api/procedures/types.ts:351")))}d.isMDXComponent=!0}}]);