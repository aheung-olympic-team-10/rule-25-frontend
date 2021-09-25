import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Title } from 'ui';
import styled from 'styled-components';
import accountBook from 'apis/accountBook';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 0 auto;
  width: 500px;
  height: 40px;
  border: none;
  outline: none;
  background-color: #ffffff;
  color: #000000;
  padding: 5px;
  padding-left: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  margin: 0 auto;
  width: 500px;
  height: 40px;
  border: none;
  outline: none;
  background-color: #ffffff;
  color: #000000;
  padding: 5px;
  padding-left: 20px;
  border-radius: 10px;
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

const AddAccountBook = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    type: 'income',
  });

  const onSubmit = async () => {
    const res = await accountBook.create(
      localStorage.getItem('userId'),
      form?.type,
      'no',
      new Date(),
      form?.content,
      form?.amount,
    );

    if (res.data !== 'success') {
      alert('입력값을 다시 확인해주세요.');
      return;
    }

    alert('기록이 성공적으로 추가되었습니다.');
    history.push('/my-portfolio');
  };

  return (
    <>
      <Title style={{ textAlign: 'center' }}>수입/지출 추가</Title>
      <Flex>
        <div style={{ textAlign: 'center' }}>
          <Select onChange={(e) => setForm({ ...form, type: e.target.value })}>
            <option value="income">수입</option>
            <option value="expenditure">지출</option>
          </Select>
        </div>
        <Input
          name="content"
          placeholder="수입 혹은 지출의 내용"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <Input
          name="amount"
          placeholder="금액"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <Button onClick={onSubmit}>추가</Button>
      </Flex>
    </>
  );
};

export default AddAccountBook;
