'use client'

import React from 'react'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <li className='list-none'>
      <button
        onClick={() => signIn()}
        className='text-sm  bg-gray-700 text-white py-2'
      >
        Sign in
      </button>
    </li>
  )
}

export default Login
