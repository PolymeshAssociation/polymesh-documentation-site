"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[67828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(o,".").concat(u)]||d[u]||c[u]||s;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={id:"FungibleSettlements",title:"Class: FungibleSettlements",sidebar_label:"FungibleSettlements"},l=void 0,i={unversionedId:"classes/API/Entities/Asset/Base/Settlements/FungibleSettlements",id:"classes/API/Entities/Asset/Base/Settlements/FungibleSettlements",title:"Class: FungibleSettlements",description:"api/entities/Asset/Base/Settlements.FungibleSettlements",source:"@site/sdk-docs/classes/API/Entities/Asset/Base/Settlements/FungibleSettlements.md",sourceDirName:"classes/API/Entities/Asset/Base/Settlements",slug:"/classes/API/Entities/Asset/Base/Settlements/FungibleSettlements",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/Base/Settlements/FungibleSettlements",draft:!1,tags:[],version:"current",frontMatter:{id:"FungibleSettlements",title:"Class: FungibleSettlements",sidebar_label:"FungibleSettlements"},sidebar:"defaultSidebar",previous:{title:"Permissions",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/Base/Permissions/"},next:{title:"NonFungibleSettlements",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/Base/Settlements/NonFungibleSettlements"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"canTransfer",id:"cantransfer",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/API/Entities/Asset/Base/Settlements/"},"api/entities/Asset/Base/Settlements"),".FungibleSettlements"),(0,r.kt)("p",null,"Handles all Asset Settlements related functionality"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BaseSettlements"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/classes/API/Entities/Asset/Fungible/FungibleAsset"},(0,r.kt)("inlineCode",{parentName:"a"},"FungibleAsset")),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"FungibleSettlements"))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"cantransfer"},"canTransfer"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"canTransfer"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Entities/Asset/Types/TransferBreakdown/"},(0,r.kt)("inlineCode",{parentName:"a"},"TransferBreakdown")),">"),(0,r.kt)("p",null,"Check whether it is possible to create a settlement instruction to transfer a certain amount of this asset between two Portfolios. Returns a breakdown of\nthe transaction containing general errors (such as insufficient balance or invalid receiver), any broken transfer restrictions, and any compliance\nfailures"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," this takes locked tokens into account. For example, if portfolio A has 1000 tokens and this function is called to check if 700 of them can be\ntransferred to portfolio B (assuming everything else checks out) the result will be success. If an instruction is created and authorized to transfer those 700 tokens,\nthey would become locked. From that point, further calls to this function would return failed results because of the funds being locked, even though they haven't been\ntransferred yet"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},"amount of tokens to transfer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.from?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#portfoliolike"},(0,r.kt)("inlineCode",{parentName:"a"},"PortfolioLike"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"sender Portfolio (optional, defaults to the signing Identity's Default Portfolio)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.to")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/modules/Types/#portfoliolike"},(0,r.kt)("inlineCode",{parentName:"a"},"PortfolioLike"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"receiver Portfolio")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.18/interfaces/API/Entities/Asset/Types/TransferBreakdown/"},(0,r.kt)("inlineCode",{parentName:"a"},"TransferBreakdown")),">"))}d.isMDXComponent=!0}}]);