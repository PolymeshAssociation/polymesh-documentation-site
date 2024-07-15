"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[66181],{63895:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=i(74848),t=i(28453);const r={id:"CreateNftCollectionParams",title:"Interface: CreateNftCollectionParams",sidebar_label:"CreateNftCollectionParams"},o=void 0,d={id:"interfaces/API/Procedures/Types/CreateNftCollectionParams/CreateNftCollectionParams",title:"Interface: CreateNftCollectionParams",description:"api/procedures/types.CreateNftCollectionParams",source:"@site/sdk-docs_versioned_docs/version-23.2.x/interfaces/API/Procedures/Types/CreateNftCollectionParams/CreateNftCollectionParams.md",sourceDirName:"interfaces/API/Procedures/Types/CreateNftCollectionParams",slug:"/interfaces/API/Procedures/Types/CreateNftCollectionParams/",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Procedures/Types/CreateNftCollectionParams/",draft:!1,unlisted:!1,tags:[],version:"23.2.x",frontMatter:{id:"CreateNftCollectionParams",title:"Interface: CreateNftCollectionParams",sidebar_label:"CreateNftCollectionParams"},sidebar:"defaultSidebar",previous:{title:"CreateMultiSigParams",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Procedures/Types/CreateMultiSigParams/"},next:{title:"CreateTransactionBatchParams",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Procedures/Types/CreateTransactionBatchParams/"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:"collectionKeys",id:"collectionkeys",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"documents",id:"documents",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"nftType",id:"nfttype",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"securityIdentifiers",id:"securityidentifiers",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"ticker",id:"ticker",level:3},{value:"Defined in",id:"defined-in-5",level:4}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/API/Procedures/Types/",children:"api/procedures/types"}),".CreateNftCollectionParams"]}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"collectionkeys",children:"collectionKeys"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"collectionKeys"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/API/Procedures/Types/#collectionkeyinput",children:(0,n.jsx)(s.code,{children:"CollectionKeyInput"})}),"[]"]}),"\n",(0,n.jsx)(s.p,{children:"The required metadata values each NFT in the collection will have"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Note"})})}),"\n",(0,n.jsxs)(s.p,{children:["Images \u2014 Most Polymesh networks (mainnet, testnet, etc.) have global metadata keys registered to help standardize displaying images\nIf ",(0,n.jsx)(s.code,{children:"imageUri"})," is specified as a collection key, then each token will need to be issued with an image URI."]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L379",children:"api/procedures/types.ts:379"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"documents",children:"documents"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.code,{children:"Optional"})," ",(0,n.jsx)(s.strong,{children:"documents"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/AssetDocument/",children:(0,n.jsx)(s.code,{children:"AssetDocument"})}),"[]"]}),"\n",(0,n.jsx)(s.p,{children:"Links to off chain documents related to the NftCollection"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L383",children:"api/procedures/types.ts:383"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"name",children:"name"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.code,{children:"Optional"})," ",(0,n.jsx)(s.strong,{children:"name"}),": ",(0,n.jsx)(s.code,{children:"string"})]}),"\n",(0,n.jsxs)(s.p,{children:["The collection name. defaults to ",(0,n.jsx)(s.code,{children:"ticker"})]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L363",children:"api/procedures/types.ts:363"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"nfttype",children:"nftType"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"nftType"}),": ",(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"BigNumber"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Throws"})})}),"\n",(0,n.jsx)(s.p,{children:"if provided string that does not have a custom type"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Throws"})})}),"\n",(0,n.jsx)(s.p,{children:"if provided a BigNumber that does not correspond to a custom type"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L368",children:"api/procedures/types.ts:368"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"securityidentifiers",children:"securityIdentifiers"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.code,{children:"Optional"})," ",(0,n.jsx)(s.strong,{children:"securityIdentifiers"}),": ",(0,n.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/SecurityIdentifier/",children:(0,n.jsx)(s.code,{children:"SecurityIdentifier"})}),"[]"]}),"\n",(0,n.jsx)(s.p,{children:"array of domestic or international alphanumeric security identifiers for the Asset (e.g. ISIN, CUSIP, FIGI)"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L372",children:"api/procedures/types.ts:372"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"ticker",children:"ticker"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"ticker"}),": ",(0,n.jsx)(s.code,{children:"string"})]}),"\n",(0,n.jsx)(s.p,{children:"The primary identifier for the collection. The ticker must either be free, or the signer has appropriate permissions if reserved"}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/procedures/types.ts#L359",children:"api/procedures/types.ts:359"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>d});var n=i(96540);const t={},r=n.createContext(t);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);