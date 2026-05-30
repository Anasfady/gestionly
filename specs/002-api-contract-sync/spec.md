# Feature Specification: API Contract Synchronization

**Feature Branch**: `002-api-contract-sync`

**Created**: Saturday, May 30, 2026

**Status**: Draft

**Input**: User description: "Synchronize the backend API implementation with the API_Contract_Gestionly.yaml contract. This includes implementing missing user routes (/api/users, /api/users/me) and ensuring all models (Apartment, Poll, etc.) align with the YAML definitions, including any missing fields in the spec or extra fields in the code."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Retrieve User Profile (Priority: P1)

As a logged-in user, I want to retrieve my profile information and permissions so that the frontend can render the appropriate dashboard for my role (President, Owner, or Tenant).

**Why this priority**: Critical for frontend navigation and security enforcement.

**Independent Test**: Can be tested by making a GET request to `/api/users/me` with a valid user ID header and verifying the response contains user details and associated apartments.

**Acceptance Scenarios**:

1. **Given** a user with ID `usr_pres_001`, **When** I GET `/api/users/me`, **Then** I receive a 200 OK with role `President` and my profile details.
2. **Given** no user ID is provided, **When** I GET `/api/users/me`, **Then** I receive a 401 Unauthorized.

---

### User Story 2 - User Management (Priority: P1)

As a President, I want to list and create users (Owners and Tenants) so that I can manage the community directory.

**Why this priority**: Fundamental administrative capability.

**Independent Test**: Can be tested by GETing `/api/users?role=Owner` and POSTing a new user to `/api/users`.

**Acceptance Scenarios**:

1. **Given** I am a President, **When** I GET `/api/users?role=Owner`, **Then** I see a list of all registered Owners.
2. **Given** I am a President, **When** I POST a new user to `/api/users`, **Then** the user is created and I receive a 201 Created.
3. **Given** I am an Owner, **When** I POST to `/api/users`, **Then** I receive a 403 Forbidden.

---

### User Story 3 - Data Model Consistency (Priority: P2)

As a developer, I want the API models to be consistent with the documented contract so that client-side integrations are predictable and type-safe.

**Why this priority**: Essential for long-term maintainability and multi-platform support.

**Independent Test**: Run automated contract validation tests that compare response schemas against the YAML definition.

**Acceptance Scenarios**:

1. **Given** an apartment is retrieved, **When** I inspect the JSON, **Then** it includes `referencia_catastral` and `share_percentage` as defined in the spec.
2. **Given** a poll is retrieved, **When** I inspect the JSON, **Then** it includes `status` and correctly formatted options.

---

### Edge Cases

- **Missing Parameters**: What happens when `/api/users` is called without the `role` query parameter? (Should return 400 Bad Request).
- **Duplicate Data**: How does the system handle a POST to `/api/users` with an email that already exists? (Should return 400 or 409).
- **Schema Mismatches**: How does the system handle extra fields in the request body that are not in the spec? (Should ignore them or fail validation depending on strictness).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Implement `GET /api/users/me` returning `UserSessionResponse` (user profile + associated apartment IDs).
- **FR-002**: Implement `GET /api/users` requiring a `role` query parameter (President, Owner, Tenant).
- **FR-003**: Implement `POST /api/users` to register new users with name, email, phone, and role.
- **FR-004**: Update `Apartment` and `ApartmentInput` in the YAML to include `type` and `exempt_from_fees` if they are to be part of the official contract.
- **FR-005**: Update `Poll` in the YAML to include `end_date` and `is_secret` to match the backend implementation.
- **FR-006**: Ensure all existing controllers return fields exactly as named in the `API_Contract_Gestionly.yaml` (e.g., check `phone_number` vs `phone`).
- **FR-007**: Enable `express-openapi-validator` in `app.js` (uncomment it) to enforce the contract at runtime.

### Key Entities *(include if feature involves data)*

- **User**: Represents a person in the system (President, Owner, Tenant) with contact info and role.
- **Apartment**: Represents a physical unit with ownership details and cadastral reference.
- **Poll**: Represents a community vote with options and results weighted by ownership.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: `npx swagger-cli validate API_Contract_Gestionly.yaml` returns success.
- **SC-002**: All 11+ endpoints defined in the YAML are reachable and return valid responses.
- **SC-003**: Automated contract tests (including newly added ones for Users) pass with 100% success rate.
- **SC-004**: `express-openapi-validator` does not throw validation errors for standard CRUD operations.

## Assumptions

- The `API_Contract_Gestionly.yaml` is the source of truth for field naming.
- `type` for apartments defaults to "Apartment" and is restricted to the defined enum.
- `referencia_catastral` is exactly 20 characters as per Spanish standards.
- User authentication is performed via `X-User-Id` header during the development phase.
