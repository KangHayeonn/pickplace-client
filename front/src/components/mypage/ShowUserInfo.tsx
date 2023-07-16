import React from 'react';
import * as type from './types';

const ShowUserInfo = ({
  parentClassname,
  childClassname,
  title,
  content,
  setUpdateState,
}: type.ShowUserInfo) => {
  return (
    <>
      <div className={parentClassname}>
        <p>{title}</p>
        <p className={childClassname}>{content}</p>
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
