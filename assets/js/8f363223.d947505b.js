"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[74578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=p(n),u=s,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return n?i.createElement(f,o(o({ref:t},m),{},{components:n})):i.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:s,o[1]=a;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=n(87462),s=(n(67294),n(3905));const r={id:"SimplePermissions",title:"Interface: SimplePermissions",sidebar_label:"SimplePermissions"},o=void 0,a={unversionedId:"interfaces/Types/SimplePermissions/SimplePermissions",id:"version-22.0.x/interfaces/Types/SimplePermissions/SimplePermissions",title:"Interface: SimplePermissions",description:"types.SimplePermissions",source:"@site/sdk-docs_versioned_docs/version-22.0.x/interfaces/Types/SimplePermissions/SimplePermissions.md",sourceDirName:"interfaces/Types/SimplePermissions",slug:"/interfaces/Types/SimplePermissions/",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/Types/SimplePermissions/",draft:!1,tags:[],version:"22.0.x",frontMatter:{id:"SimplePermissions",title:"Interface: SimplePermissions",sidebar_label:"SimplePermissions"},sidebar:"defaultSidebar",previous:{title:"SimpleEnumTransactionArgument",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/Types/SimpleEnumTransactionArgument/"},next:{title:"SingleClaimCondition",permalink:"/polymesh-documentation-site/sdk-docs/22.0.x/interfaces/Types/SingleClaimCondition/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"assets",id:"assets",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"portfolios",id:"portfolios",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"transactions",id:"transactions",level:3},{value:"Defined in",id:"defined-in-2",level:4}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/modules/Types/"},"types"),".SimplePermissions"),(0,s.kt)("p",null,'This represents positive permissions (i.e. only "includes"). It is used\nfor specifying procedure requirements and querying if an Account has certain\npermissions. Null values represent full permissions in that category'),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"assets"},"assets"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"assets"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/classes/API/Entities/Asset/"},(0,s.kt)("inlineCode",{parentName:"a"},"Asset")),"[]"),(0,s.kt)("p",null,"list of required Asset permissions"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1020"},"types/index.ts:1020")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"portfolios"},"portfolios"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"portfolios"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," ","|"," (",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/classes/API/Entities/NumberedPortfolio/"},(0,s.kt)("inlineCode",{parentName:"a"},"NumberedPortfolio"))," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/classes/API/Entities/DefaultPortfolio/"},(0,s.kt)("inlineCode",{parentName:"a"},"DefaultPortfolio")),")[]"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1026"},"types/index.ts:1026")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"transactions"},"transactions"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.kt)("strong",{parentName:"p"},"transactions"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/22.0.x/modules/Generated/Types/#txtag"},(0,s.kt)("inlineCode",{parentName:"a"},"TxTag")),"[]"),(0,s.kt)("p",null,"list of required Transaction permissions"),(0,s.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/95f248df/src/types/index.ts#L1024"},"types/index.ts:1024")))}d.isMDXComponent=!0}}]);