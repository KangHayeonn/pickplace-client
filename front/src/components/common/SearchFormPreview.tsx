import React from 'react';
import '../../styles/components/common/searchFormPreview.scss';

interface SearchPreviewProps {
  searchList?: {
    address_name: string;
    x: string;
    y: string;
  }[];
  onClickAddressInLi?: (item: {
    address_name: string;
    x: string;
    y: string;
  }) => (e: React.MouseEvent<HTMLLIElement>) => void;
}

const SearchFormPreview = ({
  searchList,
  onClickAddressInLi,
}: SearchPreviewProps) => {
  const errMsg = '주소에 대한 검색 결과가 존재하지 않습니다.';
  return (
    <div className="search-preview">
      <ul className="search-preview__list">
        {searchList && searchList.length > 0 ? (
          searchList.map((item, index) => {
            return (
              <li
                key={index}
                className="search-preview__item"
                onClick={onClickAddressInLi && onClickAddressInLi(item)}
              >
                {item.address_name}
              </li>
            );
          })
        ) : (
          <li className="search-preview__errMsg">{errMsg}</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFormPreview;
