"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[44761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=i.createContext({}),p=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,f=d["".concat(a,".").concat(u)]||d[u]||m[u]||r;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const r={id:"HistoricSettlement",title:"Interface: HistoricSettlement",sidebar_label:"HistoricSettlement"},s=void 0,l={unversionedId:"interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement",id:"version-19.0.0/interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement",title:"Interface: HistoricSettlement",description:"api/entities/Portfolio/types.HistoricSettlement",source:"@site/sdk-docs_versioned_docs/version-19.0.0/interfaces/API/Entities/Portfolio/Types/HistoricSettlement/HistoricSettlement.md",sourceDirName:"interfaces/API/Entities/Portfolio/Types/HistoricSettlement",slug:"/interfaces/API/Entities/Portfolio/Types/HistoricSettlement/",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Portfolio/Types/HistoricSettlement/",draft:!1,tags:[],version:"19.0.0",frontMatter:{id:"HistoricSettlement",title:"Interface: HistoricSettlement",sidebar_label:"HistoricSettlement"},sidebar:"defaultSidebar",previous:{title:"HumanReadable",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Portfolio/HumanReadable/"},next:{title:"PortfolioBalance",permalink:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Portfolio/Types/PortfolioBalance/"}},a={},p=[{value:"Properties",id:"properties",level:2},{value:"accounts",id:"accounts",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"blockHash",id:"blockhash",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"blockNumber",id:"blocknumber",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"legs",id:"legs",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-4",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Portfolio/Types/"},"api/entities/Portfolio/types"),".HistoricSettlement"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"accounts"},"accounts"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"accounts"),": ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/"},(0,o.kt)("inlineCode",{parentName:"a"},"Account")),"[]"),(0,o.kt)("p",null,"Array of Accounts that participated by affirming the settlement"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/entities/Portfolio/types.ts#L25"},"api/entities/Portfolio/types.ts:25")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"blockhash"},"blockHash"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"blockHash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/entities/Portfolio/types.ts#L20"},"api/entities/Portfolio/types.ts:20")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"blockNumber"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/entities/Portfolio/types.ts#L19"},"api/entities/Portfolio/types.ts:19")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"legs"},"legs"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"legs"),": ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Portfolio/Types/SettlementLeg/"},(0,o.kt)("inlineCode",{parentName:"a"},"SettlementLeg")),"[]"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/entities/Portfolio/types.ts#L26"},"api/entities/Portfolio/types.ts:26")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"status"),": ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/enums/Types/SettlementResultEnum/"},(0,o.kt)("inlineCode",{parentName:"a"},"SettlementResultEnum"))),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/5a778578/src/api/entities/Portfolio/types.ts#L21"},"api/entities/Portfolio/types.ts:21")))}d.isMDXComponent=!0}}]);