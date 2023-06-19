import React from 'react';

// type searchFilterProps = {};
const SearchFilter = () => {
  const filter = [
    { value: 'recommend', name: '추천순' },
    { value: 'asc', name: '낮은가격순' },
    { value: 'desc', name: '높은가격순' },
  ];
  return (
    //list 로 변경
    <div className="buttons filter">
      {filter.map((item, key) => (
        <button key={key} value={item.value}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default SearchFilter;
