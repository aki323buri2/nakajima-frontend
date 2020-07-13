import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import customersReducer from '../features/customers/customersSlice';
import logger from 'redux-logger'; 

export default configureStore({
  reducer: {
    counter: counterReducer,
    customers: customersReducer, 
  },
  middleware: [
    logger, 
  ], 
});
