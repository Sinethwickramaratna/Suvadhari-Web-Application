# Logging System Documentation

## Overview

The application now uses a file-based logging system that captures all processes without displaying them in the console. Logs are stored differently for backend and frontend:

- **Backend**: Logs are written to files in the `Server/logs/` directory
- **Frontend**: Logs are stored in browser's localStorage

---

## Backend Logging

### Log Files Location
All backend logs are stored in: `Server/logs/`

### Log Files:
1. **general.log** - All application logs (INFO, WARN, DEBUG, ERROR)
2. **error.log** - Only error logs
3. **auth.log** - Authentication-related logs
4. **database.log** - Database operations logs

### Log File Format
Each log entry is stored as JSON on a single line:
```json
{"timestamp":"2026-03-07T10:30:45.123Z","level":"INFO","category":"Auth","message":"Login successful","data":{"email":"user@example.com","role":"Patient"}}
```

### Viewing Backend Logs

#### Option 1: Direct File Access
Open log files directly:
- Windows: `Server\logs\general.log`
- View with any text editor or use VS Code

#### Option 2: Using PowerShell
```powershell
# View last 50 lines of general log
Get-Content "Server/logs/general.log" -Tail 50

# View error logs only
Get-Content "Server/logs/error.log"

# Watch logs in real-time
Get-Content "Server/logs/general.log" -Wait -Tail 20

# Filter by category (e.g., Auth)
Get-Content "Server/logs/general.log" | Select-String "Auth"
```

#### Option 3: Using VS Code
1. Open the `Server/logs/` folder in VS Code
2. Click on any log file to view
3. Use search (Ctrl+F) to find specific entries

### Log Levels
- **INFO**: General information about application flow
- **WARN**: Warning messages that don't stop execution
- **ERROR**: Error messages with stack traces
- **DEBUG**: Detailed debugging information
- **AUTH**: Authentication-specific events
- **DATABASE**: Database operations

---

## Frontend Logging

### Log Storage Location
Frontend logs are stored in **browser's localStorage** under the key `app_logs`.

### Viewing Frontend Logs

#### Option 1: Browser Developer Tools
1. Open Developer Tools (F12)
2. Go to **Application** tab (Chrome/Edge) or **Storage** tab (Firefox)
3. Navigate to **Local Storage** → `http://localhost:3000` (or your domain)
4. Find the `app_logs` key
5. Click to view the JSON array of logs

#### Option 2: Browser Console Commands
Open browser console (F12) and use these commands:

```javascript
// View all logs
window.suvadhari_logger.view()

// View only errors
window.suvadhari_logger.errors()

// View API calls
window.suvadhari_logger.api()

// Export logs to file
window.suvadhari_logger.export()

// Clear all logs
window.suvadhari_logger.clear()
```

#### Option 3: Export to File
Execute in browser console:
```javascript
window.suvadhari_logger.export()
```
This will download a JSON file with all frontend logs.

### Frontend Log Categories
- **INFO**: General information
- **ERROR**: Errors and exceptions
- **WARN**: Warnings
- **DEBUG**: Debug information
- **API**: API call logs
- **USER**: User actions (login, logout, navigation, etc.)

---

## Log Examples

### Backend Log Entry (from general.log):
```json
{"timestamp":"2026-03-07T10:15:30.456Z","level":"INFO","category":"Auth","message":"Login successful","data":{"email":"patient@test.com","role":"Patient"}}
```

### Frontend Log Entry (from localStorage):
```json
{
  "timestamp": "2026-03-07T10:15:30.789Z",
  "level": "USER",
  "category": "User Action",
  "message": "Login Attempt",
  "data": {
    "email": "patient@test.com",
    "role": "Patient"
  }
}
```

---

## What Gets Logged

### Backend Events:
- ✅ Server startup and shutdown
- ✅ Database connections
- ✅ Authentication attempts (login, logout, registration)
- ✅ Email verification code sending
- ✅ Password reset requests
- ✅ User profile operations
- ✅ API endpoint access
- ✅ All errors with stack traces

### Frontend Events:
- ✅ Page loads and navigation
- ✅ User actions (login, logout, registration)
- ✅ API calls (method, URL, status)
- ✅ Form submissions
- ✅ Authentication checks
- ✅ Errors and exceptions

---

## Maintenance

### Clearing Old Logs

#### Backend (PowerShell):
```powershell
# Delete all log files
Remove-Item "Server/logs/*.log"

# Or clear content but keep files
Clear-Content "Server/logs/*.log"
```

#### Frontend (Browser Console):
```javascript
window.suvadhari_logger.clear()
```

### Log Rotation
The frontend automatically keeps only the last 1000 log entries. Backend logs grow indefinitely, so consider implementing log rotation for production.

---

## Troubleshooting

### Issue: Can't find backend log files
**Solution**: The `Server/logs/` directory is created automatically on first server start. If missing, the logger creates it.

### Issue: Frontend logs not appearing
**Solution**: 
1. Check browser's localStorage is enabled
2. Clear cache and reload page
3. Verify logger is imported in components

### Issue: Logs show in console
**Solution**: This logging system is designed to NOT show logs in console. If you see console logs, they might be from:
- Browser's built-in warnings/errors
- Third-party libraries
- Old code that wasn't updated

---

## Security Note

⚠️ **Important**: Log files may contain sensitive information. Ensure:
1. Log files are added to `.gitignore`
2. Production logs are properly secured
3. Don't share log files publicly
4. Sanitize logs before sharing for debugging

---

## Configuration

### Backend Logger Options
Edit `Server/utils/logger.js` to:
- Change log file names
- Add new log categories
- Modify log format

### Frontend Logger Options
Edit `Client/src/utils/logger.js` to:
- Change maximum log entries (default: 1000)
- Modify localStorage key name
- Add custom log methods

---

## Support

For help viewing or understanding logs, contact the development team or refer to this documentation.
