import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'


const read_pag_chap=createAsyncThunk(
    'read_pag_chap',
    async(manga_id , page)=>{
      try {
        const {data}=await axios.get(`http://localhost:8083/api/chapters/chapterPag?manga_id=${manga_id}&page=${page}`)
        console.log(data);
        return {
          chapters: data.response, // Datos de productos y electrodomésticos
          prevPage: data.prev,      // Valor prev
          nextPage: data.next,      // Valor next
          currentPage:data.currentPage // Total de páginas
        };
      } catch (error) {
        console.log(error);
      return null
      }
    }
  )
  const chapterActions={read_pag_chap}
  export default chapterActions