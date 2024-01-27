import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import NoSearchResult from '../NoSearchResult';
import CompanyCard from './CompanyCard';
import { Company } from '@/app/types/company';

interface CompanyListProps {
  companies: Company[] | null;
  loading: boolean;
  error: Error | null;
}


const CompanyList: React.FC<CompanyListProps> = ({ companies, loading, error }) => {
  // if (loading) {
  //   return <LoadingSpinner />;
  // }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (companies?.length === 0) {
    return <NoSearchResult attr="企業" />
  }
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
