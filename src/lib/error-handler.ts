import { NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { DatabaseError } from './database'
import { logger } from './logger'

export interface ApiError {
  code: string
  message: string
  details?: any
}

export class AppError extends Error {
  constructor(
    public readonly code: string,
    message: string,
    public readonly statusCode: number = 500,
    public readonly details?: any
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export const handleApiError = (error: unknown, operation?: string): NextResponse => {
  logger.error('API Error occurred', error as Error, { operation })

  if (error instanceof ZodError) {
    const validationErrors = error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message
    }))

    return NextResponse.json(
      {
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Invalid request data',
          details: validationErrors
        }
      },
      { status: 400 }
    )
  }

  if (error instanceof DatabaseError) {
    const isDuplicateError = error.message.includes('unique constraint')
    const isNotFoundError = error.message.includes('not found')

    if (isDuplicateError) {
      return NextResponse.json(
        {
          error: {
            code: 'DUPLICATE_RESOURCE',
            message: 'Resource already exists'
          }
        },
        { status: 409 }
      )
    }

    if (isNotFoundError) {
      return NextResponse.json(
        {
          error: {
            code: 'RESOURCE_NOT_FOUND',
            message: 'Resource not found'
          }
        },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        error: {
          code: 'DATABASE_ERROR',
          message: 'Database operation failed'
        }
      },
      { status: 500 }
    )
  }

  if (error instanceof AppError) {
    return NextResponse.json(
      {
        error: {
          code: error.code,
          message: error.message,
          details: error.details
        }
      },
      { status: error.statusCode }
    )
  }

  if (error instanceof Error) {
    const isRateLimitError = error.message.includes('rate limit')
    const isTimeoutError = error.message.includes('timeout')

    if (isRateLimitError) {
      return NextResponse.json(
        {
          error: {
            code: 'RATE_LIMIT_EXCEEDED',
            message: 'Too many requests'
          }
        },
        { status: 429 }
      )
    }

    if (isTimeoutError) {
      return NextResponse.json(
        {
          error: {
            code: 'REQUEST_TIMEOUT',
            message: 'Request timeout'
          }
        },
        { status: 408 }
      )
    }
  }

  return NextResponse.json(
    {
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred'
      }
    },
    { status: 500 }
  )
}

export const withErrorHandler = (
  handler: (...args: any[]) => Promise<NextResponse>,
  operation?: string
) => {
  return async (...args: any[]): Promise<NextResponse> => {
    try {
      return await handler(...args)
    } catch (error) {
      return handleApiError(error, operation)
    }
  }
}

export const validateRequest = <T>(
  data: unknown,
  schema: any,
  errorMessage = 'Invalid request data'
): T => {
  try {
    return schema.parse(data)
  } catch (error) {
    if (error instanceof ZodError) {
      throw error
    }
    throw new AppError('VALIDATION_ERROR', errorMessage, 400)
  }
}