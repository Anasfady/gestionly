-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone_number TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('President', 'Owner', 'Tenant'))
);

-- Buildings Table
CREATE TABLE IF NOT EXISTS buildings (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL
);

-- Apartments Table
CREATE TABLE IF NOT EXISTS apartments (
    id TEXT PRIMARY KEY,
    building_id TEXT NOT NULL,
    unit_number TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('Apartment', 'Commercial Local', 'Parking', 'Storage')),
    owner_id TEXT NOT NULL,
    tenant_id TEXT,
    share_percentage REAL NOT NULL,
    referencia_catastral TEXT NOT NULL,
    exempt_from_fees BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (building_id) REFERENCES buildings(id),
    FOREIGN KEY (owner_id) REFERENCES users(id),
    FOREIGN KEY (tenant_id) REFERENCES users(id),
    UNIQUE(building_id, unit_number)
);

-- Budgets Table
CREATE TABLE IF NOT EXISTS budgets (
    id TEXT PRIMARY KEY,
    building_id TEXT NOT NULL,
    year INTEGER NOT NULL,
    total_annual_amount REAL NOT NULL,
    FOREIGN KEY (building_id) REFERENCES buildings(id),
    UNIQUE(building_id, year)
);

-- Polls Table
CREATE TABLE IF NOT EXISTS polls (
    id TEXT PRIMARY KEY,
    building_id TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    options TEXT NOT NULL, -- JSON string array
    end_date TEXT NOT NULL, -- ISO-8601
    is_secret BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (building_id) REFERENCES buildings(id)
);

-- Votes Table
CREATE TABLE IF NOT EXISTS votes (
    id TEXT PRIMARY KEY,
    poll_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    apartment_id TEXT NOT NULL,
    selected_option TEXT NOT NULL,
    created_at TEXT NOT NULL,
    ip_log TEXT,
    FOREIGN KEY (poll_id) REFERENCES polls(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (apartment_id) REFERENCES apartments(id),
    UNIQUE(poll_id, apartment_id)
);

-- Incidents Table
CREATE TABLE IF NOT EXISTS incidents (
    id TEXT PRIMARY KEY,
    building_id TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    reporter_id TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'In_Progress', 'Resolved')),
    created_at TEXT NOT NULL, -- ISO-8601
    FOREIGN KEY (building_id) REFERENCES buildings(id),
    FOREIGN KEY (reporter_id) REFERENCES users(id)
);
