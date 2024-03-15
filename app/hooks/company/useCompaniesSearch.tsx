import useSWR from 'swr'
import { Company } from '../../types/company'

const fetcher = async (url: string) => {
  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`データ取得失敗: ${response.statusText}`)
  }
  return response.json()
}

const useCompaniesSearch = (params: string) => {
  const { data, error } = useSWR<Company[] | undefined>(
    params !== ''
      ? `${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies/search?query=${params}`
      : null,
    fetcher,
  )

  return {
    companySearchResults: data,
    iscompanySearchLoading: !error && !data,
    iscompanySearchError: error,
  }
}

export default useCompaniesSearch
