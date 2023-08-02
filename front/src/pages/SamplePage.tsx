import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/modules';
import { increase } from '../store/modules/sample';
import Sample from '../api/sample';
import CheckBox from '../components/common/CheckBox';
import DropDown from '../components/common/DropDown';
import NumberForm from '../components/common/NumberForm';
import SearchForm from '../components/common/SearchForm';
import TextButton from '../components/common/TextButton';
import TextField from '../components/common/TextField';
import ToastBox from '../components/common/ToastBox';
import RadioGroup from '../components/common/RadioGroupContext';
import RadioButton from '../components/common/RadioButton';
import Calendar from '../components/common/Calendar';
import SelectBox from '../components/common/SelectBox';

const SamplePage = () => {
  const navigate = useNavigate();
  const count = useSelector((state: RootState) => state.sample.count);
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>('');
  const [isShowToast, setIsShowToast] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  // const [count, setCount] = useState(0);

  const [date, setDate] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<Date | null>(null);

  const onIncrease = () => {
    dispatch(increase());
    // setCount(count+1);
  };

  const onClickEvent = () => {
    navigate('/');
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    Sample.getSampleData()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }, []);

  const [value, setValue] = useState('radio');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <h1>Sample Page</h1>
      <h2>{count}</h2>
      <button onClick={onIncrease}>증가</button>
      <CheckBox text="숙소 이용 및 취소/환불 규정 동의 (필수)" />
      <div style={{ width: '300px' }}>
        <DropDown />
      </div>
      <NumberForm min={0} max={10} />
      <div style={{ width: '300px' }}>
        <SearchForm search={search} onChangeSearch={onChangeSearch} />
      </div>
      <TextButton text="로그인" onClick={onClickEvent} />
      <TextButton
        text="로그아웃"
        onClick={onClickEvent}
        classType="secondary short"
      />
      <TextButton
        text="동의 후 결제"
        onClick={onClickEvent}
        classType="secondary long"
      />
      <div style={{ width: '200px' }}>
        <TextField
          placeholder="test"
          message={message}
          onChangeText={onChangeMessage}
        />
      </div>
      {isShowToast && <ToastBox />}
      <RadioGroup onRadioChange={handleChange}>
        <RadioButton value="radio">라디오</RadioButton>
        <RadioButton value="button">버튼</RadioButton>
        <RadioButton value="test">예시</RadioButton>
      </RadioGroup>
      <Calendar calendarType="time" />
      <Calendar calendarType="date" />
      <Calendar calendarType="range" />
      <SelectBox />
    </div>
  );
};

export default SamplePage;
