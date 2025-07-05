import { NextResponse } from 'next/server'
import { databaseHealthCheck } from '@/lib/database'

export async function GET() {
  try {
    const dbHealth = await databaseHealthCheck()
    
    const health = {
      status: dbHealth.healthy ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      services: {
        database: dbHealth
      }
    }

    return NextResponse.json(health, { 
      status: dbHealth.healthy ? 200 : 503 
    })
  } catch (error) {
    console.error('Health check failed:', error)
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Health check failed'
      },
      { status: 503 }
    )
  }
}