import React from 'react'
import Link from 'next/link'
import Login from './Login'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]/route'
import Logged from './Logged'

export default async function Navbar() {
  const session = await getServerSession(authOptions)
  // console.log({ session })
  return (
    <nav className='flex justify-between items-center py-8'>
      <Link href='/'>
        <h1 className='font-bold text-lg'>Navbar</h1>
      </Link>

      {/* Insert client component here. By default, next componets are server side. Buttons/interactions are client side */}
      <ul className='flex items-center gap-6'>
        {/* show login or signup */}
        {!session?.user && <Login />}
        {session?.user && <Logged image={session?.user?.image} />}
      </ul>
    </nav>
  )
}
