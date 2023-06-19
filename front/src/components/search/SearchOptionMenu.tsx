import React from 'react';
import CategorySelector from './CategorySelector';
import DistanceInput from './DistanceInput';
import PersonnelCounter from './PersonnelCounter';
import TagSelector from './TagSelector';
import { searchOptionMenuProps } from './types';

const SearchOptionMenu = ({
  optionForm,
  setOptionForm,
  searchForm,
  setsearchForm,
  onSearchWithOptionBtnClick,
}: searchOptionMenuProps) => {
  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.options[e.target.options.selectedIndex];
    setOptionForm({
      ...optionForm,
      category: {
        id: parseInt(selectedOption.value),
        categoryName: selectedOption.innerText,
      },
    });
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
