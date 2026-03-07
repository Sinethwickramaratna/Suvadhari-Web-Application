# Quick Logging Reference

## 🎯 Quick Access to Logs

### Backend Logs (Server)
📁 **Location**: `Server/logs/`

**Files:**
- `general.log` - All logs
- `error.log` - Errors only  
- `auth.log` - Authentication events
- `database.log` - Database operations

**Quick View (PowerShell):**
```powershell
# View last 20 lines
Get-Content Server/logs/general.log -Tail 20

# Watch in real-time
Get-Content Server/logs/general.log -Wait -Tail 20
```

---

### Frontend Logs (Browser)
💾 **Location**: Browser localStorage (key: `app_logs`)

**Quick Access:**
1. Press F12 (Developer Tools)
2. Go to **Console** tab
3. Run: `window.suvadhari_logger.view()`

**Quick Commands:**
```javascript
// View all logs
window.suvadhari_logger.view()

// View errors only
window.suvadhari_logger.errors()

// Download logs
window.suvadhari_logger.export()

// Clear logs
window.suvadhari_logger.clear()
```

---

## 📊 What's Being Logged

### Backend:
✅ Server startup/shutdown  
✅ Database connections  
✅ User authentication (login/logout/register)  
✅ Email sending  
✅ Password resets  
✅ API requests  
✅ All errors & exceptions  

### Frontend:
✅ Page navigation  
✅ User actions (login/logout/register)  
✅ API calls (URL, method, status)  
✅ Form submissions  
✅ Errors & exceptions  

---

## 🚀 No Console Output!

The logging system writes to **files** (backend) and **localStorage** (frontend) only. Your console stays clean! 🎉

---

**For detailed documentation, see:** [LOGGING.md](LOGGING.md)
