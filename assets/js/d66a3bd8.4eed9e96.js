"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[92225],{1239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(74848),s=t(28453);const o={sidebar_position:4,title:"With the SDK",description:"Distribute assets with the Polymesh SDK"},a=void 0,r={id:"distribute/with-sdk",title:"With the SDK",description:"Distribute assets with the Polymesh SDK",source:"@site/docs/04-distribute/with-sdk.mdx",sourceDirName:"04-distribute",slug:"/distribute/with-sdk",permalink:"/polymesh-documentation-site/docs/distribute/with-sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/04-distribute/with-sdk.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"With the SDK",description:"Distribute assets with the Polymesh SDK"},sidebar:"defaultSidebar",previous:{title:"Token Studio Dashboard",permalink:"/polymesh-documentation-site/docs/distribute/with-dashboard"},next:{title:"Transferring Assets",permalink:"/polymesh-documentation-site/docs/settlement/transferring-assets/"}},c={},l=[{value:"Preconditions",id:"preconditions",level:2},{value:"Prepare the distribution",id:"prepare-the-distribution",level:2},{value:"In which portfolio?",id:"in-which-portfolio",level:2},{value:"Moving the shares, finally",id:"moving-the-shares-finally",level:2},{value:"Does Alice agree?",id:"does-alice-agree",level:2},{value:"Can Alice confirm she received the shares?",id:"can-alice-confirm-she-received-the-shares",level:2},{value:"How can Alice issue the shares of other founders?",id:"how-can-alice-issue-the-shares-of-other-founders",level:2},{value:"When all is done",id:"when-all-is-done",level:2},{value:"Links",id:"links",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{TabItem:t,Tabs:o}=n;return t||h("TabItem",!0),o||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"As always, everything that can be done via the Token Studio Dashboard can be integrated with internal systems using the SDK. Use this to automate and scale repetitive processes."}),"\n",(0,i.jsx)(n.p,{children:"Let's see how ACME's share distribution would be performed using methods in the SDK. What we want to achieve is for ACME to issue 20,000 shares of ACME Corp to Alice the individual. As CEO, Alice will act for ACME."}),"\n",(0,i.jsx)(n.h2,{id:"preconditions",children:"Preconditions"}),"\n",(0,i.jsx)(n.p,{children:"We assume that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ACME, the company, already has a Polymesh account, ",(0,i.jsx)(n.code,{children:"acme"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["Alice, ACME Co's CEO and acting agent, holds a secondary private key for ",(0,i.jsx)(n.code,{children:"acme"})," that allows her to act on its behalf;"]}),"\n",(0,i.jsxs)(n.li,{children:["Alice the CEO can ",(0,i.jsx)(n.a,{href:"/sdk-docs/classes/API/Client/Polymesh/#connect",children:"instantiate"})," a Polymesh client whenever she needs to act with:"]}),"\n"]}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const signingManagerCeo: LocalSigningManager = await LocalSigningManager.create(\n  {\n    accounts: [\n      {\n        mnemonic: 'word31 word32 ...',\n      },\n    ],\n  }\n);\nconst apiCeo: Polymesh = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerCeo,\n});\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const signingManagerCeo = await LocalSigningManager.create({\n  accounts: [\n    {\n      mnemonic: 'word31 word32 ...',\n    },\n  ],\n});\nconst apiCeo = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerCeo,\n});\n"})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The ACME token has already been created and has been retrieved and instantiated with the following:"}),"\n"]}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const asset: Asset = await apiCeo.assets.getAsset({\n  ticker: 'ACME',\n});\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const asset = await apiCeo.assets.getAsset({\n  ticker: 'ACME',\n});\n"})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"acme"})," is the owner of the ACME token. ",(0,i.jsx)(n.code,{children:"acme"})," will also be the token's primary issuance agent;"]}),"\n",(0,i.jsxs)(n.li,{children:["Alice has an account, ",(0,i.jsx)(n.code,{children:"alice"}),", that represents her as an individual;"]}),"\n",(0,i.jsxs)(n.li,{children:["Alice the individual also can ",(0,i.jsx)(n.a,{href:"/sdk-docs/classes/API/Client/Polymesh/#connect",children:"instantiate"})," a Polymesh client whenever she needs to act with:"]}),"\n"]}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const signingManagerAlice: LocalSigningManager =\n  await LocalSigningManager.create({\n    accounts: [\n      {\n        mnemonic: 'word1 word2 ...',\n      },\n    ],\n  });\n\nconst apiAlice: Polymesh = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerAlice,\n});\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const signingManagerAlice = await LocalSigningManager.create({\n  accounts: [\n    {\n      mnemonic: 'word1 word2 ...',\n    },\n  ],\n});\n\nconst apiAlice = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerAlice,\n});\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Now that we went through the preconditions, let's continue preparing the distribution."}),"\n",(0,i.jsx)(n.h2,{id:"prepare-the-distribution",children:"Prepare the distribution"}),"\n",(0,i.jsx)(n.p,{children:"Time for Alice to get her agreed amount of shares."}),"\n",(0,i.jsxs)(n.p,{children:["As we mentioned in the previous SDK chapter, implicit in ",(0,i.jsx)(n.code,{children:"const token"})," is that the ",(0,i.jsx)(n.code,{children:"context"})," is ",(0,i.jsx)(n.code,{children:"apiCeo"}),", because we used ",(0,i.jsx)(n.code,{children:"apiCeo"})," to retrieve its information. In other words, any action performed on a ",(0,i.jsx)(n.code,{children:"token"})," instantiated by ",(0,i.jsx)(n.code,{children:"apiCeo"})," will effectively be done by the ",(0,i.jsx)(n.code,{children:"acme"})," account."]}),"\n",(0,i.jsx)(n.p,{children:"At the time of its creation, the ACME token had a total supply of zero. Alice is personally entitled to 20,000 of the eventual 100,000 total supply of shares that the founders intend to issue. The primary issuance agent first issues, in effect mints, the shares to themselves, then sends them to their ultimate beneficiary(ies), like Alice."}),"\n",(0,i.jsxs)(n.p,{children:["Sending securities to someone needs the consent of the recipient. The correct Polymesh structure to achieve that is to create a settlement instruction. All settlement instructions are created in a venue. Therefore, we will ",(0,i.jsx)(n.strong,{children:"create a venue"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Let's get started. We fetched ACME's account in the previous step:"}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const distributionVenueQueue: TransactionQueue<Venue> =\n  await acme.settlements.createVenue({\n    type: VenueType.Distribution,\n    description: 'For ACME Co',\n  });\nconst distributionVenue: Venue = await distributionVenueQueue.run();\nconst distributionVenueId: string = distributionVenue.id.toString();\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const distributionVenueQueue = await acme.settlements.createVenue({\n  type: 'Distribution',\n  description: 'For ACME Co',\n});\nconst distributionVenue = await distributionVenueQueue.run();\nconst distributionVenueId = distributionVenue.id.toString();\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["We keep ",(0,i.jsx)(n.code,{children:"distributionVenueId"}),", the string id of the venue, for later as this is information that will need to be shared with the ultimate recipient."]}),"\n",(0,i.jsxs)(n.p,{children:["Now that we have the venue, let's have the CEO ",(0,i.jsx)(n.a,{href:"/sdk-docs/classes/API/Entities/Asset/Fungible/Issuance/#issue",children:"issue"})," enough shares to later transfer to Alice. Of course, if the CEO planned on issuing shares for all founders of ACME Corp, she would issue more."]}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const asset: Asset = await apiCeo.assets.getAsset({\n  ticker: 'ACME',\n});\nconst issuance: Issuance = asset.issuance;\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const asset = await apiCeo.assets.getAsset({\n  ticker: 'ACME',\n});\nconst issuance = asset.issuance;\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Here too, in ",(0,i.jsx)(n.code,{children:"issuance"}),", the context is still ",(0,i.jsx)(n.code,{children:"apiCeo"}),". In fact, its ",(0,i.jsx)(n.a,{href:"/sdk-docs/classes/API/Entities/Asset/Fungible/Issuance/#hierarchy",children:(0,i.jsx)(n.code,{children:"parent"})})," is the ",(0,i.jsx)(n.code,{children:"asset"})," itself."]}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const issueQueue: TransactionQueue<Asset> = await issuance.issue({\n  amount: new BigNumber('20000'),\n});\nawait issueQueue.run();\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const issueQueue = await issuance.issue({\n  amount: new BigNumber('20000'),\n});\nawait issueQueue.run();\n"})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["There is no beneficiary to mention because an ",(0,i.jsx)(n.code,{children:"issue"})," command sends the shares to the issuance agent, which, at this point is ",(0,i.jsx)(n.code,{children:"acme"}),". Additionally, it sends the shares to the account's default portfolio."]})}),"\n",(0,i.jsx)(n.p,{children:"At this point, ACME, has 20,000 received shares. We still need to send them over to Alice the individual."}),"\n",(0,i.jsx)(n.h2,{id:"in-which-portfolio",children:"In which portfolio?"}),"\n",(0,i.jsxs)(n.p,{children:['Now, Alice doesn\'t want to receive her ACME shares into her default portfolio. Instead, she wants to have them sent to a new "cold store" portfolio, she first needs to ',(0,i.jsx)(n.a,{href:"/sdk-docs/classes/API/Client/Identities/#createportfolio",children:"create"})," the portfolio."]}),"\n",(0,i.jsxs)(n.p,{children:["Here we are talking about Alice, the eventual owner, not the CEO, so we are going to use ",(0,i.jsx)(n.em,{children:"her"})," Polymesh client instance ",(0,i.jsx)(n.code,{children:"apiAlice"}),":"]}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const portfolioQueue: TransactionQueue<NumberedPortfolio> =\n  await apiAlice.identities.createPortfolio({\n    name: 'Cold store',\n  });\nconst coldStore: NumberedPortfolio = await portfolioQueue.run();\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const portfolioQueue = await await apiAlice.identities.createPortfolio({\n  name: 'Cold store',\n});\nconst coldStore = await portfolioQueue.run();\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["To ",(0,i.jsx)(n.a,{href:"/sdk-docs/classes/API/Entities/Identity/Portfolios/#getportfolio",children:"retrieve"})," the portfolio at a later date, anyone can use the string ",(0,i.jsx)(n.code,{children:"coldStore.id"}),", or find the portfolio by name."]}),"\n",(0,i.jsxs)(n.p,{children:["Time to ",(0,i.jsx)(n.a,{href:"/sdk-docs/classes/API/Entities/Portfolio/#movefunds",children:"move"})," the shares."]}),"\n",(0,i.jsx)(n.p,{children:"Now that Alice has created the portfolio in which she wishes to receive her shares, she needs to prepare some information for her alter ego, the CEO:"}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const aliceDid: string = alice.did;\nconst coldStoreId: string = coldStore.id.toString(10);\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const aliceDid = alice.did;\nconst coldStoreId = coldStore.id;\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"moving-the-shares-finally",children:"Moving the shares, finally"}),"\n",(0,i.jsxs)(n.p,{children:["Who creates the settlement instruction to move the shares? Alice the CEO, on behalf of ACME, so let's flip back to the proper context: ",(0,i.jsx)(n.code,{children:"apiCeo"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"On her end, she needs to re-instantiate some instances given the previous information:"}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const acme: Identity = await apiCeo.getSigningIdentity();\nconst acmeDefaultPortfolio: DefaultPortfolio =\n  await acme.portfolios.getPortfolio();\nconst acmeDid: string = acme.did;\n\nconst alice: Identity = await apiCeo.identities.getIdentity({\n  did: aliceDid,\n});\nconst aliceColdStore: Portfolio = await alice.portfolios.getPortfolio({\n  portfolioId: new BigNumber(coldStoreId),\n});\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const acme = await apiCeo.getSigningIdentity();\nconst acmeDefaultPortfolio = await acme.portfolios.getPortfolio();\nconst acmeDid = acme.did;\n\nconst alice = await apiCeo.identities.getIdentity({\n  did: aliceDid,\n});\nconst aliceColdStore = await alice.portfolios.getPortfolio({\n  portfolioId: new BigNumber(coldStoreId),\n});\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Now to the settlement instruction:"}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const distributionInstructionQueue: TransactionQueue<Instruction> =\n  await distributionVenue.addInstruction({\n    legs: [\n      {\n        amount: new BigNumber(20000),\n        from: acmeDefaultPortfolio,\n        to: aliceColdStore,\n        asset: asset,\n      },\n    ],\n  });\nconst distributionInstruction: Instruction =\n  await distributionInstructionQueue.run();\nconst distributionInstructionId: string =\n  distributionInstruction.id.toString(10);\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const distributionInstructionQueue = await distributionVenue.addInstruction({\n  legs: [\n    {\n      amount: new BigNumber(20000),\n      from: acmeDefaultPortfolio,\n      to: aliceColdStore,\n      asset: asset,\n    },\n  ],\n});\nconst distributionInstruction = await distributionInstructionQueue.run();\nconst distributionInstructionId = distributionInstruction.id;\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["This instruction is now recorded in the blockchain as pending. Alice the CEO is satisfied with it. She doesn't need to affirm it as the SDK identified her affirmation would have been required anyway, and so used the relevant ",(0,i.jsx)(n.a,{href:"https://docs.polymesh.live/pallet_settlement/enum.Call.html#variant.add_and_affirm_instruction",children:(0,i.jsx)(n.code,{children:"add_and_affirm_instruction"})})," extrinsic right away."]}),"\n",(0,i.jsx)(n.h2,{id:"does-alice-agree",children:"Does Alice agree?"}),"\n",(0,i.jsx)(n.p,{children:"Let's return to Alice, the future share owner, and seek her affirmation."}),"\n",(0,i.jsxs)(n.p,{children:["Since she is most likely on another computer or system, we need once more to reinstantiate the instruction from Alice's point of view. For that to happen, Alice the CEO needs to send, or copy-paste, ",(0,i.jsx)(n.code,{children:"acmeDid"}),", ",(0,i.jsx)(n.code,{children:"distributionVenueId"})," and ",(0,i.jsx)(n.code,{children:"distributionInstructionId"})," to Alice's system:"]}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const acme: Identity = await apiAlice.identities.getIdentity({\n  did: acmeDid,\n});\nconst venue: Venue = (await acme.getVenues()).find((venue: Venue) => {\n  return venue.id.isEqualTo(new BigNumber(distributionVenueId));\n});\nconst instructions: Instruction[] = await venue.getInstructions();\nconst aliceInstruction: Instruction = instructions.pending.find(\n  (instruction: Instruction) => {\n    return instruction.id.isEqualTo(new BigNumber(distributionInstructionId));\n  }\n);\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const acme = await apiAlice.identities.getIdentity({\n  did: acmeDid,\n});\nconst venue = (await acme.getVenues()).find((venue) => {\n  return venue.id.isEqualTo(new BigNumber(distributionVenueId));\n});\nconst instructions = await venue.getInstructions();\nconst aliceInstruction = instructions.pending.find((instruction) => {\n  return instruction.id.isEqualTo(new BigNumber(distributionInstructionId));\n});\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Alice could also have chosen to retrieve all the pending instructions associated with her ",(0,i.jsx)(n.code,{children:"SigningIdentity"}),". That would have included all instructions, not just that one from the distribution venue she knows about. With a view to reduce the possibility of spam, she chose to use the venue to retrieve the instructions."]}),"\n",(0,i.jsx)(n.p,{children:"Now, it is just a matter of affirming the instruction:"}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const updatedInstructionQueue: TransactionQueue<Instruction> =\n  await aliceInstruction.affirm();\nconst updatedInstruction: Instruction = await updatedInstructionQueue.run();\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const updatedInstructionQueue = await aliceInstruction.affirm();\nconst updatedInstruction = await updatedInstructionQueue.run();\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["And with this, ",(0,i.jsx)(n.strong,{children:"Alice got her 20,000 shares"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"can-alice-confirm-she-received-the-shares",children:"Can Alice confirm she received the shares?"}),"\n",(0,i.jsx)(n.p,{children:"Well, she can check what's inside her portfolio:"}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const coldStore: NumberedPortfolio = await alice.portfolios.getPortfolio({\n  portfolioId: new BigNumber(coldStoreId),\n});\nconst acmeAssetBalances: PortfolioBalance[] = await coldStore.getAssetBalances({\n  assets: ['ACME'],\n});\nconst acmeAssetBalance: PortfolioBalance = acmeAssetBalances[0];\nassert(acmeAssetBalance.total.isEqualTo(new BigNumber('20000')));\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const coldStore = await alice.portfolios.getPortfolio({\n  portfolioId: new BigNumber(coldStoreId),\n});\nconst acmeAssetBalances = await coldStore.getAssetBalances({\n  assets: ['ACME'],\n});\nconst acmeAssetBalance = acmeAssetBalances[0];\nassert(acmeAssetBalance.total.isEqualTo(new BigNumber('20000')));\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"how-can-alice-issue-the-shares-of-other-founders",children:"How can Alice issue the shares of other founders?"}),"\n",(0,i.jsx)(n.p,{children:"As the primary issuance agent, she can repeat the steps to create one instruction per founder."}),"\n",(0,i.jsx)(n.p,{children:"On the other hand, if the founders have decided that they should all receive their shares in a single atomic instruction, then, Alice would have to create a single instruction with all the legs:"}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const issueQueue: TransactionQueue<Asset> = await issuance.issue({\n  amount: new BigNumber('100000'),\n});\nawait issueQueue.run();\nconst distributionInstructionQueue: TransactionQueue<Instruction> =\n  await distributionVenue.addInstruction({\n    legs: [\n      {\n        amount: new BigNumber(20000),\n        from: acmeDefaultPortfolio,\n        to: aliceColdStore,\n        asset: asset,\n      },\n      {\n        amount: new BigNumber(30000),\n        from: acmeDefaultPortfolio,\n        to: bobTargetPortfolio,\n        asset: asset,\n      },\n      {\n        amount: new BigNumber(50000),\n        from: acmeDefaultPortfolio,\n        to: carolTargetPortfolio,\n        asset: asset,\n      },\n    ],\n  });\nconst distributionInstruction: Instruction =\n  await distributionInstructionQueue.run();\nconst distributionInstructionId: string =\n  distributionInstruction.id.toString(10);\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const issueQueue = await issuance.issue({\n  amount: new BigNumber('100000'),\n});\nawait issueQueue.run();\nconst distributionInstructionQueue = await distributionVenue.addInstruction({\n  legs: [\n    {\n      amount: new BigNumber(20000),\n      from: acmeDefaultPortfolio,\n      to: aliceColdStore,\n      asset: asset,\n    },\n    {\n      amount: new BigNumber(30000),\n      from: acmeDefaultPortfolio,\n      to: bobTargetPortfolio,\n      asset: asset,\n    },\n    {\n      amount: new BigNumber(50000),\n      from: acmeDefaultPortfolio,\n      to: carolTargetPortfolio,\n      asset: asset,\n    },\n  ],\n});\nconst distributionInstruction = await distributionInstructionQueue.run();\nconst distributionInstructionId = distributionInstruction.id.toString(10);\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"or whichever distribution was agreed between the parties."}),"\n",(0,i.jsx)(n.p,{children:"The advantage of this single operation is that all parties can see in one go whether the eventual outcome is as per previously agreed."}),"\n",(0,i.jsx)(n.h2,{id:"when-all-is-done",children:"When all is done"}),"\n",(0,i.jsx)(n.p,{children:"Assuming all parties have received their shares, it could be advantageous for the company to create a checkpoint. This post-issuance checkpoint would provide visibility about what was achieved during the issuance. A simple checkpoint is all you need. Note that only the token owner can create a checkpoint:"}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const checkpointQueue: TransactionQueue<Checkpoint> =\n  await asset.checkpoints.create();\nconst checkpoint: Checkpoint = await checkpointQueue.run();\nconst postDistributionCheckpointId: string = checkpoint.id.toString(10);\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const checkpointQueue = await asset.checkpoints.create();\nconst checkpoint = await checkpointQueue.run();\nconst postDistributionCheckpointId = checkpoint.id.toString(10);\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The checkpoint has an id, ",(0,i.jsx)(n.code,{children:"0"})," if it is ACME's first checkpoint, which can be kept off-chain for future reference."]}),"\n",(0,i.jsx)(n.p,{children:"That's it, the lazy checkpoint is created, and has recorded all balances. For instance, at any point in time in the future, if Bob wants to get Carol's balance after the distribution, he needs to:"}),"\n",(0,i.jsxs)(o,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const asset: Asset = await apiBob.assets.getAsset({\n  ticker: 'ACME',\n});\nconst postDistributionCheckpoint: Checkpoint = await asset.checkpoints.getOne({\n  id: new BigNumber(postDistributionCheckpointId),\n});\nconst carolAcmeBalanceAtDistribution: BigNumber =\n  await postDistributionCheckpoint.balance({\n    identity: carol,\n  });\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const asset = await apiBob.assets.getAsset({\n  ticker: 'ACME',\n});\nconst postDistributionCheckpoint = await asset.checkpoints.getOne({\n  id: new BigNumber(postDistributionCheckpointId),\n});\nconst carolAcmeBalanceAtDistribution = await postDistributionCheckpoint.balance(\n  {\n    identity: carol,\n  }\n);\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/sdk-docs/",children:"SDK documents"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);