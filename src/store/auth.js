// بإمكاننا استخدام createReducer بدلاً من createSlice ولكن الاقوى createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

// createSlice: هي دالة ضمن حزمة redux toolkit
// تجمع state + reducers + actions في مكان واحد
const authSlice = createSlice({
  name: "authenticated",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// من اجل استخدام actions في المكونات
export const authActions = authSlice.actions;

export default authSlice.reducer;
