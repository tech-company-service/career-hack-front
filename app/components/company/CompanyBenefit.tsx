import React from 'react'
import BenefitCard from '@/app/components/BenefitCard'
import { CompanyBenefit } from '@/app/types/company_benefit'

interface CompanyBenefitsProps {
  benefits: CompanyBenefit[] | null
  windowSize: number
}

const CompanyServices: React.FC<CompanyBenefitsProps> = ({ benefits, windowSize }) => {
  if (!benefits || benefits.length === 0) {
    return <div>福利厚生がありません</div>
  }

  if (windowSize < 768) {
    return (
      <div className='grid grid-cols-1 gap-4'>
        {benefits.slice(0, 4).map((benefit, index) => (
          <BenefitCard key={index} benefit={benefit} />
        ))}
      </div>
    )
  } else {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {benefits.slice(0, 8).map((benefit, index) => (
          <BenefitCard key={index} benefit={benefit} />
        ))}
      </div>
    )
  }
}

export default CompanyServices
