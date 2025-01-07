"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[44041],{6217:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"core-conecpts/assets/assets-index","title":"Asset Management","description":"Asset Management on Polymesh","source":"@site/docs/200-core-conecpts/040-assets/index.mdx","sourceDirName":"200-core-conecpts/040-assets","slug":"/assets","permalink":"/polymesh-documentation-site-restructure/assets","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/200-core-conecpts/040-assets/index.mdx","tags":[{"inline":true,"label":"assets","permalink":"/polymesh-documentation-site-restructure/tags/assets"},{"inline":true,"label":"management","permalink":"/polymesh-documentation-site-restructure/tags/management"}],"version":"current","frontMatter":{"title":"Asset Management","description":"Asset Management on Polymesh","id":"assets-index","slug":"/assets","sidebar_label":"Asset Management","tags":["assets","management"]},"sidebar":"autogeneratedSidebar","previous":{"title":"Subsidized Accounts","permalink":"/polymesh-documentation-site-restructure/accounts/subsidized"},"next":{"title":"Fungible Assets","permalink":"/polymesh-documentation-site-restructure/assets/fungible"}}');var r=s(74848),o=s(28453),a=s(99563);const i={title:"Asset Management",description:"Asset Management on Polymesh",id:"assets-index",slug:"/assets",sidebar_label:"Asset Management",tags:["assets","management"]},c=void 0,l={},u=[];function m(e){return(0,r.jsx)(a.A,{})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},99563:(e,t,s)=>{s.d(t,{A:()=>y});s(96540);var n=s(34164),r=s(93751),o=s(56289),a=s(81430),i=s(22887),c=s(50539),l=s(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=s(74848);function d(e){let{href:t,children:s}=e;return(0,m.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:s})}function p(e){let{href:t,icon:s,title:r,description:o}=e;return(0,m.jsxs)(d,{href:t,children:[(0,m.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:r,children:[s," ",r]}),o&&(0,m.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const s=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,m.jsx)(p,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const s=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,m.jsx)(p,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(f,{item:t});case"category":return(0,m.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const s=(0,r.$S)();return(0,m.jsx)(y,{items:s.items,className:t})}function y(e){const{items:t,className:s}=e;if(!t)return(0,m.jsx)(x,{...e});const o=(0,r.d1)(t);return(0,m.jsx)("section",{className:(0,n.A)("row",s),children:o.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(g,{item:e})},t)))})}},81430:(e,t,s)=>{s.d(t,{W:()=>l});var n=s(96540),r=s(40797);const o=["zero","one","two","few","many","other"];function a(e){return o.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=c();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=s.select(t),o=s.pluralForms.indexOf(r);return n[Math.min(o,n.length-1)]}(s,t,e)}}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);