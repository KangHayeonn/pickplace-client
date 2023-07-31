import React from 'react';
import { categoryNameList } from '../../utils/mock/categoryList';
import DropDown from '../common/DropDown';
import { categorySelectorProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/modules';

const CategorySelector = ({
  categoryName,
  onChangeCategory,
}: categorySelectorProps) => {
  return (
    <div className="category-container">
      <h3 className="category-header">카테고리</h3>
      <div className="dropdown-container">
        <DropDown
          defaultText={
            categoryName
              ? categoryName
              : useSelector((state: RootState) => state.optionForm.category)
          }
          dropDownList={categoryNameList}
          onChangeCategory={onChangeCategory}
        />
      </div>
    </div>
  );
};

export default CategorySelector;
