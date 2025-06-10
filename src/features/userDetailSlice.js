import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ create async thunk
export const createUser = createAsyncThunk(
  'createUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://68481b95ec44b9f3493fa641.mockapi.io/curd',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ slice
export const userDetail = createSlice({
  name: 'userDetail',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload); // use push correctly
        state.loading = false;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  }
});

export default userDetail.reducer;
