import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Components/Layout/Main'
import Home from './Components/Home/Home'
import ViewDetails from './Components/ViewDetails/ViewDetails'
import AppliedJob from './Components/AppliedJob/AppliedJob'
import Statistics from './Components/Statistics/Statistics'
import ErrorPage from './Components/EroorPage/ErrorPage'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/AllData.json')
      },
     {
      path:'detail/:Id',
      element:<ViewDetails></ViewDetails>,
      loader:({params})=>fetch("/AllData.json")
     },
     {
      path:'apply',
      element:<AppliedJob></AppliedJob>,
      loader:()=>fetch('/AllData.json')
     },
     {
      path:'statis',
      element:<Statistics></Statistics>
     }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
