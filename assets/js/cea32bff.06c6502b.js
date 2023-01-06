"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[8647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=d(n),u=a,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||l;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:a,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const l={title:"Ledger Hardware Wallet",description:"",subsite:"polymesh-docs"},r=void 0,i={unversionedId:"network/ledger",id:"network/ledger",title:"Ledger Hardware Wallet",description:"",source:"@site/polymesh-docs/network/ledger.mdx",sourceDirName:"network",slug:"/network/ledger",permalink:"/polymesh-documentation-site/polymesh-docs/network/ledger",draft:!1,tags:[],version:"current",frontMatter:{title:"Ledger Hardware Wallet",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"Governance",permalink:"/polymesh-documentation-site/polymesh-docs/network/governance"},next:{title:"Permissioned Roles",permalink:"/polymesh-documentation-site/polymesh-docs/network/permissioned-roles"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installing the Ledger Application",id:"installing-the-ledger-application",level:2},{value:"Using Ledger Live",id:"using-ledger-live",level:3},{value:"Using via the Polymesh App",id:"using-via-the-polymesh-app",level:2},{value:"Loading Your Account",id:"loading-your-account",level:3},{value:"Confirming the Address on your Device",id:"confirming-the-address-on-your-device",level:3},{value:"Using the Polymesh App",id:"using-the-polymesh-app",level:4},{value:"Using via the Polymesh Wallet",id:"using-via-the-polymesh-wallet",level:2},{value:"Support",id:"support",level:2}],c={toc:d};function h(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Because of required WebUSB support, Ledger wallets currently only work on Chromium-based\nbrowsers like Brave and Chrome.")),(0,a.kt)("p",null,"The Polymesh Ledger application is compatible with both the Ledger Nano S and the Ledger Nano X devices. Ledger devices are hardware wallets that keep your secret secured on a physical device that does not expose it to your computer or the internet."),(0,a.kt)("p",null,"The Polymesh Ledger application allows you to manage Polymesh's native token, POLYX and interact with the Polymesh Mainnet blockchain."),(0,a.kt)("p",null,"NB - due to memory constraints, the version of the app for the Ledger Nano S only supports a subset of possible transactions, primarily POLYX transfers, identity and staking operations. You can see the README.md at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polymesh"},"https://github.com/Zondax/ledger-polymesh")," for full details."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Here is a list of what you will need before starting:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Ledger Nano S or a Ledger Nano X."),(0,a.kt)("li",{parentName:"ul"},"The latest firmware installed."),(0,a.kt)("li",{parentName:"ul"},"Ledger Live is installed and at version 2.1 or newer (see ",(0,a.kt)("em",{parentName:"li"},"Settings -> About")," to find out if you're up to date)."),(0,a.kt)("li",{parentName:"ul"},"A Chromium-based web browser installed to access the ",(0,a.kt)("a",{parentName:"li",href:"https://mainnet-app.polymesh.network/#/explorer"},"Polymesh App")," with."),(0,a.kt)("li",{parentName:"ul"},"Alternatively you can use the Polymesh Wallet to access your Ledger Nano Polymesh key - this can be downloaded from the Chrome Store.")),(0,a.kt)("h2",{id:"installing-the-ledger-application"},"Installing the Ledger Application"),(0,a.kt)("h3",{id:"using-ledger-live"},"Using Ledger Live"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the ",(0,a.kt)("em",{parentName:"li"},'"Manager"')," tab in Ledger Live."),(0,a.kt)("li",{parentName:"ul"},"Connect and unlock your Ledger device."),(0,a.kt)("li",{parentName:"ul"},"If asked, allow the manager on your device by pressing both buttons on the YES screen."),(0,a.kt)("li",{parentName:"ul"},"Find Polymesh in the app catalog and install it.")),(0,a.kt)("h2",{id:"using-via-the-polymesh-app"},"Using via the Polymesh App"),(0,a.kt)("h3",{id:"loading-your-account"},"Loading Your Account"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://mainnet-app.polymesh.network/#/accounts"},"Polymesh App")," already has an integration with the Ledger application so that your device will work with the browser interface after installation."),(0,a.kt)("p",null,"The functionality is currently gated behind a feature setting that you will need to turn on."),(0,a.kt)("p",null,'In order to turn on the interoperability with the Polymesh Ledger application, go to the "Settings" tab in the Polymesh App. Find the option for attaching Ledger devices and switch the option from the default "Do not attach Ledger devices" to "Attach Ledger via WebUSB".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dropdown selector for allowing Ledger connections in Polymesh Settings",src:n(9214).Z,width:"892",height:"571"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("em",{parentName:"p"},'"Save"')," to keep your settings."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For the next step, your Ledger device must be attached to your computer, and the Ledger Live app must be closed.")),(0,a.kt)("p",null,"Now when you go to the ",(0,a.kt)("em",{parentName:"p"},'"Accounts"')," tab you will see a new button that says ",(0,a.kt)("em",{parentName:"p"},'"Add via Ledger"'),". Ensure that your Ledger device is unlocked and that you have navigated into the Polymesh application, then click this button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add Ledger button in Polymesh",src:n(4662).Z,width:"149",height:"47"})),(0,a.kt)("p",null,"A popup will appear asking you to select an account and derivation path."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Picking an account and derivation path",src:n(6830).Z,width:"1073",height:"356"})),(0,a.kt)("p",null,"The first option lets you select an account. You can have multiple accounts on a single Ledger device. The second dropdown lets you pick a derivation path - think of it like a formula from which child accounts are generated. If in doubt, pick the first option for both. 0 / 0 is a good default."),(0,a.kt)("p",null,"Once you confirm your selection, depending on your browser and its security settings, you might need to confirm the USB connection through a popup like the one below when adding the Ledger device for the first time:"),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("em",{parentName:"p"},'"Unknown device"'),' line and the "Connect" button will become available.'),(0,a.kt)("p",null,"You should now be able to scroll down and find a new account on the page with the type ",(0,a.kt)("em",{parentName:"p"},'"ledger"'),"."),(0,a.kt)("p",null,"You can now use this account to interact with Polymesh on Polymesh App and it will prompt your ledger for confirmation when you initiate a transaction."),(0,a.kt)("h3",{id:"confirming-the-address-on-your-device"},"Confirming the Address on your Device"),(0,a.kt)("p",null,'On the "Accounts" tab, find your Ledger-connected account. Click on the three vertical dots at the end of the row. This will open a new menu where you can click the "Show address on hardware device" option to display the address on your device.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Options menu of an account in the Accounts screen of Polymesh",src:n(1656).Z,width:"366",height:"520"})),(0,a.kt)("p",null,"Here you can scroll through and make sure the address matches to what is displayed on the Polymesh App."),(0,a.kt)("h4",{id:"using-the-polymesh-app"},"Using the Polymesh App"),(0,a.kt)("p",null,"Once you have your account loaded on the ",(0,a.kt)("em",{parentName:"p"},'"Accounts"')," tab, it should show a row with your Ledger account. At the far right of the row, your account's POLYX balance is displayed. If you expand the balance arrow, it will show details of your balance such as locks or reserved amounts."),(0,a.kt)("p",null,"If you select your Ledger account when submitting an extrinsic, you will be prompted to sign the transaction on your Ledger. The Ledger device must be attached when submitting an extrinsic from your Ledger account."),(0,a.kt)("h2",{id:"using-via-the-polymesh-wallet"},"Using via the Polymesh Wallet"),(0,a.kt)("p",null,"Once you've downloaded the Polymesh Wallet extension from the Chrome Store, you can alternatively use the Polymesh Wallet to interact with Polymesh via your Ledger Nano device."),(0,a.kt)("p",null,"Ensure that your Ledger device is unlocked and that you have navigated into the Polymesh application."),(0,a.kt)("p",null,'If you open the Polymesh Wallet, there is an option to "Add a key" and under that an option to "Attach Ledger account".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add Ledger From Polymesh Wallet",src:n(8263).Z,width:"241",height:"206"})),(0,a.kt)("p",null,"Provided your Ledger Nano wallet is attached to your computer, and the Polymesh App is open, you should then be able to connect."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connect Ledger From Polymesh Wallet",src:n(8225).Z,width:"397",height:"598"})),(0,a.kt)("p",null,"You can then add a key from your Ledger Nano device. The first option lets you select an account. You can have multiple accounts on a single Ledger device. The second dropdown lets you pick a derivation path - think of it like a formula from which child accounts are generated. If in doubt, pick the first option for both. 0 / 0 is a good default."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Selecting Key From Polymesh Wallet",src:n(1903).Z,width:"395",height:"598"})),(0,a.kt)("p",null,"You can now interact with the Polymesh blockchain through our UIs or App as usual, or use this key to onboard to Polymesh."),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("p",null,"For support, please contact ",(0,a.kt)("a",{parentName:"p",href:"https://polymath.network/"},"Polymath"),"."),(0,a.kt)("p",null,"For code, please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polymesh/releases"},"Releases Page"),"."))}h.isMDXComponent=!0},6830:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-account-1a77055cd39faeebd741a3eb66bd461c.png"},1656:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ledger-4-8471ee3a34b60db5cc4c32e99be32a55.png"},4662:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},9214:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/select-ledger-6cf49310b330728063333500e84969d1.png"},1903:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/wallet-add-account-e401e80468bc2941990fa5608ccac007.png"},8263:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/wallet-add-key-c3b6db3e4a086f89df91c16fe00c33c4.png"},8225:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/wallet-connect-590e5ff25aabec52ac5e439131d1f44a.png"}}]);