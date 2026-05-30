# Gestionly Backend

Gestionly backend API for managing a 'Comunidad de Vecinos'.

## Setup

1. `npm install`
2. `cp backend/.env.example backend/.env`
3. `npm run seed --workspace=backend`
4. `npm start --workspace=backend`

## API Documentation

- Swagger contract located at `API_Contract_Gestionly.yaml`.
- Authentication: Header-based mock (X-User-Id).
- Roles: President, Owner, Tenant.
