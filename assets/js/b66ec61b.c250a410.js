"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[28221],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10783:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const a={id:"PayingAccountType",title:"Enumeration: PayingAccountType",sidebar_label:"PayingAccountType"},o=void 0,p={unversionedId:"enums/Types/PayingAccountType/PayingAccountType",id:"version-20.1.x/enums/Types/PayingAccountType/PayingAccountType",title:"Enumeration: PayingAccountType",description:"types.PayingAccountType",source:"@site/sdk-docs_versioned_docs/version-20.1.x/enums/Types/PayingAccountType/PayingAccountType.md",sourceDirName:"enums/Types/PayingAccountType",slug:"/enums/Types/PayingAccountType/",permalink:"/sdk-docs/enums/Types/PayingAccountType/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"PayingAccountType",title:"Enumeration: PayingAccountType",sidebar_label:"PayingAccountType"},sidebar:"defaultSidebar",previous:{title:"Order",permalink:"/sdk-docs/enums/Types/Order/"},next:{title:"PermissionGroupType",permalink:"/sdk-docs/enums/Types/PermissionGroupType/"}},l={},c=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Caller",id:"caller",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Other",id:"other",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Subsidy",id:"subsidy",level:3},{value:"Defined in",id:"defined-in-2",level:4}],s={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/"},"types"),".PayingAccountType"),(0,i.kt)("p",null,"Type of relationship between a paying account and a beneficiary"),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"caller"},"Caller"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Caller")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"Caller"')),(0,i.kt)("p",null,"the caller Account is responsible of paying the fees"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L770"},"types/index.ts:770")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"other"},"Other"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Other")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"Other"')),(0,i.kt)("p",null,"the paying Account is paying for a specific transaction because of\nchain-specific constraints (e.g. the caller is accepting an invitation to an Identity\nand cannot have any funds to pay for it by definition)"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L766"},"types/index.ts:766")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subsidy"},"Subsidy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Subsidy")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"Subsidy"')),(0,i.kt)("p",null,"the paying Account is currently subsidizing the caller"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L760"},"types/index.ts:760")))}u.isMDXComponent=!0}}]);