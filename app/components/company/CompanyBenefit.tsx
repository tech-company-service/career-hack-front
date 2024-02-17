import React from 'react'
import BenefitCard from '@/app/components/BenefitCard'
import { CompanyBenefit } from '@/app/types/company_benefits'

interface CompanyBenefitsProps {
  benefits: CompanyBenefit[] | null
}

const CompanyServices: React.FC<CompanyBenefitsProps> = ({ benefits }) => {
  if (!benefits || benefits.length === 0) {
    return <div>福利厚生がありません</div>
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {benefits.map((benefit, index) => (
        <BenefitCard key={index} benefit={benefit} />
      ))}
    </div>
  )
}

export default CompanyServices
