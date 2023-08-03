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

interface agreementType {
  agreement: Array<boolean>;
}

interface paymentType {
  paymentType: string;
}

interface qrPaymentCodeType {
  qrPaymentCode: string;
}

interface paymentAccountType {
  paymentAccountType: string;
}

interface BankType {
  bankNum: string;
}

interface CardType {
  card: {
    cardNum: string;
    cvc: string;
  };
}

interface PlaceType {
  placeId: number;
}

interface RoomType {
  roomId: number;
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

export const SET_AGREEMENT = 'reservation/SET_AGREEMENT' as const;

export const SET_PAYMENT_TYPE = 'reservation/SET_PAYMENT_TYPE' as const;

export const SET_QRCODE = 'reservation/SET_QRCODE' as const;

export const SET_ACCOUNT = 'reservation/SET_ACCOUNT' as const;

export const SET_BANK = 'reservation/SET_BANK' as const;

export const SET_CARD = 'reservation/SET_CARD' as const;

export const SET_PLACE_ID = 'reservation/SET_PLACE_ID' as const;

export const SET_ROOM_ID = 'reservation/SET_ROOM_ID' as const;

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
        payload: response.data.data,
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

export const setReservationDate = (reservationDate: reservationDateType) => ({
  type: SET_RESERVATION_DATE,
  payload: reservationDate,
});

export const setAgreement = (agreement: agreementType) => ({
  type: SET_AGREEMENT,
  payload: agreement,
});

export const setPaymentType = (paymentType: paymentType) => ({
  type: SET_PAYMENT_TYPE,
  payload: paymentType,
});

export const setQRCode = (qrPaymentCode: qrPaymentCodeType) => ({
  type: SET_QRCODE,
  payload: qrPaymentCode,
});

export const setAccount = (paymentAccountType: paymentAccountType) => ({
  type: SET_ACCOUNT,
  payload: paymentAccountType,
});

export const setBank = (bankNum: BankType) => ({
  type: SET_BANK,
  payload: bankNum,
});

export const setCard = (card: CardType) => ({
  type: SET_CARD,
  payload: card,
});

export const setPlaceId = (placeId: PlaceType) => ({
  type: SET_PLACE_ID,
  payload: placeId,
});

export const setRoomId = (roomId: RoomType) => ({
  type: SET_ROOM_ID,
  payload: roomId,
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
  agreement: [false, false, false, false],
  paymentType: '',
  qrPaymentCode: '',
  paymentAccountType: '',
  bankNum: '',
  card: {
    cardNum: '',
    cvc: '',
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
      reservationDate: {
        ...action.payload.reservationDate,
      },
    }),
    [SET_AGREEMENT]: (state, action) => ({
      ...state,
      agreement: action.payload.agreement,
    }),
    [SET_PAYMENT_TYPE]: (state, action) => ({
      ...state,
      paymentType: action.payload.paymentType,
    }),
    [SET_QRCODE]: (state, action) => ({
      ...state,
      qrPaymentCode: action.payload.qrPaymentCode,
    }),
    [SET_ACCOUNT]: (state, action) => ({
      ...state,
      paymentAccountType: action.payload.paymentAccountType,
    }),
    [SET_CARD]: (state, action) => ({
      ...state,
      card: action.payload.card,
    }),
    [SET_BANK]: (state, action) => ({
      ...state,
      bankNum: action.payload.bankNum,
    }),
    [SET_PLACE_ID]: (state, action) => ({
      ...state,
      placeId: action.payload.placeId,
    }),
    [SET_ROOM_ID]: (state, action) => ({
      ...state,
      roomId: action.payload.roomId,
    }),
  },
  initialState,
);

export default reservationReducer;
