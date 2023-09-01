import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Index from '../src/pages/index'
import Register from '../src/pages/register';
import LogIn from '../src/pages/logIn'
import CreateManga from '../src/pages/createManga';
import NotAllow from '../src/pages/notAllow'
import AuthorProtect from './authorProtected';
import Mangas from '../src/pages/mangas';
const router = createBrowserRouter([
  {
      path:"/",
      element:<Index/>,
  },
  {
    path:"/Register",
    element:<Register/>, 
  },
  {
    path:"/LogIn",
    element:<LogIn/>, 
  },
  {
    path: '/createManga',
    element: <AuthorProtect><CreateManga /></AuthorProtect>
  },
  {
    path:"/notAllow",
    element:<NotAllow/>, 
  },
  {
    path:"/mangas",
    element:<Mangas/>, 
  },
 ])
  export default router