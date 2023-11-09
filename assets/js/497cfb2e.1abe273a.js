"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[79299],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(y,i(i({ref:t},l),{},{components:r})):a.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={id:"AcceptPrimaryKeyRotationParams",title:"Interface: AcceptPrimaryKeyRotationParams",sidebar_label:"AcceptPrimaryKeyRotationParams"},i=void 0,s={unversionedId:"interfaces/API/Procedures/Types/AcceptPrimaryKeyRotationParams/AcceptPrimaryKeyRotationParams",id:"interfaces/API/Procedures/Types/AcceptPrimaryKeyRotationParams/AcceptPrimaryKeyRotationParams",title:"Interface: AcceptPrimaryKeyRotationParams",description:"api/procedures/types.AcceptPrimaryKeyRotationParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/AcceptPrimaryKeyRotationParams/AcceptPrimaryKeyRotationParams.md",sourceDirName:"interfaces/API/Procedures/Types/AcceptPrimaryKeyRotationParams",slug:"/interfaces/API/Procedures/Types/AcceptPrimaryKeyRotationParams/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/API/Procedures/Types/AcceptPrimaryKeyRotationParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"AcceptPrimaryKeyRotationParams",title:"Interface: AcceptPrimaryKeyRotationParams",sidebar_label:"AcceptPrimaryKeyRotationParams"},sidebar:"defaultSidebar",previous:{title:"UniqueIdentifiers",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/API/Entities/Venue/UniqueIdentifiers/"},next:{title:"AddAssetRequirementParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/API/Procedures/Types/AddAssetRequirementParams/"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"cddAuth",id:"cddauth",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ownerAuth",id:"ownerauth",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/modules/API/Procedures/Types/"},"api/procedures/types"),".AcceptPrimaryKeyRotationParams"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"cddauth"},"cddAuth"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"cddAuth"),": ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/classes/API/Entities/AuthorizationRequest/"},(0,n.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest"))," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,n.kt)("p",null,"(optional) Authorization from a CDD service provider attesting the rotation of primary key"),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/api/procedures/types.ts#L254"},"api/procedures/types.ts:254")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"ownerauth"},"ownerAuth"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"ownerAuth"),": ",(0,n.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/classes/API/Entities/AuthorizationRequest/"},(0,n.kt)("inlineCode",{parentName:"a"},"AuthorizationRequest"))," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,n.kt)("p",null,"Authorization from the owner who initiated the change"),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/api/procedures/types.ts#L250"},"api/procedures/types.ts:250")))}d.isMDXComponent=!0}}]);