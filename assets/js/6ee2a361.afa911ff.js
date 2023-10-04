"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[10461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),k=o,f=m["".concat(s,".").concat(k)]||m[k]||u[k]||r;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},46459:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={id:"Portfolios",title:"Class: Portfolios",sidebar_label:"Portfolios"},i=void 0,l={unversionedId:"classes/API/Entities/Identity/Portfolios/Portfolios",id:"classes/API/Entities/Identity/Portfolios/Portfolios",title:"Class: Portfolios",description:"api/entities/Identity/Portfolios.Portfolios",source:"@site/sdk-docs/classes/API/Entities/Identity/Portfolios/Portfolios.md",sourceDirName:"classes/API/Entities/Identity/Portfolios",slug:"/classes/API/Entities/Identity/Portfolios/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/Identity/Portfolios/",draft:!1,tags:[],version:"current",frontMatter:{id:"Portfolios",title:"Class: Portfolios",sidebar_label:"Portfolios"},sidebar:"defaultSidebar",previous:{title:"IdentityAuthorizations",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/Identity/IdentityAuthorizations/"},next:{title:"Instruction",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/Instruction/"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"delete",id:"delete",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getCustodiedPortfolios",id:"getcustodiedportfolios",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getPortfolio",id:"getportfolio",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getPortfolios",id:"getportfolios",level:3},{value:"Returns",id:"returns-4",level:4}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/API/Entities/Identity/Portfolios/"},"api/entities/Identity/Portfolios"),".Portfolios"),(0,o.kt)("p",null,"Handles all Portfolio related functionality on the Identity side"),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/Identity/"},(0,o.kt)("inlineCode",{parentName:"a"},"Identity")),">"),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Portfolios"))))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"delete"},"delete"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"delete"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"opts?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/#genericpolymeshtransaction"},(0,o.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,o.kt)("p",null,"Delete a Portfolio by ID"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,o.kt)("p",null," required role:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Portfolio Custodian")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,o.kt)("p",null," this method is of type ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/ProcedureMethod/"},"ProcedureMethod"),", which means you can call ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/ProcedureMethod/#checkauthorization"},"delete.checkAuthorization"),"\non it to see whether the signing Account and Identity have the required roles and permissions to run it"),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"args")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Object"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"args.portfolio")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"BigNumber")," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/NumberedPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"opts?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/ProcedureOpts/"},(0,o.kt)("inlineCode",{parentName:"a"},"ProcedureOpts")))))),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/#genericpolymeshtransaction"},(0,o.kt)("inlineCode",{parentName:"a"},"GenericPolymeshTransaction")),"<",(0,o.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getcustodiedportfolios"},"getCustodiedPortfolios"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getCustodiedPortfolios"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"paginationOpts?"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/ResultSet/"},(0,o.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/NumberedPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio"))," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/DefaultPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio")),">",">"),(0,o.kt)("p",null,"Retrieve all Portfolios custodied by this Identity.\nThis only includes portfolios owned by a different Identity but custodied by this one.\nTo fetch Portfolios owned by this Identity, use ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/Identity/Portfolios/#getportfolios"},"getPortfolios")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,o.kt)("p",null," supports pagination"),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"paginationOpts?")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/PaginationOptions/"},(0,o.kt)("inlineCode",{parentName:"a"},"PaginationOptions")))))),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/ResultSet/"},(0,o.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/NumberedPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio"))," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/DefaultPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio")),">",">"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getportfolio"},"getPortfolio"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getPortfolio"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/DefaultPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio")),">"),(0,o.kt)("p",null,"Retrieve a Numbered Portfolio or the Default Portfolio if Portfolio ID is not passed"),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/DefaultPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio")),">"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getPortfolio"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/NumberedPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio")),">"),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"args")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Object"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"args.portfolioId")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"BigNumber"))))),(0,o.kt)("h4",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/NumberedPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio")),">"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getportfolios"},"getPortfolios"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getPortfolios"),"(): ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/DefaultPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio")),", ...NumberedPortfolio[]]",">"),(0,o.kt)("p",null,"Retrieve all the Portfolios owned by this Identity"),(0,o.kt)("h4",{id:"returns-4"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/DefaultPortfolio/"},(0,o.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio")),", ...NumberedPortfolio[]]",">"))}m.isMDXComponent=!0}}]);