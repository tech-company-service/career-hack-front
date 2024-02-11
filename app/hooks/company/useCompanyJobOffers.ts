'use client'

import { useState, useEffect } from 'react'
import { JobOffer } from '@/app/types/job_offer'

const useCompanyJobOffers = (hashId: string) => {
  const [jobOffers, setJobOffers] = useState<JobOffer[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCompanyJobOffers = async () => {
      setLoading(true)
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
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchCompanyJobOffers()
  }, [hashId])

  return { jobOffers, loading, error }
}

export default useCompanyJobOffers
