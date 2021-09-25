import axios from 'axios';

const URL = `${process.env.REACT_APP_API_HOST}/notifications`;

export default {
  get: (userId) =>
    axios({
      url: `${URL}/${userId}`,
      method: 'GET',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
};
