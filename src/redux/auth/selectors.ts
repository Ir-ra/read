import { RootState } from "@/redux/store";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;

export const selectUser = (state: RootState) => state.auth.user;
export const selectFirstName = (state: RootState) => state.auth.user.first_name;
export const selectLastName = (state: RootState) => state.auth.user.last_name;
export const selectEmail = (state: RootState) => state.auth.user.email;

export const selectAuthState = (state: RootState) => state.auth.authState;
