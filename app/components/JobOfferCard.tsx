import React from 'react'
import { JobOffer } from '../types/job_offer'
import styles from '@/app/styles.module.css'

interface JobOfferCardProps {
  jobOffer: JobOffer
}

const JobOfferCard: React.FC<JobOfferCardProps> = ({ jobOffer }) => {
  return (
    <div className={`flex flex-row items-center justify-start h-16 border border-blue-700 text-blue-700 bg-white text-xs font-semibold px-2.5 py-0.5 rounded hover:bg-blue-600 hover:border-blue-600 hover:text-white transition duration-300 ease-in-out overflow-x-auto ${styles.scroll}`}>
        <div className={`font-medium text-lg ml-4 whitespace-nowrap`}>{jobOffer.name}</div>
    </div>
  )
}

export default JobOfferCard
