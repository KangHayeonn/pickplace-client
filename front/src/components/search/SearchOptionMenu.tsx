import React from 'react';
import CategorySelector from './CategorySelector';
import DistanceInput from './DistanceInput';
import TagSelector from './TagSelector';
import { searchOptionMenuProps } from './types';
import '../../styles/components/search/searchOptionMenu.scss';
import NumberForm from '../common/NumberForm';

import { setDistance } from '../../store/modules/searchForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/modules';
import {
  setCategory,
  setUserCnt,
  setTagList,
} from '../../store/modules/optionForm';

const SearchOptionMenu = ({
  onSearchWithOptionBtnClick,
}: searchOptionMenuProps) => {
  const dispatch = useDispatch();
  const optionForm = useSelector((state: RootState) => state.optionForm);

  const onChangeCategory = (category: string) => {
    dispatch(setCategory(category));
  };
  const onChangeUserRangeInput = (value: number) => {
    dispatch(setDistance(value));
  };
  const onClickTagButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedName = e.currentTarget.value;
    const clickedButton = e.currentTarget;
    if (clickedButton.classList.contains('clicked')) {
      e.currentTarget.classList.remove('clicked');
      dispatch(
        setTagList(
          optionForm.tagList.filter((tagName) => tagName !== selectedName),
        ),
      );
    } else {
      e.currentTarget.classList.add('clicked');
      dispatch(setTagList([...optionForm.tagList, selectedName]));
    }
  };
  const onChangeNum = (n: number) => {
    dispatch(setUserCnt(n));
  };
  return (
    <div className="searchOptionMenu-container">
      <hr />
      <CategorySelector
        categoryName={optionForm.category}
        onChangeCategory={onChangeCategory}
      />
      <div className="personnel-container">
        <h3 className="personnel-header">인원</h3>
        <div className="counter">
          <NumberForm min={1} onChangeNum={onChangeNum} />
        </div>
      </div>
      <DistanceInput onChangeUserRangeInput={onChangeUserRangeInput} />
      <hr />
      <TagSelector onClickTagButton={onClickTagButton} />
      <hr />
      <button
        className="searchOptionMenu-submitBtn"
        onClick={onSearchWithOptionBtnClick}
      >
        옵션적용
      </button>
    </div>
  );
};

export default SearchOptionMenu;
