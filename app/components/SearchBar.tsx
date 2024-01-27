'use client'

import { useState } from "react";

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [ text, setText ] = useState<string>('')

  const handleInpuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const executeSearch = () => {
    onSearch(text);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeSearch();
    }
  };

  const handleSearch = () => {
    onSearch(text)
  }

  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="企業名で検索"
        className="p-2 w-full outline-none"
        value={text}
        onChange={handleInpuChange}
        onKeyPress={handleKeyPress}
      />
      <button className="p-2" onClick={handleSearch}>
        <img src="/search_icon.svg" className="w-6 h-6 text-gray-600" alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
