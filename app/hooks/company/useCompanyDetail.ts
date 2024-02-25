import { useState, useEffect, useMemo } from 'react'
import { CompanyDetail } from '../../types/company'

const useCompanyDetail = (hashId: string) => {
  const [companyDetail, setCompanyDetail] = useState<CompanyDetail | null>(null)
  const [detailLoading, setDetailLoading] = useState<boolean>(false)
  const [detailError, setDetailError] = useState<Error | null>(null)

  const options = useMemo(
    () => [
      'company_benefits',
      'company_services',
      'job_offers',
      'company_abouts',
      'company_articles',
    ],
    [],
  )

  useEffect(() => {
    const fetchCompanyDetail = async () => {
      setDetailLoading(true)
      try {
        const optionsQuery = options.map((option) => `options[]=${option}`).join('&')

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies/${hashId}?${optionsQuery}`,
          {
            cache: 'no-store',
          },
        )
        if (!res.ok) {
          throw new Error('データ取得失敗')
        }
        const result: CompanyDetail = await res.json()
        setCompanyDetail(result)
      } catch (err) {
        setDetailError(err as Error)
      } finally {
        setDetailLoading(false)
      }
    }

    fetchCompanyDetail()
  }, [hashId, options])

  return { companyDetail, detailLoading, detailError }
}

export default useCompanyDetail
