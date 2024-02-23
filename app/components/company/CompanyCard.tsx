import React from 'react'
import CompanyLogo from '@/app/components/company/CompanyLogo'
import CompanyProjectsTag from '@/app/components/company/CompanyProjectsTag'
import { Company } from '@/app/types/company'

interface CompanyCardProps {
  company: Company
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <>
      <div className='w-full min-h-64 rounded overflow-hidden bg-white my-4 mx-auto border border-gray-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
        <div className='flex items-end px-6 py-4'>
          <CompanyLogo avator={company.avator} is_logo_mail_approved={company.is_logo_mail_approved} height={40} width={40} />
          <div className='font-bold text-xl ml-4 mb-2'>{company.name}</div>
        </div>
        <div>
          {company.description === '' ? (
            <p className='text-gray-700 text-base px-6 py-2'>-</p>
          ) : (
            <p className='text-gray-700 text-base px-6 py-2 truncate'>{company.description}</p>
          )}
        </div>
        <div className='px-6'>
          <div className=''>
            <span className='text-gray-700'>平均年収: </span>
            {company.average_salary === 0 ? (
              <span className='ml-3 text-gray-700 text-xl'>-</span>
            ) : (
              <span className='ml-3 text-gray-700 text-3xl font-bold'>{company.average_salary}</span>
            )}
            <span className='ml-2'>万円</span>
          </div>
          <div className='mt-4'>
            <span className='text-gray-700'>初任給: </span>
            {company.initial_salary === 0 ? (
              <span className='ml-7 text-gray-700 text-xl'>-</span>
            ) : (
              <span className='ml-7 text-gray-700 text-3xl font-bold'>{company.initial_salary}</span>
            )}
            <span>
              <span className='ml-2'>万円</span>
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
