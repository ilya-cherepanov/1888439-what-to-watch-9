import request, {AxiosError} from 'axios';
import {toast} from 'react-toastify';
import {ErrorType} from '../types/error';
import {HTTPCode} from '../constants';
import {store} from '../store';
import {setErrorMessage} from '../store/slices/user-data';
import {dropToken} from './token';


const processAxiosError = (error: ErrorType): AxiosError => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  return error;
};


const errorHandle = (error: ErrorType): void => {

  const {response} = processAxiosError(error);

  if (response) {
    switch (response.status) {
      case HTTPCode.BadRequest:
        toast.info(response.data.error);
        break;
      case HTTPCode.Unauthorized:
        toast.info(response.data.error);
        break;
      case HTTPCode.NotFound:
        toast.info(response.data.error);
        break;
    }
  }
};


const checkAuthErrorHandle = (error: ErrorType): void => {
  const {response} = processAxiosError(error);

  if (response) {
    switch (response.status) {
      case HTTPCode.Unauthorized:
        dropToken();
        break;
    }
  }
};


const loginErrorHandle = (error: ErrorType): void => {
  const {response} = processAxiosError(error);

  if (response) {
    switch (response.status) {
      case HTTPCode.BadRequest:
        store.dispatch(setErrorMessage(response.data.error));
        break;
    }
  }
};


export {errorHandle, checkAuthErrorHandle, loginErrorHandle};
