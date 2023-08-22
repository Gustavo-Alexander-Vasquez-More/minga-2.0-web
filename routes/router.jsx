import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Index from '../src/pages/index'
import Footer from '../src/components/footer';
const router = createBrowserRouter([
  {
      path:"/",
      element:<Index/>,
  },
 ])
  export default router