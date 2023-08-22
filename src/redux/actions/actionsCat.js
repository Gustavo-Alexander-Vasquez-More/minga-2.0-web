import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const read_categories= createAsyncThunk(
    'read_categories', async()=>{
        try {
            const {data}=await axios.get ('http://localhost:8083/api/categories')
            console.log(data.response);
            return data.response
        } catch (error) {
            console.log(error);
            return null
        }
    }
)
const actionsCat ={read_categories}
export default actionsCat 