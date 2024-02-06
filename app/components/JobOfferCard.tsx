import React from 'react';
import { JobOffer } from '../types/job_offer';

interface JobOfferCardProps {
  jobOffer: JobOffer;
}

const JobOfferCard: React.FC<JobOfferCardProps> = ({ jobOffer }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-6">
      <div className="p-6">
        <div className="font-medium text-xl mb-2">{jobOffer.name}</div>
      </div>
    </div>
  );
};

export default JobOfferCard;