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

export const getAllProducts = () => {
  const response = api.get("/api/v1/products");

  console.log(response);
  return response;
};

export const getProducts = async (
  page,
  limit,
  price,
  order,
  rating,
  filter,
  status,
  price_start,
  price_end,
  author_name
) => {
  let queryString = `/api/v1/products?page=${page}&order=${
    order || "asc"
  }&price_start=${price_start || "0"}&price_end=${price_end || "100"}`;
  if (limit) queryString += `&limit=${limit}`;
  if (price) queryString += `&price=${price}`;
  if (rating) queryString += `&rating=${rating}`;
  if (filter) queryString += `&filter=${filter}`;
  if (status) queryString += `&status=${status}`;
  if (price_start) queryString += `&price_start=${price_start}`;
  if (price_end) queryString += `&price_end=${price_end}`;
  if (author_name) queryString += `&author_name=${author_name}`;

  const response = await api.get(queryString);

  console.log("getProducts", queryString);

  return response;
};

export const getProduct = (id) => {
  const response = api.get(`/api/v1/products/${id}`);

  return response;
};

export const getSearchNavBar = (query, limit, order, price) => {
  let queryString = `/api/v1/search?query=${query}`;
  if (limit) queryString += `&limit=${limit}`;
  if (order) queryString += `&order=${order}`;
  if (price) queryString += `&price=${price}`;
  const response = api.get(queryString);

  return response;
};

export const getBestSells = () => {
  const response = api.get(`/api/v1/products_bestsellers`);
  return response;
};

export const getComingSoon = (
  page,
  limit,
  price,
  order,
  rating,
  status,
  price_start,
  price_end
) => {
  let queryString = `/api/v1/products_awaitings?page=${page}&order=${
    order || "asc"
  }&price_start=${price_start || "0"}&price_end=${price_end || "100"}`;
  if (limit) queryString += `&limit=${limit}`;
  if (price) queryString += `&price=${price}`;
  if (rating) queryString += `&rating=${rating}`;
  if (status) queryString += `&status=${status}`;
  if (price_start) queryString += `&price_start=${price_start}`;
  if (price_end) queryString += `&price_end=${price_end}`;

  const response = api.get(queryString);

  console.log("comingSoon", response);
  return response;
};

export const getProductsByCategory = (
  id,
  page,
  limit,
  price,
  order,
  status,
  price_start,
  price_end
) => {
  let queryString = `/api/v1/categories/${id}/products?page=${page}&order=${
    order || "asc"
  }&price_start=${price_start || "0"}&price_end=${price_end || "100"}`;
  if (limit) queryString += `&limit=${limit}`;
  if (price) queryString += `&price=${price}`;
  if (order) queryString += `&order=${order}`;
  if (status) queryString += `&status=${status}`;
  if (price_start) queryString += `&price_start=${price_start}`;
  if (price_end) queryString += `&price_end=${price_end}`;

  const response = api.get(queryString);

  console.log("ProductsByCategory", queryString);
  return response;
};

export const getBestsellers = (
  page,
  limit,
  price,
  order,
  rating,
  price_start,
  price_end
) => {
  let queryString = `/api/v1/products_bestsellers?page=${page}&order=${
    order || "asc"
  }&price_start=${price_start || "0"}&price_end=${price_end || "100"}`;
  if (limit) queryString += `&limit=${limit}`;
  if (price) queryString += `&price=${price}`;
  if (rating) queryString += `&rating=${rating}`;
  if (price_start) queryString += `&price_start=${price_start}`;
  if (price_end) queryString += `&price_end=${price_end}`;

  const response = api.get(queryString);

  console.log("bestsell", queryString);
  return response;
};

export const getCategoryById = (id) => {
  const response = api.get(`/api/v1/categories/${id}`);

  console.log("CategoryById", response.data);
  return response;
};

export const createUser = async (user, setError) => {
  try {
    const response = await api.post("/api/v1/users/", user);
    if (response.data.token) {
      setAuthHeader(response.data.token);
    }
    return response;
  } catch (error) {
    const emailError = "User already exists";
    if (error.response.data.errors === emailError) {
      setError("User already exists");
    } else {
      setError("The server is not responding. Please try again later.");
    }
  }
};

export const signIn = async (user, setError) => {
  try {
    const response = await api.post("/api/v1/login", user);
    if (response.data.token) {
      setAuthHeader(response.data.token);
    }
    return response;
  } catch (error) {
    return setError(error.response.data.erros);
  }
};

export const getReviewById = (id) => {
  const response = api.get(`/api/v1/products/${id}/reviews`);

  return response;
};

export const resetPassword = (user, setError) => {
  try {
    const response = api.post("/api/v1/password_reset", user);
    if (response.data) {
      return response;
    }
  } catch (error) {
    setError(error.response.data.errors);
  }
};
