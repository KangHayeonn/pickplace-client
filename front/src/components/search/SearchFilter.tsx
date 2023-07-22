import React from 'react';
import { searchFilterProps } from './types';
import '../../styles/components/search/searchFilter.scss';
import RadioGroup from '../common/RadioGroupContext';
import RadioButton from '../common/RadioButton';

const SearchFilter = ({ onClickFilterButton }: searchFilterProps) => {
  const filter = [
    { value: '추천 순', name: '추천순', defaultChecked: true },
    { value: '낮은 가격순', name: '낮은가격순' },
    { value: '높은 가격순', name: '높은가격순' },
  ];
  return (
    <RadioGroup onRadioChange={onClickFilterButton}>
      {filter.map((item, key) => (
        <RadioButton
          key={key}
          value={item.value}
          defaultChecked={item.defaultChecked}
        >
          {item.name}
        </RadioButton>
      ))}
    </RadioGroup>
  );
};

export default SearchFilter;
