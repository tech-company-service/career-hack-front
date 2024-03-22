// pages/privacy_policy.tsx
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import BorderLine from '@/app/components/BorderLine'
import PageTitle from '@/app/components/PageTitle'

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className='flex flex-col items-center justify-center p-8'>
        <div className='w-full max-w-4xl mx-auto'>
          <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <div className='mb-8'>
              <PageTitle title='運営者について' />
            </div>
            <h2 className='text-3xl'>Xアカウントは</h2>
            <a  
              className='my-6 text-xl'
              href='https://twitter.com/hawk_brain'
            >
              こちら
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
