'use client'

import React from 'react';
import useCompanies from '../../hooks/company/useCompanies';
import CompanyCard from './CompanyCard';

const CompanyList = () => {
  const { companies, loading, error } = useCompanies();
  console.log(companies);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {companies?.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
        />
      ))}
    </div>
  );
};

export default CompanyList;
