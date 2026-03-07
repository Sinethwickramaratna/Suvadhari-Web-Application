// Frontend Logger - Stores logs in localStorage without console output
// Logs can be viewed via developer tools > Application > Local Storage

const LOG_KEY = 'app_logs';
const MAX_LOGS = 1000; // Maximum number of log entries to keep

// Helper to get current timestamp
const getTimestamp = () => new Date().toISOString();

// Helper to get caller location
const getCallerLocation = () => {
    try {
        const error = new Error();
        const stack = error.stack.split('\n');
        // Skip first 3-4 lines to get actual caller
        const callerLine = stack[4] || stack[3] || '';
        
        // Try to extract file name and line number
        const match = callerLine.match(/\((.+):(\d+):(\d+)\)/) || 
                     callerLine.match(/at (.+):(\d+):(\d+)/) ||
                     callerLine.match(/(.+\.jsx?):(\d+):(\d+)/);
        
        if (match) {
            const fullPath = match[1];
            // Extract just the file name
            const fileName = fullPath.split('/').pop().split('\\').pop();
            const lineNumber = match[2];
            return `${fileName}:${lineNumber}`;
        }
        return 'unknown';
    } catch {
        return 'unknown';
    }
};

// Get existing logs from localStorage
const getLogs = () => {
    try {
        const logs = localStorage.getItem(LOG_KEY);
        return logs ? JSON.parse(logs) : [];
    } catch {
        return [];
    }
};

// Save logs to localStorage
const saveLogs = (logs) => {
    try {
        // Keep only the most recent MAX_LOGS entries
        const trimmedLogs = logs.slice(-MAX_LOGS);
        localStorage.setItem(LOG_KEY, JSON.stringify(trimmedLogs));
    } catch {
        // Silently fail if localStorage is full
    }
};

// Create log entry
const createLogEntry = (level, category, message, data = null, location = null) => {
    return {
        timestamp: getTimestamp(),
        level,
        category,
        message,
        location,
        ...(data && { data })
    };
};

// Logger object
const logger = {
    info: (category, message, data) => {
        const location = getCallerLocation();
        const logs = getLogs();
        logs.push(createLogEntry('INFO', category, message, data, location));
        saveLogs(logs);
        console.log(`[INFO] [${category}] ${message}`, data || '');
    },
    
    error: (category, message, error) => {
        const location = getCallerLocation();
        const logs = getLogs();
        const errorData = error instanceof Error ? {
            message: error.message,
            stack: error.stack,
            name: error.name
        } : error;
        logs.push(createLogEntry('ERROR', category, message, errorData, location));
        saveLogs(logs);
        console.error(`[ERROR] [${category}] ${message}`, errorData);
    },
    
    warn: (category, message, data) => {
        const location = getCallerLocation();
        const logs = getLogs();
        logs.push(createLogEntry('WARN', category, message, data, location));
        saveLogs(logs);
        console.warn(`[WARN] [${category}] ${message}`, data || '');
    },
    
    debug: (category, message, data) => {
        const location = getCallerLocation();
        const logs = getLogs();
        logs.push(createLogEntry('DEBUG', category, message, data, location));
        saveLogs(logs);
        console.debug(`[DEBUG] [${category}] ${message}`, data || '');
    },
    
    api: (method, url, status, data) => {
        const location = getCallerLocation();
        const logs = getLogs();
        logs.push(createLogEntry('API', 'API Call', `${method} ${url}`, {
            status,
            ...data
        }, location));
        saveLogs(logs);
        console.log(`[API] ${method} ${url} - Status: ${status}`, data || '');
    },
    
    user: (action, details) => {
        const location = getCallerLocation();
        const logs = getLogs();
        logs.push(createLogEntry('USER', 'User Action', action, details, location));
        saveLogs(logs);
        console.log(`[USER] ${action}`, details || '');
    },
    
    // Clear all logs
    clear: () => {
        localStorage.removeItem(LOG_KEY);
    },
    
    // Export logs as downloadable file
    export: () => {
        const logs = getLogs();
        const dataStr = JSON.stringify(logs, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `suvadhari-logs-${Date.now()}.json`;
        link.click();
        URL.revokeObjectURL(url);
    },
    
    // Get all logs
    getAll: () => getLogs(),
    
    // Get logs by level
    getByLevel: (level) => {
        const logs = getLogs();
        return logs.filter(log => log.level === level);
    },
    
    // Get logs by category
    getByCategory: (category) => {
        const logs = getLogs();
        return logs.filter(log => log.category === category);
    }
};

// Expose logger to window for debugging purposes
if (typeof window !== 'undefined') {
    window.suvadhari_logger = {
        view: () => logger.getAll(),
        export: () => logger.export(),
        clear: () => logger.clear(),
        errors: () => logger.getByLevel('ERROR'),
        api: () => logger.getByCategory('API Call')
    };
}

export default logger;
