'use client'

import { useParams } from 'next/navigation'
import React from 'react'
import ItemCount from '@/app/components/ItemCount'
import LoadingSpinner from '@/app/components/LoadingSpinner'
import PageTitle from '@/app/components/PageTitle'
import CompanyArticleList from '@/app/components/company/articles/CompanyArticleList'
import useCompanyArticles from '@/app/hooks/company/useCompanyArticles'

const JobOffers = () => {
  const params = useParams()
  const hashId = params.uuid.toString()
  const { articles, loading, error } = useCompanyArticles(hashId)

  if (loading) {
    return <LoadingSpinner />
  }
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='bg-white shadow-lg rounded-lg p-6 mb-4'>
          <div className='flex justify-between items-center mb-4'>
            <PageTitle title='記事一覧' />
            {!error && articles && <ItemCount count={articles.length} label='記事数' />}
          </div>
          <CompanyArticleList articles={articles} loading={loading} error={error} />
        </div>
      </div>
    </div>
  )
}

export default JobOffers
