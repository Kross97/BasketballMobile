import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUp, signIn } from "../../../api/auth";
import {authorization} from "../../reducers/auth";

export const authSignUp = createAsyncThunk(
  'signUp/',
  async (dataRequest, { dispatch}) => {
      try {
          const authData = await signUp('/Auth/SignUp', JSON.stringify(dataRequest.signUpForm));
          dispatch(authorization.actions.setAuthData({ auth: authData}));
          dataRequest.redirectSuccess();
      } catch(err) {
        console.log('SIGN_UP => ', err);
      }
  },
);

export const authSignIn = createAsyncThunk(
    'signIn/',
    async (dataRequest, { dispatch}) => {
      try {
          const authData = await signIn('/Auth/SignIn', JSON.stringify(dataRequest.signInForm));
          dispatch(authorization.actions.setAuthData({ auth: authData}));
          dataRequest.redirectSuccess();
      }  catch(err) {
          console.log('SIGN_IN => ', err);
      }
    },
)
