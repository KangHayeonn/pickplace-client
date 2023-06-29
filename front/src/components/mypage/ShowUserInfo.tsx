import React from 'react';
import '../../styles/components/mypage/userInfo.scss';

type ShowUserInfo = {
  classname?: string | undefined;
  title: string;
  content: string;
  setUpdateState?: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShowUserInfo = ({
  classname,
  title,
  content,
  setUpdateState,
}: ShowUserInfo) => {
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
