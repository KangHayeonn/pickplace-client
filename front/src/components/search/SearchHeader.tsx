import React from 'react';

type searchHeaderProps = {
  categoryName: string;
  onChangeAddress: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  date: {
    startDate: string;
    endDate: string;
  };
  onChangeEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const SearchHeader = ({
  categoryName,
  onChangeAddress,
  onChangeStartDate,
  date,
  onChangeEndDate,
  onSearchBtnClick,
}: searchHeaderProps) => {
  return (
    <div className="container searchHeader">
      <div className="wrapper">
        <h1>{categoryName}</h1>
        <div className="container inputs">
          <input
            className="input address"
            type="text"
            placeholder="도로명/지번 주소를 입력해주세요"
            onChange={onChangeAddress}
          ></input>
          <div className="container date-input">
            <input
              className="input startDate"
              type="date"
              onChange={onChangeStartDate}
              value={date.startDate}
            ></input>
            <span>→</span>
            <input
              className="input endDate"
              type="date"
              onChange={onChangeEndDate}
              value={date.endDate}
            ></input>
            <button onClick={onSearchBtnClick}>검색</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
