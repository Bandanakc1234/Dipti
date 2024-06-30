import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Gallary from './component/pages/Gallary'
import Giftcard from './component/pages/Giftcard'
import Services from './component/pages/Services'

const MyRoutes = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/about" element = {<About/>} />
    <Route path="/contact" element = {<Contact/>} />
    <Route path="/gallary" element = {<Gallary/>} />
    <Route path="/giftcard" element = {<Giftcard/>} />
    <Route path="/services" element = {<Services/>} />

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default MyRoutes