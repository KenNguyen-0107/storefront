import { DomainError } from "@/app/lib/commercetools/models/error.model";

export enum LogLevel {
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  error?: Error;
}

export class Logger {
  private static instance: Logger;
  private minLevel: LogLevel = LogLevel.INFO;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  setMinLevel(level: LogLevel): void {
    this.minLevel = level;
  }

  private shouldLog(level: LogLevel): boolean {
    const levels = Object.values(LogLevel);
    return levels.indexOf(level) >= levels.indexOf(this.minLevel);
  }

  private createLogEntry(
    level: LogLevel,
    message: string,
    context?: Record<string, unknown>,
    error?: Error,
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
      error,
    };
  }

  private formatError(error: Error): Record<string, unknown> {
    const errorInfo: Record<string, unknown> = {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };

    if (error instanceof DomainError) {
      errorInfo.code = error.code;
      errorInfo.cause = error.cause;
    }

    return errorInfo;
  }

  private log(entry: LogEntry): void {
    if (!this.shouldLog(entry.level)) {
      return;
    }

    const logData = {
      ...entry,
      error: entry.error ? this.formatError(entry.error) : undefined,
    };

    switch (entry.level) {
      case LogLevel.ERROR:
        console.error(JSON.stringify(logData, null, 2));
        break;
      case LogLevel.WARN:
        console.warn(JSON.stringify(logData, null, 2));
        break;
      case LogLevel.INFO:
        console.info(JSON.stringify(logData, null, 2));
        break;
      case LogLevel.DEBUG:
        console.debug(JSON.stringify(logData, null, 2));
        break;
    }
  }

  debug(message: string, context?: Record<string, unknown>): void {
    this.log(this.createLogEntry(LogLevel.DEBUG, message, context));
  }

  info(message: string, context?: Record<string, unknown>): void {
    this.log(this.createLogEntry(LogLevel.INFO, message, context));
  }

  warn(
    message: string,
    context?: Record<string, unknown>,
    error?: Error,
  ): void {
    this.log(this.createLogEntry(LogLevel.WARN, message, context, error));
  }

  error(
    message: string,
    error?: Error,
    context?: Record<string, unknown>,
  ): void {
    this.log(this.createLogEntry(LogLevel.ERROR, message, context, error));
  }
}

// Export singleton instance
export const logger = Logger.getInstance();
