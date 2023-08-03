import { instanceWithToken } from '../../api';
const prefix = '/api/v1/reservation';
import {
  ReservationAccountType,
  ReservationCardType,
  ReservationQRCodeType,
  CardValidationType,
  QRImageRequestType,
} from './types';

const Reservation = {
  // 예약페이지 접근
  async v1GetReservation(memberId: number, roomId: number) {
    try {
      const url = `${prefix}/${roomId}`;
      const result = await instanceWithToken.get(url, {
        params: {
          memberId,
        },
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 계좌이체 및 예약
  async v1ReservationAccount(memberId: number, data: ReservationAccountType) {
    try {
      const url = `${prefix}/account?memberId=${memberId}`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 은행 별 가상계좌 받아오기
  async v1GetBankNumber(bankName: string) {
    try {
      const url = `${prefix}/account/number`;
      const result = await instanceWithToken.post(url, { bankName });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 카드 결제 및 예약
  async v1ReservationCard(memberId: number, data: ReservationCardType) {
    try {
      const url = `${prefix}/card?memberId=${memberId}`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // 카드 결제 검증
  async v1CardValidation(memberId: number, data: CardValidationType) {
    try {
      const url = `${prefix}/card/validation?memberId=${memberId}`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // QR 결제
  async v1ReservationQRCode(memberId: number, data: ReservationQRCodeType) {
    try {
      const url = `${prefix}/qrcode?memberId=${memberId}`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // QR 코드 결제 페이지 가격 정보
  async v1GetQRCodeInfo(code: string) {
    try {
      const url = `${prefix}/qrcode/${code}`;
      const result = await instanceWithToken.get(url);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // QR 코드 비밀번호 인증
  async v1QRCodeValidation(code: string, password: string) {
    try {
      const url = `${prefix}/qrcode/${code}`;
      const result = await instanceWithToken.post(url, {
        qrPassword: password,
      });
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  // QR 코드 응답
  async v1GetQRCodeImage(memberId: number, data: QRImageRequestType) {
    try {
      const url = `${prefix}/qrcode/image?memberId=${memberId}`;
      const result = await instanceWithToken.post(url, data);
      return result;
    } catch (err) {
      return Promise.reject(err);
    }
  },
};

export default Reservation;
