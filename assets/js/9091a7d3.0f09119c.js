"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[42009],{15588:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"core-concepts/settlement/off-chain-settlement","title":"Off-Chain Settlement","description":"Receipt Management","source":"@site/docs/200-core-concepts/060-settlement/030-off-chain.md","sourceDirName":"200-core-concepts/060-settlement","slug":"/settlement/off-chain","permalink":"/polymesh-documentation-site/settlement/off-chain","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/200-core-concepts/060-settlement/030-off-chain.md","tags":[{"inline":true,"label":"settlement","permalink":"/polymesh-documentation-site/tags/settlement"},{"inline":true,"label":"off-chain","permalink":"/polymesh-documentation-site/tags/off-chain"}],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Off-Chain Settlement","description":"Receipt Management","id":"off-chain-settlement","slug":"/settlement/off-chain","sidebar_label":"Off-Chain Settlement","tags":["settlement","off-chain"]},"sidebar":"docs","previous":{"title":"Settlement Mediators","permalink":"/polymesh-documentation-site/settlement/mediators"},"next":{"title":"Settlement Sequence Diagrams","permalink":"/polymesh-documentation-site/core-concepts/settlement/settlement-diagrams"}}');var s=i(74848),r=i(28453);const a={title:"Off-Chain Settlement",description:"Receipt Management",id:"off-chain-settlement",slug:"/settlement/off-chain",sidebar_label:"Off-Chain Settlement",tags:["settlement","off-chain"]},l=void 0,o={},c=[{value:"Overview",id:"overview",level:2},{value:"Common Use Cases",id:"common-use-cases",level:2},{value:"Off-Chain Legs",id:"off-chain-legs",level:2},{value:"Receipt Signers",id:"receipt-signers",level:2},{value:"Managing Receipt Signers",id:"managing-receipt-signers",level:3},{value:"Technical Details",id:"technical-details",level:2},{value:"Receipt Requirements",id:"receipt-requirements",level:3},{value:"Receipt Process",id:"receipt-process",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Off-chain settlement legs in Polymesh enable the representation and verification of asset transfers that occur outside the blockchain. This can include traditional financial transactions like bank transfers, physical asset deliveries, transfers on other blockchain networks, or cross-chain settlement processes. This mechanism is essential for integrating both traditional financial infrastructure and other digital systems with Polymesh's on-chain settlement process."}),"\n",(0,s.jsx)(n.p,{children:"Each off-chain leg requires verification through a receipt signed by an authorized venue signer, providing cryptographic proof that the external transfer has occurred."}),"\n",(0,s.jsx)(n.h2,{id:"common-use-cases",children:"Common Use Cases"}),"\n",(0,s.jsx)(n.p,{children:"Off-chain settlement legs and receipts enable various integration scenarios:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Traditional Banking"}),": Coordinating bank wire transfers or other fiat currency payments"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Physical Settlement"}),": Managing delivery of physical assets, securities certificates, or commodities"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Systems"}),": Integration with traditional payment networks or financial messaging systems"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cross-Chain Settlement"}),": Coordinating settlements across multiple blockchain networks where assets on different chains are exchanged"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cross-Chain Bridges"}),": Facilitating asset transfers or wrapped token minting/burning between networks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"External Trading Platforms"}),": Integrating with existing trading or settlement systems"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"off-chain-legs",children:"Off-Chain Legs"}),"\n",(0,s.jsx)(n.p,{children:"An off-chain leg represents any transfer or payment that happens outside of Polymesh. Common examples include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bank wire transfers or ACH payments"}),"\n",(0,s.jsx)(n.li,{children:"Cash payments or deposits"}),"\n",(0,s.jsx)(n.li,{children:"Physical asset or certificate deliveries"}),"\n",(0,s.jsx)(n.li,{children:"Credit card or payment processor transactions"}),"\n",(0,s.jsx)(n.li,{children:"Cross-chain settlements and token transfers"}),"\n",(0,s.jsx)(n.li,{children:"Bridge protocol operations"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When creating a settlement instruction that includes off-chain legs, each leg must specify:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/settlement/venues",children:"venue"})," that will validate the transfer"]}),"\n",(0,s.jsx)(n.li,{children:"The parties involved (sender and receiver)"}),"\n",(0,s.jsx)(n.li,{children:"The asset and amount being transferred"}),"\n",(0,s.jsx)(n.li,{children:"Any additional metadata about the transfer"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Settlement instructions containing off-chain legs must be associated with a specific ",(0,s.jsx)(n.a,{href:"/settlement/venues",children:"venue"})," - they cannot use the default global venue. This ensures proper authorization and receipt validation."]})}),"\n",(0,s.jsx)(n.h2,{id:"receipt-signers",children:"Receipt Signers"}),"\n",(0,s.jsx)(n.p,{children:"Receipt signers are keys authorized by a venue owner to validate off-chain transfers by signing receipts. They serve several key functions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Transfer Validation"}),": Verifying that off-chain transfers have occurred"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Receipt Generation"}),": Creating signed proofs of transfer completion"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Settlement Integration"}),": Bridging external systems with on-chain settlement"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"managing-receipt-signers",children:"Managing Receipt Signers"}),"\n",(0,s.jsx)(n.p,{children:"Venue owners can manage receipt signers using:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"settlement::set_venue_signers"}),": Add or remove authorized receipt signers for a venue"]}),"\n",(0,s.jsx)(n.li,{children:"A signing key does not need to be associated with a Polymesh identity however the cryptographic proof generated by the signer must be submitted by a key with a valid Polymesh Identity."}),"\n",(0,s.jsx)(n.li,{children:"Multiple signers can be authorized for a single venue"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"technical-details",children:"Technical Details"}),"\n",(0,s.jsx)(n.h3,{id:"receipt-requirements",children:"Receipt Requirements"}),"\n",(0,s.jsx)(n.p,{children:"For an off-chain leg to be considered complete:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The receipt must be signed by a currently authorized signer for the venue"}),"\n",(0,s.jsx)(n.li,{children:"The signature must be cryptographically valid"}),"\n",(0,s.jsx)(n.li,{children:"The receipt must correctly reference the instruction and leg IDs"}),"\n",(0,s.jsx)(n.li,{children:"The receipt cannot be withdrawn once submitted"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If a venue's authorized signers are changed, previously submitted receipts remain valid as long as they were signed by an authorized signer at the time of submission."})}),"\n",(0,s.jsx)(n.h3,{id:"receipt-process",children:"Receipt Process"}),"\n",(0,s.jsx)(n.p,{children:"The off-chain settlement process follows these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Instruction Creation"}),": A settlement instruction is created with one or more off-chain legs"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Off-Chain Transfer"}),": The actual transfer occurs in the external system"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Receipt Generation"}),": An authorized venue signer creates a receipt containing:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The instruction ID"}),"\n",(0,s.jsx)(n.li,{children:"The leg ID"}),"\n",(0,s.jsx)(n.li,{children:"A cryptographic signature proving their authorization"}),"\n",(0,s.jsx)(n.li,{children:"Optional metadata about the transfer"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Receipt Submission and Affirmations"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Any party can submit the signed receipt using ",(0,s.jsx)(n.code,{children:"settlement::add_instruction_leg_receipt"})]}),"\n",(0,s.jsx)(n.li,{children:"The receipt's signature is verified against the venue's authorized signers"}),"\n",(0,s.jsx)(n.li,{children:"The receipt cannot be modified once submitted"}),"\n",(0,s.jsx)(n.li,{children:"Affirmations for other legs in the instruction can occur independently"}),"\n",(0,s.jsx)(n.li,{children:"Parties can provide their affirmations either before or after the receipt is submitted"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Settlement Completion"}),": The instruction can settle once both conditions are met:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All required receipts for off-chain legs are submitted"}),"\n",(0,s.jsx)(n.li,{children:"All required affirmations from instruction parties are in place"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Receipts can be submitted by anyone with a valid signed receipt - not just the venue owner or signers. This allows for flexible integration with external systems while maintaining security through cryptographic signatures. The order of receipt submission and leg affirmations does not matter - parties can affirm their legs before or after receipts are submitted."})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The combination of venue signers, cryptographic receipts, and on-chain verification creates a secure and flexible system for integrating external transfers with Polymesh's settlement process."})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);