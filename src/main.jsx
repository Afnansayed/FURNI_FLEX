import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router/Router.jsx'
import AuthProvider from './Providers/AuthProvider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <div className='max-w-[1420px] mx-auto'>
         <RouterProvider router={router} /> 
    </div>
    </AuthProvider>
  </StrictMode>,
)
