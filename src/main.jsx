import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthProvider from './providers/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>

    </AuthProvider>

  </StrictMode>,
)
