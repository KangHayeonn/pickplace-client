import React from 'react';
import { searchFilterProps } from './types';
import '../../styles/components/search/searchFilter.scss';

const SearchFilter = ({ onClickFilterButton }: searchFilterProps) => {
  const filter = [
    { value: 'recommend', name: '추천순' },
    { value: 'asc', name: '낮은가격순' },
    { value: 'desc', name: '높은가격순' },
  ];
  return (
    <div className="filterBtns">
      {filter.map((item, key) => (
        <label htmlFor={item.value} key={key}>
          <input
            type="checkbox"
            className="filterBtn"
            id={item.value}
            value={item.value}
            onChange={onClickFilterButton}
          ></input>
          {item.name}
        </label>
      ))}
    </div>
  );
};

export default SearchFilter;
