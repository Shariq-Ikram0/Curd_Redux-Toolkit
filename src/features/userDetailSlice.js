import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ create useres using async thunk (POST)
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

    // ✅ Read users using async thunk (GET)
export const readUser = createAsyncThunk("readUser", async (_,{rejectWithValue})=>{
       try {
         const response =await axios.get('https://68481b95ec44b9f3493fa641.mockapi.io/curd')
        return response.data;
       } catch (error) {
         return rejectWithValue(error.response?.data || error.message);
       }
})    


// ✅ Delete users using async thunk (DELETE)
export const deleteUser = createAsyncThunk("deleteUser", async (id,{rejectWithValue})=>{
       try {
         const response =await axios.delete(`https://68481b95ec44b9f3493fa641.mockapi.io/curd/${id}`)
        return response.data;
       } catch (error) {
         return rejectWithValue(error.response?.data || error.message);
       }
})    

// ✅ Update users using async thunk (Update)
export const userUpdate = createAsyncThunk(
  'userUpdate',
  async (data, { rejectWithValue }) => {
    console.log("checkupdate",data);
    
    try {
      const response = await axios.put(
        `https://68481b95ec44b9f3493fa641.mockapi.io/curd/${data.id}`,
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
    error: null,
    searchData : []
  },
  reducers: {
    searchUser : (state,action)=>{
          state.searchData = action.payload
    } 
  },
  
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
      })
       ///////////Read start here
      .addCase(readUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(readUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(readUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      })
       ///////////deleteUser start here
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const {id} = action.payload
        if(id){
          state.users = state.users.filter((ele)=>ele.id !== id) 
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      })
           ///////////Update start here
      .addCase(userUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(userUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele)=>
        ele.id === action.payload.id ? action.payload : ele)
      })
      .addCase(userUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      })
  }
});

export default userDetail.reducer;
export const {searchUser} = userDetail.actions
