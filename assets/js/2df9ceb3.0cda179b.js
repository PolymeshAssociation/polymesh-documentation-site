"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[57652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=l.createContext({}),c=function(e){var t=l.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(r.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(r,".").concat(m)]||u[m]||d[m]||o;return n?l.createElement(h,a(a({ref:t},p),{},{components:n})):l.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var l=n(87462),i=(n(67294),n(3905));const o={title:"Non-Fungible Tokens",description:"",subsite:"polymesh-docs"},a="Non-Fungible Tokens",s={unversionedId:"primitives/nfts",id:"primitives/nfts",title:"Non-Fungible Tokens",description:"",source:"@site/polymesh-docs/primitives/nfts.mdx",sourceDirName:"primitives",slug:"/primitives/nfts",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/nfts",draft:!1,tags:[],version:"current",frontMatter:{title:"Non-Fungible Tokens",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"MultiSig",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/multisig"},next:{title:"Portfolios and Custody",permalink:"/polymesh-documentation-site/polymesh-docs/primitives/portfolios-custody"}},r={},c=[{value:"Overview",id:"overview",level:2},{value:"NFT Collection",id:"nft-collection",level:2},{value:"Creating an NFT Collection",id:"creating-an-nft-collection",level:3},{value:"Issuing an NFT",id:"issuing-an-nft",level:3},{value:"Redeeming an NFT",id:"redeeming-an-nft",level:3},{value:"NFTs and the Settlement pallet",id:"nfts-and-the-settlement-pallet",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"non-fungible-tokens"},"Non-Fungible Tokens"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Non-Fungible Token (NFT) pallet extends the Asset pallet allowing users to create NFT collections, issue unique tokens and redeem (i.e. burn) existing non-fungible tokens. The documentation for the NFT crate can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.polymesh.live/pallet_nft/index.html"},"here"),"."),(0,i.kt)("h2",{id:"nft-collection"},"NFT Collection"),(0,i.kt)("p",null,"All non-fungible tokens are linked to a unique NFT collection, which is tied to an ",(0,i.kt)("a",{parentName:"p",href:"https://developers.polymesh.network/polymesh-docs/primitives/assets/#asset-creation"},"Asset")," and user-defined metadata."),(0,i.kt)("h3",{id:"creating-an-nft-collection"},"Creating an NFT Collection"),(0,i.kt)("p",null,"In order to successfully create an NFT collection, the dispatchable ",(0,i.kt)("a",{parentName:"p",href:"https://docs.polymesh.live/pallet_nft/struct.Module.html#arguments"},(0,i.kt)("inlineCode",{parentName:"a"},"create_nft_collection"))," must be called, and the following conditions must hold:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the asset already exists, it must be of type ",(0,i.kt)("inlineCode",{parentName:"li"},"NonFungible")," and the caller must have the proper permission for the asset. If the asset does not already exist, the ",(0,i.kt)("inlineCode",{parentName:"li"},"create_nft_collection")," dispatchable will also create one non-fungible asset using the values passed as ",(0,i.kt)("inlineCode",{parentName:"li"},"ticker")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nft_type"),"; "),(0,i.kt)("li",{parentName:"ul"},"This must be the first collection associated to the given ",(0,i.kt)("inlineCode",{parentName:"li"},"ticker")," (i.e. only one collection per ticker is allowed);"),(0,i.kt)("li",{parentName:"ul"},"The number of metadata keys associated to the collection must be less or equal to ",(0,i.kt)("a",{parentName:"li",href:"https://docs.polymesh.live/pallet_nft/trait.Config.html#associatedtype.MaxNumberOfCollectionKeys"},"MaxNumberOfCollectionKeys"),";"),(0,i.kt)("li",{parentName:"ul"},"All metadata keys must be registered prior to the creation of the collection. This implies that when using local metadata keys, one must call ",(0,i.kt)("inlineCode",{parentName:"li"},"create_asset")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"register_asset_metadata_local_type")," before calling ",(0,i.kt)("inlineCode",{parentName:"li"},"create_nft_collection"),";")),(0,i.kt)("p",null,"Once the dispatchable succeeds, a unique ID is tied to the NFT collection."),(0,i.kt)("h3",{id:"issuing-an-nft"},"Issuing an NFT"),(0,i.kt)("p",null,"After creating the collection, tokens can be issued with the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.polymesh.live/pallet_nft/struct.Module.html#arguments-1"},(0,i.kt)("inlineCode",{parentName:"a"},"issue_nft"))," extrinsic. For successfully issuing an NFT, the following conditions must hold:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An NFT collection associated with ",(0,i.kt)("inlineCode",{parentName:"li"},"ticker")," must exist;"),(0,i.kt)("li",{parentName:"ul"},"The caller must have the proper permission for the ",(0,i.kt)("inlineCode",{parentName:"li"},"Asset"),";"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"portfolio_kind")," of the caller must be valid;"),(0,i.kt)("li",{parentName:"ul"},"All metadata keys specified in the NFT collection have a value set when issuing the token. Attempting to issue a token with metadata keys not defined in the collection will also fail;")),(0,i.kt)("p",null,"Once the dispatchable succeeds, a unique non-fungible token is linked to the specified portfolio. "),(0,i.kt)("h3",{id:"redeeming-an-nft"},"Redeeming an NFT"),(0,i.kt)("p",null,"A non-fungible token can be redeemed by calling the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.polymesh.live/pallet_nft/struct.Module.html#arguments-2"},(0,i.kt)("inlineCode",{parentName:"a"},"redeem_nft"))," dispatchable.For successfully redeeming an NFT, the following conditions must hold: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An NFT collection associated with ",(0,i.kt)("inlineCode",{parentName:"li"},"ticker")," must exist;"),(0,i.kt)("li",{parentName:"ul"},"The caller must have the proper permission for the ",(0,i.kt)("inlineCode",{parentName:"li"},"Asset"),";"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"nft_id")," of the token must exist in the caller's portfolio;")),(0,i.kt)("p",null,"Once the dispatchable succeeds, the non-fungible token will no longer be linked to caller's portfolio."),(0,i.kt)("h2",{id:"nfts-and-the-settlement-pallet"},"NFTs and the Settlement pallet"),(0,i.kt)("p",null,"Polymesh's ",(0,i.kt)("a",{parentName:"p",href:"https://developers.polymesh.network/polymesh-docs/primitives/settlement/#overview"},"Settlement")," engine fully supports NFTs, and transferring of non-fungible tokens go through the same process as fungible assets. This means that all compliance rules defined for the underlying asset must be respected for a successful transfer of an NFT."))}u.isMDXComponent=!0}}]);