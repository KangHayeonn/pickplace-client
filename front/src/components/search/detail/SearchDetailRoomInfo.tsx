import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useNavigate, useParams } from 'react-router-dom';
import '../../../styles/components/search/detail/searchDetailList.scss';
import '../../../styles/components/search/detail/searchDetailRoomInfo.scss';
import { RootState } from '../../../store/modules';
import { GetCategoryImage } from '../../../components/common/GetCategoryImage';
import { ReservationInfoType } from '../../../api/reservation/types';
import { getUserId } from '../../../utils/tokenControl';
import { getReservationInfo } from '../../../store/modules/reservation';
import { setPlaceId, setRoomId } from '../../../store/modules/reservation';
import { isShowError } from '../../../components/common/ToastBox';

interface SearchDetailRoomInfoProps {
  roomItem?: {
    roomId: number;
    roomName: string;
    roomPrice: number;
    roomStatus: string;
    roomMaxNum: number;
  };
}

const SearchDetailRoomInfo = ({ roomItem }: SearchDetailRoomInfoProps) => {
  const navigate = useNavigate();
  const { searchId } = useParams();
  const category = useSelector((state: RootState) => state.optionForm.category);
  const reservationDate = useSelector(
    (state: RootState) => state.reservation.reservationDate,
  );
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const dispatch: ThunkDispatch<ReservationInfoType, void, AnyAction> =
    useDispatch();
  const userId = typeof window !== 'undefined' && getUserId();

  const onClickReservation = async () => {
    if (
      reservationDate.checkInTime === '' ||
      reservationDate.checkOutTime === ''
    ) {
      isShowError('예약 일자를 확인해주세요.');
      return;
    }
    if (!isLogin) {
      isShowError('로그인 후 이용 가능합니다.');
      return;
    }
    if (roomItem) {
      await dispatch(getReservationInfo(Number(userId), roomItem?.roomId));
      dispatch(
        setPlaceId({
          placeId: Number(searchId),
        }),
      );
      dispatch(
        setRoomId({
          roomId: roomItem?.roomId,
        }),
      );
      navigate('/reservation');
    }
  };

  return (
    <>
      {roomItem ? (
        <li className="search-list__container--item">
          <div
            className="search-detail-room__image"
            style={{
              background: `url(${GetCategoryImage(category)}) no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            image
          </div>
          <div className="search-detail-room__content">
            <div className="search-detail-room__content--title">
              {roomItem?.roomName} (최대 {roomItem?.roomMaxNum}인)
            </div>
            <div className="search-detail-room__content--info">
              <span>가격</span>
              <span>{roomItem?.roomPrice}원</span>
            </div>
            <div className="search-detail-room__content--btn">
              {roomItem?.roomStatus ? (
                <button
                  type="button"
                  className="search-detail-room__content--btn__reservation"
                  onClick={() => onClickReservation()}
                >
                  예약하기
                </button>
              ) : (
                <div className="search-detail-room__content--btn__closed">
                  예약마감
                </div>
              )}
            </div>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default SearchDetailRoomInfo;
