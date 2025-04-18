"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[4317],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}},48330:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"community/bug-bounty/bug-bounty","title":"Bug Bounty","description":"Security Program Details","source":"@site/docs/400-community/bug-bounty/index.md","sourceDirName":"400-community/bug-bounty","slug":"/community/bug-bounty","permalink":"/polymesh-documentation-site/community/bug-bounty","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/400-community/bug-bounty/index.md","tags":[{"inline":true,"label":"resources","permalink":"/polymesh-documentation-site/tags/resources"},{"inline":true,"label":"bug bounty","permalink":"/polymesh-documentation-site/tags/bug-bounty"}],"version":"current","frontMatter":{"title":"Bug Bounty","description":"Security Program Details","id":"bug-bounty","slug":"/community/bug-bounty","sidebar_label":"Bug Bounty","tags":["resources","bug bounty"]},"sidebar":"docs","previous":{"title":"Community","permalink":"/polymesh-documentation-site/community"},"next":{"title":"Bug Bounty Rules","permalink":"/polymesh-documentation-site/community/bug-bounty/rules"}}');var s=i(74848),o=i(28453);const r={title:"Bug Bounty",description:"Security Program Details",id:"bug-bounty",slug:"/community/bug-bounty",sidebar_label:"Bug Bounty",tags:["resources","bug bounty"]},l=void 0,a={},d=[{value:"Overview",id:"overview",level:3},{value:"Bounty Scope",id:"bounty-scope",level:3},{value:"Rules",id:"rules",level:3},{value:"Vulnerability Classification and Rewards",id:"vulnerability-classification-and-rewards",level:3},{value:"Exclusions",id:"exclusions",level:3},{value:"Safe Harbor",id:"safe-harbor",level:3},{value:"References",id:"references",level:3},{value:"Submitting a bug",id:"submitting-a-bug",level:3},{value:"Terms and Conditions",id:"terms-and-conditions",level:3},{value:"Contact us",id:"contact-us",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Welcome to the Polymesh Bug Bounty Program.\nPolymesh is the software that powers the nodes of the Polymesh blockchain. We want Polymesh to be robust and be the best it can be. This is where we need your help, to assist us in finding bugs and vulnerabilities. Confirmed bugs or vulnerabilities will get monetary rewards (bounty). Please see our Rules & Rewards section for more details."}),"\n",(0,s.jsxs)(n.p,{children:["To get started, Read the ",(0,s.jsx)(n.a,{href:"/community/bug-bounty/rules",children:"Rules"})," and the Core Concepts and ",(0,s.jsx)(n.a,{href:"/development",children:"Developer Resources"})," documentation, to learn about how to setup Polymesh and how to approach the bug bounty program."]}),"\n",(0,s.jsxs)(n.p,{children:["Having some prior knowledge about capital markets and Rust language can be beneficial. If you have still have any questions, reach out to us on our ",(0,s.jsx)(n.a,{href:"https://discord.gg/ud2deWAnyt",children:"Discord server"}),", or email us at ",(0,s.jsx)(n.a,{href:"mailto:bugbounty@polymesh.network",children:"bugbounty@polymesh.network"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Looking for the Vulnerability Disclosure Form? You can find it ",(0,s.jsx)(n.a,{href:"https://www.federacy.com/polymesh-bug-bounty-program",children:"here"}),".",(0,s.jsx)(n.br,{}),"\n","(By participating in the Polymesh Bug Bounty Program, you agree by the program's ",(0,s.jsx)(n.a,{href:"/community/bug-bounty/rules",children:"Terms and Conditions"}),")"]})}),"\n",(0,s.jsx)(n.p,{children:"You can also submit the bug reports on our Bug Bounty program on Immunefi."}),"\n",(0,s.jsx)(n.h3,{id:"bounty-scope",children:"Bounty Scope"}),"\n",(0,s.jsx)(n.p,{children:"The bug bounty will be applicable for the following repositories, sources and sites:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/Polymesh/releases/latest",children:"https://github.com/PolymeshAssociation/Polymesh/releases/latest"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Following are ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"out of scope"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/Polymesh/tree/develop/contracts",children:"https://github.com/PolymeshAssociation/Polymesh/tree/develop/contracts"})}),"\n",(0,s.jsx)(n.li,{children:"\u201ctest\u201d code - i.e. javascript integration tests or unit tests are not in scope."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"rules",children:"Rules"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Rewards will be decided on a per case basis. This bug bounty program's terms and conditions are at the sole discretion of the Polymesh Association."}),"\n",(0,s.jsx)(n.li,{children:"Rewards will vary depending on the severity of the issue."}),"\n",(0,s.jsx)(n.li,{children:"Disclose the bug only on the platforms approved by us (Federacy/Immunefi). Do not disclose a bug or vulnerability anywhere else to the public. Doing such would disqualify it from being considered for a reward."}),"\n",(0,s.jsx)(n.li,{children:"The bugs being considered for the reward are based on first come first serve basis, duplicate bugs will not be considered."}),"\n",(0,s.jsx)(n.li,{children:"If you want to add more information to a provided issue, edit the original report, do not create a new submission."}),"\n",(0,s.jsx)(n.li,{children:"Other variables considered for rewards include: the quality of the issue description, the instructions for reproducibility, and the quality of the fix (if included)."}),"\n",(0,s.jsx)(n.li,{children:"Determinations of eligibility, score and all terms related to an award are at the sole and final discretion of the Polymesh Association."}),"\n",(0,s.jsx)(n.li,{children:"Submissions needs to be related with the Bounty Scope. Submissions out of the Bounty Scope won't be eligible for a reward."}),"\n",(0,s.jsx)(n.li,{children:"Any interference with the protocol, client or platform services, on purpose or not during the process will make the submission process invalid."}),"\n",(0,s.jsx)(n.li,{children:"It is mandatory to read and follow the responsible disclosure policy available in the references. Submissions not following the disclosure policy will not be eligible for a reward."}),"\n",(0,s.jsxs)(n.li,{children:["By participating in the Polymesh Bug Bounty program, you agree to abide by the ",(0,s.jsx)(n.a,{href:"/community/bug-bounty/rules",children:"terms and condition"})," of the program."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We may modify the terms or terminate this program at any time."}),"\n",(0,s.jsx)(n.h3,{id:"vulnerability-classification-and-rewards",children:"Vulnerability Classification and Rewards"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)("b",{children:"Severity"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)("b",{children:"Description / Example"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)("b",{children:"Reward"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["CRITICAL",(0,s.jsx)("br",{}),"(CVSS 9.0 - 10.0)"]}),(0,s.jsxs)(n.td,{children:["Transaction manipulation /censorship, double-spending,",(0,s.jsx)("br",{})," POLYX minting, unauthorized token minting, staled ",(0,s.jsx)("br",{}),"or undermined consensus/network, governance ",(0,s.jsx)("br",{}),"censorship or compromise, manipulation of signing ",(0,s.jsx)("br",{}),"keys or master keys to gain unauthorised access to ",(0,s.jsx)("br",{}),"an identity."]}),(0,s.jsx)(n.td,{children:"USD 6000 - 10000"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["HIGH",(0,s.jsx)("br",{}),"(CVSS 7.0 - 8.9)"]}),(0,s.jsxs)(n.td,{children:["Ability to use an extrinsic panic unexpectedly ",(0,s.jsx)("br",{}),"without proper handling, block the on-chain governance ",(0,s.jsx)("br",{}),"system from it's expected behaviour, block other users",(0,s.jsx)("br",{}),"from their ability to perform expected tasks (griefing)."]}),(0,s.jsx)(n.td,{children:"USD 2000 - 6000"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["MEDIUM",(0,s.jsx)("br",{}),"(CVSS 4.0 - 6.9)"]}),(0,s.jsxs)(n.td,{children:["Ability to put chain data into an unexpected state which ",(0,s.jsx)("br",{}),"otherwise doesn't cause any disruption, forcing the ",(0,s.jsx)("br",{}),"emission of events which are incorrect."]}),(0,s.jsx)(n.td,{children:"USD 500 - 1500"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["LOW",(0,s.jsx)("br",{}),"(CVSS 00 - 3.9)"]}),(0,s.jsxs)(n.td,{children:["DoS'ing of the operator nodes, incorrect data being ",(0,s.jsx)("br",{}),"logged through events."]}),(0,s.jsx)(n.td,{children:"USD 200 - 600"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"exclusions",children:"Exclusions"}),"\n",(0,s.jsx)(n.p,{children:"While researching, please refrain from:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Denial of service in general and of Public RPC nodes"}),"\n",(0,s.jsx)(n.li,{children:"Attacks that consume a substantial amount of Testnet POLYX and which would otherwise be cost-prohibitive on Mainnet"}),"\n",(0,s.jsx)(n.li,{children:"Spamming"}),"\n",(0,s.jsx)(n.li,{children:"Social engineering (including phishing) of Polymesh Association's staff"}),"\n",(0,s.jsx)(n.li,{children:"Any physical attempts against Polymesh Association's property or data centres"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"safe-harbor",children:"Safe Harbor"}),"\n",(0,s.jsx)(n.p,{children:"Any activities conducted in a manner consistent with this policy will be considered authorized conduct and we will not initiate legal action against you. If legal action is initiated by a third party against you in connection with activities conducted under this policy, we will take steps to make it known that your actions were conducted in compliance with this policy."}),"\n",(0,s.jsx)(n.p,{children:"However, please understand that if your security research involves the networks, systems, information, applications, products, or services of a third party, that third party is not bound by the rules of this program and may determine, at their sole discretion, whether to pursue legal action. The Polymesh Association cannot and does not authorize security research on other entities."}),"\n",(0,s.jsxs)(n.p,{children:["Please see ",(0,s.jsx)(n.a,{href:"/community/bug-bounty/rules#23-safe-harbor-provisions",children:"Safe Harbor Conditions"})," in our ",(0,s.jsx)(n.a,{href:"/community/bug-bounty/rules",children:"Terms and Conditions"})," for full details."]}),"\n",(0,s.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://info.polymesh.network/hubfs/Files/Polymesh-white-paper.pdf",children:"Whitepaper"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/getting-started/",children:"Getting Started"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"submitting-a-bug",children:"Submitting a bug"}),"\n",(0,s.jsxs)(n.p,{children:["Once you find a bug, please report it to us via ",(0,s.jsx)(n.a,{href:"https://www.federacy.com/polymesh-bug-bounty-program",children:"Federacy"}),".",(0,s.jsx)(n.br,{}),"\n","Additionally, ",(0,s.jsx)(n.a,{href:"https://immunefi.com/bounty/polymesh/",children:"Immunefi"})," is also running our Bug Bounty program, you can report it there too.",(0,s.jsx)(n.br,{}),"\n","Please try to be detailed, specific, and clear when you fill out this form. Once we receive your report, we'll be in touch soon."]}),"\n",(0,s.jsx)(n.h3,{id:"terms-and-conditions",children:"Terms and Conditions"}),"\n",(0,s.jsxs)(n.p,{children:["The Polymesh Bug Bounty Program is governed by our Terms and Conditions defined ",(0,s.jsx)(n.a,{href:"/community/bug-bounty/rules",children:"here"}),".",(0,s.jsx)(n.br,{}),"\n","By participating in the program, you agree by these Terms and Conditions."]}),"\n",(0,s.jsx)(n.h3,{id:"contact-us",children:"Contact us"}),"\n",(0,s.jsxs)(n.p,{children:["If you need help, please feel free to contact us over email at ",(0,s.jsx)(n.a,{href:"mailto:bugbounty@polymesh.network",children:"bugbounty@polymesh.network"}),"\nOr join our developer community in our ",(0,s.jsx)(n.a,{href:"https://discord.gg/ud2deWAnyt",children:"Discord server"})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);