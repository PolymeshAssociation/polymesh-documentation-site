"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[87935],{76587:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(74848),a=i(28453);const s={sidebar_position:4,title:"With the SDK",description:"Corporate actions with the Polymesh SDK"},o=void 0,c={id:"actions/actions-sdk",title:"With the SDK",description:"Corporate actions with the Polymesh SDK",source:"@site/docs/06-actions/actions-sdk.mdx",sourceDirName:"06-actions",slug:"/actions/actions-sdk",permalink:"/polymesh-documentation-site/docs/actions/actions-sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/06-actions/actions-sdk.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"With the SDK",description:"Corporate actions with the Polymesh SDK"},sidebar:"defaultSidebar",previous:{title:"Token Studio Dashboard",permalink:"/polymesh-documentation-site/docs/actions/token-dashboard/"},next:{title:"Know Your Customer",permalink:"/polymesh-documentation-site/docs/kyc/kyc"}},r={},d=[{value:"Agent permissioning",id:"agent-permissioning",level:2},{value:"Checkpointing",id:"checkpointing",level:2},{value:"Prefunding",id:"prefunding",level:2},{value:"Dividend action preparing",id:"dividend-action-preparing",level:2},{value:"Dividend claiming",id:"dividend-claiming",level:2},{value:"Reclaiming unclaimed funds",id:"reclaiming-unclaimed-funds",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Links",id:"links",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{TabItem:i,Tabs:s}=n;return i||u("TabItem",!0),s||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In the previous exercise, after a good quarter, ACME distributed a simple dividend, and Alice collected her share of the dividend tokens, in this case STBL."}),"\n",(0,t.jsx)(n.p,{children:"The Polymesh Dashboard is constructed with the SDK. The SDK supports every process you see there, and more. Use the SDK to build integrations with internal systems. Fortunately, the SDK's methods are intelligible when you know what it is you intend to do."}),"\n",(0,t.jsx)(n.h2,{id:"agent-permissioning",children:"Agent permissioning"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the corporate actions (CA) agent is the token owner, or in our example ACME, represented by ",(0,t.jsx)(n.code,{children:"apiCeo"}),":"]}),"\n",(0,t.jsxs)(s,{groupId:"code-language",children:[(0,t.jsx)(i,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const signingManagerCeo: LocalSigningManager = await LocalSigningManager.create(\n  {\n    accounts: [\n      {\n        mnemonic: 'word31 word32 ...',\n      },\n    ],\n  }\n);\nconst apiCeo: Polymesh = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerCeo,\n});\nconst acme: Identity = await apiCeo.getSigningIdentity();\nconst acmeDid: string = acme.did;\n"})})}),(0,t.jsx)(i,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const signingManagerCeo = await LocalSigningManager.create({\n  accounts: [\n    {\n      mnemonic: 'word31 word32 ...',\n    },\n  ],\n});\nconst apiCeo = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerCeo,\n});\nconst acme = await apiCeo.getSigningIdentity();\nconst acmeDid = acme.did;\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Nonetheless, we are going to set up a separate account. So let's prepare it:"}),"\n",(0,t.jsxs)(s,{groupId:"code-language",children:[(0,t.jsx)(i,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const signingManagerCaAgent: LocalSigningManager =\n  await LocalSigningManager.create({\n    accounts: [\n      {\n        mnemonic: 'word61 word62 ...',\n      },\n    ],\n  });\nconst apiCaAgent: Polymesh = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerCaAgent,\n});\nconst caAgent: Identity = await apiCaAgent.getSigningIdentity();\nconst caAgentDid: string = caAgent.did;\n"})})}),(0,t.jsx)(i,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const signingManagerCaAgent = await LocalSigningManager.create({\n  accounts: [\n    {\n      mnemonic: 'word61 word62 ...',\n    },\n  ],\n});\nconst apiCaAgent = await Polymesh.connect({\n  nodeUrl: 'wss://testnet-rpc.polymesh.live', // or your preferred node\n  signingManager: signingManagerCaAgent,\n});\nconst caAgent = await apiCaAgent.getSigningIdentity();\nconst caAgentDid = caAgent.did;\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"In our example, Alice the CEO is the one that is going to appoint the CA agent on the ACME security token."}),"\n",(0,t.jsxs)(s,{groupId:"code-language",children:[(0,t.jsx)(i,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const acmeAsset: Asset = await apiCeo.assets.getAsset({\n  ticker: 'ACME',\n});\nconst permissions: Permissions = acmeAsset.permissions;\nconst inviteAgentQueue: TransactionQueue<void> = await permissions.inviteAgent({\n  target: caAgentDid,\n  permissions: {\n    transactions: {\n      type: PermissionType.Include,\n      values: [\n        ModuleName.CorporateAction,\n        ModuleName.CorporateBallot,\n        ModuleName.CapitalDistribution,\n      ],\n    },\n  },\n});\nawait inviteAgentQueue.run();\n"})})}),(0,t.jsx)(i,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const acmeAsset = await apiCeo.assets.getAsset({\n  ticker: 'ACME',\n});\nconst permissions = acmeAsset.permissions;\nconst inviteAgentQueue = await permissions.inviteAgent({\n  target: caAgentDid,\n  permissions: {\n    transactions: {\n      type: 'Include',\n      values: ['CorporateAction', 'CorporateBallot', 'CapitalDistribution'],\n    },\n  },\n});\nawait inviteAgentQueue.run();\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Is that all? No, as always, the target has to accept the responsibility, which is encapsulated in an authorisation request. So back to the ",(0,t.jsx)(n.code,{children:"apiCaAgent"})," computer:"]}),"\n",(0,t.jsxs)(s,{groupId:"code-language",children:[(0,t.jsx)(i,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const caAuthorizations: AuthorizationRequest[] =\n  await caAgent.authorizations.getReceived({\n    type: AuthorizationType.BecomeAgent,\n    includeExpired: false,\n  });\nconst acmeCaAuthorization: AuthorizationRequest = caAuthorizations.find(\n  (pendingAuthorization: AuthorizationRequest) => {\n    return pendingAuthorization.issuer.did === acmeDid;\n  }\n);\nconst acceptQueue: TransactionQueue<void> = await acmeCaAuthorization.accept();\nawait acceptQueue.run();\n"})})}),(0,t.jsx)(i,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const caAuthorizations = await caAgent.authorizations.getReceived({\n  type: 'BecomeAgent',\n  includeExpired: false,\n});\nconst acmeCaAuthorization = caAuthorizations.find((pendingAuthorization) => {\n  return pendingAuthorization.issuer.did === acmeDid;\n});\nconst acceptQueue = await acmeCaAuthorization.accept();\nawait acceptQueue.run();\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["With this done, ",(0,t.jsx)(n.code,{children:"apiCaAgent"})," now allows the agent to act as ACME's corporate actions agent."]}),"\n",(0,t.jsxs)(n.p,{children:["If ACME wanted to remove the CA agent, then, it would need a call to ",(0,t.jsx)(n.code,{children:"acmeAsset.corporateActions.removeAgent()"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"checkpointing",children:"Checkpointing"}),"\n",(0,t.jsxs)(n.p,{children:["As the dividend is distributed as per each investor's holding, Polymesh needs a set value for everyone. That's the role of a checkpoint. Let's create it before the company announces publicly that it will distribute a dividend. With ",(0,t.jsx)(n.code,{children:"apiCeo"}),":"]}),"\n",(0,t.jsxs)(s,{groupId:"code-language",children:[(0,t.jsx)(i,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const checkpointQueue: TransactionQueue<Checkpoint> =\n  await acmeAsset.checkpoints.create();\nconst checkpoint: Checkpoint = await checkpointQueue.run();\nconst preDividendCheckpointId: string = checkpoint.id.toString(10);\n"})})}),(0,t.jsx)(i,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const checkpointQueue = await acmeAsset.checkpoints.create();\nconst checkpoint = await checkpointQueue.run();\nconst preDividendCheckpointId = checkpoint.id.toString(10);\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"prefunding",children:"Prefunding"}),"\n",(0,t.jsx)(n.p,{children:"Here we assume that the CA agent already has been funded the $5000 tokens that they will distribute as part of the dividend. If you are working on the Testnet, you can use STBL tokens as a placeholder for dollars, for instance. To get STBL, you can head to the Token Studio and participate in STBL's free Security Token Offering, in effect tap its faucet."}),"\n",(0,t.jsxs)(n.p,{children:["For the purpose of this exercise, we assume that the CA agent has been funded on a ",(0,t.jsx)(n.code,{children:"NumberedPortfolio"})," created for the purposes of managing ACME's corporate actions."]}),"\n",(0,t.jsxs)(s,{groupId:"code-language",children:[(0,t.jsx)(i,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const acmeCAFolioQueue: TransactionQueue<NumberedPortfolio> =\n  await apiCaAgent.identities.createPortfolio({\n    name: 'ACME Corporate Actions',\n  });\nconst acmeCAFolio: NumberedPortfolio = await acmeCAFolioQueue.run();\n"})})}),(0,t.jsx)(i,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const acmeCAFolioQueue = await apiCaAgent.identities.createPortfolio({\n  name: 'ACME Corporate Actions',\n});\nconst acmeCAFolio = await acmeCAFolioQueue.run();\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"dividend-action-preparing",children:"Dividend action preparing"}),"\n",(0,t.jsxs)(n.p,{children:["With the checkpoint done and the funds allocated, it is now time to prepare the action, on the CA agent's computer, with ",(0,t.jsx)(n.code,{children:"apiCaAgent"}),". Because we are on another computer, we need to reinstantiate some elements:"]}),"\n",(0,t.jsxs)(s,{groupId:"code-language",children:[(0,t.jsx)(i,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const acmeAsset: Asset = await apiCaAgent.assets.getAsset({\n  ticker: 'ACME',\n});\nconst preDividendCheckpoint: Checkpoint = await acmeAsset.checkpoints.getOne({\n  id: new BigNumber(preDividendCheckpointId),\n});\n"})})}),(0,t.jsx)(i,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const acmeAsset = await apiCaAgent.assets.getAsset({\n  ticker: 'ACME',\n});\nconst preDividendCheckpoint = await acmeAsset.checkpoints.getOne({\n  id: new BigNumber(preDividendCheckpointId),\n});\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"With that, we can create the action:"}),"\n",(0,t.jsxs)(s,{groupId:"code-language",children:[(0,t.jsx)(i,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const distributions: Distributions = acmeAsset.corporateActions.distributions;\nconst dividendActionQueue: TransactionQueue<DividendDistribution> = await distributions.configureDividendDistribution({\n    "description": "2022 Third Quarter",\n    "declarationDate": new Date(), // Here declared now, but can be any date.\n    "checkpoint": preDividendCheckpoint, // Good thing we created it. If not, it would create it automatically.\n    "paymentDate": new Date(2022, 8, 2, 23, 59), // Or whichever point at which ACME holders can claim their dividend.\n    "originPortfolio": acmeCAFolio, // Another well prepared item.\n    "currency": "STBL",\n    "maxAmount": new BigNumber("5000"), // This determines what will be locked.\n    "perShare": new BigNumber("0.25"), // Unlike with the Token Studio, you have to calculate it here.\n    "expiryDate": new Date(2023, 4, 1, 23, 59), // Sufficiently far in the future that holders have time to claim.\n    "targets": {\n        identities: [], // Nobody is excluded, i.e. everyone can claim a dividend.\n        treatment: TargetTreatment.Exclude;\n    },\n    "taxWithholdings": [], // Let\'s keep it simple.\n});\nconst dividendAction: DividendDistribution = await dividendActionQueue.run();\nconst dividendActionId: string = dividendAction.id.toString(10);\n'})})}),(0,t.jsx)(i,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const distributions = acmeAsset.corporateActions.distributions;\nconst dividendActionQueue = await distributions.configureDividendDistribution({\n    "description": "2022 Third Quarter",\n    "declarationDate": new Date(), // Here declared now, but can be any date.\n    "checkpoint": preDividendCheckpoint, // Good thing we created it. If not, it would create it automatically.\n    "paymentDate": new Date(2022, 8, 2, 23, 59), // Or whichever point at which ACME holders can claim their dividend.\n    "originPortfolio": acmeCAFolio, // Another well prepared item.\n    "currency": "STBL",\n    "maxAmount": new BigNumber("5000"), // This determines what will be locked.\n    "perShare": new BigNumber("0.25"), // Unlike with the Token Studio, you have to calculate it here.\n    "expiryDate": new Date(2023, 4, 1, 23, 59), // Sufficiently far in the future that holders have time to claim.\n    "targets": {\n        identities: [], // Nobody is excluded, i.e. everyone can claim a dividend.\n        treatment: TargetTreatment.Exclude;\n    },\n    "taxWithholdings": [], // Let\'s keep it simple.\n});\nconst dividendAction = await dividendActionQueue.run();\nconst dividendActionId = dividendAction.id.toString(10);\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"For the avoidance of doubt, dividend claimants can collect their dividends as per their holding of ACME at the time of the checkpoint, not at the time they claim the dividend."}),"\n",(0,t.jsx)(n.h2,{id:"dividend-claiming",children:"Dividend claiming"}),"\n",(0,t.jsxs)(n.p,{children:["Alice the individual is one of the ACME holders, and as such, at, and after, the payment date, she is entitled to withdraw her dividend. With that, she first needs to reinstantiate the dividend action in the context of her ",(0,t.jsx)(n.code,{children:"apiAlice"}),":"]}),"\n",(0,t.jsxs)(s,{groupId:"code-language",children:[(0,t.jsx)(i,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const acmeAsset: Asset = await apiAlice.assets.getAsset({\n  ticker: 'ACME',\n});\nconst acmeDividendWithDetails: DistributionWithDetails =\n  await acmeAsset.corporateActions.distributions.getOne({\n    id: new BigNumber(dividendActionId),\n  });\nconst acmeDividend: DividendDistribution = acmeDividendWithDetails.distribution;\nconst claimQueue: TransactionQueue<void> = await acmeDividend.claim(); // From the context of Alice, which is why we used apiAlice\nawait claimQueue.run();\n"})})}),(0,t.jsx)(i,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const acmeAsset = await apiAlice.assets.getAsset({\n  ticker: 'ACME',\n});\nconst acmeDividendWithDetails =\n  await acmeAsset.corporateActions.distributions.getOne({\n    id: new BigNumber(dividendActionId),\n  });\nconst acmeDividend = acmeDividendWithDetails.distribution;\nconst claimQueue = await acmeDividend.claim(); // From the context of Alice, which is why we used apiAlice\nawait claimQueue.run();\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"With that, Alice should now have her STBL tokens in her default portfolio."}),"\n",(0,t.jsx)(n.h2,{id:"reclaiming-unclaimed-funds",children:"Reclaiming unclaimed funds"}),"\n",(0,t.jsxs)(n.p,{children:["What if there are some funds left at the expiry? This can happen if a recipient does not care about it or lost a private key, for instance. Instead of leaving stranded funds indefinitely, the CA agent can reclaim them. Since this would happen at a later date, the agent has to reinstantiate the action like Alice did, but in the context of ",(0,t.jsx)(n.code,{children:"apiCaAgent"}),":"]}),"\n",(0,t.jsxs)(s,{groupId:"code-language",children:[(0,t.jsx)(i,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"\n\nconst acmeDividend: DividendDistribution = ...; // Just like Alice did\nconst reclaimQueue: TransactionQueue<void> = await acmeDividend.reclaimFunds();\nawait reclaimQueue.run();\n"})})}),(0,t.jsx)(i,{value:"js",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"\nconst acmeDividend = ...; // Just like Alice did\nconst reclaimQueue = await acmeDividend.reclaimFunds();\nawait reclaimQueue.run();\n\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"For the avoidance of doubt, the CA agent that can reclaim is the agent that created the action. If the token owner changed CA agent in the mean time, it is the old CA agent who can reclaim."}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"We saw that the lifecycle of a dividend corporate action includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Appointing a corporate actions agent."}),"\n",(0,t.jsx)(n.li,{children:"Creating a checkpoint, either explicitly, or implicitly."}),"\n",(0,t.jsx)(n.li,{children:"Collecting and placing the dividend funds in one portfolio of the CA agent's."}),"\n",(0,t.jsx)(n.li,{children:"Publishing the dividen action itself."}),"\n",(0,t.jsx)(n.li,{children:"Letting the recipients claim on their own."}),"\n",(0,t.jsx)(n.li,{children:"Reclaiming any unclaimed funds at expiry."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/sdk-docs/",children:"SDK documents"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);