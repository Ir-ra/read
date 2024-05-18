import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://book-store-api-tc-5855f695cf77.herokuapp.com";

export const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const setAuthHeader = (token: any) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (
    user: {
      first_name: string;
      last_name: string;
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("/api/v1/users/", user);
      if (response.data.token) {
        setAuthHeader(response.data.token);
      }
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.errors);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/signIn",
  async (
    user: {
      email: string;
      password: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("/api/v1/login", user);
      if (response.data.token) {
        setAuthHeader(response.data.token);
      }
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.errors);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
