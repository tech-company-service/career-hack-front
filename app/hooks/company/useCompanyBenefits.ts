'use client'

import { useState, useEffect } from 'react'
import { CompanyBenefit } from '@/app/types/company_benefit'

const useCompanyBenefits = (hashId: string) => {
  const [companyBenefits, setCompanyBenefits] = useState<CompanyBenefit[] | null>(null)
  const [companyBenefitLoading, setCompanyBenefitLoading] = useState<boolean>(false)
  const [companyBenefitError, setCompanyBenefitError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCompanyBenefits = async () => {
      setCompanyBenefitLoading(true)
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies/${hashId}/benefits`,
          {
            cache: 'no-store',
          },
        )
        if (!res.ok) {
          throw new Error('データ取得失敗')
        }
        const result: CompanyBenefit[] = await res.json()
        setCompanyBenefits(result)
      } catch (err) {
        setCompanyBenefitError(err as Error)
      } finally {
        setCompanyBenefitLoading(false)
      }
    }

    fetchCompanyBenefits()
  }, [hashId])

  return { companyBenefits, companyBenefitLoading, companyBenefitError }
}

export default useCompanyBenefits
