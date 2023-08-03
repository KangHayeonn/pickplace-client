import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/modules';
import { increase } from '../store/modules/sample';
import Sample from '../api/sample';
import CheckBox from '../components/common/CheckBox';
import DropDown from '../components/common/DropDown';
import NumberForm from '../components/common/NumberForm';
import SearchForm from '../components/common/SearchForm';
import TextButton from '../components/common/TextButton';
import TextField from '../components/common/TextField';
import ToastBox from '../components/common/ToastBox';
import RadioGroup from '../components/common/RadioGroupContext';
import RadioButton from '../components/common/RadioButton';
import Calendar from '../components/common/Calendar';
import SelectBox from '../components/common/SelectBox';
// api
import Api from '../api/reservation';
// modal
import useModals from '../components/common/modal/UseModals';
import ReservationInfoModal from '../components/reservation/modal/ReservationInfoModal';
import ReservationResultModal from '../components/reservation/modal/ReservationResultModal';
import QRCodeModal from '../components/reservation/modal/QRCodeModal';
import PaymentModal from '../components/reservation/modal/PaymentModal';
import CardValidationModal from '../components/reservation/modal/CardValidationModal';
import AccountModal from '../components/reservation/modal/AccountModal';

const SamplePage = () => {
  const navigate = useNavigate();
  const count = useSelector((state: RootState) => state.sample.count);
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>('');
  const [isShowToast, setIsShowToast] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  // const [count, setCount] = useState(0);

  const [date, setDate] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<Date | null>(null);

  const onIncrease = () => {
    dispatch(increase());
    // setCount(count+1);
  };

  const onClickEvent = () => {
    navigate('/');
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    Sample.getSampleData()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }, []);

  const [value, setValue] = useState('radio');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const { openModal } = useModals();

  const handleClick = () => {
    openModal(ReservationInfoModal, {
      onSubmit: async () => {
        // TODO : API Logic
        handleClick2();
      },
    });
  };

  const handleClick2 = () => {
    openModal(ReservationResultModal, {
      onSubmit: async () => {
        // TODO : API Logic
        handleClick3();
      },
    });
  };

  const handleClick3 = () => {
    openModal(QRCodeModal, {
      onSubmit: async () => {
        // TODO : API Logic
        handleClick4();
      },
    });
  };

  const handleClick4 = () => {
    openModal(PaymentModal, {
      onSubmit: async () => {
        // TODO : API Logic
        handleClick5();
      },
    });
  };

  const handleClick5 = () => {
    openModal(CardValidationModal, {
      onSubmit: async () => {
        // TODO : API Logic
        handleClick6();
      },
    });
  };

  const handleClick6 = () => {
    openModal(AccountModal, {
      onSubmit: async () => {
        // TODO : API Logic
      },
    });
  };

  // 예약 결제 관련 테스트
  // 은행 별 가상 계좌 받아오기
  const getBankNumber = (bankName: string) => {
    Api.v1GetBankNumber(bankName).then((res) => {
      console.log(
        '@@ 은행별 가상 계좌 받아오기 : ' + JSON.stringify(res.data.data),
      );
    });
  };

  // 예약페이지 접근
  const getReservation = (memberId: number, roomId: number) => {
    // memberId: 1, roomId: 12 (o), 1(x) -> 내부분
    Api.v1GetReservation(1, 123).then((res) => {
      console.log('@@예약페이지 접근 :' + JSON.stringify(res));
    });
  };

  // 카드 결제 검증
  const cardValidation = () => {
    Api.v1CardValidation(1, { cardNum: '1234432112344321', cvc: '123' }).then(
      (res) => {
        console.log('@@ 카드 결제 검증 : ' + JSON.stringify(res.data));
      },
    );
  };

  // 카드 결제 및 예약
  const cardReservation = () => {
    Api.v1ReservationCard(1, {
      roomId: 1,
      checkInTime: '2023년 08월 03일 15:00',
      checkOutTime: '2023년 08월 04일 10:00',
      cardNum: '1234432112344321',
      cvc: '123',
      cardPassword: 'pickplace1!',
    });
  };

  // 계좌이체 및 예약
  const accountReservation = () => {
    Api.v1ReservationAccount(1, {
      roomId: 1,
      checkInTime: '2023년 08월 03일 15:00',
      checkOutTime: '2023년 08월 04일 10:00',
      bankName: '국민은행',
      bankNum: '1020315-12108542',
      accountPassword: 'pickplace1!',
    });
  };

  const [qrUrl, setQRUrl] = useState<string>('');
  // QR 코드 이미지 응답
  const qrImageRequest = () => {
    Api.v1GetQRCodeImage(1, { height: 300, width: 300, roomPrice: 50000 }).then(
      (res) => {
        console.log('@@QR 코드 이미지 응답 : ' + res.data.data);
        setQRUrl(`data:image/png;base64,${res.data.data.qrImage}`);
      },
    );
  };

  // QR 코드 비밀번호 인증
  const qrPasswordValidation = () => {
    Api.v1QRCodeValidation(
      '02d3bd33-02df-4156-b811-ccc0be188d30',
      'pickplace1!',
    ).then((res) =>
      console.log('@@ qr 비밀번호 인증 : ' + JSON.stringify(res.data.data)),
    );
  };

  // QR 결제 & 예약
  const qrReservation = () => {
    Api.v1ReservationQRCode(1, {
      roomId: 19,
      checkInTime: '2023년 08월 03일 15:00',
      checkOutTime: '2023년 08월 04일 10:00',
      qrPaymentCode: '02d3bd33-02df-4156-b811-ccc0be188d30',
    });
  };

  const onClickReservation = () => {
    getReservation(1, 1);
  };

  return (
    <div>
      {/*<h1>Sample Page</h1>
      <h2>{count}</h2>
      <button onClick={onIncrease}>증가</button>
      <CheckBox text="숙소 이용 및 취소/환불 규정 동의 (필수)" />
      <div style={{ width: '300px' }}>
        <DropDown />
      </div>
      <NumberForm min={0} max={10} />
      <div style={{ width: '300px' }}>
        <SearchForm search={search} onChangeSearch={onChangeSearch} />
      </div>
      <TextButton text="로그인" onClick={onClickEvent} />
      <TextButton
        text="로그아웃"
        onClick={onClickEvent}
        classType="secondary short"
      />
      <TextButton
        text="동의 후 결제"
        onClick={onClickEvent}
        classType="secondary long"
      />
      <div style={{ width: '200px' }}>
        <TextField
          placeholder="test"
          message={message}
          onChangeText={onChangeMessage}
        />
      </div>
      {isShowToast && <ToastBox />}
      <RadioGroup onRadioChange={handleChange}>
        <RadioButton value="radio">라디오</RadioButton>
        <RadioButton value="button">버튼</RadioButton>
        <RadioButton value="test">예시</RadioButton>
      </RadioGroup>
      <Calendar calendarType="time" />
      <Calendar calendarType="date" />
      <Calendar calendarType="range" />
      <SelectBox />*/}
      <h3>예약 & 결제 테스트</h3>
      <button onClick={onClickReservation}>api 호출</button>
      <div
        style={{
          width: '300px',
          height: '300px',
          border: '1px solid #000',
          margin: '10rem',
        }}
      >
        <img src={qrUrl} alt="" />
      </div>
      <button onClick={handleClick}>모달 열기</button>
    </div>
  );
};

export default SamplePage;
