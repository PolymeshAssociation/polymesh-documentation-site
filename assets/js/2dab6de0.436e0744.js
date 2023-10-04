"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[76480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=d(n),m=a,y=l["".concat(p,".").concat(m)]||l[m]||u[m]||i;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"RegisterIdentityParams",title:"Interface: RegisterIdentityParams",sidebar_label:"RegisterIdentityParams"},s=void 0,o={unversionedId:"interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams",id:"interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams",title:"Interface: RegisterIdentityParams",description:"api/procedures/types.RegisterIdentityParams",source:"@site/sdk-docs/interfaces/API/Procedures/Types/RegisterIdentityParams/RegisterIdentityParams.md",sourceDirName:"interfaces/API/Procedures/Types/RegisterIdentityParams",slug:"/interfaces/API/Procedures/Types/RegisterIdentityParams/",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/API/Procedures/Types/RegisterIdentityParams/",draft:!1,tags:[],version:"current",frontMatter:{id:"RegisterIdentityParams",title:"Interface: RegisterIdentityParams",sidebar_label:"RegisterIdentityParams"},sidebar:"defaultSidebar",previous:{title:"RegisterCustomClaimTypeParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/API/Procedures/Types/RegisterCustomClaimTypeParams/"},next:{title:"RemoveAssetRequirementParams",permalink:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/API/Procedures/Types/RemoveAssetRequirementParams/"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"createCdd",id:"createcdd",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"expiry",id:"expiry",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"secondaryAccounts",id:"secondaryaccounts",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"targetAccount",id:"targetaccount",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:d};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/API/Procedures/Types/"},"api/procedures/types"),".RegisterIdentityParams"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"createcdd"},"createCdd"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"createCdd"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"(optional) also issue a CDD claim for the created DID, completing the onboarding process for the Account"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L443"},"api/procedures/types.ts:443")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"expiry"},"expiry"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"expiry"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")),(0,a.kt)("p",null,"(optional) when the generated CDD claim should expire, ",(0,a.kt)("inlineCode",{parentName:"p"},"createCdd")," must be true if specified"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L447"},"api/procedures/types.ts:447")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"secondaryaccounts"},"secondaryAccounts"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"secondaryAccounts"),": ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/Utils/#modify"},(0,a.kt)("inlineCode",{parentName:"a"},"Modify")),"<",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/interfaces/Types/PermissionedAccount/"},(0,a.kt)("inlineCode",{parentName:"a"},"PermissionedAccount")),", { ",(0,a.kt)("inlineCode",{parentName:"p"},"permissions"),": ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/modules/Types/#permissionslike"},(0,a.kt)("inlineCode",{parentName:"a"},"PermissionsLike")),"  }",">","[]"),(0,a.kt)("p",null,"(optional) secondary accounts for the new Identity with their corresponding permissions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,a.kt)("p",null," Each Account will need to accept the generated authorizations before being linked to the Identity"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L439"},"api/procedures/types.ts:439")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"targetaccount"},"targetAccount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"targetAccount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/23.0.0-alpha.9/classes/API/Entities/Account/"},(0,a.kt)("inlineCode",{parentName:"a"},"Account"))),(0,a.kt)("p",null,"The Account that should function as the primary key of the newly created Identity. Can be ss58 encoded address or an instance of Account"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/d4e2c127f/src/api/procedures/types.ts#L434"},"api/procedures/types.ts:434")))}l.isMDXComponent=!0}}]);