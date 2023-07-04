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
    <div className="container SearchOptionMenu">
      <hr />
      <CategorySelector
        optionForm={optionForm}
        onChangeCategory={onChangeCategory}
      ></CategorySelector>

      <div className="container personnel">
        <h3>인원</h3>
        <div className="counter">
          <NumberForm min={0} onChangeNum={onChangeNum}></NumberForm>
        </div>
      </div>
      <DistanceInput
        onChangeUserRangeInput={onChangeUserRangeInput}
      ></DistanceInput>
      <hr />
      <TagSelector onClickTagButton={onClickTagButton}></TagSelector>
      <hr />
      <button className="button submit" onClick={onSearchWithOptionBtnClick}>
        옵션적용
      </button>
    </div>
  );
};

export default SearchOptionMenu;
