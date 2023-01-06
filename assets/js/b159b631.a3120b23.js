"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[5970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,y=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(y,r(r({ref:t},d),{},{components:n})):a.createElement(y,r({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4,title:"KYC with the SDK",description:"Provide compliance with the Polymesh SDK",slug:"/kyc/kyc-sdk"},r=void 0,s={unversionedId:"kyc/kyc-sdk",id:"kyc/kyc-sdk",title:"KYC with the SDK",description:"Provide compliance with the Polymesh SDK",source:"@site/docs/07-kyc/kyc-sdk.mdx",sourceDirName:"07-kyc",slug:"/kyc/kyc-sdk",permalink:"/polymesh-documentation-site/docs/kyc/kyc-sdk",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/07-kyc/kyc-sdk.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"KYC with the SDK",description:"Provide compliance with the Polymesh SDK",slug:"/kyc/kyc-sdk"},sidebar:"defaultSidebar",previous:{title:"Dashboard",permalink:"/polymesh-documentation-site/docs/kyc/kyc-dashboard"},next:{title:"KYC Example App",permalink:"/polymesh-documentation-site/docs/kyc/example-app"}},l={},c=[{value:"Add a KYC attestation",id:"add-a-kyc-attestation",level:2},{value:"Change the jurisdiction claim",id:"change-the-jurisdiction-claim",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Links",id:"links",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},p=d("Tabs"),u=d("TabItem"),m={toc:c};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using the Polymesh Dashboard for KYC is all well and good but it doesn't scale well. A KYC service provider may want to scale their business by integrating with existing internal systems."),(0,i.kt)("p",null,"Consider a queue of KYC requests, user-facing onboarding systems and other methods of gathering information followed by evaluation and a decision. The decision itself can be optionally committed to Polymesh in the form of an ",(0,i.kt)("strong",{parentName:"p"},"attestation"),"."),(0,i.kt)("p",null,"A level-0 integration of an existing KYC system with Polymesh would be to keep the Polymesh Dashboard open and have an operator copy paste addresses from one system to another and press buttons repeatedly. Beside the risk of error, it lets operators have access to the KYC company's private keys, which could potentially be used for other purposes."),(0,i.kt)("p",null,"Remember when Alice the CEO set up the conditions for receiving ACME shares:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The future holder must have a KYC attestation by the appointed KYC provider;"),(0,i.kt)("li",{parentName:"ul"},"The claimed jurisdiction in this attestation must not be of Liechtenstein.")),(0,i.kt)("p",null,"For some exercises, we simply disabled compliance rules for simplicity's sake. What if compliance rules are in effect? How can Alice prove that she is not in Liechtenstein?"),(0,i.kt)("h2",{id:"add-a-kyc-attestation"},"Add a KYC attestation"),(0,i.kt)("p",null,"In the settlement with SDK module, we briefly saw how you would add an attestation that would allow Bob to receive ACME shares. Let's repeat it here."),(0,i.kt)(p,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(u,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const nextYear: Date = new Date();\nnextYear.setFullYear(nextYear.getFullYear() + 1);\nconst claimQueue: TransactionQueue<void> = await apiEzKyc.claims.addClaims({\n  claims: [\n    {\n      claim: {\n        type: ClaimType.Jurisdiction,\n        code: CountryCode.Gb,\n        scope: {\n          type: ScopeType.Ticker,\n          value: 'ACME',\n        },\n      },\n      expiry: nextYear,\n      target: bobDid,\n    },\n  ],\n});\nawait claimQueue.run();\n"))),(0,i.kt)(u,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const nextYear = new Date();\nnextYear.setFullYear(nextYear.getFullYear() + 1);\nconst claimQueue = await apiEzKyc.claims.addClaims({\n  claims: [\n    {\n      claim: {\n        type: 'Jurisdiction',\n        code: 'Gb',\n        scope: {\n          type: 'Ticker',\n          value: 'ACME',\n        },\n      },\n      expiry: nextYear,\n      target: bobDid,\n    },\n  ],\n});\nawait claimQueue.run();\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Any identity can add an attestation to another identity.")," This is very different from CDD providers, which are permissioned through network governance. This means that it is potentially open to abuse, and ACME's compliance cannot rely on ",(0,i.kt)("em",{parentName:"p"},"any")," jurisdictional attestation. This is why the compliance policy specifies the identity of the KYC service provider. The KYC service provider is the signer ACME trusts for compliance purposes."),(0,i.kt)("h2",{id:"change-the-jurisdiction-claim"},"Change the jurisdiction claim"),(0,i.kt)("p",null,"What happens if Bob moves from the United Kingdom to France? His jurisdiction claim ought to change alongside."),(0,i.kt)("p",null,"However you cannot just modify an attestation. You would have to revoke it. And since there is no identifier associated to the attestation added to Bob earlier, to revoke it, you need to call the revoke function with the same parameters you used to add the attestation, minus the ",(0,i.kt)("inlineCode",{parentName:"p"},"expiry"),". Other than that, you would have to issue a brand new attestation too. Noting that if you revoked first Bob may be prevented from acquiring ACME shares in the interim, it is better to add the new attestation, first, before revoking the old one."),(0,i.kt)(p,{groupId:"code-language",mdxType:"Tabs"},(0,i.kt)(u,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const nextYear: Date = new Date();\nnextYear.setFullYear(nextYear.getFullYear() + 1);\nconst addClaimQueue: TransactionQueue<void> = await apiEzKyc.claims.addClaims({\n  claims: [\n    {\n      claim: {\n        type: ClaimType.Jurisdiction,\n        code: CountryCode.Fr,\n        scope: {\n          type: ScopeType.Ticker,\n          value: 'ACME',\n        },\n      },\n      expiry: nextYear,\n      target: bobDid,\n    },\n  ],\n});\nawait addClaimQueue.run();\nconst revokeClaimQueue: TransactionQueue<void> =\n  await apiEzKyc.claims.revokeClaims({\n    claims: [\n      {\n        claim: {\n          type: ClaimType.Jurisdiction,\n          code: CountryCode.Gb,\n          scope: {\n            type: ScopeType.Ticker,\n            value: 'ACME',\n          },\n        },\n        target: bobDid,\n      },\n    ],\n  });\nawait revokeClaimQueue.run();\n"))),(0,i.kt)(u,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const nextYear = new Date();\nnextYear.setFullYear(nextYear.getFullYear() + 1);\nconst addClaimQueue = await apiEzKyc.claims.addClaims({\n  claims: [\n    {\n      claim: {\n        type: 'Jurisdiction',\n        code: 'Fr',\n        scope: {\n          type: 'Ticker',\n          value: 'ACME',\n        },\n      },\n      expiry: nextYear,\n      target: bobDid,\n    },\n  ],\n});\nawait addClaimQueue.run();\nconst revokeClaimQueue = await apiEzKyc.claims.revokeClaims({\n  claims: [\n    {\n      claim: {\n        type: 'Jurisdiction',\n        code: 'Gb',\n        scope: {\n          type: 'Ticker',\n          value: 'ACME',\n        },\n      },\n      target: bobDid,\n    },\n  ],\n});\nawait revokeClaimQueue.run();\n")))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"KYC service providers can deliver KYC services on the Polymesh network with minimal disruption to their existing business processes and systems by integrating a handful of SDK methods at natural stages of the service delivery process."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SDK: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PolymeshAssociation/polymesh-sdk/wiki"},"https://github.com/PolymeshAssociation/polymesh-sdk/wiki"))))}y.isMDXComponent=!0}}]);