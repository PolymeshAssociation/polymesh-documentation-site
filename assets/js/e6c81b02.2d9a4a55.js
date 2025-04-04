"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[15232],{28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}},53014:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>r});const t=JSON.parse('{"id":"core-concepts/assets/non-fungible-assets","title":"Non-Fungible Assets","description":"NFT Implementation","source":"@site/docs/200-core-concepts/040-assets/020-nft.md","sourceDirName":"200-core-concepts/040-assets","slug":"/assets/nft","permalink":"/polymesh-documentation-site/assets/nft","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/docs/200-core-concepts/040-assets/020-nft.md","tags":[{"inline":true,"label":"assets","permalink":"/polymesh-documentation-site/tags/assets"},{"inline":true,"label":"nft","permalink":"/polymesh-documentation-site/tags/nft"}],"version":"current","sidebarPosition":20,"frontMatter":{"title":"Non-Fungible Assets","description":"NFT Implementation","id":"non-fungible-assets","slug":"/assets/nft","sidebar_label":"Non-Fungible Assets","tags":["assets","nft"]},"sidebar":"docs","previous":{"title":"Fungible Assets","permalink":"/polymesh-documentation-site/assets/fungible"},"next":{"title":"Confidential Assets","permalink":"/polymesh-documentation-site/assets/confidential"}}');var i=s(74848),l=s(28453);const o={title:"Non-Fungible Assets",description:"NFT Implementation",id:"non-fungible-assets",slug:"/assets/nft",sidebar_label:"Non-Fungible Assets",tags:["assets","nft"]},a=void 0,c={},r=[{value:"Overview",id:"overview",level:2},{value:"NFT Collection",id:"nft-collection",level:2},{value:"Collection Metadata Keys",id:"collection-metadata-keys",level:3},{value:"Creating an NFT Collection",id:"creating-an-nft-collection",level:3},{value:"Issuing an NFT",id:"issuing-an-nft",level:3},{value:"Redeeming an NFT",id:"redeeming-an-nft",level:3},{value:"NFTs and the Settlement Pallet",id:"nfts-and-the-settlement-pallet",level:2},{value:"Metadata Specifications",id:"metadata-specifications",level:2},{value:"On-chain vs Off-chain Storage",id:"on-chain-vs-off-chain-storage",level:3},{value:"Standardized Global Metadata Keys",id:"standardized-global-metadata-keys",level:3},{value:"Token URI Specification",id:"token-uri-specification",level:3},{value:"URI Resolution Process",id:"uri-resolution-process",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The Non-Fungible Token (NFT) pallet extends the Asset pallet, allowing users to create NFT collections, issue unique tokens, and redeem (i.e. burn) existing non-fungible tokens. Documentation for the NFT crate can be found ",(0,i.jsx)(n.a,{href:"https://docs.polymesh.live/pallet_nft/index.html",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"nft-collection",children:"NFT Collection"}),"\n",(0,i.jsxs)(n.p,{children:["All non-fungible tokens are linked to a unique NFT collection, which is tied to an ",(0,i.jsx)(n.a,{href:"/assets/fungible#asset-creation",children:"Asset"})," and user-defined metadata."]}),"\n",(0,i.jsx)(n.h3,{id:"collection-metadata-keys",children:"Collection Metadata Keys"}),"\n",(0,i.jsxs)(n.p,{children:["Before creating an NFT collection, you must define ",(0,i.jsx)(n.a,{href:"/assets/metadata",children:"metadata"})," keys that specify the properties each NFT in the collection must have. These collection keys serve several purposes:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Required Properties"}),": Each NFT in the collection must provide values for all defined collection keys"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"On-chain Data"}),": Values are stored directly on-chain for transparency and smart optional contract usage"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Immutable Structure"}),": Collection keys and their values cannot be modified after creation of the collection or individual NFT"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To set up collection keys:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Register metadata keys before creating the NFT collection or identify appropriate standardized global metadata keys"}),"\n",(0,i.jsx)(n.li,{children:"All required collection keys must be registered before collection creation"}),"\n",(0,i.jsx)(n.li,{children:"The number of keys must not exceed MaxNumberOfCollectionKeys"}),"\n",(0,i.jsx)(n.li,{children:"Keys can be registered individually or in batches"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"creating-an-nft-collection",children:"Creating an NFT Collection"}),"\n",(0,i.jsxs)(n.p,{children:["To successfully create an NFT collection, the ",(0,i.jsx)(n.code,{children:"create_nft_collection"})," function must be called, and the following conditions must be met:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the asset already exists, it must be of type ",(0,i.jsx)(n.code,{children:"NonFungible"}),", and the caller must have the appropriate permission for the asset. If the asset does not exist, ",(0,i.jsx)(n.code,{children:"create_nft_collection"})," will also create one non-fungible asset using the values passed as ",(0,i.jsx)(n.code,{children:"nft_type"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["This must be the first collection associated with the given ",(0,i.jsx)(n.code,{children:"AssetId"})," (i.e. only one collection per Asset ID is allowed)."]}),"\n",(0,i.jsxs)(n.li,{children:["The number of metadata keys associated with the collection must be less than or equal to ",(0,i.jsx)(n.code,{children:"MaxNumberOfCollectionKeys"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["All metadata keys must be registered before the collection is created. When using local metadata keys, you must call ",(0,i.jsx)(n.code,{children:"create_asset"})," and ",(0,i.jsx)(n.code,{children:"register_asset_metadata_local_type"})," before ",(0,i.jsx)(n.code,{children:"create_nft_collection"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once the transaction succeeds, a unique ID is tied to the NFT collection, in addition to the Asset ID, which identifies the underlying asset details."}),"\n",(0,i.jsx)(n.h3,{id:"issuing-an-nft",children:"Issuing an NFT"}),"\n",(0,i.jsxs)(n.p,{children:["After creating the collection, tokens can be issued with the ",(0,i.jsx)(n.code,{children:"issue_nft"})," function. For an NFT to be issued successfully, the following conditions must hold:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["An NFT collection associated with an ",(0,i.jsx)(n.code,{children:"AssetId"})," must exist."]}),"\n",(0,i.jsxs)(n.li,{children:["The caller must have the appropriate permission for the ",(0,i.jsx)(n.code,{children:"Asset"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"portfolio_kind"})," of the caller must be valid."]}),"\n",(0,i.jsx)(n.li,{children:"All metadata keys specified in the NFT collection must have a value set when issuing the token. Issuing a token with metadata keys not defined in the collection will fail."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once the transaction succeeds, a unique non-fungible token is linked to the specified portfolio."}),"\n",(0,i.jsx)(n.h3,{id:"redeeming-an-nft",children:"Redeeming an NFT"}),"\n",(0,i.jsxs)(n.p,{children:["A non-fungible token can be redeemed by calling the ",(0,i.jsx)(n.code,{children:"redeem_nft"})," function. To successfully redeem an NFT, the following conditions must hold:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["An NFT collection associated with ",(0,i.jsx)(n.code,{children:"AssetId"})," must exist."]}),"\n",(0,i.jsxs)(n.li,{children:["The caller must have the appropriate permission for the ",(0,i.jsx)(n.code,{children:"Asset"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"nft_id"})," of the token must exist in the caller's portfolio."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once the transaction succeeds, the non-fungible token will no longer exist on chain and be removed from the caller's portfolio."}),"\n",(0,i.jsx)(n.h2,{id:"nfts-and-the-settlement-pallet",children:"NFTs and the Settlement Pallet"}),"\n",(0,i.jsxs)(n.p,{children:["Polymesh's ",(0,i.jsx)(n.a,{href:"/settlement#overview",children:"Settlement"})," engine fully supports NFTs, and transfers of non-fungible tokens follow the same process as fungible assets. This means that all compliance rules defined for the underlying asset must be respected for a successful transfer of an NFT."]}),"\n",(0,i.jsx)(n.h2,{id:"metadata-specifications",children:"Metadata Specifications"}),"\n",(0,i.jsx)(n.p,{children:"NFTs support both collection-level and individual NFT metadata. Polymesh provides standardized approaches for handling metadata:"}),"\n",(0,i.jsx)(n.h3,{id:"on-chain-vs-off-chain-storage",children:"On-chain vs Off-chain Storage"}),"\n",(0,i.jsx)(n.p,{children:"Unlike other chains and standards (e.g., EIP-721), Polymesh encourages metadata to be stored directly on-chain for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Greater transparency"}),"\n",(0,i.jsx)(n.li,{children:"Reduced reliance on external systems"}),"\n",(0,i.jsx)(n.li,{children:"Direct reference by smart contract business logic"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"However, off-chain storage options are also supported through standard URI specifications."}),"\n",(0,i.jsx)(n.h3,{id:"standardized-global-metadata-keys",children:"Standardized Global Metadata Keys"}),"\n",(0,i.jsx)(n.p,{children:"Polymesh defines the following global metadata keys to enable standardized processing by third-party dApps. Additional standardized keys can be added through the onchain governance process:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Token URI"}),": Points to off-chain JSON metadata"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Base Token URI"}),": Collection-wide base URI for token metadata"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Image URI"}),": Points to off-chain NFT image"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Base Image URI"}),": Collection-wide base URI for NFT images"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"token-uri-specification",children:"Token URI Specification"}),"\n",(0,i.jsx)(n.p,{children:"The Token URI of an NFT points to an off-chain JSON blob containing metadata. It can be specified through:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Individual NFT's ",(0,i.jsx)(n.code,{children:"tokenUri"})," global metadata key"]}),"\n",(0,i.jsxs)(n.li,{children:["Collection's ",(0,i.jsx)(n.code,{children:"baseTokenUri"})," global metadata key with optional ",(0,i.jsx)(n.code,{children:"{tokenId}"})," substitution"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Resolution process:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Use individual ",(0,i.jsx)(n.code,{children:"tokenUri"})," if set"]}),"\n",(0,i.jsxs)(n.li,{children:["Otherwise, use ",(0,i.jsx)(n.code,{children:"baseTokenUri"})," with ",(0,i.jsx)(n.code,{children:"{tokenId}"})," substitution"]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"baseTokenUri"})," lacks ",(0,i.jsx)(n.code,{children:"{tokenId}"}),", append ",(0,i.jsx)(n.code,{children:"/{tokenId}"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The referenced JSON should follow this schema:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "title": "Token Metadata",\n  "type": "object",\n  "properties": {\n    "name": {\n      "type": "string",\n      "description": "Identifies the asset this token represents"\n    },\n    "description": {\n      "type": "string",\n      "description": "Describes the asset this token represents"\n    },\n    "properties": {\n      "type": "object",\n      "description": "Arbitrary properties. Values may be strings, numbers, objects, or arrays."\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"uri-resolution-process",children:"URI Resolution Process"}),"\n",(0,i.jsx)(n.p,{children:"Both Token and Image URIs follow a consistent resolution process:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Individual URI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Check token-specific URI first (",(0,i.jsx)(n.code,{children:"tokenUri"}),"/",(0,i.jsx)(n.code,{children:"imageUri"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Use if explicitly set for the individual NFT"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example Individual URIs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"tokenUri: 'https://metadata.polymesh.network/tokens/abcdefg123';\nimageUri: 'https://images.polymesh.network/tokens/abcdefg123.png';\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Collection Base URI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fall back to collection's base URI (",(0,i.jsx)(n.code,{children:"baseTokenUri"}),"/",(0,i.jsx)(n.code,{children:"baseImageUri"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Substitute ",(0,i.jsx)(n.code,{children:"{tokenId}"})," placeholder if present"]}),"\n",(0,i.jsxs)(n.li,{children:["Append ",(0,i.jsx)(n.code,{children:"/{tokenId}"})," if no placeholder exists"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example Base URIs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'baseTokenUri: "https://metadata.polymesh.network/collection/{tokenId}"\nbaseImageUri: "https://images.polymesh.network/collection/v1/{tokenId}.png"\nbaseImageUri: "https://images.polymesh.network/collection/v1"  # expects the token id to be appended\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Collection metadata keys are immutable after collection creation"}),"\n",(0,i.jsx)(n.li,{children:"Values must be set for all the collection's metadata keys"}),"\n",(0,i.jsx)(n.li,{children:"Image and token URI resolution follows the same priority order"}),"\n",(0,i.jsx)(n.li,{children:"When using an image URI it is recommended to include the applicable file extension"}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);