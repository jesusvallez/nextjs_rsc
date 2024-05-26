import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const collection =
    request.nextUrl.searchParams.get('collection') || 'collection'

  revalidateTag(collection)

  return NextResponse.json(
    {
      revalidated: true,
      now: Date.now(),
      cache: 'no-store'
    },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    }
  )
}
