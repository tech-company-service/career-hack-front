'use client'

import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import CompanyList from '../components/company/CompanyList'
import useCompaniesSearch from '../hooks/company/useCompaniesSearch'

const Company = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { companies, loading, error } = useCompaniesSearch(searchQuery)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='bg-white shadow-lg rounded-lg p-6 mb-4'>
          <div className='mb-4'>
            <Tabs />
          </div>
          <SearchBar onSearch={handleSearch} />
          <PageTitle title='企業一覧' />
          <CompanyList companies={companies} loading={loading} error={error} />
        </div>
      </div>
    </div>
  )
}

export default Company
