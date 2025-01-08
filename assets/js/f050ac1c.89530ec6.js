"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[38242],{76535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"core-concepts/identity/advanced/advanced-identity-index","title":"Advanced Identity","description":"Advanced Identity Features","source":"@site/docs/200-core-concepts/030-identity/030-advanced/index.mdx","sourceDirName":"200-core-concepts/030-identity/030-advanced","slug":"/identity/advanced","permalink":"/polymesh-documentation-site/identity/advanced","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/200-core-concepts/030-identity/030-advanced/index.mdx","tags":[{"inline":true,"label":"identity","permalink":"/polymesh-documentation-site/tags/identity"},{"inline":true,"label":"advanced","permalink":"/polymesh-documentation-site/tags/advanced"}],"version":"current","frontMatter":{"title":"Advanced Identity","description":"Advanced Identity Features","id":"advanced-identity-index","slug":"/identity/advanced","sidebar_label":"Advanced Identity","tags":["identity","advanced"]},"sidebar":"docs","previous":{"title":"Permissioned Roles","permalink":"/polymesh-documentation-site/identity/roles"},"next":{"title":"Account Management","permalink":"/polymesh-documentation-site/identity/advanced/accounts-management"}}');var r=n(74848),o=n(28453),c=n(99563);const s={title:"Advanced Identity",description:"Advanced Identity Features",id:"advanced-identity-index",slug:"/identity/advanced",sidebar_label:"Advanced Identity",tags:["identity","advanced"]},a=void 0,d={},l=[];function u(e){return(0,r.jsx)(c.A,{})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},99563:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var i=n(34164),r=n(93751),o=n(56289),c=n(81430),s=n(22887),a=n(50539),d=n(9303);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:r,description:o}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(d.A,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),o&&(0,u.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t),i=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,r.$S)();return(0,u.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(v,{...e});const o=(0,r.d1)(t);return(0,u.jsx)("section",{className:(0,i.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(y,{item:e})},t)))})}},81430:(e,t,n)=>{n.d(t,{W:()=>d});var i=n(96540),r=n(40797);const o=["zero","one","two","few","many","other"];function c(e){return o.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function d(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const r=n.select(t),o=n.pluralForms.indexOf(r);return i[Math.min(o,i.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);