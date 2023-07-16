import React, { useState, useEffect, useRef } from 'react';
import SearchFormPreview from './SearchFormPreview';
import '../../styles/components/common/searchForm.scss';
import searchIcon from '../../assets/images/searchIcon.svg';

interface SearchProps {
  placeholder?: string | undefined;
  search?: string | undefined; // 검색어 저장
  searchPreviewList?: {
    address_name: string;
    x: string;
    y: string;
  }[];
  onChangeSearch?: React.ChangeEventHandler<HTMLInputElement>;
  onClickAddress?: (address: string, x: string, y: string) => void;
}

const SearchForm = ({
  search,
  placeholder,
  onChangeSearch,
  searchPreviewList,
  onClickAddress,
  ...props
}: SearchProps) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const searchWrap = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onFocusSearch = () => {
    setIsFocus(true);
  };

  const clickWrap = (e: MouseEvent) => {
    if (
      document.activeElement !== searchInput.current &&
      !searchWrap.current?.contains(e.target as Node)
    ) {
      setIsFocus(false);
    }
  };

  const onClickAddressInLi = (item: {
    address_name: string;
    x: string;
    y: string;
  }) => {
    return (e: React.MouseEvent<HTMLLIElement>) => {
      setIsFocus && setIsFocus(false);
      onClickAddress && onClickAddress(item.address_name, item.x, item.y);
    };
  };

  useEffect(() => {
    document.addEventListener('click', clickWrap);
  }, []);

  return (
    <section className="search-container" ref={searchWrap}>
      <div className="search-form">
        <div className="search-form__input">
          <input
            type="text"
            value={search}
            placeholder={placeholder || '주소나 동네를 검색해보세요.'}
            onChange={onChangeSearch}
            onFocus={onFocusSearch}
            {...props}
          />
          <img src={searchIcon} width={16} height={16} alt="Search Icon" />
        </div>
        {isFocus ? (
          <SearchFormPreview
            searchList={searchPreviewList}
            onClickAddressInLi={onClickAddressInLi}
          />
        ) : null}
      </div>
    </section>
  );
};

export default SearchForm;
