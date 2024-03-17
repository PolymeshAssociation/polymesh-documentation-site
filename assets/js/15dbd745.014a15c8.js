"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[26765],{2666:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=i(74848),n=i(28453);const a={title:"Compliance",description:"",subsite:"polymesh-docs"},o=void 0,r={id:"primitives/compliance",title:"Compliance",description:"",source:"@site/polymesh-docs/primitives/compliance.mdx",sourceDirName:"primitives",slug:"/primitives/compliance",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/compliance",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/polymesh-docs/primitives/compliance.mdx",tags:[],version:"current",frontMatter:{title:"Compliance",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"Customer Due Diligence",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/cdd"},next:{title:"Corporate Actions",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/corporate-actions"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Claims",id:"claims",level:2},{value:"Trusted Claim Issuers and Scopes",id:"trusted-claim-issuers-and-scopes",level:2},{value:"Claim Scopes",id:"claim-scopes",level:2},{value:"Compliance Rules",id:"compliance-rules",level:2},{value:"Additional Transfer Restrictions",id:"additional-transfer-restrictions",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.p,{children:"Polymesh allows asset issuers to enforce relevant compliance on their assets in real-time, through the use of claim based transfer rules, and optional additional transfer restrictions."}),"\n",(0,t.jsx)(s.p,{children:"The compliance manager, implemented in the base layer of the Polymesh blockchain, provides a flexible framework to allow asset issuers to easily configure complex transfer rules based on claims that must be held by their investors."}),"\n",(0,t.jsx)(s.h2,{id:"claims",children:"Claims"}),"\n",(0,t.jsx)(s.p,{children:"There are several types of claims that can be attested from one identity to another. A claim should be interpreted simply as something which is being claimed, and does not have any on chain proof associated with it in general."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Claim Types",src:i(47971).A+"",width:"1518",height:"544"})}),"\n",(0,t.jsxs)(s.p,{children:["The above diagram shows the available claim types. Some of these claim types are parametrised with additional information relevant to the claim, for example ",(0,t.jsx)(s.code,{children:"Jurisdiction"})," includes the country code of the users jurisdiction."]}),"\n",(0,t.jsxs)(s.p,{children:["Each claim has an optional expiry, after which the claim is no longer considered valid. For ",(0,t.jsx)(s.code,{children:"Buy Lockup"})," and ",(0,t.jsx)(s.code,{children:"Sell Lockup"})," this can be used to prevent investors from buying or selling an asset until after the expiry date of the respective claim."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Custom"})," claim type allows the possibility to attach non default claim types which can further expand the options available to be used with compliance rules."]}),"\n",(0,t.jsx)(s.p,{children:'There is an additional "special" claim not shown above which is treated differently, this is:'}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"CustomerDueDiligence"}),": This can only be issued by trusted ",(0,t.jsx)(s.a,{href:"../cdd/",children:"CDD"})," service providers and allows a user general access to the Polymesh network."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"trusted-claim-issuers-and-scopes",children:"Trusted Claim Issuers and Scopes"}),"\n",(0,t.jsx)(s.p,{children:"Anyone can issue a claim for an identity but that does not mean the issuer should consider that claim as valid."}),"\n",(0,t.jsxs)(s.p,{children:["Asset issuers specify which other identities they trust for the purposes of assessing claims on their investors. This allows the issuer to set rules which are only satisfied if an investor has the relevant claims, issued by these trusted identities. An asset issuer can include themselves in this list of trusted claim issuers, as well as their partnered KYC organisations. An issuer can also restrict which specific claim types are considered valid from the trusted claim issuers. e.g. the ",(0,t.jsx)(s.code,{children:"Affiliate"})," claim can be restricted to only be accepted from the issuer themselves."]}),"\n",(0,t.jsxs)(s.p,{children:["An issuer may specify one or more ",(0,t.jsx)(s.strong,{children:"default"})," trusted claim issuers. If a rule does not explicitly specify a claim issuer for a condition, the default claim issuers are used."]}),"\n",(0,t.jsx)(s.h2,{id:"claim-scopes",children:"Claim Scopes"}),"\n",(0,t.jsx)(s.p,{children:"Claim issuers also specify a scope for an identity claim. Asset issuers use scopes in their compliance rules to further define what claims are accepted for their asset. A claim scope can apply to an asset, an identity or a custom scope."}),"\n",(0,t.jsx)(s.p,{children:"Examples of claim scopes are as follows:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A claim is scoped to the ",(0,t.jsx)(s.code,{children:"ACME"})," token allows the claim to be used with rule conditions that accept claims scoped to only this asset. This is the most restrictive scope as claims must specifically be created for this asset, but provides most granular control of identity claims."]}),"\n",(0,t.jsxs)(s.li,{children:["A claim is scoped to the ",(0,t.jsx)(s.code,{children:"ACME Co."})," identity. The issuer of the ",(0,t.jsx)(s.code,{children:"ACME-A"}),", ",(0,t.jsx)(s.code,{children:"ACME-B"})," and ",(0,t.jsx)(s.code,{children:"ACME-C"})," assets. This can allow an issuer to reuse the identity claims across multiple assets they have issued. In this case, instead of claim issuers issuing multiple KYC claims scoped to individual assets, they can issue a single claim scoped to their identity that can be reused in the compliance rules of multiple assets."]}),"\n",(0,t.jsxs)(s.li,{children:["A claim is scoped to a custom identifier e.g. ",(0,t.jsx)(s.code,{children:"ACME Exchange"}),". The ACME Exchange could issue identity claims for every account holder that onboards with them under this custom scope. If an asset issuer lists their token on the ACME exchange and the issuer accepts the exchange as a trusted claim issuer, the issuer can allow exchange account holders to trade their token by accepting the exchange custom scope in their compliance rules."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"compliance-rules",children:"Compliance Rules"}),"\n",(0,t.jsx)(s.p,{children:"The compliance manager allows asset issuers to configure the compliance rules for their asset. The below diagram shows the construction of issuer defined compliance rules on Polymesh."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Compliance Rule Construction",src:i(30809).A+"",width:"1638",height:"2549"})}),"\n",(0,t.jsx)(s.p,{children:"Asset issuers can specify one or more rules for their asset. Each individual compliance rule consists of a list of conditions that the sender must satisfy, and a list of conditions that the receiver must satisfy. If both parties of a settlement leg satisfy the conditions of any one of these rules, then the leg can be settled as part of the instruction."}),"\n",(0,t.jsx)(s.p,{children:"All of the conditions for a particular compliance rule (for both the sender and receiver) must be satisfied, although it is possible for these lists to be empty. i.e. if sender conditions are left blank all asset holders can send the token without restriction, provided the receiver satisfies the defined receiver conditions."}),"\n",(0,t.jsx)(s.p,{children:"An asset issuer can choose to also pause compliance on their asset allowing all settlement legs for their asset to execute upon affirmation. Pausing asset compliance rules may be useful for certain assets such as stable coins where the issuer does not want to impose transfer restrictions on either the sender or receiver."}),"\n",(0,t.jsx)(s.p,{children:"A condition can specify that a particular claim (including a specific claim scope) must be present, or absent, or that a group of claims must be present, or absent, or that at least one of a claim type must be present. Conditions also define who are accepted as the trusted claim issuers for the condition. A condition can also enforce that the sender or receiver is a particular identity."}),"\n",(0,t.jsx)(s.p,{children:"If any one of the compliance rules are satisfied in a particular leg settlement, then the compliance is considered to be complete. This allows asset issuers to add complex rule sets that combine logical sets of rules that their asset must remain compliant with."}),"\n",(0,t.jsx)(s.p,{children:"For example a rule set where only a single rule must be satisfied may be as follows:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Rule 1 - sender does not have a sell lockup, scoped to the asset, from the asset issuer and receiver has a KYC claim and is not from a jurisdiction of the USA with claims scoped to the asset or scoped to the issuers identity and from the issuers KYC partner."}),"\n",(0,t.jsx)(s.li,{children:"Rule 2 - sender does not have a sell lockup, scoped to the asset, from the asset issuer and receiver has a KYC claim and an Accredited claim with claims scoped to the asset or scoped to the issuers identity and from the issuers KYC partner."}),"\n",(0,t.jsx)(s.li,{children:"Rule 3 - senders identity is an agent of the asset and no receiver conditions."}),"\n",(0,t.jsx)(s.li,{children:"Rule 4 - no sender restriction and the receiver's identity is an agent of the asset."}),"\n",(0,t.jsx)(s.li,{children:"Rule 5 - no sender restriction and receiver has a claim of exempted, scoped to the asset, from the asset issuer."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"additional-transfer-restrictions",children:"Additional Transfer Restrictions"}),"\n",(0,t.jsx)(s.p,{children:"In addition to the flexible claim based compliance manager, asset issuers can use transfer restrictions to further control the trading of their assets."})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},47971:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/claim_construction-44ec2be66ab26acd93269a470aa3e1e3.png"},30809:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/compliance_rule_construction-0c3e264968a0ce374d37d89c406842f0.png"},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>r});var t=i(96540);const n={},a=t.createContext(n);function o(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);