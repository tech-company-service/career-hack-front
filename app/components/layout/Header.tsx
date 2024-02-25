'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import Login from '@/app/components/Login';
import LoggedInUserInfo from '@/app/components/LoggedInUserInfo';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export const Header: React.FC<{ className?: string }> = ({ className }) => {
  const { data: session, status } = useSession()
  const [toastStatus, setToastStatus] = useState(status);

  useEffect(() => {
    if (toastStatus === 'unauthenticated' && status === 'authenticated') {
      toast.success('ログイン成功！');
      setToastStatus(status);
    } else if (toastStatus === 'authenticated' && status === 'unauthenticated') {
      toast.error('ログアウトしました');
      setToastStatus(status);
    }
  }, [status]);

  return (
    <div className={`fixed top-0 left-0 w-full bg-white shadow-md z-10 ${className ?? ''}`}>
      <ToastContainer />
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
