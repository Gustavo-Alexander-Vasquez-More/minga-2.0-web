import React from 'react';
import { useNavigate } from 'react-router-dom';
const authorProtect=()=>{
const navigate=useNavigate()
let authorRole=localStorage.getItem('role')
if(authorRole =='1' || authorRole =='2'){
    navigate('/createManga')
}else{
navigate('/notAllow')
}

}
export default authorProtect