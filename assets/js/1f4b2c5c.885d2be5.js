"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[35345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),c=a,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?i.createElement(k,o(o({ref:t},d),{},{components:n})):i.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={id:"HumanReadable",title:"Interface: HumanReadable",sidebar_label:"HumanReadable"},o=void 0,s={unversionedId:"interfaces/API/Entities/AuthorizationRequest/HumanReadable/HumanReadable",id:"version-20.1.x/interfaces/API/Entities/AuthorizationRequest/HumanReadable/HumanReadable",title:"Interface: HumanReadable",description:"api/entities/AuthorizationRequest.HumanReadable",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Entities/AuthorizationRequest/HumanReadable/HumanReadable.md",sourceDirName:"interfaces/API/Entities/AuthorizationRequest/HumanReadable",slug:"/interfaces/API/Entities/AuthorizationRequest/HumanReadable/",permalink:"/sdk-docs/interfaces/API/Entities/AuthorizationRequest/HumanReadable/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"HumanReadable",title:"Interface: HumanReadable",sidebar_label:"HumanReadable"},sidebar:"defaultSidebar",previous:{title:"UniqueIdentifiers",permalink:"/sdk-docs/interfaces/API/Entities/Asset/UniqueIdentifiers/"},next:{title:"Params",permalink:"/sdk-docs/interfaces/API/Entities/AuthorizationRequest/Params/"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"issuer",id:"issuer",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Entities/AuthorizationRequest/"},"api/entities/AuthorizationRequest"),".HumanReadable"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"data"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/AuthorizationType/#rotateprimarykey"},(0,a.kt)("inlineCode",{parentName:"a"},"RotatePrimaryKey")),"  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/AuthorizationType/#joinidentity"},(0,a.kt)("inlineCode",{parentName:"a"},"JoinIdentity"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": { assets: { values: string[]; type: PermissionType; } ","|"," null; transactions: { exceptions?: TxTag[] ","|"," undefined; values: (TxTag ","|"," ModuleName)[]; type: PermissionType; } ","|"," null; transactionGroups: TxGroup[]; portfolios: { ...; } ","|"," null; }  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/AuthorizationType/#portfoliocustody"},(0,a.kt)("inlineCode",{parentName:"a"},"PortfolioCustody"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": { did: string; id?: string ","|"," undefined; }  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/AuthorizationType/#becomeagent"},(0,a.kt)("inlineCode",{parentName:"a"},"BecomeAgent"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": { id: string; ticker: string; } ","|"," { type: PermissionGroupType; ticker: string; }  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/AuthorizationType/#addrelayerpayingkey"},(0,a.kt)("inlineCode",{parentName:"a"},"AddRelayerPayingKey"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": { beneficiary: string; subsidizer: string; allowance: string; }  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/AuthorizationType/#rotateprimarykeytosecondary"},(0,a.kt)("inlineCode",{parentName:"a"},"RotatePrimaryKeyToSecondary"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": { assets: { values: string[]; type: PermissionType; } ","|"," null; transactions: { exceptions?: TxTag[] ","|"," undefined; values: (TxTag ","|"," ModuleName)[]; type: PermissionType; } ","|"," null; transactionGroups: TxGroup[]; portfolios: { ...; } ","|"," null; }  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/AuthorizationType/#attestprimarykeyrotation"},(0,a.kt)("inlineCode",{parentName:"a"},"AttestPrimaryKeyRotation"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/AuthorizationType/#transferticker"},(0,a.kt)("inlineCode",{parentName:"a"},"TransferTicker"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/AuthorizationType/#addmultisigsigner"},(0,a.kt)("inlineCode",{parentName:"a"},"AddMultiSigSigner"))," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/enums/Types/AuthorizationType/#transferassetownership"},(0,a.kt)("inlineCode",{parentName:"a"},"TransferAssetOwnership"))," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/AuthorizationRequest.ts#L34"},"api/entities/AuthorizationRequest.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"expiry"},"expiry"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"expiry"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/AuthorizationRequest.ts#L32"},"api/entities/AuthorizationRequest.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/AuthorizationRequest.ts#L35"},"api/entities/AuthorizationRequest.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"issuer"},"issuer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"issuer"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/AuthorizationRequest.ts#L31"},"api/entities/AuthorizationRequest.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"target"},"target"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"target"),": ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/interfaces/Types/SignerValue/"},(0,a.kt)("inlineCode",{parentName:"a"},"SignerValue"))),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/entities/AuthorizationRequest.ts#L33"},"api/entities/AuthorizationRequest.ts:33")))}u.isMDXComponent=!0}}]);