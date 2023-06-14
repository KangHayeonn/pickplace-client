import React from 'react';
import CATEGORYLIST from '../../utils/categoryList';
import TAGLIST from '../../utils/tagList';

type searchOptionMenuProps = {
  onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedCategoryId: number;
  onSearchWithOptionBtnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const SearchOptionMenu = ({
  onChangeCategory,
  selectedCategoryId,
  onSearchWithOptionBtnClick,
}: searchOptionMenuProps) => {
  const tagList = TAGLIST;
  const categoryList = CATEGORYLIST;
  return (
    <div className="container SearchOptionMenu">
      <hr />
      <div className="container category">
        <h3>카테고리</h3>
        <select onChange={onChangeCategory} value={selectedCategoryId}>
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
          <button>-</button>
          <span>3</span>
          <button>+</button>
        </div>
      </div>

      <div className="container distance">
        <h3>거리</h3>
        <p>slider</p>
      </div>
      <hr />
      <div className="container buttons">
        {tagList.map((item, key) => (
          <button key={key}>{item.tagName}</button>
        ))}
        <button>더보기</button>
      </div>
      <hr />
      <button className="button submit" onClick={onSearchWithOptionBtnClick}>
        옵션적용
      </button>
    </div>
  );
};

export default SearchOptionMenu;
