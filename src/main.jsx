import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root.jsx'
import Banner from './Components/Banner.jsx'
import Details from './Components/Details.jsx'
import Authentication from './Providrs/Authentication.jsx'
import SignUp from './Components/SignUp.jsx'
import Login from './Components/Login.jsx'

const router=createBrowserRouter([{
   path:'/',
   element:<Authentication><Root></Root></Authentication>,
   children:[{
    path:'/',
    element:<Banner></Banner>,
    loader:()=>fetch(`travels.json`)
   },
  {
    path:'/details/:id',
    element:<Details></Details>,
  

  },{
    path:'login',
    element: <Authentication><Login></Login></Authentication>
  },{
    path:'login/register',
    element:<Authentication><SignUp></SignUp></Authentication>
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
    <RouterProvider router={router}>

</RouterProvider>
    </Authentication>
   
    
  </StrictMode>,
)
