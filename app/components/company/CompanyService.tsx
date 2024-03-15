import React from 'react'
import ServiceCard from './../ServiceCard'
import { CompanyService } from '@/app/types/company_service'

interface CompanyServicesProps {
  services: CompanyService[] | null,
  windowSize: number,
}

const CompanyServices: React.FC<CompanyServicesProps> = ({ services, windowSize }) => {
  if (!services || services.length === 0) {
    return <div>現在、サービス情報はありません。</div>
  }

  if (windowSize < 768) {
    return (
      <div className='grid grid-cols-1 gap-4'>
        {services.slice(0, 4).map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    )
  } else {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {services.slice(0, 8).map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    )
  }
}

export default CompanyServices
