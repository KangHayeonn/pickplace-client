import React, { useState, useEffect, useRef } from 'react';
import '../../styles/components/common/selectBox.scss';
import arrowDownIcon from '../../assets/images/arrowDown.svg';
import arrowUpIcon from '../../assets/images/arrowUp.svg';

export interface SelectBoxProps {
  defaultText?: string | undefined;
  selectBoxList?: string[];
  onChangeCategory?: (category: string) => void;
}

const SelectBox = ({
  defaultText,
  selectBoxList,
  onChangeCategory,
}: SelectBoxProps) => {
  const menuInput = useRef<HTMLInputElement>(null);
  const menuWrap = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(defaultText || '선택');

  const onClickLi = (item: string) => {
    return (e: React.MouseEvent<HTMLLIElement>) => {
      setTitle(item);
      onChangeCategory && onChangeCategory(item);
    };
  };

  const clickWrap = (e: MouseEvent) => {
    if (
      document.activeElement !== menuInput.current &&
      !menuWrap.current?.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickWrap);
  }, []);

  return (
    <div className="selectBox" ref={menuWrap}>
      <button className="selectBox__btn">
        {title}
        <img
          src={`${!isOpen ? arrowDownIcon : arrowUpIcon}`}
          width={12}
          height={12}
          alt="SelectBox Button"
          onClick={() => setIsOpen((open) => !open)}
        />
      </button>
      {isOpen ? (
        <ul className="selectBox__list">
          {selectBoxList &&
            selectBoxList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="selectBox__item"
                  onClick={onClickLi(item)}
                >
                  {item}
                </li>
              );
            })}
        </ul>
      ) : null}
    </div>
  );
};

export default SelectBox;
