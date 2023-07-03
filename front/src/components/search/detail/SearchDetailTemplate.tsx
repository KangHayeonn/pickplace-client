import React from 'react';
import '../../../styles/components/search/detail/searchDetailTemplate.scss';

interface SearchDetailTemplateProps {
  children: React.ReactNode;
}

const SearchDetailTemplate = ({ children }: SearchDetailTemplateProps) => {
  return (
    <div className="search-detail">
      <div className="search-detail__form">{children}</div>
    </div>
  );
};

export default SearchDetailTemplate;
