"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[33154],{37433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"developer-resources/integration/node/node-index","title":"Node Operation","description":"Running a Polymesh node","source":"@site/docs/300-developer-resources/020-integration/node/index.mdx","sourceDirName":"300-developer-resources/020-integration/node","slug":"/development/node","permalink":"/polymesh-documentation-site/development/node","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/300-developer-resources/020-integration/node/index.mdx","tags":[{"inline":true,"label":"node","permalink":"/polymesh-documentation-site/tags/node"},{"inline":true,"label":"operation","permalink":"/polymesh-documentation-site/tags/operation"}],"version":"current","frontMatter":{"title":"Node Operation","description":"Running a Polymesh node","id":"node-index","slug":"/development/node","sidebar_label":"Node Operation","tags":["node","operation"]},"sidebar":"docs","previous":{"title":"Integration Guides","permalink":"/polymesh-documentation-site/development/integration"},"next":{"title":"Docker Node","permalink":"/polymesh-documentation-site/node/docker"}}');var r=n(74848),i=n(28453),s=n(99563);const l={title:"Node Operation",description:"Running a Polymesh node",id:"node-index",slug:"/development/node",sidebar_label:"Node Operation",tags:["node","operation"]},c=void 0,a={},d=[];function u(e){return(0,r.jsx)(s.A,{})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},99563:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var o=n(34164),r=n(93751),i=n(56289),s=n(81430),l=n(22887),c=n(50539),a=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(i.A,{href:t,className:(0,o.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:r,description:i}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,o.A)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),i&&(0,u.jsx)("p",{className:(0,o.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t),o=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.$S)();return(0,u.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const i=(0,r.d1)(t);return(0,u.jsx)("section",{className:(0,o.A)("row",n),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},81430:(e,t,n)=>{n.d(t,{W:()=>a});var o=n(96540),r=n(40797);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const r=n.select(t),i=n.pluralForms.indexOf(r);return o[Math.min(i,o.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);