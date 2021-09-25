import { useState, useEffect } from 'react';
import { asset } from 'apis';
import styled from 'styled-components';

import { Title } from 'ui';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const CardWrapper = styled.div`
  & .property_card {
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    width: 100%;
    height: 120px;
    box-shadow: 5px 5px 8px #b2b2b229;
    border-radius: 6px;
    opacity: 1;
  }

  & .ticker {
    font-size: 14px;
    margin-left: 18px;
    margin-top: 16px;
    width: fit-content;
    height: 20px;
    opacity: 1;
  }

  & .point {
    font-size: 14px;
    margin-left: 12px;
    margin-right: 81px;
    margin-top: 16px;
    color: red;

    opacity: 1;
  }

  & .amount {
    font-size: 26px;
    font-weight: bold;
    color: #5e5e5e;
    margin-top: 6px;
    margin-left: 18px;
    opacity: 1;
  }

  & .price {
    font-size: 14px;
    color: #a2a2a2;
    margin-left: 18px;
    margin-bottom: 20px;
    opacity: 1;
  }
`;

export default () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    asset
      .get(localStorage.getItem('userId'))
      .then(({ data }) => setAssets(data));
  }, []);

  return (
    <div>
      <Title>My Assets</Title>
      <Wrapper>
        {assets.map((data) => (
          <CardWrapper>
            <div className="property_card">
              <div className="ticker">{data.ticker}</div>
              <div className="point">{Math.round(data.profitRate)}% </div>
              <div className="amount">
                {Math.round(data.currentPrice * data.amount)}{' '}
                {data.currency === 'KRW' ? '원' : '달러'}
              </div>
              <div className="price">
                평가금액 {Math.round(data.currentPrice)}{' '}
                {data.currency === 'KRW' ? '원' : '달러'} · 보유량 {data.amount}
                주
              </div>
            </div>
          </CardWrapper>
        ))}
      </Wrapper>
    </div>
  );
};
