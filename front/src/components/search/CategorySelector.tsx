import React from 'react';
import categoryList from '../../utils/categoryList';
import { categorySelectorProps } from './types';

const CategorySelector = ({
  optionForm,
  onChangeCategory,
}: categorySelectorProps) => {
  return (
    <div className="container category">
      <h3>카테고리</h3>
      <select onChange={onChangeCategory} value={optionForm.category.id}>
        {categoryList.map((item) => (
          <option key={item.id} value={item.id}>
            {item.categoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
