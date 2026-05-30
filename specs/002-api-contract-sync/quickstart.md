# Quickstart: API Contract Synchronization

## Testing the Changes

### 1. Run Contract Tests
```bash
cd backend
npm test
```

### 2. Verify Specification Compliance
```bash
npx swagger-cli validate ../API_Contract_Gestionly.yaml
```

### 3. Manual Probes
Use `curl` or Postman to verify the new endpoints:

**Get My Profile:**
```bash
curl -H "X-User-Id: usr_pres_001" http://localhost:3000/api/users/me
```

**List Owners:**
```bash
curl -H "X-User-Id: usr_pres_001" http://localhost:3000/api/users?role=Owner
```

**Register New User:**
```bash
curl -X POST -H "Content-Type: application/json" -H "X-User-Id: usr_pres_001" \
  -d '{"name": "New Owner", "email": "new@example.com", "phone_number": "+34600000000", "role": "Owner"}' \
  http://localhost:3000/api/users
```
