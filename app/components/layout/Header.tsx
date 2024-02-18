'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';
import Login from '@/app/components/Login';
import LoggedInUserInfo from '@/app/components/LoggedInUserInfo';

export const Header: React.FC<{ className?: string }> = ({ className }) => {
  const { data: session, status } = useSession()

  return (
    <div className={`fixed top-0 left-0 w-full bg-white shadow-md z-10 ${className ?? ''}`}>
      <nav className='container mx-auto px-6 py-3 flex items-center'>
        <div className='ml-auto'>
          {status === 'authenticated' ? (
            <LoggedInUserInfo />
          ) : (
            <Login />
          )}
        </div>
      </nav>
    </div>
  )
}
