# Implementation Plan: Gestionly (Comunidad Vecinos API)

**Branch**: `001-comunidad-api` | **Date**: 2026-05-29 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-comunidad-api/spec.md`

**Note**: This plan is created by the `/speckit-plan` command. It details the architecture, dependencies, project structure, and verification plan.

---

## Summary

We will develop a robust Express.js REST API inside the `backend/` directory of the monorepo workspace. The API will implement the "Comunidad de Vecinos" management system, including building setup, unit registry, automated invoicing, weighted polls, and incident reporting. All endpoints will strictly conform to the `API_Contract_Gestionly.yaml` Swagger contract, enforced by runtime validation middleware and verified with automated integration tests.

## Technical Context

**Language/Version**: Node.js 20+ (ESM)

**Primary Dependencies**: `express`, `express-openapi-validator`, `dotenv`, `better-sqlite3` (assumed based on `schemas.sql` and `database.js`)

**Storage**: SQLite (`better-sqlite3`)

**Testing**: `mocha`, `chai`, `supertest` (as per Constitution)

**Target Platform**: Node.js

**Project Type**: Web service (REST API)

**Performance Goals**:
- SC-001: Building onboarding < 10 mins (bulk upload).
- SC-003: Payment reconciliation < 5 days average.
- SC-005: Budget approval < 5 days.

**Constraints**:
- Strict Swagger Contract Compliance.
- Strict isolation within the `backend/` workspace.

**Scale/Scope**: MVP for community management (Buildings, Units, Invoices, Polls, Incidents).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle / Rule | Compliance Status | Details |
| :--- | :--- | :--- |
| **I. Monorepo Workspace** | Compliant | The project structure includes `backend/` and `frontend/` folders. |
| **II. Backend-First Focus** | Compliant | Initial development is strictly within the `backend/` directory. |
| **III. Express-based API Architecture** | Compliant | Using Express.js with a clean controller-service-model pattern. |
| **IV. Swagger Contract Compliance** | Compliant | Using `express-openapi-validator` for non-negotiable enforcement. |
| **V. Swagger-Driven Integration Testing** | Compliant | Integration tests will verify contract compliance using Supertest. |

## Project Structure

### Documentation (this feature)

```text
specs/001-comunidad-api/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/
│   └── swagger.yaml     # Copied API Contract
└── tasks.md             # Phase 2 output (to be generated)
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── api/
│   │   ├── app.js         # Express app configuration & validator middleware
│   │   └── server.js      # Server entry point
│   ├── controllers/
│   │   ├── building.js
│   │   ├── unit.js
│   │   ├── invoice.js
│   │   ├── poll.js
│   │   └── incident.js
│   ├── services/
│   │   ├── buildingService.js
│   │   ├── invoicingService.js
│   │   ├── votingService.js
│   │   └── incidentService.js
│   ├── models/
│   │   ├── schemas.sql
│   │   └── Unit.js (etc.)
│   └── config/
│       └── database.js
└── tests/
    ├── contract/          # Supertest contract matching tests
    └── integration/       # Multi-user journey tests
```

**Structure Decision**: Option 2: Web application (separate `backend` and `frontend` folders).

## Complexity Tracking

*No violations of the Constitution identified.*
