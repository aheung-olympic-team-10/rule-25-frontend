import axios from 'axios';

const URL = `${process.env.REACT_APP_API_HOST}/assets`;

export default {
  create: (userId, ticker, price, amount) =>
    axios({
      url: `${URL}/`,
      method: 'POST',
      data: { userId, ticker, price, amount },
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  update: (id, ticker, price, amount) =>
    axios({
      url: `${URL}/${id}`,
      method: 'PUT',
      data: { ticker, price, amount },
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  delete: (id) =>
    axios({
      url: `${URL}/${id}`,
      method: 'DELETE',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
};
