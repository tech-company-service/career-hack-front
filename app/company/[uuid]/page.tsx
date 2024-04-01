'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import Custom404 from '@/app/404'
import BorderLine from '@/app/components/BorderLine'
import LoadingSpinner from '@/app/components/LoadingSpinner'
import Accordion from '@/app/components/company/CompanyAboutAccordion'
import CompanyArticles from '@/app/components/company/CompanyArticle'
import CompanyBenefit from '@/app/components/company/CompanyBenefit'
import CompanyDetailTable from '@/app/components/company/CompanyDetailTable'
import CompanyJobOffer from '@/app/components/company/CompanyJobOffer'
import CompanyLogo from '@/app/components/company/CompanyLogo'
import CompanyProjectsTag from '@/app/components/company/CompanyProjectsTag'
import CompanyService from '@/app/components/company/CompanyService'
import useCompanyDetail from '@/app/hooks/company/useCompanyDetail'
import useWindowSize from '@/app/hooks/layout/useWindowSize'

const CompanyDetail = () => {
  const params = useParams()
  const hashId = params.uuid.toString()
  const { companyDetail, detailLoading, detailError } = useCompanyDetail(hashId)
  const [width, height] = useWindowSize()
  const logoSize = width <= 768 ? 40 : 80

  if (detailLoading) {
    return <LoadingSpinner />
  }
  if (detailError) return <p>Error: {detailError.message}</p>

  const jobOfferCount: number | undefined = companyDetail?.job_offers.length

  return (
    <div className='bg-white shadow-md rounded-lg mt-2 p-4 md:p-6 w-full max-w-6xl mx-auto'>
      <div className='flex items-end mb-4'>
        <div className='mt-4 ml-4'>
          <CompanyLogo
            avator={companyDetail?.avator}
            is_logo_mail_approved={companyDetail?.is_logo_mail_approved}
            height={logoSize}
            width={logoSize}
          />
        </div>
        <div className='text-xl md:text-4xl font-bold ml-4 mb-3'>{companyDetail?.name}</div>
      </div>
      <div className='my-12 mx-4'>
        {companyDetail && <CompanyProjectsTag companyProjects={companyDetail.company_projects} />}
      </div>
      <div className='mx-4 my-4'>{companyDetail?.description}</div>
      <div className='mb-4 mt-16'>
        <Accordion companyAbouts={companyDetail?.company_abouts || []} />
      </div>
      <div className='mb-4 mt-8'>
        <CompanyDetailTable companyDetail={companyDetail} />
      </div>
      <BorderLine />

      <div className='mt-8'>
        <div className='text-xl p-3 md:text-4xl font-bold mb-4 mr-1'>
          社内エンジニアを知る記事
          <span className='md:ml-6 text-xs md:text-xl font-normal block md:inline-block'>
            {companyDetail?.company_articles.length} 件
          </span>
        </div>
        <div className='mb-4 mt-4 md:mt-16'>
          <CompanyArticles articles={companyDetail?.company_articles || []} />
        </div>
      </div>
      <div className='my-10'>
        <Link href={`/company/${hashId}/articles`} className='text-slate-400'>
          もっと見る
        </Link>
      </div>
      <BorderLine />

      <div className='mt-8'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
          <div className='text-xl md:text-4xl font-bold mb-4 p-3'>
            採用情報
            <span className='ml-6 text-xs md:text-xl font-normal'>
              {companyDetail?.job_offers.length} 件
            </span>
          </div>
          <div>
            <Link
              href={`/company/${hashId}/interns`}
              className='text-black text-base md:text-lg hover:text-blue-500 ml-3'
            >
              インターン情報はこちら
            </Link>
          </div>
        </div>
        <div className='mb-4 mt-4 md:mt-16'>
          <CompanyJobOffer jobOffers={companyDetail?.job_offers || []} windowSize={width} />
        </div>
      </div>
      <div className='my-4'>
        <Link href={`/company/${hashId}/job_offers`} className='text-slate-400'>
          もっと見る
        </Link>
      </div>
      <BorderLine />

      <div className='mt-8'>
        <div className='text-xl p-3 md:text-4xl font-bold mb-4'>
          サービス
          <span className='ml-6 text-xs md:text-xl font-normal'>
            {companyDetail?.company_services.length} 件
          </span>
        </div>
        <div className='mb-4 mt-4 md:mt-16'>
          <CompanyService services={companyDetail?.company_services || []} windowSize={width} />
        </div>
      </div>
      <div className='my-4'>
        <Link href={`/company/${hashId}/services`} className='text-slate-400'>
          もっと見る
        </Link>
      </div>
      <BorderLine />

      <div className='mt-8'>
        <div className='text-xl p-3 md:text-4xl font-bold mb-4'>
          福利厚生・制度
          <span className='ml-6 text-xs md:text-xl font-normal'>
            {companyDetail?.company_benefits.length} 件
          </span>
        </div>
        <div className='mb-4 mt-4 md:mt-16'>
          <CompanyBenefit benefits={companyDetail?.company_benefits || []} windowSize={width} />
        </div>
      </div>
      <div className='my-4'>
        <Link href={`/company/${hashId}/benefits`} className='text-slate-400'>
          もっと見る
        </Link>
      </div>
    </div>
  )
}

export default CompanyDetail
