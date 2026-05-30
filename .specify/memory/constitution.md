<!--
SYNC IMPACT REPORT:
- Version change: v0.0.0 -> v1.0.0
- List of modified principles:
  - [PRINCIPLE_1_NAME] -> I. Monorepo Workspace (npm workspaces)
  - [PRINCIPLE_2_NAME] -> II. Backend-First Focus
  - [PRINCIPLE_3_NAME] -> III. Express-based API Architecture
  - [PRINCIPLE_4_NAME] -> IV. Swagger Contract Compliance (NON-NEGOTIABLE)
  - [PRINCIPLE_5_NAME] -> V. Swagger-Driven Automated Integration Testing
- Added sections:
  - Additional Technical Constraints
  - Development & Amendment Workflow
- Removed sections: None
- Templates requiring updates:
  - ✅ updated / .specify/templates/plan-template.md (Checked: already aligned)
  - ✅ updated / .specify/templates/spec-template.md (Checked: already aligned)
  - ✅ updated / .specify/templates/tasks-template.md (Checked: already aligned)
- Follow-up TODOs: None (All placeholders successfully resolved)
-->

# Gestionly Constitution

## Core Principles

### I. Monorepo Workspace (npm workspaces)
The project MUST be structured as an npm monorepo workspace (minimum version 11.10) with two top-level package folders: 'backend' and 'frontend'. This structure enables code isolation, unified dependency management, and clear boundaries between client and server.

### II. Backend-First Focus
Initial development and architecture efforts MUST strictly focus on the 'backend' workspace. The 'frontend' directory is reserved for future client-side modules. No backend logic or database models should be leaked outside the backend boundary.

### III. Express-based API Architecture
The backend service MUST be implemented using the Express.js framework. It should follow clean architectural principles: routes handle HTTP entry, controllers orchestrate business flow, services execute business logic, and models handle data access.

### IV. Swagger Contract Compliance (NON-NEGOTIABLE)
All backend API endpoints MUST strictly conform to the contract defined in a Swagger YAML spec file ('swagger.yml'). Request bodies, query parameters, path variables, and response payloads MUST be automatically verified using a strict Swagger validation middleware.

### V. Swagger-Driven Automated Integration Testing
Every endpoint implemented MUST be accompanied by integration/contract tests (e.g., using Supertest and Mocha/Jest). Tests MUST run against the API endpoints to verify that the Express app produces responses fully matching the Swagger definition.

## Additional Technical Constraints

- **Node.js Environment**: Minimum Node.js version 20+ MUST be used, matching the npm workspaces requirement.
- **Strict Swagger Validation**: Response payloads and request schemas that deviate from the Swagger definition MUST trigger a 400 Bad Request (for requests) or 500 Internal Server Error (for mismatches in responses, in test/dev modes).
- **Environment Variables**: All configurations (port, DB credentials, validation options) MUST be sourced from environment variables using dotenv.

## Development & Amendment Workflow

1. **Design First**: Modify the Swagger YAML file (`backend/docs/swagger.yml` or similar) to define new endpoints/models.
2. **Review/Plan**: Build the specification and implementation plan referencing the Swagger contract.
3. **TDD / Contract Setup**: Implement failing tests that match the Swagger routes.
4. **Implement Express handler**: Add the route, controller, and service in Express.
5. **Verify**: Run the test suite to ensure schema validation passes and the contract is fully satisfied.

## Governance

- All Pull Requests and commits MUST be reviewed for strict compliance with the Core Principles.
- Deferring any of the non-negotiable principles is not permitted without an approved amendment to this Constitution.
- When development guidance is needed, consult the Spec Kit plan template or the README.md in the backend folder.

**Version**: 1.0.0 | **Ratified**: 2026-05-27 | **Last Amended**: 2026-05-27
