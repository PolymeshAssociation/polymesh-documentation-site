"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[2090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={id:"Balance",title:"Interface: Balance",sidebar_label:"Balance"},i=void 0,o={unversionedId:"interfaces/Types/Balance/Balance",id:"interfaces/Types/Balance/Balance",title:"Interface: Balance",description:"types.Balance",source:"@site/sdk-docs/interfaces/Types/Balance/Balance.md",sourceDirName:"interfaces/Types/Balance",slug:"/interfaces/Types/Balance/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/Balance/",draft:!1,tags:[],version:"current",frontMatter:{id:"Balance",title:"Interface: Balance",sidebar_label:"Balance"},sidebar:"defaultSidebar",previous:{title:"AssetWithGroup",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/AssetWithGroup/"},next:{title:"BlockedClaim",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/BlockedClaim/"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"free",id:"free",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"locked",id:"locked",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"total",id:"total",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/"},"types"),".Balance"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Balance"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/API/Entities/Portfolio/Types/PortfolioBalance/"},(0,a.kt)("inlineCode",{parentName:"a"},"PortfolioBalance"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"free"},"free"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"free"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("p",null,"balance available for transferring and paying fees"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L733"},"types/index.ts:733")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"locked"},"locked"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"locked"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("p",null,"unavailable balance, either bonded for staking or locked for some other purpose"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L737"},"types/index.ts:737")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"total"},"total"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"total"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("p",null,"free + locked"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L741"},"types/index.ts:741")))}d.isMDXComponent=!0}}]);