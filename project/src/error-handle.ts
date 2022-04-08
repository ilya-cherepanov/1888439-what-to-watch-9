import request from 'axios';
import {toast} from 'react-toastify';
import {ErrorType} from './types/error';
import {HTTPCode} from './constants';
import {store} from './store';
import {setErrorMessage} from './store/slices/user-data';


const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

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


const loginErrorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTPCode.BadRequest:
        store.dispatch(setErrorMessage(response.data.error));
        break;
    }
  }
};


export {errorHandle, loginErrorHandle};
