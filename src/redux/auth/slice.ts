import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createUser, logIn } from "@/redux/auth/operations";

interface UserState {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
}

interface IAuthState {
  authState: boolean;
  user: UserState;
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  authState: false,
  user: { first_name: null, last_name: null, email: null },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.first_name = action.payload._first_name;
        state.user.last_name = action.payload.last_name;
        state.user.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        console.error(action.payload);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.first_name = action.payload._first_name;
        state.user.last_name = action.payload.last_name;
        state.user.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        console.error(action.payload);
      });
    // .addCase(logOut.fulfilled, (state) => {
    //   state.user = { first_name: null, name: null };
    //   state.accessToken = null;
    //   state.isLoggedIn = false;
    // })
    // .addCase(logOut.rejected, (state, action) => {
    //   console.error(action.payload);
    // });
  },
});

// export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
