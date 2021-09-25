import axios from 'axios';

const URL = `${process.env.REACT_APP_API_HOST}/follows`;

export default {
  create: (followerId, followingId) =>
    axios({
      url: `${URL}/`,
      method: 'POST',
      data: { followerId, followingId },
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  delete: (id) =>
    axios({
      url: `${URL}/${id}`,
      method: 'DELETE',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
};
