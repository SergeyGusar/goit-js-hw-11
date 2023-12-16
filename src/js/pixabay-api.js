import axios from 'axios';

// async function getGallery(page = 1) {
//     const BASE_URL = 'https://pixabay.com/api/';
//     const API_KEY = '41108429-d1297b363185a3a0442dc8f79';
//     const q = localStorage.getItem('key');
//     const image_type = 'photo';
//     const orientation = 'horizontal';
//     const safesearch = 'true';
//     const per_page = 40;
   
    
//     const queryParams = new URLSearchParams({
//       key: API_KEY,
//       q,
//       image_type,
//       page,
//       per_page,
//       orientation,
//       safesearch,
//     });
//     try {
//       const res = await axios.get(`${BASE_URL}?${queryParams}`);
//       return await res.data;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
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