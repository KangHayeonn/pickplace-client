import React, { useState } from 'react';
import RadioGroup from '../common/RadioGroupContext';
import RadioButton from '../common/RadioButton';
import * as type from './types';
import '../../styles/components/search/searchFilter.scss';
import { getRole } from '../../utils/tokenControl';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/modules';

const Header = ({ onClickHeaderButton }: type.headerProps) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(
    getRole() == 'HOST' ? true : false,
  );

  const clickedMenu = useSelector(
    (state: RootState) => state.radioReducer.clickedBtn,
  );
  const userHeader = [
    {
      value: '0',
      name: '예약내역',
      defaultChecked: clickedMenu == 0 ? true : false,
    },
    {
      value: '1',
      name: '회원정보',
      defaultChecked: clickedMenu == 1 ? true : false,
    },
    {
      value: '2',
      name: '내 리뷰',
      defaultChecked: clickedMenu == 2 ? true : false,
    },
  ];
  const adminHeader = [
    {
      value: '0',
      name: '예약내역',
      defaultChecked: clickedMenu == 0 ? true : false,
    },
    {
      value: '1',
      name: '회원정보',
      defaultChecked: clickedMenu == 1 ? true : false,
    },
    {
      value: '2',
      name: '내 리뷰',
      defaultChecked: clickedMenu == 2 ? true : false,
    },
    {
      value: '3',
      name: '공간관리',
      defaultChecked: clickedMenu == 3 ? true : false,
    },
    {
      value: '4',
      name: '예약관리',
      defaultChecked: clickedMenu == 4 ? true : false,
    },
  ];
  return (
    <RadioGroup onRadioChange={onClickHeaderButton}>
      {isAdmin
        ? adminHeader.map((item, key) => (
            <RadioButton
              key={key}
              value={item.value}
              defaultChecked={item.defaultChecked}
            >
              {item.name}
            </RadioButton>
          ))
        : userHeader.map((item, key) => (
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

export default Header;
