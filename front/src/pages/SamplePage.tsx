import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

const SamplePage: React.FC = () => {
  const count = useSelector((state: RootState) => state.mock.count);
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0);

  const onIncrease = () => {
    dispatch(increase());
    // setCount(count+1);
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

  return (
    <div>
      <h1>Sample Page</h1>
      <h2>{count}</h2>
      <button onClick={onIncrease}>증가</button>
      <CheckBox />
      <DropDown />
      <NumberForm />
      <SearchForm />
      <TextButton />
      <TextField />
      <ToastBox />
    </div>
  );
};

export default SamplePage;
