# Implementation Plan: API Contract Synchronization

**Branch**: `002-api-contract-sync` | **Date**: Saturday, May 30, 2026 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/002-api-contract-sync/spec.md`

## Summary

Synchronize the backend API implementation with the `API_Contract_Gestionly.yaml` contract. This involves implementing the missing user-related endpoints (`/api/users/me`, `/api/users`), aligning the data models (Apartment, Poll) with the contract, and enabling runtime Swagger validation.

## Technical Context

**Language/Version**: Node.js v22.17.0 (Express, ESM)

**Primary Dependencies**: express, express-openapi-validator, better-sqlite3, supertest, mocha, chai

**Storage**: SQLite (`database.sqlite`)

**Testing**: Mocha/Chai with Supertest for contract and integration testing.

**Target Platform**: Linux (Ubuntu/WSL)

**Project Type**: Web Service (REST API)

**Performance Goals**: N/A for this synchronization task.

**Constraints**: Strict compliance with `API_Contract_Gestionly.yaml`.

**Scale/Scope**: 3 new endpoints, model alignment for Apartments and Polls.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Principle IV (Swagger Contract Compliance)**: **PASS**. This feature explicitly aims to restore and enforce compliance.
- **Principle V (Swagger-Driven Automated Integration Testing)**: **PASS**. New tests will be added to verify the new endpoints against the spec.

## Project Structure

### Documentation (this feature)

```text
specs/002-api-contract-sync/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── api/
│   │   ├── routes/
│   │   │   ├── user.js (NEW)
│   │   │   └── index.js (UPDATE)
│   │   └── app.js (UPDATE: enable validator)
│   ├── controllers/
│   │   └── user.js (NEW)
│   └── models/
│       ├── User.js (UPDATE)
│       ├── Unit.js (UPDATE)
│       └── Poll.js (UPDATE)
└── tests/
    └── contract/
        └── user.test.js (NEW)
```

**Structure Decision**: Standard Express backend structure as defined in the monorepo principle.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
