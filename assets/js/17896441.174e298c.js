"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[18401],{35258:(e,i,s)=>{s.d(i,{A:()=>a});s(96540);var n=s(74848);function a(e){return(0,n.jsxs)("div",{className:"wrapper",children:[(0,n.jsx)("h3",{className:"actionCardWrapperTitle",children:e.title}),(0,n.jsx)("div",{className:"content-wrapper",children:e.children})]})}},75159:(e,i,s)=>{s.d(i,{A:()=>l});s(96540);var n=s(46784),a=s(37107),r=s(66188),t=s(74848);function l(e){return(0,t.jsxs)("a",{href:e.href,className:"actionCard",children:[(0,t.jsxs)("h2",{className:"actionCardLinkText",children:[e.text," ",(0,t.jsx)(n.g,{icon:"arrow-right",className:"link-icon"})]}),(0,t.jsx)("div",{className:"actionCardLinkDesc",children:e.desc})]})}a.Yv.add(r.X7I)},74528:(e,i,s)=>{s.d(i,{A:()=>a});s(96540);var n=s(74848);const a=e=>{let{videoId:i}=e;return(0,n.jsx)("div",{className:"video-responsive",children:(0,n.jsx)("iframe",{width:"853",height:"480",src:`https://www.youtube-nocookie.com/embed/${i}?noref=true&modestbranding=1&rel=0&autoplay=0`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},14198:(e,i,s)=>{s.d(i,{A:()=>x});s(96540);var n=s(34164),a=s(28774),r=s(21312),t=s(44070),l=s(17559),o=s(55597),c=s(32252),d=s(74848);const h={unreleased:function(e){let{siteTitle:i,versionMetadata:s}=e;return(0,d.jsx)(r.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:i,versionLabel:(0,d.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:i,versionMetadata:s}=e;return(0,d.jsx)(r.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:i,versionLabel:(0,d.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function v(e){const i=h[e.versionMetadata.banner];return(0,d.jsx)(i,{...e})}function m(e){let{versionLabel:i,to:s,onClick:n}=e;return(0,d.jsx)(r.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:i,latestVersionLink:(0,d.jsx)("b",{children:(0,d.jsx)(a.A,{to:s,onClick:n,children:(0,d.jsx)(r.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function u(e){let{className:i,versionMetadata:s}=e;const{pluginId:a}=(0,t.vT)({failfast:!0}),{savePreferredVersionName:r}=(0,o.g1)(a),{latestDocSuggestion:c,latestVersionSuggestion:h}=(0,t.HW)(a),u=c??(x=h).docs.find((e=>e.id===x.mainDocId));var x;return(0,d.jsxs)("div",{className:(0,n.A)(i,l.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,d.jsx)("div",{children:(0,d.jsx)(v,{siteTitle:"Polymesh SDK",versionMetadata:s})}),(0,d.jsx)("div",{className:"margin-top--md",children:(0,d.jsx)(m,{versionLabel:h.label,to:u.path,onClick:()=>r(h.name)})})]})}function x(e){let{className:i}=e;const s=(0,c.r)();return s.banner?(0,d.jsx)(u,{className:i,versionMetadata:s}):null}},85739:(e,i,s)=>{s.d(i,{A:()=>m});s(96540);var n=s(43059),a=s(11470),r=s(19365),t=s(46784),l=s(37107),o=s(66188),c=s(74848);l.Yv.add(o.X7I);var d=s(74528);var h=s(75159),v=s(35258);const m={...n.A,Tabs:a.A,TabItem:r.A,OverviewBox:function(e){return e.floating?(0,c.jsx)("div",{className:"overview-box-wrapper",children:(0,c.jsxs)("div",{className:"content-floating",children:[(0,c.jsx)("img",{className:"img-floating",src:e.imgSrc}),(0,c.jsx)("h3",{className:"title",children:e.title}),e.children,(0,c.jsxs)("a",{className:"action-link",href:e.linkHref,children:[e.linkText," ",(0,c.jsx)(t.g,{icon:"arrow-right",className:"link-icon"})]})]})}):(0,c.jsxs)("div",{className:"overview-box-wrapper",children:[(0,c.jsxs)("div",{className:"content-left",children:[(0,c.jsx)("h3",{className:"title",children:e.title}),e.children,(0,c.jsxs)("a",{className:"action-link",href:e.linkHref,target:e.external?"_blank":"",children:[e.linkText," ",(0,c.jsx)(t.g,{icon:"arrow-right",className:"link-icon"})]})]}),(0,c.jsx)("div",{className:"img-right-container",children:(0,c.jsx)("img",{className:"img-right",src:e.imgSrc})})]})},OverviewVideoBox:function(e){return(0,c.jsxs)("div",{className:"overview-video-box-wrapper",children:[(0,c.jsxs)("div",{className:"content-wrapper",children:[(0,c.jsx)("h3",{className:"title",children:e.title}),e.children]}),(0,c.jsx)("div",{className:"video-wrapper",children:(0,c.jsx)(d.A,{videoId:e.videoId})})]})},YoutubePlayer:d.A,ActionCard:h.A,ActionCardWrapper:v.A}}}]);