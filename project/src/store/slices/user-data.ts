import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../constants';
import {UserData} from '../../types/state';
import {LoggedInUser} from '../../types/user';


const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
  serverErrorMessage: '',
};


export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },

    setUserInfo: (state, action: PayloadAction<LoggedInUser | null>) => {
      state.userInfo = action.payload;
    },

    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.serverErrorMessage = action.payload;
    },

    resetErrorMessage: (state) => {
      state.serverErrorMessage = '';
    },
  },
});


export const {
  setAuthorizationStatus,
  setUserInfo,
  setErrorMessage,
  resetErrorMessage,
} = userData.actions;
