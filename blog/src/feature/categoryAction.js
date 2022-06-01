import axios from "axios"
import { processStart ,processFailed , processSuccess } from "./categorySlice"
export const fetchCategory =async(dispatch)=>{
    dispatch(processStart())
    try {
        const res = await axios.get('http://localhost:5000/api/category')
        dispatch(processSuccess(res.data))
    } catch (error) {
        dispatch(processFailed())
    }
}