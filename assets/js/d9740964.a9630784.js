"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[20736],{28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>o});var i=n(96540);const t={},r=i.createContext(t);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:s},e.children)}},36038:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"interfaces/API/Procedures/Types/CreateNftCollectionParams/CreateNftCollectionParams","title":"Interface: CreateNftCollectionParams","description":"api/procedures/types.CreateNftCollectionParams","source":"@site/sdk-docs_versioned_docs/version-27.1.x/interfaces/API/Procedures/Types/CreateNftCollectionParams/CreateNftCollectionParams.md","sourceDirName":"interfaces/API/Procedures/Types/CreateNftCollectionParams","slug":"/interfaces/API/Procedures/Types/CreateNftCollectionParams/","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateNftCollectionParams/","draft":false,"unlisted":false,"tags":[],"version":"27.1.x","frontMatter":{"id":"CreateNftCollectionParams","title":"Interface: CreateNftCollectionParams","sidebar_label":"CreateNftCollectionParams"},"sidebar":"autogeneratedSidebar","previous":{"title":"CreateMultiSigParams","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateMultiSigParams/"},"next":{"title":"CreateTransactionBatchParams","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/CreateTransactionBatchParams/"}}');var t=n(74848),r=n(28453);const d={id:"CreateNftCollectionParams",title:"Interface: CreateNftCollectionParams",sidebar_label:"CreateNftCollectionParams"},o=void 0,c={},l=[{value:"Properties",id:"properties",level:2},{value:"assetId",id:"assetid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"collectionKeys",id:"collectionkeys",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"documents",id:"documents",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"fundingRound",id:"fundinground",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"nftType",id:"nfttype",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"securityIdentifiers",id:"securityidentifiers",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"ticker",id:"ticker",level:3},{value:"Defined in",id:"defined-in-7",level:4}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/",children:"api/procedures/types"}),".CreateNftCollectionParams"]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"assetid",children:"assetId"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"assetId"}),": ",(0,t.jsx)(s.code,{children:"string"})]}),"\n",(0,t.jsxs)(s.p,{children:["The ID of the asset to be used to create the collection.\nIf no assetId is provided, a new asset with ",(0,t.jsx)(s.code,{children:"NonFungible"})," asset type will be created"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsxs)(s.p,{children:["for spec version before 7.x, this value is overwritten by ",(0,t.jsx)(s.code,{children:"ticker"})," value"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L738",children:"api/procedures/types.ts:738"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"collectionkeys",children:"collectionKeys"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"collectionKeys"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#collectionkeyinput",children:(0,t.jsx)(s.code,{children:"CollectionKeyInput"})}),"[]"]}),"\n",(0,t.jsx)(s.p,{children:"The required metadata values each NFT in the collection will have"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsxs)(s.p,{children:["Images \u2014 Most Polymesh networks (mainnet, testnet, etc.) have global metadata keys registered to help standardize displaying images\nIf ",(0,t.jsx)(s.code,{children:"imageUri"})," is specified as a collection key, then each token will need to be issued with an image URI."]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L767",children:"api/procedures/types.ts:767"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"documents",children:"documents"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"documents"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/AssetDocument/",children:(0,t.jsx)(s.code,{children:"AssetDocument"})}),"[]"]}),"\n",(0,t.jsx)(s.p,{children:"Links to off chain documents related to the NftCollection"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L771",children:"api/procedures/types.ts:771"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"fundinground",children:"fundingRound"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"fundingRound"}),": ",(0,t.jsx)(s.code,{children:"string"})]}),"\n",(0,t.jsx)(s.p,{children:"A optional field that can be used to provide information about the funding state of the asset"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L776",children:"api/procedures/types.ts:776"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"name",children:"name"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"name"}),": ",(0,t.jsx)(s.code,{children:"string"})]}),"\n",(0,t.jsxs)(s.p,{children:["The collection name. defaults to ",(0,t.jsx)(s.code,{children:"ticker"})]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L751",children:"api/procedures/types.ts:751"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"nfttype",children:"nftType"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.strong,{children:"nftType"}),": ",(0,t.jsx)(s.code,{children:"string"})," | ",(0,t.jsx)(s.code,{children:"BigNumber"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Throws"})})}),"\n",(0,t.jsx)(s.p,{children:"if provided string that does not have a custom type"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Throws"})})}),"\n",(0,t.jsx)(s.p,{children:"if provided a BigNumber that does not correspond to a custom type"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L756",children:"api/procedures/types.ts:756"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"securityidentifiers",children:"securityIdentifiers"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"securityIdentifiers"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Entities/Asset/Types/SecurityIdentifier/",children:(0,t.jsx)(s.code,{children:"SecurityIdentifier"})}),"[]"]}),"\n",(0,t.jsx)(s.p,{children:"array of domestic or international alphanumeric security identifiers for the Asset (e.g. ISIN, CUSIP, FIGI)"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L760",children:"api/procedures/types.ts:760"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"ticker",children:"ticker"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"ticker"}),": ",(0,t.jsx)(s.code,{children:"string"})]}),"\n",(0,t.jsx)(s.p,{children:"The primary identifier for the collection.\nThe ticker must either be free, or the signer has appropriate permissions if reserved."}),"\n",(0,t.jsxs)(s.p,{children:["Since spec version 7.x, this value (if provided) is then linked to ",(0,t.jsx)(s.code,{children:"assetId"})," asset"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"This value is mandatory for spec version before 7.x"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/procedures/types.ts#L747",children:"api/procedures/types.ts:747"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);