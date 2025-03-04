"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[18367],{11e3:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"core-concepts/identity/advanced/authorizations","title":"Authorizations","description":"A secure request-approval framework for managing permissions and delegations between identities and keys","source":"@site/docs/200-core-concepts/030-identity/040-advanced/030-authorizations.md","sourceDirName":"200-core-concepts/030-identity/040-advanced","slug":"/authorizations","permalink":"/polymesh-documentation-site/authorizations","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/200-core-concepts/030-identity/040-advanced/030-authorizations.md","tags":[{"inline":true,"label":"identity","permalink":"/polymesh-documentation-site/tags/identity"},{"inline":true,"label":"permissions","permalink":"/polymesh-documentation-site/tags/permissions"},{"inline":true,"label":"access control","permalink":"/polymesh-documentation-site/tags/access-control"},{"inline":true,"label":"authorizations","permalink":"/polymesh-documentation-site/tags/authorizations"}],"version":"current","sidebarPosition":30,"frontMatter":{"title":"Authorizations","description":"A secure request-approval framework for managing permissions and delegations between identities and keys","id":"authorizations","slug":"/authorizations","sidebar_label":"Authorizations","tags":["identity","permissions","access control","authorizations"]},"sidebar":"docs","previous":{"title":"Multisig Walkthrough","permalink":"/polymesh-documentation-site/identity/advanced/multisig/walkthrough"},"next":{"title":"Child Identities","permalink":"/polymesh-documentation-site/identity/advanced/child"}}');var s=n(74848),o=n(28453);const r={title:"Authorizations",description:"A secure request-approval framework for managing permissions and delegations between identities and keys",id:"authorizations",slug:"/authorizations",sidebar_label:"Authorizations",tags:["identity","permissions","access control","authorizations"]},a=void 0,d={},c=[{value:"Overview",id:"overview",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Common Use Cases",id:"common-use-cases",level:2},{value:"Authorization Types",id:"authorization-types",level:2},{value:"Identity Management",id:"identity-management",level:3},{value:"Asset Control",id:"asset-control",level:3},{value:"Operational Control",id:"operational-control",level:3},{value:"Managing Authorizations",id:"managing-authorizations",level:2},{value:"Creating Requests",id:"creating-requests",level:3},{value:"Processing Requests",id:"processing-requests",level:3},{value:"Fee Management",id:"fee-management",level:3},{value:"Monitoring Authorizations",id:"monitoring-authorizations",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(i.p,{children:"Authorizations in Polymesh provide a secure framework for managing permissions and access between identities and keys. They enable controlled delegation of permissions while maintaining security through explicit consent from all parties involved."}),"\n",(0,s.jsx)(i.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,s.jsx)(i.p,{children:"The authorization process follows a simple request-approval flow:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"An identity (the authorizer) creates an authorization request for a specific action"}),"\n",(0,s.jsx)(i.li,{children:"The target identity or key (the authorized) receives the pending authorization"}),"\n",(0,s.jsx)(i.li,{children:"The authorized party can view, accept, or reject the authorization"}),"\n",(0,s.jsx)(i.li,{children:"Upon acceptance, the authorized action is executed with proper permissions"}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"Authorization requests can optionally include an expiry time. If specified and not accepted within that timeframe, they become invalid and must be reissued."})}),"\n",(0,s.jsx)(i.h2,{id:"common-use-cases",children:"Common Use Cases"}),"\n",(0,s.jsx)(i.p,{children:"The authorizations framework on Polymesh facilitates various identity management and permission scenarios including:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Identity Key Management"}),": Adding secondary keys or rotating primary keys"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Asset Control"}),": Transferring ownership of assets or tickers between identities"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Custody Management"}),": Granting portfolio custody/control rights to other identities"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Agent Permissions"}),": Authorizing entities to act as agents for specific assets"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Fee Management"}),": Setting up subsidized account relationships"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"MultiSig Operations"}),": Adding signers to multisig arrangements"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"authorization-types",children:"Authorization Types"}),"\n",(0,s.jsx)(i.p,{children:"Polymesh supports several types of authorizations, each serving different permission management needs:"}),"\n",(0,s.jsx)(i.h3,{id:"identity-management",children:"Identity Management"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Join Identity"}),": Authorize a key to become a ",(0,s.jsx)(i.a,{href:"/identity/advanced/secondary-keys",children:"secondary key"})," with specified permissions"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Rotate Primary Key"}),": Allow changing of an identity's primary key"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Rotate Primary to Secondary"}),": Convert the current primary key into a secondary key during rotation"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"asset-control",children:"Asset Control"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Transfer Asset"}),": Authorize transfer of asset ownership between identities"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Transfer Ticker"}),": Allow transfer of ticker ownership or reservation rights"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Become Agent"}),": Grant permission to act as an ",(0,s.jsx)(i.a,{href:"/external-agents",children:"agent"})," for specific asset operations while defining specific actions the agent can perform"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"operational-control",children:"Operational Control"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Portfolio Custody"}),": Enable third part ",(0,s.jsx)(i.a,{href:"/portfolios/custody",children:"portfolio custody"})," management or control of specific portfolios while maintaining beneficial ownership under the original onchain identity"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Add MultiSig Signer"}),": Authorize addition of new signers to a ",(0,s.jsx)(i.a,{href:"/identity/advanced/multisig",children:"multisig"})," arrangement."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Add Relayer Paying Key"}),": Set up ",(0,s.jsx)(i.a,{href:"/accounts/subsidized",children:"subsidized account"})," relationships"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"managing-authorizations",children:"Managing Authorizations"}),"\n",(0,s.jsx)(i.h3,{id:"creating-requests",children:"Creating Requests"}),"\n",(0,s.jsxs)(i.p,{children:["Authorization requests can be created using ",(0,s.jsx)(i.code,{children:"identity::add_authorization"}),". Each request must specify:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The target identity or key"}),"\n",(0,s.jsx)(i.li,{children:"The type of authorization"}),"\n",(0,s.jsx)(i.li,{children:"Any required authorization data (e.g., permissions for secondary keys)"}),"\n",(0,s.jsx)(i.li,{children:"Optional expiry time"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["In some special cases, a dedicated method may be provided to create an authorization request. For example, ",(0,s.jsx)(i.code,{children:"multisig::add_multisig_signers_via_admin"})," allows a permissioned admin identity to act on behalf of the multisig to add a new signer."]}),"\n",(0,s.jsxs)(i.p,{children:["Some operations also support off-chain authorization signatures as an alternative to the request-approval flow. This includes adding ",(0,s.jsx)(i.a,{href:"/identity/advanced/secondary-keys/#2-off-chain-authorization",children:"secondary keys"})," and creating ",(0,s.jsx)(i.a,{href:"/identity/advanced/child#child-identity-creation-from-unlinked-keys",children:"child identities"}),". These methods typically require the target key to sign specific authorization data off-chain, enabling operations to complete in a single transaction."]}),"\n",(0,s.jsx)(i.p,{children:"Each new authorization request is assigned a unique authorization ID which is used to query details of the authorization request and accept or reject it."}),"\n",(0,s.jsx)(i.h3,{id:"processing-requests",children:"Processing Requests"}),"\n",(0,s.jsx)(i.p,{children:"Targets can manage authorization requests through:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Accepting"}),": Approve and execute the authorized action through an authorization-specific method by providing the authorization ID"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Rejecting"}),": Cancel pending authorization requests (can be done by either the authorizer or target) by calling ",(0,s.jsx)(i.code,{children:"identity::remove_authorization"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Review Pending Incoming Requests"}),": View pending authorizations targeting the identity or key using ",(0,s.jsx)(i.code,{children:"identity::Authorizations"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Review Pending Issued Requests"}),": Query past authorizations using ",(0,s.jsx)(i.code,{children:"identity::AuthorizationsGiven"})]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsx)(i.p,{children:"Authorization management is critical for identity security. Always verify authorization types and permissions before acceptance."})}),"\n",(0,s.jsx)(i.h3,{id:"fee-management",children:"Fee Management"}),"\n",(0,s.jsx)(i.p,{children:"For some authorization types, the accepting identity may not be able to hold POLYX and hence cannot pay the transaction fee to accept the authorization request. In these cases, the primary key of the identity that initiated the authorization request (the authorizer) pays the transaction fee when the authorization is accepted by the target."}),"\n",(0,s.jsx)(i.p,{children:"The following acceptance methods have their transaction fees paid by the authorizer's primary key:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"identity::join_identity_as_key"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"identity::rotate_primary_key_to_secondary"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"identity::accept_primary_key"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"multisig::accept_multisig_signer"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"relayer::accept_paying_key"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"For all other authorization acceptance methods, the transaction fee is paid by the accepting party's key."}),"\n",(0,s.jsxs)(i.p,{children:["When removing/rejecting an authorization request, the caller can optionally specify that the primary key of the requestor's identity pays the transaction fee by setting the ",(0,s.jsx)(i.code,{children:"auth_issuer_pays"})," parameter to ",(0,s.jsx)(i.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"monitoring-authorizations",children:"Monitoring Authorizations"}),"\n",(0,s.jsx)(i.p,{children:"Identities can monitor their authorizations through several methods:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Pending Incoming Requests"}),": View pending authorizations targeting the identity or key using ",(0,s.jsx)(i.code,{children:"identity::Authorizations"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Pending Issued Requests"}),": Query past authorizations using ",(0,s.jsx)(i.code,{children:"identity::AuthorizationsGiven"})]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"Authorization requests that have been consumed, rejected, expired, or revoked cannot be reused. A new authorization request must be created if needed."})})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);