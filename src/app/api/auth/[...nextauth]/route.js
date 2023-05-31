import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
// import prisma from '../../../../../prisma/client'

const prisma = new PrismaClient()

const { GOOGLE_CLIENT_ID = '', GOOGLE_CLIENT_SECRET = '' } = process.env
if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  console.error('no google client secrets')
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>',
    // }),
  ],

  //   pages: {
  //     signIn: '/signin',
  //   },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
