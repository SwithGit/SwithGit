import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  id: string | null;
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  id: localStorage.getItem("id"),
  token: localStorage.getItem("token"),
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ id: string; token: string }>
    ) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      console.log("로그인 성공:", action.payload);

      // 로컬스토리지에 저장
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isLoggedIn", "true");
    },
    logout: (state) => {
      state.id = null;
      state.token = null;
      state.isLoggedIn = false;

      // 로컬스토리지에서 제거
      localStorage.removeItem("id");
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
