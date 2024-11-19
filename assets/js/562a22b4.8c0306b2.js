"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[71807],{26222:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"interfaces/Base/Types/TransactionPayload/TransactionPayload","title":"Interface: TransactionPayload","description":"base/types.TransactionPayload","source":"@site/sdk-docs_versioned_docs/version-25.1.x/interfaces/Base/Types/TransactionPayload/TransactionPayload.md","sourceDirName":"interfaces/Base/Types/TransactionPayload","slug":"/interfaces/Base/Types/TransactionPayload/","permalink":"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/Base/Types/TransactionPayload/","draft":false,"unlisted":false,"tags":[],"version":"25.1.x","frontMatter":{"id":"TransactionPayload","title":"Interface: TransactionPayload","sidebar_label":"TransactionPayload"},"sidebar":"defaultSidebar","previous":{"title":"SimpleEnumTransactionArgument","permalink":"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/Base/Types/SimpleEnumTransactionArgument/"}}');var a=s(74848),t=s(28453);const d={id:"TransactionPayload",title:"Interface: TransactionPayload",sidebar_label:"TransactionPayload"},o=void 0,r={},l=[{value:"Properties",id:"properties",level:2},{value:"metadata",id:"metadata",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"method",id:"method",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"multiSig",id:"multisig",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"payload",id:"payload",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"rawPayload",id:"rawpayload",level:3},{value:"Defined in",id:"defined-in-4",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/Base/Types/",children:"base/types"}),".TransactionPayload"]}),"\n",(0,a.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(n.h3,{id:"metadata",children:"metadata"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.code,{children:"Readonly"})," ",(0,a.jsx)(n.strong,{children:"metadata"}),": ",(0,a.jsx)(n.code,{children:"Record"}),"<",(0,a.jsx)(n.code,{children:"string"}),", ",(0,a.jsx)(n.code,{children:"string"}),">"]}),"\n",(0,a.jsx)(n.p,{children:"Additional information attached to the payload, such as IDs or memos about the transaction"}),"\n",(0,a.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/base/types.ts#L199",children:"base/types.ts:199"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"method",children:"method"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.code,{children:"Readonly"})," ",(0,a.jsx)(n.strong,{children:"method"}),": `0x${string}`"]}),"\n",(0,a.jsx)(n.p,{children:"A hex representation of the core extrinsic information. i.e. the extrinsic and args, but does not contain information about who is to sign the transaction."}),"\n",(0,a.jsx)(n.p,{children:"When submitting the transaction this will be used to construct the extrinsic, to which\nthe signer payload and signature will be attached to."}),"\n",(0,a.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/base/types.ts#L194",children:"base/types.ts:194"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"multisig",children:"multiSig"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.code,{children:"Readonly"})," ",(0,a.jsx)(n.strong,{children:"multiSig"}),": ",(0,a.jsx)(n.code,{children:"null"})," | ",(0,a.jsx)(n.code,{children:"string"})]}),"\n",(0,a.jsx)(n.p,{children:"The address of the MultiSig if the transaction is a proposal."}),"\n",(0,a.jsx)(n.p,{children:"Will be set only if the signing account is a MultiSig signer and the transaction is not approving or rejecting an existing proposal"}),"\n",(0,a.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/base/types.ts#L206",children:"base/types.ts:206"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"payload",children:"payload"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.code,{children:"Readonly"})," ",(0,a.jsx)(n.strong,{children:"payload"}),": ",(0,a.jsx)(n.code,{children:"SignerPayloadJSON"})]}),"\n",(0,a.jsx)(n.p,{children:'This is what a Polkadot signer ".signPayload" method expects'}),"\n",(0,a.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/base/types.ts#L178",children:"base/types.ts:178"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"rawpayload",children:"rawPayload"}),"\n",(0,a.jsxs)(n.p,{children:["\u2022 ",(0,a.jsx)(n.code,{children:"Readonly"})," ",(0,a.jsx)(n.strong,{children:"rawPayload"}),": ",(0,a.jsx)(n.code,{children:"SignerPayloadRaw"})]}),"\n",(0,a.jsx)(n.p,{children:'An alternative representation of the payload for which Polkadot signers providing ".signRaw" expect.'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"Note"})})}),"\n",(0,a.jsxs)(n.p,{children:["the signature should be prefixed with a single byte to indicate its type. Prepend a zero byte (",(0,a.jsx)(n.code,{children:"0x00"}),") for ed25519 or a ",(0,a.jsx)(n.code,{children:"0x01"})," byte to indicate sr25519 if the signer implementation does not already do so."]}),"\n",(0,a.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/base/types.ts#L185",children:"base/types.ts:185"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var i=s(96540);const a={},t=i.createContext(a);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);