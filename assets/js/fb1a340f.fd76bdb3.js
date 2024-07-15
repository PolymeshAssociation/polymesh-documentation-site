"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[21714],{88228:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=i(74848),s=i(28453);const o={sidebar_position:3,title:"Glossary",description:"Polymesh Glossary",slug:"/resources/glossary/"},r=void 0,a={id:"resources/glossary",title:"Glossary",description:"Polymesh Glossary",source:"@site/docs/08-resources/glossary.mdx",sourceDirName:"08-resources",slug:"/resources/glossary/",permalink:"/polymesh-documentation-site/docs/resources/glossary/",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/08-resources/glossary.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Glossary",description:"Polymesh Glossary",slug:"/resources/glossary/"},sidebar:"defaultSidebar",previous:{title:"Polymesh Webcast",permalink:"/polymesh-documentation-site/docs/resources/polymesh-webcast"},next:{title:"Overview",permalink:"/polymesh-documentation-site/docs/community/"}},l={},c=[{value:"Claim / Attestation",id:"claim--attestation",level:3},{value:"Transaction",id:"transaction",level:3},{value:"Customer Due Diligence (CDD)",id:"customer-due-diligence-cdd",level:3},{value:"Entity",id:"entity",level:3},{value:"Identity",id:"identity",level:3},{value:"Portfolio",id:"portfolio",level:3},{value:"Key",id:"key",level:3},{value:"Venue",id:"venue",level:3},{value:"Instruction",id:"instruction",level:3},{value:"Leg",id:"leg",level:3},{value:"Counterparty",id:"counterparty",level:3}];function d(e){const t={h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"claim--attestation",children:"Claim / Attestation"}),"\n",(0,n.jsx)(t.p,{children:"These terms are used interchangably. The Polymesh core code refers to claims, whilst the SDK and UIs refer to attestations. In both cases they represent an attestation from one identity about another identity. These attestations or claims are attached to an identity and allow asset issuers to manage compliance on their assets."}),"\n",(0,n.jsx)(t.h3,{id:"transaction",children:"Transaction"}),"\n",(0,n.jsx)(t.p,{children:"A transaction, also called extrinsic, is a user initiated on-chain action. All transactions carry a POLYX network fee and possible other costs. Transactions can fail if there are insufficient funds to pay for it, is not associated with a CDD'ed identity, or if it is deemed invalid by the networks logic."}),"\n",(0,n.jsx)(t.h3,{id:"customer-due-diligence-cdd",children:"Customer Due Diligence (CDD)"}),"\n",(0,n.jsx)(t.p,{children:"Each Polymesh user have a CustomerDueDiligence claim associated with one of their identities to transact on the network. This claim is provided by a set of permissioned CDD service providers and is a light weight due diligence process designed to ensure all network participants can safely transaction with each other."}),"\n",(0,n.jsx)(t.h3,{id:"entity",children:"Entity"}),"\n",(0,n.jsx)(t.p,{children:"An entity is a unique individual or organisation such as investors, asset issuers and service providers. An entity is represented on-chain by one or more identities"}),"\n",(0,n.jsx)(t.h3,{id:"identity",children:"Identity"}),"\n",(0,n.jsx)(t.p,{children:"A collection of claims verifying an entity is who they say they are."}),"\n",(0,n.jsx)(t.p,{children:"An entity can have multiple on chain identities."}),"\n",(0,n.jsx)(t.p,{children:"Each identity needs a name to reference it, which in our case is a Decentralised Identifier (DID)."}),"\n",(0,n.jsx)(t.h3,{id:"portfolio",children:"Portfolio"}),"\n",(0,n.jsx)(t.p,{children:"A digital wallet tied to an entity through an identity used to hold a collection of tokenised assets."}),"\n",(0,n.jsx)(t.p,{children:"A single identity can hold multiple portfolios. A portfolio is owned by exactly one identity. Control of a portfolio can be passed to a custodian."}),"\n",(0,n.jsx)(t.h3,{id:"key",children:"Key"}),"\n",(0,n.jsx)(t.p,{children:"An authentication method for an identity, typically a public / private key pair, or multi-sig."}),"\n",(0,n.jsx)(t.p,{children:"Every identity has exactly one primary key, and can optionally have additional secondary keys."}),"\n",(0,n.jsx)(t.p,{children:"A key can only be associated with a single identity concurrently."}),"\n",(0,n.jsx)(t.p,{children:"Keys have permissioned access to their identity, at the portfolio, asset and action granularity."}),"\n",(0,n.jsx)(t.p,{children:"POLYX balances are held at the key level - all other assets are held at the identity level."}),"\n",(0,n.jsx)(t.h3,{id:"venue",children:"Venue"}),"\n",(0,n.jsx)(t.p,{children:"A venue is an organised trading facility (OTF), regulated markets (RMs), or multilateral trading facilities (MTFs) that receives a logical set of instructions from counter-parties for the purpose of matching, to convert separate orders into an executed trade"}),"\n",(0,n.jsx)(t.p,{children:"A venue is a logical groups of related instructions - one Venue can contain several Instructions"}),"\n",(0,n.jsx)(t.p,{children:"Venues define the details of where the pre-trade activities, if any, took place."}),"\n",(0,n.jsx)(t.p,{children:"They also define which identities are allowed to sign receipts for off-chain transfers of assets."}),"\n",(0,n.jsx)(t.h3,{id:"instruction",children:"Instruction"}),"\n",(0,n.jsx)(t.p,{children:"An instruction is an atomic group of asset exchanges represented by legs"}),"\n",(0,n.jsx)(t.p,{children:"It records all of the counterparties associated with the instruction, and whether or not they have authorised the instruction."}),"\n",(0,n.jsx)(t.p,{children:"It also records whether the instruction has been executed, rejected or failed."}),"\n",(0,n.jsx)(t.p,{children:"An instruction is always settled atomically - i.e. all legs in the Instruction settle, or none of them do."}),"\n",(0,n.jsx)(t.p,{children:"Each instruction specifies its expiry and valid_from details - authorisations and settlement can only happen during this time window."}),"\n",(0,n.jsx)(t.h3,{id:"leg",children:"Leg"}),"\n",(0,n.jsx)(t.p,{children:"Represents a transfer of assets or stable coins from one counterparty to another"}),"\n",(0,n.jsx)(t.h3,{id:"counterparty",children:"Counterparty"}),"\n",(0,n.jsx)(t.p,{children:"The persons or institutions engaging in a settlement instruction. That is, the opposing entities involved in the execution of a securities contract."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(96540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);