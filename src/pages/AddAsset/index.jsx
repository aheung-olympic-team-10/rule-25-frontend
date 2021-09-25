import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { asset } from 'apis';
import { Title } from 'ui';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  border: none;
  outline: none;
  background-color: #ffffff;
  color: #000000;
  padding: 5px;
  padding-left: 20px;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin: 0 auto;
  width: 500px;
  border: none;
  outline: none;
  background-color: #ff615b;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  flex: 1;
  padding: 10px;
  border-radius: 20px;
`;

const AddAsset = () => {
  const history = useHistory();
  const [form, setForm] = useState({});

  const onSubmit = async () => {
    const res = await asset.create(
      localStorage.getItem('userId'),
      form?.ticker,
      form?.price,
      form?.amount,
    );

    if (res.data !== 'success') {
      alert('입력값을 다시 확인해주세요.');
      return;
    }

    alert('자산이 성공적으로 추가되었습니다.');
    history.push('/my-portfolio');
  };

  return (
    <>
      <Title style={{ textAlign: 'center' }}>자산 추가</Title>
      <Flex>
        <Input
          name="ticker"
          placeholder="주식 / 암호화폐 Ticker"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <Input
          name="price"
          placeholder="매수 평균 단가"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <Input
          name="amount"
          placeholder="매수량을 입력해주세요"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <Button onClick={onSubmit}>자산 추가</Button>
      </Flex>
    </>
  );
};

export default AddAsset;
