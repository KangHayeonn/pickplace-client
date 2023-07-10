import React from 'react';
import ReservationTemplate from '../components/reservation/ReservationTemplate';
import ReservationInfo from '../components/reservation/ReservationInfo';
import ReservationForm from '../components/reservation/ReservationForm';
import PaymentForm from '../components/reservation/PaymentForm';
import PaymentInfo from '../components/reservation/PaymentInfo';
import AgreementForm from '../components/reservation/AgreementForm';

const ReservationPage = () => {
  return (
    <ReservationTemplate>
      <ReservationInfo />
      <ReservationForm />
      <PaymentForm />
      <PaymentInfo />
      <AgreementForm />
    </ReservationTemplate>
  );
};

export default ReservationPage;
