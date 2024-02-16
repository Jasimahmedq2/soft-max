import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IUser {
  isLoggedIn: boolean;
  accessToken: string | null;
  role: string | null;
  userId: string | null;
}

// Define the initial state using that type
const initialState: IUser = {
  isLoggedIn: false,
  accessToken: null,
  role: null,
  userId: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    LoginAction: (state, action) => {
      (state.isLoggedIn = true),
        (state.accessToken = action.payload.token.access),
        (state.role = action.payload.user.role),
        (state.userId = action.payload.user.id);
    },
    logOut: (state) => {
      (state.isLoggedIn = false),
        (state.accessToken = null),
        (state.role = null),
        (state.userId = null);
    },
  },
});

export const { LoginAction, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
