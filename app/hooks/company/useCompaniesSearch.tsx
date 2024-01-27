'use client'

import { useState, useEffect } from 'react';
import { Company } from '../../types/company';

const useCompaniesSearch = (params: string) => {
  const [companies, setCompanies] = useState<Company[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies/search?query=${params}`, 
        {
           cache: "no-store" 
        });
        if (!res.ok) {
          throw new Error('データ取得失敗');
        }
        const result: Company[] = await res.json();
        setCompanies(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [params]);

  return { companies, loading, error };
};

export default useCompaniesSearch;