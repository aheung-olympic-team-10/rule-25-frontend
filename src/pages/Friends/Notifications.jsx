import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { notification } from 'apis';

import { Title } from 'ui';

import { AiOutlineHeart } from 'react-icons/ai';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NotificationCard = styled.div`
  border-radius: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 5px 5px 8px #b2b2b229;
  padding: 20px;
`;

const ProfileImage = styled.image`
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 40px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  flex-basis: 50px;
`;

const Content = styled.div`
  flex-grow: 1;
`;

export default () => {
  const [notis, setNotis] = useState([]);

  useEffect(() => {
    notification
      .get(localStorage.getItem('userId'))
      .then(({ data }) => setNotis(data));
  }, []);

  return (
    <div>
      <Title> Notifications </Title>
      <Wrapper>
        {notis.map((row) => (
          <NotificationCard>
            <ProfileImage image="https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png" />
            <Content>
              {row.user.name} 님이 '{row.content}' 를 성공하셨습니다!
            </Content>
            <AiOutlineHeart />
          </NotificationCard>
        ))}
      </Wrapper>
    </div>
  );
};
