"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[7131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"POLYX",description:"Polymesh's native token",slug:"/introduction/polyx"},i=void 0,s={unversionedId:"introduction/intro-polyx",id:"introduction/intro-polyx",title:"POLYX",description:"Polymesh's native token",source:"@site/docs/01-introduction/4-intro-polyx.mdx",sourceDirName:"01-introduction",slug:"/introduction/polyx",permalink:"/polymesh-documentation-site/docs/introduction/polyx",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/01-introduction/4-intro-polyx.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"POLYX",description:"Polymesh's native token",slug:"/introduction/polyx"},sidebar:"defaultSidebar",previous:{title:"The Technical Stack",permalink:"/polymesh-documentation-site/docs/introduction/tech-stack"},next:{title:"Identity",permalink:"/polymesh-documentation-site/docs/introduction/identity"}},l={},c=[{value:"Securing the network",id:"securing-the-network",level:2},{value:"Staking",id:"staking",level:2},{value:"Governance",id:"governance",level:2},{value:"POLY to POLYX Bridge",id:"poly-to-polyx-bridge",level:2},{value:"Links",id:"links",level:2}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"POLYX is Polymesh's ",(0,r.kt)("strong",{parentName:"p"},"native token")," used for staking, governance, and transaction fees in the economy that secures the network."),(0,r.kt)("h2",{id:"securing-the-network"},"Securing the network"),(0,r.kt)("p",null,"Arriving at a consensus about the ordered list of transactions is a core concern of any blockchain network. There are many processes to choose from. For example, Proof-of-Work (PoW) and Practical Byzantine Fault Tolerance (pBFT)."),(0,r.kt)("p",null,"Each such system offers different properties in terms of throughput, transaction finality, and fault-tolerance. Proof-of-Work, the consensus process pioneered by Bitcoin, offers impressive fault-tolerance in an adversarial setting with anonymous users who may be able to evade accountability. It accomplishes this with financial incentives almost exclusively, and it does so at the expense of throughput."),(0,r.kt)("p",null,"Polymesh relies on a ",(0,r.kt)("strong",{parentName:"p"},"small set of nodes")," that know exactly who the others are, who are accountable, and who are expected to be cooperative. The operators are, generally, regulated financial institutions that would not be expected to attack the network intentionally."),(0,r.kt)("p",null,"The system doesn't rely exclusively on reputation, ethics, and recourse to courts of law, although these factors are clearly helpful. Malfunctioning, unresponsive, or hostile operators are detected by the remaining, well-functioning, well-intentioned operators. There is little rogue operators can do to cause harm to the network beyond a momentary performance hiccup, and they are financially penalised for service interruptions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Every incentive aligns toward cooperation and reliability.")),(0,r.kt)("h2",{id:"staking"},"Staking"),(0,r.kt)("p",null,"Operators are permissioned through a ",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction/governance"},"governance process")," where users stake funds (of their POLYX), i.e. vote with their money. Operators share earnings with those who stake funds with them, and this creates a competitive business model in which operators compete for user support on the basis of reliability and expected return on investment. Users share in losses from penalties, as well, which creates an incentive to withdraw support (in the form of funds) from unreliable operators."),(0,r.kt)("p",null,"Since only the operators with the most support win the privilege of mining blocks at any given time, another operator will be appointed, by ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-docs/network/consensus/"},"consensus"),", to take the place of an operator that isn't up to the task."),(0,r.kt)("p",null,"The process is called ",(0,r.kt)("strong",{parentName:"p"},"Nominated Proof-of-Stake"),". Because there is only a handful of operators, coordinating their interactions is very ",(0,r.kt)("strong",{parentName:"p"},"efficient"),". The resulting chain of blocks is absolutely final with none of the uncertainty that Proof-of-Work systems like Ethereum and Bitcoin are known for. There is no need to await multiple confirmations because all the nodes that ",(0,r.kt)("em",{parentName:"p"},"could")," propose a block have already spoken and accepted each block before it is widely distributed."),(0,r.kt)("p",null,"This process addresses the ",(0,r.kt)("strong",{parentName:"p"},"high-transaction volume concern")," since there are no arbitrary limits on speed or block size. It addresses ",(0,r.kt)("strong",{parentName:"p"},"transaction finality")," in a way that creates ",(0,r.kt)("em",{parentName:"p"},"certainty about transaction finality"),", essential in the context of regulated securities."),(0,r.kt)("h2",{id:"governance"},"Governance"),(0,r.kt)("p",null,"Various parameters in the system that one might associate with super-user controls as well as the upgrade process itself are managed through a well-defined, ",(0,r.kt)("strong",{parentName:"p"},"decentralised ",(0,r.kt)("a",{parentName:"strong",href:"/docs/introduction/governance"},"governance process"))," that includes gathering votes from network users."),(0,r.kt)("p",null,"Users ",(0,r.kt)("strong",{parentName:"p"},"signal support")," by staking funds (i.e. POLYX) on proposals they agree with. This community signal influences the decision-making."),(0,r.kt)("h2",{id:"poly-to-polyx-bridge"},"POLY to POLYX Bridge"),(0,r.kt)("p",null,"POLY?"),(0,r.kt)("p",null,"The Ethereum Mainnet has been live since the end of 2015 and has become the general-purpose platform of choice for various smart contract-based projects. As of 2018, Ethereum was the most viable and adopted public blockchain, allowing rapid prototyping and iteration by Polymath. Eventually, its focus on general purpose created barriers when dealing with regulated markets, leading Polymath to create its own platform, the Polymesh Blockchain. The Polymesh Association then spun off as a separate, not for profit, entity to further development and adoption of the Polymesh Blockchain. It is for this historical reason that you find a POLY ERC20 token on Ethereum."),(0,r.kt)("p",null,"So how do you get POLYX?"),(0,r.kt)("p",null,"There are two general methods of acquiring POLYX. Someone, which could include an exchange, sends the tokens to your Polymesh account, likely because you purchased them. Or, one can convert their POLY tokens on the Ethereum blockchain, if they have them. In either case, your Polymesh account will complete the one-time ",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstart/verification-with-cdd"},"customer due diligence (CDD)")," process before the receipt is finalised. Let us address the conversion process. We will use it to ",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstart/quickstart-polyx"},"acquire Testnet POLYX")," later."),(0,r.kt)("p",null,"Ethereum POLY is upgradable to POLYX. This upgrade is handled by the aptly named ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-docs/network/bridge"},"POLY to POLYX Bridge"),". As the name suggests, it is a one-way bridge. At your request, the bridge locks forever some of your POLY on Ethereum, and mints the same amount, but of POLYX, on the Polymesh network."),(0,r.kt)("p",null,"This ",(0,r.kt)("strong",{parentName:"p"},"lock-then-mint")," process ensures that the ",(0,r.kt)("em",{parentName:"p"},"circulating")," supply of POLY+POLYX remains unchanged. It also simplifies future audits, which only need to compare the amount of locked POLY with the amount of minted POLYX."),(0,r.kt)("p",null,"Different networks offer tokens at different monetary values, that is why:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POLY on Ethereum's Goerli Testnet, which one gets through the POLY bridge to convert to POLYX on Polymesh's Testnet. It is expected that this network, its future test siblings, and its token remain a playground and play token used for testing only;"),(0,r.kt)("li",{parentName:"ul"},"POLY on Ethereum's Mainnet, which one gets through the Poly bridge to convert to POLYX on the Polymesh Mainnet. This network and its token are intended to be the real deal where individuals and other entities represent real world value and where actions have consequences.")),(0,r.kt)("p",null,"Additionally, for the avoidance of doubt, although anyone can freely and pseudonymously own and trade POLY tokens, it is still necessary, for anyone wishing to use the bridge, to complete the KYC requirements of the target Polymesh platform."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In case you want to dive deeper on the POLY to POLYX Bridge, check out ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-docs/network/bridge/"},"/polymesh-docs/network/bridge/"),"!")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/polymesh-docs/network/polyx/"},"POLYX Token")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/polymesh-docs/network/bridge/"},"POLY to POLYX Bridge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/polymesh-docs/network/fees/"},"Polymesh Fees"))))}h.isMDXComponent=!0}}]);