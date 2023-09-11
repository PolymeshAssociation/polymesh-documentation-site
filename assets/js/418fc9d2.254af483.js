"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[95919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=p(n),m=i,y=l["".concat(d,".").concat(m)]||l[m]||u[m]||a;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[l]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"RegisterIdentityParams",title:"Interface: RegisterIdentityParams",sidebar_label:"RegisterIdentityParams"},s=void 0,o={unversionedId:"interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams",id:"version-20.0.x/interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams",title:"Interface: RegisterIdentityParams",description:"api/procedures/types.RegisterIdentityParams",source:"@site/sdk-docs_versioned_docs/version-20.0.x/interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams.md",sourceDirName:"interfaces/API/Procedures/Types/RegisterIdentityParams",slug:"/interfaces/API/Procedures/Types/RegisterIdentityParams/",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/RegisterIdentityParams/",draft:!1,tags:[],version:"20.0.x",frontMatter:{id:"RegisterIdentityParams",title:"Interface: RegisterIdentityParams",sidebar_label:"RegisterIdentityParams"},sidebar:"defaultSidebar",previous:{title:"RedeemTokensParams",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/RedeemTokensParams/"},next:{title:"RemoveAssetRequirementParams",permalink:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/API/Procedures/Types/RemoveAssetRequirementParams/"}},d={},p=[{value:"Properties",id:"properties",level:2},{value:"createCdd",id:"createcdd",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"secondaryAccounts",id:"secondaryaccounts",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"targetAccount",id:"targetaccount",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:p};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/API/Procedures/Types/"},"api/procedures/types"),".RegisterIdentityParams"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"createcdd"},"createCdd"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"createCdd"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"(optional) also issue a CDD claim for the created DID, completing the onboarding process for the Account"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L380"},"api/procedures/types.ts:380")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"expiry"},"expiry"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"expiry"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")),(0,i.kt)("p",null,"(optional) when the generated CDD claim should expire, ",(0,i.kt)("inlineCode",{parentName:"p"},"createCdd")," must be true if specified"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L384"},"api/procedures/types.ts:384")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"secondaryaccounts"},"secondaryAccounts"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"secondaryAccounts"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/Utils/#modify"},(0,i.kt)("inlineCode",{parentName:"a"},"Modify")),"<",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/interfaces/Types/PermissionedAccount/"},(0,i.kt)("inlineCode",{parentName:"a"},"PermissionedAccount")),", { ",(0,i.kt)("inlineCode",{parentName:"p"},"permissions"),": ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/modules/Types/#permissionslike"},(0,i.kt)("inlineCode",{parentName:"a"},"PermissionsLike")),"  }",">","[]"),(0,i.kt)("p",null,"(optional) secondary accounts for the new Identity with their corresponding permissions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,i.kt)("p",null," Each Account will need to accept the generated authorizations before being linked to the Identity"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L376"},"api/procedures/types.ts:376")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"targetaccount"},"targetAccount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"targetAccount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.0.x/classes/API/Entities/Account/"},(0,i.kt)("inlineCode",{parentName:"a"},"Account"))),(0,i.kt)("p",null,"The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/91c2d2d8/src/api/procedures/types.ts#L371"},"api/procedures/types.ts:371")))}l.isMDXComponent=!0}}]);