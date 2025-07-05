type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogContext {
  operation?: string
  userId?: string
  requestId?: string
  duration?: number
  [key: string]: any
}

class Logger {
  private logLevel: LogLevel = process.env.NODE_ENV === 'production' ? 'warn' : 'debug'

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error']
    return levels.indexOf(level) >= levels.indexOf(this.logLevel)
  }

  private formatMessage(level: LogLevel, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString()
    const contextStr = context ? ` ${JSON.stringify(context)}` : ''
    return `[${timestamp}] ${level.toUpperCase()}: ${message}${contextStr}`
  }

  debug(message: string, context?: LogContext): void {
    if (this.shouldLog('debug')) {
      console.log(this.formatMessage('debug', message, context))
    }
  }

  info(message: string, context?: LogContext): void {
    if (this.shouldLog('info')) {
      console.info(this.formatMessage('info', message, context))
    }
  }

  warn(message: string, context?: LogContext): void {
    if (this.shouldLog('warn')) {
      console.warn(this.formatMessage('warn', message, context))
    }
  }

  error(message: string, error?: Error, context?: LogContext): void {
    if (this.shouldLog('error')) {
      const errorContext = {
        ...context,
        ...(error && {
          error: {
            name: error.name,
            message: error.message,
            stack: error.stack
          }
        })
      }
      console.error(this.formatMessage('error', message, errorContext))
    }
  }

  performance(message: string, startTime: number, context?: LogContext): void {
    const duration = Date.now() - startTime
    this.info(message, { ...context, duration })
  }
}

export const logger = new Logger()

export const withLogging = <T extends (...args: any[]) => Promise<any>>(
  fn: T,
  operation: string
): T => {
  return (async (...args: any[]) => {
    const startTime = Date.now()
    
    try {
      logger.debug(`Starting ${operation}`, { operation, args: args.length })
      const result = await fn(...args)
      logger.performance(`Completed ${operation}`, startTime, { operation })
      return result
    } catch (error) {
      logger.error(`Failed ${operation}`, error as Error, { operation })
      throw error
    }
  }) as T
}