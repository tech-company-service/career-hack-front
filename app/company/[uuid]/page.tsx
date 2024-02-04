'use client'

import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import useCompanyDetail from '@/app/hooks/company/useCompanyDetail';

const CompanyDetail = () => {
  const params = useParams()
  const hashId = params.uuid.toString()
  const { companyDetail, loading, error } = useCompanyDetail(hashId);



  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
          <h1>企業詳細</h1>
          <p>{companyDetail?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail
