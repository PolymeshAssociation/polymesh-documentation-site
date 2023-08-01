"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[63816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||s;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const s={id:"Leg",title:"Interface: Leg",sidebar_label:"Leg"},a=void 0,o={unversionedId:"interfaces/API/Entities/Instruction/Types/Leg/Leg",id:"version-20.1.x/interfaces/API/Entities/Instruction/Types/Leg/Leg",title:"Interface: Leg",description:"api/entities/Instruction/types.Leg",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Entities/Instruction/Types/Leg/Leg.md",sourceDirName:"interfaces/API/Entities/Instruction/Types/Leg",slug:"/interfaces/API/Entities/Instruction/Types/Leg/",permalink:"/sdk-docs/interfaces/API/Entities/Instruction/Types/Leg/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"Leg",title:"Interface: Leg",sidebar_label:"Leg"},sidebar:"defaultSidebar",previous:{title:"InstructionAffirmation",permalink:"/sdk-docs/interfaces/API/Entities/Instruction/Types/InstructionAffirmation/"},next:{title:"UniqueIdentifiers",permalink:"/sdk-docs/interfaces/API/Entities/Instruction/UniqueIdentifiers/"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"amount",id:"amount",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"asset",id:"asset",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"from",id:"from",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"to",id:"to",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Entities/Instruction/Types/"},"api/entities/Instruction/types"),".Leg"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Leg"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/API/Entities/Portfolio/Types/SettlementLeg/"},(0,i.kt)("inlineCode",{parentName:"a"},"SettlementLeg"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"amount"},"amount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"amount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Instruction/types.ts#L49"},"api/entities/Instruction/types.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"asset"},"asset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"asset"),": ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/"},(0,i.kt)("inlineCode",{parentName:"a"},"Asset"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Instruction/types.ts#L50"},"api/entities/Instruction/types.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"from"},"from"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"from"),": ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/NumberedPortfolio/"},(0,i.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/DefaultPortfolio/"},(0,i.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Instruction/types.ts#L47"},"api/entities/Instruction/types.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"to"},"to"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"to"),": ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/NumberedPortfolio/"},(0,i.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/DefaultPortfolio/"},(0,i.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio"))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/Instruction/types.ts#L48"},"api/entities/Instruction/types.ts:48")))}d.isMDXComponent=!0}}]);