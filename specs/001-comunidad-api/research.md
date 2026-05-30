# Research: Gestionly (Comunidad Vecinos API)

This document outlines the technical decisions and research conducted during Phase 0 of the implementation plan.

## Decision 1: Database Persistence
- **Decision**: Use `better-sqlite3`.
- **Rationale**: It is the fastest and most reliable SQLite library for Node.js, providing a synchronous API that simplifies codebase logic for community management without sacrificing performance.
- **Alternatives considered**: standard `sqlite3` (slower, async-only boilerplate), PostgreSQL (overkill for local development).

## Decision 2: API Contract Compliance
- **Decision**: Use `express-openapi-validator`.
- **Rationale**: Mandated by the Constitution. It provides automatic request/response validation against the `API_Contract_Gestionly.yaml` Swagger file.
- **Alternatives considered**: Manual validation (error-prone and violates Constitution).

## Decision 3: PDF Generation (Invoices & Actas)
- **Decision**: Use `pdfkit`.
- **Rationale**: A lightweight, popular library for programmatic PDF creation in Node.js. It doesn't require a headless browser, making it easier to deploy and faster for simple documents like invoices.
- **Alternatives considered**: `puppeteer` (heavyweight, requires Chrome), `html-pdf` (mostly deprecated).

## Decision 4: Bulk Data Import (CSV/Excel)
- **Decision**: Use `csv-parser` for CSV files and `xlsx` for Excel.
- **CSV Format Specification**:
  The import file MUST include the following headers:
  `unit_number, type, owner_email, share_percentage, referencia_catastral`
  - `type`: One of 'Apartment', 'Commercial Local', 'Parking', 'Storage'.
  - `share_percentage`: Float (e.g., 4.25).
  - `referencia_catastral`: 20-character string.
- **Rationale**: `csv-parser` is extremely fast and streaming-based. `xlsx` handles complex Excel formats if needed.

## Decision 5: Payment Webhooks & Reconciliation
- **Decision**: Implement a dedicated endpoint `POST /api/webhooks/payments`.
- **Rationale**: This follows the standard pattern for Stripe/PayPal integration. The backend will verify the signature, identify the `invoice_id` from the metadata, and update the status in the local database.
- **Reconciliation Logic**: Every invoice will have a unique `id`. When a webhook arrives, the system searches for that ID and updates `status` to 'Paid' and `paid_at` to the current timestamp.

## Decision 6: Weighted Voting Logic
- **Decision**: Calculate results by joining `votes` with `apartments` and summing `share_percentage` for each option.
- **Rationale**: This directly implements the legal requirement of weighted voting based on ownership coefficients.
- **Edge Case**: "Moroso" (Delinquent) units will be excluded from the query if the poll configuration requires it.
