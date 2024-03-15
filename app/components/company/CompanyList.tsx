import Link from 'next/link'
import React from 'react'
import LoadingSpinner from '../LoadingSpinner'
import NoSearchResult from '../NoSearchResult'
import CompanyCard from './CompanyCard'
import { Company } from '@/app/types/company'

interface CompanyListProps {
  companies: Company[] | undefined
  loading: boolean
  error: Error | null
}

const CompanyList: React.FC<CompanyListProps> = ({ companies, loading, error }) => {
  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  if (companies?.length === 0) {
    return <NoSearchResult attr='企業' />
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      {companies?.map((company) => (
        <Link href={`/company/${company.hash_id}`} key={company.id}>
          <CompanyCard key={company.id} company={company} />
        </Link>
      ))}
    </div>
  )
}

export default CompanyList
