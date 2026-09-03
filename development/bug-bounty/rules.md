# Bug Bounty Rules, Terms and Conditions

> Comprehensive information about the Polymesh bug bounty policies and procedures.

## Terms & Conditions

Please read these terms and conditions (these “**Terms**”), which form a legally binding contract between Polymesh Labs Ltd, of 190 Elgin Avenue, George Town, KY1-9008, Cayman Islands (“**Polymesh**” or “**us**” or “**our**” in context) and qualifying individuals (“**Participant**” or “**you**” and “**your**” in context) who wish to participate in this bug bounty program (the “**Program**”) and identify vulnerabilities in our in-scope products (“**Vulnerabilities**”). Participants that submit acceptable vulnerability reports shall be eligible to earn a payout (a “**Bounty Payout**”), as determined solely at Polymesh's discretion, in accordance with these Terms.

These Terms include important clauses, including without limitation, instances where Participants may be liable to Polymesh, a class action waiver, and other limitations of your rights and remedies. Disputes will be adjudicated solely in the courts of the Cayman Islands. By participating in the Program, all Participants agree to be bound by and comply with these Terms. If an individual does not wish to, or cannot, comply with these Terms, they are ineligible for a Bounty Payout and must not participate in the Program.

### (1) OVERVIEW AND ELIGIBILITY

Polymesh offers this Program as an initiative for our community members that are helping Polymesh to improve the security and robustness of the Polymesh protocol.

The Program is not a competition. No fees are payable and no purchase is necessary to participate in the Program. There is no guarantee that you will earn a Bounty Payout. The Program is provided “as-is”.

This Program is a discretionary initiative. All determinations regarding the eligibility of a Report (as defined in Section 2), the classification and severity of a Vulnerability, and the amount (if any) of a Bounty Payout are made by Polymesh in its sole and final discretion. Polymesh, in its sole discretion, may modify these Terms at any time and may modify, restrict, suspend, terminate, or otherwise change any aspect of this Program, and/or the fulfillment of any Bounty Payouts, at any time, as noted in Section 7 below.

You must meet the following criteria in order to be eligible to be a Participant:

- You must be either the legal age of majority in your country or at least 14 years of age with permission from your legal guardian that you may participate in the Program;

- When acting as a Participant, you are not violating any other agreement (e.g. an employment agreement) to which you may be a party; we are not liable for any breach of such third-party agreement by you and disclaim any knowledge of or responsibility for your conduct;

- You are not listed under, or resident in a country that is under, a US, European Union, or United Nations embargo or sanctions list; and

- Your participation in the Program is not prohibited under any law or regulation applicable to you.

Polymesh employees, contractors or representatives, or a family member of a Polymesh employee, contractor or representative, are not eligible to participate in the Program during the term of engagement with Polymesh and for a period of twelve (12) months following the termination of such engagement. Personnel of any firm engaged by Polymesh to perform a security audit of in-scope code, and their family members, are not eligible to submit Reports relating to the code within the scope of that audit engagement during the engagement and for a period of twelve (12) months following its completion.

These Terms are the entire agreement between you and Polymesh for your participation in the Program and these Terms supersede any prior agreement between you and us relating to the Program.

A Participant may be required to provide Polymesh with proof of compliance and eligibility in the form requested in regards to any obligation of the Participant hereunder.

### (2) HOW TO PARTICIPATE

To set up the developer environment, and get started, please visit:
[https://github.com/PolymeshAssociation/Polymesh](https://github.com/PolymeshAssociation/Polymesh)

To submit a Vulnerability, you must submit a report by email to [bugbounty@polymesh.network](mailto:bugbounty@polymesh.network). Each such submission is considered a “**Report**”. Reports must not be submitted or disclosed through any other channel, including public channels such as Discord, GitHub issues, or social media. Do not disclose details of a Vulnerability publicly, or to any third party, until Polymesh has confirmed the issue has been addressed.

All Reports must comply with our Report requirements. You can find our Report requirements, Program processes, and tips on submitting a Report on the main [bug bounty page](/development/bug-bounty#report-requirements).

All feedback, unsolicited and solicited, Reports, and any materials that you submit to us as part of the Program are subject to the Intellectual Property, Grants, and Ownership rights in Section 8 below.

#### (2.1) Scope

The Program covers the Polymesh blockchain related source code and any associated released binaries, as set out in **Exhibit A**. Exhibit A defines three scope tiers:

1. **In-scope** items: eligible under the standard reward schedule in Exhibit B, subject to any item-specific conditions set out in Exhibit A;
2. **Responsible-disclosure** items: Reports are welcomed but carry no entitlement to a Bounty Payout; Polymesh may award a discretionary payout; and
3. **Out-of-scope** items: not eligible for any Bounty Payout.

If you believe you have found a Vulnerability in code that is within scope, we encourage you to let us know right away by submitting a Report. Before submitting a Report, please review these Terms, including our Responsible Investigation and Reporting requirements (section 2.2 below), Report Integrity requirements (section 2.3 below), Rewards Details (in Exhibit B), and the Program Scope (in Exhibit A). If you are unsure whether something is within scope, ask us at [bugbounty@polymesh.network](mailto:bugbounty@polymesh.network) before you begin testing.

#### (2.2) Responsible Investigation and Reporting

For you to participate in the Program, we require that you:

- Meet the eligibility requirements in section 1 above.
- Do not violate the privacy of other users and do not engage in actions that cause disruption to others, including (but not limited to) unauthorized access to or destruction of data.
- Do not violate any applicable laws or regulations.
- Do not share content that is offensive, inappropriate, graphic, or spam.
- Do not harm (by planting a vulnerability or introducing a virus or threat) or defraud Polymesh or its users during your research; you must make a good faith effort not to interrupt or degrade our services.
- Do not target our physical security measures (attempts against Polymesh property or data centers), or attempt to use social engineering (including phishing), spam, or distributed denial of service (DDoS) attacks.
- Do not perform denial-of-service or resource-exhaustion testing against Mainnet, Testnet, public RPC nodes, or any infrastructure you do not control; such Vulnerabilities must be demonstrated only against local nodes or private networks under your control.
- Do not engage in attacks that consume a substantial amount of POLYX which would be otherwise cost-prohibitive on Mainnet, or that degrade Testnet for other users.
- Test Confidential Assets functionality (see Exhibit A) only on Testnet or on local/private networks under your control, as it is not yet deployed to Mainnet.
- Do not exploit a Vulnerability except as necessary for responsible testing and reporting, and do not access, retain, or disclose any data belonging to others obtained in the course of your research.
- Do not submit any intellectual property to us unless you have the right to grant us a license to use it.
- Report Vulnerabilities only to us and not to anyone else. Do not publicly disclose Vulnerabilities until they have been addressed by Polymesh, especially for critical issues.
- Do not claim credit for work that is not your own in any Report.
- Do not damage or cause interruption of the Program and/or prevent others from participating in or engaging in the Program.
- Comply with the Report Integrity requirements in section 2.3 below.
- Comply with these Terms.

#### (2.3) Report Integrity and Use of Automated Tools

Each Report must reflect genuine, personally validated security research. As a condition of eligibility for any Bounty Payout:

- You must have personally verified, prior to submission, that the reported Vulnerability exists in the current in-scope code and that the reproduction steps in your Report work as described.
- Each Report must address a single Vulnerability and must include the information set out in the Report requirements on the main [bug bounty page](/development/bug-bounty#report-requirements), including precise code references and reproduction instructions, and (for critical and high severity claims) a working proof of concept.
- You may use artificial intelligence tools, fuzzers, scanners, and other automated tooling to assist your research; however, you remain personally responsible for the accuracy of every claim in your Report. Raw or untriaged output of any automated tool or AI system does not constitute a Report.
- Reports that are fraudulent, deceptive, forged, altered, incomplete, incomprehensible, garbled, or otherwise not personally validated by the Participant (including, without limitation, Reports referencing code, functions, or behavior that does not exist in the in-scope codebase, generic reports not tied to actual Polymesh code, or Reports containing fabricated proofs of concept) are ineligible and may be closed without a detailed response. This applies regardless of whether the Report was produced with the help of a macro, bot, script, or artificial intelligence system, or written by hand.
- You must be able to meaningfully answer follow-up questions about your own Report. Failure or inability to do so may, at Polymesh's sole discretion, disqualify the Report.
- Submission of repeated ineligible, unvalidated, or automated Reports constitutes abuse of the Program and may result in disqualification from the Program and being barred from future participation.

#### (2.4) Safe Harbor Provisions

These Terms provide you with authorization to test our in-scope code and technologies (see 2.1 above and Exhibit A for in-scope and out-of-scope items). These Terms DO NOT provide you authorization to intentionally access Polymesh data, engage in unauthorized access of another person's data, or engage in actions that are not permitted under sections 2.2 and 2.3 above or that are out-of-scope for purposes of the Program.

These Terms DO NOT provide authorization in respect of any third-party (i.e., a party other than Polymesh or its affiliates) networks, systems, information, applications, products, or services.

Those who do not abide by these Terms, do not follow the instructions of Polymesh and its representatives, or do not provide all required information may, in Polymesh's sole discretion, be disqualified and any purported participation by such person deemed void. If a Participant attempts or succeeds in abusing the Program, Polymesh may (in its sole discretion) disqualify such Participant from participation in this Program and pursue other remedial actions.

You should retain a copy of your Report and records of your participation. Polymesh is not responsible for providing a copy or record of any element of your participation.

#### (2.5) Publicity

Polymesh may offer features allowing Participants to publicly display certain information about their participation in this Program within a researcher profile, such as profile information, types of Vulnerabilities reported, and other statistics. If you choose to share your information through this feature, this information will be public and others may use it or share it with third parties. Polymesh may also feature you or your Report in any commercially reasonable manner.

As a condition of participating in this Program, pursuant to the terms of our Privacy Policy, Participants give Polymesh and its agents permission to share their name, address, and other contact or Bounty Payout information to third parties (such as payment services) for the purpose of administering this Program and complying with applicable laws, regulations, and rules. If you choose not to give your consent, you must notify Polymesh in writing at [bugbounty@polymesh.network](mailto:bugbounty@polymesh.network), in which case Polymesh may, in its sole discretion, disqualify you either from receiving the applicable Bounty Payout(s), from the Program, or both.

### (3) NOTIFICATIONS

We use email and other electronic means to stay in touch with Participants. You agree that when you provide us your email address or personally identifying information (e.g. name, address) during or prior to access or involvement in the Program, you: (a) consent to receive communications from us in electronic formats, including via the email address you have submitted or other agreed upon contact methods; (b) can opt-out from receiving communication from us at any time; and (c) agree that these Terms, agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications would satisfy if they were in writing and physically presented to you.

Public announcements regarding the Program will be made in the [Polymesh Developer Discord Channel](https://discord.gg/9TdzKbKgSU). Notifications in connection with submitted Reports, Bounty Payouts, and your participation in the Program will be made by email using your email address provided. It is each Participant's sole responsibility to receive and monitor those methods to timely receive, review, and respond as needed to notifications. Failure to timely respond or complete any of the steps set forth in the notification and verification procedures for any reason, including filtering or failure by Participant to notice or accept a communication from Polymesh or its representative, may result in disqualification of such Participant from receiving the Bounty Payout. Polymesh reserves the right to contact Participants for verification purposes and administration of the Program. All Polymesh's decisions are final and binding in all matters relating to the Program.

All notices provided to Polymesh in relation to the Program shall be sent to [bugbounty@polymesh.network](mailto:bugbounty@polymesh.network).

### (4) BOUNTIES

Participants will receive Bounty Payouts upon satisfying criteria for such payouts on their Reports, subject to verification. See Exhibit B for current information regarding Bounty Payouts, including how Bounty Payouts are calculated (collectively, “**Rewards Details**”). We may change the Bounty Payouts and the manner in which they are calculated at any time. All Bounty Payout details not specified in these Terms (including Exhibit B) will be determined at Polymesh's sole discretion. Bounty Payouts are not the property of any Participant until such payouts are actually received by a Participant.

Bounty Payouts are paid in United States Dollars, USDC or another stablecoin, or POLYX, and shall be sent using the details provided by Participant as specified in Exhibit B. Polymesh is not responsible for a Participant's inability to accept or receive a Bounty Payout for any reason. **We are not able to issue Bounty Payouts to Participants who are in violation of a material term of these Terms, including being on a sanctions list or residing in a country on a sanctions list**.

Any taxes (federal, national, state, prefectural, territorial, provincial, and/or local) and other costs and expenses associated with Bounty Payout acceptance or receipt will be the sole responsibility of the Participant. No more than the stated Bounty Payout will be awarded. Polymesh will not replace any lost or stolen Bounty Payouts or any Bounty Payouts that are undeliverable or do not reach the Participant because of an incorrect or changed address or contact information. If a Participant does not accept the entire Bounty Payout, the unaccepted part of the Bounty Payout will be forfeited, and Polymesh will have no further obligation with respect to that Bounty Payout or portion of the Bounty Payout. Participants are strictly prohibited from selling, auctioning, trading, or otherwise transferring their entitlements to Bounty Payouts. Bounty Payouts may be impermissible (for example, if prevented by a government or regulatory agency), impractical (e.g. excessive transfer costs, duties, or taxes), or impossible for Polymesh to award to Participants who live in certain jurisdictions. Polymesh reserves the right, but not the obligation, to cancel the payment of such Bounty Payout in such circumstances. Each Participant waives the right to assert as a cost of receiving any Bounty Payout any and all costs of verification and costs to claim the Bounty Payout and any liability and publicity which might arise from claiming or seeking to claim said Bounty Payout.

Participants may be required to respond to an initial notification from Polymesh within forty-eight (48) hours and be required to provide necessary details so Polymesh can make the Bounty Payouts. Polymesh may require Participants to complete identity verification and/or sanctions screening before any Bounty Payout is made.

### (5) INDEMNITY AND LIMITATION OF LIABILITY

Participant will be liable for and indemnify Polymesh, its subcontractors, and their respective directors, officers, and representatives (“**Polymesh Indemnitees**”) against any losses which Polymesh Indemnitees may incur that arise from Participant's breach of these Terms, including losses arising from Participants' gross negligence, willful misconduct and breach of law.

In no event will Polymesh be liable to you for any loss of use, revenue or profit or loss of data or for any consequential, incidental, indirect, exemplary, special, aggravated, or punitive damages whether arising out of breach of contract, tort (including negligence) or otherwise, regardless of whether such damage was foreseeable and whether or not Polymesh had been advised of the possibility of such damages.

Notwithstanding anything else set out under these Terms, our cumulative liability to you under these Terms (apart from payment of any Bounty Payout to which you may be entitled) shall be $10. Participant further waives all rights to have damages multiplied or increased.

### (6) DISPUTES/GOVERNING LAW

This Program, these Terms, and any dispute arising under or related thereto (whether for breach of contract, tortious conduct, or otherwise) will be governed, construed, and interpreted under the laws of the Cayman Islands, without reference or giving effect to its conflicts of law principles or rules that would cause the application of any other laws. Any legal actions, suits, or proceedings related to this Program (whether for breach of contract, tortious conduct, or otherwise) will be brought exclusively in the courts of the Cayman Islands and each Participant irrevocably accepts, submits, and consents to the exclusive jurisdiction and venue of these courts with respect to any legal actions, suits, or proceedings arising out of or related to this Program. You waive any and all objections to jurisdiction and venue in these courts and hereby submit to the jurisdiction of the courts of the Cayman Islands.

Except where prohibited, as a condition of participating in this Program, each Participant agrees that between the parties, any and all disputes, claims, and causes of action arising out of or connected with this Program, or the Bounty Payout awarded, must be resolved individually, without resort to any form of class action.

### (7) CHANGES TO THESE PROGRAM TERMS AND TERMINATION OF THE PROGRAM

Polymesh reserves the right to modify, restrict, suspend, or otherwise change any aspect of the Program, and/or these Terms from time-to-time, for any reason, including any reason beyond Polymesh's control, and within its sole discretion, including without limitation, the manner in which Participants participate, the scope of the Program, the manner in which Bounty Payouts are calculated, with reasonable notice to Participants. If you have submitted any Vulnerability to us already, we will notify you of changes to these Terms via an email. The updated Terms will be effective as of the time of posting, or upon such later date as specified by Polymesh. The updated Terms will apply to your participation in the Program beginning as of their effective date, or upon such later date, or by such other method as specified by Polymesh. If you do not agree to such an amendment, you must cease your participation in the Program immediately. Except where exigencies require a shorter time frame, we reserve the right to terminate the Program completely by providing you with thirty (30) days' notice of the impending termination.

We may terminate your engagement with us and any entitlement to any Bounty Payout if you violate any part of these Terms. Polymesh reserves the right to restrict or void participation from any identifiable source if any suspicious participation is detected or any violation of these Terms is suspected or detected. Polymesh reserves the right, in its sole discretion, to void the participation of any Participant who Polymesh believes has attempted to tamper with or impair the administration, security, fairness, or proper execution of the Program. If Polymesh determines at any time, in its sole discretion, that a Participant is engaging in behavior that Polymesh deems obnoxious, deceptive, inappropriate, threatening, illegal or that is intended to annoy, abuse, or harass any other person, Polymesh reserves the right to disqualify that Participant.

Sections 4, 5, 6, 8, 9, 10 and this clause shall survive termination of the Program.

### (8) INTELLECTUAL PROPERTY, GRANTS AND OWNERSHIP

#### (8.1) Intellectual Property Rights and Ownership

We retain all intellectual property rights in our products including, without limitation, all our source code and associated released binaries. Nothing herein shall grant you any right in any part of our products, or any improvement or derivative in any Report you provide us. You agree that to the extent required to abide by these Terms, you will waive any and all rights that may otherwise accrue to you in any Report and agree that we will not be obliged to license back any derivative or improvements in any Report to you.

#### (8.2) Grants to Polymesh

Subject to applicable Bounty Payout, you grant a royalty-free, fully paid-up, perpetual, non-revocable, exclusive, worldwide, transferable, and sub-licensable license in respect of any Report and any feedback provided to Polymesh and agree that Polymesh hereby has unrestricted rights to utilize the Report and feedback, at its sole discretion. We will not have an obligation to utilize any item you provide us. You waive any compensation related to incorporation of any materials in a Report or any feedback provided to us into our products and services. You agree that we may also utilize your personal information in accordance with our Privacy Policy available at [https://polymesh.network/privacy-policy](https://polymesh.network/privacy-policy).

### (9) ADDITIONAL DISCLAIMERS

The Polymesh Indemnitees are not responsible and/or liable for any of the following, whether caused by a Polymesh Indemnitee, the Participant, or by human error: participation submitted by illegitimate means (such as, without limitation, by an automated computer program); any lost, late, incomplete, illegible, unintelligible, garbled, mutilated, or misdirected participation, email, mail, or Program-related correspondence or materials or postage-due mail; any error, omission, interruption, defect or delay in transmission or communication; viruses or technical or mechanical malfunctions; interrupted or unavailable cable or satellite systems; errors, typos, or misprints in these Terms, any Program-related advertisements, or other materials; failures of electronic equipment, computer hardware, or software; lost or unavailable network connections or failed, incorrect, incomplete, inaccurate, garbled or delayed electronic communications or participation information. Polymesh Indemnitees are not responsible for electronic communications that are undeliverable or do not reach the Participant as a result of any form of active or passive filtering of any kind or insufficient space in a Participant's email inbox to receive email messages. Polymesh Indemnitees are not responsible, and may disqualify you, if your email address or other contact information does not work or is changed without prior written notice to Polymesh. Without limiting any other provision in these Terms, the Polymesh Indemnitees are not responsible or liable to any Participant (or any person claiming through such Participant) for failure to supply the Bounty Payout or any part thereof in the event that any of the Program activities or Polymesh Indemnitees' operations or activities are affected by any cause or event beyond the sole and reasonable control of the applicable Polymesh Indemnitee (as determined by Polymesh in its sole discretion), including, without limitation, by reason of any force majeure event, act of God, equipment failure, threatened or actual terrorist acts, air raid, act of public enemy, war (declared or undeclared), civil disturbance, insurrection, riot, epidemic, pandemic, public health crisis, fire, explosion, earthquake, flood, hurricane, unusually severe weather, blackout, embargo, labor dispute or strike (whether legal or illegal), labor or material shortage, transportation interruption of any kind, work slow-down, any law, rule, regulation, action, order, or request adopted, taken, or made by any governmental or quasi-governmental entity (whether or not such governmental act proves to be invalid), or any other cause, whether or not specifically mentioned above.

### (10) GENERAL TERMS

Polymesh's clock will be the official timekeeper for this Program. Polymesh's decisions will be final in all matters relating to this Program, including interpretation of these Terms and awarding of the Bounty Payouts.

Polymesh's failure or decision not to enforce any provision in these Terms will not constitute a waiver of that or any other provision. In the event there is an alleged or actual ambiguity, discrepancy, or inconsistency between disclosures or other statements contained in any Program-related materials and/or these Terms (including any alleged ambiguity, discrepancy, or inconsistency within these Terms), it will be resolved by Polymesh in its sole discretion. Participants waive any right to claim ambiguity in the Program or these Terms.

The invalidity or unenforceability of any provision of these Terms will not affect the validity or enforceability of any other provision. In the event that any provision is determined to be invalid or otherwise unenforceable or illegal, these Terms will otherwise remain in effect and will be construed in accordance with their terms as if the invalid or illegal provision were not contained herein.

## Exhibit A – Polymesh Bug Bounty Program Scope

### IN SCOPE

The following are in-scope of the Program under the standard reward schedule in Exhibit B:

- The [Polymesh node](https://github.com/PolymeshAssociation/Polymesh) Rust source code and associated [released binaries](https://github.com/PolymeshAssociation/Polymesh/releases/latest), as deployed in the **Mainnet runtime**. Vulnerabilities must be reproducible in the latest published release; issues present only on unreleased development branches may be accepted at Polymesh's discretion.
- Polymesh Confidential Assets (the new P-DART-based confidential asset functionality introduced in Polymesh v8), comprising `pallet_confidential_assets` in the [Polymesh repository](https://github.com/PolymeshAssociation/Polymesh) and the [polymesh-dart](https://github.com/PolymeshAssociation/polymesh-dart) zero-knowledge proof library, subject to the conditions below.

### CONFIDENTIAL ASSETS (PRE-MAINNET)

Conditions applicable to Confidential Assets while it remains pre-Mainnet:

1. Confidential Assets is deployed on **Testnet only**; it is not yet deployed to Mainnet. The polymesh-dart cryptography has completed its first external security audit. All testing must be performed on Testnet or on local/private networks under the Participant's control.
2. Reports that restate limitations already documented in the [Confidential Assets documentation](/confidential-assets), or that duplicate findings already identified by Polymesh's commissioned external audit, are not eligible for a Bounty Payout.

For the avoidance of doubt, the legacy confidential assets (v1 / MERCAT) functionality and the Polymesh Private repositories are out of scope (see below).

### RESPONSIBLE DISCLOSURE: CLIENT LIBRARIES AND TOOLING

Reports concerning the following client libraries and off-chain tooling (“**Responsible-Disclosure Items**”) are welcomed, subject to the conditions below:

- [Polymesh SDK](https://github.com/PolymeshAssociation/polymesh-sdk)
- [Polymesh REST API](https://github.com/PolymeshAssociation/polymesh-rest-api)
- [SubQuery indexer](https://github.com/PolymeshAssociation/polymesh-subquery)
- [Signing managers](https://github.com/PolymeshAssociation/signing-managers)
- [Polymesh Portal](https://github.com/PolymeshAssociation/polymesh-portal)
- [Polymesh Wallet browser extension](https://github.com/PolymeshAssociation/polymesh-wallet)

  Conditions applicable to Responsible-Disclosure Items:

1. Responsible-Disclosure Items are not covered by the standard reward schedule, and Reports concerning them create no entitlement to a Bounty Payout.
2. Polymesh may, in its sole discretion, award a discretionary payout for a high-impact, well-evidenced finding concerning a Responsible-Disclosure Item.
3. All other requirements apply to Reports concerning Responsible-Disclosure Items, including the submission channel, the responsible investigation and reporting requirements, the report integrity requirements, and non-disclosure obligations.

### OUT OF SCOPE

The following are out-of-scope of the Program and not eligible for any Bounty Payout:

- User-deployed smart contracts: contract bytecode that users write and deploy themselves via the Revive pallet (Polymesh's Solidity/EVM-compatible contracts engine). This does not cover the Revive pallet integration or precompiles (e.g., the ERC-20 precompile for native assets), which are part of the Polymesh node and in scope (see [In scope](#in-scope) above). The `eth-rpc` layer is run unmodified from upstream and falls under the upstream-dependency exclusion below.
- Test code: unit tests, JavaScript/TypeScript integration tests, benchmarks, and CI/CD configuration.
- Legacy confidential assets (v1 / MERCAT) functionality and the [Polymesh Private](https://github.com/PolymeshAssociation/polymesh-private) repositories.
- Websites, documentation sites, DNS, email infrastructure, social media accounts, and other web properties.
- Third-party services and infrastructure, and vulnerabilities in upstream dependencies (e.g., Substrate / Polkadot SDK) unless a concrete, Polymesh-specific exploit path is demonstrated.

## Exhibit B – Rewards Details

You can elect to receive Bounty Payouts via wire-transfer (from USD to your preferred currency), USDC or another stablecoin, or POLYX. For a crypto payout, we'll need the appropriate wallet address: an ETH address for USDC or another Ethereum-based stablecoin, or a Polymesh address for POLYX.

We will communicate with you by email and need the following information in order to process a Bounty Payout:

- Participant Name
- Participant Address
- Phone Number
- Email Address
- Wire Information (Bank Name, Bank Address, Account Number, SWIFT Code)
- Crypto Address (for payment in USDC, another stablecoin, or POLYX; specify the network)

Bounty Payouts are processed twice a month, on the 15th and the last day of the month. You can expect your payout to arrive within 10 days of the next processing date.

Please note that we cannot issue Bounty Payouts to individuals, entities, or residents of countries that are listed in the U.S. Department of The Treasury Office of Foreign Assets Control (OFAC) sanctions list, European Union (EU) sanctions list, or the United Nations (UN) Security Council sanctions list.

Bounty Payouts are classified according to the severity of the reported Vulnerability. Severity is determined by the impact class that the Report credibly demonstrates, assessed against realistic impact on the Mainnet network and adjusted for the prerequisites, cost, and likelihood of a real attack (for Confidential Assets, which is not yet deployed to Mainnet, severity is assessed against its intended Mainnet behavior). The impact classes below are representative, not exhaustive; impacts not listed will be classified by analogy to the closest listed class. Severity classification, eligibility, and the amount of any Bounty Payout are determined at Polymesh's sole and final discretion. The amount awarded within a range reflects, among other factors, the quality of the Report, the reproducibility of the finding, the realism of the demonstrated impact, and the quality of any suggested fix.

The following principles apply to severity classification:

Payouts, if any, for Responsible-Disclosure Items are entirely discretionary and are not subject to the schedule above.

Where we receive multiple Reports about the same or similar vulnerability, we will reward a Bounty Payout only for the first Report received. In addition, multiple vulnerabilities that relate to one underlying vulnerability will be treated as one vulnerability and entitled to one Bounty Payout.
