"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[44308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:3,title:"Polymesh Bug Bounty Program",description:"",slug:"/community/bug-bounty/"},a=void 0,l={unversionedId:"community/bug-bounty",id:"community/bug-bounty",title:"Polymesh Bug Bounty Program",description:"",source:"@site/docs/09-community/bug-bounty.mdx",sourceDirName:"09-community",slug:"/community/bug-bounty/",permalink:"/polymesh-documentation-site/docs/community/bug-bounty/",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/09-community/bug-bounty.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Polymesh Bug Bounty Program",description:"",slug:"/community/bug-bounty/"},sidebar:"defaultSidebar",previous:{title:"Polymesh Community Code of Conduct",permalink:"/polymesh-documentation-site/docs/community/code-of-conduct"},next:{title:"Bug Bounty Rules, Terms and Conditions",permalink:"/polymesh-documentation-site/docs/community/bug-bounty-rules"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"Bounty Scope",id:"bounty-scope",level:3},{value:"Rules",id:"rules",level:3},{value:"Vulnerability Classification and Rewards",id:"vulnerability-classification-and-rewards",level:3},{value:"Exclusions",id:"exclusions",level:3},{value:"Safe Harbor",id:"safe-harbor",level:3},{value:"References",id:"references",level:3},{value:"Submitting a bug",id:"submitting-a-bug",level:3},{value:"Terms and Conditions",id:"terms-and-conditions",level:3},{value:"Contact us",id:"contact-us",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Welcome to the Polymesh Bug Bounty Program.\nPolymesh is the software that powers the nodes of the Polymesh blockchain. We want Polymesh to be robust and be the best it can be. This is where we need your help, to assist us in finding bugs and vulnerabilities. Confirmed bugs or vulnerabilities will get monetary rewards (bounty). Please see our Rules & Rewards section for more details."),(0,r.kt)("p",null,"To get started, Read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/community/bug-bounty-rules"},"Rules")," and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstart/up-in-ten-minutes/"},"Developer Documentation"),", to learn about how to setup Polymesh and how to approach the bug bounty program."),(0,r.kt)("p",null,"Having some prior knowledge about capital markets and Rust language can be beneficial. If you have still have any questions, reach out to us on our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/ud2deWAnyt"},"Discord server"),", or email us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:bugbounty@polymesh.network"},"bugbounty@polymesh.network"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Looking for the Vulnerability Disclosure Form? You can find it ",(0,r.kt)("a",{parentName:"p",href:"https://www.federacy.com/polymesh-bug-bounty-program"},"here"),".",(0,r.kt)("br",{parentName:"p"}),"\n","(By participating in the Polymesh Bug Bounty Program, you agree by the program's ",(0,r.kt)("a",{parentName:"p",href:"/docs/community/bug-bounty-rules"},"Terms and Conditions"),")")),(0,r.kt)("p",null,"You can also submit the bug reports on our Bug Bounty program on Immunefi."),(0,r.kt)("h3",{id:"bounty-scope"},"Bounty Scope"),(0,r.kt)("p",null,"The bug bounty will be applicable for the following repositories, sources and sites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PolymeshAssociation/Polymesh/releases/tag/5.0.2"},"https://github.com/PolymeshAssociation/Polymesh/releases/tag/5.0.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PolymeshAssociation/cryptography/tree/confidential-identity-v2"},"https://github.com/PolymeshAssociation/cryptography/tree/confidential-identity-v2"))),(0,r.kt)("p",null,"Following are ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"out of scope")),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PolymeshAssociation/Polymesh/tree/develop/contracts"},"https://github.com/PolymeshAssociation/Polymesh/tree/develop/contracts")),(0,r.kt)("li",{parentName:"ul"},"\u201ctest\u201d code - i.e. javascript integration tests or unit tests are not in scope.")),(0,r.kt)("h3",{id:"rules"},"Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rewards will be decided on a per case basis. This bug bounty program's terms and conditions are at the sole discretion of the Polymesh Association."),(0,r.kt)("li",{parentName:"ul"},"Rewards will vary depending on the severity of the issue."),(0,r.kt)("li",{parentName:"ul"},"Disclose the bug only on the platforms approved by us (Federacy/Immunefi). Do not disclose a bug or vulnerability anywhere else to the public. Doing such would disqualify it from being considered for a reward."),(0,r.kt)("li",{parentName:"ul"},"The bugs being considered for the reward are based on first come first serve basis, duplicate bugs will not be considered."),(0,r.kt)("li",{parentName:"ul"},"If you want to add more information to a provided issue, edit the original report, do not create a new submission."),(0,r.kt)("li",{parentName:"ul"},"Other variables considered for rewards include: the quality of the issue description, the instructions for reproducibility, and the quality of the fix (if included)."),(0,r.kt)("li",{parentName:"ul"},"Determinations of eligibility, score and all terms related to an award are at the sole and final discretion of the Polymesh Association."),(0,r.kt)("li",{parentName:"ul"},"Submissions needs to be related with the Bounty Scope. Submissions out of the Bounty Scope won't be eligible for a reward."),(0,r.kt)("li",{parentName:"ul"},"Any interference with the protocol, client or platform services, on purpose or not during the process will make the submission process invalid."),(0,r.kt)("li",{parentName:"ul"},"It is mandatory to read and follow the responsible disclosure policy available in the references. Submissions not following the disclosure policy will not be eligible for a reward."),(0,r.kt)("li",{parentName:"ul"},"By participating in the Polymesh Bug Bounty program, you agree to abide by the ",(0,r.kt)("a",{parentName:"li",href:"/docs/community/bug-bounty-rules"},"terms and condition")," of the program.")),(0,r.kt)("p",null,"We may modify the terms or terminate this program at any time."),(0,r.kt)("h3",{id:"vulnerability-classification-and-rewards"},"Vulnerability Classification and Rewards"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("b",null,"Severity")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("b",null,"Description / Example")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("b",null,"Reward")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRITICAL",(0,r.kt)("br",null),"(CVSS 9.0 - 10.0)"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction manipulation /censorship, double-spending,",(0,r.kt)("br",null)," POLY/POLYX minting, unauthorized token minting, staled ",(0,r.kt)("br",null),"or undermined consensus/network, governance ",(0,r.kt)("br",null),"censorship or compromise, manipulation of signing ",(0,r.kt)("br",null),"keys or master keys to gain unauthorised access to ",(0,r.kt)("br",null),"an identity."),(0,r.kt)("td",{parentName:"tr",align:null},"USD 6000 - 10000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HIGH",(0,r.kt)("br",null),"(CVSS 7.0 - 8.9)"),(0,r.kt)("td",{parentName:"tr",align:null},"Ability to use an extrinsic panic unexpectedly ",(0,r.kt)("br",null),"without proper handling, block the on-chain governance ",(0,r.kt)("br",null),"system from it's expected behaviour, block other users",(0,r.kt)("br",null),"from their ability to perform expected tasks (griefing)."),(0,r.kt)("td",{parentName:"tr",align:null},"USD 2000 - 6000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MEDIUM",(0,r.kt)("br",null),"(CVSS 4.0 - 6.9)"),(0,r.kt)("td",{parentName:"tr",align:null},"Ability to put chain data into an unexpected state which ",(0,r.kt)("br",null),"otherwise doesn't cause any disruption, forcing the ",(0,r.kt)("br",null),"emission of events which are incorrect."),(0,r.kt)("td",{parentName:"tr",align:null},"USD 500 - 1500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LOW",(0,r.kt)("br",null),"(CVSS 00 - 3.9)"),(0,r.kt)("td",{parentName:"tr",align:null},"DoS'ing of the operator nodes, incorrect data being ",(0,r.kt)("br",null),"logged through events."),(0,r.kt)("td",{parentName:"tr",align:null},"USD 200 - 600")))),(0,r.kt)("h3",{id:"exclusions"},"Exclusions"),(0,r.kt)("p",null,"While researching, please refrain from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Denial of service in general and of Public RPC nodes"),(0,r.kt)("li",{parentName:"ul"},"Attacks that consume a substantial amount of Goerli ETH, Goerli POLY or Testnet POLYX and which would otherwise be cost-prohibitive on Mainnet"),(0,r.kt)("li",{parentName:"ul"},"Spamming"),(0,r.kt)("li",{parentName:"ul"},"Social engineering (including phishing) of Polymesh Association's staff"),(0,r.kt)("li",{parentName:"ul"},"Any physical attempts against Polymesh Association's property or data centres")),(0,r.kt)("h3",{id:"safe-harbor"},"Safe Harbor"),(0,r.kt)("p",null,"Any activities conducted in a manner consistent with this policy will be considered authorized conduct and we will not initiate legal action against you. If legal action is initiated by a third party against you in connection with activities conducted under this policy, we will take steps to make it known that your actions were conducted in compliance with this policy."),(0,r.kt)("p",null,"However, please understand that if your security research involves the networks, systems, information, applications, products, or services of a third party, that third party is not bound by the rules of this program and may determine, at their sole discretion, whether to pursue legal action. The Polymesh Association cannot and does not authorize security research on other entities."),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/community/bug-bounty-rules#23-safe-harbor-provisions"},"Safe Harbor Conditions")," in our ",(0,r.kt)("a",{parentName:"p",href:"/docs/community/bug-bounty-rules/"},"Terms and Conditions")," for full details."),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://info.polymesh.network/hubfs/Files/Polymesh-white-paper.pdf"},"Whitepaper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/quickstart/up-in-ten-minutes/"},"Getting Started"))),(0,r.kt)("h3",{id:"submitting-a-bug"},"Submitting a bug"),(0,r.kt)("p",null,"Once you find a bug, please report it to us via ",(0,r.kt)("a",{parentName:"p",href:"https://www.federacy.com/polymesh-bug-bounty-program"},"Federacy"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Additionally, ",(0,r.kt)("a",{parentName:"p",href:"https://immunefi.com/bounty/polymath/"},"Immunefi")," is also running our Bug Bounty program, you can report it there too.",(0,r.kt)("br",{parentName:"p"}),"\n","Please try to be detailed, specific, and clear when you fill out this form. Once we receive your report, we'll be in touch soon."),(0,r.kt)("h3",{id:"terms-and-conditions"},"Terms and Conditions"),(0,r.kt)("p",null,"The Polymesh Bug Bounty Program is governed by our Terms and Conditions defined ",(0,r.kt)("a",{parentName:"p",href:"/docs/community/bug-bounty-rules"},"here"),".",(0,r.kt)("br",{parentName:"p"}),"\n","By participating in the program, you agree by these Terms and Conditions."),(0,r.kt)("h3",{id:"contact-us"},"Contact us"),(0,r.kt)("p",null,"If you need help, please feel free to contact us over email at ",(0,r.kt)("a",{parentName:"p",href:"mailto:bugbounty@polymesh.network"},"bugbounty@polymesh.network"),"\nOr join our developer community in our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/ud2deWAnyt"},"Discord server")))}p.isMDXComponent=!0}}]);