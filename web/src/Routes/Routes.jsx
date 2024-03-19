import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../App'
import Auth from '../Authentication/auth'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/auth',
        element: <Auth />
    }
])
