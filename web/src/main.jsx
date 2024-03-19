import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import './index.css'
import '@fontsource/dm-sans'
import 'react-toastify/dist/ReactToastify.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '../src/Routes/Routes.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
