import axios from 'axios';

const URL = `${process.env.REACT_APP_API_HOST}/account-books`;

export default {
  get: (userId) =>
    axios({
      url: `${URL}/${userId}`,
      method: 'GET',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  create: (userId, type, category, date, content, amount) =>
    axios({
      url: `${URL}/`,
      method: 'POST',
      data: { userId, type, category, date, content, amount },
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  update: (id, type, category, date, content) =>
    axios({
      url: `${URL}/${id}`,
      method: 'PUT',
      data: { type, category, date, content },
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  delete: (id) =>
    axios({
      url: `${URL}/${id}`,
      method: 'DELETE',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
};
