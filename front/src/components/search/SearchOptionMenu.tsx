import React from 'react';
import categoryList from '../../utils/categoryList';
import tagList from '../../utils/tagList';
import DistanceSlider from './DistanceSlider';
import { searchOptionMenuProps } from './types';

const SearchOptionMenu = ({
  optionForm,
  onChangeCategory,
  onSearchWithOptionBtnClick,
  onDecreaseUserCount,
  onIncreaseUserCount,
  onChangeUserRangeInput,
  onClickTagButton,
}: searchOptionMenuProps) => {
  return (
    <div className="container SearchOptionMenu">
      <hr />
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

      <div className="container personnel">
        <h3>인원</h3>
        <div className="counter">
          <button onClick={onDecreaseUserCount}>-</button>
          <span>{optionForm.userCnt}</span>
          <button onClick={onIncreaseUserCount}>+</button>
        </div>
      </div>

      <div className="container distance">
        <h3>거리</h3>
        <DistanceSlider
          onChangeUserRangeInput={onChangeUserRangeInput}
        ></DistanceSlider>
        <p>
          <span>0km</span>
          <span>10km</span>
        </p>
      </div>
      <hr />
      <div className="container buttons">
        {tagList.map((item, key) => (
          <button key={key} value={item.id} onClick={onClickTagButton}>
            {item.tagName}
          </button>
        ))}
      </div>
      <hr />
      <button className="button submit" onClick={onSearchWithOptionBtnClick}>
        옵션적용
      </button>
    </div>
  );
};

export default SearchOptionMenu;
