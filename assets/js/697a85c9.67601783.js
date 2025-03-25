"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[47001],{87448:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"introduction/governance","title":"Governance","description":"On-Chain governance","source":"@site/docs/01-introduction/6-governance.mdx","sourceDirName":"01-introduction","slug":"/introduction/governance","permalink":"/polymesh-documentation-site/docs/introduction/governance","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/01-introduction/6-governance.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Governance","description":"On-Chain governance"},"sidebar":"defaultSidebar","previous":{"title":"Identity","permalink":"/polymesh-documentation-site/docs/introduction/identity"},"next":{"title":"Discovering the Testnets, Local Networks and Mainnet","permalink":"/polymesh-documentation-site/docs/introduction/networks/"}}');var i=s(74848),t=s(28453);const r={title:"Governance",description:"On-Chain governance"},a=void 0,h={},l=[{value:"Off-chain governance?",id:"off-chain-governance",level:2},{value:"Polymesh&#39;s approach to on-chain governance",id:"polymeshs-approach-to-on-chain-governance",level:2},{value:"The governance process",id:"the-governance-process",level:2},{value:"Step-by-step: Governance possibilities with the Dashboard",id:"step-by-step-governance-possibilities-with-the-dashboard",level:2},{value:"Links",id:"links",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:o,YoutubePlayer:r}=n;return o||p("Details",!0),r||p("YoutubePlayer",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{videoId:"r-_rMmiIrD0"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"In blockchains, the word governance describes the rules, process management\nand decision-making responsibilities by which the network participants keep the chain\nevolving."})}),"\n",(0,i.jsx)(n.p,{children:"It is always a challenging but important topic. This is especially true for blockchains on which participants issue security tokens, as the chain forms the source of truth, i.e. it establishes the state of facts and the rules of the network. A fundamental challenge is establishing a set of rules that provide assurance in an environment that is expected to evolve. A solution to this problem is to establish a strictly-enforced process that will govern the evolution of the rules."}),"\n",(0,i.jsxs)(n.p,{children:["There are two distinct ",(0,i.jsx)(n.strong,{children:"types of governance"})," in blockchain networks:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On-chain governance, whereby rules and decisions are made on-chain, as in the case of Tezos, Cardano, Polkadot, and, you guessed it, Polymesh;"}),"\n",(0,i.jsx)(n.li,{children:"Off-chain governance, whereby stakeholders debate on forums like Reddit, conferences, etc., as in the case of Ethereum and Bitcoin."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"off-chain-governance",children:"Off-chain governance?"}),"\n",(0,i.jsx)(n.p,{children:"Off-chain is the manner by which early blockchain developers handled governance. It creates challenges. For example, in the case of disagreement about changes to the blockchain, the rift can lead to separate factions backing more than one implementation. This situation can lead to hard forks, which is two different sources of truth depending on which set of rules observers believe is authoritative. Were this to happen in regulated securities settings, there is no current legal or regulatory clarity that addresses the more relevant state of the security tokens. Capital market participants and regulators are unlikely to accept this uncertainty. Simply put, this must be prevented."}),"\n",(0,i.jsx)(n.p,{children:"Next, even after stakeholders have reached consensus on a given change, node operators face a coordination problem when it comes to updating their systems. Nodes need to deploy their blockchain software within an agreed time-window. Again, node operators need to coordinate off-chain, for this to happen. If they disagree about deployments or the implementation, forks are likely."}),"\n",(0,i.jsx)(n.h2,{id:"polymeshs-approach-to-on-chain-governance",children:"Polymesh's approach to on-chain governance"}),"\n",(0,i.jsx)(n.p,{children:"As opposed to off-chain governance, on-chain governance's benefits lie in its rules transparency, the provable inclusion of stakeholders in the decision-making process, and on-chain coordination."}),"\n",(0,i.jsxs)(n.p,{children:["Governance is ",(0,i.jsx)(n.strong,{children:"on-chain"})," and upgrades unfold by a prescribed process that addresses both the decision-making stage and coordination problem at the deployment stage. The process is designed to be compatible with regulatory regimes and it provides a solution to the challenges general-purpose blockchains have in the areas of identity, accountability, confidentiality, system governance and evolution."]}),"\n",(0,i.jsx)(n.p,{children:"Governance covers the following areas:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the permissioning of operators and CDD providers,"}),"\n",(0,i.jsx)(n.li,{children:"certain system primitives, such as inflation and reward rates, fines, and bonding periods, and"}),"\n",(0,i.jsx)(n.li,{children:"chain upgrades."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This is a permissioned blockchain. Operators can join or leave the network and they are always known entities approved by the network users via the on-chain governance system."}),"\n",(0,i.jsxs)(n.p,{children:["Chain ",(0,i.jsx)(n.strong,{children:"upgrades"}),", i.e. changes to the protocol, are decided and implemented by certain stakeholders as delineated in the current governance system. Moreover, the node runtime is stored directly on-chain. Meaning an upgrade leads to a change of the on-chain representation of the runtime. Thus, each node checks if there is a new runtime, and if there is, starts working with that new version automatically. The possibility of non-malicious hard forks is therefore highly unlikely."]}),"\n",(0,i.jsx)(n.p,{children:"Another aspect of Polymesh that adds to the improbability of hard forks is the choice to use WebAssembly (WASM) for the protocol runtime. WASM bytecode was initially conceived to enable high-performance applications on webpages. For this reason, large software companies maintain WASM compilers and virtual machines for various operating system platforms. This landscape makes the risk of hard forks caused by compiler or platform bugs highly unlikely."}),"\n",(0,i.jsx)(n.p,{children:"Polymesh's clear-structured governance mechanism assists in achieving the finality required for legal transfer and payment probability. This is a big added value compared to the offer of general blockchains."}),"\n",(0,i.jsxs)(n.p,{children:["Adding to a fork improbability, Polymesh is built on the ",(0,i.jsx)(n.a,{href:"https://www.substrate.io/",children:"Substrate Framework"}),". It allows for ",(0,i.jsx)(n.a,{href:"https://www.parity.io/a-brief-summary-of-everything-substrate-polkadot/",children:"forkless runtime upgrades"}),", which results in seamless upgrades on the blockchain rather than risking a hard fork, as well as the recording and storing of the governance information on-chain. Any change to the blockchain is recorded directly on it. This is convenient from a chain management standpoint and enables the possibility for users to have a say in the chain management through a user-friendly interface, the ",(0,i.jsx)(n.em,{children:"governance dApp"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"the-governance-process",children:"The governance process"}),"\n",(0,i.jsx)(n.p,{children:"Upgrades to the Polymesh blockchain can be submitted for review and approval through a Polymesh Improvement Proposal (PIP). Proposals are concrete, on-chain actions. Areas relating to the off-chain realm are not addressed by PIPs."}),"\n",(0,i.jsxs)(n.p,{children:["Polymesh bases its governance on a ",(0,i.jsx)(n.strong,{children:"two chamber approach"}),". The first chamber consists of all POLYX token holders. Any POLYX holder has the right to submit a PIP by submitting detailed information regarding the change and bond POLYX to the PIP. The second chamber is the Polymesh Governing Council."]}),"\n",(0,i.jsx)(n.p,{children:"Let's take a closer look at the stakeholders involved in governance!"}),"\n",(0,i.jsxs)(n.p,{children:["Governance in Polymesh includes ",(0,i.jsx)(n.strong,{children:"three stakeholders"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the POLYX token holders,"}),"\n",(0,i.jsx)(n.li,{children:"the Committees, and"}),"\n",(0,i.jsx)(n.li,{children:"the Governing Council."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Any ",(0,i.jsx)(n.strong,{children:"POLYX token holder"})," can submit so-called ",(0,i.jsx)(n.em,{children:"community-curated"})," PIPs, and engage other holders so they signal their approval or disapproval of these PIPs."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Committees"})," are groups of individuals with up to 20 members. They are categorised by topics. Committees can submit ",(0,i.jsx)(n.em,{children:"committee"})," PIPs. These are similar to community-curated PIPs but cannot be signalled on, and they can always be enacted at any time in any order by the Governing Council, the decision-making body."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Governing Council"})," is a group of individuals or entities. It is the body responsible for decision-making. Currently, membership in the Committees and the Governing Council is not mutually exclusive, i.e. members can be part of both at the same time. Membership for a genesis block, i.e. the first block in the chain, is set ahead of time. The primary role of the Governing Council is to manage the blockchain, find consensus, and chart the general direction of development for the blockchain. It can fast-track proposals to deal with emergency fixes. Another role of the Governing Council is to manage the membership of Committees and of the Council itself."]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)("summary",{children:"The stages of the governance process"}),"\nLet's take a more detailed look at the different stages of the governance process! How does a PIP become an upgrade to the Polymesh blockchain?"]}),(0,i.jsxs)(n.p,{children:["The governance process is comprised of the following ",(0,i.jsx)(n.strong,{children:"stages"}),":"]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Proposal:"})}),"\n",(0,i.jsxs)(n.p,{children:["To ",(0,i.jsx)(n.strong,{children:"propose"})," an upgrade, one has to submit a PIP. One can bond some POLYX to the proposal and add information specifying the proposal. When a PIP is submitted, it becomes visible and ",(0,i.jsx)(n.strong,{children:"support signalling"})," by the community of token holders can start. That is, POLYX token holders can signal support or dissent with the PIP by bonding some of their POLYX to it. For this, the native token is used as an indicator of the proposal's popularity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signalling on community-curated PIPs"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"signalling"})," during that phase comes down to the number of POLYX tokens bonded, where one POLYX equals one vote. Note that this 1-1 ratio could be modified by a PIP too. The number of POLYX tokens can be split, but at all times, one cannot use more POLYX than one holds at the time. During the bonding, the POLYX is locked, in that it cannot be spent but can ",(0,i.jsx)(n.strong,{children:"only"})," be withdrawn, and actually also be staked. This condition doesn't make users opt between network security and the use of tokens. Once the proposal is through, i.e. the PIP reached enough support, or in case votes are withdrawn, the tokens are freed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Snapshot"})}),"\n",(0,i.jsxs)(n.p,{children:["After PIPs finalise the signalling stage, they are considered in a ",(0,i.jsx)(n.strong,{children:"Governing Council Meeting"}),'. First, a snapshot of the proposals is taken and ordered by the number of "Yes" and "No" votes for each proposal.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Governing Council meeting"})}),"\n",(0,i.jsx)(n.p,{children:"How is the order of debate determined exactly? Does it go from most to least important proposal? The order of debate follows the order found in the snapshot."}),"\n",(0,i.jsx)(n.p,{children:"The number of proposals revised during each session can be determined by the council."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Voting"})}),"\n",(0,i.jsx)(n.p,{children:'When considering each individual PIPs, council members can either "approve", "reject", or "skip" a proposal. With the caveat that there is only a fixed number of times a proposal can be skipped before it has to be approved or rejected, as a decision for each proposal is required.'}),"\n",(0,i.jsx)(n.p,{children:"Now, the signals come into play. The signals from the token holders are indications for the Governing Council to base their decisions on it in regard to support for a PIP as well as perceived importance. Signalling can be understood as a result of a compromise between managing the ecosystem effectively whilst incorporating the views from the wider Polymesh community."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Execution"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the Governing Council has approved PIPs, the so-called ",(0,i.jsx)(n.strong,{children:"Release Coordinator"})," executes them, i.e. schedules their implementation. The Release Coordinator is a member of the Governing Council, is appointed by it and can be replaced too."]}),"\n",(0,i.jsx)(n.p,{children:"The proposals are implemented on-chain, as PIPs and the snapshot are token-curated."}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Governance Process",src:s(87124).A+"",width:"1917",height:"1740"})}),"\n",(0,i.jsx)(n.p,{children:"Transparency can be a tricky characteristic when it comes to voting procedures in general. In Polymesh, transparency is limited on voting records. Meaning, one cannot know who voted how, only the vote result as such."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Learn more and test-drive governance here ",(0,i.jsx)(n.a,{href:"https://governance.polymesh.network/",children:"https://governance.polymesh.network/"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"step-by-step-governance-possibilities-with-the-dashboard",children:"Step-by-step: Governance possibilities with the Dashboard"}),"\n",(0,i.jsx)(n.p,{children:"Now that we have a clear understanding of the governance process itself, let's take a look at how this translates to our Dashboard."}),"\n",(0,i.jsxs)(n.p,{children:["First, open up your browser and check that you are logged into your Polymesh Wallet. Open the dashboard by going to: ",(0,i.jsx)(n.a,{href:"https://dashboard.polymath.network/",children:"https://dashboard.polymath.network/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If it's your first time, you will probably see the following:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Welcome to the Polymesh Dashboard",src:s(25199).A+"",width:"2788",height:"1190"})}),"\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Connect Polymesh Wallet"}),". Your wallet will then ask you for an authorisation."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Dashboard Access",src:s(52253).A+"",width:"150",height:"284"})}),"\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Authorize"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The Dashboard will open in your browser."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Dashboard Overview",src:s(25225).A+"",width:"2270",height:"1192"})}),"\n",(0,i.jsxs)(n.p,{children:["Now, in the upper tab bar click on ",(0,i.jsx)(n.code,{children:"Governance"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This will lead you to:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Polymesh Governance Page",src:s(78626).A+"",width:"2784",height:"1254"})}),"\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Go to Governance"})," to be redirected to ",(0,i.jsx)(n.a,{href:"https://governance.polymesh.network/",children:"https://governance.polymesh.network/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connect Wallet to Governance",src:s(61608).A+"",width:"2440",height:"1388"})}),"\n",(0,i.jsxs)(n.p,{children:["If you see the above, then please click on ",(0,i.jsx)(n.code,{children:"Connect Polymesh Wallet"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Once you have connected the wallet or if you don't see the above, the redirect should lead you to:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Governance Dashboard Overview",src:s(77623).A+"",width:"2642",height:"1338"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Welcome to the Governance Dashboard!"})}),"\n",(0,i.jsx)(n.p,{children:"The dashboard also includes a short overview of your Polymesh ID, keys, and account balance."}),"\n",(0,i.jsx)(n.p,{children:"With the dashboard you are able to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"see who the council members are,"}),"\n",(0,i.jsx)(n.li,{children:"gain insights into the closed proposals,"}),"\n",(0,i.jsx)(n.li,{children:"take a look at the council agenda,"}),"\n",(0,i.jsx)(n.li,{children:"check the open proposals, and"}),"\n",(0,i.jsx)(n.li,{children:"create a proposal."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To see who the ",(0,i.jsx)(n.strong,{children:"members of the Governing Council"})," are, click on ",(0,i.jsx)(n.code,{children:"See council members"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"![List of Council Members](images/list-council members.png)"}),"\n",(0,i.jsx)(n.p,{children:"You will be redirected to a list of the members with their corresponding identities, i.e. DID."}),"\n",(0,i.jsxs)(n.p,{children:["Do you want to take a look at past proposals? Just click on the tab at the lower half of the page saying ",(0,i.jsx)(n.code,{children:"Closed Proposals"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Closed Proposals",src:s(92322).A+"",width:"2544",height:"1286"})}),"\n",(0,i.jsxs)(n.p,{children:["How is the council agenda looking? The same process applies; click on the tab at the lower half of the page titled ",(0,i.jsx)(n.code,{children:"Council Agenda"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Council Agenda",src:s(95902).A+"",width:"2610",height:"1302"})}),"\n",(0,i.jsxs)(n.p,{children:["To have an overview of the current proposals, which will be open to signalling by token holders, click on the tab ",(0,i.jsx)(n.code,{children:"Open Proposals"}),". You can sort the list of open PIPs by votes and proposal IDs."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Current Proposals",src:s(36502).A+"",width:"2524",height:"938"})}),"\n",(0,i.jsx)(n.p,{children:"All open proposals will be listed. The listing includes certain information on the PIPs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'the proposal ID (at the upper left corner of each "proposal card"),'}),"\n",(0,i.jsx)(n.li,{children:"right beneath it, the proposal name,"}),"\n",(0,i.jsx)(n.li,{children:"the identity of the user that submit the proposal,"}),"\n",(0,i.jsx)(n.li,{children:"the proposal's category, and"}),"\n",(0,i.jsx)(n.li,{children:"a button to participate in the signalling."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Have your say"})," to be directed to signalling for the PIP."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Overview Test Proposal",src:s(96221).A+"",width:"941",height:"362"})}),"\n",(0,i.jsxs)(n.p,{children:["To participate in the signalling, click either on ",(0,i.jsx)(n.code,{children:"Yes"})," or ",(0,i.jsx)(n.code,{children:"No"})," to show support or dissent, and enter the amount of POLYX with which you want to weigh your vote. You can also use ",(0,i.jsx)(n.code,{children:"Set Max"})," so that all your POLYX is used as weight for the proposal."]}),"\n",(0,i.jsxs)(n.p,{children:["Now, click on ",(0,i.jsx)(n.code,{children:"Submit"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"You can only bond as much POLYX as you currently hold!"})})}),"\n",(0,i.jsxs)(n.p,{children:["For example, let's support the test proposal with 10 POLYX. So, click ",(0,i.jsx)(n.code,{children:"Yes"})," and insert the number of POLYX in the field."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Support Proposals",src:s(56872).A+"",width:"941",height:"293"})}),"\n",(0,i.jsxs)(n.p,{children:["Once you hit ",(0,i.jsx)(n.code,{children:"Submit"}),", a window opens for you to review and confirm your response. As long as the proposal remains open, you can change your vote."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Submit Vote",src:s(34003).A+"",width:"839",height:"564"})}),"\n",(0,i.jsx)(n.p,{children:"Confirm if all looks good."}),"\n",(0,i.jsx)(n.p,{children:"A window to your wallet will open, requesting you to sign your vote."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Signing Vote",src:s(79838).A+"",width:"640",height:"934"})}),"\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Sign"})," after entering your wallet password in the field."]}),"\n",(0,i.jsx)(n.p,{children:"In your browser, you should see:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Notification Successful Voting",src:s(34343).A+"",width:"854",height:"602"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Congratulations! You just voted."})}),"\n",(0,i.jsx)(n.p,{children:"Now that we have explored the Dashboard. Let's just go for it and create a proposal!"}),"\n",(0,i.jsxs)(n.p,{children:["In your governance dashboard, click on the button ",(0,i.jsx)(n.code,{children:"Create a proposal"}),". This opens a side window in your browser that helps you include all the general information and implementation details necessary to submit a proposal."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Proposal Specifications",src:s(68563).A+"",width:"1066",height:"1504"})}),"\n",(0,i.jsx)(n.p,{children:"As general information, the proposal title and the proposal details, i.e. an URL to the details, is included. For the implementation details, one has to select a category for the proposal. The available categories are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"User Balances,"}),"\n",(0,i.jsx)(n.li,{children:"User Identity,"}),"\n",(0,i.jsx)(n.li,{children:"Proposal Rules,"}),"\n",(0,i.jsx)(n.li,{children:"User Identity,"}),"\n",(0,i.jsx)(n.li,{children:"Proposal Rules,"}),"\n",(0,i.jsx)(n.li,{children:"Polymesh Voting Rules,"}),"\n",(0,i.jsx)(n.li,{children:"Staking Parameters, and"}),"\n",(0,i.jsx)(n.li,{children:"System Preferences."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Categories",src:s(13042).A+"",width:"414",height:"285"})}),"\n",(0,i.jsx)(n.p,{children:"The function to call also has to be selected."}),"\n",(0,i.jsxs)(n.p,{children:["For the category ",(0,i.jsx)(n.em,{children:"User Balances"})," you can select ",(0,i.jsx)(n.em,{children:"Force Transfer"}),". Afterwards, you need to specify:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the Polymesh address from which tokens are transferred,"}),"\n",(0,i.jsx)(n.li,{children:"the Polymesh address to which tokens are transferred, and"}),"\n",(0,i.jsx)(n.li,{children:"the amount of POLYX to be transferred."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When selecting ",(0,i.jsx)(n.em,{children:"User Identity"})," the function to call is ",(0,i.jsx)(n.em,{children:"User Identity Master key rotation for CDD"}),". This function requires details in regard to the authorization for rotation."]}),"\n",(0,i.jsxs)(n.p,{children:["When choosing ",(0,i.jsx)(n.em,{children:"Proposal Rules"}),", the function is ",(0,i.jsx)(n.em,{children:"Set minimum bond required for proposals"}),". Details on the minimum bond have to be included."]}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.em,{children:"Polymesh Voting Rules"})," the option ",(0,i.jsx)(n.em,{children:"Set minimum bond required for proposal to pass"})," is available. It requires details on the numerator for threshold and denominator of threshold."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"System Preferences"})," category offers ",(0,i.jsx)(n.em,{children:"Queue code for network parameters"}),". A code snippet has to be added as detailed information."]}),"\n",(0,i.jsxs)(n.p,{children:["When the category is ",(0,i.jsx)(n.em,{children:"Staking Parameters"})," one can select between ",(0,i.jsx)(n.em,{children:"Add a permissioned operator"}),", ",(0,i.jsx)(n.em,{children:"Waive deferred operator fine"}),", ",(0,i.jsx)(n.em,{children:"Remove a permissioned operator"}),", and ",(0,i.jsx)(n.em,{children:"Set minimum stake amount"}),". When adding or removing a permissioned operator, specifications on the Polymesh ID for both and the intended count when adding an operator is required. To wave a deferred operator fine, era and list of fines are necessary. To propose a change on the minimum stake amount, a stake amount in POLYX needs to be provided."]}),"\n",(0,i.jsxs)(n.p,{children:["After including all general information and implementation details, enter the amount of bond for the proposal and click ",(0,i.jsx)(n.code,{children:"Submit"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"At the time of writing, the minimum amount for a bond is 5,000.00 POLYX."})}),"\n",(0,i.jsx)(n.p,{children:"Afterwards, the proposal submission has to be confirmed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Proposal Submission Confirmation",src:s(7811).A+"",width:"391",height:"435"})}),"\n",(0,i.jsx)(n.p,{children:"Once you confirm, you will need to sign the proposal submission."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Signing Proposal Submission",src:s(46184).A+"",width:"321",height:"419"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Sign"})," the submission and you have just included a new proposal."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Successful Proposal Submission",src:s(66750).A+"",width:"481",height:"345"})}),"\n",(0,i.jsxs)(n.p,{children:["It will be visible under the ",(0,i.jsx)(n.code,{children:"Open Proposal"})," tab."]}),"\n",(0,i.jsx)(n.p,{children:"Congratulations on submitting a proposal!"}),"\n",(0,i.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/polymesh-docs/network/governance",children:"Polymesh Network: Governance"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},13042:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/category-overview-47faebc27f58b3e99d6a45b5915d06de.png"},92322:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/closed-proposals-618832695995400bc3563079ee9a4788.png"},95902:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/council-agenda-2c55ab96c0b66fa478fff558c977315e.png"},52253:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/dashboard-authorisation-ea9552ec4acab5922a0a50d4d845b276.png"},25225:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/dashboard-general-11f6ff87bfe25f5fba4808637a004516.png"},77623:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/governance-dashboard-e35d16ac1563886214997e8b017298d6.png"},61608:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/governance-landing-page-905c5c666390c4f63d14f92fcb155594.png"},87124:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/governance-process-ded867c4cd1449f5441b6c31e8add625.png"},36502:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/open-proposals-427e55e81b027074f375e92c31a35788.png"},34343:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/poll-submission-successful-86cf9614f4da6c30a1e8178994993826.png"},78626:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/polymesh-governance-page-39fa12bda3b79c0354b1d455b4b293f1.png"},68563:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/proposal-details-8e0fb85f46a00b7f14002754627aa359.png"},7811:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/proposal-submission-confirmation-2453f27fcdebee1db49b68b59adb21d3.png"},56872:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/proposal-support-e88d47e76edee39404d83059db126242.png"},46184:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/signing-proposal-48f9afaf97f0bba718ccc78d6e38f257.png"},79838:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/signing-vote-3f987c51385e83cbc0b375aa864128bd.png"},34003:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/submit-vote-1b098eeffa59b7d586cd6c8953c848fe.png"},66750:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/successful-proposal-submission-c30a92dab4696f470559c8deef82ea72.png"},96221:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/test-proposal-overview-e136d3d98409fa4a6101ad5370f60ba3.png"},25199:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/welcome-polymesh-dashboard-b426a8b58da26bf3b91e88be7e881405.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var o=s(96540);const i={},t=o.createContext(i);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);