import React, { useState, useEffect, useRef } from 'react';
import '../../styles/components/common/dropDown.scss';
import arrowDownIcon from '../../assets/images/arrowDown.svg';
import arrowUpIcon from '../../assets/images/arrowUp.svg';

export interface DropDownProps {
  defaultText?: string | undefined;
  dropDownList?: string[];
  onChangeCategory?: (category: string) => void;
}

const DropDown = ({
  defaultText,
  dropDownList,
  onChangeCategory,
}: DropDownProps) => {
  const menuInput = useRef<HTMLInputElement>(null);
  const menuWrap = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(defaultText || '선택');

  const dropDownDefaultList = [
    '운동',
    '스터디',
    '맛집',
    '취미',
    '여행',
    '봉사',
    '친목',
  ];

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
    <div className="dropdown" ref={menuWrap}>
      <button className="dropdown__btn">
        {title}
        <img
          src={`${!isOpen ? arrowDownIcon : arrowUpIcon}`}
          width={12}
          height={12}
          alt="DropDown Button"
          onClick={() => setIsOpen((open) => !open)}
        />
      </button>
      {isOpen ? (
        <ul className="dropdown__list">
          {dropDownList
            ? dropDownList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="dropdown__item"
                    onClick={onClickLi(item)}
                  >
                    {item}
                  </li>
                );
              })
            : dropDownDefaultList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="dropdown__item"
                    onClick={() => setTitle(item)}
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

export default DropDown;
