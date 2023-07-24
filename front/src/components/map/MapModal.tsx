import React from 'react';
import Map from './Map';
import '../../styles/components/map/mapModal.scss';
import closeBtnIcon from '../../assets/images/close_big.svg';
import { markerListType } from './types';

type mapModalProps = {
  onCloseModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  mapList: markerListType[];
};

const MapModal = ({ onCloseModal, mapList }: mapModalProps) => {
  return (
    <div className="mapModal-background">
      <div className="mapModal-container">
        <div className="mapModal__header">
          <button className="mapModal__btn--close" onClick={onCloseModal}>
            <img src={closeBtnIcon} />
          </button>
        </div>
        <Map width={'100%'} height={'600px'} markerList={mapList} />
      </div>
    </div>
  );
};

export default MapModal;
