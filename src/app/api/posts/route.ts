import { authOptions } from '../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../prisma/client'

export async function GET(request: Response) {
  console.log('inside GET')
  return NextResponse.json({ message: 'Hello from GEt' })
}
export async function POST(request: Response) {
  const awaitedRequest = await request.json() // Await request,json() to access request object
  const session = await getServerSession(authOptions)
  console.log('inside POST', { request, awaitedRequest, session })

  if (!session) {
    return NextResponse.json({ status: 400, message: 'Please sign in' })
  } else {
    // check title
    const title = awaitedRequest.title
    // handle no title for post
    if (!title || title.length === 0) {
      return NextResponse.json({
        status: 400,
        message: 'Post is empty. Please write something',
      })
      // handle title is too long
    } else if (title.length > 300) {
      return NextResponse.json({
        status: 400,
        message: 'please write shorter post. It is longer that 300 words',
      })
    }
    // create post
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email || 'DEFAULT EMAIL' },
    })

    console.log({ prismaUser })
    try {
      const results = await prisma.post.create({
        data: {
          title,
          userId: prismaUser?.id || 'DEFAULT USER ID',
          authorId: prismaUser?.id || 'some authorID',
        },
      })

      console.log({ results })
      return new Response('successful post', { status: 200 })
    } catch (err) {
      return new Response('fail to create post', {
        status: 403,
        statusText: JSON.stringify(err),
      })
    }
  }
}
