import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

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
      console.info(error);

      throw error.response.data;
    }
  }
);

export const venderRegistr = createAsyncThunk(
  "venderRegistr",
  async (val: any) => {
    try {
      const data = {
        ...val,
        phone: Number(val.phone),
        role: "vender",
        isActive: false,
      };
      const creatVender = await axios.post(
        "http://127.0.0.1:3000/user/signUpVender",
        data
      );
      return creatVender.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }
);

export const userLogin = createAsyncThunk("userLogin", async (val: any) => {
  try {
    const existingUser = await axios.post(
      "http://127.0.0.1:3000/user/login",
      val
    );
    localStorage.setItem("token", JSON.stringify(existingUser.data.token));
    // localStorage.setItem("user", JSON.stringify(existingUser.data.user));
    
    const data = await existingUser.data;
    return data;
  } catch (error: any) {
    // console.info(error);
    throw error.response.data;
  }
});

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogOut: (state:any) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token")
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
        state.error = action.error.message;
      })
      .addCase(venderRegistr.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(venderRegistr.fulfilled, (state: any, action) => {
        state.status = "succeeded";
      })
      .addCase(venderRegistr.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(userLogin.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state: any, action) => {
        state.status = "succeeded";

        // console.log("TOKEN",action.payload.token);
        
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(userLogin.rejected, (state: any, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { userLogOut } = UserSlice.actions;
export default UserSlice.reducer;
