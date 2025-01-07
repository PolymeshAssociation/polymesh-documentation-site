"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[20880],{51159:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"interfaces/API/Client/Types/PolkadotConfig/PolkadotConfig","title":"Interface: PolkadotConfig","description":"api/client/types.PolkadotConfig","source":"@site/sdk-docs_versioned_docs/version-27.1.x/interfaces/API/Client/Types/PolkadotConfig/PolkadotConfig.md","sourceDirName":"interfaces/API/Client/Types/PolkadotConfig","slug":"/interfaces/API/Client/Types/PolkadotConfig/","permalink":"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Client/Types/PolkadotConfig/","draft":false,"unlisted":false,"tags":[],"version":"27.1.x","frontMatter":{"id":"PolkadotConfig","title":"Interface: PolkadotConfig","sidebar_label":"PolkadotConfig"},"sidebar":"autogeneratedSidebar","previous":{"title":"NetworkProperties","permalink":"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Client/Types/NetworkProperties/"},"next":{"title":"ProtocolFees","permalink":"/polymesh-documentation-site-restructure/sdk-docs/interfaces/API/Client/Types/ProtocolFees/"}}');var i=t(74848),o=t(28453);const d={id:"PolkadotConfig",title:"Interface: PolkadotConfig",sidebar_label:"PolkadotConfig"},r=void 0,l={},a=[{value:"Properties",id:"properties",level:2},{value:"metadata",id:"metadata",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"noInitWarn",id:"noinitwarn",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"typesBundle",id:"typesbundle",level:3},{value:"Defined in",id:"defined-in-2",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/polymesh-documentation-site-restructure/sdk-docs/modules/API/Client/Types/",children:"api/client/types"}),".PolkadotConfig"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"metadata",children:"metadata"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.code,{children:"Optional"})," ",(0,i.jsx)(n.strong,{children:"metadata"}),": ",(0,i.jsx)(n.code,{children:"Record"}),"<",(0,i.jsx)(n.code,{children:"string"}),", `0x${string}`>"]}),"\n",(0,i.jsx)(n.p,{children:"provide a locally saved metadata file for a modestly fast startup time (e.g. 1 second when provided, 1.5 seconds without)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Note"})})}),"\n",(0,i.jsx)(n.p,{children:"if not provided the SDK will read the needed data from chain during startup"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Note"})})}),"\n",(0,i.jsx)(n.p,{children:"format is key as genesis hash and spec version and the value hex encoded chain metadata"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Example"})})}),"\n",(0,i.jsx)(n.p,{children:"creating valid metadata"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const meta = _polkadotApi.runtimeMetadata.toHex();\nconst genesisHash = _polkadotApi.genesisHash;\nconst specVersion = _polkadotApi.runtimeVersion.specVersion;\n\nconst metadata = {\n [`${genesisHash}-${specVersion}`]: meta,\n};\n"})}),"\n",(0,i.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/client/types.ts#L161",children:"api/client/types.ts:161"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"noinitwarn",children:"noInitWarn"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.code,{children:"Optional"})," ",(0,i.jsx)(n.strong,{children:"noInitWarn"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n",(0,i.jsxs)(n.p,{children:["set to ",(0,i.jsx)(n.code,{children:"true"})," to disable polkadot start up warnings"]}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/client/types.ts#L166",children:"api/client/types.ts:166"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"typesbundle",children:"typesBundle"}),"\n",(0,i.jsxs)(n.p,{children:["\u2022 ",(0,i.jsx)(n.code,{children:"Optional"})," ",(0,i.jsx)(n.strong,{children:"typesBundle"}),": ",(0,i.jsx)(n.code,{children:"OverrideBundleType"})]}),"\n",(0,i.jsx)(n.p,{children:"allows for types to be provided for multiple chain specs at once"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"Note"})})}),"\n",(0,i.jsx)(n.p,{children:"shouldn't be needed for most use cases"}),"\n",(0,i.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/PolymeshAssociation/polymesh-sdk/blob/0dbd0ebd0/src/api/client/types.ts#L173",children:"api/client/types.ts:173"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);