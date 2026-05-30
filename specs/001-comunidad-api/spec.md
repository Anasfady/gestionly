# Feature Specification: Gestionly (Comunidad Vecinos API)

**Feature Branch**: `001-comunidad-api`

**Created**: 2026-05-29

**Status**: Draft

**Input**: User description: "based on @[API_Contract_Gestionly.yaml] I wan you to develop the API in express in the /backend folder... MVP of a application to manage a spanish 'comunidad de vecinos'... building (list, see, create), apartments (coefficient, tenants), budget/fees, weighted polls, owners voting." (Improved using Product Requirements Document PDF)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Multi-Unit Building Setup (Priority: P1)

As a President (Administrator), I want to initialize the building profile and define the registry of units (Apartments, Commercial Locals, Parking, Storage) with their specific coefficients and official Spanish Catastral Reference, so that the community structure and financial weights are accurately represented.

**Why this priority**: Highly critical because all fee calculations and weighted votes depend on the ownership share percentage of each unit.

**Independent Test**: Can be verified by making GET and PUT requests to `/api/building` and POSTing several units to `/api/units` (bulk upload support) and asserting the total coefficient sum equals 100.0000%.

**Acceptance Scenarios**:

1. **Given** no building profile exists, **When** the President updates the building details at `/api/building`, **Then** the record is stored and can be retrieved.
2. **Given** a building profile, **When** the President registers a new unit (Type: Commercial Local) at `POST /api/units` with `share_percentage: 15.5000` and `referencia_catastral: "12345678901234567890"`, **Then** the unit is successfully created.
3. **Given** a list of units, **When** the President enables a "Financial Commitment" exemption for a ground floor shop (e.g., exempt from elevator maintenance), **Then** the exemption is recorded for future fee calculations.

---

### User Story 2 - Automated Invoicing & Collections (Priority: P1)

As an Owner, I want to receive my monthly community fees or one-time special assessments (derramas) automatically calculated based on my unit's coefficient, and pay them via a "One-Tap" link using my preferred payment method.

**Why this priority**: Essential for automating the financial management of the community and reducing delinquency.

**Independent Test**: Set a total budget or extraordinary expense, verify the system generates individual "Draft Expenses" and final PDF invoices with correct amounts (Unit Share = Total Expense * (Coefficient / 100)), and ensure payment success via webhook updates the invoice status to "Paid".

**Acceptance Scenarios**:

1. **Given** an annual budget, **When** the billing cycle triggers, **Then** the system automatically generates PDF invoices for all units and sends push/email notifications with a "Pay Now" link.
2. **Given** a pending invoice, **When** an Owner pays via the integrated gateway, **Then** the `invoice_status` updates from `Pending` to `Paid` in real-time without admin intervention.
3. **Given** an unpaid invoice past 30 days, **When** the system runs a daily check, **Then** the unit is flagged with "Moroso" (Delinquent) status, affecting its voting rights.

---

### User Story 3 - Weighted & Compliant Voting (Priority: P1)

As a President, I want to create community polls (Secret or Open) regarding budgets or contractor quotes, and as an Owner, I want to cast a weighted vote that is automatically calculated based on my unit's coefficient, ensuring legal compliance with Spanish property laws.

**Why this priority**: Core mechanism for official democratic decisions in Spanish neighbor communities.

**Independent Test**: Create a poll (Binary or Multiple Choice), submit votes (including delegated votes), and retrieve results verifying the option percentages equal the sum of ownership shares of the valid voters (excluding "Moroso" units if configured).

**Acceptance Scenarios**:

1. **Given** a President creates a poll with an attached PDF quote and sets a deadline, **Then** Owners receive a push notification to vote.
2. **Given** an open poll, **When** an Owner of a unit (12.5% share) votes for "Option A", **Then** the vote is recorded with its respective weight and an audit trail (unique ID, timestamp, IP log).
3. **Given** a closed poll, **When** the system finalizes results, **Then** it automatically generates a PDF summary (Acta) and notifies all stakeholders.

---

### Edge Cases

- **"Inquilino" Handover**: When an Owner removes a Tenant, the Tenant's access MUST be revoked immediately, and historical data MUST be archived.
- **Coefficient Sum Mismatch**: If the sum of all unit `share_percentage` does not equal exactly 100.0000% upon building activation, the system MUST block billing and voting.
- **Partial Payments**: The system MUST block Owners from paying only a portion of their total debt through the automated gateway unless a specific payment plan is authorized.
- **Voting Rights Revocation**: A unit with "Moroso" (Delinquent) status (invoice unpaid for >30 days) MUST have its voting rights automatically suspended in the voting module if configured by community rules.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001 (Unit Management)**: System MUST support multiple unit types: Apartment, Commercial Local, Parking, Storage.
- **FR-002 (Mass Import)**: System MUST support CSV/Excel upload for bulk unit registration.
- **FR-003 (Expense Distribution)**: System MUST automatically calculate unit shares for any expense: `Unit Share = Total Expense * (Coefficient / 100)`.
- **FR-004 (Invoice Generation)**: System MUST generate immutable PDF invoices with professional templates (including Tax ID and breakdown of concepts).
- **FR-005 (Payment Integration)**: System MUST integrate with standard payment gateways and support SEPA Direct Debit for auto-reconciliation via webhooks.
- **FR-006 (Debt Management)**: System MUST automatically flag "Moroso" status and send automated reminders (3 days before due, 1 day after overdue).
- **FR-007 (Voting Logic)**: System MUST support Secret Ballots, Open Voting, Binary (Yes/No/Abstain), and Multiple Choice (Contractor selection).
- **FR-008 (Vote Delegation)**: System MUST provide an interface for Owners to formally assign their vote to another user or the President.
- **FR-009 (Audit Trail)**: Every vote MUST generate a unique ID, timestamp, and IP log.
- **FR-010 (Certificate Generation)**: System MUST automatically generate a PDF Acta upon closing a vote.
- **FR-011 (Incident Reporting)**: Tenants and Owners MUST be able to report "Incidencias" (damages), view community rules, and receive notices.
- **FR-012 (Authentication & Privacy)**: System MUST implement role-based access control (President, Owner, Tenant). Tenants cannot see Owner payment history or vote unless delegated.

### Key Entities

- **Building**: Physical community structure.
- **Unit**: Individual property unit (Apartment, etc.) with coefficient (up to 4 decimal places).
- **User**: Stakeholder with roles (President, Owner, Tenant).
- **Invoice**: Document for recurring or ad-hoc fees.
- **Expense**: Draft distribution of a total invoice among units.
- **Poll**: Decision-making ballot (Binary/Multiple Choice/Secret).
- **Vote**: Record of a cast ballot with weight and audit trail.
- **Incident**: Reported maintenance issue.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Reduce building onboarding from hours to <10 minutes (using bulk upload).
- **SC-002**: Zero manual corrections needed for monthly fee distributions.
- **SC-003**: Reduce average time for an owner to pay from 15 days to <5 days.
- **SC-004**: Increase average voter turnout by at least 40% compared to physical meetings.
- **SC-005**: Reduce average time to approve a budget from weeks to <5 days.

## Assumptions

- **PCI Compliance**: Payment info (credit card numbers) is never stored on the app’s servers; it is handled entirely by the PCI-compliant gateway.
- **Data Encryption**: All sensitive data is encrypted at rest to ensure privacy.
- **Push Notification Infrastructure**: A reliable push notification service is available for real-time alerts.
- **Secure Document Storage**: Immutable PDF files (invoices/actas) are stored in secure cloud storage.
