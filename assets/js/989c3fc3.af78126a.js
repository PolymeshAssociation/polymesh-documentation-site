"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[86294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"ClaimTarget",title:"Interface: ClaimTarget",sidebar_label:"ClaimTarget"},l=void 0,o={unversionedId:"interfaces/Types/ClaimTarget/ClaimTarget",id:"interfaces/Types/ClaimTarget/ClaimTarget",title:"Interface: ClaimTarget",description:"types.ClaimTarget",source:"@site/sdk-docs/interfaces/Types/ClaimTarget/ClaimTarget.md",sourceDirName:"interfaces/Types/ClaimTarget",slug:"/interfaces/Types/ClaimTarget/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/Types/ClaimTarget/",draft:!1,tags:[],version:"current",frontMatter:{id:"ClaimTarget",title:"Interface: ClaimTarget",sidebar_label:"ClaimTarget"},sidebar:"defaultSidebar",previous:{title:"ClaimScope",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/Types/ClaimScope/"},next:{title:"ComplexTransactionArgument",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/interfaces/Types/ComplexTransactionArgument/"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"claim",id:"claim",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"target",id:"target",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/modules/Types/"},"types"),".ClaimTarget"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"claim"},"claim"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"claim"),": ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/modules/Types/#claim"},(0,a.kt)("inlineCode",{parentName:"a"},"Claim"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L691"},"types/index.ts:691")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"expiry"},"expiry"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"expiry"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L692"},"types/index.ts:692")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"target"},"target"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"target"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.27/classes/API/Entities/Identity/"},(0,a.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/372a67e5d/src/types/index.ts#L690"},"types/index.ts:690")))}d.isMDXComponent=!0}}]);