import { createSlice } from '@reduxjs/toolkit'; 

export const slice = createSlice({
  name: 'customers', 
  initialState: {
    loading: false, 
    error: null, 
    data: [], 
  }, 
  reducers: {
    trigger: (state, action) => { 
      state.loading = true; 
    }, 
    success: (state, action) => { 
      state.data = action.payload; 
    }, 
    failure: (state, action) => {
      state.error = action.payload; 
    }, 
    fullfill: (state, action) => {
      state.loading = false; 
    }, 
  }, 
});

export const acitons = slice.actions; 

export const selectors = state => state.customers; 

export default slice.reducer; 