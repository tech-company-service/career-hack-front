import React from 'react'
import { CompanyDetail } from '@/app/types/company';

interface CompanyDetailProps {
  companyDetail: CompanyDetail | null;
}

const CompanyDetailTable: React.FC<CompanyDetailProps> = ({ companyDetail }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="font-semibold">住所</div>
        <div>{companyDetail?.address}</div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="font-semibold">採用URL</div>
        <a href={companyDetail?.recruit_url} target="_blank" rel="noopener noreferrer" className="break-all hover:text-blue-500">
          {companyDetail?.recruit_url}
        </a>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="font-semibold">従業員数</div>
        <div>{companyDetail?.employees}人</div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="font-semibold">新卒年収</div>
        <div>{companyDetail?.initial_salary}万円</div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="font-semibold">平均年収</div>
        <div>{companyDetail?.average_salary}万円</div>
      </div>
    </div>
  )
}

export default CompanyDetailTable
