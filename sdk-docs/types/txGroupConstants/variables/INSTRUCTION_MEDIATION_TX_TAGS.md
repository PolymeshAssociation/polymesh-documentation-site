# Variable: INSTRUCTION\_MEDIATION\_TX\_TAGS

> > `const` **INSTRUCTION\_MEDIATION\_TX\_TAGS**: \[[`AffirmInstructionAsMediator`](../../enumerations/SettlementTx.mdx#affirminstructionasmediator), [`LockInstruction`](../../enumerations/SettlementTx.mdx#lockinstruction), [`RejectInstructionAsMediator`](../../enumerations/SettlementTx.mdx#rejectinstructionasmediator), [`UnlockInstruction`](../../enumerations/SettlementTx.mdx#unlockinstruction)\]

# Variable: INSTRUCTION\_MEDIATION\_TX\_TAGS

> `const` **INSTRUCTION\_MEDIATION\_TX\_TAGS**: \[[`AffirmInstructionAsMediator`](../../enumerations/SettlementTx.mdx#affirminstructionasmediator), [`LockInstruction`](../../enumerations/SettlementTx.mdx#lockinstruction), [`RejectInstructionAsMediator`](../../enumerations/SettlementTx.mdx#rejectinstructionasmediator), [`UnlockInstruction`](../../enumerations/SettlementTx.mdx#unlockinstruction)\]

Defined in: [src/types/txGroupConstants.ts:424](https://github.com/PolymeshAssociation/polymesh-sdk/blob/1473bc3749248826a69330d9fc1dbaf67202c736/src/types/txGroupConstants.ts#L424)

Transaction tags for Instruction Mediation operations
Contains the operations available to an Instruction's mediators — affirming or rejecting as a
mediator, and locking/unlocking an Instruction for execution.

Values:
- TxTags.settlement.AffirmInstructionAsMediator
- TxTags.settlement.LockInstruction
- TxTags.settlement.RejectInstructionAsMediator
- TxTags.settlement.UnlockInstruction
