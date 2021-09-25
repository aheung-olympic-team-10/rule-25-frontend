import styled from 'styled-components';

import Notifications from './Notifications';
import Recommend from './Recommend';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    flex-basis: 48%;
    max-width: 48%;
  }
`;

const Main = () => {
  return (
    <>
      <Flex>
        <Notifications />
        <Recommend />
      </Flex>
    </>
  );
};

export default Main;
