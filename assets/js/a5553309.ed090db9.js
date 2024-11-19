"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[49896],{63261:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"enums/API/Client/Types/ErrorCode/ErrorCode","title":"Enumeration: ErrorCode","description":"api/client/types.ErrorCode","source":"@site/sdk-docs_versioned_docs/version-24.7.x/enums/API/Client/Types/ErrorCode/ErrorCode.md","sourceDirName":"enums/API/Client/Types/ErrorCode","slug":"/enums/API/Client/Types/ErrorCode/","permalink":"/polymesh-documentation-site/sdk-docs/24.7.x/enums/API/Client/Types/ErrorCode/","draft":false,"unlisted":false,"tags":[],"version":"24.7.x","frontMatter":{"id":"ErrorCode","title":"Enumeration: ErrorCode","sidebar_label":"ErrorCode"},"sidebar":"defaultSidebar","previous":{"title":"Utils","permalink":"/polymesh-documentation-site/sdk-docs/24.7.x/modules/Types/Utils/"},"next":{"title":"AccountIdentityRelation","permalink":"/polymesh-documentation-site/sdk-docs/24.7.x/enums/API/Entities/Account/Types/AccountIdentityRelation/"}}');var s=i(74848),r=i(28453);const d={id:"ErrorCode",title:"Enumeration: ErrorCode",sidebar_label:"ErrorCode"},o=void 0,l={},a=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"DataUnavailable",id:"dataunavailable",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"EntityInUse",id:"entityinuse",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"FatalError",id:"fatalerror",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"General",id:"general",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"InsufficientBalance",id:"insufficientbalance",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"LimitExceeded",id:"limitexceeded",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"MiddlewareError",id:"middlewareerror",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"NoDataChange",id:"nodatachange",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"NotAuthorized",id:"notauthorized",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"TransactionAborted",id:"transactionaborted",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"TransactionRejectedByUser",id:"transactionrejectedbyuser",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"TransactionReverted",id:"transactionreverted",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"UnexpectedError",id:"unexpectederror",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"UnmetPrerequisite",id:"unmetprerequisite",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"ValidationError",id:"validationerror",level:3},{value:"Defined in",id:"defined-in-14",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/24.7.x/modules/API/Client/Types/",children:"api/client/types"}),".ErrorCode"]}),"\n",(0,s.jsx)(n.p,{children:"Specifies possible types of errors in the SDK"}),"\n",(0,s.jsx)(n.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,s.jsx)(n.h3,{id:"dataunavailable",children:"DataUnavailable"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"DataUnavailable"})," = ",(0,s.jsx)(n.code,{children:'"DataUnavailable"'})]}),"\n",(0,s.jsx)(n.p,{children:"the data that is being fetched does not exist on-chain, or relies on non-existent data. There are\nsome cases where the data did exist at some point, but has been deleted to save storage space"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L90",children:"api/client/types.ts:90"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"entityinuse",children:"EntityInUse"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"EntityInUse"})," = ",(0,s.jsx)(n.code,{children:'"EntityInUse"'})]}),"\n",(0,s.jsx)(n.p,{children:"this type of error is thrown when attempting to delete/modify an entity which has other entities depending on it. For example, deleting\na Portfolio that still holds assets, or removing a Checkpoint Schedule that is being referenced by a Corporate Action"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L112",children:"api/client/types.ts:112"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"fatalerror",children:"FatalError"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"FatalError"})," = ",(0,s.jsx)(n.code,{children:'"FatalError"'})]}),"\n",(0,s.jsx)(n.p,{children:"error that should cause termination of the calling application"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L72",children:"api/client/types.ts:72"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"General"})," = ",(0,s.jsx)(n.code,{children:'"General"'})]}),"\n",(0,s.jsx)(n.p,{children:"general purpose errors that don't fit well into the other categories"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L125",children:"api/client/types.ts:125"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"insufficientbalance",children:"InsufficientBalance"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"InsufficientBalance"})," = ",(0,s.jsx)(n.code,{children:'"InsufficientBalance"'})]}),"\n",(0,s.jsx)(n.p,{children:"one or more parties involved in the transaction do not have enough balance to perform it"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L116",children:"api/client/types.ts:116"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"limitexceeded",children:"LimitExceeded"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"LimitExceeded"})," = ",(0,s.jsx)(n.code,{children:'"LimitExceeded"'})]}),"\n",(0,s.jsx)(n.p,{children:"the data that is being written to the chain would result in some limit being exceeded. For example, adding a transfer\nrestriction when the maximum possible amount has already been added"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L100",children:"api/client/types.ts:100"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"middlewareerror",children:"MiddlewareError"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"MiddlewareError"})," = ",(0,s.jsx)(n.code,{children:'"MiddlewareError"'})]}),"\n",(0,s.jsx)(n.p,{children:"errors encountered when interacting with the historic data middleware (GQL server)"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L85",children:"api/client/types.ts:85"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"nodatachange",children:"NoDataChange"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"NoDataChange"})," = ",(0,s.jsx)(n.code,{children:'"NoDataChange"'})]}),"\n",(0,s.jsx)(n.p,{children:"the data that is being written to the chain is the same data that is already in place. This would result\nin a redundant/useless transaction being executed"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L95",children:"api/client/types.ts:95"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"notauthorized",children:"NotAuthorized"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"NotAuthorized"})," = ",(0,s.jsx)(n.code,{children:'"NotAuthorized"'})]}),"\n",(0,s.jsx)(n.p,{children:"user does not have the required roles/permissions to perform an operation"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L81",children:"api/client/types.ts:81"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"transactionaborted",children:"TransactionAborted"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"TransactionAborted"})," = ",(0,s.jsx)(n.code,{children:'"TransactionAborted"'})]}),"\n",(0,s.jsx)(n.p,{children:"transaction removed from the tx pool"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L58",children:"api/client/types.ts:58"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"transactionrejectedbyuser",children:"TransactionRejectedByUser"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"TransactionRejectedByUser"})," = ",(0,s.jsx)(n.code,{children:'"TransactionRejectedByUser"'})]}),"\n",(0,s.jsx)(n.p,{children:"user rejected the transaction in their wallet"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L62",children:"api/client/types.ts:62"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"transactionreverted",children:"TransactionReverted"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"TransactionReverted"})," = ",(0,s.jsx)(n.code,{children:'"TransactionReverted"'})]}),"\n",(0,s.jsx)(n.p,{children:"transaction failed due to an on-chain error. This is a business logic error,\nand it should be caught by the SDK before being sent to the chain.\nPlease report it to the Polymesh team"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L68",children:"api/client/types.ts:68"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"unexpectederror",children:"UnexpectedError"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"UnexpectedError"})," = ",(0,s.jsx)(n.code,{children:'"UnexpectedError"'})]}),"\n",(0,s.jsx)(n.p,{children:"errors that are the result of something unforeseen.\nThese should generally be reported to the Polymesh team"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L121",children:"api/client/types.ts:121"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"unmetprerequisite",children:"UnmetPrerequisite"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"UnmetPrerequisite"})," = ",(0,s.jsx)(n.code,{children:'"UnmetPrerequisite"'})]}),"\n",(0,s.jsx)(n.p,{children:"one or more base prerequisites for a transaction to be successful haven't been met. For example, reserving a ticker requires\nsaid ticker to not be already reserved. Attempting to reserve a ticker without that prerequisite being met would result in this\ntype of error. Attempting to create an entity that already exists would also fall into this category,\nif the entity in question is supposed to be unique"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L107",children:"api/client/types.ts:107"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"validationerror",children:"ValidationError"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"ValidationError"})," = ",(0,s.jsx)(n.code,{children:'"ValidationError"'})]}),"\n",(0,s.jsx)(n.p,{children:"user input error. This means that one or more inputs passed by the user\ndo not conform to expected value ranges or types"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-14",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/fe2e6dd1d/src/api/client/types.ts#L77",children:"api/client/types.ts:77"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);