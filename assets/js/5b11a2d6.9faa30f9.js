"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[99951],{23270:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=i(74848),r=i(28453);const t={id:"ErrorCode",title:"Enumeration: ErrorCode",sidebar_label:"ErrorCode"},d=void 0,o={id:"enums/Types/ErrorCode/ErrorCode",title:"Enumeration: ErrorCode",description:"types.ErrorCode",source:"@site/sdk-docs_versioned_docs/version-21.0.x/enums/Types/ErrorCode/ErrorCode.md",sourceDirName:"enums/Types/ErrorCode",slug:"/enums/Types/ErrorCode/",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/enums/Types/ErrorCode/",draft:!1,unlisted:!1,tags:[],version:"21.0.x",frontMatter:{id:"ErrorCode",title:"Enumeration: ErrorCode",sidebar_label:"ErrorCode"},sidebar:"defaultSidebar",previous:{title:"ConditionType",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/enums/Types/ConditionType/"},next:{title:"EventIdEnum",permalink:"/polymesh-documentation-site/sdk-docs/21.0.x/enums/Types/EventIdEnum/"}},l={},a=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"DataUnavailable",id:"dataunavailable",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"EntityInUse",id:"entityinuse",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"FatalError",id:"fatalerror",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"General",id:"general",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"InsufficientBalance",id:"insufficientbalance",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"LimitExceeded",id:"limitexceeded",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"MiddlewareError",id:"middlewareerror",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"NoDataChange",id:"nodatachange",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"NotAuthorized",id:"notauthorized",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"TransactionAborted",id:"transactionaborted",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"TransactionRejectedByUser",id:"transactionrejectedbyuser",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"TransactionReverted",id:"transactionreverted",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"UnexpectedError",id:"unexpectederror",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"UnmetPrerequisite",id:"unmetprerequisite",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"ValidationError",id:"validationerror",level:3},{value:"Defined in",id:"defined-in-14",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/polymesh-documentation-site/sdk-docs/21.0.x/modules/Types/",children:"types"}),".ErrorCode"]}),"\n",(0,s.jsx)(n.p,{children:"Specifies possible types of errors in the SDK"}),"\n",(0,s.jsx)(n.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,s.jsx)(n.h3,{id:"dataunavailable",children:"DataUnavailable"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"DataUnavailable"})," = ",(0,s.jsx)(n.code,{children:'"DataUnavailable"'})]}),"\n",(0,s.jsx)(n.p,{children:"the data that is being fetched does not exist on-chain, or relies on non-existent data. There are\nsome cases where the data did exist at some point, but has been deleted to save storage space"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L567",children:"types/index.ts:567"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"entityinuse",children:"EntityInUse"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"EntityInUse"})," = ",(0,s.jsx)(n.code,{children:'"EntityInUse"'})]}),"\n",(0,s.jsx)(n.p,{children:"this type of error is thrown when attempting to delete/modify an entity which has other entities depending on it. For example, deleting\na Portfolio that still holds assets, or removing a Checkpoint Schedule that is being referenced by a Corporate Action"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L589",children:"types/index.ts:589"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"fatalerror",children:"FatalError"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"FatalError"})," = ",(0,s.jsx)(n.code,{children:'"FatalError"'})]}),"\n",(0,s.jsx)(n.p,{children:"error that should cause termination of the calling application"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L549",children:"types/index.ts:549"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"General"})," = ",(0,s.jsx)(n.code,{children:'"General"'})]}),"\n",(0,s.jsx)(n.p,{children:"general purpose errors that don't fit well into the other categories"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L602",children:"types/index.ts:602"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"insufficientbalance",children:"InsufficientBalance"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"InsufficientBalance"})," = ",(0,s.jsx)(n.code,{children:'"InsufficientBalance"'})]}),"\n",(0,s.jsx)(n.p,{children:"one or more parties involved in the transaction do not have enough balance to perform it"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L593",children:"types/index.ts:593"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"limitexceeded",children:"LimitExceeded"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"LimitExceeded"})," = ",(0,s.jsx)(n.code,{children:'"LimitExceeded"'})]}),"\n",(0,s.jsx)(n.p,{children:"the data that is being written to the chain would result in some limit being exceeded. For example, adding a transfer\nrestriction when the maximum possible amount has already been added"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L577",children:"types/index.ts:577"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"middlewareerror",children:"MiddlewareError"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"MiddlewareError"})," = ",(0,s.jsx)(n.code,{children:'"MiddlewareError"'})]}),"\n",(0,s.jsx)(n.p,{children:"errors encountered when interacting with the historic data middleware (GQL server)"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L562",children:"types/index.ts:562"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"nodatachange",children:"NoDataChange"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"NoDataChange"})," = ",(0,s.jsx)(n.code,{children:'"NoDataChange"'})]}),"\n",(0,s.jsx)(n.p,{children:"the data that is being written to the chain is the same data that is already in place. This would result\nin a redundant/useless transaction being executed"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L572",children:"types/index.ts:572"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"notauthorized",children:"NotAuthorized"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"NotAuthorized"})," = ",(0,s.jsx)(n.code,{children:'"NotAuthorized"'})]}),"\n",(0,s.jsx)(n.p,{children:"user does not have the required roles/permissions to perform an operation"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L558",children:"types/index.ts:558"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"transactionaborted",children:"TransactionAborted"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"TransactionAborted"})," = ",(0,s.jsx)(n.code,{children:'"TransactionAborted"'})]}),"\n",(0,s.jsx)(n.p,{children:"transaction removed from the tx pool"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L535",children:"types/index.ts:535"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"transactionrejectedbyuser",children:"TransactionRejectedByUser"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"TransactionRejectedByUser"})," = ",(0,s.jsx)(n.code,{children:'"TransactionRejectedByUser"'})]}),"\n",(0,s.jsx)(n.p,{children:"user rejected the transaction in their wallet"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L539",children:"types/index.ts:539"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"transactionreverted",children:"TransactionReverted"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"TransactionReverted"})," = ",(0,s.jsx)(n.code,{children:'"TransactionReverted"'})]}),"\n",(0,s.jsx)(n.p,{children:"transaction failed due to an on-chain error. This is a business logic error,\nand it should be caught by the SDK before being sent to the chain.\nPlease report it to the Polymesh team"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L545",children:"types/index.ts:545"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"unexpectederror",children:"UnexpectedError"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"UnexpectedError"})," = ",(0,s.jsx)(n.code,{children:'"UnexpectedError"'})]}),"\n",(0,s.jsx)(n.p,{children:"errors that are the result of something unforeseen.\nThese should generally be reported to the Polymesh team"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L598",children:"types/index.ts:598"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"unmetprerequisite",children:"UnmetPrerequisite"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"UnmetPrerequisite"})," = ",(0,s.jsx)(n.code,{children:'"UnmetPrerequisite"'})]}),"\n",(0,s.jsx)(n.p,{children:"one or more base prerequisites for a transaction to be successful haven't been met. For example, reserving a ticker requires\nsaid ticker to not be already reserved. Attempting to reserve a ticker without that prerequisite being met would result in this\ntype of error. Attempting to create an entity that already exists would also fall into this category,\nif the entity in question is supposed to be unique"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L584",children:"types/index.ts:584"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"validationerror",children:"ValidationError"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"ValidationError"})," = ",(0,s.jsx)(n.code,{children:'"ValidationError"'})]}),"\n",(0,s.jsx)(n.p,{children:"user input error. This means that one or more inputs passed by the user\ndo not conform to expected value ranges or types"}),"\n",(0,s.jsx)(n.h4,{id:"defined-in-14",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95e180d28/src/types/index.ts#L554",children:"types/index.ts:554"})})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var s=i(96540);const r={},t=s.createContext(r);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);