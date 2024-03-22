import useSWR from 'swr'
import { CompanyDetail } from '../../types/company'

const fetcher = async (url: string) => {
  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`データ取得失敗: ${response.statusText}`)
  }
  return response.json()
}

const useCompanyDetail = (hashId: string) => {
  const options: any = [
    'company_benefits',
    'company_services',
    'job_offers',
    'company_abouts',
    'company_articles',
    'company_projects',
  ]
    .map((option) => `options[]=${option}`)
    .join('&')

  const { data, error } = useSWR<CompanyDetail | undefined>(
    hashId ? `${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies/${hashId}?${options}` : null,
    fetcher,
  )

  return {
    companyDetail: data,
    detailLoading: !error && !data,
    detailError: error,
  }
}

export default useCompanyDetail
