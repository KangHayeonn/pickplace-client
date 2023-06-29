import React from 'react';
import '../../styles/components/mypage/userInfo.scss';
import * as type from './types';

const ShowUserInfo = ({
  classname,
  title,
  content,
  setUpdateState,
}: type.ShowUserInfo) => {
  return (
    <>
      <div className={classname}>
        <p>{title}</p>
        <p>{content}</p>
      </div>
      {setUpdateState && (
        <div>
          <button onClick={() => setUpdateState(true)}>변경하기</button>
        </div>
      )}
    </>
  );
};

export default ShowUserInfo;
