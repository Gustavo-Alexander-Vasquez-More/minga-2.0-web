import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import Swal from "sweetalert2";

// Acción asincrónica para crear usuarios

const create_users = createAsyncThunk(
  'create_users', 
  async (datos) => {
    try {
      const { data } = await axios.post('http://localhost:8083/api/users/register', datos);
      console.log(data.response);
      return data.response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);

// Acción asincrónica para iniciar sesión
const LogIn_users = createAsyncThunk(
    'LogIn_users', 
    async (datas) => {
        try {
        
      const { data } = await axios.post('http://localhost:8083/api/users/SignIn', datas);
      let token = data.response.token;
      localStorage.setItem('token', token);
      localStorage.setItem('user', data.response.user); 
      localStorage.setItem('photo', data.response.photo);
      localStorage.setItem('role', data.response.role )
      console.log(data.response);
    return data.response;
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User not registered!',

      })
      return null;
    }
  }
)


const usersActions = { create_users, LogIn_users };
export default usersActions;
