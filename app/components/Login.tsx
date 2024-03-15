'use client'

import { usePathname } from 'next/navigation'
import { useSession, signIn } from 'next-auth/react'
import React, { useState } from 'react'
import ReactModal from 'react-modal'
import LoadingSpinner from '@/app/components/LoadingSpinner'

export default function Login() {
  const { data: session, status } = useSession()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()

  if (status === 'loading') {
    return <LoadingSpinner />
  }

  if (status !== 'authenticated' && pathname !== '/') {
    return (
      <div>
        <button
          onClick={() => setIsModalOpen(true)}
          className='bg-black text-white font-bold uppercase text-lg px-5 py-2 rounded-xl shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          type='button'
        >
          ログイン
        </button>

        <ReactModal
          isOpen={isModalOpen}
          ariaHideApp={false}
          onRequestClose={() => setIsModalOpen(false)}
          className='outline-none rounded-lg p-4 bg-white shadow-xl m-8 overflow-auto max-w-lg max-h-1/2 fixed inset-0 h-auto w-3/4 sm:max-w-xs sm:h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          overlayClassName='fixed inset-0 bg-black bg-opacity-50'
        >
          <div className='text-center text-3xl font-bold pt-5'>Bridge .</div>

          <div className='flex flex-col justify-end h-full'>
            {/* <div className="w-full mb-4">
              <button
                onClick={() => signIn('google', {}, { prompt: 'login' })}
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-lg px-6 py-3 rounded-lg shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 w-full"
              >
                Googleでログイン
              </button>
            </div> */}
            <div className='w-full mb-4'>
              <button
                onClick={() => signIn('github', {}, { prompt: 'login' })}
                className='bg-white text-black border border-black font-bold uppercase text-lg px-6 py-3 rounded-lg shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 w-full flex items-center justify-center'
              >
                <img
                  src='/github_icon.svg'
                  alt='GitHub Icon'
                  className='mr-2'
                  style={{ width: '30px', height: '30px' }}
                />
                GitHubでログイン
              </button>
            </div>
          </div>
        </ReactModal>
      </div>
    )
  }
  return null
}
