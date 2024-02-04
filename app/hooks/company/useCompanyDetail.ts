import { useState, useEffect, useMemo } from 'react';
import { CompanyDetail } from '../../types/company';

const useCompanyDetail = (hashId: string) => {
  const [companyDetail, setCompanyDetail] = useState<CompanyDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // useMemo を使用して options 配列をメモ化
  const options = useMemo(() => ['company_benefits', 'company_services', 'job_offers'], []);

  useEffect(() => {
    const fetchCompanyDetail = async () => {
      setLoading(true);
      try {
        const optionsQuery = options.map(option => `options[]=${option}`).join('&');

        const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies/${hashId}?${optionsQuery}`, {
          cache: "no-store"
        });
        if (!res.ok) {
          throw new Error('データ取得失敗');
        }
        const result: CompanyDetail = await res.json();
        setCompanyDetail(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCompanyDetail();

  }, [hashId, options]);

  return { companyDetail, loading, error };
};

export default useCompanyDetail;
