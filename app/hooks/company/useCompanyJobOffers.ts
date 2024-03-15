'use client'

import { useState, useEffect } from 'react'
import { JobOffer } from '@/app/types/job_offer'

const useCompanyJobOffers = (hashId: string) => {
  const [jobOffers, setJobOffers] = useState<JobOffer[] | null>(null)
  const [jobOfferLoading, setJobOfferLoading] = useState<boolean>(false)
  const [jobOfferError, setJobOfferError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCompanyJobOffers = async () => {
      setJobOfferLoading(true)
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies/${hashId}/job_offers`,
          {
            cache: 'no-store',
          },
        )
        if (!res.ok) {
          throw new Error('データ取得失敗')
        }
        const result: JobOffer[] = await res.json()
        setJobOffers(result)
      } catch (err) {
        setJobOfferError(err as Error)
      } finally {
        setJobOfferLoading(false)
      }
    }

    fetchCompanyJobOffers()
  }, [hashId])

  return { jobOffers, jobOfferLoading, jobOfferError }
}

export default useCompanyJobOffers
