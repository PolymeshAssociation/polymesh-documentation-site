"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[45050],{96512:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(74848),a=i(28453);const o={title:"Corporate Actions",description:"",subsite:"polymesh-docs"},s=void 0,l={id:"primitives/corporate-actions",title:"Corporate Actions",description:"",source:"@site/polymesh-docs/primitives/corporate-actions.mdx",sourceDirName:"primitives",slug:"/primitives/corporate-actions",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/corporate-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/polymesh-docs/primitives/corporate-actions.mdx",tags:[],version:"current",frontMatter:{title:"Corporate Actions",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"Compliance",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/compliance"},next:{title:"Identity",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/identity"}},r={},c=[{value:"Overview",id:"overview",level:2},{value:"Initiating a corporate action",id:"initiating-a-corporate-action",level:3},{value:"Corporate Action Agent (CAA)",id:"corporate-action-agent-caa",level:4},{value:"Record Dates &amp; Checkpoints",id:"record-dates--checkpoints",level:4},{value:"Taxes",id:"taxes",level:4},{value:"Targeted investors",id:"targeted-investors",level:4},{value:"Linked Documentation",id:"linked-documentation",level:4},{value:"Capital distribution",id:"capital-distribution",level:3},{value:"Corporate Ballots",id:"corporate-ballots",level:3},{value:"Ballot Structure",id:"ballot-structure",level:4},{value:"Getting Started",id:"getting-started",level:4}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["In the lifecycle of publicly traded companies, e.g., stocks in ACME Inc., there are what is known as ",(0,n.jsxs)(t.a,{href:"https://en.wikipedia.org/wiki/Corporate_action",children:[(0,n.jsx)(t.em,{children:"corporate actions"})," (CAs)"]}),". Examples of these include dividend payments, stock splits, and ballot for the ",(0,n.jsxs)(t.a,{href:"https://en.wikipedia.org/wiki/Annual_general_meeting",children:[(0,n.jsx)(t.em,{children:"annual general meeting"})," (AGM)"]}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Assuming ACME has been digitized as an ",(0,n.jsx)(t.a,{href:"../assets/",children:"asset through that pallet"}),", Polymesh can manage some types of CAs as well for you."]}),"\n",(0,n.jsx)(t.p,{children:"This is handled through three pallets:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/index.html",children:"Corporate Actions"}),", which is the base layer handling setups, CA initiation, documents linking, and removal."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/ballot/index.html",children:"Ballots"}),", through which corporate ballots for AGMs can be conducted."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/distribution/index.html",children:"Capital Distributions"}),", through which benefits, e.g., dividends, can be distributed to investors."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Now let's dig into the details!"}),"\n",(0,n.jsx)(t.h3,{id:"initiating-a-corporate-action",children:"Initiating a corporate action"}),"\n",(0,n.jsxs)(t.p,{children:["All CAs start with ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/enum.Call.html#variant.initiate_corporate_action",children:(0,n.jsx)(t.code,{children:"initiate_corporate_action"})}),", a dispatchable function that creates a CA.\nWhen creating the CA, the associated asset's ticker, free-form text, and the CA kind, e.g., a notice or a benefit need to be provided."]}),"\n",(0,n.jsx)(t.p,{children:"A declaration date should also be provided when initiating a corporate action. This is the date that the corporate action was declared, and should be earlier than both the record date, and the time when the corporate action is initiated on-chain."}),"\n",(0,n.jsx)(t.p,{children:"Additionally, a record date, withholding taxes, and the targets of the CA can be specified."}),"\n",(0,n.jsx)(t.p,{children:"For more on those, read on."}),"\n",(0,n.jsx)(t.h4,{id:"corporate-action-agent-caa",children:"Corporate Action Agent (CAA)"}),"\n",(0,n.jsxs)(t.p,{children:["The function must be called by the asset's ",(0,n.jsx)(t.em,{children:"corporate action agent"})," (CAA). By default, the CAA is the asset's owner. Using the authorization system, this can be changed, assigning someone else as CAA."]}),"\n",(0,n.jsxs)(t.p,{children:["When the owner is not CAA, they can no longer initiate CAs, tweak the setup, ballots, distributions, or related functionality. Who the CAA is can be reset, however, using the dispatchable ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/enum.Call.html#variant.remove_ca",children:(0,n.jsx)(t.code,{children:"reset_caa"})}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"record-dates--checkpoints",children:"Record Dates & Checkpoints"}),"\n",(0,n.jsxs)(t.p,{children:["Supposing that ACME is traded frequently, it would be difficult to know the entitlement of each investor in a distribution, or how much voting power each holder can use in an ballot.\nTo provide these services with stable reference points, the CA pallet uses ",(0,n.jsx)(t.a,{href:"../assets/#checkpoints",children:"checkpoints"})," to determine an investor's balance and the total supply.\nFor CAs, the checkpoint used is known as the ",(0,n.jsx)(t.em,{children:"record date"}),", and is specified when creating the CA."]}),"\n",(0,n.jsx)(t.p,{children:"A record date can be specified in one of three ways:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"By providing an existing checkpoint, created in the past."}),"\n",(0,n.jsx)(t.li,{children:"Specifying a scheduled time at which a checkpoint should be created."}),"\n",(0,n.jsx)(t.li,{children:"Providing an existing irremovable schedule."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Once a CA has been initiated, assuming the services attached to the CA, such as a ballot or a distribution, permit, the record date can still be changed using the dispatchable ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/enum.Call.html#variant.change_record_date",children:(0,n.jsx)(t.code,{children:"change_record_date"})}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"taxes",children:"Taxes"}),"\n",(0,n.jsx)(t.p,{children:"Some CAs have taxable components. Chief among them are dividends, where the investor receives income by holding the asset. In some jurisdictions, it is the responsibility of the issuer, or the CAA to deduct tax from any dividends and send it to the relevant government. For example, if ACME is based in Sweden, 20% tax would apply."}),"\n",(0,n.jsxs)(t.p,{children:["Polymesh can handle this ",(0,n.jsx)(t.em,{children:"withholding tax"})," natively, allowing you to specify how many % that should be withheld. This % can either be specified generally for all investors (the ",(0,n.jsx)(t.em,{children:"default withholding tax"}),"), or customized to specific individual investors (",(0,n.jsx)(t.em,{children:"DID-specific withholding tax"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["When the same taxes are used over and over again for many CAs, the process can be simplified by specifying asset level defaults. This is achieved using ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/enum.Call.html#variant.set_default_withholding_tax",children:(0,n.jsx)(t.code,{children:"set_default_withholding_tax"})})," and ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/enum.Call.html#variant.set_did_withholding_tax",children:(0,n.jsx)(t.code,{children:"set_did_withholding_tax"})}),", where the former is general and the latter is DID-specific."]}),"\n",(0,n.jsx)(t.h4,{id:"targeted-investors",children:"Targeted investors"}),"\n",(0,n.jsxs)(t.p,{children:["By default, a CA for some asset will apply to, or ",(0,n.jsx)(t.em,{children:"target"}),", every investor holding any asset balance. Sometimes however, for whatever reason, some identities must be excluded from the target set. When creating a CA, the target set can either be specified inclusively, or alternatively, a set of identities can be excluded explicitly. As with taxes, an asset level default can also be set, using ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/enum.Call.html#variant.set_default_targets",children:(0,n.jsx)(t.code,{children:"set_default_targets"})}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"linked-documentation",children:"Linked Documentation"}),"\n",(0,n.jsxs)(t.p,{children:["Where the free-form text is insufficient, or existing documentation relevant for the CA already exists, asset documentation can instead be linked to the CA. Supposing that both a CA and asset documents already exist, they can be related using ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/enum.Call.html#variant.link_ca_doc",children:(0,n.jsx)(t.code,{children:"link_ca_doc"})}),", linking the CA to a list of documents."]}),"\n",(0,n.jsx)(t.h3,{id:"capital-distribution",children:"Capital distribution"}),"\n",(0,n.jsxs)(t.p,{children:["Polymesh can do more than merely record CAs on-chain. A capital distribution, such as paying a dividend to investors, can also be handled natively. Once CA of the predictable or unpredictable benefit kind has been created, the dispatchable ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/distribution/enum.Call.html#variant.distribute",children:(0,n.jsx)(t.code,{children:"distribute"})}),", in the ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/distribution/index.html",children:"capital distributions pallet"}),", is used to attach a distribution to the CA."]}),"\n",(0,n.jsxs)(t.p,{children:["When calling ",(0,n.jsx)(t.code,{children:"distribute"}),", the CA, an amount of a currency to distribute from a portfolio of the CAA, and the start / expiry dates of the distribution, are specified."]}),"\n",(0,n.jsxs)(t.p,{children:["Once a distribution exists, and the start time is due, investors can use ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/distribution/enum.Call.html#variant.claim",children:(0,n.jsx)(t.code,{children:"claim"})})," before any expiry date to pull their benefit to their default portfolio. However, the CAA, or the owner, can also use ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/distribution/enum.Call.html#variant.push_benefit",children:(0,n.jsx)(t.code,{children:"push_benefit"})})," to push benefits to investors. Once the distribution has expired, the distribution creator can ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/distribution/enum.Call.html#variant.reclaim",children:(0,n.jsx)(t.code,{children:"reclaim"})})," any remaining balance."]}),"\n",(0,n.jsxs)(t.p,{children:["Before a distribution has started, it can also be cancelled, using ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/distribution/enum.Call.html#variant.remove_distribution",children:(0,n.jsx)(t.code,{children:"remove_distribution"})}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"corporate-ballots",children:"Corporate Ballots"}),"\n",(0,n.jsx)(t.p,{children:"Polymesh can also handle ballots on-chain. For example, a corporation's annual general meeting can be conducted using ballots."}),"\n",(0,n.jsx)(t.h4,{id:"ballot-structure",children:"Ballot Structure"}),"\n",(0,n.jsx)(t.p,{children:"A ballot has a start and end date, during which investors can vote on motions included in the ballot. These motions in turn are associated with descriptions and links to more information."}),"\n",(0,n.jsxs)(t.p,{children:["More importantly, however, motions contain choices, e.g., a) ",(0,n.jsx)(t.em,{children:'"aye"'}),", b) ",(0,n.jsx)(t.em,{children:'"aye with X amendment"'}),", and c) ",(0,n.jsx)(t.em,{children:'"nay"'}),", to which weights can be assigned. These weights or votes are based on how many tokens each investor holds. For example, an investor with 200 tokens will have 200 votes and one with 100 tokens has 100. Those 200 votes could be assigned like so: a) 50, b) 150, c) 0."]}),"\n",(0,n.jsx)(t.p,{children:"Motions are independent of each other. For example, consider a vote on who should be in the board of directors, and a motion to discharge the old board from liability. These would be independent, and therefore, all 200 tokens can be reused on each motion."}),"\n",(0,n.jsxs)(t.p,{children:["Optionally, a ballot can be configured with ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Ranked_voting",children:(0,n.jsx)(t.em,{children:"ranked-choice voting (RCV)"})}),". This allows voters to specify that the weight, assigned to a choice not making it, should fall back to a different choice. For example, consider 3 choices paired with weights:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"a) 49 votes, no fallback"}),"\n",(0,n.jsx)(t.li,{children:"b) 100 votes, fallback to a)"}),"\n",(0,n.jsx)(t.li,{children:"c) 120 votes, no fallback."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In this case, c) initially has most weight assigned to it. However, once a) has been discarded, the 49 votes it would move over to b), which now has 149 votes in total. Therefore, b) becomes the adopted choice."}),"\n",(0,n.jsx)(t.h4,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(t.p,{children:["Now let's go over how a ballot can be made, tweaked, and voted on. Once a CA of the notice kind has been created, the a ballot can be attached using ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/ballot/enum.Call.html#variant.attach_ballot",children:(0,n.jsx)(t.code,{children:"attach_ballot"})}),". This function will take the aforementioned details such as the motion data."]}),"\n",(0,n.jsx)(t.p,{children:"After the ballot has been created, but before voting has started, the ballot's configuration may be amended, in 3 ways:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/ballot/enum.Call.html#variant.change_end",children:(0,n.jsx)(t.code,{children:"change_end"})})," to change when no more votes will be accepted,"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/ballot/enum.Call.html#variant.change_meta",children:(0,n.jsx)(t.code,{children:"change_meta"})})," to change the title and the motions,"]}),"\n",(0,n.jsxs)(t.li,{children:["and ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/ballot/enum.Call.html#variant.change_rcv",children:(0,n.jsx)(t.code,{children:"change_rcv"})})," to change whether RCV is supported or not."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Moreover, before the start, the ballot can be removed using ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/ballot/enum.Call.html#variant.remove_ballot",children:(0,n.jsx)(t.code,{children:"remove_ballot"})}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Once the start date is due, any token holder can use ",(0,n.jsx)(t.a,{href:"https://docs.polymesh.live/pallet_corporate_actions/ballot/enum.Call.html#variant.vote",children:(0,n.jsx)(t.code,{children:"vote"})})," to assign votes to all choices. Investors can vote as many times as they want, regretting their choices, until the end is due."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>l});var n=i(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);