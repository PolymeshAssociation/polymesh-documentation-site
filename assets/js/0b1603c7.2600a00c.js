"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[76294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(n),m=i,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={id:"ConditionBase",title:"Interface: ConditionBase",sidebar_label:"ConditionBase"},s=void 0,a={unversionedId:"interfaces/Types/ConditionBase/ConditionBase",id:"version-20.0.x/interfaces/Types/ConditionBase/ConditionBase",title:"Interface: ConditionBase",description:"types.ConditionBase",source:"@site/sdk-docs_versioned_docs/version-20.0.x/interfaces/Types/ConditionBase/ConditionBase.md",sourceDirName:"interfaces/Types/ConditionBase",slug:"/interfaces/Types/ConditionBase/",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ConditionBase/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"ConditionBase",title:"Interface: ConditionBase",sidebar_label:"ConditionBase"},sidebar:"defaultSidebar",previous:{title:"ComplianceRequirements",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ComplianceRequirements/"},next:{title:"ConditionCompliance",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/ConditionCompliance/"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"trustedClaimIssuers",id:"trustedclaimissuers",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/"},"types"),".ConditionBase"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"target"},"target"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"target"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/enums/Types/ConditionTarget/"},(0,i.kt)("inlineCode",{parentName:"a"},"ConditionTarget"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L417"},"types/index.ts:417")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"trustedclaimissuers"},"trustedClaimIssuers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"trustedClaimIssuers"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/TrustedClaimIssuer/"},(0,i.kt)("inlineCode",{parentName:"a"},"TrustedClaimIssuer")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"false"),">","[]"),(0,i.kt)("p",null,"if undefined, the default trusted claim issuers for the Asset are used"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/types/index.ts#L421"},"types/index.ts:421")))}c.isMDXComponent=!0}}]);