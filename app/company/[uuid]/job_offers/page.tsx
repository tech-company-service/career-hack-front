'use client'

import { useParams } from 'next/navigation'
import React from 'react'
import ItemCount from '@/app/components/ItemCount'
import LoadingSpinner from '@/app/components/LoadingSpinner'
import PageTitle from '@/app/components/PageTitle'
import JobOfferList from '@/app/components/company/job_offers/JobOfferList'
import useCompanyJobOffers from '@/app/hooks/company/useCompanyJobOffers'

const JobOffers = () => {
  const params = useParams()
  const hashId = params.uuid.toString()
  const { jobOffers, loading, error } = useCompanyJobOffers(hashId)

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='bg-white shadow-lg rounded-lg p-6 mb-4'>
          <div className='flex justify-between items-center mb-4'>
            <PageTitle title='募集職種一覧' />
            {error && jobOffers && (
              <ItemCount count={jobOffers.length} label='募集職種数' />
            )}
          </div>
          <JobOfferList jobOffers={jobOffers} loading={loading} error={error} />
        </div>
      </div>
    </div>
  )
}

export default JobOffers
