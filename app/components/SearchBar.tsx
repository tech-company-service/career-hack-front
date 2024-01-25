const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="企業名で検索"
        className="p-2 w-full outline-none"
      />
      <button className="p-2">
        <img src="/search_icon.svg" className="w-6 h-6 text-gray-600" alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
