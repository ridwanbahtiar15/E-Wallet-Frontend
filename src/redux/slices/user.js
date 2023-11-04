import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosLogin, axiosLogout } from "../../utils/https/auth";

const initialState = {
  isUserAvailable: false,
  userInfo: null,
  error: null,
  isPending: false, //bisa untuk animasi laoding
  isRejected: false, //bisa untuk errormessage
  isFulfilled: false,
};

const loginThunk = createAsyncThunk("user/login", async ({ body, cb }, { rejectWithValue }) => {
  try {
    const { data } = await axiosLogin(body);
    console.log(data);
    if (cb) cb();

    return data;
  } catch (error) {
    const errObj = {
      status: error.response.status,
      message: error.response.data.msg,
    };
    return rejectWithValue(errObj);
  }
});

const logoutThunk = createAsyncThunk("user/logout", async ({ jwt, cb }, { rejectWithValue }) => {
  try {
    const { data } = await axiosLogout(jwt);
    console.log(data);
    if (cb) cb();

    return data;
  } catch (error) {
    const errObj = {
      status: error.response.status,
      message: error.response.data.msg,
    };
    return rejectWithValue(errObj);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (prevState) => {
        return {
          ...prevState,
          isPending: true,
          isRejected: false,
          isFulfilled: false,
          error: null,
        };
      })
      .addCase(loginThunk.rejected, (prevState, { payload }) => {
        return {
          ...prevState,
          isPending: false,
          isRejected: true,
          error: payload,
        };
      })
      .addCase(loginThunk.fulfilled, (prevState, { payload }) => {
        return {
          ...prevState,
          isPending: false,
          isFulfilled: true,
          isUserAvailable: true,
          userInfo: payload.data,
        };
      })
      .addCase(logoutThunk.pending, (prevState) => {
        return {
          ...prevState,
          isPending: true,
          isRejected: false,
          isFulfilled: false,
          error: null,
        };
      })
      .addCase(logoutThunk.rejected, (prevState, { payload }) => {
        return {
          ...prevState,
          isPending: false,
          isRejected: true,
          error: payload,
        };
      })
      .addCase(logoutThunk.fulfilled, (prevState, { payload }) => {
        return {
          ...prevState,
          isPending: false,
          isFulfilled: true,
          isUserAvailable: false,
          token: null,
          userInfo: null,
        };
      });
  },
});

export const userAction = {
  ...userSlice.actions,
  loginThunk,
  logoutThunk,
};
export default userSlice.reducer;
