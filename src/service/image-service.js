import axios from 'axios';

const API_KEY = '34936620-e9065520b73f9ad666c5d9e82';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?key=${API_KEY}&q=${query}&page=${page}`);

  return data;
};