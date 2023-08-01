"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[84135],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>f});var t=n(67294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=t.createContext({}),c=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(a.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return n?t.createElement(f,o(o({ref:r},l),{},{components:n})):t.createElement(f,o({ref:r},l))}));function f(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p[u]="string"==typeof e?e:s,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98554:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var t=n(87462),s=(n(67294),n(3905));const i={id:"PermissionGroups",title:"Interface: PermissionGroups",sidebar_label:"PermissionGroups"},o=void 0,p={unversionedId:"interfaces/Types/PermissionGroups/PermissionGroups",id:"version-20.1.x/interfaces/Types/PermissionGroups/PermissionGroups",title:"Interface: PermissionGroups",description:"types.PermissionGroups",source:"@site/sdk-docs_versioned_docs/version-20.1.x/interfaces/Types/PermissionGroups/PermissionGroups.md",sourceDirName:"interfaces/Types/PermissionGroups",slug:"/interfaces/Types/PermissionGroups/",permalink:"/sdk-docs/interfaces/Types/PermissionGroups/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"PermissionGroups",title:"Interface: PermissionGroups",sidebar_label:"PermissionGroups"},sidebar:"defaultSidebar",previous:{title:"PercentageTransferRestriction",permalink:"/sdk-docs/interfaces/Types/PercentageTransferRestriction/"},next:{title:"PermissionedAccount",permalink:"/sdk-docs/interfaces/Types/PermissionedAccount/"}},a={},c=[{value:"Properties",id:"properties",level:2},{value:"custom",id:"custom",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"known",id:"known",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:c};function u(e){let{components:r,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/modules/Types/"},"types"),".PermissionGroups"),(0,s.kt)("p",null,"All Permission Groups of a specific Asset, separated by ",(0,s.kt)("inlineCode",{parentName:"p"},"known")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"custom")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"custom"},"custom"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"custom"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/CustomPermissionGroup/"},(0,s.kt)("inlineCode",{parentName:"a"},"CustomPermissionGroup")),"[]"),(0,s.kt)("h4",{id:"defined-in"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L987"},"types/index.ts:987")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"known"},"known"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("strong",{parentName:"p"},"known"),": ",(0,s.kt)("a",{parentName:"p",href:"/sdk-docs/classes/API/Entities/KnownPermissionGroup/"},(0,s.kt)("inlineCode",{parentName:"a"},"KnownPermissionGroup")),"[]"),(0,s.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/F-OBrien/polymesh-sdk/blob/012f1745/src/types/index.ts#L986"},"types/index.ts:986")))}u.isMDXComponent=!0}}]);