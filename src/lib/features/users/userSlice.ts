import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  userName: string;
  email: string;
  image: string;
  isLoggedIn: boolean;
}
const initialState: UserState = {
  userName: "",
  email: "",
  image: "",
  isLoggedIn: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.image = action.payload.image;
      state.isLoggedIn = true;
    },
    removeUser: (state) => {
      state.userName = "";
      state.email = "";
      state.image = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
