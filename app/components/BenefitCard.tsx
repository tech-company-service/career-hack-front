import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { CompanyBenefit } from '@/app/types/company_benefits'

interface BenefitCardProps {
  benefit: CompanyBenefit
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const contentBorderLength: number = 20

  const truncateDescription = (description: string): string => {
    return description.length > contentBorderLength
      ? `${description.substring(0, contentBorderLength)}...`
      : description
  }

  return (
    <>
      <div
        className='bg-white rounded-lg overflow-hidden border border-black mb-6 cursor-pointer hover:bg-black hover:border-white hover:text-white transition duration-300 ease-in-out'
        onClick={() => setIsModalOpen(true)}
      >
        <div className='p-6'>
          <div className='font-medium text-xl mb-2'>{benefit.title}</div>
          <p className='text-base mb-4'>{truncateDescription(benefit.content)}</p>
        </div>
      </div>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className='outline-none rounded-lg p-6 bg-white shadow-xl m-4 overflow-auto max-w-xl max-h-full fixed inset-0 h-full w-full sm:w-auto sm:h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        overlayClassName='fixed inset-0 bg-black bg-opacity-50'
      >
        <h2 className='font-medium text-xl mb-8 underline'>{benefit.title}</h2>
        <p className='text-gray-700 text-base mb-4 leading-loose'>{benefit.content}</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className='mt-4 bg-black text-white font-bold py-2 px-4 rounded'
        >
          閉じる
        </button>
      </ReactModal>
    </>
  )
}

export default BenefitCard
