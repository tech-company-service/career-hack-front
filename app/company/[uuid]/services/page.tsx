'use client'

import { useParams } from 'next/navigation'
import React from 'react'
import ItemCount from '@/app/components/ItemCount'
import LoadingSpinner from '@/app/components/LoadingSpinner'
import PageTitle from '@/app/components/PageTitle'
import CompanyServiceList from '@/app/components/company/services/CompanyServiceList'
import useCompanyServices from '@/app/hooks/company/useCompanyServices'

const Services = () => {
  const params = useParams()
  const hashId = params.uuid.toString()
  const { companyServices, companyServiceLoading, companyServiceError } = useCompanyServices(hashId)

  if (companyServiceLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='bg-white shadow-lg rounded-lg p-6 mb-4'>
          <div className='flex justify-between items-center mb-4'>
            <PageTitle title='サービス一覧' />
            {!companyServiceError && companyServices && (
              <ItemCount count={companyServices.length} label='サービス数' />
            )}
          </div>
          <CompanyServiceList services={companyServices} loading={companyServiceLoading} error={companyServiceError} />
        </div>
      </div>
    </div>
  )
}

export default Services
