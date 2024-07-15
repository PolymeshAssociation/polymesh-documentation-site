"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[54589],{2947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(74848),s=n(28453);const o={sidebar_position:2,title:"Settlement Process",description:"Settlement and custody in Polymesh",slug:"/settlement/settlement-process/"},a=void 0,r={id:"settlement/settlement-introduction",title:"Settlement Process",description:"Settlement and custody in Polymesh",source:"@site/docs/05-settlement/settlement-introduction.mdx",sourceDirName:"05-settlement",slug:"/settlement/settlement-process/",permalink:"/polymesh-documentation-site/docs/settlement/settlement-process/",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/05-settlement/settlement-introduction.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Settlement Process",description:"Settlement and custody in Polymesh",slug:"/settlement/settlement-process/"},sidebar:"defaultSidebar",previous:{title:"Transferring Assets",permalink:"/polymesh-documentation-site/docs/settlement/transferring-assets/"},next:{title:"Polymesh App Portal",permalink:"/polymesh-documentation-site/docs/settlement/with-dashboard"}},c={},l=[{value:"Deconstructing settlements",id:"deconstructing-settlements",level:2},{value:"Legs",id:"legs",level:3},{value:"Affirmations",id:"affirmations",level:3},{value:"Instructions - Multiparty transactions",id:"instructions---multiparty-transactions",level:3},{value:"Asset issuer requirements",id:"asset-issuer-requirements",level:3},{value:"Atomic execution",id:"atomic-execution",level:3},{value:"Custody",id:"custody",level:3},{value:"Venue",id:"venue",level:3},{value:"Synopsis",id:"synopsis",level:3},{value:"Lateral concerns",id:"lateral-concerns",level:2},{value:"Pre-authorisation",id:"pre-authorisation",level:3},{value:"Netting process",id:"netting-process",level:3},{value:"Chain of responsibility",id:"chain-of-responsibility",level:3},{value:"Seen from exchanges",id:"seen-from-exchanges",level:4},{value:"Seen from custodians",id:"seen-from-custodians",level:4},{value:"On custodians and portfolios",id:"on-custodians-and-portfolios",level:3},{value:"Links",id:"links",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Settlement"})," is where ",(0,i.jsx)(t.em,{children:"an action that was agreed beforehand is effectively acted upon"}),". It is a term often found in finance. In the case of Polymesh, the prior agreement is that of ",(0,i.jsx)(t.strong,{children:"an exchange or transfer of securities between accounts"}),". A settlement in Polymesh represents the contractual obligation to which the involved parties have agreed. Regulatory requirements and compliance are both important aspects of modern settlements."]}),"\n",(0,i.jsx)(t.p,{children:"When looking at current settlement processes, for example in case of post-trade security clearings, one can notice:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"a large number of entities is involved,"}),"\n",(0,i.jsx)(t.li,{children:"feasible transaction time has its limits, especially in case of cross-border payments,"}),"\n",(0,i.jsx)(t.li,{children:"transaction time and the speed of trade don't coincide,"}),"\n",(0,i.jsx)(t.li,{children:"the number of intermediaries is quite high - each intermediary involved can make a process more expensive, and"}),"\n",(0,i.jsx)(t.li,{children:"many regulatory requirements apply, which keep evolving."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["As you can guess, there is ",(0,i.jsx)(t.strong,{children:"potential for efficiency and cost-saving"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"deconstructing-settlements",children:"Deconstructing settlements"}),"\n",(0,i.jsx)(t.p,{children:"Let's introduce some important Polymesh terminology that we will use throughout:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["a ",(0,i.jsx)(t.strong,{children:"leg"})," is the ",(0,i.jsx)(t.em,{children:"smallest action of a settlement"}),". This could be one transfer of securities from Alice to Bob or the recognition of an off-chain payment. Creating legs doesn't execute them immediately, but they describe what is meant to happen after compliance and other concerns are satisfied. Legs cannot exist by themselves. One or more legs of a settlement need to be part of:"]}),"\n",(0,i.jsxs)(t.li,{children:["an ",(0,i.jsx)(t.strong,{children:"instruction"}),", which ",(0,i.jsx)(t.em,{children:"aggregates related legs to create an indivisible action"}),", an atomic transaction in computer parlance. This means that when an instruction is executed, all its legs are executed concurrently. There is no situation where only some of an instruction's legs have executed. This also means that a single unconfirmed leg can hold up the whole instruction's execution. Additionally, an instruction cannot exist by itself. Instructions are created and executed when ",(0,i.jsx)(t.em,{children:"housed"})," in:"]}),"\n",(0,i.jsxs)(t.li,{children:["a ",(0,i.jsx)(t.strong,{children:"venue"}),", which is ",(0,i.jsx)(t.em,{children:"a logical object meant for the purpose of collecting instructions"}),". It is also associated with certain access rights such as who can add an instruction to it."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Let's review these terms separately and in greater detail."}),"\n",(0,i.jsx)(t.h3,{id:"legs",children:"Legs"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Alice sends 100 ACME shares from her ",(0,i.jsx)(t.em,{children:"trading"})," portfolio to Bob's default portfolio."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This is a ",(0,i.jsx)(t.strong,{children:"valid leg description"}),". It should be evident that Alice's ",(0,i.jsx)(t.strong,{children:"approval is necessary"})," here for the action to eventually take place - We are talking about ",(0,i.jsx)(t.em,{children:"her"})," shares here. It is also necessary for Bob's approval to be collected as, despite Alice's generosity, receiving securities has tax implications that he may not want to shoulder."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Bob sent 10 USD off-chain to Alice with reference ",(0,i.jsx)(t.code,{children:"0x123bff"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This is another valid leg description, called a ",(0,i.jsx)(t.strong,{children:"signed receipt"}),". Here again the ",(0,i.jsx)(t.strong,{children:"approval of both parties is required"}),", Bob may not want to give the impression that he has sent 10 USD off-chain, or 10 million, or that it was required of him. Alice may not want to let it be known that she has received cash, as she may be asked to return something she never received in the first place."]}),"\n",(0,i.jsx)(t.h3,{id:"affirmations",children:"Affirmations"}),"\n",(0,i.jsxs)(t.p,{children:["We just saw that, depending on the situation, legs require approvals from relevant accounts. These approvals are called ",(0,i.jsx)(t.strong,{children:"affirmations"}),". At the risk of repeating, it is a relevant account that affirms a leg. ",(0,i.jsx)(t.strong,{children:"Affirming a leg"})," is, in effect, ",(0,i.jsx)(t.em,{children:"placing a signature that is valid for the account concerned"}),". So a key associated with an account indicates agreement by signing an affirmation for a leg. ",(0,i.jsx)(t.strong,{children:"For a given leg to be affirmed, it needs to have received the required affirmations from all relevant accounts."})]}),"\n",(0,i.jsxs)(t.p,{children:["And yes, a ",(0,i.jsx)(t.strong,{children:"secondary key"}),", or a custodian (see below) entrusted with sufficient rights, can affirm on behalf of a relevant account."]}),"\n",(0,i.jsxs)(t.p,{children:["When the account owning an asset has affirmed a leg, then the asset's relevant quantity is ",(0,i.jsx)(t.em,{children:"committed"}),". This commitment prevents double-booking in another instruction's leg, by mistake or malice. Failing to do so would eventually cause one of the two competing instructions to fail much later, at execution."]}),"\n",(0,i.jsx)(t.p,{children:"If a leg mentions a signed receipt for an off-chain action, this signed receipt is committed too."}),"\n",(0,i.jsxs)(t.p,{children:["For the avoidance of doubt, a party can reject a leg, thereby cancelling the whole instruction, and releasing all previously committed assets and signed receipts. A party can also ",(0,i.jsx)(t.em,{children:"not"})," affirm a leg, i.e. play for time, which would leave the instruction in limbo until some other resolution, like a cancellation or the instruction's expiry date being reached."]}),"\n",(0,i.jsx)(t.h3,{id:"instructions---multiparty-transactions",children:"Instructions - Multiparty transactions"}),"\n",(0,i.jsxs)(t.p,{children:["Sending shares to Bob or sending USD to Alice in isolation, as a gift for instance, is all well and good, but, in our world, the overwhelming majority of securities transactions are ",(0,i.jsx)(t.strong,{children:"trades"}),". For instance, imagine:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Leg 1:"})," Alice sends 100 of her ACME shares to Bob on the condition that she receives 10 USD in exchange;"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Leg 2:"})," Bob sends 10 USD to Alice on the condition that he receives 100 ACME shares."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Explicit in this trade is that the two legs should happen in concert or none should happen at all. In computer jargon, this is called an ",(0,i.jsx)(t.strong,{children:"atomic operation"}),", a.k.a. a ",(0,i.jsx)(t.strong,{children:"transaction"}),". Because the word ",(0,i.jsx)(t.em,{children:"transaction"})," is already used in Polymesh to describe ",(0,i.jsx)(t.em,{children:"the serialised bits of information added to the blockchain"})," - itself an atomic operation - such an atomic securities trade is called an ",(0,i.jsx)(t.strong,{children:"instruction"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Transfer with an Exchange",src:n(45871).A+"",width:"1917",height:"1504"})}),"\n",(0,i.jsx)(t.p,{children:"An instruction cannot be created without legs, and legs cannot be created outside of instructions. Also, after it has been created, an instruction cannot be modified. It should be obvious once you imagine what would happen if the first party could modify the second leg after the second party has already affirmed the first leg."}),"\n",(0,i.jsx)(t.h3,{id:"asset-issuer-requirements",children:"Asset issuer requirements"}),"\n",(0,i.jsx)(t.p,{children:"In Polymesh, nothing material happens until the compliance rules have been met. This is true of instructions. So, in our two-legged instruction example, the KYC attestations attached to Alice's and Bob's accounts should comply with ACME's sending and receiving rules, respectively. The instruction will remain in a pending state until ACME's compliance rules are satisfied."}),"\n",(0,i.jsx)(t.p,{children:"For the avoidance of doubt, an instruction may be affirmed by all parties and still be in a pending state while the KYC requirements remain unresolved. The reason for durability of the instruction is that it represents contractual committments. The compliance of parties is fluid and changeable. Failing to comply is merely a temporary setback. It can usually be resolved by addressing KYC requirements. Parties are compelled to resolve compliance issues by the contractual obligation represented by the instruction."}),"\n",(0,i.jsx)(t.p,{children:"As a matter of detail, when an instruction has been fully affirmed but is still pending because of compliance, and it is finally possible for it to execute because the last compliance requirement has been satisfied, the instruction does not automagically execute. It still needs an account to explicitly send a transaction to execute it. Naturally, if an instruction is asked to be executed and it still fails because of compliance, then the instruction is not cancelled. It remains in a pending state."}),"\n",(0,i.jsx)(t.p,{children:"As expected, it is also possible to cancel the whole instruction while compliance is pending."}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, the securities token issuer can also restrict which accounts are allowed to create instructions transferring ",(0,i.jsx)(t.em,{children:"their"})," token. Although it is expected that this facility will seldom be used."]}),"\n",(0,i.jsx)(t.h3,{id:"atomic-execution",children:"Atomic execution"}),"\n",(0,i.jsx)(t.p,{children:"Instructions execute completely, or not at all - in technical parlance, \"atomic\". For example, the above-mentioned instruction has two legs to send shares from Alice to Bob and funds from Bob to Alice. Alice and Bob both need to affirm that the entire instruction is agreeable and properly represents their contractual agreement. Instructions contain other details such as when to actually execute, e.g. as soon as it's affirmed or at a scheduled point of time in the future. Alice and Bob's affirmations indicate their agreement with all such details."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"actual execution"})," is atomic, meaning that the instructions are always ",(0,i.jsx)(t.strong,{children:"either completely executed or not executed at all"}),". There is no case in which one leg of an instruction has executed and the other has not."]}),"\n",(0,i.jsx)(t.p,{children:"With our example, after the instruction has executed:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Alice has 100 fewer shares of ACME, and 10 more USD;"}),"\n",(0,i.jsx)(t.li,{children:"Bob has 100 more shares of ACME, and 10 fewer USD."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["And if the instruction had a signed receipt for an off-chain action, that receipt would be permanently marked as ",(0,i.jsx)(t.em,{children:"used"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"custody",children:"Custody"}),"\n",(0,i.jsxs)(t.p,{children:["Having to keep track and affirm instructions that are relevant to you can be a tedious business. It also doesn't map well with today's world of securities. Today, securities holders, or beneficiaries, are typically represented by other parties that broadly act in the beneficiaries' interest with some guidance. These other parties are called ",(0,i.jsx)(t.strong,{children:"custodians"}),". You may know them as brokers too."]}),"\n",(0,i.jsxs)(t.p,{children:["Polymesh provides a way to ",(0,i.jsx)(t.strong,{children:"mirror this off-chain world"})," with the use of ",(0,i.jsx)(t.strong,{children:"custody on-chain"}),". In this setup, a beneficiary account can designate another account as their custodian in one or more of their portfolios. After the custodian account accepts the responsibility, they can act on behalf of the beneficiary for matters related to settlement."]}),"\n",(0,i.jsx)(t.p,{children:"Assumed in the foregoing is that the beneficiary and the custodian entered into a legally binding contract, whose Polymesh custodial relationship is just the on-chain expression of it."}),"\n",(0,i.jsxs)(t.p,{children:["Belabouring the point, a custodian doesn't own the securities on-chain, the beneficiary still does, and ",(0,i.jsx)(t.strong,{children:"a custodial relationship can be revoked only by the custodian"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"It is therefore incumbent on the beneficiary to partition their portfolios and assets, and designate their custodian(s), so as to reflect the desired mix of responsibilities."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"We will look more closely at custodians at the end of this section."})}),"\n",(0,i.jsx)(t.h3,{id:"venue",children:"Venue"}),"\n",(0,i.jsxs)(t.p,{children:["Finally, an instruction is not created in a void, but instead it is ",(0,i.jsx)(t.strong,{children:"created inside a venue"}),". Ultimately, an account is responsible for its own venues, for access rights, and for who can create, cancel, and remove instructions within them. Once an instruction has been created inside a venue, it cannot be moved to another."]}),"\n",(0,i.jsxs)(t.p,{children:["An advantage of this setup is that the account owning the venue ",(0,i.jsx)(t.strong,{children:"lends its reputation to the instructions"})," that are published in it. A concrete example might be a securities exchange platform, let's name it NextDaq. It publishes matched trades on its ",(0,i.jsx)(t.em,{children:"trade settlement"})," venue. All brokers who have open positions with NextDaq can expect instructions relevant to themselves or their customers. What does a broker do when they see an instruction mentioning a customer of theirs sending funds or shares to an unknown account? Well, since it appeared in NextDaq's settlement venue, they assume that it is a valid matched trade and that the unknown recipient is the counterpart of the trade. As long as the broker can see that the price is right, according to their own records, they can reasonably proceed with the affirmations."]}),"\n",(0,i.jsxs)(t.p,{children:["In fact, ",(0,i.jsx)(t.strong,{children:"the venue creator can also restrict the list of accounts allowed to affirm instructions"})," in its venue. You could for instance imagine that NextDaq would only allow known custodians from affirming instructions."]}),"\n",(0,i.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"An instruction is the vehicle for a settlement on Polymesh. It has many moving parts, all of which have to align for the instruction to be executed. Namely, the securities holders, their potential custodians, the asset issuer's requirements, as well as the venue and its creator."}),"\n",(0,i.jsx)(t.h2,{id:"lateral-concerns",children:"Lateral concerns"}),"\n",(0,i.jsx)(t.h3,{id:"pre-authorisation",children:"Pre-authorisation"}),"\n",(0,i.jsxs)(t.p,{children:["Putting signature to an instruction is not the only way to affirm it. There is another construct, that of ",(0,i.jsx)(t.strong,{children:"pre-authorisation"}),". In effect, ",(0,i.jsx)(t.em,{children:"a signature that validates one, and only one, future instruction"}),". Not unlike a blank cheque."]}),"\n",(0,i.jsx)(t.p,{children:"So if Bob signed a pre-authorisation, Alice can include it when creating the instruction. The pre-authorisation will be committed before execution, and marked as consumed when the instruction executes."}),"\n",(0,i.jsx)(t.p,{children:"This could also be used by an exchange, which would collect pre-authorisations from the brokers that list on it. A new instruction would therefore be authorised as soon as it is created, potentially leading to instant settlement."}),"\n",(0,i.jsx)(t.h3,{id:"netting-process",children:"Netting process"}),"\n",(0,i.jsx)(t.p,{children:"Our trade example between Alice and Bob was simple, two legs and two parties. Now, we can imagine a busy exchange platform agreeing with its brokers that it will emit fewer instructions, which in effect batch trades, or express the net effect of a collection of trades that took place."}),"\n",(0,i.jsx)(t.p,{children:"For instance, instead of three instructions that would see:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Alice selling 100 ACME to Bob for 10 USD;"}),"\n",(0,i.jsx)(t.li,{children:"Bob selling 40 ACME to Carol for 5 USD;"}),"\n",(0,i.jsx)(t.li,{children:"Alice selling 20 ACME to Carol for 2 USD."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"There could be a single instruction with four legs that would see:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Alice sending 60 ACME to Bob;"}),"\n",(0,i.jsx)(t.li,{children:"Alice sending 60 ACME to Carol;"}),"\n",(0,i.jsx)(t.li,{children:"Bob sending 5 USD to Alice;"}),"\n",(0,i.jsx)(t.li,{children:"Carol sending 7 USD to Alice."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In both situations, the net effect is that:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Alice has 120 fewer ACME and 12 more USD;"}),"\n",(0,i.jsx)(t.li,{children:"Bob has 60 more ACME and 5 fewer USD;"}),"\n",(0,i.jsx)(t.li,{children:"Carol has 60 more ACME and 7 fewer USD."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"So there is reason to believe that all three parties, or their respective custodians, would be agreeable to the single larger instruction. The instruction is still atomic so it would not be possible for Alice to send her shares without full compensation, for instance. A potential downside is that with more parties whose affirmations, and proper attestations, are required, there is a higher chance of a hold-up. Which is why an exchange would be expected to do this only with parties with higher trust or pre-authorisations."}),"\n",(0,i.jsx)(t.h3,{id:"chain-of-responsibility",children:"Chain of responsibility"}),"\n",(0,i.jsx)(t.p,{children:"A settlement is interesting for the parties who directly benefit from it, like Alice and Bob in our trading example. However, they are not the only parties that wish to see settlements unfold without problems."}),"\n",(0,i.jsx)(t.p,{children:"To reflect the realities of capital markets and leverage Decentralised Finance (DeFi) models, Polymesh integrates multiparty transactions and provides a network that can include third parties such as exchanges and custodians, as seen earlier."}),"\n",(0,i.jsx)(t.p,{children:"Let's take a closer look at these two stakeholders and how Polymesh integrates their roles."}),"\n",(0,i.jsx)(t.h4,{id:"seen-from-exchanges",children:"Seen from exchanges"}),"\n",(0,i.jsxs)(t.p,{children:["An ",(0,i.jsx)(t.strong,{children:"exchange"})," ",(0,i.jsx)(t.em,{children:"matches parties for a trade to which they agreed in principle"}),". When the exchange has a match, the parties are legally bound to complete the trade, i.e. settle it. If a trading party fails to complete the trade, the reputational risk would jump back at the exchange, raising questions about the honesty of its traders. So exchanges have a ",(0,i.jsx)(t.strong,{children:"vested interest"})," in making sure that ",(0,i.jsx)(t.strong,{children:"all their matched trades settle"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"To achieve this, they monitor their participants' reputation, and they make sure to collect adequate information before creating a fully-descriptive instruction."}),"\n",(0,i.jsx)(t.h4,{id:"seen-from-custodians",children:"Seen from custodians"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Custodians"})," can represent a security beneficiary, for instance on an exchange. They may represent more than one beneficiary on an exchange too, and, from the point of view of an exchange, the ",(0,i.jsx)(t.em,{children:"trader"})," is the custodian. So the exchange is in effect keeping track of the custodians' reputations. In turn, when it comes to a given settlement, a custodian cannot override a beneficiary's failing compliance. This is a reputational risk for custodians. Therefore, custodians are compelled to monitor the compliance of their customers before they represent them on an exchange."]}),"\n",(0,i.jsx)(t.p,{children:"Also, given sufficient liquidity, a given custodian can act as an exchange between parties when it is possible to create such matches. In this case, as well, custodians have a vested interest in ensuring that settlement instructions complete."}),"\n",(0,i.jsx)(t.h3,{id:"on-custodians-and-portfolios",children:"On custodians and portfolios"}),"\n",(0,i.jsx)(t.p,{children:"Linked to the inclusion of custody providers are the way assets are held on Polymesh, and how portfolios are conceptualised and implemented. How is that?"}),"\n",(0,i.jsxs)(t.p,{children:["All assets on Polymesh are held at the ",(0,i.jsx)(t.strong,{children:"account level"}),". This helps enforce compliance in real time. At the same time, it allows to ",(0,i.jsx)(t.strong,{children:"organise assets under accounts"}),", and ",(0,i.jsx)(t.strong,{children:"assign key permissions and custody"}),". Another value added for entities opting for Polymesh, because an account can represent a whole organisation, which then can allow its employees access to the account based on operative requirements, or an account can represent a single person and provide for individual access."]}),"\n",(0,i.jsxs)(t.p,{children:["Very important in this regard is the ",(0,i.jsx)(t.strong,{children:"portfolio"})," concept in Polymesh. One can ",(0,i.jsx)(t.em,{children:"partition assets into logical portfolios"})," within a single account. With this way of partitioning, assets across portfolios can have different balances while being connected to the same account. Asset partitioning into logical portfolios ",(0,i.jsx)(t.strong,{children:"facilitates good asset management"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Portfolios are especially interesting when it comes to custody. Any assets in a portfolio can be assigned to a custodian, who then manages them exclusively. Each portfolio can ",(0,i.jsx)(t.strong,{children:"only"})," be assigned to a single custodian at the same time. And any new assets transferred into a portfolio managed by a custodian are also included in the custody."]}),"\n",(0,i.jsxs)(t.p,{children:["When a user ",(0,i.jsx)(t.strong,{children:"assigns custodianship"})," to a portfolio, the ",(0,i.jsx)(t.em,{children:"custodial control is transferred to a different identity"}),". This form of permission ",(0,i.jsx)(t.strong,{children:"separates beneficial ownership from custodial control"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"What is the difference between both?"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Beneficial ownership"})," means the ",(0,i.jsx)(t.em,{children:"control over an asset or legal entity"}),". Following the United States of America ",(0,i.jsx)(t.em,{children:"Securities Exchange Act"})," (1934), beneficial ownership, when it comes to securities, is understood as any person holding voting or investment power. Translating into Polymesh, beneficial ownership is ",(0,i.jsx)(t.strong,{children:"always"})," held by the beneficiaries account and is the base criteria to participate in corporate actions."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Custodial control"})," gives another entity, i.e. account, ",(0,i.jsx)(t.em,{children:"the right to manage assets on behalf of the beneficiary"}),". This is where custody service providers come into play on Polymesh."]}),"\n",(0,i.jsxs)(t.p,{children:["Performing actions for the beneficiaries, i.e. token holders, is possible for the custodian through ",(0,i.jsx)(t.strong,{children:"authorisations"}),". If another user is involved in an action, an ",(0,i.jsx)(t.em,{children:"invitation to action"})," becomes necessary. ",(0,i.jsx)(t.strong,{children:"The authorisation system remains on-chain at all times."})]}),"\n",(0,i.jsx)(t.p,{children:"Custodians with access to a portfolio are able to affirm instructions referencing the portfolio and given on behalf of the beneficial owner, token holder. Thus, beneficial ownership records are maintained consistently and ownership remains in the hands of the token holder, while allowing custodial control."}),"\n",(0,i.jsx)(t.p,{children:"Why are authorisations necessary when dealing with custody services?"}),"\n",(0,i.jsxs)(t.p,{children:["First, it ensures that custodians act in the beneficials interest. ",(0,i.jsx)(t.strong,{children:"On-chain authorisations"})," make everything transparent and provide on-chain tracking of authorisations. In addition, human errors are reduced by this process, i.e. a typo cannot pass unnoticed and result in an unintended consequence. Last but not least, it makes ",(0,i.jsx)(t.em,{children:"dumps of toxicity"})," less possible, thus improving regulatory compliance."]}),"\n",(0,i.jsxs)(t.p,{children:["Custody management is simplified on Polymesh. For example, a custodian doesn't need to generate one key for every single client. Accounts use keys internally while keys/accounts are used externally for custody. Custody can be understood as ",(0,i.jsx)(t.strong,{children:"a form of proprietary key management"}),". This gives the setup flexibility, due to which a custodian can maintain their key management concept and process structure when migrating to the network."]}),"\n",(0,i.jsx)(t.p,{children:"Then, what services can a custodian perform on-chain?"}),"\n",(0,i.jsx)(t.p,{children:"Once assigned, a custodian is able to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"affirm or reject instructions regarding custodial assets on behalf of the beneficial asset holder, and"}),"\n",(0,i.jsx)(t.li,{children:"revoke the custodianship over a portfolio."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A custodian can settle instructions only, but has full-autonomy to affirm these."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["If you are feeling unsure about accounts, signing keys and permissions, take a look at the ",(0,i.jsx)(t.a,{href:"/docs/introduction/identity/",children:"identity section"}),"!"]})}),"\n",(0,i.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/polymesh-docs/primitives/settlement/",children:"Primitives: Settlement"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},45871:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/08_transfer_exchange-a74091f3fb2f0d940d73e93de1823469.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);