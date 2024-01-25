import React from 'react';
import { Company } from '../../types/company';

interface CompanyCardProps {
  company: Company;
}


const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <>
      <div className="w-full rounded overflow-hidden shadow-lg bg-white my-4 mx-auto">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{company.name}</div>
        </div>
        <div className="px-6 py-4">
          <div className="mt-4">
            <span className="text-gray-700 font-semibold">公開年収:</span>
            <span className="text-gray-700">{company.averageSalary}万円</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-semibold">初任給:</span>
            <span className="text-gray-700">{company.initialSalary}万円</span>
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">
            {company.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
