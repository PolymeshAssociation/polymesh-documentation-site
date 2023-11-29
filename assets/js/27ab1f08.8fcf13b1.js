"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[47853],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=s,c=m["".concat(o,".").concat(u)]||m[u]||k[u]||i;return a?n.createElement(c,r(r({ref:t},d),{},{components:a})):n.createElement(c,r({ref:t},d))}));function c(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:s,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const i={id:"BaseAsset",title:"Class: BaseAsset",sidebar_label:"BaseAsset"},r=void 0,l={unversionedId:"classes/API/Entities/Asset/Base/BaseAsset/BaseAsset",id:"version-23.0.x/classes/API/Entities/Asset/Base/BaseAsset/BaseAsset",title:"Class: BaseAsset",description:"api/entities/Asset/Base/BaseAsset.BaseAsset",source:"@site/sdk-docs_versioned_docs/version-23.0.x/classes/API/Entities/Asset/Base/BaseAsset/BaseAsset.md",sourceDirName:"classes/API/Entities/Asset/Base/BaseAsset",slug:"/classes/API/Entities/Asset/Base/BaseAsset/",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/BaseAsset/",draft:!1,tags:[],version:"23.0.x",frontMatter:{id:"BaseAsset",title:"Class: BaseAsset",sidebar_label:"BaseAsset"},sidebar:"defaultSidebar",previous:{title:"MultiSig",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/MultiSig/"},next:{title:"Compliance",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/Compliance/"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"compliance",id:"compliance",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"did",id:"did",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"documents",id:"documents",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"metadata",id:"metadata",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"permissions",id:"permissions",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"ticker",id:"ticker",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"uuid",id:"uuid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Methods",id:"methods",level:2},{value:"details",id:"details",level:3},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"freeze",id:"freeze",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getIdentifiers",id:"getidentifiers",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"isEqual",id:"isequal",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"isFrozen",id:"isfrozen",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"toHuman",id:"tohuman",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides",level:4},{value:"transferOwnership",id:"transferownership",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-9",level:4},{value:"unfreeze",id:"unfreeze",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-10",level:4},{value:"generateUuid",id:"generateuuid",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"unserialize",id:"unserialize",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Inherited from",id:"inherited-from-3",level:4}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Entities/Asset/Base/BaseAsset/"},"api/entities/Asset/Base/BaseAsset"),".BaseAsset"),(0,s.kt)("p",null,"Class used to manage functionality common to all assets."),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/"},(0,s.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/UniqueIdentifiers/"},(0,s.kt)("inlineCode",{parentName:"a"},"UniqueIdentifiers")),", ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"BaseAsset"))),(0,s.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Fungible/FungibleAsset"},(0,s.kt)("inlineCode",{parentName:"a"},"FungibleAsset"))),(0,s.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/NonFungible/NftCollection/"},(0,s.kt)("inlineCode",{parentName:"a"},"NftCollection"))))),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"compliance"},"compliance"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"compliance"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/Compliance/"},(0,s.kt)("inlineCode",{parentName:"a"},"Compliance"))),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/Asset/Base/BaseAsset.ts#L54"},"api/entities/Asset/Base/BaseAsset.ts:54")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"did"},"did"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"did"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"Identity ID of the Asset (used for Claims)"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/Asset/Base/BaseAsset.ts#L62"},"api/entities/Asset/Base/BaseAsset.ts:62")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"documents"},"documents"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"documents"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/Documents/"},(0,s.kt)("inlineCode",{parentName:"a"},"Documents"))),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/Asset/Base/BaseAsset.ts#L55"},"api/entities/Asset/Base/BaseAsset.ts:55")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"metadata"},"metadata"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"metadata"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/Metadata/"},(0,s.kt)("inlineCode",{parentName:"a"},"Metadata"))),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/Asset/Base/BaseAsset.ts#L56"},"api/entities/Asset/Base/BaseAsset.ts:56")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"permissions"},"permissions"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"permissions"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Asset/Base/Permissions/"},(0,s.kt)("inlineCode",{parentName:"a"},"Permissions"))),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/Asset/Base/BaseAsset.ts#L57"},"api/entities/Asset/Base/BaseAsset.ts:57")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"ticker"},"ticker"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"ticker"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"ticker of the Asset"),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/Asset/Base/BaseAsset.ts#L67"},"api/entities/Asset/Base/BaseAsset.ts:67")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"uuid"},"uuid"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"uuid"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/#uuid"},"uuid")),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/720afb69c/src/api/entities/Entity.ts#L46"},"api/entities/Entity.ts:46")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"details"},"details"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"details"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/AssetDetails/"},(0,s.kt)("inlineCode",{parentName:"a"},"AssetDetails")),">"),(0,s.kt)("p",null,"Retrieve the Asset's data"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," can be subscribed to"),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/AssetDetails/"},(0,s.kt)("inlineCode",{parentName:"a"},"AssetDetails")),">"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"details"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"callback")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#subcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"SubCallback")),"<",(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/AssetDetails/"},(0,s.kt)("inlineCode",{parentName:"a"},"AssetDetails")),">")))),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"freeze"},"freeze"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"freeze"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,s.kt)("p",null,"Freeze transfers of the Asset"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," this method is of type ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/NoArgsProcedureMethod/"},"NoArgsProcedureMethod"),", which means you can call ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/NoArgsProcedureMethod/#checkauthorization"},"freeze.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"opts?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,s.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getidentifiers"},"getIdentifiers"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getIdentifiers"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/SecurityIdentifier/"},(0,s.kt)("inlineCode",{parentName:"a"},"SecurityIdentifier")),"[]",">"),(0,s.kt)("p",null,"Retrieve the Asset's identifiers list"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," can be subscribed to"),(0,s.kt)("h4",{id:"returns-3"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/SecurityIdentifier/"},(0,s.kt)("inlineCode",{parentName:"a"},"SecurityIdentifier")),"[]",">"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getIdentifiers"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"callback?"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,s.kt)("h4",{id:"parameters-2"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"callback?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#subcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"SubCallback")),"<",(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/SecurityIdentifier/"},(0,s.kt)("inlineCode",{parentName:"a"},"SecurityIdentifier")),"[]",">")))),(0,s.kt)("h4",{id:"returns-4"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"isequal"},"isEqual"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"isEqual"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"Determine whether this Entity is the same as another one"),(0,s.kt)("h4",{id:"parameters-3"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"entity")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/"},(0,s.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,s.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,s.kt)("h4",{id:"returns-5"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/#isequal"},"isEqual")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"isfrozen"},"isFrozen"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"isFrozen"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,s.kt)("p",null,"Check whether transfers are frozen for the Asset"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," can be subscribed to"),(0,s.kt)("h4",{id:"returns-6"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"isFrozen"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,s.kt)("h4",{id:"parameters-4"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"callback")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#subcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"SubCallback")),"<",(0,s.kt)("inlineCode",{parentName:"td"},"boolean"),">")))),(0,s.kt)("h4",{id:"returns-7"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"tohuman"},"toHuman"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"toHuman"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"Return the NftCollection's ticker"),(0,s.kt)("h4",{id:"returns-8"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"overrides"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/#tohuman"},"toHuman")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"transferownership"},"transferOwnership"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"transferOwnership"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/"},(0,s.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),", ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/"},(0,s.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),">",">"),(0,s.kt)("p",null,"Transfer ownership of the Asset to another Identity. This generates an authorization request that must be accepted\nby the recipient"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," this will create ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/"},"Authorization Request")," which has to be accepted by the ",(0,s.kt)("inlineCode",{parentName:"p"},"target")," Identity.\nAn ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/"},"Account")," or ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},"Identity")," can fetch its pending Authorization Requests by calling ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Common/Namespaces/Authorizations/#getreceived"},"authorizations.getReceived"),".\nAlso, an Account or Identity can directly fetch the details of an Authorization Request by calling ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Common/Namespaces/Authorizations/#getone"},"authorizations.getOne")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," this method is of type ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"transferOwnership.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,s.kt)("h4",{id:"parameters-5"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"args")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/TransferAssetOwnershipParams/"},(0,s.kt)("inlineCode",{parentName:"a"},"TransferAssetOwnershipParams")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"opts?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,s.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,s.kt)("h4",{id:"returns-9"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/"},(0,s.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),", ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/AuthorizationRequest/"},(0,s.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),">",">"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"unfreeze"},"unfreeze"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"unfreeze"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,s.kt)("p",null,"Unfreeze transfers of the Asset"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," this method is of type ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/NoArgsProcedureMethod/"},"NoArgsProcedureMethod"),", which means you can call ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/NoArgsProcedureMethod/#checkauthorization"},"unfreeze.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,s.kt)("h4",{id:"parameters-6"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"opts?")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,s.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,s.kt)("h4",{id:"returns-10"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,s.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"generateuuid"},"generateUuid"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"generateUuid"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"Identifiers"),">","(",(0,s.kt)("inlineCode",{parentName:"p"},"identifiers"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"Generate the Entity's UUID from its identifying properties"),(0,s.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,s.kt)("h4",{id:"parameters-7"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"identifiers")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,s.kt)("h4",{id:"returns-11"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/#generateuuid"},"generateUuid")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"unserialize"},"unserialize"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("strong",{parentName:"p"},"unserialize"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"Identifiers"),">","(",(0,s.kt)("inlineCode",{parentName:"p"},"serialized"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Identifiers")),(0,s.kt)("p",null,"Unserialize a UUID into its Unique Identifiers"),(0,s.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,s.kt)("h4",{id:"parameters-8"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"serialized")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"UUID to unserialize")))),(0,s.kt)("h4",{id:"returns-12"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Identifiers")),(0,s.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/"},"Entity"),".",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Entity/#unserialize"},"unserialize")))}m.isMDXComponent=!0}}]);