import React from 'react';
import { categoryNameList } from '../../utils/categoryList';
import DropDown from '../common/DropDown';
import { categorySelectorProps } from './types';

const CategorySelector = ({
  optionForm,
  onChangeCategory,
}: categorySelectorProps) => {
  return (
    <div className="container category">
      <h3>카테고리</h3>
      <div className="container-dropdown">
        <DropDown
          defaultText={optionForm.category.name}
          dropDownList={categoryNameList}
          onChangeCategory={onChangeCategory}
        ></DropDown>
      </div>
    </div>
  );
};

export default CategorySelector;
