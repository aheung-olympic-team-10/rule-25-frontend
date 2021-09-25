import axios from 'axios';

const URL = `${process.env.REACT_APP_API_HOST}/notification-likes`;

export default {
  create: (notificationId, likeUserId) =>
    axios({
      url: `${URL}/`,
      method: 'POST',
      data: { notificationId, likeUserId },
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
  delete: (id) =>
    axios({
      url: `${URL}/${id}`,
      method: 'DELETE',
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    }),
};
