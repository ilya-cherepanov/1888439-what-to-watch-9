import {createAction} from '@reduxjs/toolkit';


const redirectTo = createAction<string>('redirectTo');


export {redirectTo};
