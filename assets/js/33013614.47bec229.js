"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[78664],{4572:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=i(74848),s=i(28453);const o={sidebar_position:2,title:"Distribution Process",description:"Distributing Polymesh security tokens",slug:"/distribute/distribution-process/"},r=void 0,c={id:"distribute/distribute-introduction",title:"Distribution Process",description:"Distributing Polymesh security tokens",source:"@site/docs/04-distribute/distribute-introduction.mdx",sourceDirName:"04-distribute",slug:"/distribute/distribution-process/",permalink:"/polymesh-documentation-site/docs/distribute/distribution-process/",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/04-distribute/distribute-introduction.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Distribution Process",description:"Distributing Polymesh security tokens",slug:"/distribute/distribution-process/"},sidebar:"defaultSidebar",previous:{title:"Distributing Assets",permalink:"/polymesh-documentation-site/docs/distribute/distributing-assets/"},next:{title:"Token Studio Dashboard",permalink:"/polymesh-documentation-site/docs/distribute/with-dashboard"}},a={},h=[{value:"Atomicity",id:"atomicity",level:2},{value:"Instruction",id:"instruction",level:2},{value:"Asset checkpoints - Permanent records",id:"asset-checkpoints---permanent-records",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Let's start with: ",(0,n.jsx)(t.strong,{children:"What is a distribution?"})]}),"\n",(0,n.jsxs)(t.p,{children:["Capital distributions are a ",(0,n.jsx)(t.strong,{children:"common procedure in the financial world"}),". Most capital distributions are payments related to assets from an account, fund, or individual security to investors or other beneficiaries, or those related to payments of stock or other payouts to shareholders."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"source for a distribution"})," can be a number of financial products. Still, a distribution usually consists of a direct payment to a beneficiary."]}),"\n",(0,n.jsx)(t.p,{children:"As distributions are essential for financial products, especially securities, they have also found their way into the Polymesh design."}),"\n",(0,n.jsxs)(t.p,{children:["What we already covered in ",(0,n.jsx)(t.em,{children:"Origination"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["How the underlying asset has a lifecycle of its own, different from that of the security token. Typically expressed with the on-chain actions:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Minting, a.k.a. issuance,"}),"\n",(0,n.jsx)(t.li,{children:"Distributing, a.k.a. transfer;"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"How the primary issuance agent (PIA) is in charge of minting the asset, and so of its total supply."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Now, how does it take place in practice?"}),"\n",(0,n.jsx)(t.p,{children:"The owner of the token has delegated a large amount of trust to the PIA. The PIA issues to themselves the amount of shares that they have been tasked with distributing to the ultimate beneficiaries. With this action done, in one or multiple steps, they can proceed to the distribution."}),"\n",(0,n.jsx)(t.p,{children:"As has been repeated many times, and will be later too, most actions on Polymesh carry consequences, and for this reason, targets and recipients need to accept actions too. This is no different for the recipient of a capital distribution. Each recipient needs to accept, and perhaps reject."}),"\n",(0,n.jsx)(t.h2,{id:"atomicity",children:"Atomicity"}),"\n",(0,n.jsxs)(t.p,{children:["An important property of all blockchains is the ",(0,n.jsx)(t.strong,{children:"indivisibility, or atomicity, of operations"}),' they enable. For instance, if the desired operation is to send 10 shares to Alice, then when Alice accepts, she receives her 10 shares. This is simple. It bears nonetheless repeating that "Alice receives 10 shares" was the indivisible operation.']}),"\n",(0,n.jsx)(t.p,{children:"A more complex example would be that the desired operation is:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Alice receives 10 shares, and"}),"\n",(0,n.jsx)(t.li,{children:"Bob receives 20 shares."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"There is a missing part from this seemingly simple statement. What should happen if Alice rejects the operation? Does Bob still receive his shares, or should he be prevented from collecting them?"}),"\n",(0,n.jsx)(t.p,{children:"It is a matter of desired outcome, and the token owner, or the PIA, may have a preferred outcome. Perhaps, giving a veto to each party is a way to record the consensus of all parties about the shareholding structure."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"For each desired outcome, there is a different way of structuring the distribution."})}),"\n",(0,n.jsx)(t.h2,{id:"instruction",children:"Instruction"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"indivisible, or atomic, operation when distributing on Polymesh"})," is called the ",(0,n.jsx)(t.strong,{children:"instruction"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Therefore, if the PIA wants both Alice and Bob to receive their shares independently of the decision emanating from the other party, the PIA would have to structure the instructions the following way:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Instruction 1: Alice receives 10 shares, independently from Instruction 2;"}),"\n",(0,n.jsx)(t.li,{children:"Instruction 2: Bob receives 10 shares, independently from Instruction 1."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"On the other hand, if the PIA wants both Alice and Bob to be in agreement for both, they would have to structure the instruction thus:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Instruction:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Alice receives 10 shares;"}),"\n",(0,n.jsx)(t.li,{children:"Bob receives 10 shares."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For the avoidance of doubt, if both Alice and Bob approve the instruction, but one of them doesn't satisfy the compliance requirements of the token, the instruction doesn't execute yet, but remains in a pending state."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Distribute instruction",src:i(16431).A+"",width:"1917",height:"1045"})}),"\n",(0,n.jsx)(t.h2,{id:"asset-checkpoints---permanent-records",children:"Asset checkpoints - Permanent records"}),"\n",(0,n.jsxs)(t.p,{children:["During the life of a token, some actions require knowledge of the asset distribution - ",(0,n.jsx)(t.em,{children:"Who owns how much?"})," Examples include capital distribution and corporate ballots. Moreover this knowledge typically needs to be collected for a specific point in time, and available now and later - ",(0,n.jsx)(t.em,{children:"Who owned how much on January 1st, 2021?"})]}),"\n",(0,n.jsxs)(t.p,{children:["To achieve this, Polymesh implements a classic ",(0,n.jsx)(t.strong,{children:"lazy-checkpointing"})," mechanism. In effect, upon creation, the checkpoint only records:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"the date at which it was issued, and"}),"\n",(0,n.jsx)(t.li,{children:"the total supply at the block height it was issued."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:['Note how "',(0,n.jsx)(t.em,{children:"who owns how much"}),'" is missing from the record at creation. Since there is no limit to the number of investors, there would be no limit to the number of copy operations. Instead, to find out "',(0,n.jsx)(t.em,{children:"how much did Alice own?"}),"\", the system first looks into the checkpoint records for a value, and if missing that, picks Alice's balance now."]}),"\n",(0,n.jsx)(t.p,{children:"To make it possible, Polymesh keeps an eye out and will record in the checkpoint the previous balances of parties before any transfer between said parties, or any other action that changes balances for that matter."}),"\n",(0,n.jsx)(t.p,{children:"For the avoidance of doubt, if there are no transactions after the checkpoint's creation, then it will not record any held balance as, indeed, the current blockchain data is the same as the desired data at the checkpoint."}),"\n",(0,n.jsx)(t.p,{children:"One can create a checkpoint in two ways:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"create it immediately, or"}),"\n",(0,n.jsx)(t.li,{children:"schedule future creation(s) at intervals."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"We have seen the concepts that apply to the distribution of capital. Let's see how this looks in the Token Studio with the exercise coming up next."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},16431:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/distribution-instruction-68313de092210c84209d46eda61f819c.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var n=i(96540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);