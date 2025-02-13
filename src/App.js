import { BrowserRouter, Routes, Route } from 'react-router'
import React from 'react';
import Footer from './components/Footer/footer'
import Nav from './components/Nav/nav'
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Tempelate from './components/Templates/tempelate'
import Tempelate1 from './components/Templates/tempelate1';
import Tempelate2 from './components/Templates/tempelate2';



function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tempelate" element={<Tempelate />} />
      <Route path="/tempelate1" element={<Tempelate1 />} />
      <Route path="/tempelate2" element={<Tempelate2 />} />




    


    </Routes>
    <Footer></Footer>
  </BrowserRouter>

  );
}

export default App;
