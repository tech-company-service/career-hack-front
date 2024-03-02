'use client'

import { useState, useEffect } from 'react'
import { CompanyService } from '@/app/types/company_service'

const useCompanyServices = (hashId: string) => {
  const [companyService, setCompanyService] = useState<CompanyService[] | null>(null)
  const [companyServiceLoading, setCompanyServiceLoading] = useState<boolean>(false)
  const [companyServiceError, setCompanyServiceError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCompanyServices = async () => {
      setCompanyServiceLoading(true)
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies/${hashId}/services`,
          {
            cache: 'no-store',
          },
        )
        if (!res.ok) {
          throw new Error('データ取得失敗')
        }
        const result: CompanyService[] = await res.json()
        setCompanyService(result)
      } catch (err) {
        setCompanyServiceError(err as Error)
      } finally {
        setCompanyServiceLoading(false)
      }
    }

    fetchCompanyServices()
  }, [hashId])

  return { companyService, companyServiceLoading, companyServiceError }
}

export default useCompanyServices
