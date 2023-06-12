import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules';
import { increase } from '../store/modules/sample';
import Sample from '../api/sample';

const SearchPage: React.FC = () => {
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0);

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
      <h1>Search Page</h1>
    </div>
  );
};

export default SearchPage;
