"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[91713],{5608:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"classes/API/Entities/AuthorizationRequest/AuthorizationRequest","title":"Class: AuthorizationRequest","description":"api/entities/AuthorizationRequest.AuthorizationRequest","source":"@site/sdk-docs_versioned_docs/version-25.1.x/classes/API/Entities/AuthorizationRequest/AuthorizationRequest.md","sourceDirName":"classes/API/Entities/AuthorizationRequest","slug":"/classes/API/Entities/AuthorizationRequest/","permalink":"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/AuthorizationRequest/","draft":false,"unlisted":false,"tags":[],"version":"25.1.x","frontMatter":{"id":"AuthorizationRequest","title":"Class: AuthorizationRequest","sidebar_label":"AuthorizationRequest"},"sidebar":"defaultSidebar","previous":{"title":"NftCollection","permalink":"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Asset/NonFungible/NftCollection/"},"next":{"title":"Checkpoint","permalink":"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Checkpoint/"}}');var n=s(74848),d=s(28453);const r={id:"AuthorizationRequest",title:"Class: AuthorizationRequest",sidebar_label:"AuthorizationRequest"},l=void 0,h={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"authId",id:"authid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"issuer",id:"issuer",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"uuid",id:"uuid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods",level:2},{value:"accept",id:"accept",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"exists",id:"exists",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"isEqual",id:"isequal",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"isExpired",id:"isexpired",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"remove",id:"remove",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"toHuman",id:"tohuman",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"generateUuid",id:"generateuuid",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"unserialize",id:"unserialize",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-13",level:4}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Entities/AuthorizationRequest/",children:"api/entities/AuthorizationRequest"}),".AuthorizationRequest"]}),"\n",(0,n.jsx)(i.p,{children:"Represents a request made by an Identity to another Identity (or Account) for some sort of authorization. This has multiple uses. For example, if Alice\nwants to transfer ownership of one of her Assets to Bob, this method emits an authorization request for Bob,\nwho then has to accept it in order to complete the ownership transfer"}),"\n",(0,n.jsx)(i.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/",children:(0,n.jsx)(i.code,{children:"Entity"})}),"<",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Entities/AuthorizationRequest/UniqueIdentifiers/",children:(0,n.jsx)(i.code,{children:"UniqueIdentifiers"})}),", ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Entities/AuthorizationRequest/HumanReadable/",children:(0,n.jsx)(i.code,{children:"HumanReadable"})}),">"]}),"\n",(0,n.jsxs)(i.p,{children:["\u21b3 ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:"AuthorizationRequest"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(i.h3,{id:"authid",children:"authId"}),"\n",(0,n.jsxs)(i.p,{children:["\u2022 ",(0,n.jsx)(i.strong,{children:"authId"}),": ",(0,n.jsx)(i.code,{children:"BigNumber"})]}),"\n",(0,n.jsx)(i.p,{children:"internal identifier for the Request (used to accept/reject/cancel)"}),"\n",(0,n.jsx)(i.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/AuthorizationRequest.ts#L100",children:"api/entities/AuthorizationRequest.ts:100"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"data",children:"data"}),"\n",(0,n.jsxs)(i.p,{children:["\u2022 ",(0,n.jsx)(i.strong,{children:"data"}),": ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Entities/Types/#authorization",children:(0,n.jsx)(i.code,{children:"Authorization"})})]}),"\n",(0,n.jsx)(i.p,{children:"Authorization Request data corresponding to type of Authorization"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Type"}),(0,n.jsx)(i.th,{children:"Data"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Add Relayer Paying Key"}),(0,n.jsx)(i.td,{children:"Beneficiary, Relayer, Allowance"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Become Agent"}),(0,n.jsx)(i.td,{children:"Permission Group"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Attest Primary Key Rotation"}),(0,n.jsx)(i.td,{children:"DID"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Rotate Primary Key"}),(0,n.jsx)(i.td,{children:"N/A"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Rotate Primary Key to Secondary"}),(0,n.jsx)(i.td,{children:"Permissions"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Transfer Ticker"}),(0,n.jsx)(i.td,{children:"Ticker"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Add MultiSig Signer"}),(0,n.jsx)(i.td,{children:"Account"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Transfer Asset Ownership"}),(0,n.jsx)(i.td,{children:"Ticker"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Join Identity"}),(0,n.jsx)(i.td,{children:"Permissions"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Portfolio Custody"}),(0,n.jsx)(i.td,{children:"Portfolio"})]})]})]}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/AuthorizationRequest.ts#L89",children:"api/entities/AuthorizationRequest.ts:89"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"expiry",children:"expiry"}),"\n",(0,n.jsxs)(i.p,{children:["\u2022 ",(0,n.jsx)(i.strong,{children:"expiry"}),": ",(0,n.jsx)(i.code,{children:"null"})," | ",(0,n.jsx)(i.code,{children:"Date"})]}),"\n",(0,n.jsx)(i.p,{children:"date at which the Authorization Request expires and can no longer be accepted.\nAt this point, a new Authorization Request must be emitted. Null if the Request never expires"}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/AuthorizationRequest.ts#L95",children:"api/entities/AuthorizationRequest.ts:95"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"issuer",children:"issuer"}),"\n",(0,n.jsxs)(i.p,{children:["\u2022 ",(0,n.jsx)(i.strong,{children:"issuer"}),": ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Identity/",children:(0,n.jsx)(i.code,{children:"Identity"})})]}),"\n",(0,n.jsx)(i.p,{children:"Identity that emitted the request"}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/AuthorizationRequest.ts#L71",children:"api/entities/AuthorizationRequest.ts:71"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"target",children:"target"}),"\n",(0,n.jsxs)(i.p,{children:["\u2022 ",(0,n.jsx)(i.strong,{children:"target"}),": ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Entities/Types/#signer",children:(0,n.jsx)(i.code,{children:"Signer"})})]}),"\n",(0,n.jsx)(i.p,{children:"Identity or Account to which the request was emitted"}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/AuthorizationRequest.ts#L66",children:"api/entities/AuthorizationRequest.ts:66"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"uuid",children:"uuid"}),"\n",(0,n.jsxs)(i.p,{children:["\u2022 ",(0,n.jsx)(i.strong,{children:"uuid"}),": ",(0,n.jsx)(i.code,{children:"string"})]}),"\n",(0,n.jsx)(i.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/#uuid",children:"uuid"})]}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Entity.ts#L46",children:"api/entities/Entity.ts:46"})}),"\n",(0,n.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(i.h3,{id:"accept",children:"accept"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.strong,{children:"accept"}),"(",(0,n.jsx)(i.code,{children:"opts?"}),"): ",(0,n.jsx)(i.code,{children:"Promise"}),"<",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(i.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(i.code,{children:"void"}),", ",(0,n.jsx)(i.code,{children:"void"}),">>"]}),"\n",(0,n.jsx)(i.p,{children:"Accept the Authorization Request. You must be the target of the Request to be able to accept it"}),"\n",(0,n.jsx)(i.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"opts?"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,n.jsx)(i.code,{children:"ProcedureOpts"})})})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Promise"}),"<",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(i.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(i.code,{children:"void"}),", ",(0,n.jsx)(i.code,{children:"void"}),">>"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:"Note"})})}),"\n",(0,n.jsxs)(i.p,{children:["this method is of type ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:"NoArgsProcedureMethod"}),", which means you can call ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/NoArgsProcedureMethod/#checkauthorization",children:"accept.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/AuthorizationRequest.ts#L193",children:"api/entities/AuthorizationRequest.ts:193"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"exists",children:"exists"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.strong,{children:"exists"}),"(): ",(0,n.jsx)(i.code,{children:"Promise"}),"<",(0,n.jsx)(i.code,{children:"boolean"}),">"]}),"\n",(0,n.jsx)(i.p,{children:"Determine whether this Authorization Request exists on chain"}),"\n",(0,n.jsx)(i.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Promise"}),"<",(0,n.jsx)(i.code,{children:"boolean"}),">"]}),"\n",(0,n.jsx)(i.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/#exists",children:"exists"})]}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/AuthorizationRequest.ts#L222",children:"api/entities/AuthorizationRequest.ts:222"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"isequal",children:"isEqual"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.strong,{children:"isEqual"}),"(",(0,n.jsx)(i.code,{children:"entity"}),"): ",(0,n.jsx)(i.code,{children:"boolean"})]}),"\n",(0,n.jsx)(i.p,{children:"Determine whether this Entity is the same as another one"}),"\n",(0,n.jsx)(i.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"entity"})}),(0,n.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/",children:(0,n.jsx)(i.code,{children:"Entity"})}),"<",(0,n.jsx)(i.code,{children:"unknown"}),", ",(0,n.jsx)(i.code,{children:"unknown"}),">"]})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"boolean"})}),"\n",(0,n.jsx)(i.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/#isequal",children:"isEqual"})]}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Entity.ts#L61",children:"api/entities/Entity.ts:61"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"isexpired",children:"isExpired"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.strong,{children:"isExpired"}),"(): ",(0,n.jsx)(i.code,{children:"boolean"})]}),"\n",(0,n.jsx)(i.p,{children:"Returns whether the Authorization Request has expired"}),"\n",(0,n.jsx)(i.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"boolean"})}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/AuthorizationRequest.ts#L213",children:"api/entities/AuthorizationRequest.ts:213"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"remove",children:"remove"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.strong,{children:"remove"}),"(",(0,n.jsx)(i.code,{children:"opts?"}),"): ",(0,n.jsx)(i.code,{children:"Promise"}),"<",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(i.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(i.code,{children:"void"}),", ",(0,n.jsx)(i.code,{children:"void"}),">>"]}),"\n",(0,n.jsx)(i.p,{children:"Remove the Authorization Request"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"If you are the Request issuer, this will cancel the Authorization"}),"\n",(0,n.jsx)(i.li,{children:"If you are the Request target, this will reject the Authorization"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"opts?"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/ProcedureOpts/",children:(0,n.jsx)(i.code,{children:"ProcedureOpts"})})})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Promise"}),"<",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/modules/API/Procedures/Types/#genericpolymeshtransaction",children:(0,n.jsx)(i.code,{children:"GenericPolymeshTransaction"})}),"<",(0,n.jsx)(i.code,{children:"void"}),", ",(0,n.jsx)(i.code,{children:"void"}),">>"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.code,{children:"Note"})})}),"\n",(0,n.jsxs)(i.p,{children:["this method is of type ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/NoArgsProcedureMethod/",children:"NoArgsProcedureMethod"}),", which means you can call ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Procedures/Types/NoArgsProcedureMethod/#checkauthorization",children:"remove.checkAuthorization"}),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"]}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/AuthorizationRequest.ts#L206",children:"api/entities/AuthorizationRequest.ts:206"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"tohuman",children:"toHuman"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.strong,{children:"toHuman"}),"(): ",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Entities/AuthorizationRequest/HumanReadable/",children:(0,n.jsx)(i.code,{children:"HumanReadable"})})]}),"\n",(0,n.jsx)(i.p,{children:"Return the Authorization's static data"}),"\n",(0,n.jsx)(i.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/interfaces/API/Entities/AuthorizationRequest/HumanReadable/",children:(0,n.jsx)(i.code,{children:"HumanReadable"})})}),"\n",(0,n.jsx)(i.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/#tohuman",children:"toHuman"})]}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/AuthorizationRequest.ts#L236",children:"api/entities/AuthorizationRequest.ts:236"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"generateuuid",children:"generateUuid"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.code,{children:"Static"})," ",(0,n.jsx)(i.strong,{children:"generateUuid"}),"<",(0,n.jsx)(i.code,{children:"Identifiers"}),">(",(0,n.jsx)(i.code,{children:"identifiers"}),"): ",(0,n.jsx)(i.code,{children:"string"})]}),"\n",(0,n.jsx)(i.p,{children:"Generate the Entity's UUID from its identifying properties"}),"\n",(0,n.jsx)(i.h4,{id:"type-parameters",children:"Type parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsx)(i.tr,{children:(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"})})}),(0,n.jsx)(i.tbody,{children:(0,n.jsx)(i.tr,{children:(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"Identifiers"})})})})]}),"\n",(0,n.jsx)(i.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"identifiers"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"Identifiers"})})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"string"})}),"\n",(0,n.jsx)(i.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/#generateuuid",children:"generateUuid"})]}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Entity.ts#L14",children:"api/entities/Entity.ts:14"})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"unserialize",children:"unserialize"}),"\n",(0,n.jsxs)(i.p,{children:["\u25b8 ",(0,n.jsx)(i.code,{children:"Static"})," ",(0,n.jsx)(i.strong,{children:"unserialize"}),"<",(0,n.jsx)(i.code,{children:"Identifiers"}),">(",(0,n.jsx)(i.code,{children:"serialized"}),"): ",(0,n.jsx)(i.code,{children:"Identifiers"})]}),"\n",(0,n.jsx)(i.p,{children:"Unserialize a UUID into its Unique Identifiers"}),"\n",(0,n.jsx)(i.h4,{id:"type-parameters-1",children:"Type parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsx)(i.tr,{children:(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"})})}),(0,n.jsx)(i.tbody,{children:(0,n.jsx)(i.tr,{children:(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"Identifiers"})})})})]}),"\n",(0,n.jsx)(i.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"serialized"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:(0,n.jsx)(i.code,{children:"string"})}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"UUID to unserialize"})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"returns-7",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Identifiers"})}),"\n",(0,n.jsx)(i.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/",children:"Entity"}),".",(0,n.jsx)(i.a,{href:"/polymesh-documentation-site/sdk-docs/25.1.x/classes/API/Entities/Entity/#unserialize",children:"unserialize"})]}),"\n",(0,n.jsx)(i.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/88db4a911/src/api/entities/Entity.ts#L23",children:"api/entities/Entity.ts:23"})})]})}function a(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>l});var t=s(96540);const n={},d=t.createContext(n);function r(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);