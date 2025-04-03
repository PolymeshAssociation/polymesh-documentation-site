---
title: On-Chain Voting
description: On-Chain Voting
id: on-chain-voting
slug: /corporate-actions/on-chain-voting
sidebar_label: On-Chain Voting
tags:
  - corporate actions
  - voting
---
# Corporate Ballots
Polymesh can also handle ballots on-chain. For example, a corporation's annual general meeting can be conducted using ballots.

# Ballot Structure
A ballot has a start and end date, during which investors can vote on motions included in the ballot. These motions in turn are associated with descriptions and links to more information.

More importantly, however, motions contain choices, e.g., a) "aye", b) "aye with X amendment", and c) "nay", to which weights can be assigned. These weights or votes are based on how many tokens each investor holds. For example, an investor with 200 tokens will have 200 votes and one with 100 tokens has 100. Those 200 votes could be assigned like so: a) 50, b) 150, c) 0.

Motions are independent of each other. For example, consider a vote on who should be in the board of directors, and a motion to discharge the old board from liability. These would be independent, and therefore, all 200 tokens can be reused on each motion.

Optionally, a ballot can be configured with ranked-choice voting (RCV). This allows voters to specify that the weight, assigned to a choice not making it, should fall back to a different choice. For example, consider 3 choices paired with weights:

a) 49 votes, no fallback
b) 100 votes, fallback to a)
c) 120 votes, no fallback.
In this case, c) initially has most weight assigned to it. However, once a) has been discarded, the 49 votes it would move over to b), which now has 149 votes in total. Therefore, b) becomes the adopted choice.

# Creating a Ballot
Now let's go over how a ballot can be made, tweaked, and voted on. Once a CA of the notice kind has been created, the a ballot can be attached using 'corporateBallot::attach_ballot' with the following parameters:

- `ca_id` identifies the Asset ID and the CA to attach the ballot to,
- `range` specifies the time when voting starts and ends,
- `meta` specifies the ballot's metadata as aforementioned and
- `rcv` specifies whether RCV is enabled for this ballot.

# Configuring a Ballot
After the ballot has been created, but before voting has started, the ballot's configuration may be amended, in 3 ways:

- 'change_end' to change when no more votes will be accepted,
- 'change_meta' to change the title and the motions,
- 'change_rcv' to change whether RCV is supported or not.
Moreover, before the start, the ballot can be removed using 'remove_ballot.

Once the start date is due, any token holder can use vote to assign votes to all choices. 

# Voting on a Ballot
Investors can vote on a ballot by calling 'corporateBallot::vote' with the following parameters:
- 'ca_id`: This identifies the attached ballot's CA.
- `votes`: This specifies the balances to assign to each choice in the ballot. The full voting power may be used for each motion in the ballot.

::: info 
Investors can vote as many times as they want, regretting their choices, until the end of the voting is due.
:::