'use client'

import { useParams } from 'next/navigation'
import React from 'react'
import ItemCount from '@/app/components/ItemCount'
import LoadingSpinner from '@/app/components/LoadingSpinner'
import PageTitle from '@/app/components/PageTitle'
import InternList from '@/app/components/company/intern/InternList'
import useIntern from '@/app/hooks/company/useIntern'

const Interns = () => {
  const params = useParams()
  const hashId = params.uuid.toString()
  const { interns, internLoading, internError } = useIntern(hashId)

  if (internLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='bg-white shadow-lg rounded-lg p-6 mb-4'>
          <div className='flex justify-between items-center mb-4'>
            <PageTitle title='インターン一覧' />
            {!internError && interns && (
              <ItemCount count={interns.length} label='募集中のインターン数' />
            )}
          </div>
          <InternList interns={interns} loading={internLoading} error={internError} hashId={hashId}  />
        </div>
      </div>
    </div>
  )
}

export default Interns
