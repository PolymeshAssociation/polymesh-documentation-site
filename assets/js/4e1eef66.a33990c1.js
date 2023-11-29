"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[2663],{3905:(e,i,t)=>{t.d(i,{Zo:()=>u,kt:()=>f});var n=t(67294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function s(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?s(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function d(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=n.createContext({}),l=function(e){var i=n.useContext(a),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},u=function(e){var i=l(e.components);return n.createElement(a.Provider,{value:i},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},D=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(t),D=r,f=p["".concat(a,".").concat(D)]||p[D]||c[D]||s;return t?n.createElement(f,o(o({ref:i},u),{},{components:t})):n.createElement(f,o({ref:i},u))}));function f(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=D;var d={};for(var a in i)hasOwnProperty.call(i,a)&&(d[a]=i[a]);d.originalType=e,d[p]="string"==typeof e?e:r,o[1]=d;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}D.displayName="MDXCreateElement"},54117:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const s={id:"DividendDistributionDetails",title:"Interface: DividendDistributionDetails",sidebar_label:"DividendDistributionDetails"},o=void 0,d={unversionedId:"interfaces/API/Entities/DividendDistribution/Types/DividendDistributionDetails/DividendDistributionDetails",id:"version-22.0.x/interfaces/API/Entities/DividendDistribution/Types/DividendDistributionDetails/DividendDistributionDetails",title:"Interface: DividendDistributionDetails",description:"api/entities/DividendDistribution/types.DividendDistributionDetails",source:"@site/sdk-docs_versioned_docs/version-22.0.x/interfaces/API/Entities/DividendDistribution/Types/DividendDistributionDetails/DividendDistributionDetails.md",sourceDirName:"interfaces/API/Entities/DividendDistribution/Types/DividendDistributionDetails",slug:"/interfaces/API/Entities/DividendDistribution/Types/DividendDistributionDetails/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/DividendDistribution/Types/DividendDistributionDetails/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"DividendDistributionDetails",title:"Interface: DividendDistributionDetails",sidebar_label:"DividendDistributionDetails"},sidebar:"defaultSidebar",previous:{title:"DistributionParticipant",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/DividendDistribution/Types/DistributionParticipant/"},next:{title:"UniqueIdentifiers",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Identity/UniqueIdentifiers/"}},a={},l=[{value:"Properties",id:"properties",level:2},{value:"fundsReclaimed",id:"fundsreclaimed",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"remainingFunds",id:"remainingfunds",level:3},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:l};function p(e){let{components:i,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/DividendDistribution/Types/"},"api/entities/DividendDistribution/types"),".DividendDistributionDetails"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"fundsreclaimed"},"fundsReclaimed"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"fundsReclaimed"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"whether the unclaimed funds have been reclaimed"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/DividendDistribution/types.ts#L10"},"api/entities/DividendDistribution/types.ts:10")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"remainingfunds"},"remainingFunds"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"remainingFunds"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/api/entities/DividendDistribution/types.ts#L6"},"api/entities/DividendDistribution/types.ts:6")))}p.isMDXComponent=!0}}]);