"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[69083],{17188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"primitives/settlement/settlement-diagrams","title":"Settlement Sequence Diagrams","description":"","source":"@site/polymesh-docs/primitives/settlement/settlement-diagrams.mdx","sourceDirName":"primitives/settlement","slug":"/primitives/settlement/settlement-diagrams","permalink":"/polymesh-documentation-site/polymesh-docs/primitives/settlement/settlement-diagrams","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/polymesh-docs/primitives/settlement/settlement-diagrams.mdx","tags":[],"version":"current","frontMatter":{"title":"Settlement Sequence Diagrams","description":"","subsite":"polymesh-docs"},"sidebar":"defaultSidebar","previous":{"title":"Settlement","permalink":"/polymesh-documentation-site/polymesh-docs/primitives/settlement/"},"next":{"title":"Authorisations","permalink":"/polymesh-documentation-site/polymesh-docs/primitives/authorisations"}}');var i=n(74848),a=n(28453);const o={title:"Settlement Sequence Diagrams",description:"",subsite:"polymesh-docs"},r=void 0,l={},c=[{value:"Purpose of Sequence Diagrams",id:"purpose-of-sequence-diagrams",level:2},{value:"Asset Creation",id:"asset-creation",level:2},{value:"Asset Agent Management",id:"asset-agent-management",level:2},{value:"Asset Venue Creation",id:"asset-venue-creation",level:2},{value:"Portfolio Movement (Segregated Omnibus)",id:"portfolio-movement-segregated-omnibus",level:2},{value:"Asset Settlement / Distribution",id:"asset-settlement--distribution",level:2},{value:"Asset Settlement / Distribution with Off-Chain Leg",id:"asset-settlement--distribution-with-off-chain-leg",level:2}];function d(e){const t={admonition:"admonition",br:"br",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"purpose-of-sequence-diagrams",children:"Purpose of Sequence Diagrams"}),"\n",(0,i.jsx)(t.p,{children:"These sequence diagrams provide a detailed overview of the steps involved in the settlement process for Assets. They outline each step comprehensively, from account setup to instruction creation, affirmation, rejection, and execution."}),"\n",(0,i.jsx)(t.p,{children:"It's important to note that these diagrams offer a low-level representation, including all steps of the listed process. This level of detail ensures clarity and precision in understanding the settlement process."}),"\n",(0,i.jsx)(t.p,{children:"When using tools such as the Polymesh REST API or the Polymesh TypeScript SDK, some of the steps depicted in these diagrams are combined into a single user action. These tools can simplify the process for integrators, streamlining the integration of Assets."}),"\n",(0,i.jsx)(t.h2,{id:"asset-creation",children:"Asset Creation"}),"\n",(0,i.jsx)(t.p,{children:"In this sequence diagram, the asset issuer creates, configures, and issues an asset. In this flow, the issuer performs these actions directly, but it is also possible to delegate the configuration and issuance steps to an agent once the asset has been created."}),"\n",(0,i.jsx)(t.mermaid,{value:"sequenceDiagram\nparticipant I as Issuer\nparticipant P as Polymesh\n\nNote over I: Issuers can directly issue, or specify an agent to issue on their behalf\nopt\n  I ->> P: Register Asset Ticker\nend\nI ->> P: Create Asset\nopt\n  I ->> P: Specify Asset Metadata\nend\nopt\n  I ->> P: Specify Asset Compliance Rules\nend\nI ->> P: Issue (mint) Tokens For This Asset"}),"\n",(0,i.jsx)(t.h2,{id:"asset-agent-management",children:"Asset Agent Management"}),"\n",(0,i.jsx)(t.p,{children:"In this optional sequence diagram, the asset issuer grants an external agent permission to operate their asset on their behalf."}),"\n",(0,i.jsx)(t.p,{children:"Agents can be granted granular permissions so that they can only operate specific features (e.g., documentation updates) as needed."}),"\n",(0,i.jsx)(t.mermaid,{value:"sequenceDiagram\nparticipant I as Issuer\nparticipant A as Agent\nparticipant P as Polymesh\n\nopt\n  I ->> P: Create a custom Permission Group for the asset\n  P --\x3e> I: Returns Permission Group ID\nend\nI ->> P: Issue `BecomeAgent` Authorization\nNote over I,P: Specifies Ticker, Agent DID, and Agent Permission Group\nP --\x3e> A: Pending Authorization Approval/Rejection\nA ->> P: Accept `BecomeAgent` Authorization\nNote over I, P: Once an Agent has been permissioned, they can act on behalf of the Issuer<br/> for the specified transactions with respect to this asset"}),"\n",(0,i.jsx)(t.h2,{id:"asset-venue-creation",children:"Asset Venue Creation"}),"\n",(0,i.jsxs)(t.p,{children:["In this step, the asset issuer (or their agent) creates a new distribution venue to distribute their asset. Settlement instructions in Polymesh can optionally be associated with a particular settlement venue. Only the creator of that venue can create settlement instructions under that venue and optionally specify who is allowed to sign receipts for off-chain asset transfers.",(0,i.jsx)(t.br,{}),"\n","In addition, the issuer of an asset can optionally manage which venues they allow their asset to trade within."]}),"\n",(0,i.jsx)(t.mermaid,{value:"sequenceDiagram\nparticipant I as Issuer / Agent\nparticipant P as Polymesh\n\nI ->> P: Create a Venue\nNote over I,P: Venue Details, Type, and Receipt Signers provided\nP --\x3e> I: New Venue ID\nNote over I,P: Venue ID is emitted in an event\nopt\n  I ->> P: Restrict Asset Settlement Instructions to Specified Venues\nend\nopt\n  I ->> P: Update Venue Details for Issuer Venue\nend\nopt\n  I ->> P: Update Permitted Settlement Venues for the Asset\nend\nopt\n  I ->> P: Update Allowed Receipt Signers on Issuer Venue\nend\nopt\n  I ->> P: Update Venue Details for Issuer/Agent's Venue\nend"}),"\n",(0,i.jsx)(t.h2,{id:"portfolio-movement-segregated-omnibus",children:"Portfolio Movement (Segregated Omnibus)"}),"\n",(0,i.jsx)(t.p,{children:"In this step, assets are moved between portfolios under the same entity. Portfolios can be used to segregate client funds under a single omnibus account or to organize assets into other logical partitions (e.g., asset type, investment purpose)."}),"\n",(0,i.jsx)(t.p,{children:"Since the asset is not being transferred between different entities, compliance rules and the usual affirmation settlement flow do not apply. Additionally, as movements are within the same entity, only a single transaction is required to perform the movement. A single portfolio movement transaction can contain multiple different assets."}),"\n",(0,i.jsx)(t.p,{children:"The sequence diagram includes the steps needed to create portfolios, although this is a one-time operation."}),"\n",(0,i.jsx)(t.mermaid,{value:'sequenceDiagram\nparticipant C as Custodian\nparticipant P as Polymesh\n\npar\n  C ->> P: Create New Portfolio Named "ClientA"\nand\n  C ->> P: Create New Portfolio Named "ClientB"\nend\n\nC ->> P: Move Assets from Default Portfolio to ClientA\n\nC ->> P: Move Assets from Default Portfolio to ClientB\n\nC ->> P: Move Assets from ClientA to ClientB'}),"\n",(0,i.jsx)(t.h2,{id:"asset-settlement--distribution",children:"Asset Settlement / Distribution"}),"\n",(0,i.jsx)(t.p,{children:"In this step, a settlement instruction is settled between two counterparties, a sender and a receiver. In this example, both the sender and receiver configure a custodian who performs the affirmation step on their behalf, this approach is optional. The next example shows the sender and receiver affirming directly rather than via a custodian."}),"\n",(0,i.jsx)(t.p,{children:"For clarity, roles have been clearly separated; however, some entities may perform multiple roles (e.g., the asset issuer may also be the sender in the case of primary distribution)."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"If the settlement instruction creator is also a sender or receiver in the instruction, then creating the instruction will also affirm the legs of the instruction that apply to them."})}),"\n",(0,i.jsx)(t.mermaid,{value:"sequenceDiagram\nparticipant I as Venue Owner<br>(e.g. Issuer / Exchange)\nparticipant S as Asset Sender\nparticipant R as Asset Receiver\nparticipant SC as Sender Custodian\nparticipant RC as Receiver Custodian\nparticipant M as Mediator\nparticipant P as Polymesh\n\npar\n  S ->> P: Issue Custody Authorization for Sender Custodian\n  Note over P: Pending Custody Authorization<br>Approval/Rejection from Sender Custodian\n  SC ->> P: Approve Custody Authorization\nand\n  R ->> P: Issue Custody Authorization for Receiver Custodian\n  Note over P: Pending Custody Authorization<br>Approval/Rejection from Receiver Custodian\n  RC ->> P: Approve Custody Authorization\nend\n\nI ->> P: Create Settlement Instruction between Sender and Receiver\n\npar\n  SC ->> P: Affirm Settlement Instruction as Sender\n  Note over P: Sender Assets Locked\nand\n  RC ->> P: Affirm Settlement Instruction as Receiver\n  Note over P: Receiver Assets Locked\nand\n  opt\n    M ->> P: Affirm Settlement<br>Instruction as<br>Mediator\n  end\nend\n\nI ->> P: Execute Settlement Instruction (can alternatively be executed by any party to the instruction)\nNote over P: Sender and Receiver Balances<br>Updated and Locks Removed"}),"\n",(0,i.jsx)(t.h2,{id:"asset-settlement--distribution-with-off-chain-leg",children:"Asset Settlement / Distribution with Off-Chain Leg"}),"\n",(0,i.jsx)(t.p,{children:"In this step, we show the sequence when a settlement instruction involves both an on-chain leg (to move an asset issued directly on Polymesh) as well as an off-chain leg representing an asset or payment moving on a chain or payment system outside of Polymesh."}),"\n",(0,i.jsx)(t.p,{children:'In this case, we have synchronized settlement between the off-chain and on-chain legs (rather than atomic settlement) with signed data provided via an "Off-Chain Signer API" to verify that the off-chain leg was completed before the settlement instruction is finalized on Polymesh.'}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.p,{children:'The role of the "Off-Chain Signer API" entity in the below sequence diagram is:'}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"monitor Polymesh for settlement instructions related to specified venues which involve off-chain legs"}),"\n",(0,i.jsx)(t.li,{children:"observe whether or not the off-chain leg has been completed on the external payment / chain"}),"\n",(0,i.jsx)(t.li,{children:"once the above steps have been completed successfully, sign a receipt (referencing the Polymesh settlement instruction and off-chain leg) using a private key that has been permissioned as an allowed signer on the venue associated with the settlement instruction"}),"\n"]}),(0,i.jsx)(t.p,{children:'This signed data can then be used on Polymesh to affirm the off-chain leg, meaning that the Polymesh settlement instruction cannot be finalized until the "Off-Chain Signer API" has confirmed the payment (off-chain) leg.'})]}),"\n",(0,i.jsx)(t.mermaid,{value:"sequenceDiagram\nparticipant I as Venue Owner\nparticipant S as Asset Sender\nparticipant R as Asset Receiver\nparticipant M as Mediator\nparticipant O as Off-Chain Signer API\nparticipant P as Polymesh\n\nI ->> P: Create Settlement Instruction between Sender and Receiver\nnote over I,P: Settlement Instruction includes an on-chain asset (sender to receiver)<br/>and an off-chain asset (receiver to sender)\n\npar\n  S ->> P: Affirm Settlement Instruction\n  P ->> P: Sender Assets Locked\nand\n  note over R: Transfer the off-chain asset\n  R ->> O: Request Signed Receipt the Off-Chain Asset Has Been Transferred\n  O ->> R: Signed Receipt Provided\n  R ->> P: Affirm Settlement Instruction via Signed Receipt\nand\n  opt\n    M ->> P: Affirm Settlement Instruction\n  end\nend\nI ->> P: Execute Settlement Instruction\nNote over I,P: Fully affirmed instructions can optionally be executed by any party to the instruction\nP ->> P: Sender and Receiver Balances<br>Updated and Lock Removed"})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);