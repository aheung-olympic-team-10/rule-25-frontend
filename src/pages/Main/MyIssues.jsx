import { useState, useEffect } from 'react';
import { user } from 'apis';
import styled from 'styled-components';

import { Title } from 'ui';

import img1 from './issImg_food.png';
import img2 from './issImg_traffic.png';
import img3 from './issImg_bills.png';
import img4 from './issImg_property.png';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  & .cardComponent {
    display: flex;
    flex-direction: row;
    width: 322px;
    height: 126px;
    background-color: #ffffff;
    box-shadow: 1px 1px 1px 1px #c3c3c3;
    border-radius: 7px;
    align-items: flex;
  }

  & .imgPart {
    margin-top: 30px;
    margin-left: 25px;
  }
  & .issueImage {
    width: 64px;
    height: 64px;
  }

  & .contentPart {
    margin-top: 30px;
    margin-left: 15px;
    line-height: 0;
  }

  & .cardTitle {
    margin-top: 20px;
    font-size: 15px;
    color: gray;
    /* text-align: center; */
  }

  & .amountContent {
    font-size: 25px;
    color: #000000;
    font-weight: bold;
    /* text-align: center; */
  }
`;

const MyIssues = () => {
  const [issues, setIssues] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    user.getIssues(userId).then(({ data }) => setIssues(data));
  }, []);

  return (
    <div>
      <Title>My issues</Title>
      <Wrapper>
        <div className="cardComponent">
          <div className="imgPart">
            <img className="issueImage" src={img1} />
          </div>
          <div className="contentPart">
            <p className="cardTitle">이번 달 가장 많은 소비</p>
            <p className="amountContent">
              {issues?.largestExp ? issues?.largestExp?.amount : '-'} 원
            </p>
          </div>
        </div>

        <div className="cardComponent">
          <div className="imgPart">
            <img className="issueImage" src={img2} />
          </div>
          <div className="contentPart">
            <p className="cardTitle">이번 달 가장 절약한 소비</p>
            <p className="amountContent">
              {issues?.smallestExp ? issues?.smallestExp?.amount : '-'} 원
            </p>
          </div>
        </div>

        <div className="cardComponent">
          <div className="imgPart">
            <img className="issueImage" src={img3} />
          </div>
          <div className="contentPart">
            <p className="cardTitle">이번 달 가장 큰 수입</p>
            <p className="amountContent">
              {issues?.largestInc ? issues?.largestInc?.amount : '-'} 원
            </p>
          </div>
        </div>

        <div className="cardComponent">
          <div className="imgPart">
            <img className="issueImage" src={img4} />
          </div>
          <div className="contentPart">
            <p className="cardTitle">이번 달 가장 작은 수입</p>
            <p className="amountContent">
              {issues?.smallestInc ? issues?.smallestInc?.amount : '-'} 원
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default MyIssues;
