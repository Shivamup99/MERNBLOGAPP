import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts:[],
    isFetching:false,
    error:false
}

const postSlice = createSlice({
  name:'posts',
  initialState,
  reducers: {
       processStart:(state)=>{
           state.isFetching=true
       },
       processSuccess:(state,action)=>{
        state.isFetching=false
        state.posts=action.payload
    },
    processFailed:(state)=>{
        state.isFetching=false
        state.error=true
    }
  }
});

export const {processFailed,processStart,processSuccess} = postSlice.actions
export const selectedPosts = state=>state.posts 
export default postSlice.reducer