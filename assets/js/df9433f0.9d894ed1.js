"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[83056],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,u=m["".concat(l,".").concat(k)]||m[k]||c[k]||s;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},27180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={id:"TransferRestrictionBase",title:"Class: TransferRestrictionBase<T>",sidebar_label:"TransferRestrictionBase"},i=void 0,o={unversionedId:"classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase",id:"classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase",title:"Class: TransferRestrictionBase<T>",description:"api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase.TransferRestrictionBase",source:"@site/sdk-docs/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/TransferRestrictionBase.md",sourceDirName:"classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase",slug:"/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/",draft:!1,tags:[],version:"current",frontMatter:{id:"TransferRestrictionBase",title:"Class: TransferRestrictionBase<T>",sidebar_label:"TransferRestrictionBase"},sidebar:"defaultSidebar",previous:{title:"Percentage",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/"},next:{title:"Nft",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/NonFungible/Nft/"}},l={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"addRestriction",id:"addrestriction",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"disableStat",id:"disablestat",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"enableStat",id:"enablestat",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"get",id:"get",level:3},{value:"Returns",id:"returns-3",level:4},{value:"removeRestrictions",id:"removerestrictions",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"setRestrictions",id:"setrestrictions",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/"},"api/entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase"),".TransferRestrictionBase"),(0,r.kt)("p",null,"Base class for managing Transfer Restrictions"),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/enums/Types/TransferRestrictionType/"},(0,r.kt)("inlineCode",{parentName:"a"},"TransferRestrictionType")))))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/Fungible/FungibleAsset"},(0,r.kt)("inlineCode",{parentName:"a"},"FungibleAsset")),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TransferRestrictionBase"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimCount/"},(0,r.kt)("inlineCode",{parentName:"a"},"ClaimCount"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/Fungible/TransferRestrictions/ClaimPercentage/"},(0,r.kt)("inlineCode",{parentName:"a"},"ClaimPercentage"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/Fungible/TransferRestrictions/Count/"},(0,r.kt)("inlineCode",{parentName:"a"},"Count"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/Fungible/TransferRestrictions/Percentage/"},(0,r.kt)("inlineCode",{parentName:"a"},"Percentage"))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"addrestriction"},"addRestriction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addRestriction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"),(0,r.kt)("p",null,"Add a Transfer Restriction of the corresponding type to this Asset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," the result is the total amount of restrictions after the procedure has run"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureMethod/#checkauthorization"},"addRestriction.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Procedures/Types/#addrestrictionparams"},(0,r.kt)("inlineCode",{parentName:"a"},"AddRestrictionParams")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disablestat"},"disableStat"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"disableStat"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("p",null,"Removes an Asset statistic"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null," if the statistic is being used or is not set"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureMethod/#checkauthorization"},"disableStat.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Entities/Asset/Fungible/TransferRestrictions/TransferRestrictionBase/#removeassetstatparamsbase"},(0,r.kt)("inlineCode",{parentName:"a"},"RemoveAssetStatParamsBase")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"enablestat"},"enableStat"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"enableStat"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("p",null,"Enables statistic of the corresponding type for this Asset, which are required for restrictions to be created"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureMethod/#checkauthorization"},"enableStat.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Procedures/Types/#setassetstatparams"},(0,r.kt)("inlineCode",{parentName:"a"},"SetAssetStatParams")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"get"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Procedures/Types/#gettransferrestrictionreturntype"},(0,r.kt)("inlineCode",{parentName:"a"},"GetTransferRestrictionReturnType")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",">"),(0,r.kt)("p",null,"Retrieve all active Transfer Restrictions of the corresponding type"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," there is a maximum number of restrictions allowed across all types.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"availableSlots")," property of the result represents how many more restrictions can be added\nbefore reaching that limit"),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Procedures/Types/#gettransferrestrictionreturntype"},(0,r.kt)("inlineCode",{parentName:"a"},"GetTransferRestrictionReturnType")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removerestrictions"},"removeRestrictions"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"removeRestrictions"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"),(0,r.kt)("p",null,"Removes all Transfer Restrictions of the corresponding type from this Asset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," the result is the total amount of restrictions after the procedure has run"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/NoArgsProcedureMethod/"},"NoArgsProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/NoArgsProcedureMethod/#checkauthorization"},"removeRestrictions.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setrestrictions"},"setRestrictions"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setRestrictions"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"),(0,r.kt)("p",null,"Sets all Transfer Restrictions of the corresponding type on this Asset"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," the result is the total amount of restrictions after the procedure has run"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this method is of type ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureMethod/#checkauthorization"},"setRestrictions.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Procedures/Types/#setrestrictionsparams"},(0,r.kt)("inlineCode",{parentName:"a"},"SetRestrictionsParams")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/Types/ProcedureOpts/"},(0,r.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#genericpolymeshtransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),">",">"))}m.isMDXComponent=!0}}]);