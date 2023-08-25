import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const create_users= createAsyncThunk(
    'create_users', async(datos)=>{
        try {
            const {data}=await axios.post ('http://localhost:8083/api/users/register', datos)
            console.log(data.response);
            return data.response
        } catch (error) {
            console.log(error);
            return null
        }
    }
)
const usersActions ={create_users}
export default usersActions