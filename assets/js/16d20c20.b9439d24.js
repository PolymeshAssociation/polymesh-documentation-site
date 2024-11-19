"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[77285],{45081:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"kyc/know-your-customer","title":"Overview","description":"KYC and CDD in Polymesh","source":"@site/docs/07-kyc/know-your-customer.mdx","sourceDirName":"07-kyc","slug":"/kyc/know-your-customer","permalink":"/polymesh-documentation-site/docs/kyc/know-your-customer","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/07-kyc/know-your-customer.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Overview","description":"KYC and CDD in Polymesh"},"sidebar":"defaultSidebar","previous":{"title":"Know Your Customer","permalink":"/polymesh-documentation-site/docs/kyc/kyc"},"next":{"title":"Dashboard","permalink":"/polymesh-documentation-site/docs/kyc/kyc-dashboard/"}}');var n=i(74848),o=i(28453);const r={sidebar_position:2,title:"Overview",description:"KYC and CDD in Polymesh"},a=void 0,c={},h=[{value:"Approach to identity and compliance",id:"approach-to-identity-and-compliance",level:2},{value:"CDD service providers",id:"cdd-service-providers",level:2},{value:"KYC service providers",id:"kyc-service-providers",level:2},{value:"Future outlook",id:"future-outlook",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Becoming a KYC service provider or CDD service provider",id:"becoming-a-kyc-service-provider-or-cdd-service-provider",level:2},{value:"Links",id:"links",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["KYC is short for ",(0,n.jsx)(t.strong,{children:"know your customer"})," and describes a set of processes that aim to verify identity. A ",(0,n.jsx)(t.strong,{children:"KYC service provider"})," is a company that performs such processes ",(0,n.jsx)(t.em,{children:"to help verify customer identity on behalf of their client"}),", such as a security issuer that needs to verify the identities of the holders of the asset in order to comply with regulatory requirements."]}),"\n",(0,n.jsxs)(t.p,{children:["Polymesh also has a customer due diligence process (CDD), which every user must complete before they can transact with security tokens. ",(0,n.jsx)(t.strong,{children:"CDD is a minimal KYC"})," process that is enforced at the network level, while ",(0,n.jsx)(t.strong,{children:"KYC"})," usually refers to a ",(0,n.jsx)(t.strong,{children:"bespoke process"})," that each security token owner tailors to their own requirements."]}),"\n",(0,n.jsx)(t.h2,{id:"approach-to-identity-and-compliance",children:"Approach to identity and compliance"}),"\n",(0,n.jsxs)(t.p,{children:["Be sure to review the conceptual ",(0,n.jsx)(t.a,{href:"/docs/introduction/identity/",children:"overview of identity in Polymesh in the introduction section"})," to understand the foundations of the system. The following is a brief and incomplete recap of some important concepts."]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Accounts, known by developers as Polymesh DIDs (distributed identifiers), represent on-chain users, which can be natural persons or legal entities;"}),"\n",(0,n.jsx)(t.li,{children:"Primary and secondary keys sign on behalf of accounts. This is particularly important when employees or agents act on behalf of legal entities such as corporations;"}),"\n",(0,n.jsxs)(t.li,{children:["Attestations are signed declarations ",(0,n.jsx)(t.em,{children:"about"})," the identities. These are analogous to the information contained in official documents. ",(0,n.jsx)(t.em,{children:"Who"})," issues an attestation is important because the issuer's verification process and their reputation gives weight to the claims laid out in the attestation. The more stringent the process and the more credible the reputation of the attestor, the more confidence one can place in the attestation's claims;"]}),"\n",(0,n.jsx)(t.li,{children:"Claims are the individual pieces of information that are stated in an attestation."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The following comparison might help in case this is not clear."}),"\n",(0,n.jsxs)(t.p,{children:["An attestation never takes the form ",(0,n.jsx)(t.code,{children:"name: Alice"}),". Instead, similar information would be recorded as (approximately), ",(0,n.jsx)(t.code,{children:"BigBank says name: Alice"}),". This difference is important. While the former is merely a few bytes of data with no lineage (we don't know where it came from), the latter implies that BigBank has executed their process, ",(0,n.jsx)(t.em,{children:"concluded"})," that the name is Alice. BigBank has ",(0,n.jsx)(t.em,{children:"signed"})," the attestation and thus staked their reputation, in part, on the reliability of the statement. The signature, and thus the lineage of the attestation is a fact on the blockchain."]}),"\n",(0,n.jsx)(t.h2,{id:"cdd-service-providers",children:"CDD service providers"}),"\n",(0,n.jsx)(t.p,{children:"Anonymous parties are unable to receive or send security tokens on Polymesh. Instead, each user is required to complete a customer due diligence process (CDD) that links their account to an identifiable person. At the time of writing, on the Testnet, this process involves receiving a text message on a phone and responding with the code that was sent. This linkage goes some distance to unmasking anonymous users."}),"\n",(0,n.jsxs)(t.p,{children:["The process itself will evolve over time and we can expect a more stringent process to emerge on Mainnet. The ",(0,n.jsx)(t.em,{children:"result"})," of the process, regardless of the process details, is that the user receives a ",(0,n.jsx)(t.strong,{children:"customer due diligence attestation"}),". This is the minimal level of KYC required to transact regulated securities on Polymesh."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Refer to the quick start to ",(0,n.jsx)(t.a,{href:"/docs/quickstart/verification-with-cdd",children:"learn how to complete CDD"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["A CDD service provider is a privileged KYC organisation that has been ",(0,n.jsx)(t.strong,{children:"authorised to sign CDD attestations"})," for Polymesh. This separation of concerns means that CDD can be a decentralised service, possibly offering users a choice of the process they prefer or specialists who operate in niche regions. Also, since KYC and CDD attestations have expiry dates, holding more than one such attestation is a way of safeguarding continuous access to the network. The network rule is simple. Polymesh ensures that each user has at least one valid CDD attestation from an authorised signer before the pertinent actions can be performed."]}),"\n",(0,n.jsx)(t.h2,{id:"kyc-service-providers",children:"KYC service providers"}),"\n",(0,n.jsxs)(t.p,{children:["It's important to understand ",(0,n.jsx)(t.strong,{children:"the relationship between asset owners and KYC service providers"}),". Asset owners, e.g. the issuer, are responsible for their own compliance. By extension, they are responsible for the processes that maintain that compliance. Procedures for identifying asset holders are inseparable from those concerns. Therefore, asset originators design their KYC processes, which, in summary establish what they know about their asset holders, and ",(0,n.jsx)(t.em,{children:"how they know"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["How they know will usually involve ",(0,n.jsxs)(t.strong,{children:["asking for ",(0,n.jsx)(t.em,{children:"evidence"})]})," in one form or another. Familiar processes include presenting documents such as government issued photo ID, facial-recognition (send a selfie holding your passport). Back-office processes can include database checks such as verifying passport numbers, credit bureau checks, criminal record checks, and so on. The reason for all of this activity is to establish ",(0,n.jsx)(t.em,{children:"how they know"}),". More precisely, why they believe that their information about the asset holders is accurate."]}),"\n",(0,n.jsx)(t.p,{children:"A KYC service provider performs these activities on behalf of their client. At the risk of over-simplifying the range of options available, an asset owner engages a KYC service provider to perform a set of steps that attempt to verify the identities (and jurisdictions, and any other information that is pertinent) of the asset holders, and recipients, for the asset owner so that the asset originator will have accurate information, and so that Polymesh can automatically enforce a defined compliance policy."}),"\n",(0,n.jsxs)(t.p,{children:["As a simple example, consider that ACME identified an ",(0,n.jsx)(t.strong,{children:"embargo country"}),", Liechtenstein, where their security tokens are not to be sold. For this explanation, we are not concerned about why that is. The compliance team has a reason. In order to enforce this policy, ACME will need the country of residence of each asset holder. It follows that they need a way to establish that and it is probably indefensible to simply ask the users where they live. ACME could establish a KYC process that involves determining country of residence from certain documents, e.g. a passport. Having established such a policy, ACME could engage a KYC service provider with the task of collecting and verifying the passports - a specialist with the software and business processes to execute the plan efficiently."]}),"\n",(0,n.jsxs)(t.p,{children:["Suppose ACME chose EzKyc to perform this service. The agreement would likely specify how EzKyc will perform their duties. The ",(0,n.jsx)(t.em,{children:"result"})," of that process would be that EzKyc will ",(0,n.jsx)(t.em,{children:"sign"})," an ",(0,n.jsx)(t.em,{children:"attestation"})," along these lines (not as implemented):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"{\n    account: Alice\n    jurisdiction: United States of America\n    signed: EzKyc\n    signature: 0xFE1A...\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"Each time EzKyc signs such an attestation, they would be also be implicitly attesting that they followed the process described in the service agreement. This gives ACME knowledge of how this information was established."}),"\n",(0,n.jsxs)(t.p,{children:["Interestingly, this attestation is attached to Alice's Polymesh account. Alice can use it again in the future if, by chance, another asset originator will accept EzKyc's attestation. From Alice's perspective, ",(0,n.jsx)(t.strong,{children:"before she accepts a transfer of security tokens"}),", she must comply with the originator's KYC process, which means acquiring any missing attestations that ",(0,n.jsx)(t.em,{children:"she doesn't already have"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["From ACME's perspective, compliance is checked ",(0,n.jsx)(t.em,{children:"before assets are transferred"}),". There is no case in which a user who doesn't conform to the compliance policy at the time can possibly acquire the tokens. don't be alarmed, because it is not overly restrictive or destructive. Non-conforming transfers are not rejected. Instead, they simply remain in a pending state, until the recipient completes the necessary KYC process."]}),"\n",(0,n.jsx)(t.h2,{id:"future-outlook",children:"Future outlook"}),"\n",(0,n.jsx)(t.p,{children:"Standardising decentralised ID and attestations is an active area of global dialog and collaboration. At the time of writing, there are few widely-accepted universal ID or ID providers. We can envisage the emergence of such standards and imagine that users will appreciate completing one or a handful of KYC processes periodically so they can provide reliable information where and when it's needed, without the repetitiveness and security concerns that arise from the prevailing process, which is, in essence, starting from zero and addressing KYC for each and every important relationship."}),"\n",(0,n.jsx)(t.p,{children:"The Polymesh account-and-attestation design anticipates the eventual emergence of normalised, re-useable claims. The issuers of such re-useable attestations would be KYC service providers on the network. Acceptance would be a factor of asset owners that recognise a common set of attestations."}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"In summary, asset owners determine their compliance policy which helps determine their KYC requirements, then establish a process for establishing the facts about asset holders. The process can be executed by a KYC service provider, but it can also be done in-house. That is, the originator can act as its own KYC service provider. The output of the KYC Process is signed attestations that Polymesh uses to confirm harmony with the compliance policy. Non-compliant transfers are not permitted. Non-compliant recipients will see incoming transfers in a pending state until KYC requirements are satisfied."}),"\n",(0,n.jsx)(t.p,{children:"For the avoidance of doubt, in the case that a security token has no compliance rules defined (and therefore no KYC requirements), customer due diligence still applies."}),"\n",(0,n.jsx)(t.h2,{id:"becoming-a-kyc-service-provider-or-cdd-service-provider",children:"Becoming a KYC service provider or CDD service provider"}),"\n",(0,n.jsxs)(t.p,{children:["CDD providers are admitted to the network via the ",(0,n.jsx)(t.a,{href:"/docs/introduction/governance/",children:"governance"})," process. In summary, any organisation can become a CDD provider by achieving the support needed to carry a motion. In practice, this is expected to mean that a consensus forms around allowing the organisation to perform the service in the manner in which they propose to perform it. Such consensus would reflect a belief that it will strengthen the network overall."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Any"})," organisation can participate as a KYC service provider. The agreement between an asset owner and the KYC service provider they rely upon to provide the information is bi-lateral. An asset owner can appoint another identity as the KYC service provider at their own discretion."]}),"\n",(0,n.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/introduction/identity/",children:"Identity"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/quickstart/verification-with-cdd/",children:"Customer Due Diligence"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/introduction/governance/",children:"Governance"})}),"\n",(0,n.jsxs)(t.li,{children:["Primitives:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/polymesh-docs/primitives/identity/",children:"Identity"})}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var s=i(96540);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);