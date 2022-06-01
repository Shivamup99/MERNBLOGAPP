import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category:[],
    isFetching:false,
    error:false
}

const categorySlice = createSlice({
  name:'category',
  initialState,
  reducers: {
       processStart:(state)=>{
           state.isFetching=true
       },
       processSuccess:(state,action)=>{
        state.isFetching=false
        state.category=action.payload
    },
    processFailed:(state)=>{
        state.isFetching=false
        state.error=true
    }
  }
});

export const {processFailed,processStart,processSuccess} = categorySlice.actions
export const selectedCategory = state=>state.category 
export default categorySlice.reducer