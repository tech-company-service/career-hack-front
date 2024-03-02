'use client'

import React, { useState } from 'react'
import { CompanyAbout } from '@/app/types/company_about'

interface CompanyAboutsProps {
  companyAbouts: CompanyAbout[]
}

interface CompanyAboutProps {
  companyAbout: CompanyAbout
}

const Accordion: React.FC<CompanyAboutsProps> = ({ companyAbouts }) => {
  return (
    <div>
      {companyAbouts.map((about, index) => (
        <AccordionSection key={index} companyAbout={about} />
      ))}
    </div>
  )
}

const AccordionSection: React.FC<CompanyAboutProps> = ({ companyAbout }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='border-b'>
      <button
        className='flex justify-between items-center w-full py-5 px-3 text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-lg font-semibold'>{companyAbout.title}</span>
        <span>{isOpen ? '▼' : '▶︎'}</span>
      </button>
      {isOpen && <div className='pb-5 px-3 whitespace-pre-line text-sm'>{companyAbout.content}</div>}
    </div>
  )
}

export default Accordion
