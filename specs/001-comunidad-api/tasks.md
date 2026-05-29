# Tasks: Gestionly (Comunidad Vecinos API)

**Input**: Design documents from `specs/001-comunidad-api/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are included as per the implementation plan's requirement for contract and integration testing.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create backend workspace structure (`backend/src/api`, `backend/src/controllers`, `backend/src/services`, `backend/src/models`, `backend/src/config`, `backend/tests`)
- [ ] T002 [P] Initialize Node.js project in `backend/package.json` with dependencies (`express`, `better-sqlite3`, `express-openapi-validator`, `dotenv`, `pdfkit`, `csv-parser`, `xlsx`)
- [ ] T003 [P] Configure environment variables in `backend/.env.example` and linting in `backend/.eslintrc.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Setup `better-sqlite3` database connection and migration handler in `backend/src/config/database.js`
- [ ] T005 [P] Define initial SQLite schemas (Users, Buildings) in `backend/src/models/schemas.sql`
- [ ] T006 [P] Implement mock header-based authentication middleware in `backend/src/api/middleware/auth.js`
- [ ] T007 [P] Configure Express app with `express-openapi-validator` in `backend/src/api/app.js`
- [ ] T008 [P] Setup modular routing structure in `backend/src/api/routes/`
- [ ] T009 [P] Create User model for data access in `backend/src/models/User.js`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Setup of Building & Apartments (Priority: P1) 🎯 MVP

**Goal**: Initialize building profile and define unit registry with coefficients.

**Independent Test**: Verify building details retrieval and successful registration of apartments with 100% total coefficient.

### Tests for User Story 1

- [ ] T009 [P] [US1] Contract test for building and apartment endpoints in `backend/tests/contract/test_building_units.js`
- [ ] T010 [P] [US1] Integration test for building/apartment registration journey in `backend/tests/integration/test_building_setup.js`

### Implementation for User Story 1

- [ ] T011 [P] [US1] Update `backend/src/models/schemas.sql` with Buildings and Apartments table definitions
- [ ] T012 [P] [US1] Create Building model in `backend/src/models/Building.js`
- [ ] T013 [P] [US1] Create Unit/Apartment model in `backend/src/models/Unit.js`
- [ ] T014 [US1] Implement building controller for GET/PUT in `backend/src/controllers/building.js`
- [ ] T015 [US1] Implement unit controller for registration and listing in `backend/src/controllers/unit.js`
- [ ] T016 [US1] Implement bulk unit registration service using `csv-parser`/`xlsx` in `backend/src/services/buildingService.js`
- [ ] T017 [US1] Register building and apartment routes in `backend/src/api/app.js`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Annual Budget & Dynamic Fee Calculation (Priority: P1)

**Goal**: Calculate community fees based on budget and ownership share.

**Independent Test**: Set annual budget and verify `/api/fees` returns correct amounts for different frequencies.

### Tests for User Story 2

- [ ] T018 [P] [US2] Contract test for budget and fee endpoints in `backend/tests/contract/test_budget_fees.js`
- [ ] T019 [P] [US2] Integration test for fee calculation journey in `backend/tests/integration/test_fee_calculation.js`

### Implementation for User Story 2

- [ ] T020 [P] [US2] Update `backend/src/models/schemas.sql` with Budgets and Invoices table definitions
- [ ] T021 [P] [US2] Create Budget model in `backend/src/models/Budget.js`
- [ ] T022 [P] [US2] Create Invoice model in `backend/src/models/Invoice.js`
- [ ] T023 [US2] Implement dynamic fee calculation service in `backend/src/services/feeService.js`
- [ ] T024 [US2] Implement budget controller in `backend/src/controllers/budget.js`
- [ ] T025 [US2] Implement PDF invoice generation using `pdfkit` in `backend/src/services/invoiceService.js`
- [ ] T026 [US2] Implement payment webhook handler in `backend/src/controllers/invoice.js`
- [ ] T027 [US2] Register budget, fee, and webhook routes in `backend/src/api/app.js`

**Checkpoint**: At this point, User Story 2 should be fully functional and testable independently.

---

## Phase 5: User Story 3 - Weighted Community Polls & Voting (Priority: P1)

**Goal**: Create polls and cast weighted votes based on ownership shares.

**Independent Test**: Create a poll, cast weighted votes, and verify correctly aggregated results.

### Tests for User Story 3

- [ ] T028 [P] [US3] Contract test for poll and vote endpoints in `backend/tests/contract/test_polls_voting.js`
- [ ] T029 [P] [US3] Integration test for weighted voting journey in `backend/tests/integration/test_voting.js`

### Implementation for User Story 3

- [ ] T030 [P] [US3] Update `backend/src/models/schemas.sql` with Polls and Votes table definitions
- [ ] T031 [P] [US3] Create Poll model in `backend/src/models/Poll.js`
- [ ] T032 [P] [US3] Create Vote model in `backend/src/models/Vote.js`
- [ ] T033 [US3] Implement weighted voting and result aggregation service in `backend/src/services/voteService.js`
- [ ] T034 [US3] Implement poll controller in `backend/src/controllers/poll.js`
- [ ] T035 [US3] Implement vote delegation logic in `backend/src/services/voteService.js`
- [ ] T036 [US3] Register poll and voting routes in `backend/src/api/app.js`

**Checkpoint**: All P1 user stories should now be independently functional.

---

## Phase 6: User Story 4 - Incident Reporting (Priority: P2)

**Goal**: Report building damage or maintenance issues.

**Independent Test**: Submit an incident and verify it is recorded with correct status.

### Tests for User Story 4

- [ ] T037 [P] [US4] Contract test for incident endpoints in `backend/tests/contract/test_incidents.js`
- [ ] T038 [P] [US4] Integration test for incident reporting journey in `backend/tests/integration/test_incidents.js`

### Implementation for User Story 4

- [ ] T039 [P] [US4] Update `backend/src/models/schemas.sql` with Incidents table definition
- [ ] T040 [P] [US4] Create Incident model in `backend/src/models/Incident.js`
- [ ] T041 [US4] Implement incident controller and status management in `backend/src/controllers/incident.js`
- [ ] T042 [US4] Register incident routes in `backend/src/api/app.js`

**Checkpoint**: All user stories should now be functional.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and documentation

- [ ] T043 [P] Final code cleanup and refactoring in `backend/src/`
- [ ] T044 [P] Update `backend/README.md` with final API documentation and setup instructions
- [ ] T045 Run full test suite (`npm test --workspace=backend`) to ensure no regressions
- [ ] T046 Validate quickstart instructions in `specs/001-comunidad-api/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup (Phase 1).
- **User Stories (Phase 3-6)**: All depend on Foundational (Phase 2).
- **Polish (Phase 7)**: Depends on all user stories being complete.

### User Story Dependencies

- **US1 (P1)**: Independent after Phase 2.
- **US2 (P1)**: Independent after Phase 2, but logically follows US1 for meaningful fee distribution data.
- **US3 (P1)**: Independent after Phase 2, but logically follows US1 for weighted share data.
- **US4 (P2)**: Independent after Phase 2.

### Within Each User Story

- Tests FIRST, then implementation.
- Schema updates before models.
- Models before services/controllers.
- Routes registration as the final step of implementation.

### Parallel Opportunities

- T002 and T003 in Setup.
- T005, T006, T007, T008 in Foundational.
- Once Phase 2 is complete, US1, US2, US3, and US4 can be developed in parallel if multiple developers are available.
- Within each story, tasks marked [P] (mostly models and tests) can run in parallel.

---

## Implementation Strategy

### MVP First (User Story 1, 2, 3)

1. Complete Phase 1 & 2 (Setup & Foundation).
2. Complete US1 (Building & Units) -> Essential for community structure.
3. Complete US2 (Budget & Fees) -> Core financial logic.
4. Complete US3 (Voting) -> Core community logic.
5. **VALIDATE MVP**: Run integration tests for US1, US2, and US3.

### Incremental Delivery

1. Deliver Setup/Foundation.
2. Deliver US1 -> Building management ready.
3. Deliver US2 -> Financial management ready.
4. Deliver US3 -> Voting system ready.
5. Deliver US4 -> Maintenance reporting ready.

---

## Notes

- All code MUST match the `API_Contract_Gestionly.yaml` Swagger contract.
- SQLite database is local and zero-config.
- PDF generation is programmatic via `pdfkit`.
- Authentication is mock header-based for development ease.
