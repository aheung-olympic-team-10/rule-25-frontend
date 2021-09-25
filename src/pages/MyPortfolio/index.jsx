import { useState, useEffect } from 'react';
import { user } from 'apis';
import styled from 'styled-components';

import Properties from './Properties';
import AccountBook from './AccountBook';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  & > div:first-child {
    padding-right: 40px;
    width: 900px;
  }

  & > div:last-child {
    flex-grow: 1;
  }
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 40px;
`;
const Subtext = styled.div`
  color: #a2a2a2;
  font-size: 28px;
  margin-bottom: 40px;
`;

const Col = styled.div``;

const Main = () => {
  const [fire, setFire] = useState();

  useEffect(() => {
    user
      .getFire(localStorage.getItem('userId'))
      .then(({ data }) => setFire(data));
  }, []);

  return (
    <>
      {fire && (
        <>
          <Text>
            회원님은 {fire?.remainFirePeriod.toFixed(0)}년 후,{' '}
            {2020 + Number(fire?.remainFirePeriod.toFixed(0))}
            년에 FIRE에 도달합니다.
          </Text>

          <Subtext>
            {(
              (1 - fire?.remainFirePeriod / fire?.initialFirePeriod) *
              100
            ).toFixed(2)}{' '}
            % 진전하였습니다! (총 자산{' '}
            {Math.round(fire?.totalAsset).toLocaleString()} 원)
          </Subtext>
        </>
      )}

      <Flex>
        <Col>
          <Properties />
        </Col>
        <Col>
          <AccountBook />
        </Col>
      </Flex>
    </>
  );
};

export default Main;
