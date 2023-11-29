"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[914],{3905:(e,t,s)=>{s.d(t,{Zo:()=>d,kt:()=>k});var n=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(s),u=r,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return s?n.createElement(k,i(i({ref:t},d),{},{components:s})):n.createElement(k,i({ref:t},d))}));function k(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,i=new Array(a);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=s[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},55463:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=s(87462),r=(s(67294),s(3905));const a={id:"AssetHolders",title:"Class: AssetHolders",sidebar_label:"AssetHolders"},i=void 0,o={unversionedId:"classes/API/Entities/Asset/AssetHolders/AssetHolders",id:"version-20.1.x/classes/API/Entities/Asset/AssetHolders/AssetHolders",title:"Class: AssetHolders",description:"api/entities/Asset/AssetHolders.AssetHolders",source:"@site/sdk-docs_versioned_docs/version-20.1.x/classes/API/Entities/Asset/AssetHolders/AssetHolders.md",sourceDirName:"classes/API/Entities/Asset/AssetHolders",slug:"/classes/API/Entities/Asset/AssetHolders/",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/Asset/AssetHolders/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"AssetHolders",title:"Class: AssetHolders",sidebar_label:"AssetHolders"},sidebar:"defaultSidebar",previous:{title:"Asset",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/Asset/"},next:{title:"Checkpoints",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/Asset/Checkpoints/"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],d={toc:p};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/API/Entities/Asset/AssetHolders/"},"api/entities/Asset/AssetHolders"),".AssetHolders"),(0,r.kt)("p",null,"Handles all Asset Holders related functionality"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"AssetHolders"))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"get"},"get"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"get"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"paginationOpts?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/Types/ResultSet/"},(0,r.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/Asset/Types/IdentityBalance/"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentityBalance")),">",">"),(0,r.kt)("p",null,"Retrieve all the Asset Holders with their respective balance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,r.kt)("p",null," supports pagination"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"paginationOpts?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/Types/PaginationOptions/"},(0,r.kt)("inlineCode",{parentName:"a"},"PaginationOptions")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/Types/ResultSet/"},(0,r.kt)("inlineCode",{parentName:"a"},"ResultSet")),"<",(0,r.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/Asset/Types/IdentityBalance/"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentityBalance")),">",">"))}c.isMDXComponent=!0}}]);