import { createSlice } from "@reduxjs/toolkit";

interface UesrsState {
  setLogin: boolean;
  information: any;
  error: string;
  load: boolean;
}

const initLogin: UesrsState = {
  setLogin: false,
  information: {},
  error: "",
  load: false
};

export const usereSlice = createSlice({
  name: "userProFile",
  initialState: initLogin,
  reducers: {
    login: (state, action) => {
      state.load = true;
    },
    seccseLogin: (state, action) => {
      state.setLogin = true;
      state.information = action.payload;
      state.load = false;
    },
    failLogin: (state, action) => {
      state.error = action.payload;
      state.load = false;
    }
  }
});

export const { login, seccseLogin, failLogin } = usereSlice.actions;

export default usereSlice.reducer;
