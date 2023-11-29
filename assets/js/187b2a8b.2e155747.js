"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[56436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,u=c["".concat(l,".").concat(f)]||c[f]||m[f]||i;return n?o.createElement(u,s(s({ref:t},d),{},{components:n})):o.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={id:"PortfolioMovement",title:"Interface: PortfolioMovement",sidebar_label:"PortfolioMovement"},s=void 0,a={unversionedId:"interfaces/Types/PortfolioMovement/PortfolioMovement",id:"version-22.0.x/interfaces/Types/PortfolioMovement/PortfolioMovement",title:"Interface: PortfolioMovement",description:"types.PortfolioMovement",source:"@site/sdk-docs_versioned_docs/version-22.0.x/interfaces/Types/PortfolioMovement/PortfolioMovement.md",sourceDirName:"interfaces/Types/PortfolioMovement",slug:"/interfaces/Types/PortfolioMovement/",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/Types/PortfolioMovement/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"PortfolioMovement",title:"Interface: PortfolioMovement",sidebar_label:"PortfolioMovement"},sidebar:"defaultSidebar",previous:{title:"PortfolioId",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/Types/PortfolioId/"},next:{title:"ProcedureAuthorizationStatus",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/Types/ProcedureAuthorizationStatus/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"amount",id:"amount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"asset",id:"asset",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"memo",id:"memo",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/modules/Types/"},"types"),".PortfolioMovement"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"amount"},"amount"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"amount"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1266"},"types/index.ts:1266")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"asset"},"asset"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"asset"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1265"},"types/index.ts:1265")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"memo"},"memo"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"memo"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"identifier string to help differentiate transfers"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1270"},"types/index.ts:1270")))}c.isMDXComponent=!0}}]);