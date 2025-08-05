import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProviders from './Pages/Firebase/Providers/AuthProviders.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProviders>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
   </div>
   </AuthProviders>
  </StrictMode>,
)
