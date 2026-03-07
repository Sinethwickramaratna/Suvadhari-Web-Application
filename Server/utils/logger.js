const fs = require('fs');
const path = require('path');

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

// Log file paths
const generalLogPath = path.join(logsDir, 'general.log');
const errorLogPath = path.join(logsDir, 'error.log');
const authLogPath = path.join(logsDir, 'auth.log');
const dbLogPath = path.join(logsDir, 'database.log');

// Helper function to get caller location
const getCallerLocation = () => {
    const error = new Error();
    const stack = error.stack.split('\n');
    // Stack format: at functionName (file:line:column)
    // Skip first 3 lines: Error, getCallerLocation, and the logger function
    const callerLine = stack[4] || stack[3] || '';
    const match = callerLine.match(/\((.+):(\d+):(\d+)\)/) || callerLine.match(/at (.+):(\d+):(\d+)/);
    
    if (match) {
        const fullPath = match[1];
        const fileName = path.basename(fullPath);
        const lineNumber = match[2];
        return `${fileName}:${lineNumber}`;
    }
    return 'unknown';
};

// Helper function to format log entry
const formatLog = (level, category, message, data = null, location = null) => {
    const timestamp = new Date().toISOString();
    const logEntry = {
        timestamp,
        level,
        category,
        message,
        location,
        ...(data && { data })
    };
    return JSON.stringify(logEntry) + '\n';
};

// Write to log file
const writeLog = (filePath, content) => {
    try {
        fs.appendFileSync(filePath, content, 'utf8');
    } catch (err) {
        // Silently fail to avoid console output
    }
};

// Logger object
const logger = {
    info: (category, message, data) => {
        const location = getCallerLocation();
        const logEntry = formatLog('INFO', category, message, data, location);
        writeLog(generalLogPath, logEntry);
        console.log(`[INFO] [${category}] ${message} 📍 ${location}`, data || '');
    },
    
    error: (category, message, error) => {
        const location = getCallerLocation();
        const errorData = error instanceof Error ? {
            message: error.message,
            stack: error.stack,
            name: error.name
        } : error;
        const logEntry = formatLog('ERROR', category, message, errorData, location);
        writeLog(errorLogPath, logEntry);
        writeLog(generalLogPath, logEntry);
        console.error(`[ERROR] [${category}] ${message} 📍 ${location}`, errorData);
    },
    
    auth: (action, email, success, details) => {
        const location = getCallerLocation();
        const logEntry = formatLog('AUTH', 'Authentication', `${action} - ${email}`, {
            success,
            ...details
        }, location);
        writeLog(authLogPath, logEntry);
        writeLog(generalLogPath, logEntry);
        console.log(`[AUTH] ${action} - ${email} 📍 ${location}`, { success, ...details });
    },
    
    database: (operation, collection, details) => {
        const location = getCallerLocation();
        const logEntry = formatLog('DATABASE', 'Database', `${operation} on ${collection}`, details, location);
        writeLog(dbLogPath, logEntry);
        console.log(`[DATABASE] ${operation} on ${collection} 📍 ${location}`, details || '');
    },
    
    warn: (category, message, data) => {
        const location = getCallerLocation();
        const logEntry = formatLog('WARN', category, message, data, location);
        writeLog(generalLogPath, logEntry);
        console.warn(`[WARN] [${category}] ${message} 📍 ${location}`, data || '');
    },
    
    debug: (category, message, data) => {
        const location = getCallerLocation();
        const logEntry = formatLog('DEBUG', category, message, data, location);
        writeLog(generalLogPath, logEntry);
        console.debug(`[DEBUG] [${category}] ${message} 📍 ${location}`, data || '');
    }
};

module.exports = logger;
