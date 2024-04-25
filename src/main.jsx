import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import Main from './layout/Main.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('https://coffee-store-server-iota-two.vercel.app/coffee')
      },
      {
        path:"addCoffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path: '/signup',
        element:<SignUp></SignUp>
      },
      {
        path: '/signin',
        element:<SignIn></SignIn>
      },
      {
        path:'/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-iota-two.vercel.app/user')
      },
      {
        path:"updateCoffee/:id",
        element:<UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`https://coffee-store-server-iota-two.vercel.app/coffee/${params.id}`)
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
