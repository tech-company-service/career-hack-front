'use client'

import { useState, useEffect } from 'react'
import { CompanyArticle } from '@/app/types/company_article'

const useCompanyArticles = (hashId: string) => {
  const [articles, setArticles] = useState<CompanyArticle[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCompanyArticles = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies/${hashId}/articles`,
          {
            cache: 'no-store',
          },
        )
        if (!res.ok) {
          throw new Error('データ取得失敗')
        }
        const result: CompanyArticle[] = await res.json()
        setArticles(result)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchCompanyArticles()
  }, [hashId])

  return { articles, loading, error }
}

export default useCompanyArticles
