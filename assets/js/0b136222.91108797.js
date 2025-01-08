"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[57701],{64113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"getting-started/getting-started-index","title":"Getting Started Guide","description":"Quick start guide for new users","source":"@site/docs/100-getting-started/index.mdx","sourceDirName":"100-getting-started","slug":"/getting-started","permalink":"/polymesh-documentation-site/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/100-getting-started/index.mdx","tags":[{"inline":true,"label":"guide","permalink":"/polymesh-documentation-site/tags/guide"},{"inline":true,"label":"quickstart","permalink":"/polymesh-documentation-site/tags/quickstart"}],"version":"current","frontMatter":{"title":"Getting Started Guide","description":"Quick start guide for new users","id":"getting-started-index","slug":"/getting-started","sidebar_label":"Getting Started","tags":["guide","quickstart"]},"sidebar":"docs","previous":{"title":"Introduction","permalink":"/polymesh-documentation-site/"},"next":{"title":"Key Generation","permalink":"/polymesh-documentation-site/getting-started/keys"}}');var i=n(74848),s=n(28453),o=n(99563);const a={title:"Getting Started Guide",description:"Quick start guide for new users",id:"getting-started-index",slug:"/getting-started",sidebar_label:"Getting Started",tags:["guide","quickstart"]},c=void 0,l={},u=[];function d(e){return(0,i.jsx)(o.A,{})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d()}},99563:(e,t,n)=>{n.d(t,{A:()=>y});n(96540);var r=n(34164),i=n(93751),s=n(56289),o=n(81430),a=n(22887),c=n(50539),l=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function g(e){let{href:t,icon:n,title:i,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(g,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(g,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},81430:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),i=n(40797);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);