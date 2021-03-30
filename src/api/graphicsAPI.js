import axios from 'axios';

export default axios.create({
  baseURL: 'http://0.0.0.0:8000/user/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
