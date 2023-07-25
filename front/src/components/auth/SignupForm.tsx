import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TextField from '../common/TextField';
import TextButton from '../common/TextButton';
import '../../styles/components/auth/signupForm.scss';
import emailSuccessIcon from '../../assets/images/emailSuccess.svg';
import emailFailIcon from '../../assets/images/emailFail.svg';
import RadioGroup from '../../components/common/RadioGroupContext';
import RadioButton from '../../components/common/RadioButton';
import { validPasswordReg } from '../../utils/func/ValidFunc';
import { validationSignup } from '../../utils/func/SingupFunc';
import { SignupRequestType } from '../../api/auth/types';
import { showToast } from '../../store/modules/common';
import { ErrorType } from './types';
// api
import Api from '../../api/auth';

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signupInfo, setSignupInfo] = useState<SignupRequestType>({
    email: '',
    nickname: '',
    password: '',
    phone: '',
    memberRole: 'USER',
  });
  const [error, setError] = useState<ErrorType>({
    passwordCheck: true,
    confirmPassword: true,
    isError: false,
    subErrorMessage: '',
    errorMessage: '',
  });
  const [password, setPassword] = useState<string>('');
  const [emailCheck, setEmailCheck] = useState<string>('before'); // before, success, fail

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupInfo({
      ...signupInfo,
      email: e.target.value,
    });
    setEmailCheck('before');
    setError({
      ...error,
      subErrorMessage: '',
      errorMessage: '',
      isError: false,
    });
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    setSignupInfo({
      ...signupInfo,
      password: e.target.value,
    });
  };

  const changeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (signupInfo.password !== e.target.value) {
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
    setPassword(e.target.value);
  };

  const changeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleError('', false);
    setSignupInfo({
      ...signupInfo,
      nickname: e.target.value,
    });
  };

  const changePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleError('', false);
    setSignupInfo({
      ...signupInfo,
      phone: e.target.value.replaceAll('-', ''),
    });
  };

  const changeRole = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupInfo({
      ...signupInfo,
      memberRole: e.currentTarget.value,
    });
  };

  const handleError = (errMsg: string, isErr: boolean) => {
    setError({
      ...error,
      errorMessage: errMsg,
      isError: isErr,
    });
  };

  const handleEmailCheck = async () => {
    await Api.v1EmailCheck({ email: signupInfo.email })
      .then((res) => {
        const { success } = res.data;
        if (!success) {
          setEmailCheck('fail');
          setError({
            ...error,
            subErrorMessage: res.data.errMsg,
          });
        } else setEmailCheck('success');
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validSignup = validationSignup(signupInfo);
    if (validSignup) {
      handleError(validSignup, true);
      return;
    } else {
      handleError('', false);
    }

    if (emailCheck !== 'success') {
      handleError('이메일 중복체크를 해주세요', true);
      return;
    }
    if (signupInfo.password !== password) {
      handleError('비밀번호를 확인해주세요', true);
      return;
    }

    await Api.v1Signup(signupInfo)
      .then((res) => {
        navigate('/');
        dispatch(showToast('회원가입에 성공하였습니다.'));
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const emailCheckBtn: { [key: string]: JSX.Element } = {
    before: (
      <TextButton type={'button'} text="중복 체크" onClick={handleEmailCheck} />
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
    <form className="signup-form" onSubmit={signup}>
      <div className="signup-form__field">
        <label htmlFor="email">이메일</label>
        <div className="email-check">
          <TextField
            id="email"
            placeholder="이메일을 입력해주세요."
            onChangeText={changeEmail}
          />
          {emailCheckBtn[emailCheck]}
        </div>
        {emailCheck === 'fail' && (
          <span className="error">{error.subErrorMessage}</span>
        )}
      </div>
      <div className="signup-form__field">
        <label htmlFor="password">비밀번호</label>
        <TextField
          id="password"
          placeholder="비밀번호를 입력해주세요"
          inputType="pw"
          textType="password"
          onChangeText={changePassword}
        />
        {!error.passwordCheck && (
          <span className="error">{error.subErrorMessage}</span>
        )}
      </div>
      <div className="signup-form__field">
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <TextField
          id="confirmPassword"
          placeholder="비밀번호를 입력해주세요"
          inputType="pw"
          textType="password"
          onChangeText={changeConfirmPassword}
        />
        {!error.confirmPassword && (
          <span className="error">{error.subErrorMessage}</span>
        )}
      </div>
      <div className="signup-form__field">
        <label htmlFor="nickName">닉네임</label>
        <TextField
          id="nickName"
          placeholder="닉네임을 입력해주세요."
          onChangeText={changeNickName}
        />
      </div>
      <div className="signup-form__field">
        <label htmlFor="phone">휴대전화번호</label>
        <TextField
          id="phone"
          placeholder="번호를 입력해주세요."
          onChangeText={changePhone}
        />
      </div>
      <div className="signup-form__field role">
        <label htmlFor="role">회원가입 권한 설정</label>
        <RadioGroup onRadioChange={changeRole}>
          <RadioButton value="USER" defaultChecked={true}>
            사용자 권한
          </RadioButton>
          <RadioButton value="HOST">사장님 권한</RadioButton>
        </RadioGroup>
      </div>
      <div className="signup-form__field btn">
        <TextButton type={'submit'} text="회원가입" />
        <div className="signup-form__field-error">
          {error.isError && <span className="error">{error.errorMessage}</span>}
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
