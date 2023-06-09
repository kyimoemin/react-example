import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    data: null,
    error: undefined,
    loading: false,
  },
  reducers: {
    setUser(state, { payload }) {
      state.data = payload;
      state.error = undefined;
      state.loading = false;
    },
    setUserLoading(state) {
      state.loading = true;
      state.error = undefined;
    },
    setUserError(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setUser, setUserError, setUserLoading } = user.actions;
export default user.reducer;
