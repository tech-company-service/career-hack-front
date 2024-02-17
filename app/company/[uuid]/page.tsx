'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import Custom404 from '@/app/404'
import BorderLine from '@/app/components/BorderLine'
import LoadingSpinner from '@/app/components/LoadingSpinner'
import Accordion from '@/app/components/company/CompanyAboutAccordion'
import CompanyArticle from '@/app/components/company/CompanyArticle'
import CompanyBenefit from '@/app/components/company/CompanyBenefit'
import CompanyDetailTable from '@/app/components/company/CompanyDetailTable'
import CompanyJobOffer from '@/app/components/company/CompanyJobOffer'
import CompanyLogo from '@/app/components/company/CompanyLogo'
import CompanyService from '@/app/components/company/CompanyService'
import useCompanyDetail from '@/app/hooks/company/useCompanyDetail'

const CompanyDetail = () => {
  const params = useParams()
  const hashId = params.uuid.toString()
  const { companyDetail, loading, error } = useCompanyDetail(hashId)

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
   return <Custom404 />
  }

  const jobOfferCount: number | undefined = companyDetail?.job_offers.length

  return (
    <div className='bg-white shadow-md rounded-lg p-6 px-24'>
      <div className='flex items-end mb-4'>
        <CompanyLogo avator={companyDetail?.avator } is_logo_mail_approved={companyDetail?.is_logo_mail_approved } height={80} width={80} />
        <div className='text-4xl font-bold ml-4 mb-4'>{companyDetail?.name}</div>
      </div>
      <div className='mb-4'>{companyDetail?.description}</div>
      <div className='mb-4 mt-16'>
        <div className='text-xl font-bold mb-4'>企業について</div>
        <Accordion companyAbouts={companyDetail?.company_abouts || []} />
      </div>
      <div className='mb-4 mt-8'>
        <CompanyDetailTable companyDetail={companyDetail} />
      </div>
      <BorderLine />

      <div className='mt-8'>
        <div className='text-4xl font-bold mb-4'>社内エンジニアを知る記事</div>
        <div className='mb-4 mt-16'>
          <CompanyArticle articles={companyDetail?.company_articles || []} />
        </div>
      </div>
      <div className='my-4'>
        <Link
          href={`/company/${hashId}/articles`}
          className='text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out'
        >
          もっと見る
        </Link>
      </div>
      <BorderLine />

      <div className='mt-8'>
        <div className='text-4xl font-bold mb-4'>採用情報</div>
        <div className='mb-4 mt-16'>
          <CompanyJobOffer jobOffers={companyDetail?.job_offers || []} />
        </div>
      </div>
      <div className='my-4'>
        <Link
          href={`/company/${hashId}/job_offers`}
          className='text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out'
        >
          もっと見る
        </Link>
      </div>
      <BorderLine />

      <div className='mt-8'>
        <div className='text-4xl font-bold mb-4'>サービス</div>
        <div className='mb-4 mt-16'>
          <CompanyService services={companyDetail?.company_services || []} />
        </div>
      </div>
      <BorderLine />

      <div className='mt-8'>
        <div className='text-4xl font-bold mb-4'>福利厚生・制度</div>
        <div className='mb-4 mt-16'>
          <CompanyBenefit benefits={companyDetail?.company_benefits || []} />
        </div>
      </div>
    </div>
  )
}

export default CompanyDetail
