"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[56406],{78247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"core-concepts/corporate-actions/corporate-actions-index","title":"Corporate Actions","description":"Corporate Action Management","source":"@site/docs/200-core-concepts/070-corporate-actions/index.mdx","sourceDirName":"200-core-concepts/070-corporate-actions","slug":"/corporate-actions","permalink":"/polymesh-documentation-site/corporate-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/200-core-concepts/070-corporate-actions/index.mdx","tags":[{"inline":true,"label":"corporate","permalink":"/polymesh-documentation-site/tags/corporate"},{"inline":true,"label":"actions","permalink":"/polymesh-documentation-site/tags/actions"}],"version":"current","frontMatter":{"title":"Corporate Actions","description":"Corporate Action Management","id":"corporate-actions-index","slug":"/corporate-actions","sidebar_label":"Corporate Actions","tags":["corporate","actions"]},"sidebar":"docs","previous":{"title":"Off-Chain Settlement","permalink":"/polymesh-documentation-site/settlement/off-chain"},"next":{"title":"Checkpoint Management","permalink":"/polymesh-documentation-site/corporate-actions/checkpoints"}}');var r=n(74848),c=n(28453),s=n(99563);const i={title:"Corporate Actions",description:"Corporate Action Management",id:"corporate-actions-index",slug:"/corporate-actions",sidebar_label:"Corporate Actions",tags:["corporate","actions"]},a=void 0,l={},u=[];function p(e){const t={code:"code",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"This is the description of what the code block changes:\n<changeDescription>\n\n\n</changeDescription>\n"})}),"\n","\n",(0,r.jsx)(s.A,{})]})}function d(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},99563:(e,t,n)=>{n.d(t,{A:()=>y});n(96540);var o=n(34164),r=n(93751),c=n(56289),s=n(81430),i=n(22887),a=n(50539),l=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=n(74848);function d(e){let{href:t,children:n}=e;return(0,p.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:c}=e;return(0,p.jsxs)(d,{href:t,children:[(0,p.jsxs)(l.A,{as:"h2",className:(0,o.A)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),c&&(0,p.jsx)("p",{className:(0,o.A)("text--truncate",u.cardDescription),title:c,children:c})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t),o=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,p.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.cC)(t.docId??void 0);return(0,p.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,p.jsx)(f,{item:t});case"category":return(0,p.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.$S)();return(0,p.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,p.jsx)(x,{...e});const c=(0,r.d1)(t);return(0,p.jsx)("section",{className:(0,o.A)("row",n),children:c.map(((e,t)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(g,{item:e})},t)))})}},81430:(e,t,n)=>{n.d(t,{W:()=>l});var o=n(96540),r=n(40797);const c=["zero","one","two","few","many","other"];function s(e){return c.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const r=n.select(t),c=n.pluralForms.indexOf(r);return o[Math.min(c,o.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(96540);const r={},c=o.createContext(r);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);