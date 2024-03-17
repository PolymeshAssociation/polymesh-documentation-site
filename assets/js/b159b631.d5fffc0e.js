"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[71366],{8794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(74848),a=t(28453);const s={sidebar_position:4,title:"KYC with the SDK",description:"Provide compliance with the Polymesh SDK",slug:"/kyc/kyc-sdk/"},o=void 0,r={id:"kyc/kyc-sdk",title:"KYC with the SDK",description:"Provide compliance with the Polymesh SDK",source:"@site/docs/07-kyc/kyc-sdk.mdx",sourceDirName:"07-kyc",slug:"/kyc/kyc-sdk/",permalink:"/polymesh-documentation-site/docs/kyc/kyc-sdk/",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/07-kyc/kyc-sdk.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"KYC with the SDK",description:"Provide compliance with the Polymesh SDK",slug:"/kyc/kyc-sdk/"},sidebar:"defaultSidebar",previous:{title:"Dashboard",permalink:"/polymesh-documentation-site/docs/kyc/kyc-dashboard/"},next:{title:"CDD with the SDK",permalink:"/polymesh-documentation-site/docs/kyc/cdd-sdk/"}},c={},l=[{value:"Add a KYC attestation",id:"add-a-kyc-attestation",level:2},{value:"Change the jurisdiction claim",id:"change-the-jurisdiction-claim",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Links",id:"links",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{TabItem:t,Tabs:s}=n;return t||u("TabItem",!0),s||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Using the Polymesh Dashboard for KYC is all well and good but it doesn't scale well. A KYC service provider may want to scale their business by integrating with existing internal systems."}),"\n",(0,i.jsxs)(n.p,{children:["Consider a queue of KYC requests, user-facing onboarding systems and other methods of gathering information followed by evaluation and a decision. The decision itself can be optionally committed to Polymesh in the form of an ",(0,i.jsx)(n.strong,{children:"attestation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"A level-0 integration of an existing KYC system with Polymesh would be to keep the Polymesh Dashboard open and have an operator copy paste addresses from one system to another and press buttons repeatedly. Beside the risk of error, it lets operators have access to the KYC company's private keys, which could potentially be used for other purposes."}),"\n",(0,i.jsx)(n.p,{children:"Remember when Alice the CEO set up the conditions for receiving ACME shares:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The future holder must have a KYC attestation by the appointed KYC provider;"}),"\n",(0,i.jsx)(n.li,{children:"The claimed jurisdiction in this attestation must not be of Liechtenstein."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For some exercises, we simply disabled compliance rules for simplicity's sake. What if compliance rules are in effect? How can Alice prove that she is not in Liechtenstein?"}),"\n",(0,i.jsx)(n.h2,{id:"add-a-kyc-attestation",children:"Add a KYC attestation"}),"\n",(0,i.jsx)(n.p,{children:"In the settlement with SDK module, we briefly saw how you would add an attestation that would allow Bob to receive ACME shares. Let's repeat it here."}),"\n",(0,i.jsxs)(s,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const nextYear: Date = new Date();\nnextYear.setFullYear(nextYear.getFullYear() + 1);\nconst claimQueue: TransactionQueue<void> = await apiEzKyc.claims.addClaims({\n  claims: [\n    {\n      claim: {\n        type: ClaimType.Jurisdiction,\n        code: CountryCode.Gb,\n        scope: {\n          type: ScopeType.Ticker,\n          value: 'ACME',\n        },\n      },\n      expiry: nextYear,\n      target: bobDid,\n    },\n  ],\n});\nawait claimQueue.run();\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const nextYear = new Date();\nnextYear.setFullYear(nextYear.getFullYear() + 1);\nconst claimQueue = await apiEzKyc.claims.addClaims({\n  claims: [\n    {\n      claim: {\n        type: 'Jurisdiction',\n        code: 'Gb',\n        scope: {\n          type: 'Ticker',\n          value: 'ACME',\n        },\n      },\n      expiry: nextYear,\n      target: bobDid,\n    },\n  ],\n});\nawait claimQueue.run();\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Any identity can add an attestation to another identity."})," This is very different from CDD providers, which are permissioned through network governance. This means that it is potentially open to abuse, and ACME's compliance cannot rely on ",(0,i.jsx)(n.em,{children:"any"})," jurisdictional attestation. This is why the compliance policy specifies the identity of the KYC service provider. The KYC service provider is the signer ACME trusts for compliance purposes."]}),"\n",(0,i.jsx)(n.h2,{id:"change-the-jurisdiction-claim",children:"Change the jurisdiction claim"}),"\n",(0,i.jsx)(n.p,{children:"What happens if Bob moves from the United Kingdom to France? His jurisdiction claim ought to change alongside."}),"\n",(0,i.jsxs)(n.p,{children:["However you cannot just modify an attestation. You would have to revoke it. And since there is no identifier associated to the attestation added to Bob earlier, to revoke it, you need to call the revoke function with the same parameters you used to add the attestation, minus the ",(0,i.jsx)(n.code,{children:"expiry"}),". Other than that, you would have to issue a brand new attestation too. Noting that if you revoked first Bob may be prevented from acquiring ACME shares in the interim, it is better to add the new attestation, first, before revoking the old one."]}),"\n",(0,i.jsxs)(s,{groupId:"code-language",children:[(0,i.jsx)(t,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const nextYear: Date = new Date();\nnextYear.setFullYear(nextYear.getFullYear() + 1);\nconst addClaimQueue: TransactionQueue<void> = await apiEzKyc.claims.addClaims({\n  claims: [\n    {\n      claim: {\n        type: ClaimType.Jurisdiction,\n        code: CountryCode.Fr,\n        scope: {\n          type: ScopeType.Ticker,\n          value: 'ACME',\n        },\n      },\n      expiry: nextYear,\n      target: bobDid,\n    },\n  ],\n});\nawait addClaimQueue.run();\nconst revokeClaimQueue: TransactionQueue<void> =\n  await apiEzKyc.claims.revokeClaims({\n    claims: [\n      {\n        claim: {\n          type: ClaimType.Jurisdiction,\n          code: CountryCode.Gb,\n          scope: {\n            type: ScopeType.Ticker,\n            value: 'ACME',\n          },\n        },\n        target: bobDid,\n      },\n    ],\n  });\nawait revokeClaimQueue.run();\n"})})}),(0,i.jsx)(t,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const nextYear = new Date();\nnextYear.setFullYear(nextYear.getFullYear() + 1);\nconst addClaimQueue = await apiEzKyc.claims.addClaims({\n  claims: [\n    {\n      claim: {\n        type: 'Jurisdiction',\n        code: 'Fr',\n        scope: {\n          type: 'Ticker',\n          value: 'ACME',\n        },\n      },\n      expiry: nextYear,\n      target: bobDid,\n    },\n  ],\n});\nawait addClaimQueue.run();\nconst revokeClaimQueue = await apiEzKyc.claims.revokeClaims({\n  claims: [\n    {\n      claim: {\n        type: 'Jurisdiction',\n        code: 'Gb',\n        scope: {\n          type: 'Ticker',\n          value: 'ACME',\n        },\n      },\n      target: bobDid,\n    },\n  ],\n});\nawait revokeClaimQueue.run();\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"KYC service providers can deliver KYC services on the Polymesh network with minimal disruption to their existing business processes and systems by integrating a handful of SDK methods at natural stages of the service delivery process."}),"\n",(0,i.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/sdk-docs/",children:"SDK documents"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);