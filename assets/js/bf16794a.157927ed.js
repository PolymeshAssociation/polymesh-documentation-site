"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[40659],{92636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"primitives/assets/nfts","title":"Non-Fungible Assets","description":"","source":"@site/polymesh-docs/primitives/assets/nfts.mdx","sourceDirName":"primitives/assets","slug":"/primitives/assets/nfts","permalink":"/polymesh-documentation-site/polymesh-docs/primitives/assets/nfts","draft":false,"unlisted":false,"editUrl":"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/polymesh-docs/primitives/assets/nfts.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Non-Fungible Assets","description":"","subsite":"polymesh-docs"},"sidebar":"defaultSidebar","previous":{"title":"Fungible Assets","permalink":"/polymesh-documentation-site/polymesh-docs/primitives/assets/fungible_assets"},"next":{"title":"Settlement","permalink":"/polymesh-documentation-site/polymesh-docs/primitives/settlement/"}}');var s=t(74848),l=t(28453);const o={sidebar_position:2,title:"Non-Fungible Assets",description:"",subsite:"polymesh-docs"},a=void 0,d={},c=[{value:"Overview",id:"overview",level:2},{value:"NFT Collection",id:"nft-collection",level:2},{value:"Creating an NFT Collection",id:"creating-an-nft-collection",level:3},{value:"Issuing an NFT",id:"issuing-an-nft",level:3},{value:"Redeeming an NFT",id:"redeeming-an-nft",level:3},{value:"NFTs and the Settlement Pallet",id:"nfts-and-the-settlement-pallet",level:2},{value:"Metadata Schema",id:"metadata-schema",level:2},{value:"Token URI",id:"token-uri",level:3},{value:"Image URI",id:"image-uri",level:3}];function r(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The Non-Fungible Token (NFT) pallet extends the Asset pallet, allowing users to create NFT collections, issue unique tokens, and redeem (i.e. burn) existing non-fungible tokens. Documentation for the NFT crate can be found ",(0,s.jsx)(n.a,{href:"https://docs.polymesh.live/pallet_nft/index.html",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"nft-collection",children:"NFT Collection"}),"\n",(0,s.jsxs)(n.p,{children:["All non-fungible tokens are linked to a unique NFT collection, which is tied to an ",(0,s.jsx)(n.a,{href:"https://developers.polymesh.network/polymesh-docs/primitives/assets/#asset-creation",children:"Asset"})," and user-defined metadata."]}),"\n",(0,s.jsx)(n.h3,{id:"creating-an-nft-collection",children:"Creating an NFT Collection"}),"\n",(0,s.jsxs)(n.p,{children:["To successfully create an NFT collection, the dispatchable ",(0,s.jsx)(n.a,{href:"https://docs.polymesh.live/pallet_nft/struct.Module.html#arguments",children:(0,s.jsx)(n.code,{children:"create_nft_collection"})})," must be called, and the following conditions must be met:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the asset already exists, it must be of type ",(0,s.jsx)(n.code,{children:"NonFungible"}),", and the caller must have the appropriate permission for the asset. If the asset does not exist, ",(0,s.jsx)(n.code,{children:"create_nft_collection"})," will also create one non-fungible asset using the values passed as ",(0,s.jsx)(n.code,{children:"nft_type"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["This must be the first collection associated with the given ",(0,s.jsx)(n.code,{children:"AssetId"})," (i.e. only one collection per Asset ID is allowed)."]}),"\n",(0,s.jsxs)(n.li,{children:["The number of metadata keys associated with the collection must be less than or equal to ",(0,s.jsx)(n.a,{href:"https://docs.polymesh.live/pallet_nft/trait.Config.html#associatedtype.MaxNumberOfCollectionKeys",children:"MaxNumberOfCollectionKeys"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["All metadata keys must be registered before the collection is created. When using local metadata keys, you must call ",(0,s.jsx)(n.code,{children:"create_asset"})," and ",(0,s.jsx)(n.code,{children:"register_asset_metadata_local_type"})," before ",(0,s.jsx)(n.code,{children:"create_nft_collection"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once the dispatchable succeeds, a unique ID is tied to the NFT collection, in addition to the Asset ID, which identifies the underlying asset details."}),"\n",(0,s.jsx)(n.h3,{id:"issuing-an-nft",children:"Issuing an NFT"}),"\n",(0,s.jsxs)(n.p,{children:["After creating the collection, tokens can be issued with the ",(0,s.jsx)(n.a,{href:"https://docs.polymesh.live/pallet_nft/struct.Module.html#arguments-1",children:(0,s.jsx)(n.code,{children:"issue_nft"})})," extrinsic. For an NFT to be issued successfully, the following conditions must hold:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An NFT collection associated with ",(0,s.jsx)(n.code,{children:"AssetId"})," must exist."]}),"\n",(0,s.jsxs)(n.li,{children:["The caller must have the appropriate permission for the ",(0,s.jsx)(n.code,{children:"Asset"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"portfolio_kind"})," of the caller must be valid."]}),"\n",(0,s.jsx)(n.li,{children:"All metadata keys specified in the NFT collection must have a value set when issuing the token. Issuing a token with metadata keys not defined in the collection will fail."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once the dispatchable succeeds, a unique non-fungible token is linked to the specified portfolio."}),"\n",(0,s.jsx)(n.h3,{id:"redeeming-an-nft",children:"Redeeming an NFT"}),"\n",(0,s.jsxs)(n.p,{children:["A non-fungible token can be redeemed by calling the ",(0,s.jsx)(n.a,{href:"https://docs.polymesh.live/pallet_nft/struct.Module.html#arguments-2",children:(0,s.jsx)(n.code,{children:"redeem_nft"})})," dispatchable. To successfully redeem an NFT, the following conditions must hold:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An NFT collection associated with ",(0,s.jsx)(n.code,{children:"AssetId"})," must exist."]}),"\n",(0,s.jsxs)(n.li,{children:["The caller must have the appropriate permission for the ",(0,s.jsx)(n.code,{children:"Asset"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"nft_id"})," of the token must exist in the caller's portfolio."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once the dispatchable succeeds, the non-fungible token will no longer be linked to the caller's portfolio."}),"\n",(0,s.jsx)(n.h2,{id:"nfts-and-the-settlement-pallet",children:"NFTs and the Settlement Pallet"}),"\n",(0,s.jsxs)(n.p,{children:["Polymesh's ",(0,s.jsx)(n.a,{href:"https://developers.polymesh.network/polymesh-docs/primitives/settlement/#overview",children:"Settlement"})," engine fully supports NFTs, and transfers of non-fungible tokens follow the same process as fungible assets. This means that all compliance rules defined for the underlying asset must be respected for a successful transfer of an NFT."]}),"\n",(0,s.jsx)(n.h2,{id:"metadata-schema",children:"Metadata Schema"}),"\n",(0,s.jsx)(n.p,{children:"NFTs can be associated with metadata at both the collection and individual NFT level. Each NFT collection can define local metadata keys for their collection."}),"\n",(0,s.jsx)(n.p,{children:"There are also four globally defined metadata keys, intended to be used in a standardized way to allow third-party dApps to process metadata associated with NFTs."}),"\n",(0,s.jsx)(n.p,{children:"Unlike other chains and standards (e.g., EIP-721), Polymesh encourages metadata to be stored directly on-chain for greater transparency, reduced reliance on external systems such as IPFS, and allowing direct reference by smart contract business logic."}),"\n",(0,s.jsx)(n.p,{children:"In some cases, it may be preferable to store some metadata off-chain, for compatibility or other reasons."}),"\n",(0,s.jsx)(n.p,{children:"The two standard approaches below for specifying a Token URI and an Image URI are optional but encouraged if storing this data off-chain."}),"\n",(0,s.jsx)(n.h3,{id:"token-uri",children:"Token URI"}),"\n",(0,s.jsx)(n.p,{children:"The Token URI of an NFT is intended to point to an off-chain URI containing a JSON blob defining metadata for the NFT."}),"\n",(0,s.jsx)(n.p,{children:"The Token URI can be specified in various ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["via the global metadata key ",(0,s.jsx)(n.code,{children:"tokenUri"})," defined for an individual NFT"]}),"\n",(0,s.jsxs)(n.li,{children:["via the global metadata key ",(0,s.jsx)(n.code,{children:"baseTokenUri"})," defined for the whole NFT collection"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In both cases, the metadata value can include ",(0,s.jsx)(n.code,{children:"{tokenId}"}),", which will be substituted by a client with the corresponding ",(0,s.jsx)(n.code,{children:"tokenId"})," of the individual NFT."]}),"\n",(0,s.jsx)(n.p,{children:"The full process to determine the Token URI of an individual NFT is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the individual NFT has a ",(0,s.jsx)(n.code,{children:"tokenUri"})," value set, return this."]}),"\n",(0,s.jsxs)(n.li,{children:["Otherwise, if the NFT collection has a ",(0,s.jsx)(n.code,{children:"baseTokenUri"})," value set, then:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the ",(0,s.jsx)(n.code,{children:"baseTokenUri"})," does not already include ",(0,s.jsx)(n.code,{children:"{tokenId}"}),", append ",(0,s.jsx)(n.code,{children:"/{tokenId}"})," (e.g., the resolved URI is ",(0,s.jsx)(n.code,{children:"{baseTokenUri}/{tokenId}"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Substitute any ",(0,s.jsx)(n.code,{children:"{tokenId}"})," references with the underlying ",(0,s.jsx)(n.code,{children:"tokenId"})," of the individual NFT, then return this."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The JSON blob referenced by an individual NFT's Token URI should conform to the JSON schema below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "title": "Token Metadata",\n  "type": "object",\n  "properties": {\n    "name": {\n      "type": "string",\n      "description": "Identifies the asset this token represents"\n    },\n    "description": {\n      "type": "string",\n      "description": "Describes the asset this token represents"\n    },\n    "properties": {\n      "type": "object",\n      "description": "Arbitrary properties. Values may be strings, numbers, objects, or arrays."\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"image-uri",children:"Image URI"}),"\n",(0,s.jsx)(n.p,{children:"You can also specify an image associated with an individual NFT by providing an Image URI, intended to point to an off-chain URI containing image data for the NFT."}),"\n",(0,s.jsx)(n.p,{children:"The Image URI can be specified in various ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["via the global metadata key ",(0,s.jsx)(n.code,{children:"imageUri"})," defined for an individual NFT"]}),"\n",(0,s.jsxs)(n.li,{children:["via the global metadata key ",(0,s.jsx)(n.code,{children:"baseImageUri"})," defined for the entire NFT collection"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In both cases, the metadata value can include ",(0,s.jsx)(n.code,{children:"{tokenId}"}),", which will be substituted by a client with the ",(0,s.jsx)(n.code,{children:"tokenId"})," of the individual NFT."]}),"\n",(0,s.jsx)(n.p,{children:"The process to determine the Image URI of an individual NFT is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the individual NFT has an ",(0,s.jsx)(n.code,{children:"imageUri"})," value set, return this."]}),"\n",(0,s.jsxs)(n.li,{children:["Otherwise, if the NFT collection has a ",(0,s.jsx)(n.code,{children:"baseImageUri"})," value set, then:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the ",(0,s.jsx)(n.code,{children:"baseImageUri"})," does not already include ",(0,s.jsx)(n.code,{children:"{tokenId}"}),", append ",(0,s.jsx)(n.code,{children:"/{tokenId}"})," (e.g., the resolved URI is ",(0,s.jsx)(n.code,{children:"{baseImageUri}/{tokenId}"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Substitute any ",(0,s.jsx)(n.code,{children:"{tokenId}"})," references with the underlying ",(0,s.jsx)(n.code,{children:"tokenId"})," of the individual NFT, then return this."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This logic matches the process described for the ",(0,s.jsx)(n.a,{href:"#token-uri",children:"Token URI"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When using ",(0,s.jsx)(n.code,{children:"baseImageUri"}),", it's highly recommended to include ",(0,s.jsx)(n.code,{children:"{tokenId}"})," to ensure a file extension is included in the URI. Without a file extension, there may be ambiguity in how the image is handled, which could lead to display or processing issues."]}),"\n",(0,s.jsxs)(n.li,{children:["The above specification allows an image to be specified via the ",(0,s.jsx)(n.a,{href:"#image-uri",children:"Image URI"})," or through an ",(0,s.jsx)(n.code,{children:"image"})," tag in the JSON data linked by the ",(0,s.jsx)(n.a,{href:"#token-uri",children:"Token URI"}),". The recommended approach is to first look for a dedicated ",(0,s.jsx)(n.a,{href:"#image-uri",children:"Image URI"})," and, if not found, fall back to the image tag in the data stored at the ",(0,s.jsx)(n.a,{href:"#token-uri",children:"Token URI"}),"."]}),"\n"]})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},l=i.createContext(s);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);