import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Home from './Components/Home.jsx';
import JobDetails from './Components/JobDetails.jsx';
import AppliedJobs from './Components/AppliedJobs.jsx';
import LoginForm from './Components/LoginForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/login", 
        element: <LoginForm></LoginForm>,
        loader: ()=> fetch('../public/jobs.json')
      },
      {
        path:"/job/:jobId", 
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('../public/jobs.json')
      },
      {
        path:"/applied", 
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('../public/jobs.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
