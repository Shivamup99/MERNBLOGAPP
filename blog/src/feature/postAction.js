import axios from "axios"
import { processFailed, processStart, processSuccess } from "./postSlice"

export const fetchPost =async(dispatch)=>{
    dispatch(processStart())
    try {
        const res = await axios.get('http://localhost:5000/api/posts')
        dispatch(processSuccess(res.data))
    } catch (error) {
        dispatch(processFailed())
    }
} 

export const fetchSinglePost =async(dispatch,id)=>{
    dispatch(processStart())
    try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id.id}`)
        dispatch(processSuccess(res.data))
    } catch (error) {
        dispatch(processFailed())
    }
} 