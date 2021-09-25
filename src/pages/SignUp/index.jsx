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
    width: 600px;
    text-align: center;
    margin: 0 auto;
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

const SignUp = () => {
  const history = useHistory();
  const [form, setForm] = useState({});

  const onSubmitClick = async () => {
    const res = await user.join(
      form?.name,
      form?.email,
      form?.password,
      Number(form?.annualSaving),
      Number(form?.annualExpense),
      form?.description,
    );
    const { data } = res;

    if (data === 'already exsits') {
      alert('이미 존재하는 이메일입니다.');
      return;
    }

    if (data !== 'success') {
      alert('입력 내용을 다시 확인해주세요.');
      return;
    }

    alert('회원가입에 성공하였습니다.');
    history.push('/sign-in');

    console.log(res);
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
          <input
            name="name"
            className="passwordInput"
            placeholder="이름 / 닉네임을 입력해주세요."
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <input
            name="description"
            className="passwordInput"
            placeholder="한줄 소개를 입력해주세요."
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <input
            name="annualSaving"
            className="passwordInput"
            placeholder="연 목표 저축액을 숫자로 입력해주세요."
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <input
            name="annualExpense"
            className="passwordInput"
            placeholder="연 목표 사용액을 숫자로 입력해주세요."
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
          <button className="loginBtn" onClick={onSubmitClick}>
            회원가입
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;
