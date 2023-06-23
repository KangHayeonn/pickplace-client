import React, { useState, useEffect, useRef } from 'react';
import SearchFormPreview from './SearchFormPreview';
import '../../styles/components/common/searchForm.scss';
import searchIcon from '../../assets/images/searchIcon.svg';

interface SearchProps {
  placeholder?: string | undefined;
  search?: string | undefined; // 검색어 저장
  onChangeSearch?: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchForm = ({ placeholder, onChangeSearch, ...props }: SearchProps) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const searchWrap = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const searchPreviewList = ['강남', '잠실', '판교', '홍대', '여의도', '성수'];

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

  useEffect(() => {
    document.addEventListener('click', clickWrap);
  }, []);

  return (
    <section className="search-container" ref={searchWrap}>
      <div className="search-form">
        <div className="search-form__input">
          <input
            type="text"
            placeholder={placeholder || '주소나 동네를 검색해보세요.'}
            onChange={onChangeSearch}
            onFocus={onFocusSearch}
            defaultValue={props.search ? props.search : ''}
            {...props}
          />
          <img src={searchIcon} width={16} height={16} alt="Search Icon" />
        </div>
        {isFocus ? <SearchFormPreview searchList={searchPreviewList} /> : null}
      </div>
    </section>
  );
};

export default SearchForm;
