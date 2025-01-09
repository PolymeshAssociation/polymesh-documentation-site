"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[68241],{91991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"core-concepts/settlement/settlement-index","title":"Settlement","description":"Settlement Mechanisms","source":"@site/docs/200-core-concepts/060-settlement/index.mdx","sourceDirName":"200-core-concepts/060-settlement","slug":"/settlement","permalink":"/polymesh-documentation-site/settlement","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/200-core-concepts/060-settlement/index.mdx","tags":[{"inline":true,"label":"settlement","permalink":"/polymesh-documentation-site/tags/settlement"},{"inline":true,"label":"mechanisms","permalink":"/polymesh-documentation-site/tags/mechanisms"}],"version":"current","frontMatter":{"title":"Settlement","description":"Settlement Mechanisms","id":"settlement-index","slug":"/settlement","sidebar_label":"Settlement","tags":["settlement","mechanisms"]},"sidebar":"docs","previous":{"title":"Transfer Restrictions","permalink":"/polymesh-documentation-site/compliance/transfer-rules"},"next":{"title":"Trading Venues","permalink":"/polymesh-documentation-site/settlement/venues"}}');var s=n(74848),a=n(28453);const r={title:"Settlement",description:"Settlement Mechanisms",id:"settlement-index",slug:"/settlement",sidebar_label:"Settlement",tags:["settlement","mechanisms"]},o=void 0,c={},l=[{value:"Overview",id:"overview",level:2},{value:"Roles",id:"roles",level:2},{value:"Asset Issuer",id:"asset-issuer",level:3},{value:"Venues",id:"venues",level:3},{value:"Counterparty",id:"counterparty",level:3},{value:"Legs, Instructions and Venues",id:"legs-instructions-and-venues",level:2},{value:"Exempt Assets",id:"exempt-assets",level:2},{value:"Affirming and Custody",id:"affirming-and-custody",level:2},{value:"Examples",id:"examples",level:2},{value:"Peer to Peer Transfer",id:"peer-to-peer-transfer",level:3},{value:"Exchange Mediated Transfer",id:"exchange-mediated-transfer",level:3},{value:"Exchange Mediated Transfer with Authorisation",id:"exchange-mediated-transfer-with-authorisation",level:3},{value:"Netting Process",id:"netting-process",level:3},{value:"Security Token Offering",id:"security-token-offering",level:3}];function h(e){const t={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Settlement in Polymesh is the process by which assets are transferred between identities in a regulated and compliant fashion."}),"\n",(0,s.jsx)(t.p,{children:"It requires all counterparties of a transaction to affirm (agree) an instruction (a set of asset transfers) before the instruction settles (completes)."}),"\n",(0,s.jsx)(t.p,{children:"Any counterparty to the instruction can unilaterally reject the instruction."}),"\n",(0,s.jsx)(t.p,{children:"If an instruction is fully affirmed, but settlement fails (for example as a result of compliance rules) the instruction can be manually executed again at a later date by any one of the counterparties, once the failure cause has been remediated."}),"\n",(0,s.jsx)(t.p,{children:"Once an instruction has been affirmed by a counterparty, the associated assets are locked in the counterparties account. If the instruction is subsequently rejected, these assets are unlocked and can be used in another settlement instruction."}),"\n",(0,s.jsx)(t.p,{children:"Instructions can be settled either via:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"on-chain movement of assets"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"an off-chain payment receipt"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Payment receipts are small pieces of data signed by an authorised signatory (determined by the venue on which the instruction is settling) which allege that the corresponding assets have moved off-chain. They can only be used for instruction legs that do not correspond to on-chain Asset IDs. Note that an off-chain payment receipt can only be used for a settlement instruction associated with a venue to ensure that the list of authorised signatories is well-defined."}),"\n",(0,s.jsx)(t.h2,{id:"roles",children:"Roles"}),"\n",(0,s.jsx)(t.h3,{id:"asset-issuer",children:"Asset Issuer"}),"\n",(0,s.jsx)(t.p,{children:"The asset issuer (or agent on their behalf) controls the set of identities that are allowed to create instructions that reference their asset. They can also choose to leave this open."}),"\n",(0,s.jsx)(t.h3,{id:"venues",children:"Venues"}),"\n",(0,s.jsx)(t.p,{children:"Only the creator of a venue is allowed to create instructions underneath it."}),"\n",(0,s.jsx)(t.p,{children:"The creator of a venue can cancel any pending instruction underneath it."}),"\n",(0,s.jsx)(t.p,{children:"The venue creator controls the set of identities that are allowed to sign payment receipts for instructions underneath it."}),"\n",(0,s.jsx)(t.p,{children:"Venues are optional for settlement instructions - when creating a new settlement instruction, if the venue is not specified, then the instruction cannot include off-chain legs."}),"\n",(0,s.jsx)(t.h3,{id:"counterparty",children:"Counterparty"}),"\n",(0,s.jsx)(t.p,{children:"A counterparty is relative to an instruction, and is any identity that is referenced as a payer / receiver in a leg within that instruction."}),"\n",(0,s.jsx)(t.p,{children:"Each counterparty must authorise any instruction where they appear as a counterparty, before the instruction can settle."}),"\n",(0,s.jsx)(t.p,{children:"Authorisation can be via an on-chain transaction, or signed data."}),"\n",(0,s.jsx)(t.p,{children:"Once an instruction is authorised by a counterparty, their assets are locked, and the instruction will settle once all counterparties have authorised."}),"\n",(0,s.jsx)(t.p,{children:"A counterparty can cancel a pending instruction. If any counterparty cancels, the entire instruction should be marked as cancelled (and everyone's assets unlocked)."}),"\n",(0,s.jsx)(t.h2,{id:"legs-instructions-and-venues",children:"Legs, Instructions and Venues"}),"\n",(0,s.jsx)(t.p,{children:"Instructions and Legs are always concrete - specify all details at the point of creation and are immutable."}),"\n",(0,s.jsx)(t.p,{children:"For an instruction to be executed, all counterparties of the instruction must signal their authorisation and lock any necessary asset / provide appropriate receipts."}),"\n",(0,s.jsx)(t.p,{children:"Only the creator of a venue can add instructions underneath it."}),"\n",(0,s.jsx)(t.p,{children:"Authorisation can only be provided before the instructions expiry data, and after its valid_from date."}),"\n",(0,s.jsx)(t.p,{children:"Asset issuers can restrict who can post an instruction that references their asset, or leave it unrestricted."}),"\n",(0,s.jsx)(t.p,{children:"Once all counterparties have authorised an instruction, it is automatically executed. At that point, if the execution fails (e.g. due to compliance on the assets) then instruction is marked as failed, if it succeeds it is stamped with the time of the successful execution."}),"\n",(0,s.jsx)(t.p,{children:"Any counterparty to an instruction can reject it, marking it as rejected immediately, or simply wait until it expires."}),"\n",(0,s.jsx)(t.p,{children:"A counterparty's authorisation is only valid if they either lock the relevant amount of assets to the instruction to cover any of their obligations across all legs, or provide a signed receipt that the transaction has occurred off-chain."}),"\n",(0,s.jsx)(t.p,{children:"Payment receipts which are used to authorise an instruction are specific to a given instruction, and cannot be used for other instructions."}),"\n",(0,s.jsx)(t.p,{children:"If an instruction fails, is rejected or expires, all asset locks are removed."}),"\n",(0,s.jsx)(t.p,{children:"If an instruction is executed, assets are transferred between counterparties for on-chain assets (i.e. excluding legs which are settled via a payment receipt that can only reference off-chain assets)."}),"\n",(0,s.jsx)(t.h2,{id:"exempt-assets",children:"Exempt Assets"}),"\n",(0,s.jsx)(t.p,{children:"For certain types of assets, e.g. stable coins, it may not be appropriate to require all users to explicitly affirm transactions where they receive the asset (either directly or via their custodian)."}),"\n",(0,s.jsx)(t.p,{children:'In this case Polymesh allows users to "pre-approve" certain Asset IDs meaning that explicit affirmations are no longer required. Certain Asset IDs can also be excluded from requiring affirmation on receipt globally via the Polymesh governing council.'}),"\n",(0,s.jsx)(t.h2,{id:"affirming-and-custody",children:"Affirming and Custody"}),"\n",(0,s.jsx)(t.p,{children:"If a custodian has been granted access to a users portfolio, the custodian is able to affirm any instructions that reference that portfolio on behalf of their client."}),"\n",(0,s.jsx)(t.p,{children:"This allows control to be handed to a custodian, whilst the record of beneficial ownership remains with the owner of the assets."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"peer-to-peer-transfer",children:"Peer to Peer Transfer"}),"\n",(0,s.jsx)(t.p,{children:"Alice wants to transfer 10 ACME tokens to Bob as a gift."}),"\n",(0,s.jsx)(t.p,{children:"Either she does not specify a venue, or she specifies any venue that she has previously created, to generate an instruction, with a single leg."}),"\n",(0,s.jsx)(t.p,{children:"If Bob has provided pre-authorisation via signed data to Alice, she can submit it alongside the transaction as Bobs authorisation, and her own authorisation is implicit (since she is creating the instruction). Alice's ACME tokens are locked until Bob authorises the instruction (or Alice cancels), assuming he has not pre-authorised."}),"\n",(0,s.jsx)(t.p,{children:"Once the instruction has been fully authorised (which can happen upon creation if pre-authorised) it settles with Bob receiving 10 ACME tokens."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Peer to peer",src:n(85487).A+"",width:"2363",height:"604"})}),"\n",(0,s.jsx)(t.h3,{id:"exchange-mediated-transfer",children:"Exchange Mediated Transfer"}),"\n",(0,s.jsx)(t.p,{children:"ExchangeCo matches Alice, a seller of ACME, with Bob, a buyer of ACME, and coordinates an agreed price to exchange assets - 100 ACME for 10 USDC."}),"\n",(0,s.jsx)(t.p,{children:"ExchangeCo creates a venue, adds a single instruction, with two legs, and an expiry time of T + 1 hour."}),"\n",(0,s.jsx)(t.p,{children:"Bob authorises the instruction, locking 10 USDC."}),"\n",(0,s.jsx)(t.p,{children:"Alice authorises the instruction, locking 100 ACME."}),"\n",(0,s.jsx)(t.p,{children:"The instruction is executed with Alice receiving 10 USDC and Bob receiving 100 ACME."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Asset vs. Asset",src:n(20859).A+"",width:"2325",height:"969"})}),"\n",(0,s.jsx)(t.h3,{id:"exchange-mediated-transfer-with-authorisation",children:"Exchange Mediated Transfer with Authorisation"}),"\n",(0,s.jsx)(t.p,{children:"ExchangeCo matches Alice, a seller of ACME, with Bob, a buyer of ACME, and coordinates an agreed price to exchange assets - 100 ACME for 10 USDC."}),"\n",(0,s.jsx)(t.p,{children:"ExchangeCo collects a signed authorisation from Alice and Bob indicating that they agree a specific instruction."}),"\n",(0,s.jsx)(t.p,{children:"Bob's authorisation includes a signed receipt that he has transferred funds to Alice, meaning that no additional funds are locked from Bob into the instruction, and instead his receipt signed data is marked as locked."}),"\n",(0,s.jsx)(t.p,{children:"ExchangeCo creates a venue, with a single instruction with two legs, providing the authorisation data from Alice and Bob."}),"\n",(0,s.jsx)(t.p,{children:"The instruction is authorised upon creation, and immediately settles, transferring 100 ACME from Alice to Bob and marking Bob's receipt as used."}),"\n",(0,s.jsx)(t.h3,{id:"netting-process",children:"Netting Process"}),"\n",(0,s.jsx)(t.p,{children:"ClearCo, with a pre-agreed netting contract with BankCo's, collects trade data from BankCo_1, BankCo_2, BankCo_3 and BankCo_4 and calculates an optimal netting strategy."}),"\n",(0,s.jsx)(t.p,{children:"ClearCo creates a venue with an instruction containing four legs representing the netting trades between BankCo's and an expiry time of T + 24 hours."}),"\n",(0,s.jsx)(t.p,{children:"Each BankCo individually authorises the instruction - when all BankCo's have authorised the netting settlement is automatically executed."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Netting",src:n(1628).A+"",width:"2363",height:"1879"})}),"\n",(0,s.jsx)(t.h3,{id:"security-token-offering",children:"Security Token Offering"}),"\n",(0,s.jsx)(t.p,{children:"AcmeCo wishes to distribute 1000 ACME tokens to investors."}),"\n",(0,s.jsx)(t.p,{children:"AcmeCo creates a Venue defining the start and end date of their issuance."}),"\n",(0,s.jsx)(t.p,{children:"Alice provides AcmeCo with an authorisation to buy 100 ACME tokens at 10 USDC (i.e. an authorisation for an instruction with these two legs)."}),"\n",(0,s.jsx)(t.p,{children:"AcmeCo creates an instruction under their settlement passing along Alice's authorisation, along with their own. The instruction is executed with Alice receiving her ACME tokens, and AcmeCo receiving their assets."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Primary Distribution / Funding",src:n(51361).A+"",width:"2475",height:"3150"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1628:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Netting-3e5e9ecfdf1238e3783182f0473ad89c.png"},85487:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/P2P-3e1d1234206919a73682128120919f85.png"},51361:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/STO-671f74b9c5575038554c5b3e2f6e5cfe.png"},20859:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/TvT-ac9d7ab52e582490c121f7587d65313d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);