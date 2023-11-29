"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[66216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const s={sidebar_position:4,title:"With the SDK",description:"Distribute assets with the Polymesh SDK"},o=void 0,r={unversionedId:"distribute/with-sdk",id:"distribute/with-sdk",title:"With the SDK",description:"Distribute assets with the Polymesh SDK",source:"@site/docs/04-distribute/with-sdk.mdx",sourceDirName:"04-distribute",slug:"/distribute/with-sdk",permalink:"/polymesh-documentation-site/docs/distribute/with-sdk",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/04-distribute/with-sdk.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"With the SDK",description:"Distribute assets with the Polymesh SDK"},sidebar:"defaultSidebar",previous:{title:"Token Studio Dashboard",permalink:"/polymesh-documentation-site/docs/distribute/with-dashboard"},next:{title:"Transferring Assets",permalink:"/polymesh-documentation-site/docs/settlement/transferring-assets/"}},l={},c=[{value:"Preconditions",id:"preconditions",level:2},{value:"Prepare the distribution",id:"prepare-the-distribution",level:2},{value:"In which portfolio?",id:"in-which-portfolio",level:2},{value:"Moving the shares, finally",id:"moving-the-shares-finally",level:2},{value:"Does Alice agree?",id:"does-alice-agree",level:2},{value:"Can Alice confirm she received the shares?",id:"can-alice-confirm-she-received-the-shares",level:2},{value:"How can Alice issue the shares of other founders?",id:"how-can-alice-issue-the-shares-of-other-founders",level:2},{value:"When all is done",id:"when-all-is-done",level:2},{value:"Links",id:"links",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=u("Tabs"),p=u("TabItem"),m={toc:c};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As always, everything that can be done via the Token Studio Dashboard can be integrated with internal systems using the SDK. Use this to automate and scale repetitive processes."),(0,i.kt)("p",null,"Let's see how ACME's share distribution would be performed using methods in the SDK. What we want to achieve is for ACME to issue 20,000 shares of ACME Corp to Alice the individual. As CEO, Alice will act for ACME."),(0,i.kt)("h2",{id:"preconditions"},"Preconditions"),(0,i.kt)("p",null,"We assume that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ACME, the company, already has a Polymesh account, ",(0,i.kt)("inlineCode",{parentName:"li"},"acme"),";"),(0,i.kt)("li",{parentName:"ul"},"Alice, ACME Co's CEO and acting agent, holds a secondary private key for ",(0,i.kt)("inlineCode",{parentName:"li"},"acme")," that allows her to act on its behalf;"),(0,i.kt)("li",{parentName:"ul"},"Alice the CEO can ",(0,i.kt)("a",{parentName:"li",href:"/sdk-docs/classes/API/Client/Polymesh/#connect"},"instantiate")," a Polymesh client whenever she needs to act with:")),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const signingManagerCeo: LocalSigningManager = await LocalSigningManager.create(\n  {\n    accounts: [\n      {\n        mnemonic: 'word31 word32 ...',\n      },\n    ],\n  }\n);\nconst apiCeo: Polymesh = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerCeo,\n});\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const signingManagerCeo = await LocalSigningManager.create({\n  accounts: [\n    {\n      mnemonic: 'word31 word32 ...',\n    },\n  ],\n});\nconst apiCeo = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerCeo,\n});\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ACME token has already been created and has been retrieved and instantiated with the following:")),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const asset: Asset = await apiCeo.assets.getAsset({\n  ticker: 'ACME',\n});\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const asset = await apiCeo.assets.getAsset({\n  ticker: 'ACME',\n});\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"acme")," is the owner of the ACME token. ",(0,i.kt)("inlineCode",{parentName:"li"},"acme")," will also be the token's primary issuance agent;"),(0,i.kt)("li",{parentName:"ul"},"Alice has an account, ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),", that represents her as an individual;"),(0,i.kt)("li",{parentName:"ul"},"Alice the individual also can ",(0,i.kt)("a",{parentName:"li",href:"/sdk-docs/classes/API/Client/Polymesh/#connect"},"instantiate")," a Polymesh client whenever she needs to act with:")),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const signingManagerAlice: LocalSigningManager =\n  await LocalSigningManager.create({\n    accounts: [\n      {\n        mnemonic: 'word1 word2 ...',\n      },\n    ],\n  });\n\nconst apiAlice: Polymesh = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerAlice,\n});\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const signingManagerAlice = await LocalSigningManager.create({\n  accounts: [\n    {\n      mnemonic: 'word1 word2 ...',\n    },\n  ],\n});\n\nconst apiAlice = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerAlice,\n});\n")))),(0,i.kt)("p",null,"Now that we went through the preconditions, let's continue preparing the distribution."),(0,i.kt)("h2",{id:"prepare-the-distribution"},"Prepare the distribution"),(0,i.kt)("p",null,"Time for Alice to get her agreed amount of shares."),(0,i.kt)("p",null,"As we mentioned in the previous SDK chapter, implicit in ",(0,i.kt)("inlineCode",{parentName:"p"},"const token")," is that the ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"apiCeo"),", because we used ",(0,i.kt)("inlineCode",{parentName:"p"},"apiCeo")," to retrieve its information. In other words, any action performed on a ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," instantiated by ",(0,i.kt)("inlineCode",{parentName:"p"},"apiCeo")," will effectively be done by the ",(0,i.kt)("inlineCode",{parentName:"p"},"acme")," account."),(0,i.kt)("p",null,"At the time of its creation, the ACME token had a total supply of zero. Alice is personally entitled to 20,000 of the eventual 100,000 total supply of shares that the founders intend to issue. The primary issuance agent first issues, in effect mints, the shares to themselves, then sends them to their ultimate beneficiary(ies), like Alice."),(0,i.kt)("p",null,"Sending securities to someone needs the consent of the recipient. The correct Polymesh structure to achieve that is to create a settlement instruction. All settlement instructions are created in a venue. Therefore, we will ",(0,i.kt)("strong",{parentName:"p"},"create a venue"),"."),(0,i.kt)("p",null,"Let's get started. We fetched ACME's account in the previous step:"),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const distributionVenueQueue: TransactionQueue<Venue> =\n  await acme.settlements.createVenue({\n    type: VenueType.Distribution,\n    description: 'For ACME Co',\n  });\nconst distributionVenue: Venue = await distributionVenueQueue.run();\nconst distributionVenueId: string = distributionVenue.id.toString();\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const distributionVenueQueue = await acme.settlements.createVenue({\n  type: 'Distribution',\n  description: 'For ACME Co',\n});\nconst distributionVenue = await distributionVenueQueue.run();\nconst distributionVenueId = distributionVenue.id.toString();\n")))),(0,i.kt)("p",null,"We keep ",(0,i.kt)("inlineCode",{parentName:"p"},"distributionVenueId"),", the string id of the venue, for later as this is information that will need to be shared with the ultimate recipient."),(0,i.kt)("p",null,"Now that we have the venue, let's have the CEO ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/Issuance/#issue"},"issue")," enough shares to later transfer to Alice. Of course, if the CEO planned on issuing shares for all founders of ACME Corp, she would issue more."),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const asset: Asset = await apiCeo.assets.getAsset({\n  ticker: 'ACME',\n});\nconst issuance: Issuance = asset.issuance;\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const asset = await apiCeo.assets.getAsset({\n  ticker: 'ACME',\n});\nconst issuance = asset.issuance;\n")))),(0,i.kt)("p",null,"Here too, in ",(0,i.kt)("inlineCode",{parentName:"p"},"issuance"),", the context is still ",(0,i.kt)("inlineCode",{parentName:"p"},"apiCeo"),". In fact, its ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Asset/Issuance/#hierarchy"},(0,i.kt)("inlineCode",{parentName:"a"},"parent"))," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"asset")," itself."),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const issueQueue: TransactionQueue<Asset> = await issuance.issue({\n  amount: new BigNumber('20000'),\n});\nawait issueQueue.run();\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const issueQueue = await issuance.issue({\n  amount: new BigNumber('20000'),\n});\nawait issueQueue.run();\n")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"There is no beneficiary to mention because an ",(0,i.kt)("inlineCode",{parentName:"p"},"issue")," command sends the shares to the issuance agent, which, at this point is ",(0,i.kt)("inlineCode",{parentName:"p"},"acme"),". Additionally, it sends the shares to the account's default portfolio.")),(0,i.kt)("p",null,"At this point, ACME, has 20,000 received shares. We still need to send them over to Alice the individual."),(0,i.kt)("h2",{id:"in-which-portfolio"},"In which portfolio?"),(0,i.kt)("p",null,'Now, Alice doesn\'t want to receive her ACME shares into her default portfolio. Instead, she wants to have them sent to a new "cold store" portfolio, she first needs to ',(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Client/Identities/#createportfolio"},"create")," the portfolio."),(0,i.kt)("p",null,"Here we are talking about Alice, the eventual owner, not the CEO, so we are going to use ",(0,i.kt)("em",{parentName:"p"},"her")," Polymesh client instance ",(0,i.kt)("inlineCode",{parentName:"p"},"apiAlice"),":"),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const portfolioQueue: TransactionQueue<NumberedPortfolio> =\n  await apiAlice.identities.createPortfolio({\n    name: 'Cold store',\n  });\nconst coldStore: NumberedPortfolio = await portfolioQueue.run();\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const portfolioQueue = await await apiAlice.identities.createPortfolio({\n  name: 'Cold store',\n});\nconst coldStore = await portfolioQueue.run();\n")))),(0,i.kt)("p",null,"To ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Identity/Portfolios/#getportfolio"},"retrieve")," the portfolio at a later date, anyone can use the string ",(0,i.kt)("inlineCode",{parentName:"p"},"coldStore.id"),", or find the portfolio by name."),(0,i.kt)("p",null,"Time to ",(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Portfolio/#movefunds"},"move")," the shares."),(0,i.kt)("p",null,"Now that Alice has created the portfolio in which she wishes to receive her shares, she needs to prepare some information for her alter ego, the CEO:"),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const aliceDid: string = alice.did;\nconst coldStoreId: string = coldStore.id.toString(10);\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const aliceDid = alice.did;\nconst coldStoreId = coldStore.id;\n")))),(0,i.kt)("h2",{id:"moving-the-shares-finally"},"Moving the shares, finally"),(0,i.kt)("p",null,"Who creates the settlement instruction to move the shares? Alice the CEO, on behalf of ACME, so let's flip back to the proper context: ",(0,i.kt)("inlineCode",{parentName:"p"},"apiCeo"),"."),(0,i.kt)("p",null,"On her end, she needs to re-instantiate some instances given the previous information:"),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const acme: Identity = await apiCeo.getSigningIdentity();\nconst acmeDefaultPortfolio: DefaultPortfolio =\n  await acme.portfolios.getPortfolio();\nconst acmeDid: string = acme.did;\n\nconst alice: Identity = await apiCeo.identities.getIdentity({\n  did: aliceDid,\n});\nconst aliceColdStore: Portfolio = await alice.portfolios.getPortfolio({\n  portfolioId: new BigNumber(coldStoreId),\n});\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const acme = await apiCeo.getSigningIdentity();\nconst acmeDefaultPortfolio = await acme.portfolios.getPortfolio();\nconst acmeDid = acme.did;\n\nconst alice = await apiCeo.identities.getIdentity({\n  did: aliceDid,\n});\nconst aliceColdStore = await alice.portfolios.getPortfolio({\n  portfolioId: new BigNumber(coldStoreId),\n});\n")))),(0,i.kt)("p",null,"Now to the settlement instruction:"),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const distributionInstructionQueue: TransactionQueue<Instruction> =\n  await distributionVenue.addInstruction({\n    legs: [\n      {\n        amount: new BigNumber(20000),\n        from: acmeDefaultPortfolio,\n        to: aliceColdStore,\n        asset: asset,\n      },\n    ],\n  });\nconst distributionInstruction: Instruction =\n  await distributionInstructionQueue.run();\nconst distributionInstructionId: string =\n  distributionInstruction.id.toString(10);\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const distributionInstructionQueue = await distributionVenue.addInstruction({\n  legs: [\n    {\n      amount: new BigNumber(20000),\n      from: acmeDefaultPortfolio,\n      to: aliceColdStore,\n      asset: asset,\n    },\n  ],\n});\nconst distributionInstruction = await distributionInstructionQueue.run();\nconst distributionInstructionId = distributionInstruction.id;\n")))),(0,i.kt)("p",null,"This instruction is now recorded in the blockchain as pending. Alice the CEO is satisfied with it. She doesn't need to affirm it as the SDK identified her affirmation would have been required anyway, and so used the relevant ",(0,i.kt)("a",{parentName:"p",href:"https://docs.polymesh.live/pallet_settlement/enum.Call.html#variant.add_and_affirm_instruction"},(0,i.kt)("inlineCode",{parentName:"a"},"add_and_affirm_instruction"))," extrinsic right away."),(0,i.kt)("h2",{id:"does-alice-agree"},"Does Alice agree?"),(0,i.kt)("p",null,"Let's return to Alice, the future share owner, and seek her affirmation."),(0,i.kt)("p",null,"Since she is most likely on another computer or system, we need once more to reinstantiate the instruction from Alice's point of view. For that to happen, Alice the CEO needs to send, or copy-paste, ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeDid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"distributionVenueId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"distributionInstructionId")," to Alice's system:"),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const acme: Identity = await apiAlice.identities.getIdentity({\n  did: acmeDid,\n});\nconst venue: Venue = (await acme.getVenues()).find((venue: Venue) => {\n  return venue.id.isEqualTo(new BigNumber(distributionVenueId));\n});\nconst instructions: Instruction[] = await venue.getInstructions();\nconst aliceInstruction: Instruction = instructions.pending.find(\n  (instruction: Instruction) => {\n    return instruction.id.isEqualTo(new BigNumber(distributionInstructionId));\n  }\n);\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const acme = await apiAlice.identities.getIdentity({\n  did: acmeDid,\n});\nconst venue = (await acme.getVenues()).find((venue) => {\n  return venue.id.isEqualTo(new BigNumber(distributionVenueId));\n});\nconst instructions = await venue.getInstructions();\nconst aliceInstruction = instructions.pending.find((instruction) => {\n  return instruction.id.isEqualTo(new BigNumber(distributionInstructionId));\n});\n")))),(0,i.kt)("p",null,"Alice could also have chosen to retrieve all the pending instructions associated with her ",(0,i.kt)("inlineCode",{parentName:"p"},"SigningIdentity"),". That would have included all instructions, not just that one from the distribution venue she knows about. With a view to reduce the possibility of spam, she chose to use the venue to retrieve the instructions."),(0,i.kt)("p",null,"Now, it is just a matter of affirming the instruction:"),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const updatedInstructionQueue: TransactionQueue<Instruction> =\n  await aliceInstruction.affirm();\nconst updatedInstruction: Instruction = await updatedInstructionQueue.run();\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const updatedInstructionQueue = await aliceInstruction.affirm();\nconst updatedInstruction = await updatedInstructionQueue.run();\n")))),(0,i.kt)("p",null,"And with this, ",(0,i.kt)("strong",{parentName:"p"},"Alice got her 20,000 shares"),"."),(0,i.kt)("h2",{id:"can-alice-confirm-she-received-the-shares"},"Can Alice confirm she received the shares?"),(0,i.kt)("p",null,"Well, she can check what's inside her portfolio:"),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const coldStore: NumberedPortfolio = await alice.portfolios.getPortfolio({\n  portfolioId: new BigNumber(coldStoreId),\n});\nconst acmeAssetBalances: PortfolioBalance[] = await coldStore.getAssetBalances({\n  assets: ['ACME'],\n});\nconst acmeAssetBalance: PortfolioBalance = acmeAssetBalances[0];\nassert(acmeAssetBalance.total.isEqualTo(new BigNumber('20000')));\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const coldStore = await alice.portfolios.getPortfolio({\n  portfolioId: new BigNumber(coldStoreId),\n});\nconst acmeAssetBalances = await coldStore.getAssetBalances({\n  assets: ['ACME'],\n});\nconst acmeAssetBalance = acmeAssetBalances[0];\nassert(acmeAssetBalance.total.isEqualTo(new BigNumber('20000')));\n")))),(0,i.kt)("h2",{id:"how-can-alice-issue-the-shares-of-other-founders"},"How can Alice issue the shares of other founders?"),(0,i.kt)("p",null,"As the primary issuance agent, she can repeat the steps to create one instruction per founder."),(0,i.kt)("p",null,"On the other hand, if the founders have decided that they should all receive their shares in a single atomic instruction, then, Alice would have to create a single instruction with all the legs:"),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const issueQueue: TransactionQueue<Asset> = await issuance.issue({\n  amount: new BigNumber('100000'),\n});\nawait issueQueue.run();\nconst distributionInstructionQueue: TransactionQueue<Instruction> =\n  await distributionVenue.addInstruction({\n    legs: [\n      {\n        amount: new BigNumber(20000),\n        from: acmeDefaultPortfolio,\n        to: aliceColdStore,\n        asset: asset,\n      },\n      {\n        amount: new BigNumber(30000),\n        from: acmeDefaultPortfolio,\n        to: bobTargetPortfolio,\n        asset: asset,\n      },\n      {\n        amount: new BigNumber(50000),\n        from: acmeDefaultPortfolio,\n        to: carolTargetPortfolio,\n        asset: asset,\n      },\n    ],\n  });\nconst distributionInstruction: Instruction =\n  await distributionInstructionQueue.run();\nconst distributionInstructionId: string =\n  distributionInstruction.id.toString(10);\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const issueQueue = await issuance.issue({\n  amount: new BigNumber('100000'),\n});\nawait issueQueue.run();\nconst distributionInstructionQueue = await distributionVenue.addInstruction({\n  legs: [\n    {\n      amount: new BigNumber(20000),\n      from: acmeDefaultPortfolio,\n      to: aliceColdStore,\n      asset: asset,\n    },\n    {\n      amount: new BigNumber(30000),\n      from: acmeDefaultPortfolio,\n      to: bobTargetPortfolio,\n      asset: asset,\n    },\n    {\n      amount: new BigNumber(50000),\n      from: acmeDefaultPortfolio,\n      to: carolTargetPortfolio,\n      asset: asset,\n    },\n  ],\n});\nconst distributionInstruction = await distributionInstructionQueue.run();\nconst distributionInstructionId = distributionInstruction.id.toString(10);\n")))),(0,i.kt)("p",null,"or whichever distribution was agreed between the parties."),(0,i.kt)("p",null,"The advantage of this single operation is that all parties can see in one go whether the eventual outcome is as per previously agreed."),(0,i.kt)("h2",{id:"when-all-is-done"},"When all is done"),(0,i.kt)("p",null,"Assuming all parties have received their shares, it could be advantageous for the company to create a checkpoint. This post-issuance checkpoint would provide visibility about what was achieved during the issuance. A simple checkpoint is all you need. Note that only the token owner can create a checkpoint:"),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const checkpointQueue: TransactionQueue<Checkpoint> =\n  await asset.checkpoints.create();\nconst checkpoint: Checkpoint = await checkpointQueue.run();\nconst postDistributionCheckpointId: string = checkpoint.id.toString(10);\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const checkpointQueue = await asset.checkpoints.create();\nconst checkpoint = await checkpointQueue.run();\nconst postDistributionCheckpointId = checkpoint.id.toString(10);\n")))),(0,i.kt)("p",null,"The checkpoint has an id, ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," if it is ACME's first checkpoint, which can be kept off-chain for future reference."),(0,i.kt)("p",null,"That's it, the lazy checkpoint is created, and has recorded all balances. For instance, at any point in time in the future, if Bob wants to get Carol's balance after the distribution, he needs to:"),(0,i.kt)(d,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(p,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const asset: Asset = await apiBob.assets.getAsset({\n  ticker: 'ACME',\n});\nconst postDistributionCheckpoint: Checkpoint = await asset.checkpoints.getOne({\n  id: new BigNumber(postDistributionCheckpointId),\n});\nconst carolAcmeBalanceAtDistribution: BigNumber =\n  await postDistributionCheckpoint.balance({\n    identity: carol,\n  });\n"))),(0,i.kt)(p,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const asset = await apiBob.assets.getAsset({\n  ticker: 'ACME',\n});\nconst postDistributionCheckpoint = await asset.checkpoints.getOne({\n  id: new BigNumber(postDistributionCheckpointId),\n});\nconst carolAcmeBalanceAtDistribution = await postDistributionCheckpoint.balance(\n  {\n    identity: carol,\n  }\n);\n")))),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/sdk-docs/"},"SDK documents"))))}h.isMDXComponent=!0}}]);