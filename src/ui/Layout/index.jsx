import { useState, useEffect } from 'react';
import { user } from 'apis';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

import { AiFillHome, AiOutlineStock } from 'react-icons/ai';
import { BsPersonFill, BsFillPeopleFill } from 'react-icons/bs';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';

import logo from './logo.png';

const SideBar = styled.nav`
  z-index: 999;
  float: left;
  width: 200px;
  height: 100%;
  background-color: #ffffff;
  text-align: center;
  padding-top: 109px;
  border: 0;
  position: fixed;

  .userName {
    font-size: 24px;
    font-weight: bold;
    color: #000000;
  }

  .rmndPeriod {
    font-size: 12px;
    color: #8f8f8f;
  }

  .followInfoArea {
    width: 90%;
    display: flex;
  }

  .followerCnt {
    flex: 1;
    width: 30%;
    font-weight: bold;
    box-sizing: border-box;
  }

  .followerText {
    flex: 1;
    color: #8f8f8f;
    font-size: 12px;
    margin: 17px 0px;
    width: 30%;
    box-sizing: border-box;
  }

  .followingCnt {
    flex: 1;
    width: 30%;
    font-weight: bold;
    box-sizing: border-box;
  }

  .followingText {
    flex: 1;
    width: 30%;
    margin: 17px 0px;
    font-size: 12px;
    color: #8f8f8f;
    box-sizing: border-box;
  }

  .sideSubMenuBar {
    text-align: left;
    margin-top: 30px;
  }

  .submenuElement {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 5px 5px 5px 15px;
  }

  .submenuIcon {
    margin-top: 10px;
    flex-basis: 5px;
    height: 20px;
    z-index: 2;
  }

  .submenuText {
    margin-top: 3px;
    margin-left: 20px;
    color: #6b6b6b;
    font-weight: 500;
    z-index: 2;
  }

  .submenuElement:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 5px solid rgb(253, 108, 108);
    color: rgb(253, 108, 108);
    transition: color 0.3s;
    z-index: 1;
    cursor: pointer;
  }

  .submenuText:hover * {
    color: rgb(253, 108, 108);
  }
`;

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

const Logo = styled.img`
  height: 30px;
  font-size: 32px;
  color: #ff615b;
  margin-left: 28px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
  cursor: pointer;
`;

const Children = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 998;
  padding-left: 230px;
  padding-right: 30px;
  padding-top: 134px;
  overflow: scroll;
`;

const Layout = ({ children }) => {
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
        <Logo onClick={() => history.push('/')} src={logo} />
      </TopNav>
      <SideBar>
        <div className="personalInfoArea">
          <div
            className="sideProfileImg"
            style={{
              backgroundImage: `url(${'https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png'})`,
              width: 100,
              height: 100,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              margin: '20px auto',
              borderRadius: 50,
            }}
          />
          <div className="userName">{profile.name || '로딩중'}</div>
          <div className="rmndPeriod">{profile.description || '-'}</div>
        </div>

        <div className="followInfoArea">
          <p className="followerCnt">{profile?.followerCount}</p>
          <p className="followerText">follower</p>

          <p className="followingCnt">{profile?.followingCount}</p>
          <p className="followingText">following</p>
        </div>

        <div className="sideSubMenuBar">
          <div className="submenuElement" onClick={() => history.push('/')}>
            <AiFillHome />
            <div className="submenuText">메인</div>
          </div>

          <div
            className="submenuElement"
            onClick={() => history.push('/my-portfolio')}
          >
            <BsPersonFill />
            <div className="submenuText">내 자산</div>
          </div>

          <div
            className="submenuElement"
            onClick={() => history.push('/add-asset')}
          >
            <AiOutlineStock />
            <div className="submenuText">자산 추가</div>
          </div>

          <div
            className="submenuElement"
            onClick={() => history.push('/add-account-book')}
          >
            <RiMoneyDollarBoxLine />
            <div className="submenuText">수입/지출 추가</div>
          </div>

          <div
            className="submenuElement"
            onClick={() => history.push('/friends')}
          >
            <BsFillPeopleFill />
            <div className="submenuText">둘러보기</div>
          </div>
        </div>
      </SideBar>

      <Children>{children} </Children>
    </>
  );
};

export default Layout;
