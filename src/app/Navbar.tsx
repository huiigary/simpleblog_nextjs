import React from 'react'
import Link from 'next/link'
import Login from './Login'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center py-8'>
      <Link href='/'>
        <h1 className='font-bold text-lg'>Navbar</h1>
      </Link>

      {/* Insert client component here. By default, next componets are server side. Buttons/interactions are client side */}
      <ul className='flex items-center gap-6'>
        <Login />
      </ul>
    </nav>
  )
}
