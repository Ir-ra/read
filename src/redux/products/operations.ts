import { api } from "@/services/getAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await api.get('/api/v1/products');
    return response.data;
  }
);
