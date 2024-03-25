import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'
import AboutUs from './pages/About/AboutUs.jsx'
import Services from './pages/Services/Services.jsx'
import ChildrenMinistry from './pages/Services/ChildrenMinistry.jsx'
import EvangeismMinistry from './pages/Services/EvangeismMinistry.jsx'
import YouthMinistry from './pages/Services/YouthMinistry.jsx'
import PastoralMinistry from './pages/Services/PastoralMinistry.jsx'
import WomanMinistry from './pages/Services/WomanMinistry.jsx'
import BibleMinistry from './pages/Services/BibleMinistry.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='services' element={<Services />} />
      <Route path='children-ministry' element={<ChildrenMinistry />} />
      <Route path='evangelism' element={<EvangeismMinistry />} />
      <Route path='youth-ministry' element={<YouthMinistry />} />
      <Route path='pastoral-ministry' element={<PastoralMinistry />} />
      <Route path='woman-ministry' element={<WomanMinistry />} />
      <Route path='bible-teaching' element={<BibleMinistry />} />

      
      <Route path='service2' element={<Services />} />
      {/* <Route path='user/:userid' element={<User />} /> */}
     
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
