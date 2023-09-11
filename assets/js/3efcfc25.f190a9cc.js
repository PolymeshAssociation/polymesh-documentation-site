"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[15130],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),N=i,c=m["".concat(o,".").concat(N)]||m[N]||k[N]||r;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=N;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},8222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={id:"Claims",title:"Class: Claims",sidebar_label:"Claims"},l=void 0,s={unversionedId:"classes/API/Client/Claims/Claims",id:"version-22.0.x/classes/API/Client/Claims/Claims",title:"Class: Claims",description:"api/client/Claims.Claims",source:"@site/sdk-docs_versioned_docs/version-22.0.x/classes/API/Client/Claims/Claims.md",sourceDirName:"classes/API/Client/Claims",slug:"/classes/API/Client/Claims/",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Client/Claims/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"Claims",title:"Class: Claims",sidebar_label:"Claims"},sidebar:"defaultSidebar",previous:{title:"Assets",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Client/Assets/"},next:{title:"Identities",permalink:"/polymesh-documentation-site/sdk-docs/classes/API/Client/Identities/"}},o={},d=[{value:"Methods",id:"methods",level:2},{value:"addClaims",id:"addclaims",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"editClaims",id:"editclaims",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getCddClaims",id:"getcddclaims",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getClaimScopes",id:"getclaimscopes",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getIdentitiesWithClaims",id:"getidentitieswithclaims",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"getIssuedClaims",id:"getissuedclaims",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"getTargetingClaims",id:"gettargetingclaims",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"revokeClaims",id:"revokeclaims",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/API/Client/Claims/"},"api/client/Claims"),".Claims"),(0,i.kt)("p",null,"Handles all Claims related functionality"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"addclaims"},"addClaims"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"addClaims"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("p",null,"Add claims to Identities"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," required roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Customer Due Diligence Provider: if there is at least one CDD claim in the arguments")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," this method is of type ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"addClaims.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Pick"),"<",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#modifyclaimsparams"},(0,i.kt)("inlineCode",{parentName:"a"},"ModifyClaimsParams")),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"claims"'),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,i.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"editclaims"},"editClaims"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"editClaims"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("p",null,"Edit claims associated to Identities (only the expiry date can be modified)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," required roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Customer Due Diligence Provider: if there is at least one CDD claim in the arguments")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," this method is of type ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"editClaims.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Pick"),"<",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#modifyclaimsparams"},(0,i.kt)("inlineCode",{parentName:"a"},"ModifyClaimsParams")),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"claims"'),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,i.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getcddclaims"},"getCddClaims"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getCddClaims"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ClaimData/"},(0,i.kt)("inlineCode",{parentName:"a"},"ClaimData")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/CddClaim/"},(0,i.kt)("inlineCode",{parentName:"a"},"CddClaim")),">","[]",">"),(0,i.kt)("p",null,"Retrieve the list of CDD claims for a target Identity"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.includeExpired?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whether to include expired claims. Defaults to true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.target?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Identity for which to fetch CDD claims (optional, defaults to the signing Identity)")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ClaimData/"},(0,i.kt)("inlineCode",{parentName:"a"},"ClaimData")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/CddClaim/"},(0,i.kt)("inlineCode",{parentName:"a"},"CddClaim")),">","[]",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getclaimscopes"},"getClaimScopes"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getClaimScopes"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ClaimScope/"},(0,i.kt)("inlineCode",{parentName:"a"},"ClaimScope")),"[]",">"),(0,i.kt)("p",null,"Retrieve all scopes in which claims have been made for the target Identity.\nIf the scope is an asset DID, the corresponding ticker is returned as well"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.target?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Identity for which to fetch claim scopes (optional, defaults to the signing Identity)")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ClaimScope/"},(0,i.kt)("inlineCode",{parentName:"a"},"ClaimScope")),"[]",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getidentitieswithclaims"},"getIdentitiesWithClaims"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getIdentitiesWithClaims"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ResultSet/"},(0,i.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/IdentityWithClaims/"},(0,i.kt)("inlineCode",{parentName:"a"},"IdentityWithClaims")),">",">"),(0,i.kt)("p",null,"Retrieve a list of Identities with claims associated to them. Can be filtered using parameters"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," supports pagination"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," uses the middleware V2"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.claimTypes?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/enums/Types/ClaimType/"},(0,i.kt)("inlineCode",{parentName:"a"},"ClaimType")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"types of the claims to fetch. Defaults to any type")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.includeExpired?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whether to include expired claims. Defaults to true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.scope?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/Scope/"},(0,i.kt)("inlineCode",{parentName:"a"},"Scope"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"scope of the claims to fetch. Defaults to any scope")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.size?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"page size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.start?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"page offset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.targets?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity")),")[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Identities (or Identity IDs) for which to fetch targeting claims. Defaults to all targets")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.trustedClaimIssuers?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity")),")[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Identity IDs of claim issuers. Defaults to all claim issuers")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ResultSet/"},(0,i.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/IdentityWithClaims/"},(0,i.kt)("inlineCode",{parentName:"a"},"IdentityWithClaims")),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getissuedclaims"},"getIssuedClaims"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getIssuedClaims"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ResultSet/"},(0,i.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ClaimData/"},(0,i.kt)("inlineCode",{parentName:"a"},"ClaimData")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#claim"},(0,i.kt)("inlineCode",{parentName:"a"},"Claim")),">",">",">"),(0,i.kt)("p",null,"Retrieve all claims issued by an Identity"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," supports pagination"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," uses the middlewareV2"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.includeExpired?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whether to include expired claims. Defaults to true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.size?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.start?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.target?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Identity (optional, defaults to the signing Identity)")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ResultSet/"},(0,i.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ClaimData/"},(0,i.kt)("inlineCode",{parentName:"a"},"ClaimData")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#claim"},(0,i.kt)("inlineCode",{parentName:"a"},"Claim")),">",">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gettargetingclaims"},"getTargetingClaims"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getTargetingClaims"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ResultSet/"},(0,i.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/IdentityWithClaims/"},(0,i.kt)("inlineCode",{parentName:"a"},"IdentityWithClaims")),">",">"),(0,i.kt)("p",null,"Retrieve all claims issued about an Identity, grouped by claim issuer"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," supports pagination"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," uses the middlewareV2 (optional)"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.includeExpired?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"whether to include expired claims. Defaults to true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.scope?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/Scope/"},(0,i.kt)("inlineCode",{parentName:"a"},"Scope"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.size?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.start?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.target?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Identity for which to fetch targeting claims (optional, defaults to the signing Identity)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts.trustedClaimIssuers?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/classes/API/Entities/Identity/"},(0,i.kt)("inlineCode",{parentName:"a"},"Identity")),")[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ResultSet/"},(0,i.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/IdentityWithClaims/"},(0,i.kt)("inlineCode",{parentName:"a"},"IdentityWithClaims")),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"revokeclaims"},"revokeClaims"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"revokeClaims"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,i.kt)("p",null,"Revoke claims from Identities"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," required roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Customer Due Diligence Provider: if there is at least one CDD claim in the arguments")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," this method is of type ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureMethod/#checkauthorization"},"revokeClaims.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Pick"),"<",(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/modules/API/Procedures/Types/#modifyclaimsparams"},(0,i.kt)("inlineCode",{parentName:"a"},"ModifyClaimsParams")),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"claims"'),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"opts?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/interfaces/Types/ProcedureOpts/"},(0,i.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/modules/Types/#genericpolymeshtransaction"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">",">"))}m.isMDXComponent=!0}}]);