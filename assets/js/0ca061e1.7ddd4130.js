"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[44558],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return o?n.createElement(h,a(a({ref:t},p),{},{components:o})):n.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},24244:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=o(87462),r=(o(67294),o(3905)),i=o(44996);const a={sidebar_position:1,title:"Executing Actions",description:"Corporate actions on Polymesh",slug:"/actions/"},s=void 0,c={unversionedId:"actions/landingpage",id:"actions/landingpage",title:"Executing Actions",description:"Corporate actions on Polymesh",source:"@site/docs/06-actions/landingpage.mdx",sourceDirName:"06-actions",slug:"/actions/",permalink:"/polymesh-documentation-site/docs/actions/",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/06-actions/landingpage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Executing Actions",description:"Corporate actions on Polymesh",slug:"/actions/"},sidebar:"defaultSidebar",previous:{title:"Settlement Example App",permalink:"/polymesh-documentation-site/docs/settlement/example-app/"},next:{title:"Overview",permalink:"/polymesh-documentation-site/docs/actions/executing-actions/"}},l={},p=[{value:"Corporate actions",id:"corporate-actions",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=u("OverviewVideoBox"),m=u("OverviewBox"),h=u("ActionCardWrapper"),y=u("ActionCard"),g={toc:p};function f(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{title:"Corporate Actions",videoId:"jgucx9Z-uCo",mdxType:"OverviewVideoBox"},(0,r.kt)("p",null,"Watch Nick and Adam talking about the current state of and future plans for corporate actions on Polymesh."),(0,r.kt)("p",null,"You can watch ",(0,r.kt)("a",{parentName:"p",href:"/docs/resources/polymesh-webcast"},"the whole talk")," in one go or pick the parts related to each section of the documentation.")),(0,r.kt)("p",null,"You want to conduct your corporate actions on-chain? No problem with Polymesh! Find out all about corporate actions and how to implement them."),(0,r.kt)("p",null,"Using an example scenario, we will conduct a corporate action. With a step-by-step you will explore how corporate actions can be done on-chain using the Dashboard and the Polymesh SDK."),(0,r.kt)("p",null,"What will we explore?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"first dive")," in the overview going through all relating to on-chain corporate action possibilities"),(0,r.kt)("li",{parentName:"ul"},"Implementing a corporate action using the ",(0,r.kt)("strong",{parentName:"li"},"Dashboard")," with an introductory exercise"),(0,r.kt)("li",{parentName:"ul"},"A developer exercise focused on corporate action implementation using the ",(0,r.kt)("strong",{parentName:"li"},"SDK")),(0,r.kt)("li",{parentName:"ul"},"A self-assessment quiz to test your knowledge"),(0,r.kt)("li",{parentName:"ul"},"Links to reference documentation to dive even deeper when it comes to corporate actions on Polymesh")),(0,r.kt)("hr",null),(0,r.kt)(m,{title:"Overview: Corporate action on Polymesh",linkHref:"../actions/executing-actions/",linkText:"Overview",imgSrc:(0,i.Z)("/img/tmpAssets/illu-p-screen.svg"),mdxType:"OverviewBox"},(0,r.kt)("p",null,"Explore how you can perform corporate actions, like distributing a dividend or royalty payment to asset owners, addressing rights issues, or executing a stock split. This overview introduction gives a first glance into the opportunities and functionalities of Polymesh and corporate actions."),(0,r.kt)("p",null,"Discover how Polymesh streamlines corporate actions.")),(0,r.kt)("h3",{id:"corporate-actions"},"Corporate actions"),(0,r.kt)("p",null,"Public companies when implementing changes in regard to securities, equity, or debt, have to perform corporate actions. Polymesh can help move these from the off-chain world to become processes on-chain."),(0,r.kt)("p",null,"We will dive deeper on Polymesh and corporate actions - the possibilities and the limits - through an example scenario. We will dive deeper building on the introduction by targeting handling corporate actions on Polymesh using the Dashboard and the SDK."),(0,r.kt)(h,{mdxType:"ActionCardWrapper"},(0,r.kt)(y,{href:"../actions/token-dashboard/",text:"Corporate Actions with the Token Studio Dashboard",desc:"Distribute assets with the Polymesh Token Studio Dashboard.",mdxType:"ActionCard"}),(0,r.kt)(y,{href:"../actions/actions-sdk/",showDevSign:"true",text:"Corporate Actions with the SDK",desc:"Integrate asset distribution into your systems with the SDK.",mdxType:"ActionCard"})),(0,r.kt)(m,{title:"Dive into further resources",linkHref:"https://github.com/PolymeshAssociation/polymesh-sdk/wiki",linkText:"Explore",imgSrc:(0,i.Z)("/img/tmpAssets/illu-p-code.svg"),external:"true",mdxType:"OverviewBox"},(0,r.kt)("p",null,"A closer look at the detailed technical documentation to dive deeper?")))}f.isMDXComponent=!0}}]);