import React from 'react';
import tagList from '../../utils/mock/tagList';
import { tagSelectorProps } from './types';

const TagSelector = ({ onClickTagButton }: tagSelectorProps) => {
  return (
    <div className="tagBtns-container">
      {tagList.map((item, key) => (
        <button
          className="tabBtn"
          key={key}
          value={item.tagName}
          onClick={onClickTagButton}
        >
          {item.tagName}
        </button>
      ))}
    </div>
  );
};

export default TagSelector;
