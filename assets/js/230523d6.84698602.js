"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[87096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"Balance",title:"Interface: Balance",sidebar_label:"Balance"},l=void 0,o={unversionedId:"interfaces/Types/Balance/Balance",id:"version-19.1.x/interfaces/Types/Balance/Balance",title:"Interface: Balance",description:"types.Balance",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/Types/Balance/Balance.md",sourceDirName:"interfaces/Types/Balance",slug:"/interfaces/Types/Balance/",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/Balance/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"Balance",title:"Interface: Balance",sidebar_label:"Balance"},sidebar:"defaultSidebar",previous:{title:"AssetWithGroup",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/AssetWithGroup/"},next:{title:"BlockedClaim",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/BlockedClaim/"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"free",id:"free",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"locked",id:"locked",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"total",id:"total",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/modules/Types/"},"types"),".Balance"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Balance"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/API/Entities/Portfolio/Types/PortfolioBalance/"},(0,a.kt)("inlineCode",{parentName:"a"},"PortfolioBalance"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"free"},"free"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"free"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("p",null,"balance available for transferring and paying fees"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L704"},"types/index.ts:704")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"locked"},"locked"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"locked"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("p",null,"unavailable balance, either bonded for staking or locked for some other purpose"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L708"},"types/index.ts:708")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"total"},"total"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"total"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,a.kt)("p",null,"free + locked"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L712"},"types/index.ts:712")))}d.isMDXComponent=!0}}]);