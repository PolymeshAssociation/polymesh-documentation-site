"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[59126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={id:"HistoricAgentOperation",title:"Interface: HistoricAgentOperation",sidebar_label:"HistoricAgentOperation"},a=void 0,s={unversionedId:"interfaces/Types/HistoricAgentOperation/HistoricAgentOperation",id:"interfaces/Types/HistoricAgentOperation/HistoricAgentOperation",title:"Interface: HistoricAgentOperation",description:"types.HistoricAgentOperation",source:"@site/sdk-docs/interfaces/Types/HistoricAgentOperation/HistoricAgentOperation.md",sourceDirName:"interfaces/Types/HistoricAgentOperation",slug:"/interfaces/Types/HistoricAgentOperation/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/HistoricAgentOperation/",draft:!1,tags:[],version:"current",frontMatter:{id:"HistoricAgentOperation",title:"Interface: HistoricAgentOperation",sidebar_label:"HistoricAgentOperation"},sidebar:"defaultSidebar",previous:{title:"GroupedInvolvedInstructions",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/GroupedInvolvedInstructions/"},next:{title:"IdentityCondition",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/IdentityCondition/"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"history",id:"history",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"identity",id:"identity",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/"},"types"),".HistoricAgentOperation"),(0,i.kt)("p",null,"Events triggered by transactions performed by an Agent Identity, related to the Token's configuration\nFor example: changing compliance requirements, inviting/removing agent Identities, freezing/unfreezing transfers"),(0,i.kt)("p",null,"Token transfers (settlements or movements between Portfolios) do not count as Operations"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"history"},"history"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"history"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/EventIdentifier/"},(0,i.kt)("inlineCode",{parentName:"a"},"EventIdentifier")),"[]"),(0,i.kt)("p",null,"list of Token Operation Events that were triggered by the Agent Identity"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L1601"},"types/index.ts:1601")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"identity"},"identity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"identity"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,i.kt)("p",null,"Agent Identity that performed the operations"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/types/index.ts#L1597"},"types/index.ts:1597")))}d.isMDXComponent=!0}}]);