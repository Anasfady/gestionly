# Data Model: Gestionly (Comunidad Vecinos API)

This document defines the entities, their attributes, and relationships for the Gestionly API.

## Entities

### User
- `id` (PK): TEXT (e.g., 'usr_123')
- `name`: TEXT
- `email`: TEXT (Unique)
- `phone_number`: TEXT
- `role`: TEXT (Enum: 'President', 'Owner', 'Tenant')

### Building
- `id` (PK): TEXT
- `name`: TEXT
- `address`: TEXT

### Unit (Apartment/Local/Parking/Storage)
- `id` (PK): TEXT
- `building_id` (FK): TEXT -> buildings.id
- `unit_number`: TEXT (e.g., '3A')
- `type`: TEXT (Enum: 'Apartment', 'Commercial Local', 'Parking', 'Storage')
- `owner_id` (FK): TEXT -> users.id
- `tenant_id` (FK, Nullable): TEXT -> users.id
- `share_percentage`: REAL (Decimal precision up to 4 places)
- `referencia_catastral`: TEXT (20 characters)
- `exempt_from_fees`: BOOLEAN (Default: FALSE)

### Budget
- `id` (PK): TEXT
- `building_id` (FK): TEXT -> buildings.id
- `year`: INTEGER
- `total_annual_amount`: REAL

### Invoice
- `id` (PK): TEXT
- `unit_id` (FK): TEXT -> units.id
- `budget_id` (FK, Nullable): TEXT -> budgets.id (For recurring fees)
- `type`: TEXT (Enum: 'Recurring', 'Ad-hoc')
- `amount`: REAL
- `status`: TEXT (Enum: 'Pending', 'Paid', 'Delinquent')
- `created_at`: TEXT (ISO-8601)
- `paid_at`: TEXT (ISO-8601, Nullable)

### Poll
- `id` (PK): TEXT
- `building_id` (FK): TEXT -> buildings.id
- `title`: TEXT
- `description`: TEXT
- `options`: TEXT (JSON array of strings)
- `status`: TEXT (Enum: 'Open', 'Closed')
- `end_date`: TEXT (ISO-8601)
- `is_secret`: BOOLEAN (Default: FALSE)

### Vote
- `id` (PK): TEXT
- `poll_id` (FK): TEXT -> polls.id
- `user_id` (FK): TEXT -> users.id
- `apartment_id` (FK): TEXT -> units.id
- `selected_option`: TEXT
- `created_at`: TEXT (ISO-8601)
- `ip_log`: TEXT

### Incident
- `id` (PK): TEXT
- `building_id` (FK): TEXT -> buildings.id
- `title`: TEXT
- `description`: TEXT
- `reporter_id` (FK): TEXT -> users.id
- `status`: TEXT (Enum: 'Pending', 'In_Progress', 'Resolved')
- `created_at`: TEXT (ISO-8601)

## Relationships

- **Building to Units**: One-to-Many.
- **Unit to Owner**: Many-to-One (One user can own multiple units).
- **Unit to Tenant**: Many-to-One (One user can rent multiple units).
- **Building to Budgets**: One-to-Many (One budget per year).
- **Unit to Invoices**: One-to-Many.
- **Building to Polls**: One-to-Many.
- **Poll to Votes**: One-to-Many.
- **Building to Incidents**: One-to-Many.

## State Transitions

### Invoice Status
`Pending` -> `Paid` (via webhook or manual)
`Pending` -> `Delinquent` (if past due date)

### Poll Status
`Open` -> `Closed` (automatically when `current_time > end_date` or manually by President)

### Incident Status
`Pending` -> `In_Progress` -> `Resolved` (Managed by President)
