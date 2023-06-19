import React from 'react';
import '../../styles/components/common/searchFormPreview.scss';

interface SearchPreviewProps {
  searchList: Array<string>;
}

const SearchFormPreview = ({ searchList }: SearchPreviewProps) => {
  return (
    <div className="search-preview">
      <ul className="search-preview__list">
        {searchList.map((item, index) => {
          return (
            <li key={index} className="search-preview__item">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchFormPreview;
