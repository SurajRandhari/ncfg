import React from 'react'
import Home from './pages/Home/Home'
import AboutUs from './pages/About/AboutUs'
import Services from './pages/Services/Services'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChildrenMinistry from './pages/Services/ChildrenMinistry'
import YouthMinistry from './pages/Services/YouthMinistry'
import EvangeismMinistry from './pages/Services/EvangeismMinistry'
import PastoralMinistry from './pages/Services/PastoralMinistry'
import WomanMinistry from './pages/Services/WomanMinistry'
import BibleMinistry from './pages/Services/BibleMinistry'

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
      <Route path="about" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="children" element={<ChildrenMinistry />} />
      <Route path="evangelism-ministry" element={<EvangeismMinistry />} />
      <Route path="youth-ministry" element={<YouthMinistry />} />
      <Route path="pastoral-ministry" element={<PastoralMinistry />} />
      <Route path="woman-ministry" element={<WomanMinistry />} />
      <Route path="bible-ministry" element={<BibleMinistry />} />
      <Route path="service2" element={<Services />} />
      <Route path="contact" element={<ChildrenMinistry />} />
      </Route>
    </Routes>
    </BrowserRouter>
     

  )
}

export default App