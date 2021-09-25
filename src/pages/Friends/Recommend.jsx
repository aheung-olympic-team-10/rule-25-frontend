import styled from 'styled-components';
import { follow } from 'apis';
import { Title } from 'ui';

const Wrapper = styled.div`
  & .profileImg {
    width: 70px;
    height: 70px;
    box-shadow: 0 0 5px #b2b2b229;
    border-radius: 35px;
    margin-bottom: 10px;
  }

  & .recommendElement {
    float: left;
    width: 100%;
    height: 300px;
    background-color: #ffffff;
    text-align: center;
    padding-top: 35px;
    border: 0;
    margin: 0;
    box-shadow: 5px 5px 8px #b2b2b229;
    border-radius: 7px;
  }

  & .userName {
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 10px;
  }

  & .introText {
    font-size: 12px;
    color: #8f8f8f;
  }

  & .followBtn {
    border: none;
    outline: none;
    padding: 5px 15px 5px 15px;
    color: #ffffff;
    background-color: rgb(253, 92, 92);
    margin-top: 15px;
    margin-bottom: 35px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const RecommendCard = ({ name, desc, onClick }) => {
  return (
    <Wrapper>
      <div className="recommendElement">
        <img
          className="profileImg"
          src="https://jejuhydrofarms.com/wp-content/uploads/2020/05/blank-profile-picture-973460_1280.png"
        />
        <div className="userName">{name}</div>
        <div className="introText">{desc}</div>

        <input
          className="followBtn"
          type="button"
          value="Follow"
          onClick={onClick}
        />
      </div>
    </Wrapper>
  );
};

const Recommend = () => {
  const onFollow = async (followingId) => {
    await follow
      .create(localStorage.getItem('userId'), followingId)
      .then(({ data }) => {
        if (data !== 'success') {
          alert('알 수 없는 이유로 팔로우 실패하였습니다.');
          return;
        }
        alert('팔로우 하였습니다!');
      });
  };

  return (
    <div>
      <Title>추천 계정</Title>
      <Grid>
        <RecommendCard
          name="조동현"
          desc="FIRE 25 입니다!!"
          onClick={() => onFollow(1)}
        />
        <RecommendCard
          name="신지애"
          desc="안녕하세요~!!"
          onClick={() => onFollow(18)}
        />
        <RecommendCard
          name="유지민"
          desc="파이어족을 향하여!"
          onClick={() => onFollow(17)}
        />
        <RecommendCard
          name="유선호"
          desc="안녕하세요 10조"
          onClick={() => onFollow(16)}
        />
      </Grid>
    </div>
  );
};

export default Recommend;
