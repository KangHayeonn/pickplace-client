import React from 'react';
import { categoryNameList } from '../../../../utils/mock/categoryList';
import DropDown from '../../../../components/common/DropDown';
import { categorySelectorProps } from '../../../../components/search/types';

const CategorySelector = ({
  categoryName,
  onChangeCategory,
}: categorySelectorProps) => {
  return (
    <div className="category-container">
      <h3 className="category-header">카테고리</h3>
      <div className="dropdown-container">
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
