import React from 'react'
import CompanyProjectsTag from '@/app/components/company/CompanyProjectsTag'
import { Company } from '@/app/types/company'
import CompanyLogo from '@/app/components/company/CompanyLogo'

interface CompanyCardProps {
  company: Company
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <>
      <div className='w-full rounded overflow-hidden shadow-lg bg-white my-4 mx-auto'>
        <div className='flex items-end px-6 py-4'>
          <CompanyLogo avator={company?.avator ?? ''} is_logo_mail_approved={company?.is_logo_mail_approved ?? false} height={40} width={40} />
          <div className='font-bold text-xl ml-4 mb-2'>{company.name}</div>
        </div>
        <div className='px-6 py-4'>
          <div className='mt-4'>
            <span className='text-gray-700'>平均年収: </span>
            <span className='text-gray-700 font-bold'>
              {company.average_salary === 0 ? '不明' : `${company.average_salary}万円`}
            </span>
          </div>
          <div className='mt-4'>
            <span className='text-gray-700'>初任給: </span>
            <span className='text-gray-700 font-bold'>
              {company.initial_salary === 0 ? '不明' : `${company.initial_salary}万円`}
            </span>
          </div>
        </div>
        <div className='px-6 py-4'>
          <CompanyProjectsTag companyProjects={company.company_projects} />
        </div>
      </div>
    </>
  )
}

export default CompanyCard
