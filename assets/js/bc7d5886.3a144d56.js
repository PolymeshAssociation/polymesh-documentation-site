"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[63034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),y=i,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||r;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},75273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"PayingAccountFees",title:"Interface: PayingAccountFees",sidebar_label:"PayingAccountFees"},o=void 0,c={unversionedId:"interfaces/Types/PayingAccountFees/PayingAccountFees",id:"interfaces/Types/PayingAccountFees/PayingAccountFees",title:"Interface: PayingAccountFees",description:"types.PayingAccountFees",source:"@site/sdk-docs/interfaces/Types/PayingAccountFees/PayingAccountFees.md",sourceDirName:"interfaces/Types/PayingAccountFees",slug:"/interfaces/Types/PayingAccountFees/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/Types/PayingAccountFees/",draft:!1,tags:[],version:"current",frontMatter:{id:"PayingAccountFees",title:"Interface: PayingAccountFees",sidebar_label:"PayingAccountFees"},sidebar:"defaultSidebar",previous:{title:"PaginationOptions",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/Types/PaginationOptions/"},next:{title:"PercentageTransferRestriction",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/Types/PercentageTransferRestriction/"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"fees",id:"fees",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"payingAccountData",id:"payingaccountdata",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/modules/Types/"},"types"),".PayingAccountFees"),(0,i.kt)("p",null,"Breakdown of the fees that will be paid by a specific Account for a transaction, along\nwith data associated to the Paying account"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"fees"},"fees"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fees"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/Types/Fees/"},(0,i.kt)("inlineCode",{parentName:"a"},"Fees"))),(0,i.kt)("p",null,"fees that will be paid by the Account"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L846"},"types/index.ts:846")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"payingaccountdata"},"payingAccountData"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"payingAccountData"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"account"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/classes/API/Entities/Account/"},(0,i.kt)("inlineCode",{parentName:"a"},"Account"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"allowance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/enums/Types/PayingAccountType/#subsidy"},(0,i.kt)("inlineCode",{parentName:"a"},"Subsidy")),"  } & { ",(0,i.kt)("inlineCode",{parentName:"p"},"balance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  } & { ",(0,i.kt)("inlineCode",{parentName:"p"},"account"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/classes/API/Entities/Account/"},(0,i.kt)("inlineCode",{parentName:"a"},"Account"))," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/enums/Types/PayingAccountType/#other"},(0,i.kt)("inlineCode",{parentName:"a"},"Other"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/enums/Types/PayingAccountType/#caller"},(0,i.kt)("inlineCode",{parentName:"a"},"Caller")),"  } & { ",(0,i.kt)("inlineCode",{parentName:"p"},"balance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }"),(0,i.kt)("p",null,"data related to the Account responsible of paying for the transaction"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L850"},"types/index.ts:850")))}d.isMDXComponent=!0}}]);