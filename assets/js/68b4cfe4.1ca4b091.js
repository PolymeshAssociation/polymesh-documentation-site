"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[17301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"ProcedureOpts",title:"Interface: ProcedureOpts",sidebar_label:"ProcedureOpts"},a=void 0,s={unversionedId:"interfaces/Types/ProcedureOpts/ProcedureOpts",id:"version-19.1.x/interfaces/Types/ProcedureOpts/ProcedureOpts",title:"Interface: ProcedureOpts",description:"types.ProcedureOpts",source:"@site/sdk-docs_versioned_docs/version-19.1.x/interfaces/Types/ProcedureOpts/ProcedureOpts.md",sourceDirName:"interfaces/Types/ProcedureOpts",slug:"/interfaces/Types/ProcedureOpts/",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/ProcedureOpts/",draft:!1,tags:[],version:"19.1.x",frontMatter:{id:"ProcedureOpts",title:"Interface: ProcedureOpts",sidebar_label:"ProcedureOpts"},sidebar:"defaultSidebar",previous:{title:"ProcedureMethod",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/ProcedureMethod/"},next:{title:"ProtocolFees",permalink:"/polymesh-documentation-site/sdk-docs/19.1.x/interfaces/Types/ProtocolFees/"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"mortality",id:"mortality",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"nonce",id:"nonce",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"signingAccount",id:"signingaccount",level:3},{value:"Defined in",id:"defined-in-2",level:4}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/modules/Types/"},"types"),".ProcedureOpts"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"mortality"},"mortality"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"mortality"),": ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/modules/Types/#mortalityprocedureopt"},(0,o.kt)("inlineCode",{parentName:"a"},"MortalityProcedureOpt"))),(0,o.kt)("p",null,'This option allows for transactions that never expire, aka "immortal". By default, a transaction is only valid for approximately 5 minutes (250 blocks) after its construction. Allows for transaction construction to be decoupled from its submission, such as requiring manual approval for the signing or providing "at least once" guarantees.'),(0,o.kt)("p",null,"More information can be found ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-protocol-info#transaction-mortality"},"here"),". Note the Polymesh chain will ",(0,o.kt)("strong",{parentName:"p"},"never")," reap Accounts, so the risk of a replay attack is mitigated."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L1456"},"types/index.ts:1456")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"nonce"},"nonce"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"nonce"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"," ","|"," () => ",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"BigNumber"),">"),(0,o.kt)("p",null,"nonce value for signing the transaction"),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/classes/API/Entities/Account/"},"Account")," can directly fetch its current nonce by calling ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/classes/API/Entities/Account/#getcurrentnonce"},"account.getCurrentNonce"),". More information can be found at: ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce"},"https://polkadot.js.org/docs/api/cookbook/tx/#how-do-i-take-the-pending-tx-pool-into-account-in-my-nonce")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,o.kt)("p",null," the passed value can be either the nonce itself or a function that returns the nonce. This allows, for example, passing a closure that increases the returned value every time it's called, or a function that fetches the nonce from the chain or a different source"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L1449"},"types/index.ts:1449")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"signingaccount"},"signingAccount"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"signingAccount"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/19.1.x/classes/API/Entities/Account/"},(0,o.kt)("inlineCode",{parentName:"a"},"Account"))),(0,o.kt)("p",null,"Account or address of a signing key to replace the current one (for this procedure only)"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/31fdce23/src/types/index.ts#L1440"},"types/index.ts:1440")))}d.isMDXComponent=!0}}]);