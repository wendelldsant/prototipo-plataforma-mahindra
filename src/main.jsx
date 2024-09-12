import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Live from './pages/Live.jsx'
import Profile from './pages/Profile.jsx'
import Register from './pages/Register.jsx'
import Social from './pages/Social.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Market from './pages/Market.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {index:true, element: <Home/> },
      {path: 'live', element: <Live/>},
      {path: 'social', element: <Social/>},
      {path: 'market', element: <Market/>},
      {path: 'profile', element: <Profile/>},
      {path: 'register', element: <Register/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
