import React from 'react';
import Map from './Map';
import '../../styles/components/map/mapModal.scss';
import closeBtnIcon from '../../assets/images/close-btn.png';

type mapModalProps = {
  setOnMapOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const MapModal = ({ setOnMapOpen }: mapModalProps) => {
  return (
    <div className="modal-background">
      <div className="mapmodal">
        <div className="mapmodal-header">
          <button
            className="mapmodal-closeBtn"
            onClick={() => setOnMapOpen(false)}
          >
            <img src={closeBtnIcon}></img>
          </button>
        </div>
        <Map></Map>
      </div>
    </div>
  );
};

export default MapModal;
