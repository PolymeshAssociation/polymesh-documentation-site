"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[17601],{3905:(e,r,s)=>{s.d(r,{Zo:()=>l,kt:()=>f});var t=s(67294);function a(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function i(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function n(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?i(Object(s),!0).forEach((function(r){a(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function o(e,r){if(null==e)return{};var s,t,a=function(e,r){if(null==e)return{};var s,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)s=i[t],r.indexOf(s)>=0||(a[s]=e[s]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)s=i[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var d=t.createContext({}),u=function(e){var r=t.useContext(d),s=r;return e&&(s="function"==typeof e?e(r):n(n({},r),e)),s},l=function(e){var r=u(e.components);return t.createElement(d.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var s=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=u(s),p=a,f=m["".concat(d,".").concat(p)]||m[p]||c[p]||i;return s?t.createElement(f,n(n({ref:r},l),{},{components:s})):t.createElement(f,n({ref:r},l))}));function f(e,r){var s=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=s.length,n=new Array(i);n[0]=p;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[m]="string"==typeof e?e:a,n[1]=o;for(var u=2;u<i;u++)n[u]=s[u];return t.createElement.apply(null,n)}return t.createElement.apply(null,s)}p.displayName="MDXCreateElement"},6224:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=s(87462),a=(s(67294),s(3905));const i={id:"ModifyAssetTrustedClaimIssuersRemoveParams",title:"Interface: ModifyAssetTrustedClaimIssuersRemoveParams",sidebar_label:"ModifyAssetTrustedClaimIssuersRemoveParams"},n=void 0,o={unversionedId:"interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersRemoveParams/ModifyAssetTrustedClaimIssuersRemoveParams",id:"version-20.1.x/interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersRemoveParams/ModifyAssetTrustedClaimIssuersRemoveParams",title:"Interface: ModifyAssetTrustedClaimIssuersRemoveParams",description:"api/procedures/types.ModifyAssetTrustedClaimIssuersRemoveParams",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersRemoveParams/ModifyAssetTrustedClaimIssuersRemoveParams.md",sourceDirName:"interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersRemoveParams",slug:"/interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersRemoveParams/",permalink:"/sdk-docs/interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersRemoveParams/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"ModifyAssetTrustedClaimIssuersRemoveParams",title:"Interface: ModifyAssetTrustedClaimIssuersRemoveParams",sidebar_label:"ModifyAssetTrustedClaimIssuersRemoveParams"},sidebar:"defaultSidebar",previous:{title:"ModifyAssetTrustedClaimIssuersAddSetParams",permalink:"/sdk-docs/interfaces/API/Procedures/Types/ModifyAssetTrustedClaimIssuersAddSetParams/"},next:{title:"ModifyCaCheckpointParams",permalink:"/sdk-docs/interfaces/API/Procedures/Types/ModifyCaCheckpointParams/"}},d={},u=[{value:"Properties",id:"properties",level:2},{value:"claimIssuers",id:"claimissuers",level:3},{value:"Defined in",id:"defined-in",level:4}],l={toc:u};function m(e){let{components:r,...s}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/modules/API/Procedures/Types/"},"api/procedures/types"),".ModifyAssetTrustedClaimIssuersRemoveParams"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"claimissuers"},"claimIssuers"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"claimIssuers"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/Identity/"},(0,a.kt)("inlineCode",{parentName:"a"},"Identity")),")[]"),(0,a.kt)("p",null,"array of Identities (or DIDs) of the default claim issuers"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/api/procedures/types.ts#L606"},"api/procedures/types.ts:606")))}m.isMDXComponent=!0}}]);