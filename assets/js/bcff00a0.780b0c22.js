"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[79049],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=i,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const a={id:"ConnectParams",title:"Interface: ConnectParams",sidebar_label:"ConnectParams"},o=void 0,l={unversionedId:"interfaces/API/Client/Polymesh/ConnectParams/ConnectParams",id:"version-20.1.x/interfaces/API/Client/Polymesh/ConnectParams/ConnectParams",title:"Interface: ConnectParams",description:"api/client/Polymesh.ConnectParams",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/API/Client/Polymesh/ConnectParams/ConnectParams.md",sourceDirName:"interfaces/API/Client/Polymesh/ConnectParams",slug:"/interfaces/API/Client/Polymesh/ConnectParams/",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Client/Polymesh/ConnectParams/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"ConnectParams",title:"Interface: ConnectParams",sidebar_label:"ConnectParams"},sidebar:"defaultSidebar",previous:{title:"PolymeshTransactionBatch",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/Base/PolymeshTransactionBatch/"},next:{title:"MultiSigDetails",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/Account/MultiSig/Types/MultiSigDetails/"}},s={},d=[{value:"Properties",id:"properties",level:2},{value:"middleware",id:"middleware",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"middlewareV2",id:"middlewarev2",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"nodeUrl",id:"nodeurl",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"signingManager",id:"signingmanager",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/API/Client/Polymesh/"},"api/client/Polymesh"),".ConnectParams"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"middleware"},"middleware"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"middleware"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/Types/MiddlewareConfig/"},(0,i.kt)("inlineCode",{parentName:"a"},"MiddlewareConfig"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,i.kt)("p",null," in favour of middlewareV2"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/client/Polymesh.ts#L36"},"api/client/Polymesh.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"middlewarev2"},"middlewareV2"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"middlewareV2"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/Types/MiddlewareConfig/"},(0,i.kt)("inlineCode",{parentName:"a"},"MiddlewareConfig"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/client/Polymesh.ts#L37"},"api/client/Polymesh.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nodeurl"},"nodeUrl"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nodeUrl"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/client/Polymesh.ts#L31"},"api/client/Polymesh.ts:31")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signingmanager"},"signingManager"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"signingManager"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SigningManager")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/07a4c5b0/src/api/client/Polymesh.ts#L32"},"api/client/Polymesh.ts:32")))}p.isMDXComponent=!0}}]);