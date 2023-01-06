"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[4080],{3905:(e,t,A)=>{A.d(t,{Zo:()=>f,kt:()=>u});var n=A(7294);function i(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function r(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?r(Object(A),!0).forEach((function(t){i(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function s(e,t){if(null==e)return{};var A,n,i=function(e,t){if(null==e)return{};var A,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||(i[A]=e[A]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(i[A]=e[A])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},f=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},v="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var A=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),v=l(A),c=i,u=v["".concat(o,".").concat(c)]||v[c]||d[c]||r;return A?n.createElement(u,a(a({ref:t},f),{},{components:A})):n.createElement(u,a({ref:t},f))}));function u(e,t){var A=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=A.length,a=new Array(r);a[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[v]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=A[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,A)}c.displayName="MDXCreateElement"},9315:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>v,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=A(7462),i=(A(7294),A(3905));const r={title:"Confidential Identity",description:"",subsite:"polymesh-docs"},a=void 0,s={unversionedId:"primitives/confidential-identity",id:"primitives/confidential-identity",title:"Confidential Identity",description:"",source:"@site/polymesh-docs/primitives/confidential-identity.mdx",sourceDirName:"primitives",slug:"/primitives/confidential-identity",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/confidential-identity",draft:!1,tags:[],version:"current",frontMatter:{title:"Confidential Identity",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"Compliance",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/compliance"},next:{title:"Corporate Actions",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/corporate-actions"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Polymath Unique Identity System",id:"polymath-unique-identity-system",level:2},{value:"Customer Due Diligence Claims",id:"customer-due-diligence-claims",level:2},{value:"Scope Claims",id:"scope-claims",level:2},{value:"No Linkage",id:"no-linkage",level:2},{value:"Partial Linkage",id:"partial-linkage",level:2},{value:"Full Linkage",id:"full-linkage",level:2}],f={toc:l};function v(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A real-world person or organisation (entity) can have multiple identities."),(0,i.kt)("p",null,"This means that a Polymesh user can retain privacy around their overall asset portfolio, by storing those assets across several identities that they own."),(0,i.kt)("p",null,"However, it is useful to be able to enforce a Sybil protection mechanism where a single entity must declare that one or more of their identities are linked, in order to take some action on the network, such as invest in an asset."),(0,i.kt)("p",null,"Polymesh uses a combination of cryptographic techniques to enforce this property - allowing users to own several unlinkable identities, whilst also allowing them to provably link them with respect to a specific scope (e.g. investing in a particular asset)."),(0,i.kt)("h2",{id:"polymath-unique-identity-system"},"Polymath Unique Identity System"),(0,i.kt)("p",null,"The Polymath Unique Identity System (PUIS) is responsible for issuing every entity a unique identifier (entity ID). Regardless of which CDD service provider a user or organisation on-boards with, the CDD service provider will always interact with the PUIS to claim a new entity ID if the user is new to the network, or if they are an existing user verify their existing entity ID."),(0,i.kt)("h2",{id:"customer-due-diligence-claims"},"Customer Due Diligence Claims"),(0,i.kt)("p",null,"The entity ID is not directly written to Polymesh as part of the CDD claim as this would allow a public observer to always be able to link together accounts owned by the same entity (and hence having the same entity ID)."),(0,i.kt)("p",null,"Instead we take a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Commitment_scheme"},"Pedersen hash")," of this entity ID, plus some randomising factors, and add this commitment to the users CDD claim. This means that two identities, whilst being linked via a commitment to the same entity ID, cannot be linked together without knowledge of the entity ID."),(0,i.kt)("h2",{id:"scope-claims"},"Scope Claims"),(0,i.kt)("p",null,"Whilst this Pedersen commitment does not reveal linkage between a users identities, it means that the user can self-declare that two identities are linked. This aids compliance when trading regulated assets, as well as being a general purpose Sybil protection measure that layer 2 protocols built on top of Polymesh can leverage."),(0,i.kt)("p",null,"For example, if an asset issuer needs to track their total number of investors for compliance reasons, they can enforce that all of their investors declare whether or not they are using multiple identities to invest in their asset."),(0,i.kt)("p",null,"Declaring linkage is done by a user adding a self-issued Scope Claim to their identity. This claim is generated using their private knowledge of their entity ID, as well as the publiclly known commitment to this entity ID stored on-chain. This novel technique allows a user to partially link together their identities, and in particular only link together those identities that are needed to fulfil the asset issuers requirements (i.e. those identities that have invested in a particular asset)."),(0,i.kt)("p",null,"For example, suppose that Alice has 5 identities, ",(0,i.kt)("inlineCode",{parentName:"p"},"0xalice_1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"0xalice_2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"0xalice_3"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"0xalice_4"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"0xalice_5")," and wants to invest in two assets, ACME and FOO."),(0,i.kt)("p",null,"The issuers of both ACME and FOO are enforcing that their investors declare linkage within the scope of their asset tickers."),(0,i.kt)("h2",{id:"no-linkage"},"No Linkage"),(0,i.kt)("p",null,"Alice can choose to only use a single identity to invest in each of ACME and FOO. This means that none of her identities are publically linked."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"No Linkage",src:A(9373).Z,width:"1260",height:"220"})),(0,i.kt)("h2",{id:"partial-linkage"},"Partial Linkage"),(0,i.kt)("p",null,"If Alice wants to use two separate identities to invest in each of ACME and FOO, then those identities will be publically linked (so that the ACME and FOO asset issuers can accurately track their total number of investors at the entity granularity)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Partial Linkage",src:A(8227).Z,width:"1255",height:"471"})),(0,i.kt)("h2",{id:"full-linkage"},"Full Linkage"),(0,i.kt)("p",null,"If Alice were to use one of her identities to invest in both ACME and FOO, then that would link together all of her other identities."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Full Linkage",src:A(3858).Z,width:"1220",height:"686"})))}v.isMDXComponent=!0},3858:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/full_linkage-6d74cb53d1ad48db532d88cffe832445.png"},9373:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"},8227:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/partial_linkage-db591040bd0468b75c492d18612a7aec.png"}}]);