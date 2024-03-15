'use client'

import useSWR from 'swr';
import { Intern } from '@/app/types/intern'

const fetcher = async (url: string) => {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`データ取得失敗: ${response.statusText}`);
  }
  return response.json();
};

const useInternDetail = (hashId: string, internHashId: string) => {
  const requestUrl = hashId && internHashId ? `${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies/${hashId}/interns/${internHashId}` : null;
  
  const { data, error } = useSWR<Intern | undefined>(requestUrl, fetcher);

  return {
    internDetail: data,
    internDetailLoading: !error && !data,
    internDetailError: error,
  };
};

export default useInternDetail;
