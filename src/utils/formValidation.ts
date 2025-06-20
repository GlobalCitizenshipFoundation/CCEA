
import DOMPurify from 'dompurify';

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export interface ValidationResult {
  isValid: boolean;
  errors: { [key: string]: string };
}

// Sanitize input to prevent XSS attacks
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  return DOMPurify.sanitize(input.trim());
};

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (international format)
const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/;

// Common validation rules
export const commonValidationRules = {
  email: {
    required: true,
    pattern: EMAIL_REGEX,
    maxLength: 254
  },
  phone: {
    pattern: PHONE_REGEX,
    maxLength: 20
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s\-'\.]+$/
  },
  organization: {
    maxLength: 100,
    pattern: /^[a-zA-Z0-9\s\-'\.&,]+$/
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 200
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 2000
  }
};

export const validateForm = (data: { [key: string]: any }, rules: ValidationRules): ValidationResult => {
  const errors: { [key: string]: string } = {};

  Object.keys(rules).forEach((field) => {
    const value = data[field];
    const rule = rules[field];
    const sanitizedValue = typeof value === 'string' ? sanitizeInput(value) : value;

    // Required validation
    if (rule.required && (!sanitizedValue || sanitizedValue.length === 0)) {
      errors[field] = `${field} is required`;
      return;
    }

    // Skip other validations if field is empty and not required
    if (!sanitizedValue || sanitizedValue.length === 0) {
      return;
    }

    // Min length validation
    if (rule.minLength && sanitizedValue.length < rule.minLength) {
      errors[field] = `${field} must be at least ${rule.minLength} characters`;
      return;
    }

    // Max length validation
    if (rule.maxLength && sanitizedValue.length > rule.maxLength) {
      errors[field] = `${field} cannot exceed ${rule.maxLength} characters`;
      return;
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(sanitizedValue)) {
      errors[field] = `${field} format is invalid`;
      return;
    }

    // Custom validation
    if (rule.custom) {
      const customError = rule.custom(sanitizedValue);
      if (customError) {
        errors[field] = customError;
        return;
      }
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Rate limiting utility for client-side
export class RateLimiter {
  private attempts: { [key: string]: number[] } = {};

  isAllowed(key: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    
    if (!this.attempts[key]) {
      this.attempts[key] = [];
    }

    // Remove old attempts outside the window
    this.attempts[key] = this.attempts[key].filter(time => now - time < windowMs);

    // Check if under limit
    if (this.attempts[key].length >= maxAttempts) {
      return false;
    }

    // Add current attempt
    this.attempts[key].push(now);
    return true;
  }

  getRemainingTime(key: string, windowMs: number = 60000): number {
    if (!this.attempts[key] || this.attempts[key].length === 0) {
      return 0;
    }

    const oldestAttempt = Math.min(...this.attempts[key]);
    const timeElapsed = Date.now() - oldestAttempt;
    return Math.max(0, windowMs - timeElapsed);
  }
}

export const rateLimiter = new RateLimiter();

