"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[43965],{34845:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(74848),i=o(28453);const r={title:"Governance",description:"",subsite:"polymesh-docs"},s=void 0,a={id:"network/governance",title:"Governance",description:"",source:"@site/polymesh-docs/network/governance.mdx",sourceDirName:"network",slug:"/network/governance",permalink:"/polymesh-documentation-site/polymesh-docs/network/governance",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/polymesh-docs/network/governance.mdx",tags:[],version:"current",frontMatter:{title:"Governance",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"Fees",permalink:"/polymesh-documentation-site/polymesh-docs/network/fees"},next:{title:"Ledger Hardware Wallet",permalink:"/polymesh-documentation-site/polymesh-docs/network/ledger"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Governance Flow Diagram",id:"governance-flow-diagram",level:2},{value:"Polymesh Improvement Proposals",id:"polymesh-improvement-proposals",level:2},{value:"Signalling",id:"signalling",level:2},{value:"Committees",id:"committees",level:2},{value:"Governing Council",id:"governing-council",level:2},{value:"Release Coordinator",id:"release-coordinator",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Polymesh includes on-chain governance to manage network upgrades, changing parameters of the network (e.g. slashing percentages), permissioning network roles and distributing treasury funds."}),"\n",(0,t.jsxs)(n.admonition,{title:"Network Treasury",type:"info",children:[(0,t.jsxs)(n.p,{children:["Polymesh has a special account, designated as the network treasury. POLYX can only be disbursed from the treasury using the governance process, in particular by the submission and ratification of a ",(0,t.jsx)(n.a,{href:"#polymesh-improvement-proposals",children:"PIP"})," which represents a disbursement from the treasury to a specified account."]}),(0,t.jsx)(n.p,{children:"The intention is that treasury funds are disbursed to facilitate the adoption and development of Polymesh - it may be used for grants, direct payments to identities who perform specified actions for the network or any other purpose that the governance process deems reasonable."})]}),"\n",(0,t.jsx)(n.p,{children:"The governance system is designed to allow both community members and technical experts to collaborate on improving Polymesh and managing network changes."}),"\n",(0,t.jsx)(n.p,{children:"There are three main groups of actors in Polymesh governance:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"POLYX token holders"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Committees (e.g. Technical Committee, Upgrade Committee)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Governing Council"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The governance process begins either via a community submitted proposal, which is then curated by other POLYX token holders, or a committee submitted proposal. In both cases the governing council is responsible for accessing the change and determining whether it should be ratified, rejected or temporarily skipped."}),"\n",(0,t.jsx)(n.p,{children:"The governance system consists of POLYX token holders populating and curating a list of PIPs ordered by their importance to the community. The governing council will then consider this list of PIPs, in their curated order, on a periodic basis (e.g. once per month), ratifying, rejecting or skipping each PIP in order as appropriate."}),"\n",(0,t.jsx)(n.p,{children:"In addition to the Governing Council there are other committees (e.g. Technical Committee) that can submit PIPs directly to the Governing Council for review, bypassing the community curation process. However generally we expect most PIPs to go through the usual flow of the community curation process, and for direct committee submitted proposals to be rare."}),"\n",(0,t.jsx)(n.h2,{id:"governance-flow-diagram",children:"Governance Flow Diagram"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Governance Flow Diagram",src:o(80887).A+"",width:"3150",height:"2513"})}),"\n",(0,t.jsx)(n.h2,{id:"polymesh-improvement-proposals",children:"Polymesh Improvement Proposals"}),"\n",(0,t.jsx)(n.p,{children:"Polymesh Improvement Proposals (PIPs) represent an on-chain action that the community or a committee is recommending to the Governing Council."}),"\n",(0,t.jsx)(n.p,{children:"Polymesh Improvement Proposals (PIPs) represent any of change to the network, and can be created both by dedicated committees as well as any POLYX token holder and are actioned by the Governing Council."}),"\n",(0,t.jsxs)(n.p,{children:["A PIP is an on-chain dispatchable function w/ parameters alongside some metadata giving some additional context as to why the function should be called. For example, it may be a call to ",(0,t.jsx)(n.code,{children:"system::set_code(new_binary)"})," which is linked to a Github PR describing the change."]}),"\n",(0,t.jsx)(n.p,{children:"These PIP dispatchables can only be executed by the Governing Council and not an individual user."}),"\n",(0,t.jsx)(n.p,{children:"PIPs are also used to permission certain on-chain identities to have special privileged roles. This includes adding and removing permissioned operators and CDD service providers."}),"\n",(0,t.jsx)(n.p,{children:"Some common examples include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"network upgrades"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"treasury disbursement"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"tokenomics parameter change"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"adding new permissioned operators"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"adding new permissioned CDD service providers"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"signalling",children:"Signalling"}),"\n",(0,t.jsx)(n.p,{children:"It is important that PIPs are curated by community members (POLYX token holders) to provide feedback to the Governing Council on the relative importance to the community of different PIPs."}),"\n",(0,t.jsx)(n.p,{children:"Any POLYX token holder, in addition to being able to submit a PIP for consideration, can signal their view on other community submitted PIPS, both positively or negatively, by bonding POLYX to the relevant PIP. The POLYX token holders signal is proportional to the amount of POLYX bonded by that community member."}),"\n",(0,t.jsx)(n.p,{children:"When the Governing Council triggers a PIP snapshot, we take these signals and use them to order the community submitted PIPs for consideration by the Governing Council."}),"\n",(0,t.jsx)(n.p,{children:"Token holders can unbond their POLYX and remove their support (or lack of support) from a PIP at any time. Bonding POLYX to signal on different PIPs does not prevent token holders from staking their POLYX."}),"\n",(0,t.jsx)(n.h2,{id:"committees",children:"Committees"}),"\n",(0,t.jsx)(n.p,{children:"Polymesh governance includes committees. Each committee is a group of identities which a specific remit to manage certain types of network changes."}),"\n",(0,t.jsx)(n.p,{children:"Each committee has a membership, with the current members being responsible for voting new members in or existing members out."}),"\n",(0,t.jsx)(n.p,{children:"Associated with each committee is a voting threshold - for example, if the committee has 5 members, and a threshold of 50%, then at least 3 members of the committee must agree on an action before it is executed by the committee."}),"\n",(0,t.jsx)(n.p,{children:"Committees can submit PIPs which are included and then put in front of the Governance Council for consideration. The Governing Council can choose to ratify, reject or ignore a committee submitted PIP."}),"\n",(0,t.jsx)(n.p,{children:"Unlike community submitted PIPs, a committee submitted PIP is not subject to signalling from the community of POLYX token holders, and is always eligible for actioning by the Governing Council."}),"\n",(0,t.jsx)(n.h2,{id:"governing-council",children:"Governing Council"}),"\n",(0,t.jsx)(n.p,{children:"The Polymesh Governing Council is ultimately responsible for actioning PIPs which were submitted either via the community curation process, or directly by one of the committees."}),"\n",(0,t.jsx)(n.p,{children:"Any member of the governing council can trigger a PIP snapshot. The snapshot summarises the current list of PIPs (both from the community and committees) and orders community based PIPs based on their signal."}),"\n",(0,t.jsx)(n.p,{children:"The Governing Council then meet to discuss the PIPs included in the snapshot. For community curated PIPs, the Governing Council must work through them based on their curated order, choosing whether to ratify, reject or skip each PIP in turn."}),"\n",(0,t.jsx)(n.p,{children:"For PIPs which are skipped, we track how many times they have been skipped, and limit the Governing Council to skipping a particular PIP too many times. This is designed to give the Governing Council the flexibility they need to reasonable govern the evolution of the Polymesh network, as well as ensuring that community signalling of the relative importance of PIPs is closely considered by the Governing Council."}),"\n",(0,t.jsx)(n.p,{children:"For PIPs submitted by committees rather than through the community curation process, the Governing Council is free to ratify or reject these PIPs in any order."}),"\n",(0,t.jsx)(n.p,{children:"The Governance Council can be thought of as a multisig controlled by its members, and has an associated voting threshold that must be reached in order to execute an action through the Governing Council. This applies both for PIP management as well as some additional non-PIP related actions that the Governing Council may need to execute."}),"\n",(0,t.jsx)(n.p,{children:"These non-PIP actions include managing the membership of the Governing Council itself, with existing members needing to agree and vote on the addition or removal of members, as well as changes to the voting structure, for example the voting threshold."}),"\n",(0,t.jsxs)(n.p,{children:["The Governing Council is also able to issue a ",(0,t.jsx)(n.a,{href:"/polymesh-docs/primitives/cdd",children:"Customer Due Diligence"})," claim should the need arise."]}),"\n",(0,t.jsx)(n.h2,{id:"release-coordinator",children:"Release Coordinator"}),"\n",(0,t.jsx)(n.p,{children:"One member of the Governing Council is elected as the Release Coordinator. The role of the Release Coordinator is to schedule PIPs that have been ratified by the Governing Council."}),"\n",(0,t.jsx)(n.p,{children:"Every ratified PIP has a default execution time, set as a specific amount of blocks from the time it was ratified. The Release Coordinator can re-schedule any PIP to a different execution block or choose to enact it immediately. This provides flexibility to coordinate the release of critical fixes, and ensure that any stakeholders in a particular PIP are coordinated and well prepared before the PIP is executed."}),"\n",(0,t.jsx)(n.p,{children:"Release coordinators are elected by the governing council members, and must be a current member of the governing council."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},80887:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/Polymesh_Governance-a68e747d368f68730f4df70d601bba59.png"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(96540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);