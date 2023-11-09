"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[33613],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={id:"EditClaimsParams",title:"Interface: EditClaimsParams",sidebar_label:"EditClaimsParams"},s=void 0,o={unversionedId:"interfaces/API/Procedures/Types/EditClaimsParams/EditClaimsParams",id:"interfaces/API/Procedures/Types/EditClaimsParams/EditClaimsParams",title:"Interface: EditClaimsParams",description:"api/procedures/types.EditClaimsParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/EditClaimsParams/EditClaimsParams.md",sourceDirName:"interfaces/API/Procedures/Types/EditClaimsParams",slug:"/interfaces/API/Procedures/Types/EditClaimsParams/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/API/Procedures/Types/EditClaimsParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"EditClaimsParams",title:"Interface: EditClaimsParams",sidebar_label:"EditClaimsParams"},sidebar:"defaultSidebar",previous:{title:"DecreaseAllowanceParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/API/Procedures/Types/DecreaseAllowanceParams/"},next:{title:"GlobalCollectionKeyInput",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/API/Procedures/Types/GlobalCollectionKeyInput/"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"claims",id:"claims",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"operation",id:"operation",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/modules/API/Procedures/Types/"},"api/procedures/types"),".EditClaimsParams"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"claims"},"claims"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"claims"),": ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/Types/ClaimTarget/"},(0,n.kt)("inlineCode",{parentName:"a"},"ClaimTarget")),"[]"),(0,n.kt)("p",null,"array of claims to be edited"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/api/procedures/types.ts#L404"},"api/procedures/types.ts:404")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"operation"},"operation"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"operation"),": ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/enums/API/Procedures/Types/ClaimOperation/#edit"},(0,n.kt)("inlineCode",{parentName:"a"},"Edit"))),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/api/procedures/types.ts#L405"},"api/procedures/types.ts:405")))}d.isMDXComponent=!0}}]);