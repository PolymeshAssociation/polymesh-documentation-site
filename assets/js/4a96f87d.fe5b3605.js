"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[24513],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||a;return r?n.createElement(f,s(s({ref:t},m),{},{components:r})):n.createElement(f,s({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"RedeemTokensParams",title:"Interface: RedeemTokensParams",sidebar_label:"RedeemTokensParams"},s=void 0,i={unversionedId:"interfaces/API/Procedures/Types/RedeemTokensParams/RedeemTokensParams",id:"interfaces/API/Procedures/Types/RedeemTokensParams/RedeemTokensParams",title:"Interface: RedeemTokensParams",description:"api/procedures/types.RedeemTokensParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/RedeemTokensParams/RedeemTokensParams.md",sourceDirName:"interfaces/API/Procedures/Types/RedeemTokensParams",slug:"/interfaces/API/Procedures/Types/RedeemTokensParams/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/API/Procedures/Types/RedeemTokensParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"RedeemTokensParams",title:"Interface: RedeemTokensParams",sidebar_label:"RedeemTokensParams"},sidebar:"defaultSidebar",previous:{title:"RedeemNftParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/API/Procedures/Types/RedeemNftParams/"},next:{title:"RegisterCustomClaimTypeParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/API/Procedures/Types/RegisterCustomClaimTypeParams/"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"amount",id:"amount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"from",id:"from",level:3},{value:"Defined in",id:"defined-in-1",level:4}],m={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/modules/API/Procedures/Types/"},"api/procedures/types"),".RedeemTokensParams"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"amount"},"amount"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"amount"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/api/procedures/types.ts#L671"},"api/procedures/types.ts:671")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"from"},"from"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"from"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/classes/API/Entities/NumberedPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio"))," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/classes/API/Entities/DefaultPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio"))),(0,o.kt)("p",null,"portfolio (or portfolio ID) from which Assets will be redeemed (optional, defaults to the default Portfolio)"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/api/procedures/types.ts#L675"},"api/procedures/types.ts:675")))}d.isMDXComponent=!0}}]);