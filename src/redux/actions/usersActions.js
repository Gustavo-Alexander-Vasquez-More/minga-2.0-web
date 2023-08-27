import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

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
      console.log(data.response);
      let token = JSON.stringify(data.response.token);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(data.response.user));
      localStorage.setItem('photo', JSON.stringify(data.response.user.photo));

      return data.response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);

const usersActions = { create_users, LogIn_users };
export default usersActions;
