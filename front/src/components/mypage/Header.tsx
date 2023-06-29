import React, { useState } from 'react';
import '../../styles/components/search/searchFilter.scss';
import RadioGroup from '../common/RadioGroupContext';
import RadioButton from '../common/RadioButton';

type headerProps = {
  onClickHeaderButton: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header = ({ onClickHeaderButton }: headerProps) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const userHeader = [
    { value: '0', name: '예약내역' },
    { value: '1', name: '회원정보' },
  ];
  const adminHeader = [
    { value: '0', name: '예약내역' },
    { value: '1', name: '회원정보' },
    { value: '2', name: '공간관리' },
    { value: '3', name: '예약관리' },
  ];
  return (
    <RadioGroup onRadioChange={onClickHeaderButton}>
      {isAdmin
        ? adminHeader.map((item, key) => (
            <RadioButton key={key} value={item.value}>
              {item.name}
            </RadioButton>
          ))
        : userHeader.map((item, key) => (
            <RadioButton key={key} value={item.value}>
              {item.name}
            </RadioButton>
          ))}
    </RadioGroup>
  );
};

export default Header;
