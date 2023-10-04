"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[50129],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),d=p(a),k=r,h=d["".concat(l,".").concat(k)]||d[k]||u[k]||i;return a?n.createElement(h,o(o({ref:e},m),{},{components:a})):n.createElement(h,o({ref:e},m))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=k;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},20653:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"Authorizations",title:"Class: Authorizations<Parent>",sidebar_label:"Authorizations"},o=void 0,s={unversionedId:"classes/API/Entities/Common/Namespaces/Authorizations/Authorizations",id:"classes/API/Entities/Common/Namespaces/Authorizations/Authorizations",title:"Class: Authorizations<Parent>",description:"api/entities/common/namespaces/Authorizations.Authorizations",source:"@site/sdk-docs/classes/API/Entities/Common/Namespaces/Authorizations/Authorizations.md",sourceDirName:"classes/API/Entities/Common/Namespaces/Authorizations",slug:"/classes/API/Entities/Common/Namespaces/Authorizations/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/Common/Namespaces/Authorizations/",draft:!1,tags:[],version:"current",frontMatter:{id:"Authorizations",title:"Class: Authorizations<Parent>",sidebar_label:"Authorizations"},sidebar:"defaultSidebar",previous:{title:"CheckpointSchedule",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/CheckpointSchedule/"},next:{title:"CorporateAction",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/CorporateAction/"}},l={},p=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"getHistoricalAuthorizations",id:"gethistoricalauthorizations",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getOne",id:"getone",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getReceived",id:"getreceived",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],m={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/API/Entities/Common/Namespaces/Authorizations/"},"api/entities/common/namespaces/Authorizations"),".Authorizations"),(0,r.kt)("p",null,"Handles all Authorization related functionality"),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Parent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/#signer"},(0,r.kt)("inlineCode",{parentName:"a"},"Signer")))))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Parent"),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Authorizations"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/Identity/IdentityAuthorizations/"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentityAuthorizations"))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"gethistoricalauthorizations"},"getHistoricalAuthorizations"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getHistoricalAuthorizations"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/ResultSet/"},(0,r.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/AuthorizationRequest/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),">",">"),(0,r.kt)("p",null,"Fetch all historical Authorization Requests for which this Signer is the target"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," supports pagination"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," uses the middlewareV2"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.size?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},"page size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.start?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},"page offset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.status?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/enums/Types/AuthorizationStatusEnum/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationStatusEnum"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"fetch only authorizations with this status. Fetches all statuses if not passed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.type?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/enums/Types/AuthTypeEnum/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthTypeEnum"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"fetch only authorizations of this type. Fetches all types if not passed")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/ResultSet/"},(0,r.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/AuthorizationRequest/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getone"},"getOne"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getOne"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/AuthorizationRequest/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),">"),(0,r.kt)("p",null,"Retrieve a single Authorization Request targeting this Signer by its ID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null," if there is no Authorization Request with the passed ID targeting this Signer"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/AuthorizationRequest/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getreceived"},"getReceived"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getReceived"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/AuthorizationRequest/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),"[]",">"),(0,r.kt)("p",null,"Fetch all pending Authorization Requests for which this Signer is the target"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.includeExpired?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"whether to include expired authorizations. Defaults to true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts.type?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/enums/Types/AuthorizationType/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationType"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"fetch only authorizations of this type. Fetches all types if not passed")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/AuthorizationRequest/"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest")),"[]",">"))}d.isMDXComponent=!0}}]);