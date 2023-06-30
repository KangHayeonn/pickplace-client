import React from 'react';
import * as type from './types';

const ShowCardInfo = ({
  parentClassname,
  childClassname,
  title,
  content,
}: type.ShowCardInfo) => {
  return (
    <p className={parentClassname}>
      <span className={childClassname}>{title}</span>
      <span>{content}</span>
    </p>
  );
};

export default ShowCardInfo;
