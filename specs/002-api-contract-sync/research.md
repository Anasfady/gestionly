# Research: API Contract Synchronization

## Decisions

### 1. Missing User Endpoints
- **Decision**: Implement `GET /api/users/me`, `GET /api/users`, and `POST /api/users` in the backend.
- **Rationale**: These are defined in the YAML contract but missing from the Express implementation.
- **Implementation**: Create `user.js` in `routes`, `controllers`, and update `User` model to support listing by role and creation.

### 2. Model Alignment (Apartments)
- **Decision**: Update `API_Contract_Gestionly.yaml` to include `type` and `exempt_from_fees` in the `Apartment` and `ApartmentInput` definitions.
- **Rationale**: The database schema and implementation already use these fields. They are essential for the application logic (e.g., distinguishing between apartments and parking spots).
- **Alternatives**: Removing them from the code was rejected as they are already integrated into the DB and likely needed for future features (like fee calculation exceptions).

### 3. Model Alignment (Polls)
- **Decision**: Update `API_Contract_Gestionly.yaml` to include `end_date` and `is_secret` in the `Poll` definition.
- **Rationale**: The database schema includes these fields, indicating they are part of the intended design.

### 4. Runtime Validation
- **Decision**: Uncomment and configure `express-openapi-validator` in `backend/src/api/app.js`.
- **Rationale**: Required by the project Constitution (Principle IV) to ensure ongoing compliance.

### 5. Swagger Version Compatibility
- **Decision**: Keep using Swagger 2.0 for now as the contract is already valid in that format.
- **Rationale**: `express-openapi-validator` and other tools in the project support v2. Converting to v3 is out of scope for this task unless specifically requested.

## Findings

- The `X-User-Id` header is used for simple authentication in tests.
- The `User` model currently lacks a `create` method.
- The `Unit` model `create` method already handles `type` but it's not exposed in the API contract.
