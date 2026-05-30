# API Requirements Quality Checklist: Gestionly (Comunidad Vecinos API)

**Purpose**: Validate the quality, clarity, and completeness of the API requirements for the Gestionly MVP.
**Created**: 2026-05-29
**Feature**: [spec.md](../spec.md)

## Requirement Completeness
- [ ] CHK001 - Are the specific data fields for the CSV/Excel mass import explicitly defined? [Gap, Spec §FR-002]
- [ ] CHK002 - Are the mandatory fields for "Unit Profile" (Block, Floor, Door, Type) documented in the functional requirements? [Gap, Spec §FR-001]
- [ ] CHK003 - Are error response requirements defined for when a webhook payment update fails? [Gap, Spec §FR-005]
- [ ] CHK004 - Does the spec define what happens to active polls when a unit's coefficient is updated mid-vote? [Gap, Spec §FR-007]
- [ ] CHK005 - Are the criteria for "archiving" historical data during an "Inquilino" handover specified? [Gap, Spec §Edge Cases]

## Requirement Clarity
- [ ] CHK006 - Is the format and precision for the "Referencia Catastral" (20 characters) consistent across all unit types? [Clarity, Spec §User Story 1]
- [ ] CHK007 - Is the "period_divisor" for fee calculation explicitly mapped to the billing cycles (Monthly=12, Quarterly=4, etc.) in the requirements? [Clarity, Spec §FR-003]
- [ ] CHK008 - Is the "auto-reconciliation" behavior defined for over-payments or duplicate transactions? [Ambiguity, Spec §FR-005]
- [ ] CHK009 - Is "real-time" quantified with a specific latency threshold for result aggregation? [Clarity, Spec §SC-001]

## Requirement Consistency
- [ ] CHK010 - Do the unit types in §FR-001 align with the "Unit Profile" fields mentioned in the Product Requirements? [Consistency, Spec §FR-001]
- [ ] CHK011 - Are the "Moroso" status triggers consistent between the Debt Management (§FR-006) and Voting Logic (§FR-007) requirements? [Consistency]
- [ ] CHK012 - Do the "Financial Commitment" exemptions in §User Story 1 have corresponding logic defined in the fee distribution requirements? [Consistency, Spec §FR-003]

## Scenario & Edge Case Coverage
- [ ] CHK013 - Are requirements defined for a "Tie" scenario in a multiple-choice contractor poll? [Coverage, Gap]
- [ ] CHK014 - Does the spec define the system behavior when an Owner attempts to delegate a vote to a "Moroso" user? [Coverage, Edge Case]
- [ ] CHK015 - Are requirements specified for handling units with 0.0000% coefficients (e.g., shared community spaces)? [Edge Case, Gap]
- [ ] CHK016 - Is the behavior defined for generating an "Acta" if a poll is closed manually before the deadline? [Coverage, Spec §FR-010]

## Non-Functional & Security Requirements
- [ ] CHK017 - Are the specific IP logging requirements for the audit trail defined for both vote casting and delegation? [Completeness, Spec §FR-009]
- [ ] CHK018 - Is the "Encryption at Rest" requirement mapped to specific sensitive entities like Unit coefficients or Owner details? [Clarity, Spec §Assumptions]
- [ ] CHK019 - Are the notification triggers (Push/Email) defined with specific fallback behaviors if the primary service is unavailable? [Gap, Spec §Assumptions]

## Notes
- Checklist generated with a focus on **Lightweight Audit** (Q1: A) and **Standard Billing Complexity** (Q3: A).
- Granular document access was explicitly excluded from this quality check (Q2: Out of Scope).
