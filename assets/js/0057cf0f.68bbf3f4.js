"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[76618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,N=m["".concat(p,".").concat(u)]||m[u]||k[u]||l;return a?n.createElement(N,i(i({ref:t},d),{},{components:a})):n.createElement(N,i({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"Network",title:"Class: Network",sidebar_label:"Network"},i=void 0,o={unversionedId:"classes/API/Client/Network/Network",id:"classes/API/Client/Network/Network",title:"Class: Network",description:"api/client/Network.Network",source:"@site/sdk-docs/classes/API/Client/Network/Network.md",sourceDirName:"classes/API/Client/Network",slug:"/classes/API/Client/Network/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Client/Network/",draft:!1,tags:[],version:"current",frontMatter:{id:"Network",title:"Class: Network",sidebar_label:"Network"},sidebar:"defaultSidebar",previous:{title:"Identities",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Client/Identities/"},next:{title:"Polymesh",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Client/Polymesh/"}},p={},s=[{value:"Methods",id:"methods",level:2},{value:"getEventByIndexedArgs",id:"geteventbyindexedargs",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getEventsByIndexedArgs",id:"geteventsbyindexedargs",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getLatestBlock",id:"getlatestblock",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getMiddlewareLag",id:"getmiddlewarelag",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getMiddlewareMetadata",id:"getmiddlewaremetadata",level:3},{value:"Returns",id:"returns-4",level:4},{value:"getNetworkProperties",id:"getnetworkproperties",level:3},{value:"Returns",id:"returns-5",level:4},{value:"getProtocolFees",id:"getprotocolfees",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"getSs58Format",id:"getss58format",level:3},{value:"Returns",id:"returns-7",level:4},{value:"getTransactionByHash",id:"gettransactionbyhash",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-8",level:4},{value:"getTreasuryAccount",id:"gettreasuryaccount",level:3},{value:"Returns",id:"returns-9",level:4},{value:"getTreasuryBalance",id:"gettreasurybalance",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-11",level:4},{value:"getVersion",id:"getversion",level:3},{value:"Returns",id:"returns-12",level:4},{value:"transferPolyx",id:"transferpolyx",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-13",level:4}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Client/Network/"},"api/client/Network"),".Network"),(0,r.kt)("p",null,"Handles all Network related functionality, including querying for historical events from middleware"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"geteventbyindexedargs"},"getEventByIndexedArgs"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getEventByIndexedArgs"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/EventIdentifier/"},(0,r.kt)("inlineCode",{parentName:"a"},"EventIdentifier")),">"),(0,r.kt)("p",null,"Retrieve a single event by any of its indexed arguments. Can be filtered using parameters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," uses the middlewareV2"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.eventArg0?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"event parameter value to filter by in position 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.eventArg1?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"event parameter value to filter by in position 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.eventArg2?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"event parameter value to filter by in position 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.eventId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/enums/Types/EventIdEnum/"},(0,r.kt)("inlineCode",{parentName:"a"},"EventIdEnum"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"type of the event to fetch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.moduleId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/enums/Types/ModuleIdEnum/"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleIdEnum"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"type of the module to fetch")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/EventIdentifier/"},(0,r.kt)("inlineCode",{parentName:"a"},"EventIdentifier")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"geteventsbyindexedargs"},"getEventsByIndexedArgs"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getEventsByIndexedArgs"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/EventIdentifier/"},(0,r.kt)("inlineCode",{parentName:"a"},"EventIdentifier")),"[]",">"),(0,r.kt)("p",null,"Retrieve a list of events. Can be filtered using parameters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," uses the middlewareV2"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.eventArg0?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"event parameter value to filter by in position 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.eventArg1?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"event parameter value to filter by in position 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.eventArg2?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"event parameter value to filter by in position 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.eventId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/enums/Types/EventIdEnum/"},(0,r.kt)("inlineCode",{parentName:"a"},"EventIdEnum"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"type of the event to fetch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.moduleId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/enums/Types/ModuleIdEnum/"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleIdEnum"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"type of the module to fetch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.size?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},"page size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.start?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},"page offset")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/EventIdentifier/"},(0,r.kt)("inlineCode",{parentName:"a"},"EventIdentifier")),"[]",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getlatestblock"},"getLatestBlock"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getLatestBlock"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("p",null,"Retrieve the number of the latest finalized block in the chain"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getmiddlewarelag"},"getMiddlewareLag"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getMiddlewareLag"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("p",null,"Get the number of blocks the middleware needs to process to be synced with chain.\nThe lag can be around somewhere upto 15 blocks, but this can increase if the block size being processed by the Middleware is too large.\nIf the lag is too large, its recommended to check the indexer health to make sure the Middleware is processing the blocks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," uses the middleware V2"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getmiddlewaremetadata"},"getMiddlewareMetadata"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getMiddlewareMetadata"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/MiddlewareMetadata/"},(0,r.kt)("inlineCode",{parentName:"a"},"MiddlewareMetadata")),">"),(0,r.kt)("p",null,"Retrieve middleware metadata.\nReturns null if middleware is disabled"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," uses the middleware V2"),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/MiddlewareMetadata/"},(0,r.kt)("inlineCode",{parentName:"a"},"MiddlewareMetadata")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getnetworkproperties"},"getNetworkProperties"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getNetworkProperties"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/NetworkProperties/"},(0,r.kt)("inlineCode",{parentName:"a"},"NetworkProperties")),">"),(0,r.kt)("p",null,"Retrieve information for the current network"),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/NetworkProperties/"},(0,r.kt)("inlineCode",{parentName:"a"},"NetworkProperties")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getprotocolfees"},"getProtocolFees"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getProtocolFees"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProtocolFees/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProtocolFees")),"[]",">"),(0,r.kt)("p",null,"Retrieve the protocol fees associated with running specific transactions"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.tags")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Generated/Types/#txtag"},(0,r.kt)("inlineCode",{parentName:"a"},"TxTag")),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"list of transaction tags (e.g. ","[TxTags.asset.CreateAsset, TxTags.asset.RegisterTicker]"," or ",'["asset.createAsset", "asset.registerTicker"]',")")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProtocolFees/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProtocolFees")),"[]",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getss58format"},"getSs58Format"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getSs58Format"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,"Retrieve the chain's SS58 format"),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettransactionbyhash"},"getTransactionByHash"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getTransactionByHash"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ExtrinsicDataWithFees/"},(0,r.kt)("inlineCode",{parentName:"a"},"ExtrinsicDataWithFees")),">"),(0,r.kt)("p",null,"Retrieve a transaction by hash"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," uses the middlewareV2"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.txHash")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"hash of the transaction")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ExtrinsicDataWithFees/"},(0,r.kt)("inlineCode",{parentName:"a"},"ExtrinsicDataWithFees")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettreasuryaccount"},"getTreasuryAccount"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getTreasuryAccount"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Account/"},(0,r.kt)("inlineCode",{parentName:"a"},"Account"))),(0,r.kt)("p",null,"Get the treasury wallet address"),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Account/"},(0,r.kt)("inlineCode",{parentName:"a"},"Account"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettreasurybalance"},"getTreasuryBalance"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getTreasuryBalance"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("p",null,"Get the Treasury POLYX balance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," can be subscribed to"),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getTreasuryBalance"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#unsubcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#subcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"SubCallback")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber"),">")))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#unsubcallback"},(0,r.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getversion"},"getVersion"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getVersion"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Fetch the current network version (e.g. 3.1.0)"),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transferpolyx"},"transferPolyx"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"transferPolyx"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("p",null,"Transfer an amount of POLYX to a specified Account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureMethod/#checkauthorization"},"transferPolyx.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Procedures/Types/TransferPolyxParams/"},(0,r.kt)("inlineCode",{parentName:"a"},"TransferPolyxParams")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"))}m.isMDXComponent=!0}}]);