"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[30777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={title:"Consensus",description:"",subsite:"polymesh-docs"},i=void 0,a={unversionedId:"network/consensus",id:"network/consensus",title:"Consensus",description:"",source:"@site/polymesh-docs/network/consensus.mdx",sourceDirName:"network",slug:"/network/consensus",permalink:"/polymesh-documentation-site/polymesh-docs/network/consensus",draft:!1,tags:[],version:"current",frontMatter:{title:"Consensus",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"POLY to POLYX Bridge",permalink:"/polymesh-documentation-site/polymesh-docs/network/bridge"},next:{title:"Fees",permalink:"/polymesh-documentation-site/polymesh-docs/network/fees"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Polymesh provides protocol layer logic on top of a distributed storage ledger."),(0,o.kt)("p",null,"Updates to the ledger are processed across a decentralised network of Polymesh nodes."),(0,o.kt)("p",null,"Polymesh is a permissioned network, and in order to run an operator node, the associated identity must be permissioned through an on-chain ",(0,o.kt)("a",{parentName:"p",href:"../governance/"},"governance process"),"."),(0,o.kt)("p",null,"Polymesh is built on top of Substrate, and uses BABE block production with a GRANDPA finality gadget. This separates block production from the block finalisation process efficiently, allowing the blockchain to have a high throughput and rapid non-probabilistic finalisation."),(0,o.kt)("p",null,"Polymesh operators are real world entities, typically regulated or licensed in their home jurisdiction. Requiring a diverse set of high reputation organisations to reach byzantine consensus offers an additional strong security guarantee to the network."),(0,o.kt)("p",null,"For more details on Consensus see:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/learn/consensus/"},"https://docs.substrate.io/learn/consensus/")))}u.isMDXComponent=!0}}]);