import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/configureStore.js"
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from './Component/Pages/Layout.jsx'
import { Signup } from './Component/Pages/Signup.jsx'
import { Login } from './Component/Pages/Login.jsx'
import { Index } from './Component/Pages/Index.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Index />}>
//       <Route path="todos" element={<Container />} />
//       <Route path="auth" element={<Signup />} />
//       <Route path="auth/login" element={<Login />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    {/* <RouterProvider router={router} /> */}
    <Routes>
    <Route path="/" element={<Index />} />
    <Route path="auth" element={<Signup />} />
    <Route path="auth/login" element={<Login />} />
    <Route path='/todos' element={<Layout />} >
    </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
