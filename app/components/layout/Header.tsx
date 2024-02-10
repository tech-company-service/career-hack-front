'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import React from 'react'
import Login from '../Login'
import Logout from '../Logout'

export const Header: React.FC<{ className?: string }> = ({ className }) => {
  const { data: session, status } = useSession()

  return (
    <div className={`fixed top-0 left-0 w-full bg-white shadow-md z-10 ${className ?? ''}`}>
      <nav className='container mx-auto px-6 py-3 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image src='/menu_icon.svg' alt='Menu' width={40} height={40} />
          </Link>
        </div>
        <div className='flex items-center'>
          {status === 'authenticated' ? (
            <div className='flex items-center space-x-4'>
              <p>セッションの期限：{session.expires}</p>
              <p>ようこそ、{session.user?.name}さん</p>
              <Image
                src={session.user?.image ?? `/default-profile.png`}
                alt={session.user?.name ?? 'Profile image'}
                width={500}
                height={300}
              />
              <Logout />
            </div>
          ) : (
            <Login />
          )}
        </div>
      </nav>
    </div>
  )
}
