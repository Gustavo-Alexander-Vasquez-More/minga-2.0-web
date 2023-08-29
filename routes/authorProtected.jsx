import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotAllow from '../src/pages/notAllow';
import CreateManga from '../src/pages/createManga';
const AuthorProtect = ({ page, role, notPage }) => {
role=localStorage.getItem('role')
notPage=<NotAllow/>
page=<CreateManga/>
if (role === '1' || role === '2') {
  return page;
} else if(role > '2' || role==='0') {
  return notPage
}
};

export default AuthorProtect;
