# Tasks: API Contract Synchronization

**Input**: Design documents from `/specs/002-api-contract-sync/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Tests**: Contract tests are required per project principles.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Update the source of truth (API Contract)

- [x] T001 Update `API_Contract_Gestionly.yaml` to include `type` and `exempt_from_fees` in `Apartment` and `ApartmentInput`, and `end_date` and `is_secret` in `Poll`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure and model alignment

- [x] T002 Enable `express-openapi-validator` in `backend/src/api/app.js` and configure it to point to `API_Contract_Gestionly.yaml`
- [x] T003 Update `Unit.create` and `Unit.findAll` in `backend/src/models/Unit.js` to handle `exempt_from_fees`
- [x] T004 Update `backend/src/models/Poll.js` to include `end_date` and `is_secret` in CRUD operations

---

## Phase 3: User Story 1 - Retrieve User Profile (Priority: P1) 🎯 MVP

**Goal**: Implement `/api/users/me` to allow users to see their profile and permissions.

**Independent Test**: GET `/api/users/me` with `X-User-Id` header returns the correct user profile and associated apartment IDs.

### Tests for User Story 1

- [x] T005 [P] [US1] Create contract test for `GET /api/users/me` in `backend/tests/contract/user.test.js`

### Implementation for User Story 1

- [x] T006 [US1] Implement `getAssociatedApartments(userId)` in `backend/src/models/User.js`
- [x] T007 [US1] Create `getMyProfile` controller in `backend/src/controllers/user.js`
- [x] T008 [US1] Create `backend/src/api/routes/user.js` and register `GET /me`
- [x] T009 [US1] Mount `userRoutes` at `/users` in `backend/src/api/routes/index.js`

---

## Phase 4: User Story 2 - User Management (Priority: P1)

**Goal**: Implement `/api/users` for the President to list and create users.

**Independent Test**: GET `/api/users?role=Owner` returns a list of owners; POST `/api/users` creates a new user.

### Tests for User Story 2

- [x] T010 [P] [US2] Create contract tests for `GET /api/users` and `POST /api/users` in `backend/tests/contract/user.test.js`

### Implementation for User Story 2

- [x] T011 [US2] Implement `User.create(data)` and `User.findByRole(role)` in `backend/src/models/User.js`
- [x] T012 [US2] Create `getUsers` and `createUser` controllers in `backend/src/controllers/user.js`
- [x] T013 [US2] Register `GET /` and `POST /` in `backend/src/api/routes/user.js`

---

## Phase 5: User Story 3 - Data Model Consistency (Priority: P2)

**Goal**: Ensure all existing endpoints strictly match the YAML contract.

**Independent Test**: Run all contract tests; none should fail due to schema mismatches.

### Implementation for User Story 3

- [ ] T014 [P] [US3] Verify and update field naming (e.g., `phone_number`) in `backend/src/controllers/` to match YAML definitions
- [ ] T015 [P] [US3] Ensure `Apartment` responses include `type` and `exempt_from_fees` after model updates

---

## Phase 6: Polish & Cross-Cutting Concerns

- [x] T016 Run all tests in `backend/tests/contract/` and ensure they pass with validation enabled
- [x] T017 Remove the temporary `backend/verify_routes.js` script
- [x] T018 Run `npx swagger-cli validate API_Contract_Gestionly.yaml` to ensure final contract validity

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup & Foundational**: MUST be completed first.
- **User Story 1 & 2**: Can be done in parallel once Foundational is done.
- **User Story 3**: Depends on US1/US2 completion for full verification.
- **Polish**: Final step.

## Implementation Strategy

1. **MVP**: Complete US1 and US2 first as they provide core value.
2. **Strictness**: Enable validator early to catch issues during implementation.
