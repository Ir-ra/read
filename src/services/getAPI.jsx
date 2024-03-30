import axios from 'axios';
// import { useSearchParams } from 'next/navigation';

const URL = 'https://book-store-api-tc-5855f695cf77.herokuapp.com';
// const query = useSearchParams()

export const api = axios.create({baseURL: URL})
export const getAllCategories = () => {
  const response = api.get('/api/v1/categories');

  console.log(response);
  return response;
}


export const getProducts = () => {
  const response = api.get('/api/v1/products');

  console.log('prods', response);
  return response;
}

export const getProduct = (id) => {
  const response = api.get(`/api/v1/products/${id}`);

  return response;
}
// має повернути стрінг query=''
export const getSearchNavBar = (query) => {
  const response = api.get(`/api/v1/search?query=${query}`);

  console.log('prod', response);
  return response;
}

// поки що пустий масив
export const getComingSoon = () => {
  const response = api.get('/api/v1/products_awaitings');

  console.log('comingSoon', response);
  return response;
}

export const getProductsByCategory = (id) => {
  const response = api.get(`/api/v1/categories/${id}/products`);

  console.log('ProductsByCategory', response);
  return response;
}


export const getCategoryById = (id) => {
  const response = api.get(`/api/v1/categories/${id}`);

  console.log('CategoryById', response);
  return response;
}

export const getReviewById = (id) => {
  const response = api.get(`/api/v1/products/${id}/reviews`);

  return response;
}