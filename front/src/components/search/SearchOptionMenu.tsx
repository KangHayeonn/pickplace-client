import React from 'react';
import CategorySelector from './CategorySelector';
import DistanceInput from './DistanceInput';
import PersonnelCounter from './PersonnelCounter';
import TagSelector from './TagSelector';
import { searchOptionMenuProps } from './types';
import '../../styles/components/search/searchOptionMenu.scss';
import { categoryList } from '../../utils/categoryList';

const SearchOptionMenu = ({
  optionForm,
  setOptionForm,
  searchForm,
  setsearchForm,
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
    setsearchForm({
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

  return (
    <div className="container SearchOptionMenu">
      <hr />
      <CategorySelector
        optionForm={optionForm}
        onChangeCategory={onChangeCategory}
      ></CategorySelector>

      <PersonnelCounter
        optionForm={optionForm}
        setOptionForm={setOptionForm}
      ></PersonnelCounter>

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
