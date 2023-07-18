import React from 'react';
import CategorySelector from './CategorySelector';
import DistanceInput from './DistanceInput';
import TagSelector from './TagSelector';
import { searchOptionMenuProps } from './types';
import '../../styles/components/search/searchOptionMenu.scss';
import { categoryList } from '../../utils/mock/categoryList';
import NumberForm from '../common/NumberForm';

const SearchOptionMenu = ({
  optionForm,
  setOptionForm,
  searchForm,
  setSearchForm,
  onSearchWithOptionBtnClick,
}: searchOptionMenuProps) => {
  const onChangeCategory = (category: string) => {
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i].name == category) {
        setOptionForm({
          ...optionForm,
          category: {
            id: categoryList[i].id,
            name: categoryList[i].name,
          },
        });
      }
    }
  };
  const onChangeUserRangeInput = (value: number) => {
    setSearchForm({
      ...searchForm,
      distance: value,
    });
  };
  const onClickTagButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tagId = e.currentTarget.value;
    const clickedButton = e.currentTarget;
    if (clickedButton.classList.contains('clicked')) {
      e.currentTarget.classList.remove('clicked');
      setOptionForm({
        ...optionForm,
        tagId: optionForm.tagId.filter((id) => id !== parseInt(tagId)),
      });
    } else {
      e.currentTarget.classList.add('clicked');
      setOptionForm({
        ...optionForm,
        tagId: [...optionForm.tagId, parseInt(tagId)],
      });
    }
  };
  const onChangeNum = (n: number) => {
    setOptionForm({
      ...optionForm,
      userCnt: n,
    });
  };

  return (
    <div className="searchOptionMenu-container">
      <hr />
      <CategorySelector
        categoryName={optionForm.category.name}
        onChangeCategory={onChangeCategory}
      />
      <div className="personnel-container">
        <h3 className="personnel-header">인원</h3>
        <div className="counter">
          <NumberForm min={0} onChangeNum={onChangeNum} />
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
