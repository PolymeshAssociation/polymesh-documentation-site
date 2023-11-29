"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[20128],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>b});var n=i(67294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,s=function(e,t){if(null==e)return{};var i,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var o=n.createContext({}),d=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(i),m=s,b=p["".concat(o,".").concat(m)]||p[m]||c[m]||a;return i?n.createElement(b,r(r({ref:t},u),{},{components:i})):n.createElement(b,r({ref:t},u))}));function b(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=i.length,r=new Array(a);r[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:s,r[1]=l;for(var d=2;d<a;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},95334:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=i(87462),s=(i(67294),i(3905));const a={id:"Subsidies",title:"Class: Subsidies",sidebar_label:"Subsidies"},r=void 0,l={unversionedId:"classes/API/Entities/Subsidies/Subsidies",id:"version-20.1.x/classes/API/Entities/Subsidies/Subsidies",title:"Class: Subsidies",description:"api/entities/Subsidies.Subsidies",source:"@site/sdk-docs_versioned_docs/version-20.1.x/classes/API/Entities/Subsidies/Subsidies.md",sourceDirName:"classes/API/Entities/Subsidies",slug:"/classes/API/Entities/Subsidies/",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/Subsidies/",draft:!1,tags:[],version:"20.1.x",frontMatter:{id:"Subsidies",title:"Class: Subsidies",sidebar_label:"Subsidies"},sidebar:"defaultSidebar",previous:{title:"Portfolio",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/Portfolio/"},next:{title:"Subsidy",permalink:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/Subsidy/"}},o={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:"getBeneficiaries",id:"getbeneficiaries",level:3},{value:"Returns",id:"returns",level:4},{value:"getSubsidizer",id:"getsubsidizer",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/API/Entities/Subsidies/"},"api/entities/Subsidies"),".Subsidies"),(0,s.kt)("p",null,"Handles all Account Subsidies related functionality"),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"Namespace"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/classes/API/Entities/Account/"},(0,s.kt)("inlineCode",{parentName:"a"},"Account")),">"),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Subsidies"))))),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"getbeneficiaries"},"getBeneficiaries"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getBeneficiaries"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/"},(0,s.kt)("inlineCode",{parentName:"a"},"SubsidyWithAllowance")),"[]",">"),(0,s.kt)("p",null,"Get the list of Subsidy relationship along with their subsidized amount for which this Account is the subsidizer"),(0,s.kt)("h4",{id:"returns"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/"},(0,s.kt)("inlineCode",{parentName:"a"},"SubsidyWithAllowance")),"[]",">"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"getsubsidizer"},"getSubsidizer"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getSubsidizer"),"(): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/"},(0,s.kt)("inlineCode",{parentName:"a"},"SubsidyWithAllowance")),">"),(0,s.kt)("p",null,"Get the Subsidy relationship along with the subsidized amount for this Account is the beneficiary.\nIf this Account isn't being subsidized, return null"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Note"))),(0,s.kt)("p",null," can be subscribed to"),(0,s.kt)("h4",{id:"returns-1"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/"},(0,s.kt)("inlineCode",{parentName:"a"},"SubsidyWithAllowance")),">"),(0,s.kt)("p",null,"\u25b8 ",(0,s.kt)("strong",{parentName:"p"},"getSubsidizer"),"(",(0,s.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"),(0,s.kt)("h4",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"callback")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/Types/#subcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"SubCallback")),"<",(0,s.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,s.kt)("a",{parentName:"td",href:"/polymesh-documentation-site/sdk-docs/20.1.x/interfaces/API/Entities/Subsidy/Types/SubsidyWithAllowance/"},(0,s.kt)("inlineCode",{parentName:"a"},"SubsidyWithAllowance")),">")))),(0,s.kt)("h4",{id:"returns-2"},"Returns"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,s.kt)("a",{parentName:"p",href:"/polymesh-documentation-site/sdk-docs/20.1.x/modules/Types/#unsubcallback"},(0,s.kt)("inlineCode",{parentName:"a"},"UnsubCallback")),">"))}p.isMDXComponent=!0}}]);