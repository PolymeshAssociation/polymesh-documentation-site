"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[26498],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=i.createContext({}),f=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=f(t.components);return i.createElement(c.Provider,{value:e},t.children)},u="mdxType",l={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,c=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),u=f(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||l[d]||s;return n?i.createElement(m,o(o({ref:e},p),{},{components:n})):i.createElement(m,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[u]="string"==typeof t?t:r,o[1]=a;for(var f=2;f<s;f++)o[f]=n[f];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58369:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>f});var i=n(87462),r=(n(67294),n(3905));const s={id:"InstructionAffirmation",title:"Interface: InstructionAffirmation",sidebar_label:"InstructionAffirmation"},o=void 0,a={unversionedId:"interfaces/API/Entities/Instruction/Types/InstructionAffirmation/InstructionAffirmation",id:"version-19.1.x/interfaces/API/Entities/Instruction/Types/InstructionAffirmation/InstructionAffirmation",title:"Interface: InstructionAffirmation",description:"api/entities/Instruction/types.InstructionAffirmation",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/API/Entities/Instruction/Types/InstructionAffirmation/InstructionAffirmation.md",sourceDirName:"interfaces/API/Entities/Instruction/Types/InstructionAffirmation",slug:"/interfaces/API/Entities/Instruction/Types/InstructionAffirmation/",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/Instruction/Types/InstructionAffirmation/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"InstructionAffirmation",title:"Interface: InstructionAffirmation",sidebar_label:"InstructionAffirmation"},sidebar:"defaultSidebar",previous:{title:"UniqueIdentifiers",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/Identity/UniqueIdentifiers/"},next:{title:"Leg",permalink:"/sdk-docs/19.1.x/interfaces/API/Entities/Instruction/Types/Leg/"}},c={},f=[{value:"Properties",id:"properties",level:2},{value:"identity",id:"identity",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"status",id:"status",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:f};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/modules/API/Entities/Instruction/Types/"},"api/entities/Instruction/types"),".InstructionAffirmation"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"identity"},"identity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"identity"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/classes/API/Entities/Identity/"},(0,r.kt)("inlineCode",{parentName:"a"},"Identity"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Instruction/types.ts#L60"},"api/entities/Instruction/types.ts:60")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"status"),": ",(0,r.kt)("a",{parentName:"p",href:"/sdk-docs/19.1.x/enums/API/Entities/Instruction/Types/AffirmationStatus/"},(0,r.kt)("inlineCode",{parentName:"a"},"AffirmationStatus"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/api/entities/Instruction/types.ts#L61"},"api/entities/Instruction/types.ts:61")))}u.isMDXComponent=!0}}]);