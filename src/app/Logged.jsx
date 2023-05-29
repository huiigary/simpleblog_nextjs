'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Logged = ({ image }) => {
  return (
    <li className='flex justify-center items-center gap-8'>
      <button onClick={() => signOut()}>Sign Out</button>
      <Link href={'/dashboard'}>
        <Image
          className='w-14 rounded-full'
          width={20}
          height={20}
          src={image}
          alt='avatar image'
          priority
        ></Image>
      </Link>
    </li>
  )
}

export default Logged
