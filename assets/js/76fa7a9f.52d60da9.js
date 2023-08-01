"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[87391],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>b});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(i),y=r,b=u["".concat(d,".").concat(y)]||u[y]||c[y]||a;return i?n.createElement(b,s(s({ref:t},p),{},{components:i})):n.createElement(b,s({ref:t},p))}));function b(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=i[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}y.displayName="MDXCreateElement"},74509:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=i(87462),r=(i(67294),i(3905));const a={id:"SubsidyData",title:"Interface: SubsidyData",sidebar_label:"SubsidyData"},s=void 0,o={unversionedId:"interfaces/API/Entities/Subsidy/Types/SubsidyData/SubsidyData",id:"version-20.1.x/interfaces/API/Entities/Subsidy/Types/SubsidyData/SubsidyData",title:"Interface: SubsidyData",description:"api/entities/Subsidy/types.SubsidyData",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Entities/Subsidy/Types/SubsidyData/SubsidyData.md",sourceDirName:"interfaces/API/Entities/Subsidy/Types/SubsidyData",slug:"/interfaces/API/Entities/Subsidy/Types/SubsidyData/",permalink:"/sdk-docs/interfaces/API/Entities/Subsidy/Types/SubsidyData/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"SubsidyData",title:"Interface: SubsidyData",sidebar_label:"SubsidyData"},sidebar:"defaultSidebar",previous:{title:"UniqueIdentifiers",permalink:"/sdk-docs/interfaces/API/Entities/Portfolio/UniqueIdentifiers/"},next:{title:"SubsidyWithAllowance",permalink:"/sdk-docs/interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"allowance",id:"allowance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"beneficiary",id:"beneficiary",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"subsidizer",id:"subsidizer",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Entities/Subsidy/Types/"},"api/entities/Subsidy/types"),".SubsidyData"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"allowance"},"allowance"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"allowance"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,"amount of POLYX to be subsidized. This can be increased/decreased later on"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Subsidy/types.ts#L17"},"api/entities/Subsidy/types.ts:17")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"beneficiary"},"beneficiary"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"beneficiary"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Account/"},(0,r.kt)("inlineCode",{parentName:"a"},"Account"))),(0,r.kt)("p",null,"Account whose transactions are being paid for"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Subsidy/types.ts#L9"},"api/entities/Subsidy/types.ts:9")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"subsidizer"},"subsidizer"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"subsidizer"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Account/"},(0,r.kt)("inlineCode",{parentName:"a"},"Account"))),(0,r.kt)("p",null,"Account that is paying for the transactions"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Subsidy/types.ts#L13"},"api/entities/Subsidy/types.ts:13")))}u.isMDXComponent=!0}}]);