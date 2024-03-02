'use client'

import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { CompanyService } from '@/app/types/company_service';

interface CompanyServiceListProps {
  companyService: CompanyService[] | null;
  loading: boolean;
  error: Error | null;
}

const CompanyServiceList: React.FC<CompanyServiceListProps> = ({ companyService }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompanyService, setSelectedCompanyService] = useState<CompanyService | null>(null);

  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + '...' : description;
  };

  const handleCompanyServiceClick = (jobOffer: CompanyService) => {
    setSelectedCompanyService(jobOffer);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {companyService?.map((companyService) => (
          <div
            key={companyService.id}
            className='bg-gray-100 p-4 rounded-lg shadow cursor-pointer m-2'
            onClick={() => handleCompanyServiceClick(companyService)}
          >
            <h2 className='text-xl font-bold mb-4'>{companyService.name}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{truncateDescription(companyService.description)}</p>
          </div>
        ))}
      </div>

      {selectedCompanyService && (
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className='outline-none rounded-lg p-6 bg-white shadow-xl m-4 overflow-auto max-w-xl max-h-full fixed inset-0 h-full w-full sm:w-auto sm:h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          overlayClassName='fixed inset-0 bg-black bg-opacity-50'
        >
          <h2 className='font-medium text-xl mb-16'>{selectedCompanyService.name}</h2>
          <p className='text-gray-700 text-base mb-4 leading-loose'>
            {selectedCompanyService.description}
          </p>
        </ReactModal>
      )}
    </>
  );
};

export default CompanyServiceList;
