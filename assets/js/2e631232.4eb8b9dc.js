"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[18761],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=d(t),c=i,m=f["".concat(o,".").concat(c)]||f[c]||u[c]||a;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[f]="string"==typeof e?e:i,l[1]=s;for(var d=2;d<a;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},24297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const a={id:"TransferError",title:"Enumeration: TransferError",sidebar_label:"TransferError"},l=void 0,s={unversionedId:"enums/Types/TransferError/TransferError",id:"version-20.0.x/enums/Types/TransferError/TransferError",title:"Enumeration: TransferError",description:"types.TransferError",source:"@site/sdk-docs_versioned_docs/version-20.0.x/enums/Types/TransferError/TransferError.md",sourceDirName:"enums/Types/TransferError",slug:"/enums/Types/TransferError/",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/enums/Types/TransferError/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"TransferError",title:"Enumeration: TransferError",sidebar_label:"TransferError"},sidebar:"defaultSidebar",previous:{title:"TransferComplianceTypeEnum",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/enums/Types/TransferComplianceTypeEnum/"},next:{title:"TransferRestrictionType",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/enums/Types/TransferRestrictionType/"}},o={},d=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"InsufficientBalance",id:"insufficientbalance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"InsufficientPortfolioBalance",id:"insufficientportfoliobalance",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"InvalidGranularity",id:"invalidgranularity",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"InvalidReceiverCdd",id:"invalidreceivercdd",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"InvalidReceiverPortfolio",id:"invalidreceiverportfolio",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"InvalidSenderCdd",id:"invalidsendercdd",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"InvalidSenderPortfolio",id:"invalidsenderportfolio",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"ScopeClaimMissing",id:"scopeclaimmissing",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"SelfTransfer",id:"selftransfer",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"TransfersFrozen",id:"transfersfrozen",level:3},{value:"Defined in",id:"defined-in-9",level:4}],p={toc:d};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/"},"types"),".TransferError"),(0,i.kt)("p",null,"Akin to TransferStatus, these are a bit more granular and specific. Every TransferError translates to\na ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/enums/Types/TransferStatus/"},"TransferStatus"),", but two or more TransferErrors can represent the same TransferStatus, and\nnot all Transfer Statuses are represented by a TransferError"),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"insufficientbalance"},"InsufficientBalance"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"InsufficientBalance")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"InsufficientBalance"')),(0,i.kt)("p",null,"translates to TransferStatus.InsufficientBalance"),(0,i.kt)("p",null,"occurs if the sender Identity does not have enough balance to cover the amount"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L651"},"types/index.ts:651")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"insufficientportfoliobalance"},"InsufficientPortfolioBalance"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"InsufficientPortfolioBalance")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"InsufficientPortfolioBalance"')),(0,i.kt)("p",null,"translates to TransferStatus.PortfolioFailure"),(0,i.kt)("p",null,"occurs if the sender Portfolio does not have enough balance to cover the amount"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L675"},"types/index.ts:675")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"invalidgranularity"},"InvalidGranularity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"InvalidGranularity")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"InvalidGranularity"')),(0,i.kt)("p",null,"translates to TransferStatus.InvalidGranularity"),(0,i.kt)("p",null,"occurs if attempting to transfer decimal amounts of a non-divisible token"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L620"},"types/index.ts:620")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"invalidreceivercdd"},"InvalidReceiverCdd"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"InvalidReceiverCdd")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"InvalidReceiverCdd"')),(0,i.kt)("p",null,"translates to TransferStatus.InvalidReceiverIdentity"),(0,i.kt)("p",null,"occurs if the receiver Identity doesn't have a valid CDD claim"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L632"},"types/index.ts:632")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"invalidreceiverportfolio"},"InvalidReceiverPortfolio"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"InvalidReceiverPortfolio")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"InvalidReceiverPortfolio"')),(0,i.kt)("p",null,"translates to TransferStatus.PortfolioFailure"),(0,i.kt)("p",null,"occurs if the receiver Portfolio doesn't exist"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L669"},"types/index.ts:669")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"invalidsendercdd"},"InvalidSenderCdd"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"InvalidSenderCdd")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"InvalidSenderCdd"')),(0,i.kt)("p",null,"translates to TransferStatus.InvalidSenderIdentity"),(0,i.kt)("p",null,"occurs if the receiver Identity doesn't have a valid CDD claim"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L638"},"types/index.ts:638")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"invalidsenderportfolio"},"InvalidSenderPortfolio"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"InvalidSenderPortfolio")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"InvalidSenderPortfolio"')),(0,i.kt)("p",null,"translates to TransferStatus.PortfolioFailure"),(0,i.kt)("p",null,"occurs if the sender Portfolio doesn't exist"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L663"},"types/index.ts:663")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scopeclaimmissing"},"ScopeClaimMissing"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ScopeClaimMissing")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"ScopeClaimMissing"')),(0,i.kt)("p",null,"translates to TransferStatus.ScopeClaimMissing"),(0,i.kt)("p",null,"occurs if one of the participants doesn't have a valid Investor Uniqueness Claim for\nthe Asset"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L645"},"types/index.ts:645")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selftransfer"},"SelfTransfer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SelfTransfer")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"SelfTransfer"')),(0,i.kt)("p",null,"translates to TransferStatus.InvalidReceiverIdentity"),(0,i.kt)("p",null,"occurs if the origin and destination Identities are the same"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L626"},"types/index.ts:626")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transfersfrozen"},"TransfersFrozen"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"TransfersFrozen")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"TransfersFrozen"')),(0,i.kt)("p",null,"translates to TransferStatus.TransfersHalted"),(0,i.kt)("p",null,"occurs if the Asset's transfers are frozen"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L657"},"types/index.ts:657")))}f.isMDXComponent=!0}}]);