"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[83746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||s;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:r,o[1]=a;for(var p=2;p<s;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const s={id:"SimplePermissions",title:"Interface: SimplePermissions",sidebar_label:"SimplePermissions"},o=void 0,a={unversionedId:"interfaces/Types/SimplePermissions/SimplePermissions",id:"version-19.1.x/interfaces/Types/SimplePermissions/SimplePermissions",title:"Interface: SimplePermissions",description:"types.SimplePermissions",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/Types/SimplePermissions/SimplePermissions.md",sourceDirName:"interfaces/Types/SimplePermissions",slug:"/interfaces/Types/SimplePermissions/",permalink:"/sdk-docs/19.1.x/interfaces/Types/SimplePermissions/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"SimplePermissions",title:"Interface: SimplePermissions",sidebar_label:"SimplePermissions"},sidebar:"defaultSidebar",previous:{title:"SimpleEnumTransactionArgument",permalink:"/sdk-docs/19.1.x/interfaces/Types/SimpleEnumTransactionArgument/"},next:{title:"SingleClaimCondition",permalink:"/sdk-docs/19.1.x/interfaces/Types/SingleClaimCondition/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"assets",id:"assets",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"portfolios",id:"portfolios",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"transactions",id:"transactions",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Types/"},"types"),".SimplePermissions"),(0,r.kt)("p",null,'This represents positive permissions (i.e. only "includes"). It is used\nfor specifying procedure requirements and querying if an Account has certain\npermissions. Null values represent full permissions in that category'),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"assets"},"assets"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"assets"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Entities/Asset/"},(0,r.kt)("inlineCode",{parentName:"a"},"Asset")),"[]"),(0,r.kt)("p",null,"list of required Asset permissions"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L996"},"types/index.ts:996")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"portfolios"},"portfolios"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"portfolios"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," (",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Entities/NumberedPortfolio/"},(0,r.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio"))," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Entities/DefaultPortfolio/"},(0,r.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio")),")[]"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L1002"},"types/index.ts:1002")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactions"},"transactions"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"transactions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/Generated/Types/#txtag"},(0,r.kt)("inlineCode",{parentName:"a"},"TxTag")),"[]"),(0,r.kt)("p",null,"list of required Transaction permissions"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L1000"},"types/index.ts:1000")))}m.isMDXComponent=!0}}]);