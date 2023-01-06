"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[3598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2,title:"Overview",description:"Corporate actions in Polymesh",slug:"/actions/executing-actions"},r=void 0,s={unversionedId:"actions/actions-introduction",id:"actions/actions-introduction",title:"Overview",description:"Corporate actions in Polymesh",source:"@site/docs/06-actions/actions-introduction.mdx",sourceDirName:"06-actions",slug:"/actions/executing-actions",permalink:"/polymesh-documentation-site/docs/actions/executing-actions",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/06-actions/actions-introduction.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Overview",description:"Corporate actions in Polymesh",slug:"/actions/executing-actions"},sidebar:"defaultSidebar",previous:{title:"Executing Actions",permalink:"/polymesh-documentation-site/docs/actions/"},next:{title:"Token Studio Dashboard",permalink:"/polymesh-documentation-site/docs/actions/token-dashboard"}},l={},c=[{value:"Supported actions",id:"supported-actions",level:2},{value:"How are corporate actions performed on Polymesh?",id:"how-are-corporate-actions-performed-on-polymesh",level:2},{value:"Corporate actions agent",id:"corporate-actions-agent",level:2},{value:"Initiating corporate actions (CA)",id:"initiating-corporate-actions-ca",level:3},{value:"Taxes and corporate actions",id:"taxes-and-corporate-actions",level:3},{value:"Specifying the token holders targeted",id:"specifying-the-token-holders-targeted",level:3},{value:"Linking CA-relevant documentation",id:"linking-ca-relevant-documentation",level:3},{value:"Corporate ballots",id:"corporate-ballots",level:3},{value:"Ranked choice ballots",id:"ranked-choice-ballots",level:2},{value:"Implementation",id:"implementation",level:2}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Generally speaking, a ",(0,a.kt)("strong",{parentName:"p"},"corporate action (CA)")," is ",(0,a.kt)("em",{parentName:"p"},"a change initiated by a public company (i.e. a company with ownership organised by shares of tradeable stock) that directly impacts the securities and/or the shareholders"),". This is not limited to companies, which stock is traded on a stock exchange or over-the-counter (OTC). Examples include stock splits, coupon payments, merger and acquisitions, ballots for annual general meetings, and dividend distributions."),(0,a.kt)("p",null,"Corporate actions traditionally are agreed by a company's board of directors and authorised by its shareholders."),(0,a.kt)("p",null,"Polymesh offers ways to ",(0,a.kt)("em",{parentName:"p"},"implement")," such actions."),(0,a.kt)("h2",{id:"supported-actions"},"Supported actions"),(0,a.kt)("p",null,"Obviously the board of an organisation can take many kinds of actions and not all of them intersect with the scope of the Polymesh network. But many do, and Polymesh offers the means to execute the action."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unpredictable benefits"),": Benefits with variable amounts that are distributed equitably among asset holders and not known when the benefit is defined."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Predictable benefits"),": Fixed rate benefits where the amount is established, and doesn't change over time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Issuer notice"),": Announcements that the issuer wishes to record on chain for reasons of permanence."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reorganisation"),": Reorganising the shares such as in mergers and acquisitions and stock splits."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Other"),": A generalised type that supports actions that are not addressed directly.")),(0,a.kt)("p",null,"Polymesh provides specialised extrinsic pallets that deal directly with the two most common types of corporate actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Capital distributions"),": Capital, usually in the form of another asset, is allocated for the purpose of distribution. In case that is unclear, the predictable and unpredictable benefits corporate actions define who is to receive capital and how their benefits are calculated. A capital distribution allocates funding;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Corporate ballots"),": Asset holders are invited to vote on motions.")),(0,a.kt)("p",null,"Polymesh supports ",(0,a.kt)("strong",{parentName:"p"},"high-level corporate actions"),", as well as ",(0,a.kt)("strong",{parentName:"p"},"specific ones"),", such as ballots and capital distribution. The CAs can be of a ",(0,a.kt)("strong",{parentName:"p"},"predictable benefit "),"(i.e. bond payments) or ",(0,a.kt)("strong",{parentName:"p"},"unpredictable benefit")," (i.e. dividend payments) nature."),(0,a.kt)("h2",{id:"how-are-corporate-actions-performed-on-polymesh"},"How are corporate actions performed on Polymesh?"),(0,a.kt)("p",null,"Let's go back to our example with ACME, a publicly traded company."),(0,a.kt)("p",null,"Once ACME has digitised/tokenised its assets, ",(0,a.kt)("strong",{parentName:"p"},"three different pallets")," allow to perform CAs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.polymesh.live/pallet_corporate_actions/distribution/index.html"},"capital distribution pallet"),","),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.polymesh.live/pallet_corporate_actions/ballot/index.html"},"ballot pallet"),", and"),(0,a.kt)("li",{parentName:"ul"},"of course, the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.polymesh.live/pallet_corporate_actions/index.html"},"corporate action pallet"),", which encapsulates the others.")),(0,a.kt)("p",null,"The corporate actions pallet is the base layer, while capital distribution and ballets are specialised layers that leverage the base later."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Documents"),", such as related announcements and reports, can be linked to corporate actions."),(0,a.kt)("h2",{id:"corporate-actions-agent"},"Corporate actions agent"),(0,a.kt)("p",null,"Corporate actions can only be executed by a ",(0,a.kt)("strong",{parentName:"p"},"corporate actions agent (CAA)"),", which is set by the asset originator. By default, the corporate actions agent is the originator, so ACME is the corporate actions agent for the ACME shares. This is sufficient for our purposes here and now, but note that ACME can at any time appoint a service provider to attend to the actual execution of their corporate actions. Indeed, it is expected that most corporate actions such as dividend distributions will, in practice, be executed by service providers."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"At scale, a corporate actions service provider will want to integrate their internal systems and business processes using the SDK. Methods of doing so are introduced in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/actions/actions-sdk"},"SDK")," section that follows. We will use the ",(0,a.kt)("a",{parentName:"p",href:"https://app.polymesh.live"},"Polymesh Substrate App")," which supports manual interaction with any SDK method.")),(0,a.kt)("h3",{id:"initiating-corporate-actions-ca"},"Initiating corporate actions (CA)"),(0,a.kt)("p",null,"All begins with ",(0,a.kt)("inlineCode",{parentName:"p"},"initiate_corporate_action"),". This dispatchable function creates a corporate action. The following is included:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"an associated asset's ticker,"),(0,a.kt)("li",{parentName:"ul"},"free-form text, and"),(0,a.kt)("li",{parentName:"ul"},"a corporate action type specification.")),(0,a.kt)("p",null,"Additional information can be provided in regard to the record date, targets of the corporate actions, and tax withholdings."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The record date can be changed after the corporate action initiation with the dispatchable function ",(0,a.kt)("inlineCode",{parentName:"p"},"change_record_date"),".")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"initiate_corporate_action")," must be called by the ",(0,a.kt)("strong",{parentName:"p"},"corporate action agent (CAA)"),", which defaults to the asset owner. The CAA can be changed through the asset authorisation system and be reset with ",(0,a.kt)("inlineCode",{parentName:"p"},"reset_caa"),"."),(0,a.kt)("p",null,"The CAA can ",(0,a.kt)("strong",{parentName:"p"},"initiate corporate actions and change the setup"),", including implementing ballots and initiating distributions."),(0,a.kt)("p",null,"Additionally, every corporate action on Polymesh uses so-called checkpoints. Checkpoints help create specific time points at which the ownership of token holders is assessed. A checkpoint can be specified by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the timestamp,"),(0,a.kt)("li",{parentName:"ul"},"an existing checkpoint, and"),(0,a.kt)("li",{parentName:"ul"},"a shared checkpoint.")),(0,a.kt)("p",null,"Corporate actions rely on checkpoints to establish balances at specific points in time. Corporate actions that specify an execution time automatically create the checkpoints that provide the balance information, at the specified time, that is used to calculate benefits, compute voting power, etc. that the corporate action depends on."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'For efficiency, checkpoints use a "lazy update" algorithm.'),(0,a.kt)("p",{parentName:"admonition"},"Consider Alice's current balance and a scheduled checkpoint executing now. It follows that Alice's balance at the checkpoint time is equal to her current balance. The algorithm can report her balance at the checkpoint with no further work. It is necessary to record Alice's previous balance at the checkpoint time when something occurs that changes Alice balance. When this happens, Alice's previous balance is written to the checkpoint in the past before her current balance is adjusted."),(0,a.kt)("p",{parentName:"admonition"},"In this way, balances at previous checkpoints are always recoverable.")),(0,a.kt)("p",null,"Now, let's take a look at regulatory specification possibilities with Polymesh: withholding taxes, defining the targeted token holders, and linking associated documentation."),(0,a.kt)("h3",{id:"taxes-and-corporate-actions"},"Taxes and corporate actions"),(0,a.kt)("p",null,"Tax regulation varies between jurisdictions. Sometimes the issuer of an asset or the CAA have the regulatory responsibility to deduct taxes from dividends and transfer them to the relevant government agency. Polymesh supports withholding of taxes."),(0,a.kt)("p",null,"Withholding taxes is performed natively on Polymesh. One can specify a percentage of an asset distribution to withhold."),(0,a.kt)("p",null,"Such rules can apply to all investors as a general specification or to groups of individual investors."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set_default_witholding_tax")," creates a general tax withholding rule;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"set_did_witholding_tax")," creates rules that apply to specific investors.")),(0,a.kt)("h3",{id:"specifying-the-token-holders-targeted"},"Specifying the token holders targeted"),(0,a.kt)("p",null,"Corporate action ",(0,a.kt)("strong",{parentName:"p"},"participants can be specified"),". This can be helpful when a corporate action targets only a specific group of investors."),(0,a.kt)("p",null,"The default setting includes (targets) every investor in the corporate action. Each corporate action can include a list of investors to include or exclude. In the case where this becomes repetitive, a new asset-level default can be set with ",(0,a.kt)("inlineCode",{parentName:"p"},"set_default_targets"),"."),(0,a.kt)("p",null,'Target groups can be specified inclusively or exclusively, i.e. "only these investors" or "everyone except these investors".'),(0,a.kt)("h3",{id:"linking-ca-relevant-documentation"},"Linking CA-relevant documentation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Free-form text")," provides a succinct human-readable description of the corporate action. This is useful in contexts such as browsing the corporate actions to find a specific action of interest. The text is not expected to provide a comprehensive description in all cases."),(0,a.kt)("p",null,"Relevant documentation such as documentation to satisfy reporting requirements can be linked to a corporate action with ",(0,a.kt)("inlineCode",{parentName:"p"},"link_ca_doc"),"."),(0,a.kt)("h3",{id:"corporate-ballots"},"Corporate ballots"),(0,a.kt)("p",null,"Shareholder votes are generally canvassed at ",(0,a.kt)("em",{parentName:"p"},"Annual General Meetings")," and other events. These and other instances requiring corporate ballots can be conducted on-chain using Polymesh. Voting power is calculated by the tokens owned by the targeted investors at the time of the vote checkpoint."),(0,a.kt)("p",null,'Motions, the decisions voters weigh in on, present voters with a list of preferences for the asset holders to choose from. The simplest such list of preferences is "aye" and "nay". This can be elaborated with "abstain" at the motion creator\'s discretion. The choices on the ballot can also express preferences, such as choosing between candidates for an important decision.'),(0,a.kt)("p",null,'Each ballot has a start and an end date. Between start and end, targeted investors (i.e. the token holders) vote on the motions included in the ballot. Investor voting power is proportional to the tokens they hold. Investors can split their voting power between two or more choices. Such a split would not be sensible in the "aye" or "nay" context, but it can be useful for motions where the investor wants to express a first choice, second choice, and so on.'),(0,a.kt)("p",null,"For example, an investor (i.e. token holder), Alice, of ACME tokens is asked to vote on a motion to distribute benefits. Alice holds 100 tokens."),(0,a.kt)("p",null,"The preference of the investor, Alice, is to accept the motion with an amendment, then to not accept the motion without amendments. Alice doesn't want to accept the motion in its current form."),(0,a.kt)("p",null,"Alice weighs her vote in the following manner:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"amend the motion to distribute at later point - weight of 75 tokens,"),(0,a.kt)("li",{parentName:"ul"},"decline the motion - weight of 25 tokens, and"),(0,a.kt)("li",{parentName:"ul"},"accept the motion - weight of 0 tokens.")),(0,a.kt)("p",null,"Motions are independent of each other. The whole voting power of the tokens can be used to weigh each motion separately."),(0,a.kt)("p",null,"What does that mean in the context of our example?"),(0,a.kt)("p",null,"There are two motions: one to distribute capital now and one to elect a new CAA. Alice weighs motion 1 in the following way:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"amend the motion to distribute at later point - weight of 75 tokens,"),(0,a.kt)("li",{parentName:"ul"},"decline the motion - weight of 25 tokens, and"),(0,a.kt)("li",{parentName:"ul"},"accept the motion - weight of 0 tokens.")),(0,a.kt)("p",null,"Motion 2 is weighed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"amend the motion to establish a different CAA - weight of 25 tokens,"),(0,a.kt)("li",{parentName:"ul"},"decline the motion - weight of 25 tokens, and"),(0,a.kt)("li",{parentName:"ul"},"accept the motion - weight of 50 tokens.")),(0,a.kt)("p",null,"Alice was able to use all 100 tokens to weigh in on each motion seperately."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'Alice\'s 100 tokens could represent 100% ownership or an extremely small holding. The voting power Alice receives from her 100 tokens considers her tokens as a portion of the total voting power of all tokens, which is always 100%. In this context, "weight of" is way of summarising that Alice will receive her fair share of voting power.')),(0,a.kt)("h2",{id:"ranked-choice-ballots"},"Ranked choice ballots"),(0,a.kt)("p",null,"Ballot configuration can be done with so-called ",(0,a.kt)("strong",{parentName:"p"},"ranked-choice voting (RCV)"),". RCV is an voting system in which voters rank their ballot by candidate - one can select more than one candidate and rank all candidates based on preference."),(0,a.kt)("p",null,"Through RCV, users can make a statement regarding their preferences, in case their most preferred candidate/decision result doesn't come through."),(0,a.kt)("p",null,"Let's take our example with ACME tokens."),(0,a.kt)("p",null,"Again, Alice holds 100 ACME tokens. There are 3 options on the floor regarding one motion."),(0,a.kt)("p",null,"Her preference order is:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Option A;"),(0,a.kt)("li",{parentName:"ol"},"Option C;"),(0,a.kt)("li",{parentName:"ol"},"Option B.")),(0,a.kt)("p",null,"The weights for each option are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Option A - 75 tokens;"),(0,a.kt)("li",{parentName:"ul"},"Option B - 5 tokens;"),(0,a.kt)("li",{parentName:"ul"},"Option C - 20 tokens.")),(0,a.kt)("p",null,"Making the vote cast by Alice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Option A: 75 votes, fallback to Option C;"),(0,a.kt)("li",{parentName:"ul"},"Option B: 5 votes, no fallback;"),(0,a.kt)("li",{parentName:"ul"},"Option C: 20 votes, fallback to Option B.")),(0,a.kt)("p",null,"Option A is the most preferred. If Option A doesn't have enough votes to be adopted and is discarded, then the 75 votes of Option A would fall to Option C. This changes Alice's vote to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Option B: 5 votes;"),(0,a.kt)("li",{parentName:"ul"},"Option C: 95 votes.")),(0,a.kt)("p",null,"RCV ballots are an efficient method of implementing a process that emulates multiple rounds of voting since the voters are able to define contingencies with a single vote."),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"It all begins with a corporate action. A corporate action of type notice is created with a ballot attached using ",(0,a.kt)("inlineCode",{parentName:"p"},"attach_ballot"),". A ballot can be removed with ",(0,a.kt)("inlineCode",{parentName:"p"},"remove_ballot")," if voting hasn't started."),(0,a.kt)("p",null,"Ballot configurations can be amended - ",(0,a.kt)("strong",{parentName:"p"},"as long as voting hasn't started"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"change_end"),": Changes the voting deadline;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"change_meta"),": Changes the title and motions to vote on;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"change_rcv"),": Specifies the use of, or not, of RCV.")),(0,a.kt)("p",null,"Token holders vote using ",(0,a.kt)("inlineCode",{parentName:"p"},"vote"),"."),(0,a.kt)("h1",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/PolymathNetwork/polymesh_docs/blob/master/Polymesh/docs/assets.md#checkpoints"},"Checkpoints")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/polymesh-docs/primitives/corporate-actions/"},"Corporate Actions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.polymesh.live/pallet_corporate_actions/distribution/index.html"},"Corporate action pallet distribution"))))}h.isMDXComponent=!0}}]);