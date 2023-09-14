import React from "react";

interface SearchSectionProps {
  searchKeyword: string;
  onInputChange: (keyword: string) => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({
  searchKeyword,
  onInputChange,
}) => {
  return (
    <div className="flex py-7 gap-5">
      <div>Search Product</div>
      <input
        value={searchKeyword}
        onChange={(e) => onInputChange(e.target.value)}
        className="border"
      />
    </div>
  );
};
