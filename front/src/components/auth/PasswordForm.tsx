import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../common/TextField';
import TextButton from '../common/TextButton';
import emailSuccessIcon from '../../assets/images/emailSuccess.svg';
import emailFailIcon from '../../assets/images/emailFail.svg';
import '../../styles/components/auth/passwordForm.scss';
import { validPasswordReg } from '../../utils/func/ValidFunc';
import { ErrorType } from './types';
import { isShowError } from '../common/ToastBox';
// api
import Api from '../../api/auth';

const PasswordForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newConfirmPassword, setNewConfirmPassword] = useState<string>('');
  const [error, setError] = useState<ErrorType>({
    passwordCheck: true,
    confirmPassword: true,
    isError: false,
    subErrorMessage: '',
    errorMessage: '',
  });
  const [emailCodeCheck, setEmailCodeCheck] = useState<string>('before');
  const [emailCode, setEmailCode] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const changeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validPasswordReg(e.target.value)) {
      setError({
        ...error,
        subErrorMessage:
          '영문, 숫자, 특수문자를 조합하여 8-20자리로 입력해 주세요',
        passwordCheck: false,
        errorMessage: '',
        isError: false,
      });
    } else {
      setError({
        ...error,
        subErrorMessage: '',
        passwordCheck: false,
        errorMessage: '',
        isError: false,
      });
    }
    setNewPassword(e.target.value);
  };

  const changeNewConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (newPassword !== e.target.value) {
      setError({
        ...error,
        subErrorMessage: '비밀번호가 일치하지 않습니다',
        confirmPassword: false,
        errorMessage: '',
        isError: false,
      });
    } else {
      setError({
        ...error,
        subErrorMessage: '',
        confirmPassword: true,
        errorMessage: '',
        isError: false,
      });
    }
    setNewConfirmPassword(e.target.value);
  };

  const changePwd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailCodeCheck !== 'success') {
      handleError('이메일 인증을 해주세요', true);
      return;
    }
    if (newPassword !== newConfirmPassword) {
      handleError('비밀번호를 확인해주세요', true);
      return;
    }

    Api.v1UpdatePassword(email, newPassword).then((res) => {
      if (res.data.code === 200) {
        isShowError('비밀번호가 변경되었습니다.');
        navigate(-1);
      } else {
        isShowError('비밀번호 변경에 실패하였습니다.');
      }
    });
  };

  const handleError = (errMsg: string, isErr: boolean) => {
    setError({
      ...error,
      errorMessage: errMsg,
      isError: isErr,
    });
  };

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError({
      ...error,
      subErrorMessage: '',
      errorMessage: '',
      isError: false,
    });
  };

  const changeEmailCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailCode(e.target.value);
    setError({
      ...error,
      subErrorMessage: '',
      errorMessage: '',
      isError: false,
    });
    setEmailCodeCheck('before');
  };

  const handleEmailCodeCheck = () => {
    if (code === emailCode) {
      setEmailCodeCheck('success');
    } else {
      setEmailCodeCheck('fail');
      setError({
        ...error,
        subErrorMessage: '잘못된 인증 코드입니다',
      });
    }
  };

  const sendEmailCode = () => {
    Api.v1EmailPwdValidation(email).then((res) => {
      if (res.data.code === 200) {
        const { code } = res.data.data;
        setCode(code);
        isShowError('인증 코드를 발송했습니다.');
      } else {
        isShowError('유효하지 않은 이메일입니다.');
      }
    });
  };

  const emailCodeCheckBtn: { [key: string]: JSX.Element } = {
    before: (
      <TextButton type={'button'} text="확인" onClick={handleEmailCodeCheck} />
    ),
    success: (
      <span className="email-check__btn">
        <img
          src={emailSuccessIcon}
          width={20}
          height={20}
          alt="Email Check Success Icon"
        />
      </span>
    ),
    fail: (
      <span className="email-check__btn">
        <img
          src={emailFailIcon}
          width={18}
          height={18}
          alt="Email Check Fail Icon"
        />
      </span>
    ),
  };

  return (
    <form className="pwd-form" onSubmit={changePwd}>
      <div className="pwd-form__field">
        <label htmlFor="email">이메일</label>
        <div className="email-check">
          <TextField
            id="email"
            placeholder="이메일을 입력해주세요."
            onChangeText={changeEmail}
          />
          <TextButton
            type={'button'}
            text="코드 발송"
            onClick={sendEmailCode}
          />
        </div>
      </div>
      <div className="pwd-form__field">
        <label htmlFor="emailCode">이메일 인증 코드</label>
        <div className="email-check">
          <TextField
            id="emailCode"
            placeholder="인증 코드를 입력해주세요."
            onChangeText={changeEmailCode}
          />
          {emailCodeCheckBtn[emailCodeCheck]}
        </div>
        {emailCodeCheck === 'fail' && (
          <span className="error">{error.subErrorMessage}</span>
        )}
      </div>
      <div className="pwd-form__field">
        <label htmlFor="newPassword">신규 비밀번호</label>
        <TextField
          id="newPassword"
          placeholder="비밀번호를 입력해주세요"
          inputType="pw"
          textType="password"
          onChangeText={changeNewPassword}
        />
        {!error.passwordCheck && (
          <div className="error">{error.subErrorMessage}</div>
        )}
      </div>
      <div className="pwd-form__field">
        <label htmlFor="newConfirmPassword">신규 비밀번호 확인</label>
        <TextField
          id="newConfirmPassword"
          placeholder="비밀번호를 입력해주세요"
          inputType="pw"
          textType="password"
          onChangeText={changeNewConfirmPassword}
        />
        {!error.confirmPassword && (
          <div className="error">{error.subErrorMessage}</div>
        )}
      </div>
      <div className="pwd-form__field btn">
        <TextButton type={'submit'} text="변경하기" />
      </div>
      {error.isError && <div className="error">{error.errorMessage}</div>}
    </form>
  );
};

export default PasswordForm;
