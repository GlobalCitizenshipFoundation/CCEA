interface SecurityEvent {
  type: 'form_submission' | 'rate_limit_exceeded' | 'validation_failed' | 'suspicious_input';
  timestamp: number;
  details: any;
  userAgent?: string;
  ip?: string;
}

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private maxEvents = 100;

  logEvent(type: SecurityEvent['type'], details: any) {
    const event: SecurityEvent = {
      type,
      timestamp: Date.now(),
      details,
      userAgent: navigator.userAgent
    };

    this.events.push(event);

    // Keep only recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.warn('Security Event:', event);
    }

    // In production, you might want to send to monitoring service
    // this.sendToMonitoringService(event);
  }

  getRecentEvents(minutes: number = 10): SecurityEvent[] {
    const cutoff = Date.now() - (minutes * 60 * 1000);
    return this.events.filter(event => event.timestamp > cutoff);
  }

  detectSuspiciousActivity(): boolean {
    const recentEvents = this.getRecentEvents(5);
    
    // Check for multiple validation failures
    const validationFailures = recentEvents.filter(e => e.type === 'validation_failed').length;
    if (validationFailures > 5) {
      this.logEvent('suspicious_input', { reason: 'Multiple validation failures', count: validationFailures });
      return true;
    }

    // Check for rapid form submissions
    const formSubmissions = recentEvents.filter(e => e.type === 'form_submission').length;
    if (formSubmissions > 3) {
      this.logEvent('suspicious_input', { reason: 'Rapid form submissions', count: formSubmissions });
      return true;
    }

    return false;
  }

  // Optional: Send events to external monitoring service
  private sendToMonitoringService(event: SecurityEvent) {
    // Implementation would depend on your monitoring service
    // Example: Sentry, LogRocket, or custom analytics
  }
}

export const securityMonitor = new SecurityMonitor();

// Global error handler for uncaught errors
window.addEventListener('error', (event) => {
  securityMonitor.logEvent('suspicious_input', {
    error: event.error?.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno
  });
});

// Global handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  securityMonitor.logEvent('suspicious_input', {
    reason: event.reason,
    type: 'unhandled_promise_rejection'
  });
});
