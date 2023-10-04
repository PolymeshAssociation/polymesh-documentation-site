"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[33155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,f=d["".concat(o,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(f,l(l({ref:t},p),{},{components:n})):i.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={id:"ScheduleDetails",title:"Interface: ScheduleDetails",sidebar_label:"ScheduleDetails"},l=void 0,c={unversionedId:"interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/ScheduleDetails",id:"interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/ScheduleDetails",title:"Interface: ScheduleDetails",description:"api/entities/CheckpointSchedule/types.ScheduleDetails",source:"@site/sdk-docs/interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/ScheduleDetails.md",sourceDirName:"interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails",slug:"/interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/",draft:!1,tags:[],version:"current",frontMatter:{id:"ScheduleDetails",title:"Interface: ScheduleDetails",sidebar_label:"ScheduleDetails"},sidebar:"defaultSidebar",previous:{title:"Params",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/API/Entities/CheckpointSchedule/Params/"},next:{title:"UniqueIdentifiers",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/API/Entities/CheckpointSchedule/UniqueIdentifiers/"}},o={},s=[{value:"Properties",id:"properties",level:2},{value:"nextCheckpointDate",id:"nextcheckpointdate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"remainingCheckpoints",id:"remainingcheckpoints",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/API/Entities/CheckpointSchedule/Types/"},"api/entities/CheckpointSchedule/types"),".ScheduleDetails"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"nextcheckpointdate"},"nextCheckpointDate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"nextCheckpointDate"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/CheckpointSchedule/types.ts#L7"},"api/entities/CheckpointSchedule/types.ts:7")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remainingcheckpoints"},"remainingCheckpoints"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"remainingCheckpoints"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/entities/CheckpointSchedule/types.ts#L6"},"api/entities/CheckpointSchedule/types.ts:6")))}d.isMDXComponent=!0}}]);