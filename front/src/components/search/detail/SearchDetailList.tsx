import React from 'react';

interface SearchDetailListProps {
  listType: string | undefined;
}

const SearchDetailList = ({ listType }: SearchDetailListProps) => {
  return (
    <div>
      {listType === 'detail' ? 'Search Detail List' : 'Search Detail Review'}
    </div>
  );
};

export default SearchDetailList;
