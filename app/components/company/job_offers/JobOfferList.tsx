import React from 'react'
import { JobOffer } from '@/app/types/job_offer'

interface JobOfferListProps {
  jobOffers: JobOffer[] | null
  loading: boolean
  error: Error | null
}

const JobOfferList: React.FC<JobOfferListProps> = ({ jobOffers }) => {
  return (
    <div className='space-y-4'>
      {jobOffers?.map((jobOffer) => (
        <div key={jobOffer.id} className='bg-gray-100 p-4 rounded-lg shadow'>
          <h2 className='text-xl font-bold mb-4'>{jobOffer.name}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{jobOffer.description}</p>
        </div>
      ))}
    </div>
  )
}

export default JobOfferList
