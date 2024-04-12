import axios from "axios";
import Router from 'next/router';
// import { useSearchParams } from 'next/navigation';

const URL = "https://book-store-api-tc-5855f695cf77.herokuapp.com";
// const query = useSearchParams()

export const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getAllCategories = () => {
  const response = api.get("/api/v1/categories");

  console.log(response);
  return response;
};

export const getProducts = () => {
  const response = api.get("/api/v1/products");

  console.log("prods", response);
  return response;
};

export const getProduct = (id) => {
  const response = api.get(`/api/v1/products/${id}`);

  console.log("prod", response);
  return response;
};
// має повернути стрінг query=''
export const getSearchNavBar = (query) => {
  const response = api.get(`/api/v1/search?query=${query}`);

  console.log("prod", response);
  return response;
};

// поки що пустий масив
export const getComingSoon = () => {
  const response = api.get("/api/v1/products_awaitings");

  console.log("comingSoon", response);
  return response;
};

export const getProductsByCategory = (id) => {
  const response = api.get(`/api/v1/categories/${id}/products`);

  console.log("ProductsByCategory", response);
  return response;
};

export const getCategoryById = (id) => {
  const response = api.get(`/api/v1/categories/${id}`);

  console.log("CategoryById", response);
  return response;
};

export const createUser = async (user) => {
  try {
    const response = await api.post("/api/v1/users/", user);
    if (response.data.token) {
      setAuthHeader(response.data.token);
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const singIn = async (user) => {
  try {
    const response = await api.post("/api/v1/login", user);
    if (response.data.token) {
      setAuthHeader(response.data.token);
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};