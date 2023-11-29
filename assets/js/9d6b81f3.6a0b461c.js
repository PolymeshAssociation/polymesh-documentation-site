"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[68781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=o,y=m["".concat(p,".").concat(u)]||m[u]||l[u]||i;return r?n.createElement(y,a(a({ref:t},d),{},{components:r})):n.createElement(y,a({ref:t},d))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},77072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));r(44996);const i={sidebar_position:1},a="Polymesh Documentation",c={unversionedId:"index",id:"index",title:"Polymesh Documentation",description:"Network",source:"@site/polymesh-docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/polymesh-documentation-site/polymesh-docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Architecture",permalink:"/polymesh-documentation-site/polymesh-docs/network/architecture"}},p={},s=[{value:"Network",id:"network",level:2},{value:"Primitives",id:"primitives",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=d("ActionCardWrapper"),l=d("ActionCard"),u={toc:s};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"polymesh-documentation"},"Polymesh Documentation"),(0,o.kt)("h2",{id:"network"},"Network"),(0,o.kt)(m,{mdxType:"ActionCardWrapper"},(0,o.kt)(l,{href:"network/architecture/",text:"Architecture",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"network/bridge/",text:"Poly to POLYX Bridge",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"network/consensus/",text:"Consensus",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"network/fees/",text:"Fees",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"network/governance/",text:"Governance",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"network/ledger/",text:"Ledger Hardware Wallet",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"network/permissioned-roles/",text:"Permissioned Roles",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"network/polyx/",text:"POLYX Token",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"network/running-a-node-docker/",text:"Running a Node with Docker",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"network/tokenomics/",text:"Tokenomics",mdxType:"ActionCard"})),(0,o.kt)("h2",{id:"primitives"},"Primitives"),(0,o.kt)(m,{mdxType:"ActionCardWrapper"},(0,o.kt)(l,{href:"primitives/assets/",text:"Assets",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"primitives/authorisations/",text:"Authorisations",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"primitives/cdd/",text:"Customer Due Diligence",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"primitives/compliance/",text:"Compliance",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"primitives/corporate-actions/",text:"Corporate Actions",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"primitives/identity/",text:"Identity",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"primitives/multisig/",text:"Multisig",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"primitives/portfolios-custody/",text:"Portfolios and Custody",mdxType:"ActionCard"}),(0,o.kt)(l,{href:"primitives/settlement/",text:"Settlement",mdxType:"ActionCard"})))}y.isMDXComponent=!0}}]);