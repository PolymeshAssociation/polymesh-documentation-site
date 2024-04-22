"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[24334],{59324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(74848),s=t(28453);const i={id:"ProcedureOpts",title:"Interface: ProcedureOpts",sidebar_label:"ProcedureOpts"},r=void 0,c={id:"interfaces/Types/ProcedureOpts/ProcedureOpts",title:"Interface: ProcedureOpts",description:"types.ProcedureOpts",source:"@site/sdk-docs_versioned_docs/version-23.0.x/interfaces/Types/ProcedureOpts/ProcedureOpts.md",sourceDirName:"interfaces/Types/ProcedureOpts",slug:"/interfaces/Types/ProcedureOpts/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.x/interfaces/Types/ProcedureOpts/",draft:!1,unlisted:!1,tags:[],version:"23.0.x",frontMatter:{id:"ProcedureOpts",title:"Interface: ProcedureOpts",sidebar_label:"ProcedureOpts"},sidebar:"defaultSidebar",previous:{title:"ProcedureMethod",permalink:"/polymesh-documentation-site/sdk-docs/23.0.x/interfaces/Types/ProcedureMethod/"},next:{title:"ProtocolFees",permalink:"/polymesh-documentation-site/sdk-docs/23.0.x/interfaces/Types/ProtocolFees/"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"mortality",id:"mortality",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"nonce",id:"nonce",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"signingAccount",id:"signingaccount",level:3},{value:"Defined in",id:"defined-in-2",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/23.0.x/modules/Types/",children:"types"}),".ProcedureOpts"]}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.h3,{id:"mortality",children:"mortality"}),"\n",(0,o.jsxs)(n.p,{children:["\u2022 ",(0,o.jsx)(n.code,{children:"Optional"})," ",(0,o.jsx)(n.strong,{children:"mortality"}),": ",(0,o.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/23.0.x/modules/Types/#mortalityprocedureopt",children:(0,o.jsx)(n.code,{children:"MortalityProcedureOpt"})})]}),"\n",(0,o.jsx)(n.p,{children:'This option allows for transactions that never expire, aka "immortal". By default, a transaction is only valid for approximately 5 minutes (250 blocks) after its construction. Allows for transaction construction to be decoupled from its submission, such as requiring manual approval for the signing or providing "at least once" guarantees.'}),"\n",(0,o.jsxs)(n.p,{children:["More information can be found ",(0,o.jsx)(n.a,{href:"https://wiki.polkadot.network/docs/build-protocol-info#transaction-mortality",children:"here"}),". Note the Polymesh chain will ",(0,o.jsx)(n.strong,{children:"never"})," reap Accounts, so the risk of a replay attack is mitigated."]}),"\n",(0,o.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1517",children:"types/index.ts:1517"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"nonce",children:"nonce"}),"\n",(0,o.jsxs)(n.p,{children:["\u2022 ",(0,o.jsx)(n.code,{children:"Optional"})," ",(0,o.jsx)(n.strong,{children:"nonce"}),": ",(0,o.jsx)(n.code,{children:"BigNumber"})," | ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"BigNumber"}),"> | () => ",(0,o.jsx)(n.code,{children:"BigNumber"})," | ",(0,o.jsx)(n.code,{children:"Promise"}),"<",(0,o.jsx)(n.code,{children:"BigNumber"}),">"]}),"\n",(0,o.jsx)(n.p,{children:"nonce value for signing the transaction"}),"\n",(0,o.jsxs)(n.p,{children:["An ",(0,o.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/23.0.x/classes/API/Entities/Account/",children:"Account"})," can directly fetch its current nonce by calling ",(0,o.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/23.0.x/classes/API/Entities/Account/#getcurrentnonce",children:"account.getCurrentNonce"}),". More information can be found at: ",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce",children:"https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"Note"})})}),"\n",(0,o.jsx)(n.p,{children:"the passed value can be either the nonce itself or a function that returns the nonce. This allows, for example, passing a closure that increases the returned value every time it's called, or a function that fetches the nonce from the chain or a different source"}),"\n",(0,o.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1510",children:"types/index.ts:1510"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"signingaccount",children:"signingAccount"}),"\n",(0,o.jsxs)(n.p,{children:["\u2022 ",(0,o.jsx)(n.code,{children:"Optional"})," ",(0,o.jsx)(n.strong,{children:"signingAccount"}),": ",(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/23.0.x/classes/API/Entities/Account/",children:(0,o.jsx)(n.code,{children:"Account"})})]}),"\n",(0,o.jsx)(n.p,{children:"Account or address of a signing key to replace the current one (for this procedure only)"}),"\n",(0,o.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/2c78f6c34/src/types/index.ts#L1501",children:"types/index.ts:1501"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);