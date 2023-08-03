import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/modules';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { setSearchType } from '../store/modules/searchForm';
import { setSearchResult } from '../store/modules/searchResult';
import {
  getCategoryResults,
  getBasicResults,
  getDetailResults,
  setHasNext,
  setPageNum,
} from '../store/modules/search';
import { searchProps } from '../store/modules/search';

import SearchHeader from '../components/search/SearchHeader';
import SearchOptionMenu from '../components/search/SearchOptionMenu';
import SearchFilter from '../components/search/SearchFilter';
import SearchResult from '../components/search/SearchResult';
import MapModal from '../components/map/MapModal';

import { markerListType } from '../components/map/types';
import '../styles/components/search/search.scss';
import { format } from 'date-fns';
import { isShowError } from '../components/common/ToastBox';
import { resetOptionForm } from '../store/modules/optionForm';
import { resetSearchForm } from '../store/modules/searchForm';
const SearchPage = () => {
  const dispatch = useDispatch();
  const dispatchSearch: ThunkDispatch<searchProps, void, AnyAction> =
    useDispatch();

  const [onMapOpen, setOnMapOpen] = useState(false);
  const [markerList, setMarkerList] = useState<markerListType[]>([]);

  const searchForm = useSelector((state: RootState) => state.searchForm);
  const optionForm = useSelector((state: RootState) => state.optionForm);
  const searchResult = useSelector(
    (state: RootState) => state.searchResultReducer,
  );
  const pageNum = useSelector(
    (state: RootState) => state.searchApiReducer.pageNum,
  );
  useEffect(() => {
    getCategoryData({
      searchForm,
      optionForm,
      pagination: {
        newPageNum: pageNum,
      },
    });
    dispatch(resetOptionForm(optionForm.category));
    dispatch(resetSearchForm());
  }, []);

  const getCategoryData = async (item: searchProps) => {
    await dispatchSearch(getCategoryResults(item))
      .then((res) => {
        if (res) {
          const result = res.placeList;
          dispatch(setHasNext(res.hasNext));
          if (item?.pagination?.newPageNum == 0) {
            dispatch(setSearchResult(result));
          } else {
            dispatch(setSearchResult([...searchResult, ...result]));
          }
          dispatch(setPageNum(item?.pagination?.newPageNum));
        }
        return;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const getSearchData = async (item: searchProps) => {
    await dispatchSearch(getBasicResults(item))
      .then((res) => {
        if (res) {
          const result = res.placeList;
          dispatch(setHasNext(res.hasNext));
          if (item?.pagination?.newPageNum == 0) {
            dispatch(setSearchResult(result));
          } else {
            dispatch(setSearchResult([...searchResult, ...result]));
          }
          dispatch(setPageNum(item?.pagination?.newPageNum));
        }
        return;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
  const getSearchDataWithOptions = async (item: searchProps) => {
    await dispatchSearch(getDetailResults(item))
      .then((res) => {
        if (res) {
          const result = res.placeList;
          dispatch(setHasNext(res.hasNext));
          if (item.pagination?.newPageNum == 0) {
            dispatch(setSearchResult(result));
          } else {
            dispatch(setSearchResult([...searchResult, ...result]));
          }
          dispatch(setPageNum(item.pagination?.newPageNum));
        }
        return;
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
      const tags = item.attributes.getNamedItem('data-tag')?.nodeValue;
      const placeDetail = {
        lat: Number(item.attributes.getNamedItem('data-lat')?.nodeValue),
        lng: Number(item.attributes.getNamedItem('data-lng')?.nodeValue),
        id: Number(item.attributes.getNamedItem('data-id')?.nodeValue),
        name: item.attributes.getNamedItem('data-name')?.nodeValue || '',
        category:
          item.attributes.getNamedItem('data-category')?.nodeValue || '',
        tag: tags ? tags.split(',') : [''],
      };
      const marker = placeDetail;
      newMarkerList.push(marker);
    });
    setMarkerList(newMarkerList);
  };
  const onClickFilterButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const data = {
      searchForm,
      optionForm,
      pagination: { searchType: value, newPageNum: 0 },
    };
    dispatch(setSearchType(value));
    if (checkOptionFormIsEmpty()) {
      if (checkSearchFormIsEmpty()) {
        getCategoryData(data);
      } else {
        getSearchData(data);
      }
    } else {
      getSearchDataWithOptions(data);
    }
  };
  const checkAddressExist = () => {
    if (searchForm.address == '') {
      isShowError('주소를 입력해주세요');
      return false;
    }
    return true;
  };
  const checkSearchFormIsEmpty = () => {
    if (
      searchForm.address == '서울 중구 창경궁로 62-29' &&
      searchForm.startDate == format(new Date(), 'yyyy-MM-dd') &&
      searchForm.endDate == format(new Date(), 'yyyy-MM-dd')
    )
      return true;
    return false;
  };
  const checkOptionFormIsEmpty = () => {
    if (
      optionForm.userCnt == 1 &&
      optionForm.tagList.length == 0 &&
      searchForm.distance == 5
    )
      return true;
    return false;
  };
  const onSearchBtnClick = () => {
    if (checkAddressExist()) {
      const data = { searchForm, optionForm, pagination: { newPageNum: 0 } };
      checkOptionFormIsEmpty() && getSearchData(data);
      !checkOptionFormIsEmpty() && getSearchDataWithOptions(data);
    }
  };
  const onSearchWithOptionBtnClick = () => {
    checkAddressExist() &&
      getSearchDataWithOptions({
        searchForm,
        optionForm,
        pagination: { newPageNum: 0 },
      });
  };
  return (
    <div className="search">
      {onMapOpen && markerList && (
        <MapModal onCloseModal={onCloseModal} mapList={markerList} />
      )}
      <SearchHeader onSearchBtnClick={onSearchBtnClick} />
      <main>
        <SearchOptionMenu
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
