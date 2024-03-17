"use strict";(self.webpackChunkpolymesh_developer_documentation=self.webpackChunkpolymesh_developer_documentation||[]).push([[30889],{48118:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=s(74848),r=s(28453);const d={title:"Fees",description:"",subsite:"polymesh-docs"},i=void 0,c={id:"network/fees",title:"Fees",description:"",source:"@site/polymesh-docs/network/fees.mdx",sourceDirName:"network",slug:"/network/fees",permalink:"/polymesh-documentation-site/polymesh-docs/network/fees",draft:!1,unlisted:!1,editUrl:"https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop/polymesh-docs/network/fees.mdx",tags:[],version:"current",frontMatter:{title:"Fees",description:"",subsite:"polymesh-docs"},sidebar:"defaultSidebar",previous:{title:"Consensus",permalink:"/polymesh-documentation-site/polymesh-docs/network/consensus"},next:{title:"Governance",permalink:"/polymesh-documentation-site/polymesh-docs/network/governance"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Transaction Fees",id:"transaction-fees",level:2},{value:"Protocol Fees",id:"protocol-fees",level:2}];function a(e){const t={a:"a",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["Fees on Polymesh are paid in the networks native token, ",(0,n.jsx)(t.a,{href:"../polyx/",children:"POLYX"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"There are two types of network fee:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Transaction Fees - always paid whether or not the transaction is successful"}),"\n",(0,n.jsx)(t.li,{children:"Protocol Fees - only paid for successful transactions"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"transaction-fees",children:"Transaction Fees"}),"\n",(0,n.jsx)(t.p,{children:"Every on-chain transaction in Polymesh must be paid for using POLYX. The cost of the operation is proportional to the computational and storage complexity of the action being performed and is set directly by the network."}),"\n",(0,n.jsx)(t.p,{children:"In order to execute an on-chain transaction, a user must have sufficient POLYX associated with the key which is signing and submitting the transaction. If there isn't a sufficient balance, the network will fail the transaction."}),"\n",(0,n.jsx)(t.p,{children:"Transaction fees go to the operator that produced the block containing the associated transaction. This means that operators are incentivised to help increase adoption of the network (as they receive a percentage of transaction fees from on-chain activity) whilst allowing the treasury to grow its funds which can then be disbursed via the governance process as grants to further increase the adoption or development of the network."}),"\n",(0,n.jsx)(t.p,{children:"All transactions in Polymesh have a transaction fee associated with them. The magnitude of the fee is determined by the compute / memory cost of executing the transaction, and the size (in bytes) of the transaction input. The transaction fee is paid regardless of whether the transaction is successful or not."}),"\n",(0,n.jsx)(t.p,{children:"As of Polymesh 4.1.1 sample fees for common transaction types are shown below."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Module"}),(0,n.jsx)(t.th,{children:"Transaction"}),(0,n.jsx)(t.th,{children:"Fee"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"accept_asset_ownership_transfer"}),(0,n.jsx)(t.td,{children:"0.1205"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"accept_ticker_transfer"}),(0,n.jsx)(t.td,{children:"0.1126"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"add_documents"}),(0,n.jsx)(t.td,{children:"0.0889"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"create_asset"}),(0,n.jsx)(t.td,{children:"0.1899"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"freeze"}),(0,n.jsx)(t.td,{children:"0.0705"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"issue"}),(0,n.jsx)(t.td,{children:"0.1294"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"register_custom_asset_type"}),(0,n.jsx)(t.td,{children:"0.0809"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"register_ticker"}),(0,n.jsx)(t.td,{children:"0.0941"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"rename_asset"}),(0,n.jsx)(t.td,{children:"0.0696"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"set_funding_round"}),(0,n.jsx)(t.td,{children:"0.0661"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"asset"}),(0,n.jsx)(t.td,{children:"unfreeze"}),(0,n.jsx)(t.td,{children:"0.0706"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"balances"}),(0,n.jsx)(t.td,{children:"transfer"}),(0,n.jsx)(t.td,{children:"0.0943"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"balances"}),(0,n.jsx)(t.td,{children:"transfer_with_memo"}),(0,n.jsx)(t.td,{children:"0.0978"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"capitaldistribution"}),(0,n.jsx)(t.td,{children:"claim"}),(0,n.jsx)(t.td,{children:"0.2562"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"capitaldistribution"}),(0,n.jsx)(t.td,{children:"distribute"}),(0,n.jsx)(t.td,{children:"0.1035"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"checkpoint"}),(0,n.jsx)(t.td,{children:"create_checkpoint"}),(0,n.jsx)(t.td,{children:"0.0927"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"checkpoint"}),(0,n.jsx)(t.td,{children:"create_schedule"}),(0,n.jsx)(t.td,{children:"0.1476"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compliancemanager"}),(0,n.jsx)(t.td,{children:"add_compliance_requirement"}),(0,n.jsx)(t.td,{children:"0.0787"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compliancemanager"}),(0,n.jsx)(t.td,{children:"add_default_trusted_claim_issuer"}),(0,n.jsx)(t.td,{children:"0.0774"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compliancemanager"}),(0,n.jsx)(t.td,{children:"pause_asset_compliance"}),(0,n.jsx)(t.td,{children:"0.0686"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compliancemanager"}),(0,n.jsx)(t.td,{children:"remove_default_trusted_claim_issuer"}),(0,n.jsx)(t.td,{children:"0.0712"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compliancemanager"}),(0,n.jsx)(t.td,{children:"reset_asset_compliance"}),(0,n.jsx)(t.td,{children:"0.0654"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"compliancemanager"}),(0,n.jsx)(t.td,{children:"resume_asset_compliance"}),(0,n.jsx)(t.td,{children:"0.0682"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"corporateaction"}),(0,n.jsx)(t.td,{children:"initiate_corporate_action"}),(0,n.jsx)(t.td,{children:"0.1816"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"corporateaction"}),(0,n.jsx)(t.td,{children:"set_default_targets"}),(0,n.jsx)(t.td,{children:"0.0719"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"corporateaction"}),(0,n.jsx)(t.td,{children:"set_default_withholding_tax"}),(0,n.jsx)(t.td,{children:"0.0684"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"corporateaction"}),(0,n.jsx)(t.td,{children:"set_did_withholding_tax"}),(0,n.jsx)(t.td,{children:"0.0839"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"externalagents"}),(0,n.jsx)(t.td,{children:"accept_become_agent"}),(0,n.jsx)(t.td,{children:"0.1107"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"externalagents"}),(0,n.jsx)(t.td,{children:"create_group"}),(0,n.jsx)(t.td,{children:"0.0781"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identity"}),(0,n.jsx)(t.td,{children:"accept_primary_key"}),(0,n.jsx)(t.td,{children:"0.1332"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identity"}),(0,n.jsx)(t.td,{children:"add_authorization"}),(0,n.jsx)(t.td,{children:"0.0818"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identity"}),(0,n.jsx)(t.td,{children:"add_claim"}),(0,n.jsx)(t.td,{children:"0.0761"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identity"}),(0,n.jsx)(t.td,{children:"cdd_register_did"}),(0,n.jsx)(t.td,{children:"0.1003"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identity"}),(0,n.jsx)(t.td,{children:"join_identity_as_key"}),(0,n.jsx)(t.td,{children:"0.1187"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identity"}),(0,n.jsx)(t.td,{children:"revoke_claim"}),(0,n.jsx)(t.td,{children:"0.0669"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"identity"}),(0,n.jsx)(t.td,{children:"set_permission_to_signer"}),(0,n.jsx)(t.td,{children:"0.2575"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio"}),(0,n.jsx)(t.td,{children:"create_portfolio"}),(0,n.jsx)(t.td,{children:"0.0812"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio"}),(0,n.jsx)(t.td,{children:"delete_portfolio"}),(0,n.jsx)(t.td,{children:"0.0938"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio"}),(0,n.jsx)(t.td,{children:"move_portfolio_funds"}),(0,n.jsx)(t.td,{children:"0.1110"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio"}),(0,n.jsx)(t.td,{children:"rename_portfolio"}),(0,n.jsx)(t.td,{children:"0.0724"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"settlement"}),(0,n.jsx)(t.td,{children:"add_and_affirm_instruction"}),(0,n.jsx)(t.td,{children:"0.6079"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"settlement"}),(0,n.jsx)(t.td,{children:"affirm_instruction"}),(0,n.jsx)(t.td,{children:"0.1115"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"settlement"}),(0,n.jsx)(t.td,{children:"create_venue"}),(0,n.jsx)(t.td,{children:"0.0911"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"settlement"}),(0,n.jsx)(t.td,{children:"reject_instruction"}),(0,n.jsx)(t.td,{children:"0.1559"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"staking"}),(0,n.jsx)(t.td,{children:"bond"}),(0,n.jsx)(t.td,{children:"0.1017"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"staking"}),(0,n.jsx)(t.td,{children:"bond_extra"}),(0,n.jsx)(t.td,{children:"0.0765"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"staking"}),(0,n.jsx)(t.td,{children:"nominate"}),(0,n.jsx)(t.td,{children:"0.0978"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"staking"}),(0,n.jsx)(t.td,{children:"rebond"}),(0,n.jsx)(t.td,{children:"0.0814"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"statistics"}),(0,n.jsx)(t.td,{children:"add_exempted_entities"}),(0,n.jsx)(t.td,{children:"0.0687"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"statistics"}),(0,n.jsx)(t.td,{children:"add_transfer_manager"}),(0,n.jsx)(t.td,{children:"0.0688"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"statistics"}),(0,n.jsx)(t.td,{children:"remove_exempted_entities"}),(0,n.jsx)(t.td,{children:"0.0699"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"statistics"}),(0,n.jsx)(t.td,{children:"remove_transfer_manager"}),(0,n.jsx)(t.td,{children:"0.0691"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sto"}),(0,n.jsx)(t.td,{children:"create_fundraiser"}),(0,n.jsx)(t.td,{children:"0.1261"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sto"}),(0,n.jsx)(t.td,{children:"freeze_fundraiser"}),(0,n.jsx)(t.td,{children:"0.0703"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sto"}),(0,n.jsx)(t.td,{children:"invest"}),(0,n.jsx)(t.td,{children:"0.7040"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sto"}),(0,n.jsx)(t.td,{children:"stop"}),(0,n.jsx)(t.td,{children:"0.0816"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"protocol-fees",children:"Protocol Fees"}),"\n",(0,n.jsx)(t.p,{children:"In addition to transaction fees, certain on-chain transactions carry additional fixed fees."}),"\n",(0,n.jsx)(t.p,{children:"The transactions that carry these additional protocol fees are configurable and can be updated via the governance process - modifying both the transactions that carry these fees, as well as the fee amounts for each transaction."}),"\n",(0,n.jsx)(t.p,{children:"Currently only one types of transaction carries additional fees - this is:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"registering a new ticker: this has a 1000 POLYX fee. Note this fee is also charged if directly creating an asset without first registering a ticker in a separate transaction."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Both transaction and protocol fees are paid to the operator that produces a block that includes the relevant transactions."}),"\n",(0,n.jsx)(t.p,{children:"Protocol fees are only paid by a user if their action is successful - for example if you try and register a ticker that has already been registered, you won't be charged the 1000 POLYX protocol fee."})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var n=s(96540);const r={},d=n.createContext(r);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);