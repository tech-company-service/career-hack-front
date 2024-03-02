'use client'

import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { CompanyBenefit } from '@/app/types/company_benefit';

interface CompanyBenefitListProps {
  companyBenefits: CompanyBenefit[] | null;
  loading: boolean;
  error: Error | null;
}

const CompanyBenefitList: React.FC<CompanyBenefitListProps> = ({ companyBenefits }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCompanyBenefit, setSelectedCompanyBenefit] = useState<CompanyBenefit | null>(null);

  const truncateDescription = (title: string) => {
    return title.length > 100 ? title.substring(0, 100) + '...' : title;
  };

  const handleCompanyBenefitsClick = (companyBenefit: CompanyBenefit) => {
    setSelectedCompanyBenefit(companyBenefit);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {companyBenefits?.map((companyBenefit) => (
          <div
            key={companyBenefit.id}
            className='bg-white border border-black p-4 overflow-hidden rounded-lg shadow cursor-pointer m-2 hover:shadow-xl transition-shadow duration-300'
            onClick={() => handleCompanyBenefitsClick(companyBenefit)}
          >
            <h2 className='text-xl font-bold mb-4'>{companyBenefit.title}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{truncateDescription(companyBenefit.content)}</p>
          </div>
        ))}
      </div>

      {selectedCompanyBenefit && (
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className='outline-none rounded-lg p-6 bg-white shadow-xl m-4 overflow-auto max-w-xl max-h-full fixed inset-0 h-full w-full sm:w-auto sm:h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          overlayClassName='fixed inset-0 bg-black bg-opacity-50'
        >
          <h2 className='font-medium text-xl mb-8 underline'>{selectedCompanyBenefit.title}</h2>
          <p className='text-gray-700 text-base mb-8 leading-loose'>
            {selectedCompanyBenefit.content}
          </p>
        </ReactModal>
      )}
    </>
  );
};

export default CompanyBenefitList;
