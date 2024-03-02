'use client'

import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { JobOffer } from '@/app/types/job_offer';

interface JobOfferListProps {
  jobOffers: JobOffer[] | null;
  loading: boolean;
  error: Error | null;
  url: string | undefined;
}

const JobOfferList: React.FC<JobOfferListProps> = ({ jobOffers, url }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobOffer, setSelectedJobOffer] = useState<JobOffer | null>(null);

  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + '...' : description;
  };

  const handleJobOfferClick = (jobOffer: JobOffer) => {
    setSelectedJobOffer(jobOffer);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {jobOffers?.map((jobOffer) => (
          <div
            key={jobOffer.id}
            className='bg-gray-100 p-4 rounded-lg shadow cursor-pointer m-2'
            onClick={() => handleJobOfferClick(jobOffer)}
          >
            <h2 className='text-xl font-bold mb-4'>{jobOffer.name}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{truncateDescription(jobOffer.description)}</p>
          </div>
        ))}
      </div>

      {selectedJobOffer && (
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className='outline-none rounded-lg p-6 bg-white shadow-xl m-4 overflow-auto max-w-xl max-h-full fixed inset-0 h-full w-full sm:w-auto sm:h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          overlayClassName='fixed inset-0 bg-black bg-opacity-50'
        >
          <h2 className='font-medium text-xl mb-16'>{selectedJobOffer.name}</h2>
          <p className='text-gray-700 text-base mb-4 leading-loose'>
            {selectedJobOffer.description}
          </p>
          {url && (
            <div className='ml-auto'>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className='mt-4 bg-black text-white font-bold py-2 px-4 rounded'
              >
                採用ページへ
              </a>
            </div>
          )}
        </ReactModal>
      )}
    </>
  );
};

export default JobOfferList;
