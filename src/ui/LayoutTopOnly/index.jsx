import { useState, useEffect } from 'react';
import { user } from 'apis';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

const TopNav = styled.nav`
  z-index: 1000;
  position: fixed;
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  background-color: white;
  width: 100%;
  height: 74px;
  opacity: 1;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 32px;
  color: #ff615b;
  margin-left: 28px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  cursor: pointer;
`;

const Login = styled.a`
  font-size: 18px;
  color: black;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
`;

const SignUp = styled.a`
  font-size: 18px;
  color: #ff615b;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 24px;
  margin-right: 60px;
  cursor: pointer;
`;

const Children = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 998;
  overflow: scroll;
`;

const LayoutTopOnly = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const [profile, setProfile] = useState({});

  console.log(profile);

  useEffect(() => {
    if (location.pathname === '/sign-in' || location.pathname === '/sign-up') {
      console.log('?');
    } else if (!localStorage.getItem('jwt')) {
      console.log('!');
      history.push('/sign-in');
    } else {
      user
        .findOne(localStorage.getItem('userId'))
        .then(({ data }) => setProfile(data));
    }
  }, [location]);

  return (
    <>
      <TopNav>
        <Logo onClick={() => history.push('/')}>RULE 25</Logo>
        <Login onClick={() => history.push('/sign-in')}>LOGIN</Login>
        <SignUp onClick={() => history.push('/sign-up')}>SIGN UP</SignUp>
      </TopNav>

      <Children>{children} </Children>
    </>
  );
};

export default LayoutTopOnly;
