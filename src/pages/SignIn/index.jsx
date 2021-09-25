import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { user } from 'apis';

import logo from './logo.png';

const Wrapper = styled.div`
  & .loginContentArea {
    text-align: center;
    margin-top: 150px;
  }

  & .RULE25logo {
    width: 120px;
    display: flex;
    text-align: center;
    margin: 20px auto;
  }

  & .loginFuncSection {
    margin: 0 auto;
    width: 600px;
    text-align: center;
  }

  & .emailInput {
    width: 500px;
    height: 40px;
    border: none;
    outline: none;
    background-color: #ffffff;
    color: #000000;
    padding: 5px;
    padding-left: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  & .emailInput::placeholder {
    color: #808080;
  }

  & .passwordInput {
    width: 500px;
    height: 40px;
    border: none;
    outline: none;
    background-color: #ffffff;
    color: #000000;
    padding: 5px;
    padding-left: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  & .passwordInput::placeholder {
    color: #808080;
  }

  & .loginBtn {
    width: 520px;
    height: 45px;
    margin-top: 30px;
    background-color: #ff615b;
    color: #ffffff;
    font-size: 15px;
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 20px;
  }

  & .gotoSignUp {
    display: flex;
    width: 30%;
    margin-left: 35%;
  }

  & .gotoSignUpMsg {
    flex: 1;
    width: 10%;
    font-size: 12px;
    /* box-sizing: border-box; */
    color: #666565;
    margin-top: 15px;
  }

  & .signupBtn {
    border: none;
    outline: none;
    background-color: transparent;
    color: #ff615b;
    font-size: 15px;
    font-weight: 600;
    flex: 1;
    width: 10%;
    /* box-sizing: border-box; */
  }
`;

const SignIn = () => {
  const history = useHistory();
  const [form, setForm] = useState({});

  const onSubmitClick = async () => {
    if (!form?.email || !form?.password) {
      alert('모든 항목을 입력해주세요');
      return;
    }

    if (form.email.indexOf('@') === -1) {
      alert('이메일 형식으로 입력해주세요');
      return;
    }

    try {
      const res = await user.login(form?.email, form?.password);

      if (res.data === 'invalid') {
        alert('이메일, 비밀번호를 다시 확인해주세요');
        return;
      }
      const { token, userId } = res.data;

      localStorage.setItem('jwt', token);
      localStorage.setItem('userId', userId);

      alert('로그인 성공하였습니다.');
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <div className="loginContentArea">
        <div className="logoSection">
          <img className="RULE25logo" src={logo} />
        </div>

        <div className="loginFuncSection">
          <input
            type="email"
            name="email"
            className="emailInput"
            placeholder="이메일 주소를 입력해주세요."
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <input
            name="password"
            type="password"
            className="passwordInput"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <button className="loginBtn" onClick={onSubmitClick}>
            로그인
          </button>
        </div>

        <div className="gotoSignUp">
          <p className="gotoSignUpMsg">RULE 25가 처음이신가요?</p>
          <button
            className="signupBtn"
            type="button"
            onClick={() => history.push('/sign-up')}
          >
            회원가입하기
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignIn;
