import axios from 'axios';


  const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41108429-d1297b363185a3a0442dc8f79';

export function getPhotos(q, page) {
  return axios.get(`${BASE_URL}`, {
    params: {
      q,
      key: API_KEY,
      page,
      per_page: 40,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}