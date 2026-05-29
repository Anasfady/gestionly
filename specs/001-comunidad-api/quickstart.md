# Quickstart: Gestionly (Comunidad Vecinos API)

This guide provides instructions for setting up and running the Gestionly API locally.

## Prerequisites
- Node.js 20+
- npm 10+
- SQLite (local development)

## Setup Instructions

1. **Clone and Install**:
   ```bash
   npm install
   ```

2. **Environment Configuration**:
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=3000
   DATABASE_FILE=database.sqlite
   SWAGGER_FILE=../API_Contract_Gestionly.yaml
   ```

3. **Database Initialization**:
   The database is automatically initialized and seeded upon the first run. To manually seed:
   ```bash
   npm run seed --workspace=backend
   ```

4. **Start the Server**:
   ```bash
   npm start --workspace=backend
   ```
   The API will be available at `http://localhost:3000`.

## Key Endpoints

### Authentication (Mock)
Pass the User ID in the `X-User-Id` header:
- President: `usr_pres_001`
- Owner: `usr_owner_001`
- Tenant: `usr_tenant_001`

### Building Management
- `GET /api/building`: Get building details.
- `PUT /api/building`: Update building details (President only).

### Unit Registry
- `GET /api/apartments`: List all units.
- `POST /api/apartments`: Add a unit (President only).

### Invoicing & Fees
- `POST /api/budgets`: Set annual budget (President only).
- `GET /api/fees?frequency=monthly`: Calculate unit fees.

### Voting
- `POST /api/polls`: Create a poll (President only).
- `POST /api/polls/{poll_id}/votes`: Cast a weighted vote (Owner only).
- `GET /api/polls/{poll_id}/results`: View weighted results.

### Incidents
- `POST /api/incidents`: Report an issue.
- `GET /api/incidents`: List issues (President only).

## Testing
Run the automated test suite:
```bash
npm test --workspace=backend
```
