import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root.jsx'
import Banner from './Components/Banner.jsx'

const router=createBrowserRouter([{
   path:'/',
   element:<Root></Root>,
   children:[{
    path:'/',
    element:<Banner></Banner>
   }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    
  </StrictMode>,
)
