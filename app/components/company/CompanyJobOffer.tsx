import React from 'react'
import JobOfferCard from './../JobOfferCard'
import { JobOffer } from '@/app/types/job_offer'

interface CompanyJobOfferProps {
  jobOffers: JobOffer[] | null
}

const CompanyJobOffer: React.FC<CompanyJobOfferProps> = ({ jobOffers }) => {
  if (!jobOffers || jobOffers.length === 0) {
    return <div>現在、求人情報はありません。</div>
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10'>
      {jobOffers.slice(0, 8).map((jobOffer, index) => (
        <JobOfferCard key={index} jobOffer={jobOffer} />
      ))}
    </div>
  )
}

export default CompanyJobOffer
