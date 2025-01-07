"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[57017],{35384:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"core-conecpts/portfolios/portfolios-index","title":"Portfolio Management","description":"Portfolio System","source":"@site/docs/200-core-conecpts/080-portfolios/index.mdx","sourceDirName":"200-core-conecpts/080-portfolios","slug":"/portfolios","permalink":"/polymesh-documentation-site-restructure/portfolios","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/200-core-conecpts/080-portfolios/index.mdx","tags":[{"inline":true,"label":"portfolio","permalink":"/polymesh-documentation-site-restructure/tags/portfolio"},{"inline":true,"label":"management","permalink":"/polymesh-documentation-site-restructure/tags/management"}],"version":"current","frontMatter":{"title":"Portfolio Management","description":"Portfolio System","id":"portfolios-index","slug":"/portfolios","sidebar_label":"Portfolio Management","tags":["portfolio","management"]},"sidebar":"autogeneratedSidebar","previous":{"title":"On-Chain Voting","permalink":"/polymesh-documentation-site-restructure/corporate-actions/on-chain-voting"},"next":{"title":"Custody Management","permalink":"/polymesh-documentation-site-restructure/portfolios/custody"}}');var r=o(74848),s=o(28453),i=o(99563);const l={title:"Portfolio Management",description:"Portfolio System",id:"portfolios-index",slug:"/portfolios",sidebar_label:"Portfolio Management",tags:["portfolio","management"]},c=void 0,a={},u=[];function m(e){return(0,r.jsx)(i.A,{})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},99563:(e,t,o)=>{o.d(t,{A:()=>y});o(96540);var n=o(34164),r=o(93751),s=o(56289),i=o(81430),l=o(22887),c=o(50539),a=o(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=o(74848);function d(e){let{href:t,children:o}=e;return(0,m.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:o})}function p(e){let{href:t,icon:o,title:r,description:s}=e;return(0,m.jsxs)(d,{href:t,children:[(0,m.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:r,children:[o," ",r]}),s&&(0,m.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const o=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return o?(0,m.jsx)(p,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const o=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,m.jsx)(p,{href:t.href,icon:o,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(h,{item:t});case"category":return(0,m.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const o=(0,r.$S)();return(0,m.jsx)(y,{items:o.items,className:t})}function y(e){const{items:t,className:o}=e;if(!t)return(0,m.jsx)(x,{...e});const s=(0,r.d1)(t);return(0,m.jsx)("section",{className:(0,n.A)("row",o),children:s.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(g,{item:e})},t)))})}},81430:(e,t,o)=>{o.d(t,{W:()=>a});var n=o(96540),r=o(40797);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(t,o)=>function(e,t,o){const n=e.split("|");if(1===n.length)return n[0];n.length>o.pluralForms.length&&console.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=o.select(t),s=o.pluralForms.indexOf(r);return n[Math.min(s,n.length-1)]}(o,t,e)}}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>l});var n=o(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);