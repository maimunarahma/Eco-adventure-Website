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
import Error404 from './Components/Error404.jsx'
import UpdatePassword from './Components/UpdatePassword.jsx'
import MyProfile from './Components/MyProfile.jsx'
import Privet from './route/privet.jsx'
import About from './Components/About.jsx'
import ProfileUpdate from './Components/ProfileUpdate.jsx'
import Experience from './Components/Experience.jsx'
import River from './Components/River.jsx'


const router=createBrowserRouter([{
   path:'/',
   element:<Authentication><Root></Root></Authentication>,
   errorElement:<Error404></Error404>,
   children:[{
    path:'/',
    element:<Banner></Banner>,
    loader:()=>fetch(`travels.json`)
   },
  {
    path:'/details/:id',
    element:<Details></Details>,
    loader:()=>fetch(`travels.json`),
  

  },{
    path:'login',
    element: <Authentication><Login></Login></Authentication>
  },{
    path:'login/register',
    element:<Authentication><SignUp></SignUp></Authentication>
  },{
    path:'/updatePassword',
    element:<UpdatePassword></UpdatePassword>
  },{
    path:'myProfile',
    element:<Privet><MyProfile></MyProfile></Privet>,
  },{
    path:'about',
    element:<About></About>
  },{
    path:'/myProfile/update',
    element:<ProfileUpdate></ProfileUpdate>
  },{
    path:'experience',
    element:<Experience></Experience>
  },
  {
    path:'/experience/river',
    element:<River></River>,
    loader:()=>fetch(`travels.json`)
  }
]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
    <RouterProvider router={router}>

</RouterProvider>
    </Authentication>
   
    
  </StrictMode>,
)
