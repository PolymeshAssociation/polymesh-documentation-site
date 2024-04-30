"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[62324],{17027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(74848),r=t(28453);const o={sidebar_position:3,title:"Sequence Diagrams",description:"",subsite:"polymesh-private-docs"},a=void 0,s={id:"polymesh-private/confidential-assets/diagrams",title:"Sequence Diagrams",description:"",source:"@site/polymesh-docs/polymesh-private/confidential-assets/diagrams.md",sourceDirName:"polymesh-private/confidential-assets",slug:"/polymesh-private/confidential-assets/diagrams",permalink:"/polymesh-documentation-site/polymesh-docs/polymesh-private/confidential-assets/diagrams",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/polymesh-docs/polymesh-private/confidential-assets/diagrams.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Sequence Diagrams",description:"",subsite:"polymesh-private-docs"},sidebar:"defaultSidebar",previous:{title:"Settlement",permalink:"/polymesh-documentation-site/polymesh-docs/polymesh-private/confidential-assets/settlement"},next:{title:"Developer Tooling",permalink:"/polymesh-documentation-site/polymesh-docs/polymesh-private/tooling"}},d={},c=[{value:"Purpose of Sequence Diagrams",id:"purpose-of-sequence-diagrams",level:2},{value:"1 Confidential Account Setup",id:"1-confidential-account-setup",level:2},{value:"2 Confidential Asset and Settlement Venue Creation",id:"2-confidential-asset-and-settlement-venue-creation",level:2},{value:"Settlement Process",id:"settlement-process",level:2},{value:"3 Instruction Creation",id:"3-instruction-creation",level:3},{value:"4 Sender Proof Generation and Affirmation",id:"4-sender-proof-generation-and-affirmation",level:3},{value:"5 Receiver Zero Knowledge Proof Verification",id:"5-receiver-zero-knowledge-proof-verification",level:3},{value:"6 Mediator Zero Knowledge Proof Verification",id:"6-mediator-zero-knowledge-proof-verification",level:3},{value:"7 Auditor Zero Knowledge Proof Review",id:"7-auditor-zero-knowledge-proof-review",level:3},{value:"8 Instruction Affirmation",id:"8-instruction-affirmation",level:3},{value:"Instruction Rejection",id:"instruction-rejection",level:3}];function u(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"purpose-of-sequence-diagrams",children:"Purpose of Sequence Diagrams"}),"\n",(0,i.jsx)(n.p,{children:"These sequence diagrams provide a detailed overview of the steps involved in the settlement process for Confidential Assets. They outline each step comprehensively, from account setup to instruction creation, affirmation, rejection, and execution."}),"\n",(0,i.jsx)(n.p,{children:"It's important to note that these diagrams offer a low-level representation, including all steps of the listed process. This level of detail ensures clarity and precision in understanding the settlement process."}),"\n",(0,i.jsx)(n.p,{children:"When using tools such as the Polymesh Private REST API or the Polymesh Private Typescript SDK, some of the steps depicted in these diagrams are combined into a single user action. These tools can simplify the process for integrators, streamlining the integration of Confidential Assets."}),"\n",(0,i.jsxs)(n.p,{children:["Follow the steps ",(0,i.jsx)(n.a,{href:"/polymesh-documentation-site/polymesh-docs/polymesh-private/tutorials/walkthrough-confidential-assets-rest-api",children:"here"})," to implement these sequences using the ",(0,i.jsx)(n.a,{href:"/polymesh-documentation-site/polymesh-docs/polymesh-private/tooling#development-environment",children:"Polymesh Private Development Environment"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"1-confidential-account-setup",children:"1 Confidential Account Setup"}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\nparticipant I as Issuer/Sender\nparticipant R as Receiver\nparticipant M as Mediator(s)\nparticipant A as Auditor(s)\nparticipant P as Polymesh\n\nNote over I,M: Issuers, Receivers and Mediators must<br> have onboarded and received a DID\n\npar\n  I ->> I: Generate ElGamal<br/> Key Pair\n  I ->> P: Register Confidential Account\nand\n  R ->> R: Generate ElGamal Key Pair\n  R ->> P: Register Confidential Account\nand\n  M ->> M: Generate ElGamal Key Pair\nand\n  A ->> A: Generate ElGamal Key Pair\nend\n"}),"\n",(0,i.jsx)(n.h2,{id:"2-confidential-asset-and-settlement-venue-creation",children:"2 Confidential Asset and Settlement Venue Creation"}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\nparticipant I as Issuer\nparticipant V as Venue Owner\nparticipant M as Mediator(s)\nparticipant A as Auditor(s)\nparticipant P as Polymesh\n\nNote over I,M: Issuers, Receivers and Mediators must<br> have onboarded and received a DID.<br> Issuers must have confidential<br>accounts linked to their DID\n\nopt\n  A ->> I: Provide Confidential Account\n  M ->> I: Provide DID(s)\n  M ->> I: Provide Confidential Account\nend\n  I ->> P: Initialises Confidential Asset Specifying Auditors and Mediators\n  P --\x3e> I: Return Confidential Asset ID\n  I ->> P: Submits transaction to issue tokens, specifying the<br> unencrypted amount and their Confidential Account to credit\n  P ->> P: Updates unencrypted<br> total supply\n  P ->> P: Updates Issuer<br> encrypted balance\nalt Issuer restricts settlement venues\n  I ->> P: Submits Transaction to enable venue filtering (restrict permitted venues)\n  V ->> P: Creates Confidential Venue\n  P --\x3e> V: Return Confidential Venue ID\n  V ->> I: Provide <br>Confidential<br>Venue ID\n  I ->> P: Submits transaction to allow trading on the provided venue ID\nelse Issuer does not restrict settlement venues\n  V ->> P: Creates Confidential Venue\n  P --\x3e> V: Return Confidential Venue ID\nend"}),"\n",(0,i.jsx)(n.h2,{id:"settlement-process",children:"Settlement Process"}),"\n",(0,i.jsx)(n.h3,{id:"3-instruction-creation",children:"3 Instruction Creation"}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n\nparticipant I as Issuer/Sender\nparticipant R as Receiver\nparticipant V as Venue Owner\nparticipant M as Mediator(s)\nparticipant A as Auditor(s)\nparticipant P as Polymesh\n\nNote over I,M: Issuers, Senders, Receivers, Venue <br> Owners and Mediators must have<br> onboarded and received a DID.\nNote over I,R: Senders and Receiver must have<br> confidential accounts linked to<br> their DID\nNote over A: Auditors must have a confidential<br> account but do not need to<br>register it on chain.\nNote over M: Mediators should have a <br> confidential account for amount<br> decryption but do not need to<br>register it on chain.\n\nI ->> V: Provide Confidential Asset ID\nI ->> V: Provide Confidential Account\nR ->> V: Provide<br>Confidential<br>Account\nopt\n  Note over A,V: Additional Venue specified Auditors <br> and Mediators may be provided to<br>supplement those defined by the <br>issuer of the confidential asset\n  A ->> V: Provide Confidential Account(s)\n  M ->> V: Provide DID(s)\n  M ->> V: Provide<br>Confidential<br>Account(s)\nend\nV ->> P: Creates Confidential Settlement Instruction including<br> Asset ID, Sender, Receive and optional additional<br> Auditors and Mediators. No amount specified.\nopt\n  Note over V,P: Multiple assets can be added to an<br>instruction leg. Asset anonymity can be<br> achieved by including dummy assets<br> in the instruction\n  Note over V,P: Multiple instruction legs with different<br> assets, sender, receiver, auditors<br> and mediators can be added. Each<br> leg must be affirmed by all<br> required parties before the <br>complete instruction can settle.\nend\nP ->> P: Event emitted containing the<br>Instruction ID and instruction<br> details, including sender(s),<br>receiver(s) and all required<br>auditors for each asset and<br>mediators for each leg"}),"\n",(0,i.jsx)(n.h3,{id:"4-sender-proof-generation-and-affirmation",children:"4 Sender Proof Generation and Affirmation"}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n\nparticipant I as Issuer/Sender\nparticipant V as Venue Owner\nparticipant P as Polymesh\n\nalt Venue provides instruction information\n  V ->> I: Instruction ID provided\nelse Venue does not provide instruction information\n  I ->>P: Requests pending instructions. A chain indexer<br>(e.g. Polymesh SubQuery) may be required for<br>efficient queries of pending instructions\n  P --\x3e> I: Pending instruction ID(s) returned\n  I ->> P: Request instruction details\n  P --\x3e> I: Return instruction details\nend\nloop For all assets being sent, including zero amount/dummy assets\n  I ->> P: Requests encrypted balance from the chain\n  P --\x3e> I: Return encrypted balance for requested asset\n  I ->> P: Requests instruction details to retrieve required<br>auditor (including mediators) confidential accounts\n  P --\x3e> I: Return required auditor confidential accounts\n  I ->> I: Generate sender proof using current encrypted<br> balance, amount to send and all required<br> auditor and mediator confidential accounts\nend\n\nI ->> P: Submit proof(s) to the chain to affirm the instruction as Sender\nP ->> P: Reduces Senders encrypted balance by the<br> amounts specified in the provided proof(s)\nP ->> P: Emits event containing sender proof(s)"}),"\n",(0,i.jsx)(n.h3,{id:"5-receiver-zero-knowledge-proof-verification",children:"5 Receiver Zero Knowledge Proof Verification"}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n\nparticipant I as Issuer/Sender\nparticipant R as Receiver\nparticipant V as Venue Owner\nparticipant P as Polymesh\n\nalt Venue provides instruction ID\n  V ->> R: Instruction ID\nelse Sender provides instruction ID\n  I ->> R: Instruction ID\nelse Venue/Sender does not provide instruction ID\n  R ->>P: Requests pending instructions\n  P --\x3e> R: Pending instruction ID(s) returned\nend\n\nR ->> P: Query previously emitted instruction affirmation<br>events to retrieve sender proof(s).A chain<br>indexer (e.g. Polymesh SubQuery) may be required<br> for efficient queries of historical events\nR ->> R: Verify or decrypt sender proof using their<br> confidential account to view the<br> amount being sent"}),"\n",(0,i.jsx)(n.h3,{id:"6-mediator-zero-knowledge-proof-verification",children:"6 Mediator Zero Knowledge Proof Verification"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Mediators can only verify or decrypt confidential amounts for assets or legs that they have been specified as an auditor for."})}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n\nparticipant I as Issuer/Sender\nparticipant V as Venue Owner\nparticipant M as Mediator(s)\nparticipant P as Polymesh\nalt Venue provides instruction ID\n  V ->> M: Instruction ID\nelse Sender provides instruction ID\n  I ->> M: Instruction ID\nelse Venue/Sender does not provide instruction ID\n  M ->>P: Requests pending instructions\n  P --\x3e> M: Pending instruction ID(s) returned\nend\nM ->> P: Query previously emitted instruction<br> affirmation events to retrieve sender<br>proof(s). A chain indexer (e.g. Polymesh<br> SubQuery) may be required for efficient<br> queries of historical events\nP --\x3e> M: Sender proof\nM ->> P: Query instruction leg details to<br>determine the correct index of<br>the mediators confidential account<br>in the array of auditors\nP --\x3e> M: Auditor index\nM ->> M: Verify or decrypt amount from the sender proof using<br>their confidential account, the confidential asset ID<br>and the auditor index for their confidential account.<br>If known, the expected amount can be<br>provider to reduce the time to verify."}),"\n",(0,i.jsx)(n.h3,{id:"7-auditor-zero-knowledge-proof-review",children:"7 Auditor Zero Knowledge Proof Review"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"For an issuer to be able to be able to verify or decrypt confidential amounts they must also be an auditor of the asset."})}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n\nparticipant A as Auditor(s)\nparticipant P as Polymesh\n  A ->> P: Query previously emitted instruction affirmation events to retrieve<br>sender proof(s). A chain indexer (e.g. Polymesh SubQuery)<br> may be required for efficient queries of historical events\n  P --\x3e> A: Sender proof\n  A ->> P: Query instruction leg details to determine the correct index of<br>the auditor confidential account in the array of auditors\n  P --\x3e> A: Auditor index\n  A ->> A: Verify or decrypt amount from the sender proof using<br>their confidential account, the confidential asset ID<br>and the auditor index for their confidential account.<br>If known, the expected amount can be<br>provider to reduce the time to verify."}),"\n",(0,i.jsx)(n.h3,{id:"8-instruction-affirmation",children:"8 Instruction Affirmation"}),"\n",(0,i.jsx)(n.mermaid,{value:'sequenceDiagram\n\nparticipant S as Sender\nparticipant R as Receiver\nparticipant V as Venue Owner\nparticipant M as Mediator(s)\nparticipant P as Polymesh\n\n  R ->> P: Submit affirm instruction transaction<br>providing instruction ID and leg ID(s)\n  M ->> P: Submit affirm instruction transaction<br>providing instruction ID and leg ID(s)\n  Note over M,P: Once all parties have affirmed all<br> legs, the instruction can be executed<br>by any of the involved parties\n  alt\n    S ->> P: Execute the settlement instruction\n  else\n    R ->> P: Execute the settlement instruction\n  else\n    V ->> P: Execute the settlement instruction\n  else\n    M ->> P: Execute the settlement instruction\n  end\n  P ->> P: Receiver incoming balance(s) updated\n  Note over V,P: Executing the instruction makes incoming<br> balances available for all receivers, even<br>for multiple assets or legs. Incoming<br>balances can be claimed by using<br>"apply incoming balance."\n  R ->> P: Submit transaction to apply incoming balance\n  P ->> P: Receiver encrypted balance updated\n  Note over R,P: Settlement instruction complete'}),"\n",(0,i.jsx)(n.h3,{id:"instruction-rejection",children:"Instruction Rejection"}),"\n",(0,i.jsx)(n.mermaid,{value:"sequenceDiagram\n\nparticipant I as Issuer/Sender\nparticipant R as Receiver\nparticipant M as Mediator(s)\nparticipant P as Polymesh\n\n  alt Receiver rejects\n    R ->> P: Submit reject instruction transaction\n  else Mediator rejects\n    M ->> P: Submit reject instruction transaction\n  else Sender rejects\n    I ->> P: Submit reject instruction transaction\n  end\n  P ->> P: Sender incoming balances updated.<br>Amounts from previous sender<br>affirmations are made available\n  I ->> P: Submit transaction to apply incoming balance\n  P ->> P: Sender encrypted balance updated\n  Note over I,P: Settlement instruction complete"})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(96540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);