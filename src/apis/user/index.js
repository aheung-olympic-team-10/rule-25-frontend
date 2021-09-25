import axios from 'axios';

const URL = `${process.env.REACT_APP_API_HOST}/users`;

export default {
  join: (name, email, password, annualSaving, annualExpense, description) =>
    axios({
      url: `${URL}/`,
      method: 'POST',
      data: { name, email, password, annualSaving, annualExpense, description },
    }),
  login: (email, password) =>
    axios({
      url: `${URL}/auth`,
      method: 'POST',
      data: { email, password },
    }),
  findOne: (id) =>
    axios({
      url: `${URL}/${id}`,
      method: 'GET',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  getFollowers: (id) =>
    axios({
      url: `${URL}/${id}/followers`,
      method: 'GET',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  getFollowings: (id) =>
    axios({
      url: `${URL}/${id}/followings`,
      method: 'GET',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  getFire: (id) =>
    axios({
      url: `${URL}/${id}/fire`,
      method: 'GET',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  getIssues: (id) =>
    axios({
      url: `${URL}/${id}/issues`,
      method: 'GET',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  search: (keyword) =>
    axios({
      url: `${URL}/search/${keyword}`,
      method: 'GET',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
};
