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
const getColomboTimestamp = () => {
    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Colombo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).formatToParts(new Date());

    const values = {};
    for (const part of parts) {
        if (part.type !== 'literal') {
            values[part.type] = part.value;
        }
    }

    return `${values.year}-${values.month}-${values.day}T${values.hour}:${values.minute}:${values.second}+05:30`;
};

const getTimestamps = () => ({
    timestampUtc: new Date().toISOString(),
    timestampLocal: getColomboTimestamp()
});

const formatLog = (level, category, message, data = null, location = null, timestamps = getTimestamps()) => {
    const { timestampUtc, timestampLocal } = timestamps;
    const logEntry = {
        timestampUtc,
        timestampLocal,
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
        const timestamps = getTimestamps();
        const { timestampLocal } = timestamps;
        const logEntry = formatLog('INFO', category, message, data, location, timestamps);
        writeLog(generalLogPath, logEntry);
        console.log(`[${timestampLocal}] [INFO] [${category}] ${message}`, data || '');
    },
    
    error: (category, message, error) => {
        const location = getCallerLocation();
        const timestamps = getTimestamps();
        const { timestampLocal } = timestamps;
        const errorData = error instanceof Error ? {
            message: error.message,
            stack: error.stack,
            name: error.name
        } : error;
        const logEntry = formatLog('ERROR', category, message, errorData, location, timestamps);
        writeLog(errorLogPath, logEntry);
        writeLog(generalLogPath, logEntry);
        console.error(`[${timestampLocal}] [ERROR] [${category}] ${message}`, errorData);
    },
    
    auth: (action, email, success, details) => {
        const location = getCallerLocation();
        const timestamps = getTimestamps();
        const { timestampLocal } = timestamps;
        const logEntry = formatLog('AUTH', 'Authentication', `${action} - ${email}`, {
            success,
            ...details
        }, location, timestamps);
        writeLog(authLogPath, logEntry);
        writeLog(generalLogPath, logEntry);
        console.log(`[${timestampLocal}] [AUTH] ${action} - ${email}`, { success, ...details });
    },
    
    database: (operation, collection, details) => {
        const location = getCallerLocation();
        const timestamps = getTimestamps();
        const { timestampLocal } = timestamps;
        const logEntry = formatLog('DATABASE', 'Database', `${operation} on ${collection}`, details, location, timestamps);
        writeLog(dbLogPath, logEntry);
        console.log(`[${timestampLocal}] [DATABASE] ${operation} on ${collection}`, details || '');
    },
    
    warn: (category, message, data) => {
        const location = getCallerLocation();
        const timestamps = getTimestamps();
        const { timestampLocal } = timestamps;
        const logEntry = formatLog('WARN', category, message, data, location, timestamps);
        writeLog(generalLogPath, logEntry);
        console.warn(`[${timestampLocal}] [WARN] [${category}] ${message}`, data || '');
    },
    
    debug: (category, message, data) => {
        const location = getCallerLocation();
        const timestamps = getTimestamps();
        const { timestampLocal } = timestamps;
        const logEntry = formatLog('DEBUG', category, message, data, location, timestamps);
        writeLog(generalLogPath, logEntry);
        console.debug(`[${timestampLocal}] [DEBUG] [${category}] ${message}`, data || '');
    }
};

module.exports = logger;
