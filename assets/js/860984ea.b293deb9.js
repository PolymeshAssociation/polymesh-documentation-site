"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[70404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={id:"Params",title:"Interface: Params",sidebar_label:"Params"},o=void 0,l={unversionedId:"interfaces/API/Entities/CheckpointSchedule/Params/Params",id:"version-20.1.x/interfaces/API/Entities/CheckpointSchedule/Params/Params",title:"Interface: Params",description:"api/entities/CheckpointSchedule.Params",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Entities/CheckpointSchedule/Params/Params.md",sourceDirName:"interfaces/API/Entities/CheckpointSchedule/Params",slug:"/interfaces/API/Entities/CheckpointSchedule/Params/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/CheckpointSchedule/Params/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"Params",title:"Interface: Params",sidebar_label:"Params"},sidebar:"defaultSidebar",previous:{title:"HumanReadable",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/CheckpointSchedule/HumanReadable/"},next:{title:"ScheduleDetails",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/CheckpointSchedule/Types/ScheduleDetails/"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"nextCheckpointDate",id:"nextcheckpointdate",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"period",id:"period",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"remaining",id:"remaining",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"start",id:"start",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/CheckpointSchedule/"},"api/entities/CheckpointSchedule"),".Params"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"nextcheckpointdate"},"nextCheckpointDate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"nextCheckpointDate"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/CheckpointSchedule/index.ts#L38"},"api/entities/CheckpointSchedule/index.ts:38")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"period"},"period"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"period"),": ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/CalendarPeriod/"},(0,r.kt)("inlineCode",{parentName:"a"},"CalendarPeriod"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/CheckpointSchedule/index.ts#L35"},"api/entities/CheckpointSchedule/index.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remaining"},"remaining"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"remaining"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/CheckpointSchedule/index.ts#L37"},"api/entities/CheckpointSchedule/index.ts:37")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"start"},"start"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"start"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/CheckpointSchedule/index.ts#L36"},"api/entities/CheckpointSchedule/index.ts:36")))}d.isMDXComponent=!0}}]);