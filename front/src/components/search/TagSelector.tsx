import React from 'react';
import tagList from '../../utils/tagList';
import { tagSelectorProps } from './types';

const TagSelector = ({ onClickTagButton }: tagSelectorProps) => {
  return (
    <div className="container tagBtns">
      {tagList.map((item, key) => (
        <button
          className="tabBtn"
          key={key}
          value={item.id}
          onClick={onClickTagButton}
        >
          {item.tagName}
        </button>
      ))}
    </div>
  );
};

export default TagSelector;
