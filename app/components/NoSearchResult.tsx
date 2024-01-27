import React from 'react';

interface NoSearchResultProps {
  attr: string;
}

const NoSearchResult: React.FC<NoSearchResultProps> = ({ attr }) => {
  return (
    <div className="text-center my-4">
      <p className="text-gray-600 text-xl">{attr}の検索結果は0件でした</p>
    </div>
  );
};

export default NoSearchResult;