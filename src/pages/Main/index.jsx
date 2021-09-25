import { useState, useEffect } from 'react';
import { user } from 'apis';
import styled from 'styled-components';

import MyIssues from './MyIssues';

import image from './main-ill.svg';

const Text = styled.div`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
`;

const Subtext = styled.div`
  color: #a2a2a2;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;

  & > span {
    color: #ff615b;
  }
`;

const ImageWrapper = styled.div`
  margin: 50px 0;
  text-align: center;
`;

const Image = styled.img`
  max-width: 80%;
  margin: 0 auto;
`;

const Main = () => {
  const [fire, setFire] = useState();

  useEffect(() => {
    user
      .getFire(localStorage.getItem('userId'))
      .then(({ data }) => setFire(data));
  }, []);
  return (
    <>
      <Text>
        회원님은 {fire?.remainFirePeriod.toFixed(0)}년 후,{' '}
        {2020 + Number(fire?.remainFirePeriod.toFixed(0))}
        년에 FIRE에 도달합니다 🔥
      </Text>

      <Subtext>
        친구 중 FIRE까지 <span>2등</span>으로 달리고 있어요!
      </Subtext>

      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>

      <MyIssues />
    </>
  );
};

export default Main;
