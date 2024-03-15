import useSWR from 'swr';
import { Company } from '@/app/types/company';

const fetcher = async (url: string) => {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`データ取得失敗: ${response.statusText}`);
  }
  return response.json();
};

const useCompanies = () => {
  const { data, error } = useSWR<Company[] | undefined>(`${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies`, fetcher);

  return {
    companies: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCompanies;
