import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import Search from '../api/search';
import SearchHeader from '../components/search/SearchHeader';
import SearchOptionMenu from '../components/search/SearchOptionMenu';
import SearchFilter from '../components/search/SearchFilter';
import SearchResult from '../components/search/SearchResult';
import MapModal from '../components/map/MapModal';

import { categoryList } from '../utils/mock/categoryList';
import { markerListType } from '../components/map/types';
import * as type from '../components/search/types';
import '../styles/components/search/search.scss';

const SearchPage = () => {
  const { state } = useLocation();

  const defaultSearchFrom = {
    address: '서울 중구 창경궁로 62-29',
    x: 126.998711,
    y: 37.5681704,
    startDate: format(new Date(), 'yyyy-MM-dd'),
    endDate: format(new Date(), 'yyyy-MM-dd'),
    distance: 5,
    searchType: '추천순',
  };
  const defaultOptionForm = {
    category: state ? state : categoryList[0],
    userCnt: 1,
    tagList: [],
  };

  const countPerPage = 10;
  const [pageNum, setPageNum] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [onMapOpen, setOnMapOpen] = useState(false);
  const [markerList, setMarkerList] = useState<markerListType[]>([]);
  const [searchResult, setSearchResult] = useState<
    type.searchResultListProps[]
  >([]);

  const [searchForm, setSearchForm] =
    useState<type.searchFormProps>(defaultSearchFrom);

  const [optionForm, setOptionForm] =
    useState<type.optionFormProps>(defaultOptionForm);

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = async (item?: {
    newPageNum?: number;
    searchType?: string;
  }) => {
    const data = {
      address: defaultSearchFrom.address,
      x: defaultSearchFrom.x,
      y: defaultSearchFrom.y,
      searchType: item?.searchType ? item.searchType : searchForm.searchType,
      pageProps: {
        countPerPage: countPerPage,
        pageNum: item?.newPageNum ? item.newPageNum : pageNum,
      },
      category: optionForm.category.name,
    };
    await Search.getCategoryData(data)
      .then((res) => {
        setHasNext(res.data.data.hasNext);
        if (item?.newPageNum === undefined) {
          setSearchResult(res.data.data.placeList);
        } else {
          if (item.newPageNum == 0) {
            setSearchResult(res.data.data.placeList);
          } else {
            setSearchResult([...searchResult, ...res.data.data.placeList]);
          }
          setPageNum(item.newPageNum);
        }
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const getSearchData = (item?: {
    newPageNum?: number;
    searchType?: string;
  }) => {
    const data = {
      address: searchForm.address,
      x: searchForm.x,
      y: searchForm.y,
      startDate: searchForm.startDate.replaceAll('-', '.'),
      endDate: searchForm.endDate.replaceAll('-', '.'),
      distance: searchForm.distance,
      searchType: item?.searchType ? item.searchType : searchForm.searchType,
      pageProps: {
        countPerPage: countPerPage,
        pageNum: item?.newPageNum ? item.newPageNum : pageNum,
      },
      category: optionForm.category.name,
    };
    Search.getSearchData(data)
      .then((res) => {
        setHasNext(res.data.data.hasNext);
        if (item?.newPageNum === undefined) {
          setSearchResult(res.data.data.placeList);
          setPageNum(0);
        } else {
          if (item.newPageNum == 0) {
            setSearchResult(res.data.data.placeList);
          } else {
            setSearchResult([...searchResult, ...res.data.data.placeList]);
          }
          setPageNum(item.newPageNum);
        }
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const getSearchDataWithOptions = (item?: {
    newPageNum?: number;
    searchType?: string;
  }) => {
    const data = {
      address: searchForm.address,
      x: searchForm.x,
      y: searchForm.y,
      startDate: searchForm.startDate.replaceAll('-', '.'),
      endDate: searchForm.endDate.replaceAll('-', '.'),
      distance: searchForm.distance,
      searchType: item?.searchType ? item.searchType : searchForm.searchType,
      pageProps: {
        countPerPage: countPerPage,
        pageNum: item?.newPageNum ? item.newPageNum : pageNum,
      },
      category: optionForm.category.name,
      userCnt: optionForm.userCnt,
      tagList: optionForm.tagList,
    };
    Search.getSearchDataWithOptions(data)
      .then((res) => {
        setHasNext(res.data.data.hasNext);
        if (item?.newPageNum === undefined) {
          setSearchResult(res.data.data.placeList);
          setPageNum(0);
        } else {
          if (item.newPageNum == 0) {
            setSearchResult(res.data.data.placeList);
          } else {
            setSearchResult([...searchResult, ...res.data.data.placeList]);
          }
          setPageNum(item.newPageNum);
        }
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const onCloseModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.style.overflow = 'unset';
    setOnMapOpen(false);
  };
  const onOpenMapModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.style.overflow = 'hidden';
    setOnMapOpen(true);

    const newMarkerList: markerListType[] = [];
    document.querySelectorAll('.active').forEach((item) => {
      const tagList = item.attributes.getNamedItem('data-tag')?.nodeValue;
      const placeDetail = {
        lat: Number(item.attributes.getNamedItem('data-lat')?.nodeValue),
        lng: Number(item.attributes.getNamedItem('data-lng')?.nodeValue),
        id: Number(item.attributes.getNamedItem('data-id')?.nodeValue),
        name: item.attributes.getNamedItem('data-name')?.nodeValue || '',
        category:
          item.attributes.getNamedItem('data-category')?.nodeValue || '',
        // tag: tagList,
      };

      const marker = placeDetail;
      newMarkerList.push(marker);
    });
    setMarkerList(newMarkerList);
  };
  const onChangeAddress = (address: string, x: string, y: string) => {
    setSearchForm({
      ...searchForm,
      address: address,
      x: parseFloat(x),
      y: parseFloat(y),
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
    if (checkOptionFormIsEmpty()) {
      if (checkSearchFormIsEmpty()) {
        getCategoryData({ searchType: e.currentTarget.value, newPageNum: 0 });
      } else {
        getSearchData({ searchType: e.currentTarget.value, newPageNum: 0 });
      }
    } else {
      getSearchDataWithOptions({
        searchType: e.currentTarget.value,
        newPageNum: 0,
      });
    }
  };
  const checkAddressExist = () => {
    if (searchForm.address == '') {
      window.alert('주소를 입력해주세요');
      return false;
    }
    return true;
  };
  const checkSearchFormIsEmpty = () => {
    if (
      searchForm.address == defaultSearchFrom.address &&
      searchForm.startDate == defaultSearchFrom.startDate &&
      searchForm.endDate == defaultSearchFrom.endDate
    )
      return true;
    return false;
  };
  const checkOptionFormIsEmpty = () => {
    if (
      optionForm.category.name == defaultOptionForm.category.name &&
      optionForm.userCnt == 1 &&
      optionForm.tagList.length == 0 &&
      searchForm.distance == 5
    )
      return true;
    return false;
  };
  const onSearchBtnClick = () => {
    checkOptionFormIsEmpty() &&
      checkAddressExist() &&
      getSearchData({ newPageNum: 0 });
    !checkOptionFormIsEmpty() &&
      checkAddressExist() &&
      getSearchDataWithOptions({ newPageNum: 0 });
  };
  const onSearchWithOptionBtnClick = () => {
    checkAddressExist() && getSearchDataWithOptions({ newPageNum: 0 });
  };
  return (
    <div className="search">
      {onMapOpen && markerList && (
        <MapModal onCloseModal={onCloseModal} mapList={markerList} />
      )}
      <SearchHeader
        startDate={searchForm.startDate}
        endDate={searchForm.endDate}
        category={optionForm.category.name}
        address={searchForm.address}
        x={searchForm.x}
        y={searchForm.y}
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
            <button className="search-tabBtns__mapBtn" onClick={onOpenMapModal}>
              지도
            </button>
          </div>

          <SearchResult
            searchResult={searchResult}
            pageNum={pageNum}
            hasNext={hasNext}
            checkOptionFormIsEmpty={checkOptionFormIsEmpty}
            checkSearchFormIsEmpty={checkSearchFormIsEmpty}
            getCategoryData={getCategoryData}
            getSearchData={getSearchData}
            getSearchDataWithOptions={getSearchDataWithOptions}
          />
        </section>
      </main>
    </div>
  );
};

export default SearchPage;
