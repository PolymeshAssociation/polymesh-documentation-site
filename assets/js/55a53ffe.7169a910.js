"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[89163],{23653:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var s=n(74848),t=n(28453);const d={id:"HumanReadable",title:"Interface: HumanReadable",sidebar_label:"HumanReadable"},r=void 0,o={id:"interfaces/API/Entities/AuthorizationRequest/HumanReadable/HumanReadable",title:"Interface: HumanReadable",description:"api/entities/AuthorizationRequest.HumanReadable",source:"@site/sdk-docs_versioned_docs/version-23.2.x/interfaces/API/Entities/AuthorizationRequest/HumanReadable/HumanReadable.md",sourceDirName:"interfaces/API/Entities/AuthorizationRequest/HumanReadable",slug:"/interfaces/API/Entities/AuthorizationRequest/HumanReadable/",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/AuthorizationRequest/HumanReadable/",draft:!1,unlisted:!1,tags:[],version:"23.2.x",frontMatter:{id:"HumanReadable",title:"Interface: HumanReadable",sidebar_label:"HumanReadable"},sidebar:"defaultSidebar",previous:{title:"UniqueIdentifiers",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/Asset/Types/UniqueIdentifiers/"},next:{title:"Params",permalink:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/API/Entities/AuthorizationRequest/Params/"}},a={},l=[{value:"Properties",id:"properties",level:2},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"issuer",id:"issuer",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-4",level:4}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/modules/API/Entities/AuthorizationRequest/",children:"api/entities/AuthorizationRequest"}),".HumanReadable"]}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(i.h3,{id:"data",children:"data"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"data"}),": { ",(0,s.jsx)(i.code,{children:"type"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/AuthorizationType/#attestprimarykeyrotation",children:(0,s.jsx)(i.code,{children:"AttestPrimaryKeyRotation"})})," ; ",(0,s.jsx)(i.code,{children:"value"}),": ",(0,s.jsx)(i.code,{children:"string"}),"  } | { ",(0,s.jsx)(i.code,{children:"type"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/AuthorizationType/#rotateprimarykey",children:(0,s.jsx)(i.code,{children:"RotatePrimaryKey"})}),"  } | { ",(0,s.jsx)(i.code,{children:"type"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/AuthorizationType/#joinidentity",children:(0,s.jsx)(i.code,{children:"JoinIdentity"})})," ; ",(0,s.jsx)(i.code,{children:"value"}),": { assets: { values: string[]; type: PermissionType; } | null; transactions: { exceptions?: TxTag[] | undefined; values: (TxTag | ModuleName)[]; type: PermissionType; } | null; transactionGroups: TxGroup[]; portfolios: { ...; } | null; }  } | { ",(0,s.jsx)(i.code,{children:"type"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/AuthorizationType/#portfoliocustody",children:(0,s.jsx)(i.code,{children:"PortfolioCustody"})})," ; ",(0,s.jsx)(i.code,{children:"value"}),": { did: string; id?: string | undefined; }  } | { ",(0,s.jsx)(i.code,{children:"type"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/AuthorizationType/#becomeagent",children:(0,s.jsx)(i.code,{children:"BecomeAgent"})})," ; ",(0,s.jsx)(i.code,{children:"value"}),": { id: string; ticker: string; } | { type: PermissionGroupType; ticker: string; }  } | { ",(0,s.jsx)(i.code,{children:"type"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/AuthorizationType/#addrelayerpayingkey",children:(0,s.jsx)(i.code,{children:"AddRelayerPayingKey"})})," ; ",(0,s.jsx)(i.code,{children:"value"}),": { beneficiary: string; subsidizer: string; allowance: string; }  } | { ",(0,s.jsx)(i.code,{children:"type"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/AuthorizationType/#rotateprimarykeytosecondary",children:(0,s.jsx)(i.code,{children:"RotatePrimaryKeyToSecondary"})})," ; ",(0,s.jsx)(i.code,{children:"value"}),": { assets: { values: string[]; type: PermissionType; } | null; transactions: { exceptions?: TxTag[] | undefined; values: (TxTag | ModuleName)[]; type: PermissionType; } | null; transactionGroups: TxGroup[]; portfolios: { ...; } | null; }  } | { ",(0,s.jsx)(i.code,{children:"type"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/AuthorizationType/#transferticker",children:(0,s.jsx)(i.code,{children:"TransferTicker"})})," | ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/AuthorizationType/#addmultisigsigner",children:(0,s.jsx)(i.code,{children:"AddMultiSigSigner"})})," | ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/enums/Types/AuthorizationType/#transferassetownership",children:(0,s.jsx)(i.code,{children:"TransferAssetOwnership"})})," ; ",(0,s.jsx)(i.code,{children:"value"}),": ",(0,s.jsx)(i.code,{children:"string"}),"  }"]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/AuthorizationRequest.ts#L36",children:"api/entities/AuthorizationRequest.ts:36"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"expiry",children:"expiry"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"expiry"}),": ",(0,s.jsx)(i.code,{children:"null"})," | ",(0,s.jsx)(i.code,{children:"string"})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/AuthorizationRequest.ts#L34",children:"api/entities/AuthorizationRequest.ts:34"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"id",children:"id"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"id"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/AuthorizationRequest.ts#L37",children:"api/entities/AuthorizationRequest.ts:37"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"issuer",children:"issuer"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"issuer"}),": ",(0,s.jsx)(i.code,{children:"string"})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/AuthorizationRequest.ts#L33",children:"api/entities/AuthorizationRequest.ts:33"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"target",children:"target"}),"\n",(0,s.jsxs)(i.p,{children:["\u2022 ",(0,s.jsx)(i.strong,{children:"target"}),": ",(0,s.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/23.2.x/interfaces/Types/SignerValue/",children:(0,s.jsx)(i.code,{children:"SignerValue"})})]}),"\n",(0,s.jsx)(i.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/daafaa68f/src/api/entities/AuthorizationRequest.ts#L35",children:"api/entities/AuthorizationRequest.ts:35"})})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var s=n(96540);const t={},d=s.createContext(t);function r(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);