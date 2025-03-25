"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[83060],{96552:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts","title":"Interface: ProcedureOpts","description":"api/procedures/types.ProcedureOpts","source":"@site/sdk-docs_versioned_docs/version-27.4.x/interfaces/API/Procedures/Types/ProcedureOpts/ProcedureOpts.md","sourceDirName":"interfaces/API/Procedures/Types/ProcedureOpts","slug":"/interfaces/API/Procedures/Types/ProcedureOpts/","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ProcedureOpts/","draft":false,"unlisted":false,"tags":[],"version":"27.4.x","frontMatter":{"id":"ProcedureOpts","title":"Interface: ProcedureOpts","sidebar_label":"ProcedureOpts"},"sidebar":"defaultSidebar","previous":{"title":"ProcedureMethod","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/ProcedureMethod/"},"next":{"title":"RedeemNftParams","permalink":"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/RedeemNftParams/"}}');var t=n(74848),o=n(28453);const r={id:"ProcedureOpts",title:"Interface: ProcedureOpts",sidebar_label:"ProcedureOpts"},c=void 0,d={},l=[{value:"Properties",id:"properties",level:2},{value:"mortality",id:"mortality",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"multiSigOpts",id:"multisigopts",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"nonce",id:"nonce",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"signingAccount",id:"signingaccount",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"skipChecks",id:"skipchecks",level:3},{value:"Defined in",id:"defined-in-4",level:4}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/",children:"api/procedures/types"}),".ProcedureOpts"]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"mortality",children:"mortality"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"mortality"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#mortalityprocedureopt",children:(0,t.jsx)(s.code,{children:"MortalityProcedureOpt"})})]}),"\n",(0,t.jsx)(s.p,{children:'This option allows for transactions that never expire, aka "immortal". By default, a transaction is only valid for approximately 5 minutes (250 blocks) after its construction. Allows for transaction construction to be decoupled from its submission, such as requiring manual approval for the signing or providing "at least once" guarantees.'}),"\n",(0,t.jsxs)(s.p,{children:["More information can be found ",(0,t.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/build-protocol-info#transaction-mortality",children:"here"}),". Note the Polymesh chain will ",(0,t.jsx)(s.strong,{children:"never"})," reap Accounts, so the risk of a replay attack is mitigated."]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L133",children:"api/procedures/types.ts:133"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"multisigopts",children:"multiSigOpts"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"multiSigOpts"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/MultiSigProcedureOpt/",children:(0,t.jsx)(s.code,{children:"MultiSigProcedureOpt"})})]}),"\n",(0,t.jsxs)(s.p,{children:["These options will only apply when the ",(0,t.jsx)(s.code,{children:"signingAccount"})," is a MultiSig signer and the transaction is being wrapped as a proposal"]}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L138",children:"api/procedures/types.ts:138"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"nonce",children:"nonce"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"nonce"}),": ",(0,t.jsx)(s.code,{children:"BigNumber"})," | ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),"> | () => ",(0,t.jsx)(s.code,{children:"BigNumber"})," | ",(0,t.jsx)(s.code,{children:"Promise"}),"<",(0,t.jsx)(s.code,{children:"BigNumber"}),">"]}),"\n",(0,t.jsx)(s.p,{children:"nonce value for signing the transaction"}),"\n",(0,t.jsxs)(s.p,{children:["An ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/",children:"Account"})," can directly fetch its current nonce by calling ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/#getcurrentnonce",children:"account.getCurrentNonce"}),". More information can be found at: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce",children:"https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"the passed value can be either the nonce itself or a function that returns the nonce. This allows, for example, passing a closure that increases the returned value every time it's called, or a function that fetches the nonce from the chain or a different source"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L126",children:"api/procedures/types.ts:126"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"signingaccount",children:"signingAccount"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"signingAccount"}),": ",(0,t.jsx)(s.code,{children:"string"})," | ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Account/",children:(0,t.jsx)(s.code,{children:"Account"})})]}),"\n",(0,t.jsx)(s.p,{children:"Account or address of a signing key to replace the current one (for this procedure only)"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L117",children:"api/procedures/types.ts:117"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"skipchecks",children:"skipChecks"}),"\n",(0,t.jsxs)(s.p,{children:["\u2022 ",(0,t.jsx)(s.code,{children:"Optional"})," ",(0,t.jsx)(s.strong,{children:"skipChecks"}),": ",(0,t.jsx)(s.a,{href:"/polymesh-documentation-site/sdk-docs/interfaces/API/Procedures/Types/SkipChecksOpt/",children:(0,t.jsx)(s.code,{children:"SkipChecksOpt"})})]}),"\n",(0,t.jsx)(s.p,{children:"This option allows for skipping checks for the Procedure. By default, all checks are performed."}),"\n",(0,t.jsx)(s.p,{children:"This can be useful while batching transactions which could have failed due to insufficient roles or permissions individually, but you don't want to fail the entire batch."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Note"})})}),"\n",(0,t.jsx)(s.p,{children:"even if the checks are skipped from being validated on the SDK, they will still be validated on the chain"}),"\n",(0,t.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/f8a937f04/src/api/procedures/types.ts#L147",children:"api/procedures/types.ts:147"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var i=n(96540);const t={},o=i.createContext(t);function r(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);