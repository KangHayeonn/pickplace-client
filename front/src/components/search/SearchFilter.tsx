import React from 'react';
import { searchFilterProps } from './types';

const SearchFilter = ({ onClickFilterButton }: searchFilterProps) => {
  const filter = [
    { value: 'recommend', name: '추천순' },
    { value: 'asc', name: '낮은가격순' },
    { value: 'desc', name: '높은가격순' },
  ];
  return (
    //list 로 변경
    <div className="buttons filter">
      {filter.map((item, key) => (
        <label htmlFor={item.value} key={key}>
          <input
            type="checkbox"
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
