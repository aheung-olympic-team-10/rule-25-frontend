import styled from 'styled-components';

import { Title } from 'ui';

const Wrapper = styled.div`
  & .notificationsComponent {
    flex-direction: row;
    width: 668px;
    height: 276px;
    background-color: #ffffff;
    box-shadow: 1px 1px 1px 1px #c3c3c3;
    border-radius: 7px;
  }

  & .NotifyElement {
    margin-bottom: 10px;
    width: 668px;
    height: 92px;
    box-shadow: 0.5px 0.5px 0.5px 0.5px #c3c3c3;
    background-color: #ffffff;
    border-radius: 10px;
    line-height: 92px;
    display: flex;
    vertical-align: middle;
    align-items: center;
  }

  & .ImgPart {
    margin-top: 40px;
    margin-left: 50px;
  }

  & .contentPart {
    margin-left: 30px;
    flex-basis: 450px;
  }

  & #btnId {
    /* position: flex; */
    width: 30px;
    height: 30px;

    float: right;
  }
`;

const Notifications = () => {
  return (
    <div>
      <Title>Notifications</Title>
      <Wrapper>
        <div className="NotifyElement">
          <div className="ImgPart">
            <img className="ImgElement" src="img/profileImg.png" />
          </div>
          <div className="contentPart">
            <p className="notifyContent">
              박멋사님이 FIRE 1단계를 완료하였습니다.
            </p>
          </div>
          <div>
            <img id="btnId" src="/img/likeBtn_before.png" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Notifications;
