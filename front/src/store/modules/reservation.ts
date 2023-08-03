import { handleActions } from 'redux-actions';
import { Dispatch } from 'redux';
import ReservationApi from '../../api/reservation';
import {
  ReservationAccountType,
  ReservationCardType,
  ReservationQRCodeType,
} from '../../api/reservation/types';

interface reservationDateType {
  reservationDate: {
    checkInTime: string;
    checkOutTime: string;
  };
}

// Action Type 정의
export const RESERVATION_ACCOUNT = 'reservation/RESERVATION_ACCOUNT' as const;
export const RESERVATION_ACCOUNT_SUCCESS =
  'reservation/RESERVATION_ACCOUNT_SUCCESS' as const;
export const RESERVATION_ACCOUNT_ERROR =
  'reservation/RESERVATION_ACCOUNT_ERROR' as const;

export const RESERVATION_CARD = 'reservation/RESERVATION_CARD' as const;
export const RESERVATION_CARD_SUCCESS =
  'reservation/RESERVATION_CARD_SUCCESS' as const;
export const RESERVATION_CARD_ERROR =
  'reservation/RESERVATION_CARD_ERROR' as const;

export const RESERVATION_QRCode = 'reservation/RESERVATION_QRCode' as const;
export const RESERVATION_QRCode_SUCCESS =
  'reservation/RESERVATION_QRCode_SUCCESS' as const;
export const RESERVATION_QRCode_ERROR =
  'reservation/RESERVATION_QRCode_ERROR' as const;

export const GET_RESERVATION_INFO = 'reservation/GET_RESERVATION_INFO' as const;
export const GET_RESERVATION_INFO_SUCCESS =
  'reservation/GET_RESERVATION_INFO_SUCCESS' as const;
export const GET_RESERVATION_INFO_ERROR =
  'reservation/GET_RESERVATION_INFO_ERROR' as const;

export const SET_RESERVATION_DATE = 'reservation/SET_RESERVATION_DATE' as const;

export const reservationAccount =
  (memberId: number, data: ReservationAccountType) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: RESERVATION_ACCOUNT });
    try {
      const response = await ReservationApi.v1ReservationAccount(
        memberId,
        data,
      );
      dispatch({
        type: RESERVATION_ACCOUNT_SUCCESS,
        payload: response,
      });
      return response.data.data;
    } catch (e) {
      dispatch({
        type: RESERVATION_ACCOUNT_ERROR,
        payload: e,
        error: true,
      });
    }
  };

export const reservationCard =
  (memberId: number, data: ReservationCardType) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: RESERVATION_CARD });
    try {
      const response = await ReservationApi.v1ReservationCard(memberId, data);
      dispatch({
        type: RESERVATION_CARD_SUCCESS,
        payload: response,
      });
      return response.data.data;
    } catch (e) {
      dispatch({
        type: RESERVATION_CARD_ERROR,
        payload: e,
        error: true,
      });
    }
  };

export const reservationQRCode =
  (memberId: number, data: ReservationQRCodeType) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: RESERVATION_QRCode });
    try {
      const response = await ReservationApi.v1ReservationQRCode(memberId, data);
      dispatch({
        type: RESERVATION_QRCode_SUCCESS,
        payload: response,
      });
      return response.data.data;
    } catch (e) {
      dispatch({
        type: RESERVATION_QRCode_ERROR,
        payload: e,
        error: true,
      });
    }
  };

export const getReservationInfo =
  (memberId: number, roomId: number) => async (dispatch: Dispatch) => {
    dispatch({ type: GET_RESERVATION_INFO });
    try {
      const response = await ReservationApi.v1GetReservation(memberId, roomId);
      dispatch({
        type: GET_RESERVATION_INFO_SUCCESS,
        payload: response,
      });
      return response.data.data;
    } catch (e) {
      dispatch({
        type: GET_RESERVATION_INFO_ERROR,
        payload: e,
        error: true,
      });
    }
  };

export const setReservationInfo = (reservationDate: reservationDateType) => ({
  type: SET_RESERVATION_DATE,
  payload: reservationDate,
});

export const initialState = {
  loading: {
    RESERVATION_ACCOUNT: false,
    RESERVATION_CARD: false,
    RESERVATION_QRCode: false,
    GET_RESERVATION_INFO: false,
  },
  member: {
    memberName: '판매왕',
    memberPhone: '01023441122',
  },
  payment: {
    roomPrice: 25000,
  },
  place: {
    placeName: '포레스트구구',
    roomName: '회의실 201호',
    roomMaxNum: 4,
    address: '서울 종로구 윤보선길 65 2층',
  },
  placeId: 27,
  roomId: 123,
  reservationDate: {
    checkInTime: '2023년 08월 03일 15:00',
    checkOutTime: '2023년 08월 04일 10:00',
  },
};

const reservationReducer = handleActions(
  {
    [RESERVATION_ACCOUNT]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        RESERVATION_ACCOUNT: true, // 요청 시작
      },
    }),
    [RESERVATION_ACCOUNT_SUCCESS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        RESERVATION_ACCOUNT: false, // 요청 완료
      },
    }),
    [RESERVATION_ACCOUNT_ERROR]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        RESERVATION_ACCOUNT: false, // 요청 완료
      },
    }),
    [GET_RESERVATION_INFO]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_RESERVATION_INFO: true, // 요청 시작
      },
    }),
    [GET_RESERVATION_INFO_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_RESERVATION_INFO: false, // 요청 완료
      },
      member: action.payload.member,
      payment: action.payload.payment,
      place: action.payload.place,
    }),
    [GET_RESERVATION_INFO_ERROR]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_RESERVATION_INFO: false, // 요청 완료
      },
    }),
    [SET_RESERVATION_DATE]: (state, action) => ({
      ...state,
      reservationDate: action.payload.reservationDate,
    }),
  },
  initialState,
);

export default reservationReducer;
