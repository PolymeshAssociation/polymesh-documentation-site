"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[45118],{92817:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=s(74848),i=s(28453),r=s(74528);const o={sidebar_position:3,title:"Polymesh App Portal",description:"Settlement with the Polymesh App Portal"},a=void 0,l={id:"settlement/with-dashboard",title:"Polymesh App Portal",description:"Settlement with the Polymesh App Portal",source:"@site/docs/05-settlement/with-dashboard.mdx",sourceDirName:"05-settlement",slug:"/settlement/with-dashboard",permalink:"/polymesh-documentation-site/docs/settlement/with-dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/05-settlement/with-dashboard.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Polymesh App Portal",description:"Settlement with the Polymesh App Portal"},sidebar:"defaultSidebar",previous:{title:"Settlement Process",permalink:"/polymesh-documentation-site/docs/settlement/settlement-process/"},next:{title:"External Agents",permalink:"/polymesh-documentation-site/docs/settlement/settlement-agents/"}},h={},c=[{value:"Use case",id:"use-case",level:2},{value:"Off-chain and on-chain legs",id:"off-chain-and-on-chain-legs",level:2},{value:"Importance of integration",id:"importance-of-integration",level:2},{value:"Preliminary steps",id:"preliminary-steps",level:2},{value:"Pause compliance rules",id:"pause-compliance-rules",level:3},{value:"Create Bob",id:"create-bob",level:3},{value:"Polymesh Substrate App",id:"polymesh-substrate-app",level:2},{value:"Create a venue",id:"create-a-venue",level:2},{value:"Venue number",id:"venue-number",level:2},{value:"Settlement instruction",id:"settlement-instruction",level:2},{value:"Legs",id:"legs",level:2},{value:"Transaction",id:"transaction",level:2},{value:"Not settled",id:"not-settled",level:2},{value:"Links",id:"links",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(r.A,{videoId:"l0-3sgxnQk0"}),"'"]}),"\n",(0,n.jsx)(t.h2,{id:"use-case",children:"Use case"}),"\n",(0,n.jsx)(t.p,{children:"If you have been following along up to this point, you have already seen an example of settlement in practice. ACME's distribution agent (also ACME) sent shares and Alice accepted the transfer."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you want to refresh your memory, just give the ",(0,n.jsx)(t.a,{href:"/docs/distribute/with-dashboard",children:"Token Studio exercise on distributing assets"})," another peek."]})}),"\n",(0,n.jsxs)(t.p,{children:["Behind the scenes, the transfer was an instruction with one leg and Alice was required to affirm the instruction. The dashboard portfolio GUI presents the ",(0,n.jsx)(t.code,{children:"send"})," and ",(0,n.jsx)(t.code,{children:"accept"})," process. Behind the scenes, it works with the API through the SDK to create the instructions and affirmations that users sign to make it happen."]}),"\n",(0,n.jsxs)(t.p,{children:["Polymesh is designed to ",(0,n.jsx)(t.strong,{children:"integrate with existing systems"})," that the counterparties operate in-house. Let's consider a deceptively simple-sounding example of an online exchange to highlight the many organisations and processes that ",(0,n.jsx)(t.em,{children:"could be"})," involved."]}),"\n",(0,n.jsx)(t.p,{children:"Suppose Alice wishes to sell 1000 shares for $5/share. To accomplish this, she opens an account with her broker of choice, SafeHands, which has access to the exchange, NextDaq. She plans to instruct SafeHands to list her shares for sale."}),"\n",(0,n.jsx)(t.p,{children:"SafeHands wants to protect their own reputation with the NextDaq exchange, so they need to be sure Alice will execute any agreed trade before they would be willing to list her shares on NextDaq. There is more than one way to satisfy this requirement. SafeHands could be satisfied by Alice's credit, other collateral, or possibly by taking custody of the shares Alice wants to sell for as long as the sell order remains open. This concern is something that Alice and SafeHands work out between themselves."}),"\n",(0,n.jsx)(t.p,{children:"With the execution risk managed, SafeHands will be ready to accept Alice's sell order and open a corresponding order on NextDaq."}),"\n",(0,n.jsxs)(t.p,{children:["When NextDaq matches Alice's sell order with Bob's buy order, the buyer, the seller, and two brokers will be legally obliged to execute the trade. Additionally, custodians may be required to transfer shares and Bob will be required to send funds to pay for his purchase. Once again, we see that there is no precise business process that would be satisfactory to all participants in all markets. Polymesh provides ",(0,n.jsx)(t.strong,{children:"granular control and a high degree of flexibility"})," within an overarching structure that provides ",(0,n.jsx)(t.strong,{children:"assurances about transaction finality and regulatory compliance"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"off-chain-and-on-chain-legs",children:"Off-chain and on-chain legs"}),"\n",(0,n.jsx)(t.p,{children:"Let's consider the funds."}),"\n",(0,n.jsx)(t.p,{children:"Alice's broker needs to confirm receipt of the funds but there are many ways to accomplish this. If Alice and Bob are both SafeHands customers, possibly the order was matched in-house and was never even sent to NextDaq. The transfer of funds could be a simple, internal ledger entry. Or the payment could rely on an existing agreement between the brokerages and their familiar settlement process. Or the payment could be through an on-chain 1-to-1 fiat currency token representing the funds."}),"\n",(0,n.jsxs)(t.p,{children:["While it is conceivable that one day many fund transfers will be settled entirely on-chain using fiat currency tokens, it is important today to ensure that there is no requirement that all legs of all instructions have to be settled with on-chain transfers. When Alice's broker affirms the instruction, including the fund transfer leg, they are effectively ",(0,n.jsx)(t.em,{children:"affirming their confidence that they have been or will be paid."})," This affords everyone the flexibility of continuing to rely on their existing business processes to the extent that they want to. In the case that fiat tokens clear regulatory hurdles and become a common method of transferring funds, then the network will, of course, attend to the transfer of funds as an on-chain instruction leg. Even so, affirmation of the payment leg will still be important since it prescribes the ",(0,n.jsx)(t.em,{children:"amount"})," and ",(0,n.jsx)(t.em,{children:"currency"})," that will be transferred. The receiver will affirm that this information is correct before agreeing to it."]}),"\n",(0,n.jsx)(t.h2,{id:"importance-of-integration",children:"Importance of integration"}),"\n",(0,n.jsxs)(t.p,{children:["It is expected that brokers, custodians, transfer agents, and other parties will integrate their existing systems with Polymesh. Alice and Bob don't generally have any contact with the trade settlement process beyond funding their accounts and managing their orders, so they wouldn't generally have contact with the settlement process other than brief encounters like ",(0,n.jsx)(t.a,{href:"/docs/distribute/with-dashboard",children:"when Alice accepted the shares from ACME"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Each organisation that integrates with the system will have a unique blend of concerns depending on the services offered, existing business processes, and existing systems. For this reason, the dashboard and Token Studio don't model a specific way of approaching this process at this time. Rather, the SDK provides granular methods for participants like SafeHands to create bespoke, in-house integrations. The end result is automation of the processes that let Alice and Bob ",(0,n.jsx)(t.strong,{children:"trade security tokens through familiar customer-facing user interfaces"}),", and ",(0,n.jsx)(t.strong,{children:"B2B processes that support efficient settlement"}),". This facilitates acceptance of security tokens and delivery of related services with minimal disruption of existing business, technical, and legal processes."]}),"\n",(0,n.jsx)(t.h2,{id:"preliminary-steps",children:"Preliminary steps"}),"\n",(0,n.jsx)(t.h3,{id:"pause-compliance-rules",children:"Pause compliance rules"}),"\n",(0,n.jsx)(t.p,{children:"Before we proceed too far, we must remove an obstacle. When we originated the ACME shares, we created a basic compliance regime as would normally be the case. We designated ACME themselves as the KYC service provider, meaning that they would attend to verifying information about their shareholders internally. We did not, however, explore how they perform this function or how the users complete the process. So, compliance rules are in effect and Alice hasn't met the requirements. She will be unable to trade, and you will see that the network prevents a non-compliant transfer at a deep level if you attempt this exercise while skipping this step."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["KYC is explained in detail in the ",(0,n.jsx)(t.a,{href:"/docs/kyc/kyc",children:"KYC section"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["To keep this settlement exercise as simple as possible, let's remove the obstacle by relaxing the rules. Return to the Token Studio, as ACME, navigate to ",(0,n.jsx)(t.code,{children:"Compliance"})," and ",(0,n.jsx)(t.code,{children:"Pause Rule"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"pause compliance",src:s(89536).A+"",width:"1193",height:"711"})}),"\n",(0,n.jsx)(t.p,{children:"Confirm and sign, of course."}),"\n",(0,n.jsx)(t.h3,{id:"create-bob",children:"Create Bob"}),"\n",(0,n.jsxs)(t.p,{children:["Alice will transfer some of her shares to another user. For this to work, we will need another user, so create a user with a new identity, Bob, complete ",(0,n.jsx)(t.a,{href:"/docs/quickstart/verification-with-cdd",children:"customer due diligence"})," and ",(0,n.jsx)(t.a,{href:"/docs/quickstart/quickstart-polyx",children:"get some POLYX"})," because Bob will need to sign some transactions:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"+ Add a key"}),";"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"don't"})," assign the key to Alice or ACME;"]}),"\n",(0,n.jsx)(t.li,{children:"Proceed to the dashboard and create a new identity, Bob;"}),"\n",(0,n.jsxs)(t.li,{children:["Complete ",(0,n.jsx)(t.a,{href:"/docs/quickstart/verification-with-cdd",children:"customer due diligence"}),", as Bob;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/quickstart/quickstart-polyx",children:"Get some POLYX"})," for Bob."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"bob",src:s(60817).A+"",width:"332",height:"600"})}),"\n",(0,n.jsx)(t.h2,{id:"polymesh-substrate-app",children:"Polymesh Substrate App"}),"\n",(0,n.jsxs)(t.p,{children:["Recall that ",(0,n.jsx)(t.a,{href:"/docs/introduction/tech-stack/",children:"Polymesh is built with Substrate"}),", which is a set of modules for creating a blockchain. Substrate provides tools that offer low-level access to everything that happens on a Substrate network and these tools work with Polymesh."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://mainnet-app.polymesh.network/",children:"Polymesh Substrate App"})})," is such a tool. Blockchain enthusiasts will recognise that it is similar to block explorers found in other settings. One can use it to explore the blockchain and transactions in depth."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"The methods that define what Polymesh does and how it does it"})," are called ",(0,n.jsx)(t.strong,{children:"extrinsics"})," in the Substrate lexicon. This tool facilitates direct interaction with the extrinsics, i.e. creating, signing and sending transactions. Consequently, this tool is an avenue to interact with any Polymesh method directly and witness the result."]}),"\n",(0,n.jsxs)(t.p,{children:["Open the Polymesh Substrate App at ",(0,n.jsx)(t.a,{href:"https://mainnet-app.polymesh.network/",children:"https://mainnet-app.polymesh.network/"}),". It opens on the ",(0,n.jsx)(t.code,{children:"Explorer"})," tab and displays recent blocks and events."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"polymesh explorer",src:s(91686).A+"",width:"1236",height:"964"})}),"\n",(0,n.jsxs)(t.p,{children:["Peruse recent blocks and see that the extrinsics ",(0,n.jsx)(t.strong,{children:"describe the methods and parameters that were signed and the results of the transactions"}),", but don't be alarmed if it seems technical. This information is of interest to developers who create automated systems and user-friendly interfaces."]}),"\n",(0,n.jsx)(t.h2,{id:"create-a-venue",children:"Create a venue"}),"\n",(0,n.jsxs)(t.p,{children:["Navigate to ",(0,n.jsx)(t.code,{children:"Extrinsics"})," on the ",(0,n.jsx)(t.code,{children:"Developer"})," menu."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"extrinsics",src:s(84688).A+"",width:"1235",height:"485"})}),"\n",(0,n.jsx)(t.p,{children:"If you don't see Alice's personal \"POLYWALLET\", open the wallet and select Alice's personal primary key to set the context. The page will refresh."}),"\n",(0,n.jsx)(t.p,{children:"Transfers in Polymesh don't occur in a void. Each transfer occurs in a venue, which is an organised trading facility (OTF), regulated market (RMs), or multilateral trading facility (MTF) that receives instructions from counter-parties for the purpose of matching, i.e. to convert separate orders into executed trades."}),"\n",(0,n.jsxs)(t.p,{children:["In summary, ",(0,n.jsx)(t.strong,{children:"venues"})," are ",(0,n.jsx)(t.em,{children:"logical groups of instructions and settlements"}),". The creator of a venue controls permission, meaning who is allowed to create settlements within the venue. When ACME transferred shares to Alice, the token studio created a venue for ACME. By default, only ACME has permission to trade there. We can safely assume that Alice doesn't have permission at this time."]}),"\n",(0,n.jsx)(t.p,{children:"Alice cannot create a settlement outside of a venue, so Alice needs a venue. Alice can create her own venue where she has permission to trade."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Be sure Alice's personal account is in focus, in the wallet;"}),"\n",(0,n.jsxs)(t.li,{children:["Navigate to ",(0,n.jsx)(t.code,{children:"Developer"}),", ",(0,n.jsx)(t.code,{children:"Extrinsics"}),";"]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.code,{children:"Settlement"})," under ",(0,n.jsx)(t.code,{children:"submit the following extrinsic"}),". Choosing this category updates the related extrinsics to the right;"]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.code,{children:"createVenue(details, signers, venue, type)"}),'. Notice the human-readable explanation of what it does, "Registers a new venue" and the list of arguments it accepts, "details, signers, venue and type";']}),"\n",(0,n.jsxs)(t.li,{children:["Under ",(0,n.jsx)(t.code,{children:"details: VenueDetails"})," paste Alice's Polymesh DID. She will have permission to create settlements in this venue;"]}),"\n",(0,n.jsxs)(t.li,{children:["Leave the venue type set to ",(0,n.jsx)(t.code,{children:"Other"}),";"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Submit Transaction"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"create venue",src:s(12493).A+"",width:"1339",height:"527"})}),"\n",(0,n.jsx)(t.h2,{id:"venue-number",children:"Venue number"}),"\n",(0,n.jsxs)(t.p,{children:["You should receive a positive response after the above transaction is confirmed, signed, and sent. In just a moment, you will see your transaction in the blockchain. Navigate to ",(0,n.jsx)(t.code,{children:"Network"}),", ",(0,n.jsx)(t.code,{children:"Explore"})," and look for ",(0,n.jsx)(t.code,{children:"settlement.VenueCreated"}),". Expand the transaction. Your venue number will be unique, so take note of it. In the example below, the system assigned venue number 83."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"venue created",src:s(5251).A+"",width:"1359",height:"753"})}),"\n",(0,n.jsx)(t.p,{children:"At this moment, it suffices for us to spot our recent transaction in the list. There are many ways to query the blockchain to find such a detail in the future."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["See if you can discover on your own how to use ",(0,n.jsx)(t.code,{children:"Developer"}),"/",(0,n.jsx)(t.code,{children:"Chain state"})," to query the venues where Alice is ",(0,n.jsx)(t.em,{children:"allowed"})," to create a settlement. Hint: The query is about settlements and user venues."]})}),"\n",(0,n.jsx)(t.h2,{id:"settlement-instruction",children:"Settlement instruction"}),"\n",(0,n.jsx)(t.p,{children:"Next, Alice will create a settlement."}),"\n",(0,n.jsxs)(t.p,{children:["Return to Navigate to ",(0,n.jsx)(t.code,{children:"Developer"}),", ",(0,n.jsx)(t.code,{children:"Extrinsics"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Again, select the ",(0,n.jsx)(t.code,{children:"settlement"})," category. The subcategory updates to show the variants of this extrinsic and each variant includes a short, human-readable description of what it does. This time, select ",(0,n.jsx)(t.code,{children:"addAndAffirmInstruction"})," which ",(0,n.jsx)(t.em,{children:"adds and affirms a new instruction"}),". It makes sense to cover both steps in one transaction since Alice is both creating the instruction and also agrees with it. Remember, the receiver will also affirm the instruction before it executes. Alice could create the instruction without affirming it if, for example, she is waiting for funds from Bob."]}),"\n",(0,n.jsxs)(t.p,{children:["Next is the ",(0,n.jsx)(t.code,{children:"Venue"}),". All settlements occur in a venue. This is where Alice will need to know her own venue number from the earlier step. In the example, we created venue 83 but your number will be different."]}),"\n",(0,n.jsxs)(t.p,{children:["Moving on, we come to ",(0,n.jsx)(t.code,{children:"settlement_type"})," which defaults to ",(0,n.jsx)(t.em,{children:"Settle on Affirmation"})," which means that the transaction will settle when everyone agrees, or shortly thereafter. Notice that the instruction can be forward-dated to a future block. Let's leave it set to ",(0,n.jsx)(t.em,{children:"SettleOnAffirmation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Further options to exist to set the trade date and value date in the future. Again, for simplicity, let's leave those unselected but note that they exist."}),"\n",(0,n.jsx)(t.h2,{id:"legs",children:"Legs"}),"\n",(0,n.jsx)(t.p,{children:"Legs are where the purpose of the transaction is defined. For example, if Alice wants to transfer shares to Bob and Bob will pay Alice (and no one else is involved) then one or two legs would be used to describe the share transfer, and possibly the payment."}),"\n",(0,n.jsx)(t.p,{children:"Astute readers will note that the dashboard has a purpose-built user interface for such a simple transfer, but our purpose is to unfold the tools one can use to create more complex settlements."}),"\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.code,{children:"Add item"})," next to ",(0,n.jsx)(t.code,{children:"legs:"})," at the bottom of the form. This opens the legs form as it is defined within the ",(0,n.jsx)(t.code,{children:"addAndAffirmInstruction"})," extrinsic. Each activity has its own parameters. Settlements have 0-n legs each with ",(0,n.jsx)(t.code,{children:"from"})," and ",(0,n.jsx)(t.code,{children:"to"})," portfolios, and an ",(0,n.jsx)(t.code,{children:"asset"})," and an ",(0,n.jsx)(t.code,{children:"amount"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"new leg",src:s(55975).A+"",width:"1296",height:"952"})}),"\n",(0,n.jsx)(t.p,{children:"Let's transfer 1,000 shares to Bob."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Copy Alice's Polymesh DID and paste into the ",(0,n.jsx)(t.code,{children:"from: did: IdentityId"}),";"]}),"\n",(0,n.jsxs)(t.li,{children:["Copy Bob's Polymesh DID and paste into the ",(0,n.jsx)(t.code,{children:"to: did: IdentityId"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Recall that Alice moved her shares to her ",(0,n.jsx)(t.code,{children:"cold store"})," portfolio. Here, we have some choices. Alice could leave this partially-completed form for a moment and transfer 1,000 or more shares to her default portfolio, or she can add another detail to this leg."]}),"\n",(0,n.jsxs)(t.p,{children:["We can use a ",(0,n.jsx)(t.code,{children:"Chain State"})," query to enumerate the portfolios Alice has. See if you can find your way to the appropriate query to ascertain that Alice's ",(0,n.jsx)(t.code,{children:"cold store"})," portfolio is indeed ",(0,n.jsx)(t.code,{children:"1"}),". Or, take this as a given because it is the first and only user portfolio Alice has if you have been following closely. In any case, to transfer from a portfolio other than the default, select ",(0,n.jsx)(t.code,{children:"User"})," portfolio and input the portfolio number."]}),"\n",(0,n.jsx)(t.p,{children:"Input the unique symbol for the security token you created."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If this instruction involved two or more asset transfers, then we would create additional legs. Instructions settle atomically, meaning all legs execute completely. There is ",(0,n.jsx)(t.strong,{children:"no case in which an instruction is partially processed"})," or some, but not all legs are processed. See examples of more complex transaction with multiple legs in the ",(0,n.jsx)(t.a,{href:"/polymesh-docs/primitives/settlement/",children:"reference documentation"})]})}),"\n",(0,n.jsxs)(t.p,{children:["Alice will transfer 1,000 shares to Bob. Notice that the number entered can be scaled. To the right, ",(0,n.jsx)(t.code,{children:"kilo"})," would multiply the input value by 1,000. Leave it as POLYX, which means ",(0,n.jsx)(t.code,{children:"1:1"})," in this context."]}),"\n",(0,n.jsxs)(t.p,{children:["Now, ",(0,n.jsx)(t.code,{children:"Submit transaction"}),". The web site reports what it intends to do. We agree, and ",(0,n.jsx)(t.code,{children:"Sign and Submit"}),". A signature is required, so that prompts the wallet to request it."]}),"\n",(0,n.jsx)(t.h2,{id:"transaction",children:"Transaction"}),"\n",(0,n.jsxs)(t.p,{children:["Return to ",(0,n.jsx)(t.code,{children:"Network"}),", ",(0,n.jsx)(t.code,{children:"Explorer"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You will see a new transaction created, titled ",(0,n.jsx)(t.code,{children:"settlement.InstructionCreated"}),". Expand it and see the details of the settlement instruction created just now."]}),"\n",(0,n.jsxs)(t.p,{children:["Again, the ",(0,n.jsx)(t.code,{children:"Chain state"})," queries offer numerous ways to recall this information in the future. For example, one could find the settlement instructions created by Alice, related to Bob or related to ACME."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"settlement transaction",src:s(82043).A+"",width:"1352",height:"977"})}),"\n",(0,n.jsx)(t.h2,{id:"not-settled",children:"Not settled"}),"\n",(0,n.jsx)(t.p,{children:"The transaction that creates the instruction is created and confirmed, but the trade has not occurred yet. This is an important difference between Polymesh and many other distributed blockchain-based systems. In other cases, there is nothing Bob can do to prevent the arrival of assets in his portfolio, which is problematic in the context of regulated securities. In Polymesh, Bob needs to affirm the instruction and Bob can reject the instruction if he disagrees with it."}),"\n",(0,n.jsx)(t.p,{children:"Let's have a look from Bob's perspective now that this instruction exists."}),"\n",(0,n.jsxs)(t.p,{children:["Change to Bob's Polymesh DID in the wallet and navigate to the ",(0,n.jsx)(t.code,{children:"Portfolios"})," tab in the dashboard: ",(0,n.jsx)(t.a,{href:"https://dashboard.polymath.network",children:"https://dashboard.polymath.network"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Bob has one incoming transfer. It is 1,000 ACME shares."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"incoming",src:s(34038).A+"",width:"1344",height:"591"})}),"\n",(0,n.jsx)(t.p,{children:"Accept the transfer and receive the shares."}),"\n",(0,n.jsx)(t.p,{children:"Once received, Bob may wish to move some or all of his shares to another portfolio."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For details on these processes, return to ",(0,n.jsx)(t.a,{href:"/docs/distribute/with-dashboard",children:"Token Studio Dashboard"})," in the ",(0,n.jsx)(t.em,{children:"Distribution"})," section to recall how Alice received her first ACME shares and moved them to her cold store portfolio."]})}),"\n",(0,n.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://mainnet-app.polymesh.network/",children:"Polymesh Substrate App - Mainnet"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://testnet-app.polymesh.live/",children:"Polymesh Substrate App - Testnet"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://portal.polymesh.network",children:"Polymesh Portal"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/polymesh-docs/primitives/settlement/",children:"Polymesh Primitives, Settlement"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},74528:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(74848);const i=e=>{let{videoId:t}=e;return(0,n.jsx)("div",{className:"video-responsive",children:(0,n.jsx)("iframe",{width:"853",height:"480",src:`https://www.youtube-nocookie.com/embed/${t}?noref=true&modestbranding=1&rel=0&autoplay=0`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},91686:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/01-explorer-be688f0c5e5d1553e2f82336fe71382d.png"},60817:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/01c2-bob-bd152c6d681f41c7a47b63c604ce0b07.png"},12493:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/01f-create-venue-f220d1bc6d9de5ac123b661b6083f61f.png"},5251:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/01g-venue-created-a6176226895a571fe7f663f42131f9a6.png"},84688:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/02-extrinsics-ad1e8b1a44c861fabc9d8be9c844824a.png"},55975:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/03-leg-83-13003f9ff185ab77b7945992c9db5408.png"},89536:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/06-pause-rules-7768adffbe19a89f187973554f8b6d06.png"},82043:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/07-settlement-created-5fb01043d27dc5432aa0a003a8554b15.png"},34038:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/08-incoming-bob-c0172f68ed18b41bb580de705c7d3451.png"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);