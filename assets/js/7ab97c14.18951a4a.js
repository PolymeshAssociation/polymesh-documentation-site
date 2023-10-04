"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[97681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:s,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const r={id:"PolymeshTransactionBase",title:"Class: PolymeshTransactionBase<ReturnValue, TransformedReturnValue>",sidebar_label:"PolymeshTransactionBase"},l=void 0,i={unversionedId:"classes/Base/PolymeshTransactionBase/PolymeshTransactionBase",id:"classes/Base/PolymeshTransactionBase/PolymeshTransactionBase",title:"Class: PolymeshTransactionBase<ReturnValue, TransformedReturnValue>",description:"base/PolymeshTransactionBase.PolymeshTransactionBase",source:"@site/sdk-docs/classes/Base/PolymeshTransactionBase/PolymeshTransactionBase.md",sourceDirName:"classes/Base/PolymeshTransactionBase",slug:"/classes/Base/PolymeshTransactionBase/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/Base/PolymeshTransactionBase/",draft:!1,tags:[],version:"current",frontMatter:{id:"PolymeshTransactionBase",title:"Class: PolymeshTransactionBase<ReturnValue, TransformedReturnValue>",sidebar_label:"PolymeshTransactionBase"},sidebar:"defaultSidebar",previous:{title:"PolymeshTransaction",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/Base/PolymeshTransaction/"},next:{title:"PolymeshTransactionBatch",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/Base/PolymeshTransactionBatch/"}},o={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"blockHash",id:"blockhash",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"blockNumber",id:"blocknumber",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"error",id:"error",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"receipt",id:"receipt",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"txHash",id:"txhash",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"txIndex",id:"txindex",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"Accessors",id:"accessors",level:2},{value:"isSuccess",id:"issuccess",level:3},{value:"Returns",id:"returns",level:4},{value:"result",id:"result",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Methods",id:"methods",level:2},{value:"getProtocolFees",id:"getprotocolfees",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getTotalFees",id:"gettotalfees",level:3},{value:"Returns",id:"returns-3",level:4},{value:"onProcessedByMiddleware",id:"onprocessedbymiddleware",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-4",level:4},{value:"onStatusChange",id:"onstatuschange",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-5",level:4},{value:"run",id:"run",level:3},{value:"Returns",id:"returns-6",level:4},{value:"supportsSubsidy",id:"supportssubsidy",level:3},{value:"Returns",id:"returns-7",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Base/PolymeshTransactionBase/"},"base/PolymeshTransactionBase"),".PolymeshTransactionBase"),(0,s.kt)("p",null,"Wrapper class for a Polymesh Transaction"),(0,s.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ReturnValue")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"void"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"TransformedReturnValue")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"ReturnValue"))))),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"PolymeshTransactionBase"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/Base/PolymeshTransaction/"},(0,s.kt)("inlineCode",{parentName:"a"},"PolymeshTransaction"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/Base/PolymeshTransactionBatch/"},(0,s.kt)("inlineCode",{parentName:"a"},"PolymeshTransactionBatch"))))),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"blockhash"},"blockHash"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"blockHash"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"hash of the block where this transaction resides (status: ",(0,s.kt)("inlineCode",{parentName:"p"},"Succeeded"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Failed"),")"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/base/PolymeshTransactionBase.ts#L90"},"base/PolymeshTransactionBase.ts:90")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"blockNumber"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,s.kt)("p",null,"number of the block where this transaction resides (status: ",(0,s.kt)("inlineCode",{parentName:"p"},"Succeeded"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Failed"),")"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/base/PolymeshTransactionBase.ts#L95"},"base/PolymeshTransactionBase.ts:95")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"error"},"error"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"error"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/Base/PolymeshError/"},(0,s.kt)("inlineCode",{parentName:"a"},"PolymeshError"))),(0,s.kt)("p",null,"stores errors thrown while running the transaction (status: ",(0,s.kt)("inlineCode",{parentName:"p"},"Failed"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Aborted"),")"),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/base/PolymeshTransactionBase.ts#L70"},"base/PolymeshTransactionBase.ts:70")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"receipt"},"receipt"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"receipt"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"ISubmittableResult")),(0,s.kt)("p",null,"stores the transaction receipt (if successful)"),(0,s.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/base/PolymeshTransactionBase.ts#L75"},"base/PolymeshTransactionBase.ts:75")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"status"},"status"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"status"),": ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/enums/Types/TransactionStatus/"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionStatus"))," = ",(0,s.kt)("inlineCode",{parentName:"p"},"TransactionStatus.Idle")),(0,s.kt)("p",null,"current status of the transaction"),(0,s.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/base/PolymeshTransactionBase.ts#L65"},"base/PolymeshTransactionBase.ts:65")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"txhash"},"txHash"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"txHash"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"transaction hash (status: ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Succeeded"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Failed"),")"),(0,s.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/base/PolymeshTransactionBase.ts#L80"},"base/PolymeshTransactionBase.ts:80")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"txindex"},"txIndex"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"txIndex"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,s.kt)("p",null,"transaction index within its block (status: ",(0,s.kt)("inlineCode",{parentName:"p"},"Succeeded"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Failed"),")"),(0,s.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/base/PolymeshTransactionBase.ts#L85"},"base/PolymeshTransactionBase.ts:85")),(0,s.kt)("h2",{id:"accessors"},"Accessors"),(0,s.kt)("h3",{id:"issuccess"},"isSuccess"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," ",(0,s.kt)("strong",{parentName:"p"},"isSuccess"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"returns true if transaction has completed successfully"),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"result"},"result"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"get")," ",(0,s.kt)("strong",{parentName:"p"},"result"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue")),(0,s.kt)("p",null,"returns the transaction result - this is the same value as the Promise run returns"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," it is generally preferable to ",(0,s.kt)("inlineCode",{parentName:"p"},"await")," the ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise")," returned by ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/Base/PolymeshTransactionBase/#run"},"transaction.run()")," instead of reading this property"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,s.kt)("p",null," if the ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/Base/PolymeshTransactionBase/#issuccess"},"transaction.isSuccess")," property is false \u2014 be sure to check that before accessing!"),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"getprotocolfees"},"getProtocolFees"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,s.kt)("strong",{parentName:"p"},"getProtocolFees"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,s.kt)("p",null,"Return this transaction's protocol fees. These are extra fees charged for\nspecific operations on the chain. Not to be confused with network fees (which\ndepend on the complexity of the operation), protocol fees are set by governance and/or\nchain upgrades"),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"gettotalfees"},"getTotalFees"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getTotalFees"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/PayingAccountFees/"},(0,s.kt)("inlineCode",{parentName:"a"},"PayingAccountFees")),">"),(0,s.kt)("p",null,"Retrieve a breakdown of the fees required to run this transaction, as well as the Account responsible for paying them"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," these values might be inaccurate if the transaction is run at a later time. This can be due to a governance vote or other\nchain related factors (like modifications to a specific subsidizer relationship or a chain upgrade)"),(0,s.kt)("h4",{id:"returns-3"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/PayingAccountFees/"},(0,s.kt)("inlineCode",{parentName:"a"},"PayingAccountFees")),">"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"onprocessedbymiddleware"},"onProcessedByMiddleware"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"onProcessedByMiddleware"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,s.kt)("p",null,"Subscribe to the results of this transaction being processed by the indexing service (and as such, available to the middleware)"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," this event will be fired even if the queue fails"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,s.kt)("p",null," if the middleware wasn't enabled when instantiating the SDK client"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"listener")),(0,s.kt)("td",{parentName:"tr",align:"left"},"(",(0,s.kt)("inlineCode",{parentName:"td"},"err?"),": ",(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/Base/PolymeshError/"},(0,s.kt)("inlineCode",{parentName:"a"},"PolymeshError")),") => ",(0,s.kt)("inlineCode",{parentName:"td"},"void")),(0,s.kt)("td",{parentName:"tr",align:"left"},"callback function that will be called whenever the middleware is updated with the latest data.   If there is an error (timeout or middleware offline) it will be passed to this callback")))),(0,s.kt)("h4",{id:"returns-4"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,s.kt)("p",null,"unsubscribe function"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"onstatuschange"},"onStatusChange"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"onStatusChange"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"listener"),"): ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,s.kt)("p",null,"Subscribe to status changes"),(0,s.kt)("h4",{id:"parameters-1"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"listener")),(0,s.kt)("td",{parentName:"tr",align:"left"},"(",(0,s.kt)("inlineCode",{parentName:"td"},"transaction"),": ",(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/#genericpolymeshtransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,s.kt)("inlineCode",{parentName:"td"},"ReturnValue"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"TransformedReturnValue"),">",") => ",(0,s.kt)("inlineCode",{parentName:"td"},"void")),(0,s.kt)("td",{parentName:"tr",align:"left"},"callback function that will be called whenever the status changes")))),(0,s.kt)("h4",{id:"returns-5"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback"))),(0,s.kt)("p",null,"unsubscribe function"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"run"},"run"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"run"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue"),">"),(0,s.kt)("p",null,"Run the transaction, update its status and return a result if applicable.\nCertain transactions create Entities on the blockchain, and those Entities are returned\nfor convenience. For example, when running a transaction that creates an Asset, the Asset itself\nis returned"),(0,s.kt)("h4",{id:"returns-6"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"TransformedReturnValue"),">"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"supportssubsidy"},"supportsSubsidy"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,s.kt)("strong",{parentName:"p"},"supportsSubsidy"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("p",null,"Return whether the transaction can be subsidized. If the result is false\nAND the caller is being subsidized by a third party, the transaction can't be executed and trying\nto do so will result in an error"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," this depends on the type of transaction itself (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"staking.bond")," can't be subsidized, but ",(0,s.kt)("inlineCode",{parentName:"p"},"asset.createAsset")," can)"),(0,s.kt)("h4",{id:"returns-7"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"boolean")))}u.isMDXComponent=!0}}]);