import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules';
import { increase } from '../store/modules/sample';

const SamplePage: React.FC = () => {
    const count = useSelector((state: RootState) => state.mock.count);
    const dispatch = useDispatch();
    // const [count, setCount] = useState(0);

    const onIncrease = () => {
        dispatch(increase());
        // setCount(count+1);
    }

    return (
        <div>
            <h1>Sample Page</h1>
            <h2>{count}</h2>
            <button onClick={onIncrease}>증가</button>
        </div>
    );
};

export default SamplePage;