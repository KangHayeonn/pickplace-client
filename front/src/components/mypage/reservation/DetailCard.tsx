import React from 'react';
import * as type from '../types';
import '../../../styles/components/mypage/reservation/detailCard.scss';

const DetailCard = ({ children, title }: type.detailCardProps) => {
  return (
    <div className="detailcard-container">
      {title && <h3 className="detailcard-placeName">{title}</h3>}
      {children}
    </div>
  );
};

export default DetailCard;
