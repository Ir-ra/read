import axios from "axios";

const URL = "https://book-store-api-tc-5855f695cf77.herokuapp.com";

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

export const getProducts = async (page, limit, price, order, rating) => {
  let queryString = `/api/v1/products?page=${page}&order=${order || "asc"}`;
  if (limit) queryString += `&limit=${limit}`;
  if (price) queryString += `&price=${price}`;
  if (rating) queryString += `&rating=${rating}`;

  const response = await api.get(queryString);

  console.log("getProducts", queryString);

  return response;
};

export const getProduct = (id) => {
  const response = api.get(`/api/v1/products/${id}`);

  // console.log("prod", response);

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

export const getProductsByCategory = (id, page, limit, price, order) => {
  let queryString = `/api/v1/categories/${id}/products?page=${page}&order=${
    order || "asc"
  }`;
  if (limit) queryString += `&limit=${limit}`;
  if (price) queryString += `&price=${price}`;

  const response = api.get(queryString);

  console.log("ProductsByCategory", queryString);
  return response;
};

export const getCategoryById = (id) => {
  const response = api.get(`/api/v1/categories/${id}`);

  console.log("CategoryById", response.data);
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

export const getReviewById = (id) => {
  const response = api.get(`/api/v1/products/${id}/reviews`);

  return response;
};
