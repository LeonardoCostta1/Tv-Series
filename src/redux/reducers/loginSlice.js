import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setLoginTrue(state) {
      state.value = true;
    },
    setLoginFalse(state) {
      state.value = false;
    }
  }
});

export const { setLoginTrue, setLoginFalse } = loginSlice.actions;
export default loginSlice.reducer;
