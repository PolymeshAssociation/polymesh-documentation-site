"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[10969],{5146:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"classes/API/Client/Network/Network","title":"Class: Network","description":"api/client/Network.Network","source":"@site/sdk-docs_versioned_docs/version-23.2.x/classes/API/Client/Network/Network.md","sourceDirName":"classes/API/Client/Network","slug":"/classes/API/Client/Network/","permalink":"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Client/Network/","draft":false,"unlisted":false,"tags":[],"version":"23.2.x","frontMatter":{"id":"Network","title":"Class: Network","sidebar_label":"Network"},"sidebar":"defaultSidebar","previous":{"title":"Identities","permalink":"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Client/Identities/"},"next":{"title":"Polymesh","permalink":"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Client/Polymesh/"}}');var i=t(74848),d=t(28453);const l={id:"Network",title:"Class: Network",sidebar_label:"Network"},r=void 0,c={},h=[{value:"Methods",id:"methods",level:2},{value:"getEventByIndexedArgs",id:"geteventbyindexedargs",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getEventsByIndexedArgs",id:"geteventsbyindexedargs",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getLatestBlock",id:"getlatestblock",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getMiddlewareLag",id:"getmiddlewarelag",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getMiddlewareMetadata",id:"getmiddlewaremetadata",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getNetworkProperties",id:"getnetworkproperties",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"getProtocolFees",id:"getprotocolfees",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"getSs58Format",id:"getss58format",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getTransactionByHash",id:"gettransactionbyhash",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"getTreasuryAccount",id:"gettreasuryaccount",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getTreasuryBalance",id:"gettreasurybalance",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"getVersion",id:"getversion",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"transferPolyx",id:"transferpolyx",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-13",level:4}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/API/Client/Network/",children:"api/client/Network"}),".Network"]}),"\n",(0,i.jsx)(s.p,{children:"Handles all Network related functionality, including querying for historical events from middleware"}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"geteventbyindexedargs",children:"getEventByIndexedArgs"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getEventByIndexedArgs"}),"(",(0,i.jsx)(s.code,{children:"opts"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/EventIdentifier/",children:(0,i.jsx)(s.code,{children:"EventIdentifier"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Retrieve a single event by any of its indexed arguments. Can be filtered using parameters"}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"Object"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.eventArg0?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"event parameter value to filter by in position 0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.eventArg1?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"event parameter value to filter by in position 1"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.eventArg2?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"event parameter value to filter by in position 2"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.eventId"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/EventIdEnum/",children:(0,i.jsx)(s.code,{children:"EventIdEnum"})})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"type of the event to fetch"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.moduleId"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/ModuleIdEnum/",children:(0,i.jsx)(s.code,{children:"ModuleIdEnum"})})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"type of the module to fetch"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/EventIdentifier/",children:(0,i.jsx)(s.code,{children:"EventIdentifier"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsx)(s.p,{children:"uses the middlewareV2"}),"\n",(0,i.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L159",children:"api/client/Network.ts:159"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"geteventsbyindexedargs",children:"getEventsByIndexedArgs"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getEventsByIndexedArgs"}),"(",(0,i.jsx)(s.code,{children:"opts"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/EventIdentifier/",children:(0,i.jsx)(s.code,{children:"EventIdentifier"})}),"[]>"]}),"\n",(0,i.jsx)(s.p,{children:"Retrieve a list of events. Can be filtered using parameters"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"Object"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.eventArg0?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"event parameter value to filter by in position 0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.eventArg1?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"event parameter value to filter by in position 1"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.eventArg2?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"event parameter value to filter by in position 2"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.eventId"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/EventIdEnum/",children:(0,i.jsx)(s.code,{children:"EventIdEnum"})})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"type of the event to fetch"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.moduleId"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/ModuleIdEnum/",children:(0,i.jsx)(s.code,{children:"ModuleIdEnum"})})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"type of the module to fetch"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.size?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"BigNumber"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"page size"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.start?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"BigNumber"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"page offset"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/EventIdentifier/",children:(0,i.jsx)(s.code,{children:"EventIdentifier"})}),"[]>"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsx)(s.p,{children:"uses the middlewareV2"}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L205",children:"api/client/Network.ts:205"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getlatestblock",children:"getLatestBlock"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getLatestBlock"}),"(): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Retrieve the number of the latest finalized block in the chain"}),"\n",(0,i.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L53",children:"api/client/Network.ts:53"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getmiddlewarelag",children:"getMiddlewareLag"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getMiddlewareLag"}),"(): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Get the number of blocks the middleware needs to process to be synced with chain.\nThe lag can be around somewhere upto 15 blocks, but this can increase if the block size being processed by the Middleware is too large.\nIf the lag is too large, its recommended to check the indexer health to make sure the Middleware is processing the blocks."}),"\n",(0,i.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsx)(s.p,{children:"uses the middleware V2"}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L356",children:"api/client/Network.ts:356"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getmiddlewaremetadata",children:"getMiddlewareMetadata"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getMiddlewareMetadata"}),"(): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/MiddlewareMetadata/",children:(0,i.jsx)(s.code,{children:"MiddlewareMetadata"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Retrieve middleware metadata.\nReturns null if middleware is disabled"}),"\n",(0,i.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/MiddlewareMetadata/",children:(0,i.jsx)(s.code,{children:"MiddlewareMetadata"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsx)(s.p,{children:"uses the middleware V2"}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L345",children:"api/client/Network.ts:345"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getnetworkproperties",children:"getNetworkProperties"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getNetworkProperties"}),"(): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/NetworkProperties/",children:(0,i.jsx)(s.code,{children:"NetworkProperties"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Retrieve information for the current network"}),"\n",(0,i.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/NetworkProperties/",children:(0,i.jsx)(s.code,{children:"NetworkProperties"})}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L74",children:"api/client/Network.ts:74"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getprotocolfees",children:"getProtocolFees"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getProtocolFees"}),"(",(0,i.jsx)(s.code,{children:"args"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProtocolFees/",children:(0,i.jsx)(s.code,{children:"ProtocolFees"})}),"[]>"]}),"\n",(0,i.jsx)(s.p,{children:"Retrieve the protocol fees associated with running specific transactions"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"args"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"Object"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"args.tags"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Generated/Types/#txtag",children:(0,i.jsx)(s.code,{children:"TxTag"})}),"[]"]}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:'list of transaction tags (e.g. [TxTags.asset.CreateAsset, TxTags.asset.RegisterTicker] or ["asset.createAsset", "asset.registerTicker"])'})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProtocolFees/",children:(0,i.jsx)(s.code,{children:"ProtocolFees"})}),"[]>"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L98",children:"api/client/Network.ts:98"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getss58format",children:"getSs58Format"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getSs58Format"}),"(): ",(0,i.jsx)(s.code,{children:"BigNumber"})]}),"\n",(0,i.jsx)(s.p,{children:"Retrieve the chain's SS58 format"}),"\n",(0,i.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"BigNumber"})}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L67",children:"api/client/Network.ts:67"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"gettransactionbyhash",children:"getTransactionByHash"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getTransactionByHash"}),"(",(0,i.jsx)(s.code,{children:"opts"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ExtrinsicDataWithFees/",children:(0,i.jsx)(s.code,{children:"ExtrinsicDataWithFees"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Retrieve a transaction by hash"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"Object"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"-"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts.txHash"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"hash of the transaction"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-8",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"null"})," | ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ExtrinsicDataWithFees/",children:(0,i.jsx)(s.code,{children:"ExtrinsicDataWithFees"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsx)(s.p,{children:"uses the middlewareV2"}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L253",children:"api/client/Network.ts:253"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"gettreasuryaccount",children:"getTreasuryAccount"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getTreasuryAccount"}),"(): ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Account/",children:(0,i.jsx)(s.code,{children:"Account"})})]}),"\n",(0,i.jsx)(s.p,{children:"Get the treasury wallet address"}),"\n",(0,i.jsx)(s.h4,{id:"returns-9",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/classes/API/Entities/Account/",children:(0,i.jsx)(s.code,{children:"Account"})})}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L105",children:"api/client/Network.ts:105"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"gettreasurybalance",children:"getTreasuryBalance"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getTreasuryBalance"}),"(): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Get the Treasury POLYX balance"}),"\n",(0,i.jsx)(s.h4,{id:"returns-10",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsx)(s.p,{children:"can be subscribed to"}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L118",children:"api/client/Network.ts:118"})}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getTreasuryBalance"}),"(",(0,i.jsx)(s.code,{children:"callback"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Types/#unsubcallback",children:(0,i.jsx)(s.code,{children:"UnsubCallback"})}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"callback"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Types/#subcallback",children:(0,i.jsx)(s.code,{children:"SubCallback"})}),"<",(0,i.jsx)(s.code,{children:"BigNumber"}),">"]})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-11",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Types/#unsubcallback",children:(0,i.jsx)(s.code,{children:"UnsubCallback"})}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L119",children:"api/client/Network.ts:119"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"getversion",children:"getVersion"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"getVersion"}),"(): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"string"}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Fetch the current network version (e.g. 3.1.0)"}),"\n",(0,i.jsx)(s.h4,{id:"returns-12",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"string"}),">"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L60",children:"api/client/Network.ts:60"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"transferpolyx",children:"transferPolyx"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"transferPolyx"}),"(",(0,i.jsx)(s.code,{children:"args"}),", ",(0,i.jsx)(s.code,{children:"opts?"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Types/#genericpolymeshtransaction",children:(0,i.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,i.jsx)(s.code,{children:"void"}),", ",(0,i.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,i.jsx)(s.p,{children:"Transfer an amount of POLYX to a specified Account"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"args"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Procedures/Types/TransferPolyxParams/",children:(0,i.jsx)(s.code,{children:"TransferPolyxParams"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"opts?"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProcedureOpts/",children:(0,i.jsx)(s.code,{children:"ProcedureOpts"})})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-13",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/Types/#genericpolymeshtransaction",children:(0,i.jsx)(s.code,{children:"GenericPolymeshTransaction"})}),"<",(0,i.jsx)(s.code,{children:"void"}),", ",(0,i.jsx)(s.code,{children:"void"}),">>"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Note"})})}),"\n",(0,i.jsxs)(s.p,{children:["this method is of type ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProcedureMethod/",children:"ProcedureMethod"}),", which means you can call ",(0,i.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/ProcedureMethod/#checkauthorization",children:"transferPolyx.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/client/Network.ts#L144",children:"api/client/Network.ts:144"})})]})}function a(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>r});var n=t(96540);const i={},d=n.createContext(i);function l(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);