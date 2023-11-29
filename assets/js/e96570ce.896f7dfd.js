"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[11145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,c=m["".concat(o,".").concat(u)]||m[u]||k[u]||r;return n?a.createElement(c,s(s({ref:t},p),{},{components:n})):a.createElement(c,s({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:i,s[1]=l;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={id:"Subsidy",title:"Class: Subsidy",sidebar_label:"Subsidy"},s=void 0,l={unversionedId:"classes/API/Entities/Subsidy/Subsidy",id:"version-20.0.x/classes/API/Entities/Subsidy/Subsidy",title:"Class: Subsidy",description:"api/entities/Subsidy.Subsidy",source:"@site/sdk-docs_versioned_docs/version-20.0.x/classes/API/Entities/Subsidy/Subsidy.md",sourceDirName:"classes/API/Entities/Subsidy",slug:"/classes/API/Entities/Subsidy/",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Subsidy/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"Subsidy",title:"Class: Subsidy",sidebar_label:"Subsidy"},sidebar:"defaultSidebar",previous:{title:"Subsidies",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Subsidies/"},next:{title:"TickerReservation",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/TickerReservation/"}},o={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"beneficiary",id:"beneficiary",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"subsidizer",id:"subsidizer",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"uuid",id:"uuid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"decreaseAllowance",id:"decreaseallowance",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"exists",id:"exists",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides",level:4},{value:"getAllowance",id:"getallowance",level:3},{value:"Returns",id:"returns-2",level:4},{value:"increaseAllowance",id:"increaseallowance",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"isEqual",id:"isequal",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"quit",id:"quit",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"setAllowance",id:"setallowance",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"toHuman",id:"tohuman",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"generateUuid",id:"generateuuid",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"unserialize",id:"unserialize",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-3",level:4}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/API/Entities/Subsidy/"},"api/entities/Subsidy"),".Subsidy"),(0,i.kt)("p",null,"Represents a Subsidy relationship on chain"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Entities/Subsidy/UniqueIdentifiers/"},(0,i.kt)("inlineCode",{parentName:"a"},"UniqueIdentifiers")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"HumanReadable"),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Subsidy"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"beneficiary"},"beneficiary"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"beneficiary"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Account/"},(0,i.kt)("inlineCode",{parentName:"a"},"Account"))),(0,i.kt)("p",null,"Account whose transactions are being paid for"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Subsidy/index.ts#L54"},"api/entities/Subsidy/index.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subsidizer"},"subsidizer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"subsidizer"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Account/"},(0,i.kt)("inlineCode",{parentName:"a"},"Account"))),(0,i.kt)("p",null,"Account that is paying for the transactions"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Subsidy/index.ts#L58"},"api/entities/Subsidy/index.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"uuid"},"uuid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"uuid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#uuid"},"uuid")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/entities/Entity.ts#L46"},"api/entities/Entity.ts:46")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"decreaseallowance"},"decreaseAllowance"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"decreaseAllowance"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("p",null,"Decrease allowance for this Subsidy relationship"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," Only the subsidizer is allowed to decrease the allowance"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null," if the amount to decrease by is more than the existing allowance"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," this method is of type ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/#checkauthorization"},"decreaseAllowance.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Pick"),"<",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/DecreaseAllowanceParams/"},(0,i.kt)("inlineCode",{parentName:"a"},"DecreaseAllowanceParams")),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"allowance"'),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,i.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"exists"},"exists"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"exists"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Determine whether this Subsidy relationship exists on chain"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#exists"},"exists")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getallowance"},"getAllowance"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getAllowance"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,i.kt)("p",null,"Get amount of POLYX subsidized for this Subsidy relationship"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null," if the Subsidy does not exist"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"increaseallowance"},"increaseAllowance"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"increaseAllowance"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("p",null,"Increase allowance for this Subsidy relationship"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," Only the subsidizer is allowed to increase the allowance"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," this method is of type ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/#checkauthorization"},"increaseAllowance.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Pick"),"<",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/IncreaseAllowanceParams/"},(0,i.kt)("inlineCode",{parentName:"a"},"IncreaseAllowanceParams")),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"allowance"'),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,i.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isequal"},"isEqual"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isEqual"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Determine whether this Entity is the same as another one"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#isequal"},"isEqual")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"quit"},"quit"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"quit"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("p",null,"Terminate this Subsidy relationship. The beneficiary Account will be forced to pay for their own transactions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," both the beneficiary and the subsidizer are allowed to unilaterally quit the Subsidy"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," this method is of type ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/NoArgsProcedureMethod/"},"NoArgsProcedureMethod"),", which means you can call ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/NoArgsProcedureMethod/#checkauthorization"},"quit.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,i.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setallowance"},"setAllowance"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setAllowance"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("p",null,"Set allowance for this Subsidy relationship"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," Only the subsidizer is allowed to set the allowance"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null," if the allowance to set is equal to the current allowance"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," this method is of type ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ProcedureMethod/#checkauthorization"},"setAllowance.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Pick"),"<",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/SetAllowanceParams/"},(0,i.kt)("inlineCode",{parentName:"a"},"SetAllowanceParams")),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"allowance"'),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ProcedureOpts/"},(0,i.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tohuman"},"toHuman"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toHuman"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Entities/Subsidy/UniqueIdentifiers/"},(0,i.kt)("inlineCode",{parentName:"a"},"UniqueIdentifiers"))),(0,i.kt)("p",null,"Return the Subsidy's static data"),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Entities/Subsidy/UniqueIdentifiers/"},(0,i.kt)("inlineCode",{parentName:"a"},"UniqueIdentifiers"))),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#tohuman"},"toHuman")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"generateuuid"},"generateUuid"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"generateUuid"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"identifiers"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Generate the Entity's UUID from its identifying properties"),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"identifiers")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#generateuuid"},"generateUuid")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unserialize"},"unserialize"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"unserialize"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"serialized"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers")),(0,i.kt)("p",null,"Unserialize a UUID into its Unique Identifiers"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Identifiers"))))),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serialized")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"UUID to unserialize")))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/"},"Entity"),".",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Entity/#unserialize"},"unserialize")))}m.isMDXComponent=!0}}]);