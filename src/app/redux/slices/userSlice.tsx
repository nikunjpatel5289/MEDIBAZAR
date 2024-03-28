import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: [],
  user: [],
  error: null,
};

export const userRegister = createAsyncThunk(
  "userRegister",
  async (val: any) => {
    try {
      const createUser = await axios.post("http://127.0.0.1:3000/user", val);
      return createUser.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }
);

// export const userLogin = createAsyncThunk("userLogin", async (val) => {
//   try {
//     const existingUser = await axios.post(
//       "http://127.0.0.1:3000/user/login",
//       val
//     );
//     // localStorage.setItem('user', JSON.stringify(existingUser.data.data))
//     const data = await existingUser.data;
//     return data;
//   } catch (error) {
//     throw error?.response?.data;
//   }
// });

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = [];
      state.user = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(userRegister.fulfilled, (state: any, action) => {
        state.status = "succeeded";
      })
      .addCase(userRegister.rejected, (state: any, action) => {
        state.status = "failed";
        // console.log("In Redux",action.error);
        state.error = action.error.message;
      });
    //   .addCase(userLogin.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(userLogin.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.token = action.payload.data;
    //   })
    //   .addCase(userLogin.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.error.message;
    //   });
  },
});

export const { logout } = UserSlice.actions;
export default UserSlice.reducer;
