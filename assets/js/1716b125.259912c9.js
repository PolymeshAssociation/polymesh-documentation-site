"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[46940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const a={sidebar_position:3,title:"Get Verified",description:"Complete customer due diligence"},r=void 0,s={unversionedId:"quickstart/verification-with-cdd",id:"quickstart/verification-with-cdd",title:"Get Verified",description:"Complete customer due diligence",source:"@site/docs/02-quickstart/verification-with-cdd.mdx",sourceDirName:"02-quickstart",slug:"/quickstart/verification-with-cdd",permalink:"/polymesh-documentation-site/docs/quickstart/verification-with-cdd",draft:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/02-quickstart/verification-with-cdd.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Get Verified",description:"Complete customer due diligence"},sidebar:"defaultSidebar",previous:{title:"Get the Wallet",permalink:"/polymesh-documentation-site/docs/quickstart/wallet"},next:{title:"Get POLYX",permalink:"/polymesh-documentation-site/docs/quickstart/quickstart-polyx"}},l={},c=[{value:"Customer Due Diligence (CDD)",id:"customer-due-diligence-cdd",level:2},{value:"Assign account",id:"assign-account",level:2},{value:"Complete the Customer Due Diligence process",id:"complete-the-customer-due-diligence-process",level:2},{value:"Testnet Mock Customer Due Diligence process",id:"testnet-mock-customer-due-diligence-process",level:3},{value:"Mainnet Customer Due Diligence process",id:"mainnet-customer-due-diligence-process",level:3},{value:"Success",id:"success",level:3},{value:"Links",id:"links",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"customer-due-diligence-cdd"},"Customer Due Diligence (CDD)"),(0,i.kt)("p",null,"Every Polymesh account must pass a ",(0,i.kt)("strong",{parentName:"p"},"minimal identity verification")," before the account is permitted to transact with regulated securities on the network. This minimal verification is called ",(0,i.kt)("strong",{parentName:"p"},"customer due diligence (CDD)"),"."),(0,i.kt)("p",null,"Verifying your identity for CDD purposes means working with a CDD service provider. They will verify the information you send and write an identity claim to the chain for you."),(0,i.kt)("h2",{id:"assign-account"},"Assign account"),(0,i.kt)("p",null,"When you first create an account it will show as an unassigned key. This means there is no onchain identity associated with it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"new account",src:n(19066).Z,width:"414",height:"614"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Assign")," button appears when you hover over an unassigned signing key. The associated link will take you to the account context tab in the Polymath ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.polymath.network/account"},"Mainnet Polymesh")," or ",(0,i.kt)("a",{parentName:"p",href:"https://testnet-dashboard.polymath.network/account"},"Testnet Polymesh")," dashboard. From here, you can select ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Account")," to link to the Polymesh onboarding portal."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"assign account",src:n(92825).Z,width:"414",height:"614"})),(0,i.kt)("p",null,"When connecting to Polymath's dashboard for the first time you will be prompted to authorize it to communicate with your Polymesh Wallet. Press ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorize")," in the wallet popup to allow the page to load."),(0,i.kt)("p",null,"Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Account")," button to bring you to the appropriate onboarding portal."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wallet Assign Key To Id",src:n(60482).Z,width:"1049",height:"446"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can skip accessing Polymath's dashboard by going directly to either of the\nfollowing links:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://onboarding.polymesh.network/"},"https://onboarding.polymesh.network/")," for Mainnet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://testnet-onboarding.polymesh.live/"},"https://testnet-onboarding.polymesh.live/")," for Testnet"))),(0,i.kt)("h2",{id:"complete-the-customer-due-diligence-process"},"Complete the Customer Due Diligence process"),(0,i.kt)("p",null,"When connecting to the onboarding portal for the first time you will be prompted to authorize it to communicate with your Polymesh Wallet. Press ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorize")," in the wallet popup to allow the page to connect and then click ",(0,i.kt)("inlineCode",{parentName:"p"},"I've set up my Polymesh Wallet")," to start the process."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Onboarding landing page",src:n(58771).Z,width:"911",height:"512"})),(0,i.kt)("p",null,'Enter your email address, select the kind of Polymesh user you are, accept the privacy policy and click the "Submit" button.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Onboarding registration",src:n(57951).Z,width:"538",height:"868"})),(0,i.kt)("p",null,"An email will be sent to your email address with a link for you to log in to the onboarding portal. Open your email and follow the link."),(0,i.kt)("p",null,"You will be presented with the below screen. Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"New Application")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Onboarding New Application",src:n(28186).Z,width:"950",height:"393"})),(0,i.kt)("h3",{id:"testnet-mock-customer-due-diligence-process"},"Testnet Mock Customer Due Diligence process"),(0,i.kt)("p",null,"(For Mainnet skip to the next ",(0,i.kt)("a",{parentName:"p",href:"#mainnet-customer-due-diligence-process"},"section"),")"),(0,i.kt)("p",null,'On testnet you will be presented with the below screen, allowing you to select the "Polymath Mock CDD" provider. Review the displayed wallet address and confirm it is the account you wish to onboard. If it is not, open the wallet extension and select the account you want to onboard as the primary key associated with your identity.'),(0,i.kt)("p",null,'When satisfied, select "Polymath Mock CDD" and then "Continue".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Choose a CDD Provider - Testnet",src:n(23734).Z,width:"520",height:"609"})),(0,i.kt)("p",null,"Another email will be sent to the address you logged in with. The email will contain a link allowing you to log into the mock CDD portal, linked to the wallet account you provided. Open the link and complete the form."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mock CDD form",src:n(76431).Z,width:"526",height:"840"})),(0,i.kt)("p",null,"Complete the form with any mock data and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Submit"),'. Submitting will initiate onchain actions to add a "decentralized ID" (DID) and a CDD claim to the account. This may take up to a minute to complete.'),(0,i.kt)("p",null,"Continue to the ",(0,i.kt)("a",{parentName:"p",href:"#success"},"Success")," section."),(0,i.kt)("h3",{id:"mainnet-customer-due-diligence-process"},"Mainnet Customer Due Diligence process"),(0,i.kt)("p",null,"On Mainnet you will be presented with a screen similar to below, allowing you to select your preferred CDD provider. Review the displayed wallet address and confirm it is the account you wish to onboard. If it is not, open the wallet extension and select the account you want to onboard as the primary key associated with your identity."),(0,i.kt)("p",null,'When satisfied, select your chosen provider and then click "Continue". An email will be sent to your email address with a link to the CDD providers KYC portal. CDD steps will vary from provider to provider. Follow the instructions from the provider to submit your application for review.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Choose a CDD Provider",src:n(78869).Z,width:"526",height:"807"})),(0,i.kt)("p",null,"Application processing time may vary depending on multiple factors. Please allow 48 hours for processing. You will receive an email confirming the outcome of the CDD process. You can also review the status of your application by visiting ",(0,i.kt)("a",{parentName:"p",href:"https://onboarding.polymesh.network/login"},"https://onboarding.polymesh.network/login")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DO NOT SUBMIT APPLICATIONS TO MULTIPLE PROVIDERS AT THE SAME TIME!")),(0,i.kt)("h3",{id:"success"},"Success"),(0,i.kt)("p",null,"When you next open the wallet extension you will see a ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/identity/#polymesh-account-what-isare-your-usernames"},"DID")," (long hexadecimal string starting with 0x) associated with your selected account at the top of your wallet with the word ",(0,i.kt)("strong",{parentName:"p"},"Verified")," next to it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wallet Verified",src:n(93757).Z,width:"414",height:"447"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations! You have completed customer due diligence.")),(0,i.kt)("p",null,"As a bonus, ",(0,i.kt)("strong",{parentName:"p"},"on testnet"),", your account will automatically be credited with POLYX allowing you to start to transact onchain."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Everyone who participates in materially-important transactions on Polymesh must complete customer due diligence (CDD), at a minimum. Asset originators can and usually will augment this minimum requirement with additional KYC requirements but they may not circumvent this minimum requirement."),(0,i.kt)("p",{parentName:"admonition"},"Since we will use the Testnet for exercises as we discover Polymesh, it is recommended that you complete your CDD now.")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dashboard.polymath.network/"},"Polymath Dashboard Mainnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://testnet-dashboard.polymath.network/"},"Polymath Dashboard Testnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://onboarding.polymesh.network/"},"Onboarding Mainnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://testnet-onboarding.polymesh.live/"},"Onboarding Testnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/kyc/know-your-customer/"},"Customer due diligence"))))}d.isMDXComponent=!0},92825:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/assign-4b22998b961ad2f097532557b8d43c32.png"},60482:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dashboard-create-account-422205bcb90f24a0d7918182b7de226f.png"},19066:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new_account-c301ca9e2c0e02d1bc0e4c69e7010c29.png"},23734:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/onboarding-choose-cdd-provider-testnet-027f4a61fcc35128acb6bfecb24f32d4.png"},78869:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/onboarding-choose-cdd-provider-58fd3f7aad3d63cab82729891dab7537.png"},58771:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/onboarding-landing-34e2a026c9290a38360341d80321ff66.png"},76431:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/onboarding-mock-cdd-eaabe8e7ff07aa6c6d28e72b4ee2a67c.png"},28186:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/onboarding-new-application-f73b33054f17fb7d60362bd2b16db360.png"},57951:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/onboarding-registration-bf03ffd06e6fc798ba74f6502746dc52.png"},93757:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/verified-b6c5824592106613eca13e6a4cade8f6.png"}}]);