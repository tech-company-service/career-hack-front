'use client'

import React, { useState } from 'react'
import ServiceCard from '@/app/components/ServiceCard'
import { CompanyService } from '@/app/types/company_service'

interface CompanyServiceListProps {
  services: CompanyService[] | null
  loading: boolean
  error: Error | null
}

const CompanyServiceList: React.FC<CompanyServiceListProps> = ({ services }) => {
  if (!services || services.length === 0) {
    return <div>現在、サービス情報はありません。</div>
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {services?.map((service, index) => <ServiceCard key={index} service={service} />)}
    </div>
  )
}

export default CompanyServiceList
