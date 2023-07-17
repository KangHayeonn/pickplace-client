import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import SearchApi from '../api/search';
import SearchHeader from '../components/search/SearchHeader';
import SearchOptionMenu from '../components/search/SearchOptionMenu';
import SearchFilter from '../components/search/SearchFilter';
import SearchResult from '../components/search/SearchResult';
import MapModal from '../components/map/MapModal';

import '../styles/components/search/search.scss';
import { hotelSearchResult } from '../utils/mock/searchList';
import { categoryList } from '../utils/mock/categoryList';
import { markerList } from '../utils/mock/markerList';
import * as type from '../components/search/types';

const SearchPage = () => {
  const { state } = useLocation();
  const [onMapOpen, setOnMapOpen] = useState(false);

  //최초 보여줄 address default로 정해서 api 요청한 response로 초기화
  const [searchResult, setSearchResult] =
    useState<type.searchResultListProps[]>(hotelSearchResult);

  const [searchForm, setSearchForm] = useState<type.searchFormProps>({
    address: {
      address_name: '서울특별시 종로구 세종대로 172',
      x: 126.976661,
      y: 37.5706546,
    },
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd'),
    distance: 5,
    searchType: 'recommend',
  });

  const [optionForm, setOptionForm] = useState<type.optionFormProps>({
    startTime: '',
    endTime: '',
    category: state
      ? state
      : { name: categoryList[0].name, id: categoryList[0].id },
    userCnt: 1,
    tagId: [],
  });

  const onCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.style.overflow = 'unset';
    setOnMapOpen(false);
  };
  const onOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.style.overflow = 'hidden';
    setOnMapOpen(true);
  };
  const onChangeAddress = (address: string, x: string, y: string) => {
    setSearchForm({
      ...searchForm,
      address: {
        address_name: address,
        x: parseFloat(x),
        y: parseFloat(y),
      },
    });
  };
  const onChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchForm.endDate < e.target.value) {
      setSearchForm({
        ...searchForm,
        startDate: e.target.value,
        endDate: e.target.value,
      });
    } else {
      setSearchForm({
        ...searchForm,
        startDate: e.target.value,
      });
    }
  };
  const onChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchForm.startDate > e.target.value) {
      setSearchForm({
        ...searchForm,
        startDate: e.target.value,
        endDate: e.target.value,
      });
    } else {
      setSearchForm({
        ...searchForm,
        endDate: e.target.value,
      });
    }
  };
  const onClickFilterButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchForm({
      ...searchForm,
      searchType: e.currentTarget.value,
    });
    getSearchData();
  };
  const checkAddressExist = () => {
    if (searchForm.address.address_name == '') {
      window.alert('주소를 입력해주세요');
      return false;
    }
    return true;
  };
  const getSearchData = () => {
    SearchApi.getSearchData(searchForm)
      .then((res) => {
        setSearchResult(res.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const onSearchBtnClick = () => {
    checkAddressExist() && getSearchData();
  };
  const getSearchDataWithOptions = () => {
    SearchApi.getSearchDataWithOptions({
      searchForm,
      optionForm,
    })
      .then((res) => {
        setSearchResult(res.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const onSearchWithOptionBtnClick = () => {
    checkAddressExist() && getSearchDataWithOptions();
  };
  return (
    <div className="search">
      {onMapOpen && (
        <MapModal onCloseModal={onCloseModal} mapList={markerList}></MapModal>
      )}
      <SearchHeader
        startDate={searchForm.startDate}
        endDate={searchForm.endDate}
        category={optionForm.category.name}
        address={searchForm.address}
        onChangeAddress={onChangeAddress}
        onChangeStartDate={onChangeStartDate}
        onChangeEndDate={onChangeEndDate}
        onSearchBtnClick={onSearchBtnClick}
      />
      <main>
        <SearchOptionMenu
          optionForm={optionForm}
          setOptionForm={setOptionForm}
          searchForm={searchForm}
          setSearchForm={setSearchForm}
          onSearchWithOptionBtnClick={onSearchWithOptionBtnClick}
        />
        <section>
          <div className="search-tabBtns">
            <SearchFilter onClickFilterButton={onClickFilterButton} />
            <button className="search-tabBtns__mapBtn" onClick={onOpenModal}>
              지도
            </button>
          </div>
          <SearchResult searchResult={searchResult} />
        </section>
      </main>
    </div>
  );
};

export default SearchPage;
