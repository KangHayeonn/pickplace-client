import React from 'react';
import { categoryNameList } from '../../utils/mock/categoryList';
import DropDown from '../common/DropDown';
import { categorySelectorProps } from './types';

const CategorySelector = ({
  categoryName,
  onChangeCategory,
}: categorySelectorProps) => {
  return (
    <div className="container category">
      <h3>카테고리</h3>
      <div className="container-dropdown">
        <DropDown
          defaultText={categoryName}
          dropDownList={categoryNameList}
          onChangeCategory={onChangeCategory}
        />
      </div>
    </div>
  );
};

export default CategorySelector;
