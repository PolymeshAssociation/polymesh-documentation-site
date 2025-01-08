"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[68396],{43881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"core-concepts/compliance/compliance-index","title":"Compliance","description":"Rules and Restrictions","source":"@site/docs/200-core-concepts/050-compliance/index.mdx","sourceDirName":"200-core-concepts/050-compliance","slug":"/compliance","permalink":"/polymesh-documentation-site/compliance","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/200-core-concepts/050-compliance/index.mdx","tags":[{"inline":true,"label":"compliance","permalink":"/polymesh-documentation-site/tags/compliance"},{"inline":true,"label":"rules","permalink":"/polymesh-documentation-site/tags/rules"}],"version":"current","frontMatter":{"title":"Compliance","description":"Rules and Restrictions","id":"compliance-index","slug":"/compliance","sidebar_label":"Compliance","tags":["compliance","rules"]},"sidebar":"docs","previous":{"title":"Asset Metadata","permalink":"/polymesh-documentation-site/assets/metadata"},"next":{"title":"Authorizations","permalink":"/polymesh-documentation-site/compliance/authorizations"}}');var c=n(74848),r=n(28453),i=n(99563);const s={title:"Compliance",description:"Rules and Restrictions",id:"compliance-index",slug:"/compliance",sidebar_label:"Compliance",tags:["compliance","rules"]},l=void 0,a={},u=[];function m(e){return(0,c.jsx)(i.A,{})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(m,{...e})}):m()}},99563:(e,t,n)=>{n.d(t,{A:()=>y});n(96540);var o=n(34164),c=n(93751),r=n(56289),i=n(81430),s=n(22887),l=n(50539),a=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=n(74848);function d(e){let{href:t,children:n}=e;return(0,m.jsx)(r.A,{href:t,className:(0,o.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:c,description:r}=e;return(0,m.jsxs)(d,{href:t,children:[(0,m.jsxs)(a.A,{as:"h2",className:(0,o.A)("text--truncate",u.cardTitle),title:c,children:[n," ",c]}),r&&(0,m.jsx)("p",{className:(0,o.A)("text--truncate",u.cardDescription),title:r,children:r})]})}function h(e){let{item:t}=e;const n=(0,c.Nr)(t),o=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,m.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.cC)(t.docId??void 0);return(0,m.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(f,{item:t});case"category":return(0,m.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,c.$S)();return(0,m.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,m.jsx)(g,{...e});const r=(0,c.d1)(t);return(0,m.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(x,{item:e})},t)))})}},81430:(e,t,n)=>{n.d(t,{W:()=>a});var o=n(96540),c=n(40797);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const c=n.select(t),r=n.pluralForms.indexOf(c);return o[Math.min(r,o.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const c={},r=o.createContext(c);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);