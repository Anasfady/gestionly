# Data Model: API Contract Synchronization

## Entities

### User
- `id`: string (Primary Key)
- `name`: string
- `email`: string (Unique)
- `phone_number`: string
- `role`: enum (President, Owner, Tenant)

### Apartment
- `id`: string (Primary Key)
- `building_id`: string (Foreign Key)
- `unit_number`: string
- `type`: enum (Apartment, Commercial Local, Parking, Storage)
- `owner_id`: string (Foreign Key)
- `tenant_id`: string (Foreign Key, Optional)
- `share_percentage`: float
- `referencia_catastral`: string
- `exempt_from_fees`: boolean (Default: false)

### Poll
- `id`: string (Primary Key)
- `building_id`: string (Foreign Key)
- `title`: string
- `description`: string
- `options`: JSON array (string)
- `end_date`: string (ISO-8601)
- `is_secret`: boolean (Default: false)
- `status`: enum (Open, Closed) - *Calculated or persisted*

## Relationships
- **User -> Apartment**: One-to-Many (Owner)
- **User -> Apartment**: One-to-Many (Tenant)
- **Building -> Apartment**: One-to-Many
- **Building -> Poll**: One-to-Many
