import React from 'react';
import { searchFilterProps } from './types';
import '../../styles/components/search/searchFilter.scss';
import RadioGroup from '../common/RadioGroupContext';
import RadioButton from '../common/RadioButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules';

const SearchFilter = ({ onClickFilterButton }: searchFilterProps) => {
  const searchForm = useSelector((state: RootState) => state.searchForm);
  const filter = [
    {
      value: '추천순',
      name: '추천순',
      defaultChecked: searchForm.searchType == '추천순' ? true : false,
    },
    {
      value: '낮은가격순',
      name: '낮은가격순',
      defaultChecked: searchForm.searchType == '낮은가격순' ? true : false,
    },
    {
      value: '높은가격순',
      name: '높은가격순',
      defaultChecked: searchForm.searchType == '높은가격순' ? true : false,
    },
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
