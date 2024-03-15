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

const useInterns = (hashId: string) => {
  const { data, error } = useSWR<Intern[] | undefined>(hashId ? `${process.env.NEXT_PUBLIC_APP_API_URL}/api/v1/companies/${hashId}/interns` : null, fetcher);

  return {
    interns: data,
    internLoading: !error && !data,
    internError: error,
  };
};

export default useInterns
