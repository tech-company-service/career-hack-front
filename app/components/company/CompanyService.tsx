import React from 'react'
import ServiceCard from './../ServiceCard'
import { CompanyService } from '@/app/types/company_service'

interface CompanyServicesProps {
  services: CompanyService[] | null
}

const CompanyServices: React.FC<CompanyServicesProps> = ({ services }) => {
  if (!services || services.length === 0) {
    return <div>現在、求人情報はありません。</div>
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  )
}

export default CompanyServices
