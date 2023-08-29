import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
import Swal from "sweetalert2";

const create_manga=createAsyncThunk(
    'create_manga',
    async(datos)=>{
        try {
        const {data}=await axios.post('http://localhost:8083/api/mangas/Create', datos)
        console.log(data);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Manga created!',
            showConfirmButton: false,
            timer: 1500,
          });
        return data.response
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Manga is not created!',
    
          })
        return null
        }
    }
)
const mangaActions={create_manga}
export default mangaActions