import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchProducts } from "./operations";
// import { Product } from "@/types/Product";
import { RootState } from "../store";
import { AdditionalField } from "@/types/AdditionalField";

interface Product {
  category_id: number;
  category_name: string;
  description: string;
  fields: AdditionalField[];
  id: string;
  image: string[];
  name: string;
  price: number;
  quantity: number;
  special_price: number;
  status: string;
}

type InitialStateType = {
  products: Product[];
  loading: boolean;
};

const initialState: InitialStateType = {
  products: [],
  loading: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});

export const selectProducts = (state: RootState) => state.products;
export default productSlice.reducer;
