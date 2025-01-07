"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[87517],{86762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"core-conecpts/polyx/polyx-index","title":"POLYX","description":"Token Economics and Utility","source":"@site/docs/200-core-conecpts/020-polyx/index.mdx","sourceDirName":"200-core-conecpts/020-polyx","slug":"/polyx","permalink":"/polymesh-documentation-site-restructure/polyx","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/200-core-conecpts/020-polyx/index.mdx","tags":[{"inline":true,"label":"polyx","permalink":"/polymesh-documentation-site-restructure/tags/polyx"},{"inline":true,"label":"token","permalink":"/polymesh-documentation-site-restructure/tags/token"}],"version":"current","frontMatter":{"title":"POLYX","description":"Token Economics and Utility","id":"polyx-index","slug":"/polyx","sidebar_label":"POLYX","tags":["polyx","token"]},"sidebar":"autogeneratedSidebar","previous":{"title":"Architecture","permalink":"/polymesh-documentation-site-restructure/architecture"},"next":{"title":"Network Fees","permalink":"/polymesh-documentation-site-restructure/polyx/fees"}}');var r=n(74848),s=n(28453),i=n(99563);const c={title:"POLYX",description:"Token Economics and Utility",id:"polyx-index",slug:"/polyx",sidebar_label:"POLYX",tags:["polyx","token"]},l=void 0,a={},u=[];function d(e){return(0,r.jsx)(i.A,{})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},99563:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var o=n(34164),r=n(93751),s=n(56289),i=n(81430),c=n(22887),l=n(50539),a=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,o.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,o.A)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),s&&(0,d.jsx)("p",{className:(0,o.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t),o=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(y,{...e});const s=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,o.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},81430:(e,t,n)=>{n.d(t,{W:()=>a});var o=n(96540),r=n(40797);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const r=n.select(t),s=n.pluralForms.indexOf(r);return o[Math.min(s,o.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);