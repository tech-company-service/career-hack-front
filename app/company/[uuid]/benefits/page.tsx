'use client'

import { useParams } from 'next/navigation'
import React from 'react'
import ItemCount from '@/app/components/ItemCount'
import LoadingSpinner from '@/app/components/LoadingSpinner'
import PageTitle from '@/app/components/PageTitle'
import CompanyBenefitList from '@/app/components/company/benefits/CompanyBenefitList'
import useCompanyBenefits from '@/app/hooks/company/useCompanyBenefits'

const JobOffers = () => {
  const params = useParams()
  const hashId = params.uuid.toString()
  const { companyBenefits, companyBenefitLoading, companyBenefitError } = useCompanyBenefits(hashId)

  if (companyBenefitLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='bg-white shadow-lg rounded-lg p-6 mb-4'>
          <div className='flex justify-between items-center mb-4'>
            <PageTitle title='募集職種一覧' />
            {!companyBenefitError && companyBenefits && (
              <ItemCount count={companyBenefits.length} label='募集職種数' />
            )}
          </div>
          <CompanyBenefitList companyBenefits={companyBenefits} loading={companyBenefitLoading} error={companyBenefitError} />
        </div>
      </div>
    </div>
  )
}

export default JobOffers
