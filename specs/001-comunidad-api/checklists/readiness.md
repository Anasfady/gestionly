# Readiness Checklist: Gestionly (Comunidad Vecinos API)

**Purpose**: Validate that the requirements are implementation-ready.
**Created**: 2026-05-29
**Feature**: [spec.md](../spec.md)

## Requirement Completeness
- [ ] CHK001 - Are the CSV/Excel bulk import file structure specifications (columns/types) documented? [Completeness, Spec §FR-002]
- [ ] CHK002 - Are the constraints for "Ad-hoc" (Derramas) vs "Recurring" invoices explicitly defined for all fee scenarios? [Completeness, Spec §FR-004]
- [ ] CHK003 - Are notification fallback mechanisms (email/push) documented when the primary gateway fails? [Completeness, Spec §Assumptions]

## Requirement Clarity
- [ ] CHK004 - Is the "Weighted Voting" aggregation algorithm (sum of shares / total participating shares) clearly specified for the results endpoint? [Clarity, Spec §FR-007]
- [ ] CHK005 - Is the criteria for the "Moroso" status (e.g., number of days overdue, amount threshold) explicitly defined? [Clarity, Spec §FR-006]
- [ ] CHK006 - Is the "real-time" latency requirement for fee calculation quantified (e.g., < 200ms)? [Clarity, SC-002]

## Requirement Consistency
- [ ] CHK007 - Do the voting rights definitions consistently include "Moroso" status across Poll/Budget/Vote requirements? [Consistency, Spec §Edge Cases]
- [ ] CHK008 - Is the "Unit Type" classification consistent between the Building registry (§FR-001) and Financial Commitment (§FR-003) requirements? [Consistency]

## Scenario & Edge Case Coverage
- [ ] CHK009 - Are requirements specified for poll state transitions if the deadline expires with 0% participation? [Coverage, Edge Case]
- [ ] CHK010 - Does the spec define behavior for an Owner removing a tenant who currently has an active maintenance ticket? [Coverage, Edge Case]
- [ ] CHK011 - Are requirements defined for system behavior when a unit coefficient is updated *during* an active billing cycle? [Coverage, Edge Case]

## Non-Functional & Security Requirements
- [ ] CHK012 - Are the specific "secure storage" requirements for immutable PDF files documented (e.g., encryption, access restrictions)? [Clarity, Spec §Assumptions]
- [ ] CHK013 - Are the data retention requirements for archived "Inquilino" historical data specified (e.g., per Spanish data law)? [Completeness, Spec §Edge Cases]

## Notes
- Checklist generated to validate readiness for task generation and implementation.
