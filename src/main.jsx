import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Live from './pages/Live.jsx'
import Profile from './pages/Profile.jsx'
import Register from './pages/Register.jsx'
import Social from './pages/Social.jsx'
import './index.css'
import MainContain from './Componentes/MainContain'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {index:true, element: <MainContain/> },
      {path: 'social', element: <Social/>},
      {path: 'register', element: <Register/>},
      {path: 'live', element: <Live/>},
      {path: 'profile', element: <Profile/>},

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
