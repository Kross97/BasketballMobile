import { createSlice } from "@reduxjs/toolkit";

export const authorization = createSlice({
   name: 'authorization',
   initialState: {
       name: '',
       avatarUrl: '',
       token: '',
   },
   reducers: {
     setAuthData: (state, action) => action.payload.auth,
   },
});
