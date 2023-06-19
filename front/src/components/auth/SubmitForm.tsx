import React from 'react';
import '../../styles/components/auth/submitForm.scss';

interface SubmitFormProps {
  title?: string | undefined;
  children: JSX.Element;
}

const SubmitForm = ({ title, children }: SubmitFormProps) => {
  return (
    <div className="submit-container">
      <div className="submit-form">
        <div className="submit-form__title">
          <h2 className="submit-form__title--logo">{title}</h2>
        </div>
        <div className="submit-form__content">{children}</div>
      </div>
    </div>
  );
};

export default SubmitForm;
