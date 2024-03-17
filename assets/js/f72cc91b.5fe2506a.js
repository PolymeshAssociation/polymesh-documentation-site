"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[98086],{95816:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=s(74848),n=s(28453);const o={sidebar_position:3,title:"Token Studio Dashboard",description:"Distribute assets with no code"},r=void 0,a={id:"distribute/with-dashboard",title:"Token Studio Dashboard",description:"Distribute assets with no code",source:"@site/docs/04-distribute/with-dashboard.mdx",sourceDirName:"04-distribute",slug:"/distribute/with-dashboard",permalink:"/polymesh-documentation-site/docs/distribute/with-dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/04-distribute/with-dashboard.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Token Studio Dashboard",description:"Distribute assets with no code"},sidebar:"defaultSidebar",previous:{title:"Distribution Process",permalink:"/polymesh-documentation-site/docs/distribute/distribution-process/"},next:{title:"With the SDK",permalink:"/polymesh-documentation-site/docs/distribute/with-sdk"}},c={},d=[{value:"Exercise",id:"exercise",level:2},{value:"Mint tokens",id:"mint-tokens",level:2},{value:"Summary",id:"summary",level:2},{value:"Links",id:"links",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{YoutubePlayer:o}=i;return o||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("YoutubePlayer",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{videoId:"IwyXvbk11nw"}),"\n",(0,t.jsx)(i.h2,{id:"exercise",children:"Exercise"}),"\n",(0,t.jsxs)(i.p,{children:["In ",(0,t.jsx)(i.em,{children:(0,t.jsx)(i.a,{href:"/docs/originate/dashboard",children:"Origination"})}),", ACME originated an asset. No shares exist yet."]}),"\n",(0,t.jsxs)(i.p,{children:["In ",(0,t.jsx)(i.em,{children:(0,t.jsx)(i.a,{href:"/docs/originate/secondary-keys",children:"Secondary keys"})}),", we created distinct accounts for Alice and ACME, and Alice created a secondary key to use when she signs on behalf of ACME as the CEO."]}),"\n",(0,t.jsx)(i.p,{children:"Now, it's time to create some shares and distribute them."}),"\n",(0,t.jsx)(i.p,{children:"To keep matters simple, let's suppose that Alice will receive 20,000 shares of a planned 100,000."}),"\n",(0,t.jsx)(i.p,{children:"In practice, the distribution agent may be external to the company that issues the security tokens. Again, to keep matters simple, ACME will serve as its own distribution agent. When the shares are minted, they are initially sent to the distribution agent."}),"\n",(0,t.jsx)(i.p,{children:"In summary:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"ACME will issue 20,000 shares;"}),"\n",(0,t.jsx)(i.li,{children:"ACME will transfer them to Alice."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"As we proceed, you will see how Polymesh assists with ensuring a compliant process."}),"\n",(0,t.jsx)(i.h2,{id:"mint-tokens",children:"Mint tokens"}),"\n",(0,t.jsxs)(i.p,{children:["Open the wallet and select ACME's primary key. Then proceed to the dashboard, ",(0,t.jsx)(i.code,{children:"Explore"})," and ",(0,t.jsx)(i.code,{children:"Token Studio"}),". The token that was originated is displayed."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"token studio",src:s(45372).A+"",width:"1048",height:"805"})}),"\n",(0,t.jsxs)(i.p,{children:["Click on ",(0,t.jsx)(i.code,{children:"Manage token"})," to see the token details."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"manage token",src:s(32825).A+"",width:"1051",height:"805"})}),"\n",(0,t.jsxs)(i.p,{children:["Open the ",(0,t.jsx)(i.code,{children:"Distribution tab"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"distribution",src:s(1843).A+"",width:"1044",height:"808"})}),"\n",(0,t.jsxs)(i.p,{children:["Click on ",(0,t.jsx)(i.code,{children:"Mint tokens"}),". Alice is to receive 20,000 tokens, so we need to mint 20,000 tokens. If more are needed for other distributions or shareholders we could, of course, mint them all now."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"mint tokens",src:s(10670).A+"",width:"1047",height:"806"})}),"\n",(0,t.jsx)(i.p,{children:"Confirm minting and sign."}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:["For brevity's sake we will not include images of each signature request. You should be accustomed to signing on-chain transactions at this point or you may wish to opt for the ",(0,t.jsx)(i.code,{children:"Don't ask me for the next 15 minutes"})," option that is available each time a signature is required."]})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"confirm minting",src:s(88450).A+"",width:"1044",height:"806"})}),"\n",(0,t.jsx)(i.p,{children:"In a few moments the minting operation is confirmed on the blockchain."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"success",src:s(44200).A+"",width:"1046",height:"805"})}),"\n",(0,t.jsxs)(i.p,{children:["When the tokens have been issued, they will be in the ",(0,t.jsx)(i.strong,{children:"custody of the distribution agent"})," which ",(0,t.jsx)(i.strong,{children:"defaults to the originator"}),", so ACME."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"agent balance",src:s(87971).A+"",width:"1047",height:"808"})}),"\n",(0,t.jsxs)(i.p,{children:["Now it is time for the distribution agent, which is ACME, to distribute the tokens. Click ",(0,t.jsx)(i.code,{children:"Distribute"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Multiple distributions can be logically grouped into a single event"}),', for example "Founder distributions". Since Alice and only Alice will receive shares, let\'s call this event "Alice\'s founder\'s shares".']}),"\n",(0,t.jsxs)(i.p,{children:["Click on ",(0,t.jsx)(i.code,{children:"+ Add new distribution event"}),", give the event a name, and click ",(0,t.jsx)(i.code,{children:"Add"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"This distribution will be to a single Polymesh account, Alice. Copy Alice's Polymesh account number (starts with 0x) from Alice's wallet. Be sure to choose Alice's personal account number because that's where ACME should send the shares. Lastly, 20,000 is the amount to send."}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["The distribution agent may receive a warning to indicate that Alice's account is not compliant at this time. This will occur if the token has compliance rules because Alice has not completed KYC for ACME. As ACME, navigate to ",(0,t.jsx)(i.code,{children:"Compliance"})," in the token studio and disable rules for primary distributions."]})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"20,000 to alice",src:s(55484).A+"",width:"1047",height:"806"})}),"\n",(0,t.jsx)(i.p,{children:"As always, confirm the transaction and sign."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"confirm distribution",src:s(87619).A+"",width:"1046",height:"805"})}),"\n",(0,t.jsx)(i.p,{children:"After a few moments, the distribution confirms."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"distribution success",src:s(38013).A+"",width:"1038",height:"798"})}),"\n",(0,t.jsxs)(i.p,{children:["Now, when the transaction has confirmed, ACME will see a ",(0,t.jsx)(i.em,{children:"pending"})," distribution. Why is this if the transaction has been confirmed?"]}),"\n",(0,t.jsxs)(i.p,{children:["Unlike most blockchains where transfers are final, a security token cannot be transferred without the consent of the recipient because the receipt may have legal or tax implications and the recipient may not agree. Therefore, the system waits for Alice to ",(0,t.jsx)(i.em,{children:"accept"})," the distribution."]}),"\n",(0,t.jsxs)(i.p,{children:["Switch to Alice's personal Polymesh account by bringing her personal primary key into focus in the wallet. Navigate to the dashboard ",(0,t.jsx)(i.code,{children:"Portfolios"})," tab where Alice's incoming transfer is displayed."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"incoming",src:s(79220).A+"",width:"1223",height:"654"})}),"\n",(0,t.jsxs)(i.p,{children:["These shares are of upmost importance to Alice and she doesn't want to hold them in her default portfolio. Instead, she wants to create a special portfolio for them - ",(0,t.jsx)(i.strong,{children:"Portfolios"})," are ",(0,t.jsx)(i.em,{children:"logical containers that help manage permission or organise holdings"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Below holdings, click ",(0,t.jsx)(i.code,{children:"Create Portfolio"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"create portfolio",src:s(34191).A+"",width:"1089",height:"583"})}),"\n",(0,t.jsx)(i.p,{children:'Create a new portfolio called "cold store".'}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"create cold store",src:s(93528).A+"",width:"1229",height:"566"})}),"\n",(0,t.jsxs)(i.p,{children:["Alice can now accept or reject the incoming transfer. Select ",(0,t.jsx)(i.code,{children:"Accept"})," next to the incoming transfer, confirm, and sign."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"accept",src:s(96471).A+"",width:"1044",height:"502"})}),"\n",(0,t.jsx)(i.p,{children:"In a moment, the shares arrive in the default portfolio."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"accepted",src:s(354).A+"",width:"1112",height:"615"})}),"\n",(0,t.jsx)(i.p,{children:"Now, it is a simple matter of moving Alice's shares from her default portfolio to her cold store portfolio."}),"\n",(0,t.jsxs)(i.p,{children:["Click the ",(0,t.jsx)(i.code,{children:"Send"})," button and specify that 20,000 ACME shares should be moved to Alice's cold store portfolio. This happens without the accept/reject flow because there is no change of ownership."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"to cold store",src:s(61236).A+"",width:"1229",height:"596"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Success!"})}),"\n",(0,t.jsx)(i.p,{children:"Alice has 20,000 ACME shares in her cold store portfolio."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"success",src:s(54315).A+"",width:"1118",height:"627"})}),"\n",(0,t.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(i.p,{children:"Let's briefly summarise:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Tokens are minted by originators and are distributed by distribution agents, which can be the same organisation;"}),"\n",(0,t.jsx)(i.li,{children:"Newly minted tokens are held by distribution agents until they are actually distributed;"}),"\n",(0,t.jsx)(i.li,{children:"Compliance rules are enforced in the transfer process and transfers will remain in a pending state until either the receiver achieves compliance with the help of a KYC service provider, or the distribution agent cancels the transfer;"}),"\n",(0,t.jsx)(i.li,{children:"Compliance rules can be disabled for primary distributions at the originator's discretion;"}),"\n",(0,t.jsx)(i.li,{children:"Transfers require the consent of the receiving party;"}),"\n",(0,t.jsx)(i.li,{children:"Users can transfer assets between their portfolios in one step. There is no need to accept the transfer because there is no change of ownership."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://portal.polymesh.network",children:"Polymesh Portal"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://tokenstudio.polymath.network/",children:"Token studio"})}),"\n"]})]})}function l(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},45372:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/02-token-363379b10c5030e3a939d1d91a5007bf.png"},32825:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/03-manage-token-083ebe3cd1d46a6722d0cb47258dc6f9.png"},1843:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/04-distribution-adc01973f4ad7d1f03bacd0a14dae8b8.png"},10670:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/05-mint-4207f2e9285a2f0f246620440d95519a.png"},88450:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/06-confirm-mint-991b6d1b5e44a7dde4fa3aa5b66dd50a.png"},44200:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/08-success-7379744df34bb633a2f1224acee46786.png"},87971:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/09-agents-balance-e439e50a2368343c65e491c90ee040f8.png"},55484:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/14-to-alice-85ed45937828c2d842715d98ae3db9dd.png"},87619:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/15-confirm-9b0bbeb6843215b76b5eccf75021e07b.png"},38013:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/16-pending-0c610212abfbcf3bb4cad673a7953620.png"},79220:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/18-incoming-7553dc0365f27058cf1f01f827530451.png"},34191:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/19-to-portolio-b91bb6a34de7b52a66ad8b95fe100627.png"},93528:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/20-create-cold-store-221c1136433eadb6772709839cb1c224.png"},96471:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/24-accepting-3f8fb4e6cff6db070b63efcec34185e1.png"},354:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/28-unassigned-3307c78473d55ae638cde7197e73db39.png"},61236:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/29-to-cold-c554344f55ad1e11e2b40171fee3650b.png"},54315:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/30-stored-732e256387310d8839a78be5ebcb2d9f.png"},28453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>a});var t=s(96540);const n={},o=t.createContext(n);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);