import { useState, useEffect } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { accountBook } from 'apis';
import styled from 'styled-components';

import { Title } from 'ui';

const Wrapper = styled.div`
  & .date {
    font-size: 18px;
    height: 27px;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
  }

  & .alarm {
    font-size: 14px;
    height: 20px;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
  }

  & .header_expense {
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    flex-wrap: wrap;
    height: 27px;
    width: 484px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #bcbcbc;
  }

  & .row {
    display: flex;
    margin-bottom: 10px;
    width: 100%;
  }

  & .body_expense {
    display: flex;
    flex-wrap: wrap;
    width: 484px;
  }

  & .detail_date {
    align-items: center;
    height: 27px;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
  }

  & .content {
    margin-left: 24px;
    align-items: center;
    height: 27px;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
    flex-grow: 1;
  }

  .profit {
    margin-left: 193px;
    margin-right: 18;
    align-items: center;
    height: 27px;
    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
    color: blue;
  }
`;

export default () => {
  const [accountBooks, setAccountBooks] = useState([]);

  useEffect(() => {
    accountBook
      .get(localStorage.getItem('userId'))
      .then(({ data }) => _.sortBy(setAccountBooks(data), 'id').reverse());
  }, []);

  return (
    <div>
      <Title> Account Book </Title>
      <Wrapper>
        <div className="header_expense">
          <div className="date">2021년 9월</div>
        </div>
        {accountBooks.map((row) => (
          <div className="row">
            <div key={row} className="body_expense">
              <div className="detail_date">
                {moment(row.date).format('YYYY.MM.DD')}
              </div>
              <div className="content">{row.content}</div>
              <div className="profit">
                {row.type === 'expenditure' ? '-' : '+'}{' '}
                {row.amount.toLocaleString()} 원
              </div>
            </div>
          </div>
        ))}
      </Wrapper>
    </div>
  );
};
